import { character } from '../constants/character';
import skill from '../constants/skill';
import memoria from '../constants/memoria';
import item from '../constants/item';
import material from '../constants/material';
import gift from '../constants/gift';
import quest from '../constants/quest';
import { maxValues, researchEffects, updateSkillStatus } from '../utils/parameters';

const roles = ['アタッカー', 'ブレイカー', 'ディフェンダー', 'サポーター']
const attributeKeys = ['火', '氷', '風', '雷', '斬', '突', '打']
// const statusKeys = ['HP','素早さ','物攻','物防','魔攻','魔防']

const effectMapping = {
  'HP': '装飾品のHPアップ',
  '素早さ': '装飾品の素早さアップ',
  '物攻': '武器の物攻アップ',
  '魔攻': '武器の魔攻アップ',
  '物防': '防具の物防アップ',
  '魔防': '防具の魔防アップ'
};

export const getEquippedStatus = (charName) => {

  const charEl = character[charName]
  const newStatus = {}

  Object.keys(charEl.status).forEach(key => {

    const effectKey = effectMapping[key];
    const eqMul = 1 + (effectKey && ((researchEffects?.[effectKey]) ?? 0) / 100);

    newStatus[key] = Math.floor(
      charEl.status[key] * (1 + (memoria[charEl.memoria]?.status?.[key] ?? 0) / 100)
      + (item[charEl.weapon]?.status?.[key] ?? 0)
      + (item[charEl.armor]?.status?.[key] ?? 0)
      + (item[charEl.accessory]?.status?.[key] !== undefined ? Math.floor(item[charEl.accessory].status[key] * eqMul) : 0)
    )

  })

  return newStatus
}


export const getStatusMax = (data, category) => {

  const statusType = category === 'character' ? 'currentStatus' : 'status'
  const maxValues = {
    HP: 0,
    素早さ: 0,
    物攻: 0,
    物防: 0,
    魔攻: 0,
    魔防: 0,
  };

  for (const dataEl of Object.values(data)) {
    for (const key in dataEl[statusType]) {
      if (maxValues[key] < dataEl[statusType][key]) {
        maxValues[key] = dataEl[statusType][key];
      }
    }
  }

  return (maxValues);
}

export const getSkillStatusMax = () => {

  const maxValues = {
    'damage': 0,
    'break': 0,
    'heal': 0,
    'wait': 0,
    'currentDamage': 0,
    'currentBreak': 0,
    'currentHeal': 0,
    'currentWait': 0,
  };

  Object.values(skill).forEach(dataEl => {
    Object.keys(maxValues).forEach(key => {
      if (maxValues[key] < dataEl.params[key]) {
        maxValues[key] = dataEl.params[key]
      }
    })
  })

  // console.log(maxValues)



  return (maxValues);

}

// export const updateCalculatedSkillParams = ({ charEl }) => {

//   const attributeType = charEl.status.物攻 >= charEl.status.魔攻 ? '物' : '魔'
//   const currentPow = charEl.currentStatus[attributeType + '攻']

//   for (const [index, skillName] of charEl.skill.entries()) {
//     const currentDamage = (Math.floor((112 / 9) * currentPow / 100 * (60 + 9) * skill[skillName].damage / 100) || 0)
//     const currentBreak = (Math.floor(125 * (1 - 100 / (currentPow + 100)) * skill[skillName].break / 100) || 0)
//     const currentHeal = (Math.floor(0.45 * currentPow * skill[skillName].heal / 100) || 0)
//     const currentWait = Math.floor(57600 / charEl.currentStatus.素早さ + skill[skillName].wait - 200)

//     charEl.skillParams[index].currentDamage = currentDamage
//     charEl.skillParams[index].currentBreak = currentBreak
//     charEl.skillParams[index].currentHeal = currentHeal
//     charEl.skillParams[index].currentWait = currentWait
//     skill[skillName].params.currentDamage = currentDamage
//     skill[skillName].params.currentBreak = currentBreak
//     skill[skillName].params.currentHeal = currentHeal
//     skill[skillName].params.currentWait = currentWait

//   }





// }

export const getCalculatedSkillParams = ({ key, currentPow, skillName, charEl }) => {


  const params = {
    own: {
      damageGiven: 0,
    },
    ally: {
      damageGiven: 0,
    },
    enemy: {
      damageGiven: 0,
    },


  }

  skill[skillName].effects && skill[skillName].effects.forEach(effectEl => {
    Object.entries(effectEl.effectItems).forEach(([effectItem, value]) => {

      //攻撃後、回復後ならスキップ
      // if (effectEl.timing === '攻撃後' || effectEl.timing === '回復後') {
      // } else {
      //   console.log(skillName, effectItem, effectEl.timing)
      // }

      // if (!effectEl.target) {
      //   console.log(skillName, skill[skillName])
      // }

      //ターゲット
      const target = (effectEl.target === '使用スキルのみ' || effectEl.target === '自' || effectEl.target === undefined)
        ? 'own'
        : (effectEl.target.includes('味'))
          ? 'ally'
          : (effectEl.target.includes('敵'))
            ? 'enemy'
            : ''
      // if (!target) console.log('!target', skillName, effectItem)

      //効果ごとparamsに入れる
      switch (effectItem) {
        case 'ダメージ+':
        case 'スキルダメージ+':
          // console.log(params, target)
          params[target].damageGiven += value;
          break;

        default: break;
      }
    })
  })

  if (key === 'currentDamage') {
    const damageGiven = (100 + params.own.damageGiven + params.ally.damageGiven) / 100

    return skill[skillName].damage
      ? Math.floor((112 / 9) * currentPow / 100 * (60 + 9) * (skill[skillName].damage / 100) * damageGiven)
      : 0
    //防御100
    //(112/9)*攻/敵防*スキル威力*ダメージ上昇*受けるダメージ上昇*耐性
    //*(スキル威力)/(防御)*(スキル威力上昇)*(ダメージ上昇系)*(受けるダメージ上昇)*(耐性)*(乱数1～1.01)
  }
  if (key === 'currentBreak') {
    return (Math.floor(125 * (1 - 100 / (currentPow + 100)) * skill[skillName].break / 100) || 0)
    //* (ブレイクダメージ上昇) * (耐性)
  }
  if (key === 'currentHeal') {
    return (Math.floor(0.45 * currentPow * skill[skillName].heal / 100) || 0)
    //* ( 1 + 回復量上昇 + 単体/全体回復量上昇)
    //0.45 * 魔/物攻撃力(技の属性に依存) * スキルの回復力 * ( 1 + 回復量上昇 + 単体/全体回復量上昇)
  }
  if (key === 'currentWait') {
    return Math.floor(57600 / charEl.currentStatus.素早さ + skill[skillName].wait - 200)
  }
  return 0;
}


