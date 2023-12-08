import skill from '../constants/skill';
import memoria from '../constants/memoria';
import item from '../constants/item';
import material from '../constants/material';
import gift from '../constants/gift';
import quest from '../constants/quest';
import { maxValues, researchEffects, updateSkillStatus } from '../utils/parameters';
import { getEquippedStatus, getStatusMax, getSkillStatusMax, getCalculatedSkillParams } from '../utils/calc';
import { character } from '../constants/character';
import { attributes } from '../constants/other';

const skillParamsKeys = ['damage', 'break', 'heal', 'wait']
const currentSkillParamsKeys = ['currentDamage', 'currentBreak', 'currentHeal', 'currentWait']


export const initialize = () => {

  //研究効果
  const storedData = JSON.parse(localStorage.getItem('researchEffects'));
  if (!storedData) {
    localStorage.setItem('researchEffects', JSON.stringify(researchEffects));
  }
  Object.entries(storedData).forEach(([key, value]) => {
    researchEffects[key] = value
  })



  //キャラ
  for (const [charName, charEl] of Object.entries(character)) {

    charEl.name = charName
    charEl.equippedStatus = {}
    charEl.currentStatus = {}

    //localStorageにデータがあれば入れる（無ければ{}のみ作っておけばOKでいいはず）
    const storedData = JSON.parse(localStorage.getItem(charName));
    if (!storedData) {
      localStorage.setItem(charName, JSON.stringify({
      }));
    }

    //星
    charEl.currentStar = storedData?.star ?? charEl.star

    //装備
    charEl.memoria = storedData?.memoria ?? ''
    charEl.weapon = storedData?.weapon ?? ''
    charEl.armor = storedData?.armor ?? ''
    charEl.accessory = storedData?.accessory ?? ''

    //ステータス
    character[charName].equippedStatus = getEquippedStatus(charName)
    character[charName].currentStatus = { ...character[charName].equippedStatus }//暫定

    //物理か魔法か
    const attributeType = charEl.status.物攻 >= charEl.status.魔攻 ? '物' : '魔'
    const currentPow = charEl.currentStatus[attributeType + '攻']


    //属性耐性
    for (const key of attributes) {
      if (!charEl.attributeResist[key]) {
        charEl.attributeResist[key] = 0
      }
    }




    //キャラ内でのスキル
    charEl.attribute = {}
    charEl.area = {}
    charEl.skillParams = [{}, {}, {}]
    for (const [index, skillName] of charEl.skill.entries()) {
      // console.log(index, skillName,skill[skillName])

      charEl.attribute[skill[skillName].attribute] = true
      charEl.area[skill[skillName].area] = true
      charEl['damage' + index] = skill[skillName].damage ?? 0
      charEl['break' + index] = skill[skillName].break ?? 0
      charEl['heal' + index] = skill[skillName].heal ?? 0
      charEl['wait' + index] = skill[skillName].wait ?? 0


      // // if( charName.includes('マリオン')){
      // //   console.log(index, skillName,skill[skillName].break / 100,currentPow,125 * (1 - 100 / (currentPow + 100)))
      // // }

      //スキル値の設定
      skill[skillName].params = {}
      skillParamsKeys.forEach(key=>{
        charEl.skillParams[index][key] = skill[skillName][key]
        skill[skillName].params[key] = skill[skillName][key]
      })

      //計算値の設定
      currentSkillParamsKeys.forEach(key => {
        const currentValue = getCalculatedSkillParams({ key, currentPow, skillName, charEl: character[charName] })
        character[charName].skillParams[index][key] = currentValue
        skill[skillName].params[key] = currentValue
      })




      //得意属性
      if (index === 2) {
        charEl.strongAttribute = skill[skillName].attribute
      }

      //スキル所持者とスキル番号
      skill[skillName].owner = charName
      skill[skillName].number = index === 2 ? 'バーストスキル' : 'スキル' + (index + 1)

    }

  }




  //スキル
  for (const [skillName, skillEl] of Object.entries(skill)) {

    skillEl.name = skillName
    skillEl.targetFaction = skillEl.heal ? '味' : '敵'

    if (!skillEl.currentDamage) skillEl.currentDamage = skillEl.damage
    if (!skillEl.currentBreak) skillEl.currentBreak = skillEl.break
    if (!skillEl.currentHeal) skillEl.currentHeal = skillEl.heal

    if (!skillEl.text) {
      skillEl.text = '追加効果なし'
    }
    // if( !skillEl.effects){
    //   skillEl.effects = []
    // }

    if (skillEl.effects) {
      for (const effectEl of skillEl.effects) {

        if (!effectEl.target) {
          effectEl.target = '使用スキルのみ'
        }
        // if( skillName === 'カッツェバイセン'){
        //   console.log(skillEl)
        // }

        if (effectEl.text.includes('クリティカルダメージ+')) {
          effectEl.effectItem = 'ally.criticalDamageGiven'
          if (!effectEl.value) {
            effectEl.value = Number(effectEl.text.split('+')[1].split('%')[0])
          }
        } else if (effectEl.text.includes('バーストスキルダメージ+')) {
          effectEl.effectItem = 'ally.burstDamageGiven'

          if (!effectEl.value) {
            effectEl.value = Number(effectEl.text.split('+')[1].split('%')[0])
          }
        } else if (effectEl.text.includes('ダメージ+')) {
          effectEl.effectItem = 'ally.damageGiven'
          if (!effectEl.value) {
            effectEl.value = Number(effectEl.text.split('+')[1].split('%')[0])
          }
        }


      }

    }




  }
  // console.log(skill)

  //アイテム
  for (const [name, el] of Object.entries(item)) {
    el.name = name

    //アイテムに設定した素材個数を素材データに共有
    Object.entries(el.materials).forEach(([materialName, pieces]) => {
      // console.log(materialName, pieces)
      if (!material[materialName].items) {
        material[materialName].items = {}
      }
      material[materialName].items[name] = pieces
    })

  }

  //素材
  for (const [name, el] of Object.entries(material)) {
    el.name = name

    if (!el.items) {
      el.items = {}
    }

  }

  //特性
  for (const [name, el] of Object.entries(gift)) {
    el.name = name
    el.owner = {
      character: [],
      material: [],
    }
  }

  //クエスト
  for (const [name, el] of Object.entries(quest)) {
    el.name = name

    el.questType = name.includes('イベント')
      ? 'イベント'
      : (name.startsWith('N') || name.startsWith('H') || name.startsWith('VH'))
        ? 'スコアバトル'
        : 'ダンジョン'

  }




  maxValues.character = { ...getStatusMax(character, 'character'), ...getSkillStatusMax() }
  maxValues.skill = { ...getSkillStatusMax() }
  maxValues.memoria = { ...getStatusMax(memoria, 'memoria') }
  maxValues.item = { ...getStatusMax(item) }

  // console.log(maxValues)



}


