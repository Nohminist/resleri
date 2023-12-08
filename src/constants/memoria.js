
const memoria = {
  '冒険は新天地へ': {
    date: '2023/11/30', get: '限定ガチャ',
    rarity: 'SSR',
    status: {
      HP: 16.25,
      素早さ: 6.75,
      物攻: 31.25,
      物防: 13.75,
      魔攻: 16.25,
      魔防: 13.75,
    },
    memoriaAbility: '物理アタックレジストダウン斬Ⅲ',
    text: '物理攻撃時、対象に「斬属性耐性-15%」を2回攻撃を受けるまで付与',
    effects: [
      {
        attributes: ['斬'],
        target: '敵',
        text: '斬属性耐性-15%',
        effectItems: {
          '斬属性耐性-': 15,
        },
      },
    ],
  },

  '私たちのマスターピース': {
    date: '2023/11/20', get: '限定ガチャ',
    rarity: 'SSR',
    status: {
      HP: 18.75,
      素早さ: 4.25,
      物攻: 6.25,
      物防: 23.75,
      魔攻: 21.25,
      魔防: 23.75,
    },
    memoriaAbility: '攻者&術者ダメージアップⅢ',
    text: 'アタッカーとサポーターの味方全員のスキルダメージ+28%',
    effects: [
      {
        target: '味全',
        text: 'スキルダメージ+28%',
        effectItems: {
          'スキルダメージ+': 28,
        },
      },
    ],
  },
  '一日姉妹の休日': {
    date: '2023/11/10', get: '限定ガチャ',
    rarity: 'SSR',
    status: {
      HP: 18.75,
      素早さ: 4.25,
      物攻: 16.25,
      物防: 13.75,
      魔攻: 31.25,
      魔防: 13.75,
    },
    memoriaAbility: '攻者全体ダメージアップⅢ',
    text: '自身がアタッカーの時、全体攻撃のスキルダメージ+58%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+58%',
        effectItems: {
          'スキルダメージ+': 58,
        },
      },
    ],
  },

  '月夜に暗躍する漆黒の影': {
    date: '2023/10/31', get: '配布・他',
    rarity: 'SSR',
    status: {
      HP: 16.25,
      素早さ: 3.5,
      物攻: 13.75,
      物防: 13.75,
      魔攻: 23.75,
      魔防: 13.75,
    },
    memoriaAbility: '破者ブレイクアップオールⅢ',
    text: '自身がブレイカーの時、味方全員のブレイクダメージ+7%',
    effects: [
      {
        target: '味全',
        text: 'ブレイクダメージ+7%',
        effectItems: {
          'ブレイクダメージ+': 7,
        },
      },
    ],
  },
  '星の導きで運命を辿る者': {
    date: '2023/10/31',get: '配布・他',
    rarity: 'SSR',
    status: {
      HP: 16.25,
      素早さ: 3.5,
      物攻: 26.25,
      物防: 11.25,
      魔攻: 16.25,
      魔防: 11.25,
    },
    memoriaAbility: '攻者ダメージアップオールⅢ',
    text: '自身がアタッカーの時、味方全員のスキルダメージ+7%',
    effects: [
      {
        target: '味全',
        text: 'スキルダメージ+7%',
        effectItems: {
          'スキルダメージ+': 7,
        },
      },
    ],
  },


  'イタズラの時間です': {
    date: '2023/10/31',get: '限定ガチャ',
    rarity: 'SSR',
    status: {
      HP: 18.75,
      素早さ: 4.25,
      物攻: 18.75,
      物防: 18.75,
      魔攻: 18.75,
      魔防: 18.75,
    },
    memoriaAbility: '術者被突ドッジアップⅢ',
    text: '自身がサポーターの時、突属性攻撃を受ける時、回避する(確率18%)',
    effects: [
      {
        attributes: ['突'],
        target: '自',
        text: '回避する(確率18%)',
        effectItems: {
          '回避': 18,
        },
      },
    ],
  },

  '仮装でお出かけ！': {
    date: '2023/10/31',get: '限定ガチャ',
    rarity: 'SSR',
    status: {
      HP: 18.75,
      素早さ: 4.25,
      物攻: 21.25,
      物防: 23.75,
      魔攻: 6.25,
      魔防: 23.75,
    },
    memoriaAbility: 'エンハンスアップⅢ',
    text: '与える強化効果量+45%',
    effects: [
      {
        target: '自',
        text: '与える強化効果量+45%',
        effectItems: {
          '与える強化効果量+': 45,
        },
      },
    ],
  },

  '花火を見上げて': {
    date: '2023/10/24',get: '限定ガチャ',
    rarity: 'SSR',
    status: {
      HP: 16.25,
      素早さ: 6.75,
      物攻: 23.75,
      物防: 13.75,
      魔攻: 23.75,
      魔防: 13.75,
    },
    memoriaAbility: 'ブレイクアップテンポⅢ',
    text: 'WAVE開始時、自身に「ブレイクダメージ+80%」を2回行動終了するまで付与',
    effects: [
      {
        target: '自',
        text: 'ブレイクダメージ+80%',
        effectItems: {
          'ブレイクダメージ+': 80,
        },
      },
    ],
  },

  'パーティーにようこそ！': {
    date: '2023/10/24', get: '限定ガチャ',
    rarity: 'SSR',
    status: {
      HP: 11.25,
      素早さ: 11.75,
      物攻: 23.75,
      物防: 13.75,
      魔攻: 23.75,
      魔防: 13.75,
    },
    memoriaAbility: '氷得ダメージアップオールⅢ',
    text: '得意属性が氷属性の時、味方全員のスキルダメージ+23%',
    effects: [
      {
        attributes: ['氷'],
        target: '味全',
        text: 'スキルダメージ+23%',
        effectItems: {
          'スキルダメージ+': 23,
        },
      },
    ],
  },



  '只今お仕事中！': {
    date: '2023/10/17',get: '限定ガチャ',
    rarity: 'SSR',
    status: {
      HP: 16.25,
      素早さ: 6.75,
      物攻: 16.25,
      物防: 13.75,
      魔攻: 31.25,
      魔防: 13.75,
    },
    memoriaAbility: '全体ブレイクアップⅢ',
    text: '全体攻撃のブレイクダメージ+52%',
    effects: [
      {
        target: '自',
        text: 'ブレイクダメージ+52%',
        effectItems: {
          'ブレイクダメージ+': 52,
        },
      },
    ],
  },

  '刹那の交錯': {
    date: '2023/10/10',get: '限定ガチャ',
    rarity: 'SSR',
    status: {
      HP: 11.25,
      素早さ: 11.75,
      物攻: 23.75,
      物防: 13.75,
      魔攻: 23.75,
      魔防: 13.75,
    },
    memoriaAbility: '斬突アタックダメージアップⅢ',
    text: '斬属性または突属性攻撃をした時、自身に「スキルダメージ+21%」を2回行動終了するまで付与',
    effects: [
      {
        attributes: ['斬', '突'],
        target: '自',
        text: 'スキルダメージ+21%',
        effectItems: {
          'スキルダメージ+': 21,
        },
      },
    ],
  },
  '百科繚乱の一撃': {
    date: '2023/10/02', get: '限定ガチャ',
    rarity: 'SSR',
    status: {
      HP: 23.75,
      素早さ: 4.25,
      物攻: 6.25,
      物防: 23.75,
      魔攻: 6.25,
      魔防: 33.75,
    },
    memoriaAbility: '雷得被ダメ時ダメージアップⅢ',
    text: '得意属性が雷属性の時、攻撃を受けた時、味方全員に「スキルダメージ+8%」を1回行動終了するまで付与',
    effects: [
      {
        attributes: ['雷'],
        target: '味全',
        text: 'スキルダメージ+8%',
        effectItems: {
          'スキルダメージ+': 8,
        },
      },
    ],
  },

  '昼下がりのひととき': {
    date: '2023/09/23', get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 18.75,
      素早さ: 4.25,
      物攻: 31.25,
      物防: 13.75,
      魔攻: 16.25,
      魔防: 13.75,
    },
    memoriaAbility: '弱点ダメージアップⅢ',
    text: 'WEAK攻撃時、スキルダメージ+52%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+52%',
        effectItems: {
          'スキルダメージ+': 52,
        },
      },
    ],
  },
  '「向こう」への予感': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 23.75,
      素早さ: 4.25,
      物攻: 6.25,
      物防: 33.75,
      魔攻: 6.25,
      魔防: 23.75,
    },
    memoriaAbility: '被物ダメージアップⅢ',
    text: '物理攻撃を受けた時、自身に「スキルダメージ+22%」を2回行動終了するまで付与',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+22%',
        effectItems: {
          'スキルダメージ+': 22,
        },
      },
    ],
  },
  'もっと遠くへ！': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 11.25,
      素早さ: 11.75,
      物攻: 23.75,
      物防: 13.75,
      魔攻: 23.75,
      魔防: 13.75,
    },
    memoriaAbility: '風得ダメージアップⅢ',
    text: '得意属性が風属性の時、スキルダメージ+52%',
    effects: [
      {
        attributes: ['風'],
        target: '自',
        text: 'スキルダメージ+52%',
        effectItems: {
          'スキルダメージ+': 52,
        },
      },
    ],
  },
  '人形の見る夢': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 23.75,
      素早さ: 4.25,
      物攻: 6.25,
      物防: 33.75,
      魔攻: 6.25,
      魔防: 23.75,
    },
    memoriaAbility: '被打ドッジアップⅢ',
    text: '打属性攻撃を受ける時、回避する(確率+14%)',
    effects: [
      {
        attributes:['打'],
        target: '自',
        text: '回避',
        effectItems: {
          '回避': 14,
        },
      },
    ],
  },
  '高度を上げて': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 18.75,
      素早さ: 4.25,
      物攻: 31.25,
      物防: 13.75,
      魔攻: 16.25,
      魔防: 13.75,
    },
    memoriaAbility: '斬得ダメージアップⅢ',
    text: '得意属性が斬属性の時、スキルダメージ+52%',
    effects: [
      {
        attributes: ['斬'],
        target: '自',
        text: 'スキルダメージ+52%',
        effectItems: {
          'スキルダメージ+': 52,
        },
      },
    ],
  },
  '黄昏の錬金術師': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 18.75,
      素早さ: 4.25,
      物攻: 8.75,
      物防: 23.75,
      魔攻: 8.75,
      魔防: 33.75,
    },
    memoriaAbility: '風得ヒールアップⅢ',
    text: '得意属性が風属性の時、与えるHP回復量+52%',
    effects: [
      {
        attributes: ['風'],
        target: '自',
        text: '与えるHP回復量+52%',
        effectItems: {
          '与えるHP回復量+': 52,
        },
      },
    ],
  },
  '二人だけの時間': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 18.75,
      素早さ: 4.25,
      物攻: 16.25,
      物防: 13.75,
      魔攻: 31.25,
      魔防: 13.75,
    },
    memoriaAbility: '剛健ダメージアップⅢ',
    text: '自身のHPが70%以上の時、スキルダメージ+52%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+52%',
        effectItems: {
          'スキルダメージ+': 52,
        },
      },
    ],
  },
  '天使の慈愛': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 18.75,
      素早さ: 4.25,
      物攻: 8.75,
      物防: 23.75,
      魔攻: 8.75,
      魔防: 33.75,
    },
    memoriaAbility: '火傷時被ダメージアップⅢ',
    text: 'スキル対象が火傷の時、対象に「受けるダメージ+34%」を2回攻撃を受けるまで付与',
    effects: [
      {
        target: '敵',
        text: '受けるダメージ+34%',
        effectItems: {
          '受けるダメージ+': 34,
        },
      },
    ],
  },
  'お宝大発見！': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 18.75,
      素早さ: 4.25,
      物攻: 31.25,
      物防: 13.75,
      魔攻: 16.25,
      魔防: 13.75,
    },
    memoriaAbility: '突得ダメージアップⅢ',
    text: '得意属性が突属性の時、スキルダメージ+52%',
    effects: [
      {
        attributes: ['突'],
        target: '自',
        text: 'スキルダメージ+52%',
        effectItems: {
          'スキルダメージ+': 52,
        },
      },
    ],
  },
  '相棒': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 16.25,
      素早さ: 6.75,
      物攻: 31.25,
      物防: 13.75,
      魔攻: 16.25,
      魔防: 13.75,
    },
    memoriaAbility: '斬得ブレイクアップⅢ',
    text: '得意属性が斬属性の時、ブレイクダメージ+52%',
    effects: [
      {
        attributes: ['斬'],
        target: '自',
        text: 'ブレイクダメージ+52%',
        effectItems: {
          'ブレイクダメージ+': 52,
        },
      },
    ],
  },
  '寄り添う花たち': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 18.75,
      素早さ: 4.25,
      物攻: 8.75,
      物防: 33.75,
      魔攻: 8.75,
      魔防: 23.75,
    },
    memoriaAbility: '氷得ヒールアップⅢ',
    text: '得意属性が氷属性の時、与えるHP回復量+52%',
    effects: [
      {
        attributes: ['氷'],
        target: '自',
        text: '与えるHP回復量+52%',
        effectItems: {
          '与えるHP回復量+': 52,
        },
      },
    ],
  },
  '歴史を紡ぐもの': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 23.75,
      素早さ: 4.25,
      物攻: 6.25,
      物防: 23.75,
      魔攻: 6.25,
      魔防: 33.75,
    },
    memoriaAbility: '火得レシーブヒールアップⅢ',
    text: '得意属性が火属性の時、受けるHP回復量+34%',
    effects: [
      {
        target: '自',
        attributes: ['火'],
        text: '受けるHP回復量+34%',
        effectItems: {
          '受けるHP回復量+': 34,
        },
      },
    ],
  },
  'その瞳に映るもの': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 16.25,
      素早さ: 6.75,
      物攻: 16.25,
      物防: 13.75,
      魔攻: 31.25,
      魔防: 13.75,
    },
    memoriaAbility: '火得ブレイクアップⅢ',
    text: '得意属性が火属性の時、ブレイクダメージ+52%',
    effects: [
      {
        target: '自',
        attributes: ['火'],
        text: 'ブレイクダメージ+52%',
        effectItems: {
          'ブレイクダメージ+': 52,
        },
      },
    ],
  },
  'お勉強の時間だよ！': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 11.25,
      素早さ: 11.75,
      物攻: 13.75,
      物防: 23.75,
      魔攻: 13.75,
      魔防: 23.75,
    },
    memoriaAbility: '術者ダメージアップオールⅢ',
    text: '自身がサポーターの時、味方全員のスキルダメージ+15%',
    effects: [
      {
        target: '味全',
        text: 'スキルダメージ+15%',
        effectItems: {
          'スキルダメージ+': 15,
        },
      },
    ],
  },
  '色づく景色': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SSR',
    status: {
      HP: 18.75,
      素早さ: 4.25,
      物攻: 16.25,
      物防: 13.75,
      魔攻: 31.25,
      魔防: 13.75,
    },
    memoriaAbility: '火得ダメージアップⅢ',
    text: '得意属性が火属性の時、スキルダメージ+52%',
    effects: [
      {
        target: '自',
        attributes: ['火'],
        text: 'スキルダメージ+52%',
        effectItems: {
          'スキルダメージ+': 52,
        },
      },
    ],
  },
  '幻想の世界で': {
    note: '配布(5日間のログインボーナスで入手・最大解放まで入手可)',
    date: '2023/09/23',get: '配布・他',
    rarity: 'SSR',
    status: {
      HP: 21.25,
      素早さ: 1,
      物攻: 8.75,
      物防: 26.25,
      魔攻: 8.75,
      魔防: 18.75,
    },
    memoriaAbility: 'ダメージアップⅢ',
    text: 'スキルダメージ+19%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+19%',
        effectItems: {
          'スキルダメージ+': 19,
        },
      },
    ],
  },
  '星空の下で': {
    note: '初回課金時特典(最大解放済みで入手)',
    date: '2023/09/23', get: '配布・他',
    rarity: 'SSR',
    status: {
      HP: 16.25,
      素早さ: 3.5,
      物攻: 13.75,
      物防: 18.75,
      魔攻: 13.75,
      魔防: 18.75,
    },
    memoriaAbility: '術者ヒールリズムⅢ',
    text: '自身がサポーターの時、ターン開始時、HP回復+9%',
    effects: [
      {
        target: '自',
        text: 'HP回復+9%',
        effectItems: {
          'HP回復': 9,
        },
      },
    ],
  },
  '涼やかな川のほとりで': {
    note: '配布(1つのみ)',
    date: '2023/09/23',get: '配布・他',
    rarity: 'SSR',
    status: {
      HP: 16.25,
      素早さ: 1,
      物攻: 13.75,
      物防: 16.75,
      魔攻: 13.75,
      魔防: 23.75,
    },
    memoriaAbility: 'レシーブヒールアップⅢ',
    text: '受けるHP回復量+2%　※数値は解放ランクⅠ',
    effects: [
      {
        target: '自',
        text: '受けるHP回復量+2%',
        effectItems: {
          '受けるHP回復量+': 2,
        },
      },
    ],
  },
  'あの夏の続き': {
    note: '配布(ミッションで入手・最大解放まで入手可)',
    date: '2023/09/23',get: '配布・他',
    rarity: 'SSR',
    status: {
      HP: 16.25,
      素早さ: 3.5,
      物攻: 13.75,
      物防: 13.75,
      魔攻: 23.75,
      魔防: 13.75,
    },
    memoriaAbility: '弱点ブレイクアップⅢ',
    text: 'WEAK攻撃時、ブレイクダメージ+29%',
    effects: [
      {
        target: '自',
        text: 'ブレイクダメージ+29%',
        effectItems: {
          'ブレイクダメージ+': 29,
        },
      },
    ],
  },




  '新しい冒険の予感': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 15,
      素早さ: 3.25,
      物攻: 12.5,
      物防: 17.5,
      魔攻: 12.5,
      魔防: 17.5,
    },
    memoriaAbility: '術者ブレイクアップオールⅡ',
    text: '自身がサポーターの時、味方全員のブレイクダメージ+6%',
    effects: [
      {
        target: '味全',
        text: 'ブレイクダメージ+6%',
        effectItems: {
          'ブレイクダメージ+': 6,
        },
      },
    ],
  },
  'ひと夏の冒険へ': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 20,
      素早さ: 0.75,
      物攻: 7.5,
      物防: 17.5,
      魔攻: 7.5,
      魔防: 25,
    },
    memoriaAbility: '突得ブレイクアップⅡ',
    text: '得意属性が突属性の時、ブレイクダメージ+17%',
    effects: [
      {
        attributes: ['突'],
        target: '自',
        text: 'ブレイクダメージ+17%',
        effectItems: {
          'ブレイクダメージ+': 17,
        },
      },
    ],
  },
  '双子が描く夢': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 20,
      素早さ: 0.75,
      物攻: 7.5,
      物防: 25,
      魔攻: 7.5,
      魔防: 17.5,
    },
    memoriaAbility: '被魔ダメージアップⅡ',
    text: '魔法攻撃を受けた時、自身に「スキルダメージ+9%」を2回行動終了するまで付与',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+9%',
        effectItems: {
          'スキルダメージ+': 9,
        },
      },
    ],
  },
  'どこまでも続く世界': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 20,
      素早さ: 0.75,
      物攻: 7.5,
      物防: 25,
      魔攻: 7.5,
      魔防: 17.5,
    },
    memoriaAbility: '打得ヒールアップⅡ',
    text: '得意属性が打属性の時、与えるHP回復量+17%',
    effects: [
      {
        attributes: ['打'],
        target: '自',
        text: '与えるHP回復量+17%',
        effectItems: {
          '与えるHP回復量+': 17,
        },
      },
    ],
  },
  '私たちが紡ぐ物語': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 15,
      素早さ: 3.25,
      物攻: 22.5,
      物防: 12.5,
      魔攻: 12.5,
      魔防: 12.5,
    },
    memoriaAbility: '打・弱点レジストダウン打Ⅱ',
    text: '打属性かつWEAK攻撃時、対象に「打属性耐性-9%」を2回攻撃を受けるまで付与',
    effects: [
      {
        attributes: ['打'],
        target: '敵',
        text: '打属性耐性-9%',
        effectItems: {
          '属性耐性-': 9,
        },
      },
    ],
  },
  '黄昏の海に抱かれて': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 15,
      素早さ: 3.25,
      物攻: 22.5,
      物防: 12.5,
      魔攻: 12.5,
      魔防: 12.5,
    },
    memoriaAbility: '物理ブレイクアップⅡ',
    text: '物理攻撃ブレイクダメージ+15%',
    effects: [
      {
        target: '自',
        text: 'ブレイクダメージ+15%',
        effectItems: {
          'ブレイクダメージ+': 15,
        },
      },
    ],
  },
  '黄昏の空を見上げて': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 15,
      素早さ: 3.25,
      物攻: 12.5,
      物防: 12.5,
      魔攻: 22.5,
      魔防: 12.5,
    },
    memoriaAbility: '弱点レジストダウン風斬Ⅱ',
    text: 'WEAK攻撃時、対象に「風属性耐性-6%」と「斬属性耐性-6%」を2回攻撃を受けるまで付与',
    effects: [
      {
        attributes: ['風'],
        target: '敵',
        text: '風属性耐性-6%',
        effectItems: {
          '属性耐性-': 6,
        },
      },
      {
        attributes: ['斬'],
        target: '敵',
        text: '斬属性耐性-6%',
        effectItems: {
          '属性耐性-': 6,
        },
      },
    ],
  },
  '黄昏の大地を歩んで': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 15,
      素早さ: 3.25,
      物攻: 15,
      物防: 10,
      魔攻: 25,
      魔防: 10,
    },
    memoriaAbility: '雷得ダメージアップⅡ',
    text: '得意属性が雷属性の時、スキルダメージ+17%',
    effects: [
      {
        attributes: ['雷'],
        target: '自',
        text: 'スキルダメージ+17%',
        effectItems: {
          'スキルダメージ+': 17,
        },
      },
    ],
  },
  'わたしの目指すもの': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 15,
      素早さ: 3.25,
      物攻: 25,
      物防: 10,
      魔攻: 15,
      魔防: 10,
    },
    memoriaAbility: '斬得ダメージアップⅡ',
    text: '得意属性が斬属性の時、スキルダメージ+17%',
    effects: [
      {
        attributes: ['斬'],
        target: '自',
        text: 'スキルダメージ+17%',
        effectItems: {
          'スキルダメージ+': 17,
        },
      },
    ],
  },
  '世界を変える力': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 15,
      素早さ: 0.75,
      物攻: 10,
      物防: 25,
      魔攻: 10,
      魔防: 17.5,
    },
    memoriaAbility: '風得アタック被ダメージアップⅡ',
    text: '得意属性が風属性の時、対象に「受けるダメージ+10%」を2回攻撃を受けるまで付与',
    effects: [
      {
        attributes: ['風'],
        target: '敵',
        text: '受けるダメージ+10%',
        effectItems: {
          '受けるダメージ+': 10,
        },
      },
    ],
  },
  '足跡をたどって': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 15,
      素早さ: 3.25,
      物攻: 15,
      物防: 10,
      魔攻: 25,
      魔防: 10,
    },
    memoriaAbility: '魔法ダメージアップⅡ',
    text: '魔法攻撃スキルダメージ+15%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+15%',
        effectItems: {
          'スキルダメージ+': 15,
        },
      },
    ],
  },
  'わたしの守りたい場所': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 15,
      素早さ: 3.25,
      物攻: 25,
      物防: 10,
      魔攻: 15,
      魔防: 10,
    },
    memoriaAbility: '弱点ダメージアップⅡ',
    text: 'WEAK攻撃時、スキルダメージ+17%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+17%',
        effectItems: {
          'スキルダメージ+': 17,
        },
      },
    ],
  },
  '学園の仲間たち': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 15,
      素早さ: 3.25,
      物攻: 15,
      物防: 10,
      魔攻: 25,
      魔防: 10,
    },
    memoriaAbility: '逆境ダメージアップⅡ',
    text: '自身のHPが50%以下の時、スキルダメージ+24%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+24%',
        effectItems: {
          'スキルダメージ+': 24,
        },
      },
    ],
  },
  '天空都市を目指して': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 15,
      素早さ: 3.25,
      物攻: 25,
      物防: 10,
      魔攻: 15,
      魔防: 10,
    },
    memoriaAbility: '物理ダメージアップⅡ',
    text: '物理攻撃スキルダメージ+15%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+15%',
        effectItems: {
          'スキルダメージ+': 15,
        },
      },
    ],
  },
  'あたしのアトリエ': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'SR',
    status: {
      HP: 15,
      素早さ: 3.25,
      物攻: 25,
      物防: 10,
      魔攻: 15,
      魔防: 10,
    },
    memoriaAbility: 'レストダメージアップⅡ',
    text: '敵の数が1体の時、スキルダメージ+24%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+24%',
        effectItems: {
          'スキルダメージ+': 24,
        },
      },
    ],
  },
  'これが都会の味……！？': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 2.75,
      物攻: 12.5,
      物防: 12.5,
      魔攻: 12.5,
      魔防: 12.5,
    },
    memoriaAbility: '術者アタック被ダメージアップⅠ',
    text: '自身がサポーターの時、攻撃時、対象に「受けるダメージ+5%」を2回攻撃を受けるまで付与',
    effects: [
      {
        target: '敵',
        text: '受けるダメージ+5%',
        effectItems: {
          '受けるダメージ+': 5,
        },
      },
    ],
  },
  '風に乗る旋律': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 0.25,
      物攻: 12.5,
      物防: 12.5,
      魔攻: 12.5,
      魔防: 15,
    },
    memoriaAbility: '剛健ヒールアップⅠ',
    text: '自身のHPが70%以上の時、与えるHP回復量+13%',
    effects: [
      {
        target: '自',
        text: '与えるHP回復量+13%',
        effectItems: {
          '与えるHP回復量+': 13,
        },
      },
    ],
  },
  '美味しいティータイム': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 0.25,
      物攻: 12.5,
      物防: 12.5,
      魔攻: 12.5,
      魔防: 15,
    },
    memoriaAbility: '術者アタックヒールⅠ',
    text: '自身がサポーターの時、攻撃時、HP回復+5%',
    effects: [
      {
        target: '自',
        text: 'HP回復+5%',
        effectItems: {
          'HP回復': 5,
        },
      },
    ],
  },
  '三人寄れば': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 0.25,
      物攻: 12.5,
      物防: 15,
      魔攻: 12.5,
      魔防: 12.5,
    },
    memoriaAbility: 'アイテムチャージリズムⅠ',
    text: 'ターン開始時、アイテムゲージ回復+5%',
    effects: [
      {
        target: '自',
        text: 'アイテムゲージ回復+5%',
        effectItems: {
          'アイテムゲージ回復': 5,
        },
      },
    ],
  },
  '本日の目玉商品です': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 0.25,
      物攻: 12.5,
      物防: 15,
      魔攻: 12.5,
      魔防: 12.5,
    },
    memoriaAbility: 'ヒールアップⅠ',
    text: '与えるHP回復量+10%',
    effects: [
      {
        target: '自',
        text: '与えるHP回復量+10%',
        effectItems: {
          '与えるHP回復量+': 10,
        },
      },
    ],
  },
  '二人のシャリー': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 2.75,
      物攻: 12.5,
      物防: 12.5,
      魔攻: 12.5,
      魔防: 12.5,
    },
    memoriaAbility: 'レストブレイクアップⅠ',
    text: '敵の数が1体の時、ブレイクダメージ+17%',
    effects: [
      {
        target: '自',
        text: 'ブレイクダメージ+17%',
        effectItems: {
          'ブレイクダメージ+': 17,
        },
      },
    ],
  },
  '甘いひととき': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 0.25,
      物攻: 12.5,
      物防: 12.5,
      魔攻: 12.5,
      魔防: 15,
    },
    memoriaAbility: 'バーストアップⅠ',
    text: 'バーストスキルダメージ+17%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+17%',
        effectItems: {
          'スキルダメージ+': 17,
        },
      },
    ],
  },
  'せせらぎに誘われて': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 0.25,
      物攻: 12.5,
      物防: 12.5,
      魔攻: 12.5,
      魔防: 15,
    },
    memoriaAbility: 'ボスダメージアップⅠ',
    text: 'ボスを攻撃時、スキルダメージ+12%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
  },
  'アーランドの錬金術士': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 0.25,
      物攻: 12.5,
      物防: 15,
      魔攻: 12.5,
      魔防: 12.5,
    },
    memoriaAbility: '弱点被ダメージアップⅠ',
    text: 'WEAK攻撃時、対象に「受けるダメージ+6%」を2回攻撃を受けるまで付与',
    effects: [
      {
        target: '敵',
        text: '受けるダメージ+6%',
        effectItems: {
          '受けるダメージ+': 6,
        },
      },
    ],
  },
  '本当の家族': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 0.25,
      物攻: 12.5,
      物防: 15,
      魔攻: 12.5,
      魔防: 12.5,
    },
    memoriaAbility: '防者ダメージアップⅠ',
    text: '自身がディフェンダーの時、スキルダメージ+10%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+10%',
        effectItems: {
          'スキルダメージ+': 10,
        },
      },
    ],
  },
  '師匠の暇つぶし': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 10,
      素早さ: 5.25,
      物攻: 12.5,
      物防: 12.5,
      魔攻: 12.5,
      魔防: 12.5,
    },
    memoriaAbility: 'ボスブレイクアップⅠ',
    text: 'ボスを攻撃時、ブレイクダメージ+12%',
    effects: [
      {
        target: '自',
        text: 'ブレイクダメージ+12%',
        effectItems: {
          'ブレイクダメージ+': 12,
        },
      },
    ],
  },
  'ぷにぷにあーげる': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 10,
      素早さ: 5.25,
      物攻: 12.5,
      物防: 12.5,
      魔攻: 12.5,
      魔防: 12.5,
    },
    memoriaAbility: '全体ブレイクアップⅠ',
    text: '全体攻撃のブレイクダメージ+17%',
    effects: [
      {
        target: '自',
        text: 'ブレイクダメージ+17%',
        effectItems: {
          'ブレイクダメージ+': 17,
        },
      },
    ],
  },
  '同級生': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 2.75,
      物攻: 10,
      物防: 12.5,
      魔攻: 15,
      魔防: 12.5,
    },
    memoriaAbility: '魔法ブレイクアップⅠ',
    text: '魔法攻撃ブレイクダメージ+10%',
    effects: [
      {
        target: '自',
        text: 'ブレイクダメージ+10%',
        effectItems: {
          'ブレイクダメージ+': 10,
        },
      },
    ],
  },
  '無邪気な水音': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 2.75,
      物攻: 15,
      物防: 12.5,
      魔攻: 10,
      魔防: 12.5,
    },
    memoriaAbility: '破者ブレイクアップⅠ',
    text: '自身がブレイカーの時、ブレイクダメージ+10%',
    effects: [
      {
        target: '自',
        text: 'ブレイクダメージ+10%',
        effectItems: {
          'ブレイクダメージ+': 10,
        },
      },
    ],
  },
  '日向ぼっこだニャ': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 10,
      素早さ: 5.25,
      物攻: 12.5,
      物防: 12.5,
      魔攻: 12.5,
      魔防: 12.5,
    },
    memoriaAbility: 'ダメージアップⅠ',
    text: 'スキルダメージ+9%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+9%',
        effectItems: {
          'スキルダメージ+': 9,
        },
      },
    ],
  },
  'ニンジンの名産地': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 10,
      素早さ: 5.25,
      物攻: 12.5,
      物防: 12.5,
      魔攻: 12.5,
      魔防: 12.5,
    },
    memoriaAbility: '攻者ダメージアップⅠ',
    text: '自身がアタッカーの時、スキルダメージ+10%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+10%',
        effectItems: {
          'スキルダメージ+': 10,
        },
      },
    ],
  },
  '逃げろユーディット！': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 2.75,
      物攻: 10,
      物防: 12.5,
      魔攻: 15,
      魔防: 12.5,
    },
    memoriaAbility: '会心ダメージアップⅠ',
    text: 'クリティカルダメージ+17%',
    effects: [
      {
        target: '自',
        text: 'クリティカルダメージ+17%',
        effectItems: {
          'クリティカルダメージ+': 17,
        },
      },
    ],
  },
  '先生をかけて！': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 2.75,
      物攻: 10,
      物防: 12.5,
      魔攻: 15,
      魔防: 12.5,
    },
    memoriaAbility: 'クラッシュダメージアップⅠ',
    text: 'スキルで撃破時、自身に「スキルダメージ+9%」を付与(上限36%)',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+9%',
        effectItems: {
          'スキルダメージ+': 9,
        },
      },
    ],
  },
  '私がいないとダメね': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 2.75,
      物攻: 15,
      物防: 12.5,
      魔攻: 10,
      魔防: 12.5,
    },
    memoriaAbility: '全体ダメージアップⅠ',
    text: '全体攻撃のスキルダメージ+17%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+17%',
        effectItems: {
          'スキルダメージ+': 17,
        },
      },
    ],
  },
  '錬金術士マルローネ': {
    date: '2023/09/23',
    get: '恒常ガチャ',
    rarity: 'R',
    status: {
      HP: 12.5,
      素早さ: 2.75,
      物攻: 15,
      物防: 12.5,
      魔攻: 10,
      魔防: 12.5,
    },
    memoriaAbility: '弱点ダメージアップⅠ',
    text: 'WEAK攻撃時、スキルダメージ+12%',
    effects: [
      {
        target: '自',
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
  },
}
export default memoria















