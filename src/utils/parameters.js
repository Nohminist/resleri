import skill from '../constants/skill';
import { preciseFloor } from '../utils/commonUtils';

const storedColorMatchedCharaOnly = localStorage.getItem('colorMatchedCharaOnly');

export const currentParameters = {
  colorMatchedCharaOnly: storedColorMatchedCharaOnly === 'false' ? false : true,//undefinedならtrue
};

export const maxValues = {}
export const researchEffects = {
  'アタッカーのHPアップ': 0,
  'アタッカーの与ダメージアップ': 0,
  'ブレイカーのHPアップ': 0,
  'ブレイカーの与ダメージアップ': 0,
  'ディフェンダーのHPアップ': 0,
  'ディフェンダーのダメージ耐性アップ': 0,
  'サポーターのHPアップ': 0,
  'サポーターのダメージ耐性アップ': 0,

  '戦闘アイテムのHP回復量アップ': 0,
  '戦闘アイテムの与ダメージアップ': 0,
  '戦闘アイテムの強化効果アップ': 0,
  '戦闘アイテムのマイナス効果アップ': 0,
  '武器の物攻アップ': 0,
  '武器の魔攻アップ': 0,
  '防具の物防アップ': 0,
  '防具の魔防アップ': 0,
  '装飾品のHPアップ': 0,
  '装飾品の素早さアップ': 0,
}

const parameterKeys = [


  'damageGivenBuff',
  'breakGivenBuff',
  'healGivenBuff',
  'damageTakenBuff',
  'breakTakenBuff',
  'healTakenBuff',

  'damageGivenDebuff',
  'breakGivenDebuff',
  'healGivenDebuff',
  'damageTakenDebuff',
  'breakTakenDebuff',
  'healTakenDebuff',

  'powerBuff',
  'burstDamageGivenBuff',
  'criticalDamageGivenBuff',
  'currentHP',
  'isCritical',
  'isBreak',
  'isPoisoned',
  'isParalyzed',
  'isAilment',
  'count',
  'buffCount',
  'isBuffCountMax',
  'isEnemyCount1',
  'isEnemyCountMax',
  'isHPLowMax',
];

export const paramKeyLabelMap = {
  ally: {
    'powerBuff': '威力UP(%)',
    'damageGivenBuff': 'ダメージUP(%)',
    'breakGivenBuff': 'ブレイクダメージUP(%)',
    'burstDamageGivenBuff': 'バーストダメージUP(%)',
    'criticalDamageGivenBuff': 'クリティカルダメージUP(%)',
    'currentHP': '自HP(%)',
    'isCritical': 'クリティカル',
    'isBuffCountMax': '自身に付与されている強化効果数が最大',
    'isEnemyCountMax': '敵の数が複数かつ最大',
    'isHPLowMax': '「自身のHPが少ないほど」の最大効果',
  },
  enemy: {
    'damageTakenDebuff': '敵/被ダメージUP(%)',
    'currentHP': '敵HP(%)',
    'count': '敵の数',
    'isBreak': '敵/ブレイク状態',
    'isPoisoned': '敵/毒状態',
    'isParalyzed': '敵/麻痺',
  }
}



const createParamsObject = (keys) => {
  return Object.fromEntries(keys.map(key => [key, 0]));
}

export const commonParams = {
  ally: createParamsObject(parameterKeys),
  enemy: createParamsObject(parameterKeys),
};

export const currentEnemyAttributeResist = {
  火: 0,
  氷: 0,
  雷: 0,
  風: 0,
  斬: 0,
  打: 0,
  突: 0,
}


const defaultValues = {
  currentHP: 100,
  count: 1,

  isBreak: false,
  isCritical: false,

  // 必要に応じて他のキーをここに追加
};
export const getLocalStorage = (faction, paramKey) => {
  const storedValue = localStorage.getItem(`${faction}.${paramKey}`);

  // キーが'isBreak'で、ローカルストレージの値が文字列の'true'の場合、trueを返します。
  // そうでない場合は、storedValueがnullまたはundefinedでなければ、それをNumberに変換、
  // そうでなければdefaultValuesからデフォルト値を取得します。
  if (paramKey.startsWith('is')) {
    return storedValue === 'true' || defaultValues[paramKey];
  } else {
    return storedValue !== null && storedValue !== undefined
      ? Number(storedValue)
      : defaultValues[paramKey] || 0;  // キーがdefaultValuesに存在しない場合、0をデフォルト値として使用
  }
};

