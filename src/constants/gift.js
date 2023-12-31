const gift = {

  //攻撃、戦闘
  '剛力の祝福': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '物理攻撃のダメージ3～30%アップ',
    effects: [
      {
        text: 'ダメージ3～30%アップ',
        effectItems: {
          'ダメージ+': 30,
        },
      },
    ],
  },
  '斬の祝福': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '斬属性のダメージ5～45%アップ',
    effects: [
      {
        text: 'ダメージ5～45%アップ',
        effectItems: {
          'ダメージ+': 45,
        },
      },
    ],
  },
  '打の祝福': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '打属性のダメージ5～45%アップ',
    effects: [
      {
        text: 'ダメージ5～45%アップ',
        effectItems: {
          'ダメージ+': 45,
        },
      },
    ],
  },
  '突の祝福': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '突属性のダメージ5～45%アップ',
    effects: [
      {
        text: 'ダメージ5～45%アップ',
        effectItems: {
          'ダメージ+': 45,
        },
      },
    ],
  },
  '魔力の祝福': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '魔法攻撃のダメージ3～30%アップ',
    effects: [
      {
        text: 'ダメージ3～30%アップ',
        effectItems: {
          'ダメージ+': 30,
        },
      },
    ],
  },
  '火の祝福': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '火属性のダメージ5～45%アップ',
    effects: [
      {
        text: 'ダメージ5～45%アップ',
        effectItems: {
          'ダメージ+': 45,
        },
      },
    ],
  },
  '氷の祝福': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '氷属性のダメージ5～45%アップ',
    effects: [
      {
        text: 'ダメージ5～45%アップ',
        effectItems: {
          'ダメージ+': 45,
        },
      },
    ],
  },
  '風の祝福': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '風属性のダメージ5～45%アップ',
    effects: [
      {
        text: 'ダメージ5～45%アップ',
        effectItems: {
          'ダメージ+': 45,
        },
      },
    ],
  },
  '雷の祝福': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '雷属性のダメージ5～45%アップ',
    effects: [
      {
        text: 'ダメージ5～45%アップ',
        effectItems: {
          'ダメージ+': 45,
        },
      },
    ],
  },
  'ぷに特攻': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: 'ぷに種族に与えるダメージ6～60%アップ',
    effects: [
      {
        text: 'ダメージ6～60%アップ',
        effectItems: {
          'ダメージ+': 60,
        },
      },
    ],
  },
  '精霊特攻': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '精霊種族に与えるダメージ6～60%アップ',
    effects: [
      {
        text: 'ダメージ6～60%アップ',
        effectItems: {
          'ダメージ+': 60,
        },
      },
    ],
  },
  '獣特攻': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '獣種族に与えるダメージ6～60%アップ',
    effects: [
      {
        text: 'ダメージ6～60%アップ',
        effectItems: {
          'ダメージ+': 60,
        },
      },
    ],
  },
  '鳥特攻': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '鳥種族に与えるダメージ6～60%アップ',
    effects: [
      {
        text: 'ダメージ6～60%アップ',
        effectItems: {
          'ダメージ+': 60,
        },
      },
    ],
  },
  '水棲特攻': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '水棲種族に与えるダメージ6～60%アップ',
    effects: [
      {
        text: 'ダメージ6～60%アップ',
        effectItems: {
          'ダメージ+': 60,
        },
      },
    ],
  },
  '使い切り攻撃強化': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '使用回数が1回の時、ダメージ5～45%アップ',
    effects: [
      {
        text: 'ダメージ5～45%アップ',
        effectItems: {
          'ダメージ+': 54,
        },
      },
    ],
  },
  '追い打ち強化': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: 'ブレイク中の敵へのダメージ6～54%アップ',
    effects: [
      {
        text: 'ダメージ6～54%アップ',
        effectItems: {
          'ダメージ+': 54,
        },
      },
    ],
  },
  '破壊力上昇': {
    giftType: '攻撃',
    target: '戦闘アイテム',
    text: '戦闘アイテムが与えるダメージ6～54%アップ',
    effects: [
      {
        text: 'ダメージ6～54%アップ',
        effectItems: {
          'ダメージ+': 54,
        },
      },
    ],
  },



  //攻撃装備
  '与ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: 'スキルダメージ2～15%アップ',
    effects: [
      {
        text: 'スキルダメージ2～15%アップ',
        effectItems: {
          'スキルダメージ+': 15,
        },
      },
    ],
  },
  'スキル威力上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: 'スキル威力3～25%アップ',
    effects: [
      {
        text: 'スキル威力3～25%アップ',
        effectItems: {
          'スキル威力+': 25,
        },
      },
    ],
  },
  '斬ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '斬属性のスキルダメージ3～25%アップ',
    effects: [
      {
        text: 'スキルダメージ3～25%アップ',
        effectItems: {
          'スキルダメージ+': 25,
        },
      },
    ],
  },
  '打ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '打属性のスキルダメージ3～25%アップ',
    effects: [
      {
        text: 'スキルダメージ3～25%アップ',
        effectItems: {
          'スキルダメージ+': 25,
        },
      },
    ],
  },
  '突ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '突属性のスキルダメージ3～25%アップ',
    effects: [
      {
        text: 'スキルダメージ3～25%アップ',
        effectItems: {
          'スキルダメージ+': 25,
        },
      },
    ],
  },
  '火ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '火属性のスキルダメージ3～25%アップ',
    effects: [
      {
        text: 'スキルダメージ3～25%アップ',
        effectItems: {
          'スキルダメージ+': 25,
        },
      },
    ],
  },
  '氷ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '氷属性のスキルダメージ3～25%アップ',
    effects: [
      {
        text: 'スキルダメージ3～25%アップ',
        effectItems: {
          'スキルダメージ+': 25,
        },
      },
    ],
  },
  '風ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '風属性のスキルダメージ3～25%アップ',
    effects: [
      {
        text: 'スキルダメージ3～25%アップ',
        effectItems: {
          'スキルダメージ+': 25,
        },
      },
    ],
  },
  '雷ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '雷属性のスキルダメージ3～25%アップ',
    effects: [
      {
        text: 'スキルダメージ3～25%アップ',
        effectItems: {
          'スキルダメージ+': 25,
        },
      },
    ],
  },
  '物理ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '物理攻撃のスキルダメージ2～20%アップ',
    effects: [
      {
        text: 'スキルダメージ2～20%アップ',
        effectItems: {
          'スキルダメージ+': 20,
        },
      },
    ],
  },
  '魔法ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '魔法攻撃のスキルダメージ2～20%アップ',
    effects: [
      {
        text: 'スキルダメージ2～20%アップ',
        effectItems: {
          'スキルダメージ+': 20,
        },
      },
    ],
  },
  'ブレイク中ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: 'ブレイク中の敵へのダメージ3～30%アップ',
    effects: [
      {
        text: 'ダメージ3～30%アップ',
        effectItems: {
          'スキルダメージ+': 30,
        },
      },
    ],
  },
  'ブレイクダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: 'ブレイクダメージ2～15%アップ',
    effects: [
      {
        text: 'ブレイクダメージ2～15%アップ',
        effectItems: {
          'ブレイクダメージ+': 15,
        },
      },
    ],
  },
  '物理ブレイクダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '物理攻撃のブレイクダメージ2～20%アップ',
    effects: [
      {
        text: 'ブレイクダメージ2～20%アップ',
        effectItems: {
          'ブレイクダメージ+': 20,
        },
      },
    ],
  },
  '魔法ブレイクダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '魔法攻撃のブレイクダメージ2～20%アップ',
    effects: [
      {
        text: 'ブレイクダメージ2～20%アップ',
        effectItems: {
          'ブレイクダメージ+': 20,
        },
      },
    ],
  },
  'ブレイクダメージ上昇【背水】': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: 'HPが50%以下の時、ブレイクダメージ2～20%アップ',
    effects: [
      {
        text: 'ブレイクダメージ2～20%アップ',
        effectItems: {
          'ブレイクダメージ+': 20,
        },
      },
    ],
  },
  'ブレイクダメージ上昇【渾身】': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: 'HP満タン時、ブレイクダメージ2～20%アップ',
    effects: [
      {
        text: 'ブレイクダメージ2～20%アップ',
        effectItems: {
          'ブレイクダメージ+': 20,
        },
      },
    ],
  },
  '単体攻撃威力上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '単体攻撃のスキル威力3～25%アップ',
    effects: [
      {
        text: 'スキル威力3～25%アップ',
        effectItems: {
          'スキル威力+': 25,
        },
      },
    ],
  },
  '全体攻撃威力上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '全体攻撃のスキル威力3～25%アップ',
    effects: [
      {
        text: 'スキル威力3～25%アップ',
        effectItems: {
          'スキル威力+': 25,
        },
      },
    ],
  },
  '魔法ダメージ上昇【渾身】': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: 'HP満タン時、魔法攻撃のダメージ3～30%アップ',
    effects: [
      {
        text: 'ダメージ3～30%アップ',
        effectItems: {
          'スキルダメージ+': 30,
        },
      },
    ],
  },
  '魔法ダメージ上昇【背水】': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: 'HPが50%以下の時、魔法攻撃のダメージ4～35%アップ',
    effects: [
      {
        text: 'ダメージ4～35%アップ',
        effectItems: {
          'スキルダメージ+': 35,
        },
      },
    ],
  },
  '物理ダメージ上昇【渾身】': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: 'HP満タン時、物理攻撃のダメージ3～30%アップ',
    effects: [
      {
        text: 'ダメージ3～30%アップ',
        effectItems: {
          'スキルダメージ+': 30,
        },
      },
    ],
  },
  '物理ダメージ上昇【背水】': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: 'HPが50%以下の時、物理攻撃のダメージ4～35%アップ',
    effects: [
      {
        text: 'ダメージ4～35%アップ',
        effectItems: {
          'スキルダメージ+': 35,
        },
      },
    ],
  },







  'ぷにダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: 'ぷに種族に与えるダメージ4～35%アップ',
    effects: [
      {
        text: 'ダメージ4～35%アップ',
        effectItems: {
          'スキルダメージ+': 35,
        },
      },
    ],
  },
  '獣ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '獣種族に与えるダメージ4～35%アップ',
    effects: [
      {
        text: 'ダメージ4～35%アップ',
        effectItems: {
          'スキルダメージ+': 35,
        },
      },
    ],
  },
  '精霊ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '精霊種族に与えるダメージ4～35%アップ',
    effects: [
      {
        text: 'ダメージ4～35%アップ',
        effectItems: {
          'スキルダメージ+': 35,
        },
      },
    ],
  },
  '鳥ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '鳥種族に与えるダメージ4～35%アップ',
    effects: [
      {
        text: 'ダメージ4～35%アップ',
        effectItems: {
          'スキルダメージ+': 35,
        },
      },
    ],
  },
  '水棲ダメージ上昇': {
    giftType: '攻撃',
    target: '装備アイテム',
    text: '水棲種族に与えるダメージ4～35%アップ',
    effects: [
      {
        text: 'ダメージ4～35%アップ',
        effectItems: {
          'スキルダメージ+': 35,
        },
      },
    ],
  },





  //強化、戦闘
  '守護の祝福': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '「物防1～5%アップ」を1回攻撃されるまで付与\n「魔防1～5%アップ」を1回攻撃されるまで付与',
    effects: [
      {
        text: '物防1～5%アップ',
        effectItems: {
          '物防+': 5,
        },
      },
      {
        text: '魔防1～5%アップ',
        effectItems: {
          '魔防+': 5,
        },
      },
    ],
  },
  '魔防の祝福': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '「魔防1～8%アップ」を1回攻撃されるまで付与',
    effects: [
      {
        text: '魔防1～8%アップ',
        effectItems: {
          '魔防+': 8,
        },
      },
    ],
  },
  '物防の祝福': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '「物防1～8%アップ」を1回攻撃されるまで付与',
    effects: [
      {
        text: '物防1～8%アップ',
        effectItems: {
          '物防+': 8,
        },
      },
    ],
  },
  '斬の盾': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '対象に「斬属性耐性1～8%アップ」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '斬属性耐性1～8%アップ',
        effectItems: {
          '斬属性耐性+': 8,
        },
      },
    ],
  },
  '打の盾': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '対象に「打属性耐性1～8%アップ」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '打属性耐性1～8%アップ',
        effectItems: {
          '打属性耐性+': 8,
        },
      },
    ],
  },
  '突の盾': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '対象に「突属性耐性1～8%アップ」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '突属性耐性1～8%アップ',
        effectItems: {
          '突属性耐性+': 8,
        },
      },
    ],
  },
  '火の盾': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '対象に「火属性耐性1～8%アップ」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '火属性耐性1～8%アップ',
        effectItems: {
          '火属性耐性+': 8,
        },
      },
    ],
  },
  '氷の盾': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '対象に「氷属性耐性1～8%アップ」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '氷属性耐性1～8%アップ',
        effectItems: {
          '氷属性耐性+': 8,
        },
      },
    ],
  },
  '風の盾': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '対象に「風属性耐性1～8%アップ」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '風属性耐性1～8%アップ',
        effectItems: {
          '風属性耐性+': 8,
        },
      },
    ],
  },
  '雷の盾': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '対象に「雷属性耐性1～8%アップ」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '雷属性耐性1～8%アップ',
        effectItems: {
          '雷属性耐性+': 8,
        },
      },
    ],
  },
  'ぷに特防': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '対象に「ぷに種族から受けるダメージ1～8%ダウン」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '受けるダメージ1～8%ダウン',
        effectItems: {
          '受けるダメージ-': 8,
        },
      },
    ],
  },
  '精霊特防': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '対象に「精霊種族から受けるダメージ1～8%ダウン」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '受けるダメージ1～8%ダウン',
        effectItems: {
          '受けるダメージ-': 8,
        },
      },
    ],
  },
  '獣特防': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '対象に「獣種族から受けるダメージ1～8%ダウン」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '受けるダメージ1～8%ダウン',
        effectItems: {
          '受けるダメージ-': 8,
        },
      },
    ],
  },
  '鳥特防': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '対象に「鳥種族から受けるダメージ1～8%ダウン」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '受けるダメージ1～8%ダウン',
        effectItems: {
          '受けるダメージ-': 8,
        },
      },
    ],
  },
  '水棲特防': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '対象に「水棲種族から受けるダメージ1～8%ダウン」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '受けるダメージ1～8%ダウン',
        effectItems: {
          '受けるダメージ-': 8,
        },
      },
    ],
  },
  '会心の出来': {
    giftType: '強化',
    target: '戦闘アイテム',
    text: '「クリティカル確率1～8%アップ」を1回行動終了するまで付与',
    effects: [
      {
        text: 'クリティカル確率1～8%アップ',
        effectItems: {
          'クリティカル確率+': 8,
        },
      },
    ],
  },


  //強化、装備
  '斬耐性上昇': {
    giftType: '強化',
    target: '装備アイテム',
    text: '斬属性耐性1～10%アップ',
    effects: [
      {
        text: '斬属性耐性1～10%アップ',
        effectItems: {
          '斬属性耐性+': 10,
        },
      },
    ],
  },
  '打耐性上昇': {
    giftType: '強化',
    target: '装備アイテム',
    text: '打属性耐性1～10%アップ',
    effects: [
      {
        text: '打属性耐性1～10%アップ',
        effectItems: {
          '打属性耐性+': 10,
        },
      },
    ],
  },
  '突耐性上昇': {
    giftType: '強化',
    target: '装備アイテム',
    text: '突属性耐性1～10%アップ',
    effects: [
      {
        text: '突属性耐性1～10%アップ',
        effectItems: {
          '突属性耐性+': 10,
        },
      },
    ],
  },
  '火耐性上昇': {
    giftType: '強化',
    target: '装備アイテム',
    text: '火属性耐性1～10%アップ',
    effects: [
      {
        text: '火属性耐性1～10%アップ',
        effectItems: {
          '火属性耐性+': 10,
        },
      },
    ],
  },
  '氷耐性上昇': {
    giftType: '強化',
    target: '装備アイテム',
    text: '氷属性耐性1～10%アップ',
    effects: [
      {
        text: '氷属性耐性1～10%アップ',
        effectItems: {
          '氷属性耐性+': 10,
        },
      },
    ],
  },
  '風耐性上昇': {
    giftType: '強化',
    target: '装備アイテム',
    text: '風属性耐性1～10%アップ',
    effects: [
      {
        text: '風属性耐性1～10%アップ',
        effectItems: {
          '風属性耐性+': 10,
        },
      },
    ],
  },
  '雷耐性上昇': {
    giftType: '強化',
    target: '装備アイテム',
    text: '雷属性耐性1～10%アップ',
    effects: [
      {
        text: '雷属性耐性1～10%アップ',
        effectItems: {
          '雷属性耐性+': 10,
        },
      },
    ],
  },
  '物理耐性上昇': {
    giftType: '強化',
    target: '装備アイテム',
    text: '物理攻撃から受けるダメージ1～5%ダウン',
    effects: [
      {
        text: '受けるダメージ1～5%ダウン',
        effectItems: {
          '受けるダメージ-': 5,
        },
      },
    ],
  },
  '魔法耐性上昇': {
    giftType: '強化',
    target: '装備アイテム',
    text: '魔法攻撃から受けるダメージ1～5%ダウン',
    effects: [
      {
        text: '受けるダメージ1～5%ダウン',
        effectItems: {
          '受けるダメージ-': 5,
        },
      },
    ],
  },
  '全耐性上昇【背水】': {
    giftType: '強化',
    target: '装備アイテム',
    text: 'HPが50%以下の時、受けるダメージ1～10%ダウン',
    effects: [
      {
        text: '受けるダメージ1～10%ダウン',
        effectItems: {
          '受けるダメージ-': 10,
        },
      },
    ],
  },
  '魔法耐性上昇【渾身】': {
    giftType: '強化',
    target: '装備アイテム',
    text: 'HP満タン時、受ける魔法攻撃のダメージ2～15%ダウン',
    effects: [
      {
        text: 'ダメージ2～15%ダウン',
        effectItems: {
          '受けるダメージ-': 15,
        },
      },
    ],
  },
  '魔法耐性上昇【D】': {
    giftType: '強化',
    target: '装備アイテム',
    text: 'ディフェンダーへの魔法攻撃のダメージ1～5%ダウン',
    effects: [
      {
        text: 'ダメージ1～5%ダウン',
        effectItems: {
          '受けるダメージ-': 5,
        },
      },
    ],
  },
  '物理耐性上昇【渾身】': {
    giftType: '強化',
    target: '装備アイテム',
    text: 'HP満タン時、受ける物理攻撃のダメージ2～15%ダウン',
    effects: [
      {
        text: 'ダメージ2～15%ダウン',
        effectItems: {
          '受けるダメージ-': 15,
        },
      },
    ],
  },
  '物理耐性上昇【D】': {
    giftType: '強化',
    target: '装備アイテム',
    text: 'ディフェンダーへの物理攻撃のダメージ1～5%ダウン',
    effects: [
      {
        text: 'ダメージ1～5%ダウン',
        effectItems: {
          '受けるダメージ-': 5,
        },
      },
    ],
  },

  '全体攻撃耐性上昇': {
    giftType: '強化',
    target: '装備アイテム',
    text: '全体攻撃から受けるダメージ3～25%ダウン',
    effects: [
      {
        text: '受けるダメージ3～25%ダウン',
        effectItems: {
          '受けるダメージ-': 25,
        },
      },
    ],
  },

  '物理/魔法耐性アップ強化【D】': {
    giftType: '強化',
    target: '装備アイテム',
    text: '対象がディフェンダーへ与える「物理被ダメージダウン」と「魔法被ダメージダウン」の効果量5～50%アップ',
    effects: [
      {
        text: '「物理被ダメージダウン」と「魔法被ダメージダウン」の効果量5～50%アップ',
        effectItems: {
          '与える物理/魔法被ダメージダウン効果量+': 50,
        },
      },
    ],
    note:'2023/10/24不具合修正内容\n修正前:「耐性バフ強化【D】」　ディフェンダーへ与える耐性強化の効果量5～50%アップ',
  },
  'ダメージバフ強化【A】': {
    giftType: '強化',
    target: '装備アイテム',
    text: 'アタッカーへ与えるダメージ強化の効果量5～50%アップ',
    effects: [
      {
        text: '与えるダメージ強化の効果量5～50%アップ',
        effectItems: {
          '与えるダメージ強化効果量+': 50,
        },
      },
    ],
  },
  'ダメージバフ強化【B】': {
    giftType: '強化',
    target: '装備アイテム',
    text: 'ブレイカーへ与えるダメージ強化の効果量5～50%アップ',
    effects: [
      {
        text: '与えるダメージ強化の効果量5～50%アップ',
        effectItems: {
          '与えるダメージ強化効果量+': 50,
        },
      },
    ],
  },

  '物理/魔法耐性アップ強化': {
    giftType: '強化',
    target: '装備アイテム',
    text: '対象が与える「物理被ダメージダウン」と「魔法被ダメージダウン」の効果量4～40%アップ',
    effects: [
      {
        text: '「物理被ダメージダウン」と「魔法被ダメージダウン」の効果量4～40%アップ',
        effectItems: {
          '与える物理/魔法被ダメージダウン効果量+': 40,
        },
      },
    ],
    note:'2023/10/24不具合修正内容\n修正前:「耐性アップ強化」　与える耐性アップの効果量4～40%アップ',
  },





  'ぷにダメージ軽減': {
    giftType: '強化',
    target: '装備アイテム',
    text: 'ぷに種族から受けるダメージ2～15%ダウン',
    effects: [
      {
        text: '受けるダメージ2～15%ダウン',
        effectItems: {
          '受けるダメージ-': 15,
        },
      },
    ],
  },
  '獣ダメージ軽減': {
    giftType: '強化',
    target: '装備アイテム',
    text: '獣種族から受けるダメージ2～15%ダウン',
    effects: [
      {
        text: '受けるダメージ2～15%ダウン',
        effectItems: {
          '受けるダメージ-': 15,
        },
      },
    ],
  },
  '精霊ダメージ軽減': {
    giftType: '強化',
    target: '装備アイテム',
    text: '精霊種族から受けるダメージ2～15%ダウン',
    effects: [
      {
        text: '受けるダメージ2～15%ダウン',
        effectItems: {
          '受けるダメージ-': 15,
        },
      },
    ],
  },
  '鳥ダメージ軽減': {
    giftType: '強化',
    target: '装備アイテム',
    text: '鳥種族から受けるダメージ2～15%ダウン',
    effects: [
      {
        text: '受けるダメージ2～15%ダウン',
        effectItems: {
          '受けるダメージ-': 15,
        },
      },
    ],
  },
  '水棲ダメージ軽減': {
    giftType: '強化',
    target: '装備アイテム',
    text: '水棲種族から受けるダメージ2～15%ダウン',
    effects: [
      {
        text: '受けるダメージ2～15%ダウン',
        effectItems: {
          '受けるダメージ-': 15,
        },
      },
    ],
  },






























  //弱体、戦闘
  '剛力の呪詛': {
    giftType: '弱体',
    target: '戦闘アイテム',
    text: '対象に「受ける物理攻撃のダメージ1～8%アップ」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: 'ダメージ1～8%アップ',
        effectItems: {
          '受けるダメージ+': 8,
        },
      },
    ],
  },
  '斬の呪詛': {
    giftType: '弱体',
    target: '戦闘アイテム',
    text: '対象に「斬属性耐性1～10%ダウン」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '斬属性耐性1～10%ダウン',
        effectItems: {
          '斬属性耐性-': 10,
        },
      },
    ],
  },
  '打の呪詛': {
    giftType: '弱体',
    target: '戦闘アイテム',
    text: '対象に「打属性耐性1～10%ダウン」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '打属性耐性1～10%ダウン',
        effectItems: {
          '打属性耐性-': 10,
        },
      },
    ],
  },
  '突の呪詛': {
    giftType: '弱体',
    target: '戦闘アイテム',
    text: '対象に「突属性耐性1～10%ダウン」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '突属性耐性1～10%ダウン',
        effectItems: {
          '突属性耐性-': 10,
        },
      },
    ],
  },
  '魔力の呪詛': {
    giftType: '弱体',
    target: '戦闘アイテム',
    text: '対象に「受ける魔法攻撃のダメージ1～8%アップ」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: 'ダメージ1～8%アップ',
        effectItems: {
          '受けるダメージ+': 8,
        },
      },
    ],
  },
  '火の呪詛': {
    giftType: '弱体',
    target: '戦闘アイテム',
    text: '対象に「火属性耐性1～10%ダウン」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '火属性耐性1～10%ダウン',
        effectItems: {
          '火属性耐性-': 10,
        },
      },
    ],
  },
  '氷の呪詛': {
    giftType: '弱体',
    target: '戦闘アイテム',
    text: '対象に「氷属性耐性1～10%ダウン」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '氷属性耐性1～10%ダウン',
        effectItems: {
          '氷属性耐性-': 10,
        },
      },
    ],
  },
  '風の呪詛': {
    giftType: '弱体',
    target: '戦闘アイテム',
    text: '対象に「風属性耐性1～10%ダウン」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '風属性耐性1～10%ダウン',
        effectItems: {
          '風属性耐性-': 10,
        },
      },
    ],
  },
  '雷の呪詛': {
    giftType: '弱体',
    target: '戦闘アイテム',
    text: '対象に「雷属性耐性1～10%ダウン」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '雷属性耐性1～10%ダウン',
        effectItems: {
          '雷属性耐性-': 10,
        },
      },
    ],
  },

  //弱体、装備
  '物理/魔法耐性ダウン強化': {
    giftType: '弱体',
    target: '装備アイテム',
    text: '対象が与える「物理被ダメージアップ」と「魔法被ダメージアップ」の効果量4～40%アップ',
    effects: [
      {
        text: '「物理被ダメージアップ」と「魔法被ダメージアップ」の効果量4～40%アップ',
        effectItems: {
          '与える物理/魔法被ダメージアップ効果量+': 40,
        },
      },
    ],
    note:'2023/10/24不具合修正内容\n修正前:「耐性ダウン強化」　与える耐性ダウンの効果量4～40%アップ',
  },
  //\n[red]敵への「受ける物理攻撃/魔法攻撃のダメージアップ」に適用(公式より)[/red]



  //回復量
  '大きな回復量': {
    giftType: '回復',
    target: '戦闘アイテム',
    text: '与えるHP回復量1～8%アップ',
    effects: [
      {
        text: '与えるHP回復量1～8%アップ',
        effectItems: {
          '与えるHP回復量+': 8,
        },
      },
    ],
  },
  '単体回復ボーナス': {
    giftType: '回復',
    target: '戦闘アイテム',
    text: '単体回復が与えるHP回復量2～15%アップ',
    effects: [
      {
        text: '与えるHP回復量2～15%アップ',
        effectItems: {
          '与えるHP回復量+': 15,
        },
      },
    ],
  },
  '全体回復ボーナス': {
    giftType: '回復',
    target: '戦闘アイテム',
    text: '全体回復が与えるHP回復量1～10%アップ',
    effects: [
      {
        text: '与えるHP回復量1～10%アップ',
        effectItems: {
          '与えるHP回復量+': 10,
        },
      },
    ],
  },
  '使い切り回復強化': {
    giftType: '回復',
    target: '戦闘アイテム',
    text: '使用回数が1回の時、HP回復量2～18%アップ',
    effects: [
      {
        text: 'HP回復量2～18%アップ',
        effectItems: {
          '与えるHP回復量+': 18,
        },
      },
    ],
  },


  //回復、装備

  '回復量上昇【渾身】': {
    giftType: '回復',
    target: '装備アイテム',
    text: 'HP満タン時、与えるHP回復量4～35%アップ',
    effects: [
      {
        text: '与えるHP回復量4～35%アップ',
        effectItems: {
          '与えるHP回復量+': 35,
        },
      },
    ],
  },
  '回復量上昇【背水】': {
    giftType: '回復',
    target: '装備アイテム',
    text: 'HPが50%以下の時、与えるHP回復量4～40%アップ',
    effects: [
      {
        text: '与えるHP回復量4～40%アップ',
        effectItems: {
          '与えるHP回復量+': 40,
        },
      },
    ],
  },
  '回復量上昇': {
    giftType: '回復',
    target: '装備アイテム',
    text: '与えるHP回復量2～15%アップ',
    effects: [
      {
        text: '与えるHP回復量2～15%アップ',
        effectItems: {
          '与えるHP回復量+': 15,
        },
      },
    ],
  },
  '単体回復量上昇': {
    giftType: '回復',
    target: '装備アイテム',
    text: '味方単体回復が与えるHP回復量3～25%アップ',
    effects: [
      {
        text: '与えるHP回復量3～25%アップ',
        effectItems: {
          '与えるHP回復量+': 25,
        },
      },
    ],
  },
  '全体回復量上昇': {
    giftType: '回復',
    target: '装備アイテム',
    text: '味方全体回復が与えるHP回復量3～25%アップ',
    effects: [
      {
        text: '与えるHP回復量3～25%アップ',
        effectItems: {
          '与えるHP回復量+': 25,
        },
      },
    ],
  },
  '回復量上昇【D】': {
    giftType: '回復',
    target: '装備アイテム',
    text: 'ディフェンダーへ与えるHP回復量4～35%アップ',
    effects: [
      {
        text: '与えるHP回復量4～35%アップ',
        effectItems: {
          '与えるHP回復量+': 35,
        },
      },
    ],
  },





}
export default gift

