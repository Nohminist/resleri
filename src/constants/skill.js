const skill = {
  'アークブレイク': {
    attribute: '斬',
    area: '単',
    damage: 223,
    break: 30,
    wait: 200,
    text: '攻撃後、味方全員に「受ける魔法攻撃ダメージ-15%」を1回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後', target: '味全', text: '受ける魔法攻撃ダメージ-15%', duration: 1,
        effectItems: {
          '受ける魔法攻撃ダメージ-': 15,
        },
      }
    ],
  },


  'アイストーチ': {
    attribute: '氷',
    area: '単',
    damage: 88,
    break: 7,
    wait: 100,
    shortText: '攻撃後、フレイムブリーズのダメージアップ',
    text: '攻撃後、フレイムブリーズの「ダメージ+10%」を付与(上限50%)',
    effects: [
      {
        timing: '攻撃後',
        target: '自',
        text: 'ダメージ+10%', stack: 4,//スタックなのか上限値なのか
        effectItems: {
          'ダメージ+': 10,
        },
      },
    ],
  },
  'アインツェルカンプ': {
    attribute: '雷',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '自身のHPに応じ、ダメージ+20%～70%(HP20～100%で少ないほど増加)',
    effects: [
      {
        conditions: ['自HPが少ないほど'],
        text: 'ダメージ+20%～70%', value: 20, valueMax: 100,
        effectItems: {
          'ダメージ+': 20,
        },
      },
    ],
  },
  'アクセルダイブ': {
    attribute: '打',
    area: '単',
    damage: 253,
    break: 37,
    wait: 200,
    text: '攻撃後、味方全員に「受ける物理攻撃ダメージ-15%」を1回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後', target: '味全', text: '受ける物理攻撃ダメージ-15%', duration: 1,
        effectItems: {
          '受ける物理攻撃ダメージ-': 15,
        },
      }
    ],
  },


  'アナライズ': {
    attribute: '斬',
    area: '単',
    damage: 85,
    break: 23,
    wait: 100,
    text: '攻撃後、対象に「受ける物理攻撃ダメージ+5%」を5回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単',
        text: '受ける物理攻撃ダメージ+5%',
        duration: 5,
        effectItems: {
          '受ける物理攻撃ダメージ+': 5,
        },
      },
    ],
  },
  '生きてるメルキシル剤': {
    attribute: '風',
    area: '全',
    heal: 132,
    wait: 200,
    text: '回復後、自身に「受けるダメージ-20%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '回復後',
        target: '自',
        text: '受けるダメージ-20%',
        duration: 2,
        effectItems: {
          '受けるダメージ-': 20,
        },
      },
    ],
  },
  '一球入魂メテオボール': {
    attribute: '打',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '自身のHPが最大の時、ダメージ+80%',
    effects: [
      {
        conditions: ['自HP100%'],
        text: 'ダメージ+80%',
        effectItems: {
          'ダメージ+': 80,
        },
      },
    ],
  },
  'イニシエイトグラム': {
    attribute: '風',
    area: '単',
    damage: 400,
    break: 375,
    wait: 200,
    // text: '対象がブレイク時[red](=ブレイクした時)[/red]、対象に「受けるダメージ+20%」を3回攻撃を受けるまで付与',
    text: '対象がブレイク時、対象に「受けるダメージ+20%」を3回攻撃を受けるまで付与',
    effects: [
      {
        target: '敵単',
        conditions: ['敵ブレイク'],
        text: '受けるダメージ+20%',
        duration: 3,

        effectItems: {
          '受けるダメージ+': 20,
        },
      },
    ],
  },

  'インペリアルクリーヴ': {
    attribute: '打',
    area: '全',
    damage: 300,
    break: 37,
    wait: 200,
    text: '攻撃後、対象に「物理攻撃ダメージ-50%」を1回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵全',
        text: '物理攻撃ダメージ-50%',
        duration: 1,
        effectItems: {
          '物理攻撃ダメージ-': 50,
        },
      },
    ],
  },

  'ヴァイスタンツ': {
    attribute: '突',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '敵の数に応じ、ダメージ+30%～70%(1体～4体で多いほど増加)',
    effects: [
      {
        conditions: ['敵数に応じ'],
        text: 'ダメージ+30%～70%',
        value: 30, valueMax: 70,
        effectItems: {
          'ダメージ+': 30,
        },
      },
    ],
  },
  'ヴァルキリエ・ロンド': {
    attribute: '突',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '攻撃後、自身に「回避(確率100%)」を1回攻撃されるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自',
        text: '回避(確率100%)',
        duration: 1,
        effectItems: {
          '回避': 100,
        },
      },
    ],
  },




  'エーテルキュア': {
    attribute: '風',
    area: '単',
    damage: 362,
    break: 52,
    wait: 275,
    text: '対象のHPが50%以上の時、ターンを1ターン遅らせる',
    effects: [
      {
        target: '敵単',
        conditions: ['敵HP50%以上'],
        text: 'ターンを1ターン遅らせる',
        effectItems: {
          ターンを遅らせる: 1,
        },
      },
    ],
  },
  'エーテルシュート': {
    attribute: '風',
    area: '単',
    damage: 63,
    break: 22,
    wait: 100,
    text: '追加効果なし',
  },
  'エーテルスピア': {
    attribute: '風',
    area: '単',
    damage: 200,
    break: 150,
    wait: 200,
    text: '攻撃後、対象に「風・斬属性耐性-15%」を2回攻撃を受けるまで付与し、\n味方全員に「風・斬属性ブレイクダメージ+15%」を2回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単',
        text: '風・斬属性耐性-15%',
        duration: 2,
        attributes: ['風', '斬'],
        effectItems: {
          '属性耐性-': 15,
        },
      },
      {
        timing: '攻撃後',
        target: '味全',
        text: '風・斬属性ブレイクダメージ+15%',
        duration: 2,
        attributes: ['風', '斬'],
        effectItems: {
          'ブレイクダメージ+': 15,
        },
      }
    ],
  },


  'エーテルブラム': {
    attribute: '打',
    area: '単',
    damage: 400,
    break: 375,
    wait: 200,
    // text: 'WEAK攻撃時、ブレイクダメージ+50%\n対象がブレイク時[red](=ブレイクした時)[/red]、自身のHPを30%回復',
    text: 'WEAK攻撃時、ブレイクダメージ+50%\n対象がブレイク時、自身のHPを30%回復',
    effects: [
      {
        conditions: ['WEAK攻撃'],
        text: 'ブレイクダメージ+50%',
        effectItems: {
          'ブレイクダメージ+': 50,
        },
      },
      {
        conditions: ['敵ブレイク'],
        target: '自',
        text: 'HPを30%回復',
        effectItems: {
          'HP回復': 30,
        },
      },
    ],
  },
  'エーテルポイント': {
    attribute: '風',
    area: '単',
    damage: 400,
    break: 375,
    wait: 200,
    text: '攻撃後、対象に「風・斬属性耐性-15%」を5回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単',
        text: '風・斬属性耐性-15%',
        duration: 5,
        attributes: ['風', '斬'],
        effectItems: {
          '属性耐性-': 15,
        },
      },
    ],
  },
  'エクステンション': {
    attribute: '打',
    area: '単',
    物攻: 30,
    wait: 200,
    text: '味方1人に「物攻+30%」を2回行動終了するまで付与',
    effects: [
      {
        timing:'行動',
        target: '味単',
        text: '物攻+30%',
        duration: 2,
        effectItems: {
          '物攻+': 30,
        },
      },
    ],
  },


  'エレキフィールド': {
    attribute: '雷',
    area: '単',
    damage: 327,
    break: 43,
    wait: 200,
    text: '対象が状態異常時、ダメージ+20%\n攻撃後、対象に「麻痺」を2回行動開始するまで超高確率で付与',
    effects: [
      {
        conditions: ['敵状態異常'],
        text: 'ダメージ+20%',
        effectItems: {
          'ダメージ+': 20,
        },
      },
      {
        timing: '攻撃後',
        target: '敵単',
        text: '麻痺',
        duration: 2,
        effectItems: {
          '麻痺': true,
        },
      },
    ],
  },

  'エレクトル': {
    attribute: '雷',
    area: '単',
    damage: 113,
    break: 10,
    wait: 100,
    text: '攻撃後、対象に「受けるダメージ+15%」を1回行動を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単',
        text: '受けるダメージ+15%',
        duration: 1,
        effectItems: {
          '受けるダメージ+': 15,
        },
      },
    ],
  },

  'エンゲルスピリット': {
    attribute: '氷',
    area: '単',
    damage: 90,
    break: 8,
    wait: 100,
    text: '対象のHPが50%以下の時、ダメージ+20%',
    effects: [
      {
        conditions: ['敵HP50%以下'],
        text: 'ダメージ+20%',
        effectItems: {
          'ダメージ+': 20,
        },
      },
    ],
  },

  'エンシェントワン': {
    attribute: '火',
    area: '単',
    damage: 400,
    break: 375,
    wait: 200,
    text: '攻撃後、対象に「火・氷属性耐性-15%」を5回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単',
        text: '火・氷属性耐性-15%',
        duration: 5,
        attributes: ['火', '氷'],
        effectItems: {
          '属性耐性-': 15,
        },
      },
    ],
  },
  'エンゼルスピリット': {
    attribute: '氷',
    area: '単',
    damage: 327,
    break: 43,
    wait: 200,
    text: '自身のHPが70%以上の時、ダメージ+40%',
    effects: [
      {
        conditions: ['自HP70%以上'],
        text: 'ダメージ+40%',
        effectItems: {
          'ダメージ+': 40,
        },
      },
    ],
  },


  'エンデフィンスタニス': {
    attribute: '突',
    area: '単',
    damage: 450,
    break: 93,
    wait: 200,
    text: 'クリティカル確率+40%\nクリティカル攻撃時、クリティカルダメージ+30%',
    effects: [
      {
        text: 'クリティカル確率+40%',
        effectItems: {
          クリティカル確率: 40,
        },
      },
      {
        text: 'クリティカルダメージ+30%',
        effectItems: {
          'クリティカルダメージ+': 30,
        },
      },
    ],
  },
  'おたまスイング': {
    attribute: '打',
    area: '単',
    damage: 62,
    break: 7,
    wait: 100,
    text: '攻撃後、自身に「受けるダメージ-5%」を3回攻撃を受けるまで付与し、\n攻撃後、自身に「かばう」を3回発動するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自',
        text: '受けるダメージ-5%',
        duration: 3,
        effectItems: {
          '受けるダメージ-': 5,
        },
      },
      {
        timing: '攻撃後',
        target: '自',
        text: 'かばう',
        duration: 3,
        effectItems: {
          'かばう': 1,
        },
      },
    ],
  },

  '俺のとっておき': {
    attribute: '火',
    area: '単',
    heal: 440,
    wait: 200,
    text: '回復後、対象に「火属性ダメージ+20%」を2回行動終了するまで付与',
    effects: [
      {
        timing: '回復後',
        target: '味単',
        text: '火属性ダメージ+20%',
        duration: 2,
        attributes: ['火'],
        effectItems: {
          '属性ダメージ+': 20,
        },
      },
    ],
  },
  '俺流フルコース': {
    attribute: '火',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '攻撃後、対象に「火傷」を超高確率で付与し、自身に「魔攻+15%」を3回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単',
        text: '火傷',
        effectItems: {
          '火傷': 15,
        },
      },
      {
        timing: '攻撃後',
        target: '自',
        text: '魔攻+15%',
        duration: 3,
        effectItems: {
          '魔攻+': 15,
        },
      }
    ],
  },



  '風のメロディア': {
    attribute: '風',
    area: '単',
    damage: 96,
    break: 10,
    wait: 100,
    text: '攻撃後、敵の数に応じ、味方全員に「ブレイクダメージ+2～10%(1～4体で多いほど増加)」を1回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        conditions: ['敵数に応じ'],
        target: '味全',
        text: 'ブレイクダメージ+2～10%',
        duration: 1,
        effectItems: {
          'ブレイクダメージ+': 10,
        },
      },
    ],
  },


  'カッツェバイセン': {
    attribute: '突',
    area: '単',
    damage: 67,
    break: 6,
    wait: 100,
    text: 'クリティカル攻撃時、クリティカルダメージ+20%',
    effects: [
      {
        text: 'クリティカルダメージ+20%',
        effectItems: {
          'クリティカルダメージ+': 20,
        },
      },
    ],
  },
  'カレイドスター': {
    attribute: '突',
    area: '単',
    damage: 252,
    break: 37,
    wait: 200,
    text: '攻撃後、自身に「回避(確率25%)」を2回攻撃されるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自',
        text: '回避(確率25%)',
        duration: 2,
        effectItems: {
          '回避': 25,
        },
      },
    ],
  },

  '気合斬り': {
    attribute: '斬',
    area: '単',
    damage: 300,
    break: 37,
    wait: 200,
    text: '敵の数に応じ、ダメージ+5%～25%(1体～4体で少ないほど増加)\n攻撃後、自身に「スキルダメージ+20%」を1回行動終了するまで付与',
    effects: [
      {
        conditions: ['敵数に応じ'],
        text: 'ダメージ+5%～25%', value: 5, valueMax: 25,
        effectItems: {
          'ダメージ+': 5,
        },
      },
      {
        timing: '攻撃後',
        target: '自',
        text: 'スキルダメージ+20%',
        duration: 1,
        effectItems: {
          'スキルダメージ+': 20,
        },
      },
    ],
  },
  '気合の強撃': {
    attribute: '打',
    area: '単',
    damage: 40,
    break: 18,
    wait: 100,
    text: '攻撃後、自身に「ブレイクダメージ+40%」を1回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自',
        text: 'ブレイクダメージ+40%',
        duration: 1,
        effectItems: {
          'ブレイクダメージ+': 40,
        },
      }
    ],
  },


  '輝煌斬': {
    attribute: '斬',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '敵が1体の時、ダメージ+40%',
    effects: [
      {
        text: 'ダメージ+40%', conditions: ['敵1'],
        effectItems: {
          'ダメージ+': 40,
        },
      },
    ],
  },
  'キャストコメット': {
    attribute: '斬',
    area: '単',
    damage: 42,
    break: 18,
    wait: 100,
    text: '攻撃後、対象に「受けるダメージ+15%」を3回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単',
        text: '受けるダメージ+15%',
        duration: 3,
        effectItems: {
          '受けるダメージ+': 15,
        },
      },
    ],
  },

  '錦上添花': {
    attribute: '風',
    area: '全',
    heal: 300,
    wait: 200,
    text: '回復後、対象に「受けるダメージ-30%」を1回攻撃を受けるまで付与',
    effects: [
      {
        timing: '回復後',
        target: '味全', text: '受けるダメージ-30%', duration: 1,
        effectItems: {
          '受けるダメージ-': 30,
        },
      },
    ],
  },
  'クイックザンバー': {
    attribute: '斬',
    area: '単',
    damage: 48,
    break: 3,
    wait: 100,
    text: '攻撃前、自身に「スキルダメージ+3%」を付与(上限30%)',
    effects: [
      {
        timing: '攻撃前',
        target: '自',
        text: 'スキルダメージ+3%',
        stack: 10,
        effectItems: {
          'スキルダメージ+': 30,
        },
      },
    ],
  },
  'クイックスラスト': {
    attribute: '打',
    area: '単',
    damage: 91,
    break: 8,
    wait: 100,
    text: '自身のHPに応じ、ダメージ+5～25%(HP20～100%で多いほど増加)',
    effects: [
      {
        conditions: ['自HPが多いほど'],
        text: 'ダメージ+5%～25%', value: 5, valueMax: 25,
        effectItems: {
          'ダメージ+': 25,
        },
      },
    ],
  },

  'クイックミックス': {
    attribute: '火',
    area: '全',
    damage: 300,
    break: 37,
    wait: 200,
    text: 'WEAK攻撃時、ダメージ+40%',
    effects: [
      {
        conditions: ['WEAK攻撃'],
        text: 'ダメージ+40%',
        effectItems: {
          'ダメージ+': 40,
        },
      }
    ],
  },

  'クールハンド': {
    attribute: '氷',
    area: '単',
    damage: 83,
    break: 22,
    wait: 100,
    text: '攻撃後、対象に「火・氷属性耐性-5%」を5回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: '火・氷属性耐性-5%', duration: 5,
        attributes: ['火', '氷'],
        effectItems: {
          '属性耐性-': 5,
        },
      },
    ],
  },
  'クールフット': {
    attribute: '氷',
    area: '単',
    damage: 227,
    break: 156,
    wait: 200,
    text: 'WEAK攻撃時、ブレイクダメージ+40%\n攻撃後、対象に「氷属性耐性-20%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: 'ブレイクダメージ+40%', conditions: ['WEAK攻撃'],
        effectItems: {
          'ブレイクダメージ+': 40,
        },
      },
      {
        timing: '攻撃後',
        target: '敵単', text: '氷属性耐性-20%', duration: 2,
        attributes: ['氷'],
        effectItems: {
          '属性耐性-': 20,
        },
      },
    ],
  },



  'グラビティクロス': {
    attribute: '斬',
    area: '全',
    damage: 300,
    break: 37,
    wait: 200,
    text: '攻撃後、対象に「ダメージ-20%」を1回行動終了するまで付与し、\nさらに「魔法攻撃ダメージ-30%」を1回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵全', text: 'ダメージ-20%', duration: 1,
        effectItems: {
          'ダメージ-': 20,
        },
      },
      {
        timing: '攻撃後',
        target: '敵全', text: '魔法攻撃ダメージ-30%', duration: 1,
        effectItems: {
          '魔法攻撃ダメージ-': 30,
        },
      },
    ],
  },
  'クロー': {
    attribute: '雷',
    area: '単',
    damage: 70,
    break: 6,
    wait: 100,
    text: 'WEAK攻撃時、ダメージ+15%',
    effects: [
      {
        text: 'ダメージ+15%', conditions: ['WEAK攻撃'],
        effectItems: {
          'ダメージ+': 15,
        },
      },
    ],

  },

  'クロスファイア': {
    attribute: '突',
    area: '単',
    damage: 400,
    break: 375,
    wait: 200,
    text: 'WEAK攻撃時、ブレイクダメージ+50%\n攻撃後、対象に「突属性耐性-20%」を3回攻撃を受けるまで付与',
    effects: [
      {
        text: 'ブレイクダメージ+50%', conditions: ['WEAK攻撃'],
        effectItems: {
          'ブレイクダメージ+': 50,
        },
      },
      {
        timing: '攻撃後',
        target: '敵単',
        text: '突属性耐性-20%',
        duration: 3,
        attributes: ['突'],
        effectItems: {
          '属性耐性-': 20,
        },
      },
    ],
  },



  '黒の風': {
    attribute: '斬',
    area: '単',
    damage: 66,
    break: 6,
    wait: 100,
    text: '攻撃前、自身のマイナス効果を解除し、\n攻撃後、自身に「マイナス効果無効」を1回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃前',
        target: '自',
        text: 'マイナス効果を解除',
        effectItems: {
          マイナス効果解除: true,
        },
      },
      {
        timing: '攻撃後',
        target: '自',
        text: 'マイナス効果無効',
        duration: 1,
        effectItems: {
          マイナス効果無効: true,
        },
      },
    ],
  },

  'ゴーストパーティー': {
    attribute: '斬',
    area: '全',
    wait: 200,
    text: '味方全員それぞれに以下の効果をランダムで付与し、その抽選を4回行う\n・「スキルダメージ+10%」を1回行動終了するまで付与\n・「ブレイクダメージ+10%」を1回行動終了するまで付与\n・「受けるダメージ-10%」を1回攻撃を受けるまで付与',
    effects: [
      {
        timing: '行動',
        target: '味全', text: 'スキルダメージ+10%', duration: 1,
        effectItems: {
          'スキルダメージ+': 10,
        },
      },
      {
        timing: '行動',
        target: '味全', text: 'ブレイクダメージ+10%', duration: 1,
        effectItems: {
          'ブレイクダメージ+': 10,
        },
      },
      {
        timing: '行動',
        target: '味全', text: '受けるダメージ-10%', duration: 1,
        effectItems: {
          '受けるダメージ-': 10,
        },
      },
    ],
  },



  'コーリングスター': {
    attribute: '火',
    area: '単',
    damage: 450,
    break: 56,
    wait: 200,
    text: '追加効果なし'
  },
  '黒鳥の羽': {//こくちょう
    attribute: '打',
    area: '単',
    damage: 115,
    break: 11,
    wait: 100,
    text: '対象が状態異常時、ダメージ+10%',
    effects: [
      {
        text: 'ダメージ+10%', conditions: ['敵状態異常'],
        effectItems: {
          'ダメージ+': 10,
        },
      },
    ],
  },
  'ココンシュッス': {
    attribute: '氷',
    area: '単',
    damage: 300,
    break: 37,
    wait: 200,
    text: '攻撃後、自身に「スキルダメージ+10%」を1回行動終了するまで付与し、\n味方全員に「スキルダメージ+5%」を1回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自',
        text: 'スキルダメージ+10%',
        duration: 1,
        effectItems: {
          'スキルダメージ+': 10,
        },
      },
      {
        timing: '攻撃後',
        target: '味全',
        text: 'スキルダメージ+5%',
        duration: 1,
        effectItems: {
          'スキルダメージ+': 5,
        },
      }
    ],
  },


  'コメットハレーション': {
    attribute: '雷',
    area: '全',
    damage: 132,
    break: 11,
    wait: 200,
    text: '攻撃後、味方全員に「クリティカル確率+25%」を付与(上限100%)',
    effects: [
      {
        timing: '攻撃後',
        target: '味全', text: 'クリティカル確率+25%', stack: 4,
        effectItems: {
          'クリティカル確率+': 25,
        },
      }
    ],
  },

  'コランダムエンド': {
    attribute: '風',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '攻撃後、対象のターンを2ターン遅らせる',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: 'ターンを2ターン遅らせる',
        effectItems: {
          ターンを遅らせる: 2,
        },
      }
    ],
  },
  'サーチスラッシュ': {
    attribute: '斬',
    area: '全',
    damage: 106,
    break: 57,
    wait: 200,
    text: '攻撃前、対象に「斬属性耐性-25%」を2回攻撃を受けるまで付与し、\n攻撃後、対象に「受けるダメージ+30%」を1回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃前',
        target: '敵全',
        text: '斬属性耐性-25%',
        duration: 2,
        attributes: ['風', '斬'],
        effectItems: {
          '属性耐性-': 15,
        },
      },
      {
        timing: '攻撃後',
        target: '敵全',
        text: '受けるダメージ+30%',
        duration: 1,
        effectItems: {
          '受けるダメージ+': 30,
        },
      },


    ],
  },


  'サンダーボルト': {
    attribute: '雷',
    area: '単',
    damage: 65,
    break: 21,
    wait: 100,
    text: '攻撃後、自身に「ブレイクダメージ+40%」を1回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自'
        , text: 'ブレイクダメージ+40%',
        duration: 1,
        effectItems: {
          ブレイクダメージ: 1,
        },
      },
    ],
  },
  '四元の法': {
    attribute: '風',
    area: '全',
    damage: 146,
    break: 70,
    wait: 200,
    text: '追加効果なし',
  },

  '桎梏の罠': {//しっこく（手かせ足かせ。自由を束縛するもの。
    attribute: '打',
    area: '単',
    damage: 340,
    break: 45,
    wait: 200,
    text: '攻撃後、対象に「状態異常耐性-20%」を2回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: '状態異常耐性-20%', duration: 2,
        effectItems: {
          '状態異常耐性-': 20,
        },
      },
    ],
  },
  'シャベルノック': {
    attribute: '打',
    area: '単',
    damage: 98,
    break: 10,
    wait: 100,
    text: '攻撃後、自身のHPを15%回復',
    effects: [
      {
        timing: '攻撃後',
        target: '自',
        text: 'HPを15%回復',
        effectItems: {
          'HP回復': 15,
        },
      }
    ],
  },
  '水月鏡花': {
    attribute: '打',
    area: '全',
    wait: 200,
    text: '味方全員に「ターン開始時、HP回復+14%」を5回行動開始するまで付与',
    effects: [
      {
        target: '味全', text: 'ターン開始時、HP回復+14%', duration: 5,
        effectItems: {
          'ターン開始時HP回復': 14,
        },
      },
    ],
  },


  'スコールシュート': {
    attribute: '打',
    area: '全',
    damage: 112,
    break: 57,
    wait: 200,
    text: 'WEAK攻撃後、味方全員に「ブレイクダメージ+20%」を1回行動するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '味全', text: 'ブレイクダメージ+20%', duration: 1, conditions: ['WEAK攻撃'],
        effectItems: {
          'ブレイクダメージ+': 20,
        },
      },
    ],
  },




  'ステラクラフト': {
    attribute: '火',
    area: '単',
    damage: 338,
    break: 41,
    wait: 200,
  },
  'ステラシャワー': {
    attribute: '火',
    area: '単',
    damage: 85,
    break: 7,
    wait: 100,
    text: '攻撃後、自身に「スキルダメージ+10%」を2回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自',
        text: 'スキルダメージ+10%',
        duration: 2,
        effectItems: {
          'スキルダメージ+': 10,
        },
      },
    ],
  },




  'ステラフォール': {
    attribute: '雷',
    area: '単',
    damage: 51,
    break: 6,
    wait: 100,
    text: '攻撃後、味方全員のHPを5%回復',
    effects: [
      {
        timing: '攻撃後',
        target: '味全', text: 'HPを5%回復',
        effectItems: {
          'HP回復': 5,
        },
      },
    ],
  },
  'ストーンシュート': {
    attribute: '風',
    area: '単',
    damage: 142,
    break: 13,
    wait: 100,
    text: 'WEAK攻撃時、ダメージ+20%',
    effects: [
      {
        text: 'ダメージ+20%', conditions: ['WEAK攻撃'],
        effectItems: {
          'ダメージ+': 20,
        },
      },
    ],
  },
  'スピッツダガー': {
    attribute: '突',
    area: '単',
    damage: 66,
    break: 6,
    wait: 100,
    text: '攻撃後、自身に「スキルダメージ+10%」を1回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自',
        text: 'スキルダメージ+10%',
        duration: 1,
        effectItems: {
          'スキルダメージ+': 10,
        },
      },
    ],
  },
  'スプレッション': {
    attribute: '風',
    area: '単',
    damage: 70,
    break: 21,
    wait: 100,
    text: '攻撃後、自身に「ブレイクダメージ+20%」を1回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自',
        text: 'ブレイクダメージ+20%',
        duration: 1,
        effectItems: {
          'ブレイクダメージ+': 20,
        },
      },
    ],
  },
  'スマッシュ': {
    attribute: '火',
    area: '単',
    damage: 82,
    break: 8,
    wait: 100,
  },


  'スポットファイア': {
    attribute: '火',
    area: '単',
    damage: 77,
    break: 8,
    wait: 100,
    text: '攻撃後、対象に「ダメージ-10%」を2回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: 'ダメージ-10%', duration: 2,
        effectItems: {
          'ダメージ-': 10,
        },
      },
    ],
  },

  'セイクリッドコード': {
    attribute: '氷',
    area: '単',
    damage: 75,
    break: 8,
    wait: 100,
    text: '攻撃後、対象に「受けるダメージ+10%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: '受けるダメージ+10%', duration: 2,
        effectItems: {
          '受けるダメージ+': 10,
        },
      },
    ],
  },
  'ゼーレキャンバス': {
    attribute: '雷',
    area: '全',
    damage: 300,
    break: 37,
    wait: 200,
    text: '攻撃後、このスキル使用前にタイムラインに並んでいる次の味方に「スキルダメージ+100%」を1回行動終了するまで付与し、\n攻撃対象に「全属性耐性-25%」を1回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '味単', text: 'スキルダメージ+100%', duration: 1,
        effectItems: {
          'スキルダメージ+': 100,
        },
      },
      {
        timing: '攻撃後',
        target: '敵全', text: '全属性耐性-25%', duration: 1,
        attributes: ['火', '氷', '雷', '風', '斬', '打', '突'],
        effectItems: {
          '属性耐性-': 25,
        },
      },

    ],
  },




  'セクター07': {
    attribute: '雷',
    area: '全',
    damage: 300,
    break: 37,
    wait: 200,
    text: 'この攻撃のクリティカル確率+100%\n攻撃後、味方全員に「クリティカルダメージ+30%」を2回行動終了するまで付与',
    effects: [
      {
        text: 'クリティカル確率+100%',
        effectItems: {
          'クリティカル確率+': 100,
        },
      },
      {
        timing: '攻撃後',
        target: '味全', text: 'クリティカルダメージ+30%', duration: 2,
        effectItems: {
          'クリティカルダメージ+': 30,
        },
      }
    ],
  },
  '潜力大還元': {
    attribute: '打',
    area: '全',
    damage: 240,
    break: 150,
    wait: 200,
    text: '攻撃後、対象に「打属性耐性-30%」を3回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵全', text: '打属性耐性-30%', duration: 3,
        attributes: ['打'],
        effectItems: {
          '属性耐性-': 30,
        },
      },
    ],
  },

  'ソフィアブロウ': {
    attribute: '雷',
    area: '単',
    damage: 56,
    break: 6,
    wait: 100,
    text: '攻撃後、自身のHPに応じ、自身のHPを0～30%回復(HP25～100%で少ないほど増加)',
    effects: [
      {
        timing: '攻撃後',
        conditions: ['自HPが少ないほど'],
        target: '自',
        text: 'HPを0～30%回復',
        effectItems: {
          'HP回復': 30,
        },
      },
    ],
  },


  'ソングオブフィナーレ': {
    attribute: '氷',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '攻撃前、対象に「氷属性耐性-50%」を3回攻撃を受けるまで付与\n攻撃後、対象に「受けるダメージ+20%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃前',
        target: '敵単', text: '氷属性耐性-50%', duration: 3,
        attributes: ['氷'],
        effectItems: {
          '属性耐性-': 50,
        },
      },
      {
        timing: '攻撃後',
        target: '敵単', text: '受けるダメージ+20%', duration: 2,
        effectItems: {
          '受けるダメージ+': 20,
        },
      }
    ],
  },

  '大地のラプソディー': {
    attribute: '雷',
    area: '全',
    damage: 240,
    break: 150,
    wait: 200,
    text: '攻撃後、対象に「麻痺」を2回行動開始するまで超高確率で付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵全', text: '麻痺', duration: 2,
        effectItems: {
          '麻痺': true,
        },
      },
    ],
  },
  'ダブルスマッシュ': {
    attribute: '火',
    area: '単',
    damage: 253,
    break: 37,
    wait: 200,
    text: '攻撃後、自身のHPを20%回復',
    effects: [
      {
        timing: '攻撃後',
        target: '自',
        text: 'HPを20%回復',
        effectItems: {
          'HP回復': 20,
        },
      }
    ],
  },

  '超回転シャベル': {
    attribute: '打',
    area: '単',
    damage: 277,
    break: 43,
    wait: 200,
    text: '攻撃後、自身の状態異常を回復',
    effects: [
      {
        timing: '攻撃後',
        target: '自',
        text: '状態異常を回復',
        effectItems: {
          '状態異常回復': true,
        },
      }
    ],
  },
  '超銀河級キック': {
    attribute: '打',
    area: '単',
    damage: 175,
    break: 143,
    wait: 200,
    text: '攻撃後、対象に「打属性耐性-20%」を2回攻撃を受けるまで付与し、\n対象に「受けるブレイクダメージ+20%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: '打属性耐性-20%', duration: 2,
        attributes: ['打'],
        effectItems: {
          '属性耐性-': 20,
        },
      },
      {
        timing: '攻撃後',
        target: '敵単', text: '受けるブレイクダメージ+20%', duration: 2,
        effectItems: {
          '受けるブレイクダメージ+': 20,
        },
      },
    ],
  },


  'ツインカリバーン': {
    attribute: '斬',
    area: '単',
    damage: 230,
    break: 157,
    wait: 200,
    text: '攻撃前、自身に「ブレイクダメージ+10%」を付与(上限50%)\n攻撃後、対象に「斬属性耐性-10%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃前',
        target: '自',
        text: 'ブレイクダメージ+10%',
        stack: 5,
        effectItems: {
          'ブレイクダメージ+': 10,
        },
      },
      {
        timing: '攻撃後',
        target: '敵単',
        text: '斬属性耐性-10%',
        duration: 2,
        attributes: ['斬'],
        effectItems: {
          '属性耐性-': 10,
        },
      },
    ],
  },
  '杖インパクト': {
    attribute: '氷',
    area: '単',
    damage: 75,
    break: 7,
    wait: 100,
    text: '攻撃後、自身に「受ける物理攻撃ダメージ-15%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自',
        text: '受ける物理攻撃ダメージ-15%',
        duration: 2,
        effectItems: {
          '受ける物理攻撃ダメージ-': 15,
        },
      },
    ],
  },




  'つららの舞': {
    attribute: '斬',
    area: '単',
    damage: 240,
    break: 27,
    wait: 175,
    text: '攻撃後、自身に「物攻・魔攻・素早さ+10%」を1回行動終了するまで付与し、\n自身に「物防・魔防+10%」を1回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自', text: '物攻・魔攻・素早さ+10%', duration: 1,
        effectItems: {
          '物攻+': 10,
          '魔攻+': 10,
          '素早さ+': 10,
        },
      },
      {
        timing: '攻撃後',
        target: '自', text: '物防・魔防+10%', duration: 1,
        effectItems: {
          '物防+': 10,
          '魔防+': 10,
        },
      },
    ],
  },
  'デュアルブラスト': {
    attribute: '斬',
    area: '単',
    damage: 302,
    break: 37,
    wait: 200,
    text: '対象がブレイク状態の時、ダメージ+40%',
    effects: [
      {
        text: 'ダメージ+40%', conditions: ['敵ブレイク'],
        effectItems: {
          'ダメージ+': 40,
        },
      },
    ],
  },
  'デュプリケイト': {
    attribute: '氷',
    area: '単',
    heal: 330,
    wait: 200,
    text: '回復後、対象の状態異常を回復し、\n対象に「受ける物理攻撃ダメージ-15%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '回復後',
        target: '味単', text: '状態異常を回復',
        effectItems: {
          '状態異常回復': 15,
        },
      },
      {
        timing: '回復後',
        target: '味単', text: '受ける物理攻撃ダメージ-15%', duration: 2,
        effectItems: {
          '受ける物理攻撃ダメージ-': 15,
        },
      },
    ],
  },
  'トゥインクルシャワー': {
    attribute: '雷',
    area: '全',
    heal: 106,
    wait: 200,
    text: '回復後、対象に「スキルダメージ+20%」を1回行動終了するまで付与',
    effects: [
      {
        target: '味全', text: 'スキルダメージ+20%', duration: 1,
        effectItems: {
          'スキルダメージ+': 20,
        },
      },
    ],
  },
  'とっておき': {
    attribute: '打',
    area: '全',
    wait: 200,
    text: '味方全員に「受けるダメージ-24%」を1回攻撃を受けるまで付与',
    effects: [
      {
        target: '味全', text: '受けるダメージ-24%', duration: 1,
        effectItems: {
          '受けるダメージ-': 24,
        },
      },
    ],
  },
  'とっておきクレープ': {
    attribute: '突',
    area: '単',
    heal: 330,
    wait: 200,
    text: '回復後、対象に「受ける魔法攻撃ダメージ-15%」を2回攻撃を受けるまで付与',
    effects: [
      {
        target: '味単', text: '受ける魔法攻撃ダメージ-15%', duration: 2,
        effectItems: {
          '受ける魔法攻撃ダメージ-': 15,
        },
      },
    ],
  },

  'とっておきザンバー': {
    attribute: '突',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '対象が毒状態の時、ダメージ+40%',
    effects: [
      {
        target: '敵単', text: 'ダメージ+40%', conditions: ['敵毒'],
        effectItems: {
          'ダメージ+': 40,
        },
      },
    ],
  },

  'トリックオアトリート': {
    attribute: '斬',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '攻撃後、味方全員それぞれに以下の効果をランダムで付与し、その抽選を4回行う\n・「スキルダメージ+20%」を1回行動終了するまで付与\n・「ブレイクダメージ+20%」を1回行動終了するまで付与\n・「受けるダメージ-20%」を1回攻撃を受けるまで付与',
    effects: [
      {
        timing: '行動',
        target: '味全', text: 'スキルダメージ+20%', duration: 1,
        effectItems: {
          'スキルダメージ+': 20,
        },
      },
      {
        timing: '行動',
        target: '味全', text: 'ブレイクダメージ+20%', duration: 1,
        effectItems: {
          'ブレイクダメージ+': 20,
        },
      },
      {
        timing: '行動',
        target: '味全', text: '受けるダメージ-20%', duration: 1,
        effectItems: {
          '受けるダメージ-': 20,
        },
      },
    ],
  },
  '南国うに': {
    attribute: '突',
    area: '全',
    damage: 177,
    break: 13,
    wait: 200,
    text: '敵の数に応じ、ダメージ+10%～30%(1体～4体で多いほど増加)\n攻撃後、自身に「スキルダメージ+20%」を1回行動終了するまで付与',
    effects: [
      {
        conditions: ['敵数に応じ'],
        text: 'ダメージ+10%～30%', value: 10, valueMax: 30,
        effectItems: {
          'ダメージ+': 10,
        },
      },
      {
        timing: '攻撃後',
        target: '自', text: 'スキルダメージ+20%', duration: 1,
        effectItems: {
          'スキルダメージ+': 20,
        },
      },
    ],
  },

  'ニンジンフエール': {
    attribute: '氷',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '対象のHPが50%以下の時、ダメージ+50%',
    effects: [
      {
        text: 'ダメージ+50%', conditions: ['敵HP50%以下'],
        effectItems: {
          'ダメージ+': 50,
        },
      },
    ],
  },

  '脳天割': {
    attribute: '斬',
    area: '単',
    damage: 90,
    break: 8,
    wait: 100,
    text: '敵が1体の時、ダメージ+10%',
    effects: [
      {
        text: 'ダメージ+10%', conditions: ['敵1'],
        effectItems: {
          'ダメージ+': 10,
        },
      },
    ],
  },


  'ノックスラッシュ': {
    attribute: '斬',
    area: '単',
    damage: 55,
    break: 6,
    wait: 100,
    text: '攻撃後、味方全員に「受ける物理攻撃ダメージ-5%」を1回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '味全', text: '受ける物理攻撃ダメージ-5%', duration: 1,
        effectItems: {
          '受ける物理攻撃ダメージ-': 5,
        },
      },
    ],
  },

  'ノックブロウ': {
    attribute: '打',
    area: '単',
    damage: 50,
    break: 20,
    wait: 75,
    text: '追加効果なし',
  },
  'ノブレスピアース': {
    attribute: '突',
    area: '単',
    damage: 293,
    break: 30,
    wait: 200,
    text: '攻撃後、対象に「毒」を2回行動開始するまで超高確率で付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: '毒', duration: 2,
        effectItems: {
          '毒': true,
        },
      },
    ],
  },
  'ハーヴェスタンプ': {
    attribute: '打',
    area: '全',
    damage: 300,
    break: 37,
    wait: 200,
    text: '攻撃後、自身のHPを50%回復',
    effects: [
      {
        timing: '攻撃後',
        target: '自', text: 'HPを50%回復',
        effectItems: {
          'HP回復': 50,
        },
      }
    ],
  },

  'バイオレントピラー': {
    attribute: '雷',
    area: '単',
    damage: 275,
    break: 31,
    wait: 200,
    text: '自身のHPに応じ、ダメージ+5%～25%(HP20～100%で少ないほど増加)\n攻撃前、自身に「スキルダメージ+5%」を付与(上限50%)',
    effects: [
      {
        conditions: ['自HPが少ないほど'],
        text: 'ダメージ+5%～25%', value: 5, valueMax: 25,
        effectItems: {
          'ダメージ+': 5,
        },
      },
      {
        timing: '攻撃前',
        target: '自', text: 'スキルダメージ+5%', stack: 10,
        effectItems: {
          'スキルダメージ+': 5,
        },
      },
    ],
  },
  'バイタルアップ': {
    attribute: '雷',
    area: '単',
    wait: 100,
    text: '味方1人に「スキルダメージ+9%」を付与(上限18%)し、\n対象に「ターン開始時、HP回復+9%」を2回行動開始するまで付与',
    effects: [
      {
        target: '味単', text: 'スキルダメージ+9%', stack: 2,
        effectItems: {
          'スキルダメージ+': 9,
        },
      },
      {
        target: '味単', text: 'ターン開始時、HP回復+19%', duration: 2,
        effectItems: {
          'ターン開始時HP回復': 9,
        },
      },
    ],
  },

  '花の加護': {
    attribute: '風',
    area: '単',
    heal: 250,
    wait: 200,
    text: '回復前、対象に「最大HP+5%」を付与(上限25%)',
    effects: [
      {
        timing: '回復前',
        target: '味単', text: '最大HP+5%', stack: 5,
        effectItems: {
          '最大HP+': 5,
        },
      },
    ],
  },
  'パンプキンボム': {
    attribute: '火',
    area: '全',
    damage: 166,
    break: 12,
    wait: 200,
    text: '攻撃後、敵の数に応じ、自身に「スキルダメージ+10～30%(1～3体で多いほど増加)」を3回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        //敵の数に応じ
        target: '自', text: 'スキルダメージ+10～30%', duration: 3,
        effectItems: {
          'スキルダメージ+': 30,
        },
      },
    ],
  },
  'ピースメーカーズ': {
    attribute: '風',
    area: '全',
    damage: 300,
    break: 37,
    wait: 200,
    text: '攻撃後、対象に「受けるダメージ+30%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵全', text: '受けるダメージ+30%', duration: 2,
        effectItems: {
          '受けるダメージ+': 30,
        },
      },
    ],
  },



  '秘術・審判の鎚': {
    attribute: '打',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '対象が状態異常時、ダメージ+40%',
    effects: [
      {
        text: 'ダメージ+40%', conditions: ['敵状態異常'],
        effectItems: {
          'ダメージ+': 40,
        },
      },
    ],
  },
  '陽と風のロンド': {
    attribute: '風',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '攻撃後、アイテムゲージを50%回復',
    effects: [
      {
        timing: '攻撃後',
        target: 'アイテム',
        text: 'アイテムゲージを50%回復',
        effectItems: {
          'アイテムゲージ回復': 50,
        },
      },
    ],
  },

  '百科繚乱の法': {
    attribute: '雷',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '攻撃後、対象に「全属性耐性-50%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: '全属性耐性-50%', duration: 2,
        attributes: ['火', '氷', '雷', '風', '斬', '打', '突'],
        effectItems: {
          '属性耐性-': 50,
        },
      },
    ],
  },
  'ファストシュート': {
    attribute: '突',
    area: '単',
    damage: 38,
    break: 18,
    wait: 100,
    text: '攻撃後、対象に「突属性耐性-10%」を5回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単',
        text: '突属性耐性-10%',
        duration: 5,
        attributes: ['突'],
        effectItems: {
          '属性耐性-': 10,
        },
      },
    ],
  },
  'ファルコンストーム': {
    attribute: '打',
    area: '単',
    damage: 301,
    break: 37,
    wait: 200,
    text: '自身のHPが50%以上の時、ダメージ+20%\nHPが最大の時、さらにダメージ+30%',
    effects: [
      {
        conditions: ['自HP50%以上'],
        text: 'ダメージ+20%',
        effectItems: {
          'ダメージ+': 20,
        },
      },
      {
        conditions: ['自HP100%'],
        text: 'ダメージ+30%',
        effectItems: {
          'ダメージ+': 30,
        },
      },
    ],
  },

  'ブーストショック': {
    attribute: '雷',
    area: '全',
    damage: 300,
    break: 37,
    wait: 200,
    text: '対象が麻痺状態の時、ダメージ+40%',
    effects: [
      {
        text: 'ダメージ+40%', conditions: ['敵麻痺'],
        effectItems: {
          'ダメージ+': 40,
        },
      },
    ],
  },
  'フォーキャスト': {
    attribute: '打',
    area: '単',
    damage: 70,
    break: 7,
    wait: 100,
    text: '攻撃後、このスキル使用前に物攻が最も高い味方1人に「物理攻撃ダメージ+10%」を付与(上限30%)',
    effects: [
      {
        timing: '攻撃後',
        target: '味単',
        text: '物理攻撃ダメージ+10%',
        stack: 3,
        effectItems: {
          '物理攻撃ダメージ+': 10,
        },
      },
    ],
  },



  'フォースブレイク': {
    attribute: '雷',
    area: '単',
    damage: 227,
    break: 31,
    wait: 200,
    text: '攻撃後、対象に「全属性耐性-30%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: '全属性耐性-30%', duration: 2,
        attributes: ['火', '氷', '雷', '風', '斬', '打', '突'],
        effectItems: {
          '属性耐性-': 30,
        },
      },
    ],
  },
  '不思議なレシピ': {
    attribute: '氷',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '対象が被ダメージUP状態の時、ダメージ+40%\n攻撃後、自身のHPを40%回復',
    effects: [
      {
        text: 'ダメージ+40%', conditions: ['敵被ダメージUP'],
        effectItems: {
          'ダメージ+': 40,
        },
      },
      {
        timing: '攻撃後',
        target: '自', text: 'HPを40%回復',
        effectItems: {
          'ダメージ+': 40,
        },
      }
    ],
  },

  'ぷにぷにデリバー': {
    attribute: '突',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '攻撃後、味方全員に「受ける魔法攻撃ダメージ-50%」を1回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '味全', text: '受ける魔法攻撃ダメージ-50%', duration: 1,
        effectItems: {
          '受ける魔法攻撃ダメージ-': 50,
        },
      }
    ],
  },
  'フライパンアタック': {
    attribute: '火',
    area: '単',
    damage: 75,
    break: 8,
    wait: 100,
    text: '攻撃後、対象に「火傷」を中確率で付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: '火傷',
        effectItems: {
          '火傷': true,
        },
      },
    ],
  },







  'フラジオレット': {
    attribute: '氷',
    area: '単',
    damage: 250,
    break: 37,
    wait: 200,
    text: '攻撃後、対象に「氷属性耐性-25%」を3回攻撃を受けるまで付与し、\n味方全員に「氷属性ダメージ+25%」を1回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: '氷属性耐性-25%', duration: 3,
        attributes: ['氷'],
        effectItems: {
          '属性耐性-': 25,
        },
      },
      {
        timing: '攻撃後',
        target: '味全',
        text: '氷属性ダメージ+25%',
        duration: 1,
        attributes: ['氷'],
        effectItems: {
          '属性ダメージ+': 25,
        },
      },
    ],
  },
  'プラズマブレイク': {
    attribute: '斬',
    area: '全',
    damage: 300,
    break: 37,
    wait: 200,
    text: '対象がブレイク状態の時、ダメージ+50%',
    effects: [
      {
        conditions: ['敵ブレイク'],
        text: 'ダメージ+50%',
        effectItems: {
          'ダメージ+': 50,
        },
      },
    ],
  },

  'フラッシュカット': {
    attribute: '斬',
    area: '単',
    damage: 92,
    break: 8,
    wait: 100,
    text: '攻撃後、自身に「スキルダメージ+15%」を1回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自', text: 'スキルダメージ+15%', duration: 1,
        effectItems: {
          'スキルダメージ+': 15,
        },
      },
    ],
  },
  'ブラッドスラスト': {
    attribute: '打',
    area: '単',
    damage: 78,
    break: 8,
    wait: 100,
    text: '攻撃後、自身に「受ける物理攻撃ダメージ-15%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自', text: '受ける物理攻撃ダメージ-15%', duration: 2,
        effectItems: {
          '受ける物理攻撃ダメージ-': 15,
        },
      },
    ],
  },

  'フルフロルスタッフ': {
    attribute: '風',
    area: '単',
    damage: 75,
    break: 8,
    wait: 100,
    text: '攻撃後、自身のHPを20%回復',
    effects: [
      {
        timing: '攻撃後',
        target: '自', text: 'HPを20%回復',
        effectItems: {
          'HP回復': 20,
        },
      }
    ],
  },
  'フレイムキャスト': {
    attribute: '火',
    area: '単',
    damage: 71,
    break: 6,
    wait: 100,
    text: '攻撃後、対象に「火属性耐性-20%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: '火属性耐性-20%', duration: 2,
        attributes: ['火'],
        effectItems: {
          '属性耐性-': 20,
        },
      },
    ],
  },
  'フレイムフォーゲル': {
    attribute: '火',
    area: '全',
    damage: 151,
    break: 15,
    wait: 275,
    text: '攻撃後、自身に「回避(確率100%)」を1回攻撃されるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自', text: '回避(確率100%)', duration: 1,
        effectItems: {
          '回避': 100,
        },
      },
    ],
  },
  'フレイムブリーズ': {
    attribute: '氷',
    area: '単',
    damage: 267,
    break: 31,
    wait: 175,
    shortText: '攻撃後、自身にスキルダメージアップ',
    text: '攻撃後、自身に「スキルダメージ+30%」を2回行動終了するまで付与',
    effects: [
      {
        target: '自',
        timing: '攻撃後',
        text: 'スキルダメージ+30%', duration: 2,
        effectItems: {
          'スキルダメージ+': 30,
        },
      },
    ],
  },

  'ヘヴィースラッシュ': {
    attribute: '斬',
    area: '単',
    damage: 53,
    break: 6,
    wait: 100,
    text: '攻撃後、自身に「受ける魔法攻撃ダメージ-15%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自', text: '受ける魔法攻撃ダメージ-15%', duration: 2,
        effectItems: {
          '受ける魔法攻撃ダメージ-': 15,
        },
      },
    ],
  },



  'ヘブンズクエーサー': {
    attribute: '火',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '攻撃後、自身に「スキルダメージ+25%」を付与(上限50%)',
    effects: [
      {
        timing: '攻撃後',
        target: '自', text: 'スキルダメージ+25%', stack: 2,
        effectItems: {
          'スキルダメージ+': 25,
        },
      }
    ],
  },
  'ホーリーエッジ': {
    attribute: '突',
    area: '単',
    damage: 82,
    break: 10,
    wait: 100,
    text: '追加効果なし',
  },
  '星と月のソナタ': {
    attribute: '火',
    area: '単',
    damage: 400,
    break: 375,
    wait: 200,
    text: '攻撃後、対象に「受けるブレイクダメージ+50%」を3回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: '受けるブレイクダメージ+50%', duration: 3,
        effectItems: {
          '受けるブレイクダメージ+': 50,
        },
      },
    ],
  },
  'マイティラブコール': {
    attribute: '斬',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: 'WEAK攻撃時、ダメージ+40%',
    effects: [
      {
        conditions: ['WEAK攻撃'],
        text: 'ダメージ+40%',
        effectItems: {
          'ダメージ+': 40,
        },
      },
    ],
  },


  'マナを断絶するもの': {
    attribute: '斬',
    area: '単',
    damage: 400,
    break: 375,
    wait: 200,
    text: '攻撃後、対象に「斬属性耐性-30%」を5回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: '斬属性耐性-30%', duration: 5,
        attributes: ['斬'],
        effectItems: {
          '属性耐性-': 30,
        },
      },
    ],
  },

  'ミステルレーベン': {
    attribute: '雷',
    area: '全',
    damage: 122,
    break: 60,
    wait: 200,
    text: '攻撃後、対象に「受けるダメージ+5%」を付与(上限15%)',
    effects: [
      {
        timing: '攻撃後',
        target: '敵全', text: '受けるダメージ+5%', stack: 3,
        effectItems: {
          '受けるダメージ+': 5,
        },
      },
    ],
  },
  '南の国の楽器': {
    attribute: '風',
    area: '全',
    wait: 275,
    text: '味方全員に「魔攻+12%」を2回行動終了するまで付与し、\n対象に「魔防+12%」を2回攻撃を受けるまで付与し、\n対象のHPを5%回復',
    effects: [
      {
        timing: '行動',
        target: '味全', text: '魔攻+12%', duration: 2,
        effectItems: {
          '魔攻+': 12,
        },
      },
      {
        timing: '行動',
        target: '味全', text: '魔防+12%', duration: 2,
        effectItems: {
          '魔防+': 12,
        },
      },
      {
        timing: '行動',
        target: '味全', text: 'HPを5%回復',
        effectItems: {
          'HP回復': 5,
        },
      },
    ],
  },
  'メッサーベント': {
    attribute: '突',
    area: '単',
    damage: 272,
    break: 30,
    wait: 200,
    text: 'クリティカル確率+15%\nクリティカル攻撃時、クリティカルダメージ+20%',
    effects: [
      {
        text: 'クリティカル確率+15%',
        effectItems: {
          'クリティカル確率+': 15,
        },
      },
      {
        text: 'クリティカルダメージ+20%',
        effectItems: {
          'クリティカルダメージ+': 20,
        },
      },
    ],
  },

  'メテオストーム': {
    attribute: '火',
    area: '全',
    damage: 300,
    break: 37,
    wait: 200,
    text: '敵の数に応じ、ダメージ+40～100%(1～3体で多いほど増加)',
    effects: [
      {
        //敵の数に応じ
        text: 'ダメージ+40～100%',
        effectItems: {
          'ダメージ+': 100,
        },
      },
    ],
  },

  'メルっとランウェイ': {
    attribute: '氷',
    area: '単',
    damage: 368,
    break: 55,
    wait: 150,
    shortText: '攻撃後、自身に超素早さアップ\n自身にスキルダメージアップ',
    text: '攻撃後、自身に「素早さ+50%」を1回行動終了するまで付与し、\n自身に「スキルダメージ+15%」を3回行動終了するまで付与',
    effects: [
      {
        target: '自',
        timing: '攻撃後',
        text: '素早さ+50%', duration: 1,
        effectItems: {
          '素早さ+': 50,
        },
      },
      {
        target: '自',
        timing: '攻撃後',
        text: 'スキルダメージ+15%', duration: 3,
        effectItems: {
          'スキルダメージ+': 15,
        },
      },
    ],
  },
  'メルルショット': {
    attribute: '風',
    area: '単',
    damage: 75,
    break: 8,
    wait: 100,
    text: '攻撃後、対象に「受けるダメージ+10%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単',
        text: '受けるダメージ+10%',
        duration: 2,
        effectItems: {
          '受けるダメージ+': 10,
        },
      },
    ],
  },









  '夜のとばり': {
    attribute: '斬',
    area: '単',
    damage: 500,
    break: 93,
    wait: 200,
    text: '自身に付与されている強化効果の数に応じ、ダメージ+10～120%(1～20個で多いほど増加)\n※バトル開始時に発動した回数制限のない強化効果は含まない',
    effects: [
      {
        conditions: ['自強化効果数に応じ'],
        text: 'ダメージ+10～120%',
        value: 120,
        effectItems: {
          'ダメージ+': 10,
        },
      },
    ],
  },
  //\n[red]※ダンジョンで付与される「恩恵」や、四元の塔で付与される「フロア効果」は含む(公式より)[/red]



  'ライザスペシャル': {
    attribute: '火',
    area: '単',
    damage: 91,
    break: 8,
    wait: 100,
    text: '攻撃時、自身に「バーストスキルダメージ+20%」を付与(上限100%)',
    effects: [
      {
        timing: '攻撃後',
        target: '自', text: 'バーストスキルダメージ+20%',
        stack: 5,
        effectItems: {
          'バーストスキルダメージ+': 20,
        },
      }
    ],
  },
  'ラケーテレヘルン': {
    attribute: '氷',
    area: '全',
    damage: 300,
    break: 32,
    wait: 200,
    text: '攻撃後、味方全員に「受ける物理攻撃ダメージ-50%」を1回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '味全', text: '受ける物理攻撃ダメージ-50%', duration: 1,
        effectItems: {
          '受ける物理攻撃ダメージ-': 50,
        },
      }
    ],
  },

  'ラビットバッシュ': {
    attribute: '突',
    area: '単',
    damage: 77,
    break: 8,
    wait: 100,
    text: '攻撃後、自身に「受ける魔法攻撃ダメージ-15%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自', text: '受ける魔法攻撃ダメージ-15%', duration: 2,
        effectItems: {
          '受ける魔法攻撃ダメージ-': 15,
        },
      },
    ],
  },

  'リープシュート': {
    attribute: '突',
    area: '単',
    damage: 200,
    break: 165,
    wait: 200,
    text: '追加効果なし',
  },
  '竜の砂時計': {
    attribute: '火',
    area: '全',
    damage: 300,
    break: 37,
    wait: 200,
    text: '攻撃後、対象に「ダメージ-50%」を1回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵全', text: 'ダメージ-50%', duration: 1,
        effectItems: {
          'ダメージ-': 50,
        },
      },
    ],
  },
  'リワインドスラッシュ': {
    attribute: '斬',
    area: '単',
    damage: 400,
    wait: 200,
    text: '攻撃後、対象を「強制ブレイク」し、\n対象に「受けるダメージ+20%」を付与(上限40%)',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単',
        text: '強制ブレイク',
        effectItems: {
          '強制ブレイク': true,
        },
      },
      {
        timing: '攻撃後',
        target: '敵単',
        text: '受けるダメージ+20%',
        stack: 2,
        effectItems: {
          '受けるダメージ+': 20,
        },
      },
    ],
  },
  'リワインドフロー': {
    attribute: '打',
    area: '全',
    damage: 300,
    break: 37,
    wait: 200,
    text: '攻撃後、対象に「受けるダメージ+50%」を1回攻撃を受けるまで付与し、\nこのスキル使用前に物攻が最も高い味方1人に「物理攻撃ダメージ+30%」を1回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単',
        text: '受けるダメージ+50%',
        duration: 1,
        effectItems: {
          '受けるダメージ+': 50,
        },
      },
      {
        target: '味単',
        text: '物理攻撃ダメージ+30%',
        duration: 1,
        effectItems: {
          '物理攻撃ダメージ+': 30,
        },
      },
    ],
  },


  'ルナティックスフィア': {
    attribute: '火',
    area: '単',
    damage: 61,
    break: 21,
    wait: 100,
    text: '攻撃後、対象に「火属性耐性-10%」を5回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: '火属性耐性-10%', duration: 5,
        attributes: ['火'],
        effectItems: {
          '属性耐性-': 10,
        },
      },
    ],
  },
  'レイディエンド': {
    attribute: '火',
    area: '単',
    damage: 450,
    break: 93,
    wait: 200,
    text: '自身のHPが50%以上の時、ダメージ+30%\n攻撃後、自身のHPが50%以下の時、自身のHPを30%回復',
    effects: [
      {
        conditions: ['自HP50%以上'],
        text: 'ダメージ+30%',
        effectItems: {
          'ダメージ+': 30,
        },
      },
      {
        timing: '攻撃後',
        conditions: ['自HP50%以下'],
        target: '自',
        text: 'HPを30%回復',
        effectItems: {
          'HP回復': 30,
        },
      }
    ],
  },


  'レイドスラッシュ': {
    attribute: '突',
    area: '単',
    damage: 87,
    break: 7,
    wait: 100,
    text: '敵の数に応じ、ダメージ+10%～20%(1体～4体で多いほど増加)',
    effects: [
      {
        conditions: ['敵数に応じ'],
        text: 'ダメージ+10%～20%', value: 10, valueMax: 20,
        effectItems: {
          'ダメージ+': 10,
        },
      },
    ],
  },
  '連続フラム投げ': {
    attribute: '火',
    area: '全',
    damage: 120,
    break: 60,
    wait: 200,
    text: '攻撃後、自身に「ブレイクダメージ+60%」を1回行動終了するまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '自', text: 'ブレイクダメージ+60%', duration: 1,
        effectItems: {
          'ブレイクダメージ+': 60,
        },
      },
    ],
  },
  'ローゼンラバー': {
    attribute: '斬',
    area: '単',
    damage: 250,
    break: 25,
    wait: 200,
    text: '攻撃前、自身に「スキルダメージ+15%」を付与(上限150%)',
    effects: [
      {
        timing: '攻撃前',
        target: '自',
        text: 'スキルダメージ+15%',
        stack: 10,
        effectItems: {
          'スキルダメージ+': 150,
        },
      },
    ],
  },




  'ロロナスペシャル': {
    attribute: '氷',
    area: '単',
    damage: 113,
    break: 10,
    wait: 100,
    text: '攻撃後、対象に「受けるダメージ+10%」を2回行動終了するまで付与し、\n対象に「受けるダメージ+10%」を2回攻撃を受けるまで付与',
    effects: [
      {
        timing: '攻撃後',
        target: '敵単', text: '受けるダメージ+10%', duration: 2,
        effectItems: {
          '受けるダメージ+': 10,
        },
      },
      {
        timing: '攻撃後',
        target: '敵単', text: '受けるダメージ+10%', duration: 2,
        effectItems: {
          '受けるダメージ+': 10,
        },
      },
    ],
    note: '2023/10/31不具合修正内容\n修正前：攻撃後、対象に「受けるダメージ+10%」を2回行動終了するまで付与'
  },

}

export default skill;