const conditionFactionMap = {
  '自HP100%': () => commonParams.ally.currentHP === 100,
  '自HP70%以上': () => commonParams.ally.currentHP >= 70,
  '自HP50%以上': () => commonParams.ally.currentHP >= 50,
  '敵HP50%以上': () => commonParams.enemy.currentHP >= 50,
  '敵HP50%以下': () => commonParams.enemy.currentHP <= 50,
  'WEAK攻撃': (attribute) => currentEnemyAttributeResist[attribute] <= -25,
  '敵被ダメージUP': () => commonParams.enemy.damageTakenDebuff >= 1,
  // '敵1': () => commonParams.enemy.count === 1,
  '敵1': () => !commonParams.ally.isEnemyCountMax,
  '敵数に応じ': () => true,
  'クリティカル': () => commonParams.ally.isCritical,
  '敵ブレイク': () => commonParams.enemy.isBreak,
  '敵毒': () => commonParams.enemy.isPoisoned,
  '敵麻痺': () => commonParams.enemy.isParalyzed,
  '敵状態異常': () => commonParams.enemy.isPoisoned || commonParams.enemy.isParalyzed,
  '自強化効果数に応じ': () => commonParams.ally.isBuffCountMax,
  '自HPが多いほど': () => true,
  '自HPが少ないほど': () => true,

}

export const updateSkillStatus = (timing) => {
  for (const skillEl of Object.values(skill)) {

    const mul = {
      ally: {
        damageGiven: commonParams.ally.damageGivenBuff || 0,
        burstDamageGiven: commonParams.ally.burstDamageGivenBuff || 0,
        criticalDamageGiven: commonParams.ally.criticalDamageGivenBuff || 0,
        breakGiven: commonParams.ally.breakGivenBuff || 0,

      },
      enemy: {

      },
    }

    if (skillEl.effects) {
      for (const effectEl of skillEl.effects) {

        // if (effectEl.timing && effectEl.timing.includes('後')) {
        //   continue;
        // }
        if (effectEl.timing) {
          continue;
        }


        const conditionMatched = !effectEl.conditions || effectEl.conditions.every((condition) => {
          const conditionFunction = conditionFactionMap[condition];

          if (!conditionFunction) {
            console.warn(`未定義の条件: ${condition}`);
            return false;
          }
          if (condition === 'WEAK攻撃') {
            return conditionFunction(skillEl.attribute);
          } else {
            return conditionFunction();
          }
        });


        if (conditionMatched) {
          let value = effectEl.value
          if (effectEl.conditions?.length > 0 && effectEl.conditions.includes('敵数に応じ') && commonParams.ally.isEnemyCountMax) {
            value = effectEl.valueMax
          }
          if (effectEl.conditions?.length > 0 && effectEl.conditions.includes('自HPが少ないほど') && commonParams.ally.isHPLowMax) {
            value = effectEl.valueMax
          }

          if (effectEl.effectItem) {
            mul[effectEl.effectItem.split('.')[0]][effectEl.effectItem.split('.')[1]] += value
          } else {
            // console.log(effectEl)
          }
        }

        // if (effectEl.conditions?.includes('自強化効果数に応じ')) {
        //   console.log(mul, conditionMatched, skillEl)
        // }



      }
    }

    // 敵がブレイク状態の場合、耐性値を-50する
    const finalEnemyAttributeResist = commonParams.enemy.isBreak ?
      currentEnemyAttributeResist[skillEl.attribute] - 50 :
      currentEnemyAttributeResist[skillEl.attribute];


    if (skillEl.currentDamage !== undefined) {
      skillEl.currentDamage = Math.max(
        preciseFloor(
          skillEl.damage
          * ((100 + commonParams.ally.powerBuff) / 100)
          * ((100 + mul.ally.damageGiven) / 100)
          * ((100 + commonParams.enemy.damageTakenDebuff) / 100)
          * ((100 - finalEnemyAttributeResist) / 100)
          * (commonParams.ally.isCritical ? ((150 + mul.ally.criticalDamageGiven) / 100) : 1)


        )
        , 0)
    }


    if (skillEl.currentBreak !== undefined) {
      skillEl.currentBreak = Math.max(
        preciseFloor(
          skillEl.break
          * ((100 + mul.ally.breakGiven) / 100)
          * ((100 - finalEnemyAttributeResist) / 100)

        )
        , 0)
    }
  }
}


