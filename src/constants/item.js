const item = {
  'うに袋': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'R',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    attribute: '突',
    area: '全',
    usageCount: 2,
    damage: 300,
    fixed: true,
    text: '敵全体に突属性ダメージ',
    materials: {
      うに: 5,
    },
    colors: ['青', '黄', '赤'],
  },
  'ヒーリングサルヴ': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'R',
    kind1: '戦闘アイテム',
    kind2: '回復アイテム',
    area: '単',
    usageCount: 2,
    heal: 200,
    fixed: true,
    text: 'HPが最も減っている味方1人のHPを回復',
    effects: [
      {
        target: '味単', text: 'HPを回復',
        effectItems: {
          'HP回復': 200,
        },
      },
    ],
    materials: {
      トーン: 5,
    },
    colors: ['青', '紫', '黄'],
  },
  'フランベルジュ': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'R',
    kind1: '装備アイテム',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20 },
    materials: {
      うに: 5,
      トーン: 5,
    },
    colors: ['青', '黄', '赤'],
  },
  '旅人のベスト': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'R',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20 },
    materials: {
      うに: 5,
      トーン: 5,
    },
    colors: ['黄', '赤', '緑'],
  },
  'うに型チャーム': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'SR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 4 },
    materials: {
      うに: 5,
      若木の枝葉: 15,
    },
    colors: ['青', '黄', '赤'],
  },
  'フラム': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'R',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '魔',
    attribute: '火',
    area: '単',
    usageCount: 2,
    damage: 600,
    fixed: true,
    text: '現在HPが最も高い敵1体に火属性ダメージ',
    materials: {
      ハチの巣: 15,
      うに: 5,
    },
    colors: ['青', '赤', '緑'],
  },
  'ドライビスク': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'SR',
    kind1: '戦闘アイテム',
    kind2: '回復アイテム',
    area: '全',
    usageCount: 2,
    heal: 70,
    fixed: true,
    text: '味方全員のHPを回復',
    effects: [
      {
        target: '味全', text: 'HPを回復',
        effectItems: {
          'HP回復': 70,
        },
      },
    ],
    materials: {
      コゲクサ: 1,
      パチパチ水: 1,
    },
    colors: ['紫', '黄', '赤'],
  },
  '魔女の秘薬': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'R',
    kind1: '戦闘アイテム',
    kind2: '弱体アイテム',
    area: '全',
    usageCount: 1,
    text: '敵全体に「火氷雷風属性耐性-10%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '火氷雷風属性耐性-10%',
        effectItems: {
          '火属性耐性-': 10,
          '氷属性耐性-': 10,
          '雷属性耐性-': 10,
          '風属性耐性-': 10,
        },
      }
    ],
    materials: {
      ナナシ草: 5,
      植物エキス: 5,
      サルディン: 5,
    },
    colors: ['青', '紫', '黄'],
  },
  'お手製の杖': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'R',
    kind1: '装備アイテム',
    kind1: '装備アイテム', kind2: '武器',
    status: { 魔攻: 20 },
    materials: {
      若木の枝葉: 5,
      ハチの巣: 5,
      ナナシ草: 5,
    },
    colors: ['青', '紫', '黄'],
  },
  'ウサギのシッポ': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'SR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { 素早さ: 8 },
    materials: {
      正体不明の原石: 10,
      チョウチョウウオ: 1,
    },
    colors: ['紫', '黄', '緑'],
  },
  '混合毛のシャツ': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'R',
    kind1: '装備アイテム', kind2: '防具',
    status: { 魔防: 20 },
    materials: {
      シロヒメクサ: 5,
      植物エキス: 5,
      サルディン: 5,
    },
    colors: ['紫', '黄', '緑'],
  },
  '蒼穹の弓': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'R',
    kind1: '装備アイテム',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 10, 魔攻: 10 },
    materials: {
      カブトバッタ: 5,
      若木の枝葉: 5,
      ハチの巣: 5,
    },
    colors: ['紫', '黄', '緑'],
  },
  'ノーブルチュニック': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'R',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 10, 魔防: 10 },
    materials: {
      ナナシ草: 5,
      シロヒメクサ: 5,
      正体不明の原石: 5,
    },
    colors: ['青', '赤', '緑'],
  },
  'エナジーペンダント': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'SR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135 },
    materials: {
      食毒草: 1,
      キラービー: 1,
      ビリビリ水: 1,
    },
    colors: ['青', '赤', '緑'],
  },
  'ナントカの秘薬': {
    date: '2023/09/23', recipeGroup: 'main1',
    rarity: 'R',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '全',
    usageCount: 1,
    text: '味方全員に「火氷雷風属性スキルダメージ+10%」を2回行動終了するまで付与',
    effects: [
      {
        text: '火氷雷風属性スキルダメージ+10%',
        effectItems: {
          '火属性スキルダメージ+': 10,
          '氷属性スキルダメージ+': 10,
          '雷属性スキルダメージ+': 10,
          '風属性スキルダメージ+': 10,
        },
      },
    ],
    materials: {
      怨嗟の叫び: 10,
      植物エキス: 5,
    },
    colors: ['青', '紫', '黄'],
  },
  'ドナーストーン': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '魔',
    attribute: '雷',
    area: '単',
    usageCount: 3,
    damage: 180,
    text: '現在HPが最も高い敵1体に雷属性ダメージ',
    materials: {
      コベリナイト: 30,
    },
    colors: ['青', '黄', '赤'],
  },
  'ヒーリングベル': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '回復アイテム',
    area: '全',
    usageCount: 2,
    heal: 15,
    text: '味方全員のHPを15%回復',
    effects: [
      {
        target: '味全',
        text: 'HPを15%回復',
        effectItems: {
          'HP回復': 15,
        },
      },
    ],
    materials: {
      セイタカトーン: 3,
      マジックグラス: 3,
      銀のハチの巣: 3,
    },
    colors: ['黄', '赤', '緑'],
  },
  '軽い鉄の杖': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 魔攻: 45 },
    text: '魔法攻撃ブレイクダメージ+6%',
    effects: [
      {
        text: '魔法攻撃ブレイクダメージ+6%',
        effectItems: {
          '魔法攻撃ブレイクダメージ+': 6,
        },
      },
    ],
    materials: {
      白灰砂: 10,
      エメラルドグラス: 1,
    },
    colors: ['黄', '赤', '緑'],
  },
  'レザープロテクター': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45 },
    text: '魔法攻撃スキルダメージ+6%',
    effects: [
      {
        text: '魔法攻撃スキルダメージ+6%',
        effectItems: {
          '魔法攻撃スキルダメージ+': 6,
        },
      },
    ],
    materials: {
      貯ミツアリ: 10,
      苦ミミズ: 1,
    },
    colors: ['黄', '赤', '緑'],
  },
  'モノクログラス': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135 },
    text: '物理攻撃から受けるダメージ-3%',
    effects: [
      {
        text: '受けるダメージ-3%',
        effectItems: {
          '受けるダメージ-': 3,
        },
      },
    ],
    materials: {
      フェスト: 10,
      震える結晶: 1,
    },
    colors: ['青', '黄', '緑'],
  },
  '暗黒水': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '弱体アイテム',
    area: '全',
    usageCount: 2,
    text: '敵全体に「受ける魔法攻撃スキルダメージ+15%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '受ける魔法攻撃スキルダメージ+15%',
        effectItems: {
          '受ける魔法攻撃スキルダメージ+': 15,
        },
      },
    ],
    materials: {
      雲海の隠れ家: 1,
      闇の雫: 2,
      風船魚: 1,
    },
    colors: ['青', '赤', '緑'],
  },
  '素朴な焼き菓子': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '全',
    usageCount: 2,
    text: '味方全員に「受ける物理攻撃スキルダメージ-10%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '受ける物理攻撃スキルダメージ-10%',
        effectItems: {
          '受ける物理攻撃スキルダメージ-': 10,
        },
      },
    ],
    materials: {
      ペントナイト: 20,
      自然油: 20,
    },
    colors: ['青', '黄', '緑'],
  },
  '鉄鉤': {//てつかぎ？
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '装備アイテム',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 25, 魔攻: 20 },
    text: '与えるマイナス効果量+5%',
    effects: [
      {
        text: '与えるマイナス効果量+5%',
        effectItems: {
          '与えるマイナス効果量+': 5,
        },
      },
    ],
    materials: {
      コベリナイト: 10,
      コゲクサ: 6,
      貯ミツアリ: 6,
    },
    colors: ['青', '紫', '緑'],
  },
  '風来人のシャツ': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 魔防: 25, 物防: 20 },
    text: '受けるHP回復量+3%',
    effects: [
      {
        text: '受けるHP回復量+3%',
        effectItems: {
          '受けるHP回復量+': 3,
        },
      },
    ],
    materials: {
      ペントナイト: 10,
      パチパチ水: 6,
      白灰砂: 6,
    },
    colors: ['青', '紫', '赤'],
  },
  '精霊の首飾り': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 75, 素早さ: 4 },
    text: '単体物理攻撃から受けるダメージ-5%',
    effects: [
      {
        text: '受けるダメージ-5%',
        effectItems: {
          '受けるダメージ-': 5,
        },
      },
    ],
    materials: {
      自然油: 10,
      チョウチョウウオ: 6,
      フェスト: 6,
    },
    colors: ['青', '紫', '緑'],
  },
  'クラフト': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '物',
    attribute: '突',
    area: '単',
    usageCount: 3,
    damage: '180',
    text: '現在HPが最も高い敵1体に突属性ダメージ',
    materials: {
      綿毛草: 30,
    },
    colors: ['青', '赤', '緑'],
  },
  'バトルアクス': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 45 },
    text: '物理攻撃スキルダメージ+6%',
    effects: [
      {
        text: '物理攻撃スキルダメージ+6%',
        effectItems: {
          '物理攻撃スキルダメージ+': 6,
        },
      },
    ],
    materials: {
      アオツメクサ: 10,
      スイートリーフ: 1,
      セイタカトーン: 2,
    },
    colors: ['紫', '黄', '赤'],
  },
  'ハードコート': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    status: { 魔防: 45 },
    kind1: '装備アイテム', kind2: '防具',
    text: '物理攻撃ブレイクダメージ+6%',
    effects: [
      {
        text: '物理攻撃ブレイクダメージ+6%',
        effectItems: {
          '物理攻撃ブレイクダメージ+': 6,
        },
      },
    ],
    materials: {
      貯ミツアリ: 10,
      星テントウ: 1,
      マジックグラス: 2,
    },
    colors: ['青', '紫', '緑'],
  },
  'ルーンストーン': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { 素早さ: 8 },
    text: '魔法攻撃から受けるダメージ-3%',
    effects: [
      {
        text: '受けるダメージ-3%',
        effectItems: {
          '受けるダメージ-': 3,
        },
      },
    ],
    materials: {
      フェスト: 10,
      スティム鋼石: 1,
      銀のハチの巣: 2,
    },
    colors: ['青', '黄', '赤'],
  },
  'ウォーパウダー': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '全',
    usageCount: 2,
    text: '味方全員に「クリティカル確率+15%」を2回行動終了するまで付与',
    effects: [
      {
        text: 'クリティカル確率+15%',
        effectItems: {
          'クリティカル確率+': 15,
        },
      },
    ],
    materials: {
      蓮: 2,
      うにゾウムシ: 1,
      黒水: 1,
    },
    colors: ['青', '赤', '緑'],
  },
  '神秘の羽衣': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '全',
    usageCount: 2,
    text: '味方全員に「受ける魔法攻撃スキルダメージ-10%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '受ける魔法攻撃スキルダメージ-10%',
        effectItems: {
          '受ける魔法攻撃スキルダメージ-': 10,
        },
      },
    ],
    materials: {
      コベリナイト: 15,
      自然油: 15,
      綿毛草: 15,
    },
    colors: ['紫', '黄', '赤'],
  },
  '癒しの杖': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 25 },
    text: '与えるHP回復量+2%',
    effects: [
      {
        text: '与えるHP回復量+2%',
        effectItems: {
          '与えるHP回復量+': 2,
        },
      },
    ],
    materials: {
      綿毛草: 10,
      食毒草: 10,
      スイートリーフ: 1,
    },
    colors: ['青', '黄', '緑'],
  },
  'ボルダースケイル': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 25, 魔防: 20 },
    text: '与える強化効果量+5%',
    effects: [
      {
        text: '与える強化効果量+5%',
        effectItems: {
          '与える強化効果量+': 5,
        },
      },
    ],
    materials: {
      コベリナイト: 10,
      キラービー: 10,
      星テントウ: 1,
    },
    colors: ['紫', '黄', '赤'],
  },
  'クォーツネックレス': {
    date: '2023/09/23', recipeGroup: 'main2',
    rarity: 'SR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 6 },
    text: '全体攻撃から受けるダメージ-6%',
    effects: [
      {
        text: '受けるダメージ-6%',
        effectItems: {
          '受けるダメージ-': 6,
        },
      },
    ],
    materials: {
      自然油: 10,
      ビリビリ水: 10,
      スティム鋼石: 1,
    },
    colors: ['紫', '黄', '赤'],
  },
  'たたかう魔剣': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '物',
    attribute: '斬',
    area: '単',
    usageCount: 3,
    damage: 260,
    text: '現在HPが最も低い敵1体に斬属性ダメージ',
    materials: {
      灯火草: 10,
      苦ミミズ: 10,
      エメラルドグラス: 10,
    },
    colors: ['青', '紫', '黄'],
  },
  '白銀の双剣': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 50 },
    text: '得意属性が斬属性の時、スキルダメージ+10%',
    effects: [
      {
        text: 'スキルダメージ+10%',
        effectItems: {
          'スキルダメージ+': 10,
        },
      },
    ],
    materials: {
      灯火草: 10,
      雲海の隠れ家: 20,
    },
    colors: ['青', '紫', '黄'],
  },
  'ナイトシェイド': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 魔防: 50 },
    text: '自身がアタッカーの時、スキルダメージ+8%',
    effects: [
      {
        text: 'スキルダメージ+8%',
        effectItems: {
          'スキルダメージ+': 8,
        },
      },
    ],
    materials: {
      灯火草: 10,
      闇の雫: 20,
    },
    colors: ['紫', '黄', '緑'],
  },
  'グナーデリング・物': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 8 },
    text: '自身のHPが70%以上の時、斬打突属性耐性+6%',
    effects: [
      {
        text: '斬打突属性耐性+6%',
        effectItems: {
          '斬属性耐性+': 6,
          '打属性耐性+': 6,
          '突属性耐性+': 6,
        },
      },
    ],
    materials: {
      インゴットバグ: 2,
      丈夫なつる: 4,
      スカイバブル: 4,
    },
    colors: ['青', '紫', '緑'],
  },
  'グナーデリング・魔': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 8 },
    text: '自身のHPが70%以上の時、火氷雷風属性耐性+6%',
    effects: [
      {
        text: '火氷雷風属性耐性+6%',
        effectItems: {
          '火属性耐性+': 6,
          '氷属性耐性+': 6,
          '雷属性耐性+': 6,
          '風属性耐性+': 6,
        },
      },
    ],
    materials: {
      聖樹の大枝: 2,
      丈夫なつる: 4,
      魔石の欠片: 4,
    },
    colors: ['青', '紫', '黄'],
  },
  '闘志のマフラー': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 150 },
    text: '自身がアタッカーの時、受けるダメージ-4%',
    effects: [
      {
        text: '受けるダメージ-4%',
        effectItems: {
          '受けるダメージ-': 4,
        },
      },
    ],
    materials: {
      灯火草: 10,
      風船魚: 20,
    },
    colors: ['黄', '赤', '緑'],
  },
  'スモークミート': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '全',
    usageCount: 2,
    text: '味方全員に「物理攻撃スキルダメージ+25%」を2回行動終了するまで付与',
    effects: [
      {
        text: '物理攻撃スキルダメージ+25%',
        effectItems: {
          '物理攻撃スキルダメージ+': 25,
        },
      },
    ],
    materials: {
      赤い花: 10,
      セリヨル: 7,
      エメラルドグラス: 7,
    },
    colors: ['青', '紫', '赤'],
  },
  '不幸の瓶詰め': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '弱体アイテム',
    area: '単',
    usageCount: 2,
    text: '最大HPが最も高い敵1体に「斬属性耐性-25%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '斬属性耐性-25%',
        effectItems: {
          '斬属性耐性-': 25,
        },
      },
    ],
    materials: {
      赤い花: 10,
      アイヒェ: 7,
      震える結晶: 7,
    },
    colors: ['青', '紫', '緑'],
  },
  'クレアエンパシー': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 50 },
    text: '得意属性が打属性の時、スキルダメージ+10%',
    effects: [
      {
        text: 'スキルダメージ+10%',
        effectItems: {
          'スキルダメージ+': 10,
        },
      },
    ],
    materials: {
      赤い花: 10,
      樹氷石: 10,
      アイヒェ: 10,
    },
    colors: ['青', '黄', '緑'],
  },
  '極彩色のローブ': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '火氷雷風いずれかの属性キャラに与えるHP回復量+4%',
    effects: [
      {
        text: '与えるHP回復量+4%',
        effectItems: {
          '与えるHP回復量+': 4,
        },
      },
    ],
    materials: {
      剛鉄鉱: 2,
      エグゾフィッシュ: 2,
      魔石の欠片: 4,
    },
    colors: ['青', '紫', '赤'],
  },
  'コンバットシャツ': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '斬打突いずれかの属性キャラに与えるHP回復量+4%',
    effects: [
      {
        text: '与えるHP回復量+4%',
        effectItems: {
          '与えるHP回復量+': 4,
        },
      },
    ],
    materials: {
      パルマ: 2,
      蒼剛石: 2,
      スカイバブル: 4,
    },
    colors: ['青', '紫', '赤'],
  },
  'シュペーヴァイス': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 50 },
    text: '得意属性が突属性の時、スキルダメージ+10%',
    effects: [
      {
        text: 'スキルダメージ+10%',
        effectItems: {
          'スキルダメージ+': 10,
        },
      },
    ],
    materials: {
      赤い花: 10,
      セリヨル: 15,
    },
    colors: ['黄', '赤', '緑'],
  },
  'エネルジアニカ': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '回復アイテム',
    area: '単',
    usageCount: 3,
    text: '最大HPが最も高い味方1人に「ターン開始時HP40%回復」を2回行動開始するまで付与',
    effects: [
      {
        text: 'ターン開始時HP40%回復',
        effectItems: {
          'ターン開始時HP回復': 40,
        },
      },
    ],
    materials: {
      セイタカトーン: 20,
      魔石の欠片: 4,
      モルディナイト: 2,
    },
    colors: ['青', '黄', '赤'],
  },
  'ローゼフラム': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '魔',
    attribute: '火',
    area: '単',
    usageCount: 3,
    damage: 260,
    text: '現在HPが最も高い敵1体に火属性ダメージ',
    materials: {
      赤砂: 10,
      蓮: 20,
    },
    colors: ['青', '黄', '赤'],
  },
  '妙薬ドラッヘン': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '単',
    usageCount: 2,
    text: '魔攻が最も高い味方1人に「バーストスキルダメージ+60%」を2回行動終了するまで付与',
    effects: [
      {
        text: 'バーストスキルダメージ+60%',
        effectItems: {
          'バーストスキルダメージ+': 60,
        },
      },
    ],
    materials: {
      赤砂: 10,
      幸せクローバー: 2,
      ベビーヴルム: 2,
    },
    colors: ['黄', '赤', '緑'],
  },
  '精霊の杖・火': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '得意属性が火属性の時、スキルダメージ+10%',
    effects: [
      {
        text: 'スキルダメージ+10%',
        effectItems: {
          'スキルダメージ+': 10,
        },
      },
    ],
    materials: {
      赤砂: 5,
      スイートリーフ: 15,
    },
    colors: ['青', '紫', '赤'],
  },
  '精霊の杖・氷': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '得意属性が氷属性の時、スキルダメージ+10%',
    effects: [
      {
        text: 'スキルダメージ+10%',
        effectItems: {
          'スキルダメージ+': 10,
        },
      },
    ],
    materials: {
      赤砂: 5,
      星テントウ: 15,
    },
    colors: ['黄', '緑', '赤'],
  },
  '精霊の杖・雷': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '得意属性が雷属性の時、スキルダメージ+10%',
    effects: [
      {
        text: 'スキルダメージ+10%',
        effectItems: {
          'スキルダメージ+': 10,
        },
      },
    ],
    materials: {
      赤砂: 5,
      星テントウ: 15,
    },
    colors: ['青', '紫', '黄'],
  },
  '精霊の杖・風': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '得意属性が風属性の時、スキルダメージ+10%',
    effects: [
      {
        text: 'スキルダメージ+10%',
        effectItems: {
          'スキルダメージ+': 10,
        },
      },
    ],
    materials: {
      赤砂: 5,
      スティム鋼石: 15,
    },
    colors: ['紫', '緑', '赤'],
  },
  '燃える水': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '弱体アイテム',
    area: '単',
    usageCount: 2,
    text: '最大HPが最も高い敵1体に「火属性耐性-25%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '火属性耐性-25%',
        effectItems: {
          '火属性耐性-': 25,
        },
      },
    ],
    materials: {
      きれいな水: 15,
      うにゾウムシ: 10,
    },
    colors: ['黄', '赤', '緑'],
  },
  '錬金キャンディ': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '全',
    usageCount: 2,
    text: '味方全員に「魔法攻撃スキルダメージ+25%」を2回行動終了するまで付与',
    effects: [
      {
        text: '魔法攻撃スキルダメージ+25%',
        effectItems: {
          '魔法攻撃スキルダメージ+': 25,
        },
      },
    ],
    materials: {
      セリヨル: 15,
      黒水: 10,
    },
    colors: ['青', '紫', '黄'],
  },
  '熱血はちまき': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135, 素早さ: 4 },
    text: '自身がディフェンダーの時、受けるダメージ-4%',
    effects: [
      {
        text: '受けるダメージ-4%',
        effectItems: {
          '受けるダメージ-': 4,
        },
      },
    ],
    materials: {
      クスリゴケ: 5,
      アイヒェ: 15,
    },
    colors: ['紫', '黄', '緑'],
  },
  '無重力シャツ': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 魔防: 50 },
    text: '自身がディフェンダーの時、受けるHP回復量+5%',
    effects: [
      {
        text: '受けるHP回復量+5%',
        effectItems: {
          '受けるHP回復量+': 5,
        },
      },
    ],
    materials: {
      きれいな水: 10,
      水底の水: 2,
      幸せクローバー: 2,
    },
    colors: ['黄', '赤', '緑'],
  },
  'エンゼルチャーム': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 8 },
    text: '自身がサポーターの時、受けるダメージ-4%',
    effects: [
      {
        text: '受けるダメージ-4%',
        effectItems: {
          '受けるダメージ-': 4,
        },
      },
    ],
    materials: {
      クスリゴケ: 10,
      アイヒェ: 10,
      セリヨル: 10,
    },
    colors: ['青', '赤', '緑'],
  },
  '冒険者の服': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '自身がサポーターの時、バーストスキルダメージ+12%',
    effects: [
      {
        text: 'バーストスキルダメージ+12%',
        effectItems: {
          'バーストスキルダメージ+': 12,
        },
      },
    ],
    materials: {
      セリヨル: 10,
      トゲトゲ: 2,
      ベビーヴルム: 2,
    },
    colors: ['紫', '黄', '緑'],
  },
  '鋲打ちの皮鎧': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '自身がブレイカーの時、スキルダメージ+8%',
    effects: [
      {
        text: 'スキルダメージ+8%',
        effectItems: {
          'スキルダメージ+': 8,
        },
      },
    ],
    materials: {
      アイヒェ: 10,
      乾いた木くず: 2,
      モルディナイト: 2,
    },
    colors: ['青', '黄', '緑'],
  },
  'ハッスルベルト': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { 素早さ: 10 },
    text: '自身がブレイカーの時、受けるダメージ-4%',
    effects: [
      {
        text: '受けるダメージ-4%',
        effectItems: {
          '受けるダメージ-': 4,
        },
      },
    ],
    materials: {
      クスリゴケ: 10,
      アイヒェ: 10,
      きれいな水: 10,
    },
    colors: ['青', '黄', '赤'],
  },
  'エンゼルリボン': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135, 素早さ: 4 },
    text: '自身のHPが70%以上の時、受けるダメージ-6%',
    effects: [
      {
        text: '受けるダメージ-6%',
        effectItems: {
          '受けるダメージ-': 6,
        },
      },
    ],
    materials: {
      水底の水: 2,
      トゲトゲ: 2,
      乾いた木くず: 2,
    },
    colors: ['青', '紫', '赤'],
  },
  '魔獣の革鎧': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 50 },
    text: '与えるHP回復量+3%',
    effects: [
      {
        text: '与えるHP回復量+3%',
        effectItems: {
          '与えるHP回復量+': 3,
        },
      },
    ],
    materials: {
      うにゾウムシ: 10,
      黒水: 10,
      水底の水: 2,
    },
    colors: ['青', '紫', '赤'],
  },
  '黄金エキススープ': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '全',
    usageCount: 2,
    text: '味方全員に「クリティカル確率+25%」を2回行動終了するまで付与',
    effects: [
      {
        text: 'クリティカル確率+25%',
        effectItems: {
          'クリティカル確率+': 25,
        },
      },
    ],
    materials: {
      赤砂: 20,
      クスリゴケ: 20,
      スカイバブル: 4,
    },
    colors: ['青', '紫', '赤'],
  },
  'エリキシル剤': {
    date: '2023/09/23', recipeGroup: 'main3',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '回復アイテム',
    area: '単',
    usageCount: 3,
    heal: 30,
    text: 'HPが最も減っている味方1人のHPを30%回復\n回復後、対象の状態異常を解除する',
    effects: [
      {
        text: 'HPを30%回復',
        effectItems: {
          'HP回復': 30,
        },
      },
      {
        text: '状態異常を解除',
        effectItems: {
          '状態異常回復': 30,
        },
      },
    ],
    materials: {
      エスプラント: 2,
      月イナゴ: 2,
      ミネラル液晶: 2,
    },
    colors: ['青', '黄', '赤'],
  },
  'レーツェルフト': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '魔',
    attribute: '風',
    area: '単',
    usageCount: 3,
    damage: 260,
    text: '現在HPが最も高い敵1体に風属性ダメージ',
    materials: {
      蒼剛石: 10,
      パルマの実: 10,
      輝く水晶のカケラ: 5,
    },
    colors: ['紫', '黄', '緑'],
  },
  '創世の槌': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '物',
    attribute: '打',
    area: '単',
    usageCount: 3,
    damage: 260,
    text: '現在HPが最も高い敵1体に打属性ダメージ',
    materials: {
      エグゾフィッシュ: 10,
      琥珀水晶: 10,
      輝く水晶のカケラ: 5,
    },
    colors: ['紫', '黄', '赤'],
  },
  'リュミエールランス': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '物',
    attribute: '突',
    area: '単',
    usageCount: 3,
    damage: 260,
    text: '現在HPが最も低い敵1体に突属性ダメージ',
    materials: {
      パルマ: 10,
      ワームフィッシュ: 10,
      砂晶石: 5,
    },
    colors: ['青', '赤', '緑'],
  },
  'クライトレヘルン': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '魔',
    attribute: '氷',
    area: '単',
    usageCount: 3,
    damage: 260,
    text: '現在HPが最も低い敵1体に氷属性ダメージ',
    materials: {
      エグゾフィッシュ: 10,
      琥珀水晶: 10,
      砂晶石: 5,
    },
    colors: ['青', '紫', '赤'],
  },
  'シュトラプラジグ': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '魔',
    attribute: '雷',
    area: '単',
    usageCount: 3,
    damage: 260,
    text: '現在HPが最も低い敵1体に雷属性ダメージ',
    materials: {
      パルマ: 10,
      パルマの実: 10,
      輝く水晶のカケラ: 5,
    },
    colors: ['青', '黄', '緑'],
  },
  'クロニクルマーク・突': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135, 素早さ: 4 },
    text: '得意属性が突属性の時、受けるダメージ-5%',
    effects: [
      {
        text: '受けるダメージ-5%',
        effectItems: {
          '受けるダメージ-': 5,
        },
      },
    ],
    materials: {
      聖樹の大枝: 15,
      スカイバブル: 20,
      魔石の欠片: 20,
    },
    colors: ['青', '赤', '緑'],
  },
  'クロニクルマーク・斬': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135, 素早さ: 4 },
    text: '得意属性が斬属性の時、受けるダメージ-5%',
    effects: [
      {
        text: '受けるダメージ-5%',
        effectItems: {
          '受けるダメージ-': 5,
        },
      },
    ],
    materials: {
      インゴットバグ: 15,
      丈夫なつる: 20,
      魔石の欠片: 20,
    },
    colors: ['紫', '黄', '緑'],
  },
  'クロニクルマーク・打': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135, 素早さ: 4 },
    text: '得意属性が打属性の時、受けるダメージ-5%',
    effects: [
      {
        text: '受けるダメージ-5%',
        effectItems: {
          '受けるダメージ-': 5,
        },
      },
    ],
    materials: {
      剛鉄鉱: 15,
      丈夫なつる: 20,
      スカイバブル: 20,
    },
    colors: ['黄', '赤', '緑'],
  },
  '暴風のリング': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 8 },
    text: '得意属性が風属性の時、受けるダメージ-5%',
    effects: [
      {
        text: '受けるダメージ-5%',
        effectItems: {
          '受けるダメージ-': 5,
        },
      },
    ],
    materials: {
      インゴットバグ: 15,
      琥珀水晶: 10,
    },
    colors: ['青', '紫', '緑'],
  },
  '火霊のリング': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 8 },
    text: '得意属性が火属性の時、受けるダメージ-5%',
    effects: [
      {
        text: '受けるダメージ-5%',
        effectItems: {
          '受けるダメージ-': 5,
        },
      },
    ],
    materials: {
      聖樹の大枝: 15,
      ワームフィッシュ: 10,
    },
    colors: ['青', '紫', '黄'],
  },
  '氷幻のリング': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 8 },
    text: '得意属性が氷属性の時、受けるダメージ-5%',
    effects: [
      {
        text: '受けるダメージ-5%',
        effectItems: {
          '受けるダメージ-': 5,
        },
      },
    ],
    materials: {
      聖樹の大枝: 15,
      ワームフィッシュ: 10,
    },
    colors: ['青', '黄', '緑'],
  },
  '雷帝のリング': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 8 },
    text: '得意属性が雷属性の時、受けるダメージ-5%',
    effects: [
      {
        text: '受けるダメージ-5%',
        effectItems: {
          '受けるダメージ-': 5,
        },
      },
    ],
    materials: {
      剛鉄鉱: 15,
      パルマの実: 10,
    },
    colors: ['青', '紫', '黄'],
  },
  '守護者の大剣': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 45, 魔攻: 20 },
    text: '受けるダメージ-3%',
    effects: [
      {
        text: '受けるダメージ-3%',
        effectItems: {
          '受けるダメージ-': 3,
        },
      },
    ],
    materials: {
      水底の水: 15,
      レピアフィッシュ: 2,
      砂晶石: 5,
    },
    colors: ['黄', '赤', '緑'],
  },
  'おしゃれなほうき': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '与える強化効果量+8%',
    effects: [
      {
        text: '与える強化効果量+8%',
        effectItems: {
          '与える強化効果量+': 8,
        },
      },
    ],
    materials: {
      トゲトゲ: 15,
      パルマ樹皮: 2,
      輝く水晶のカケラ: 5,
    },
    colors: ['青', '紫', '緑'],
  },
  'トリトンのほら貝': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '単',
    usageCount: 2,
    text: '物攻が最も高い味方1人に「突属性スキルダメージ+40%」を2回行動終了するまで付与',
    effects: [
      {
        text: '突属性スキルダメージ+40%',
        effectItems: {
          '突属性スキルダメージ+': 40,
        },
      },
    ],
    materials: {
      琥珀水晶: 7,
      パルマ樹皮: 3,
    },
    colors: ['青', '赤', '緑'],
  },
  '肉体活性の粉末': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '単',
    usageCount: 2,
    text: '物攻が最も高い味方1人に「斬属性スキルダメージ+40%」を2回行動終了するまで付与',
    effects: [
      {
        text: '斬属性スキルダメージ+40%',
        effectItems: {
          '斬属性スキルダメージ+': 40,
        },
      },
    ],
    materials: {
      ワームフィッシュ: 7,
      甘露の湧水: 3,
    },
    colors: ['青', '黄', '赤'],
  },
  '剛力の塗り薬': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '単',
    usageCount: 2,
    text: '物攻が最も高い味方1人に「打属性スキルダメージ+40%」を2回行動終了するまで付与',
    effects: [
      {
        text: '打属性スキルダメージ+40%',
        effectItems: {
          '打属性スキルダメージ+': 40,
        },
      },
    ],
    materials: {
      パルマの実: 7,
      レピアフィッシュ: 3,
    },
    colors: ['青', '紫', '緑'],
  },
  'レディアントプレート': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '与えるマイナス効果量+8%',
    effects: [
      {
        text: '与えるマイナス効果量+8%',
        effectItems: {
          '与えるマイナス効果量+': 8,
        },
      },
    ],
    materials: {
      ベビーヴルム: 15,
      丈夫なつる: 25,
      魔石の欠片: 25,
    },
  },
  'スカラーコート': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '与える強化効果量+8%',
    effects: [
      {
        text: '与える強化効果量+8%',
        effectItems: {
          '与える強化効果量+': 8,
        },
      },
    ],
    materials: {
      モルディナイト: 15,
      魔石の欠片: 25,
      スカイバブル: 25,
    },
    colors: ['紫', '黄', '赤'],
  },
  '風繰り車': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '単',
    usageCount: 2,
    text: '魔攻が最も高い味方1人に「風属性スキルダメージ+40%」を2回行動終了するまで付与',
    effects: [
      {
        text: '風属性スキルダメージ+40%',
        effectItems: {
          '風属性スキルダメージ+': 40,
        },
      },
    ],
    materials: {
      幸せクローバー: 20,
      甘露の湧水: 3,
    },
    colors: ['紫', '黄', '赤'],
  },
  'シュネーシュトルム': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '単',
    usageCount: 2,
    text: '魔攻が最も高い味方1人に「氷属性スキルダメージ+40%」を2回行動終了するまで付与',
    effects: [
      {
        text: '氷属性スキルダメージ+40%',
        effectItems: {
          '氷属性スキルダメージ+': 40,
        },
      },
    ],
    materials: {
      ベビーヴルム: 20,
      レピアフィッシュ: 3,
    },
    colors: ['青', '紫', '緑'],
  },
  '薬草のシャツ': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 魔防: 50 },
    text: '自身が攻撃を受けた時、最大HPの3%回復',
    effects: [
      {
        text: '最大HPの3%回復',
        effectItems: {
          'HP回復': 3,
        },
      },
    ],
    materials: {
      モルディナイト: 15,
      砂晶石: 5,
      魔石の欠片: 20,
    },
    colors: ['青', '紫', '赤'],
  },
  'レッドウォーパウダー': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '単',
    usageCount: 2,
    text: '魔攻が最も高い味方1人に「火属性スキルダメージ+40%」を2回行動終了するまで付与',
    effects: [
      {
        text: '火属性スキルダメージ+40%',
        effectItems: {
          '火属性スキルダメージ+': 40,
        },
      },
    ],
    materials: {
      甘露の湧水: 3,
      パルマ樹皮: 3,
    },
    colors: ['青', '黄', '緑'],
  },
  '雷の呼び鈴': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '単',
    usageCount: 2,
    text: '魔攻が最も高い味方1人に「雷属性スキルダメージ+40%」を2回行動終了するまで付与',
    effects: [
      {
        text: '雷属性スキルダメージ+40%',
        effectItems: {
          '雷属性スキルダメージ+': 40,
        },
      },
    ],
    materials: {
      琥珀水晶: 7,
      ワームフィッシュ: 7,
    },
    colors: ['紫', '黄', '赤'],
  },
  'リストレア薬瓶': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '回復アイテム',
    area: '単',
    usageCount: 3,
    heal: 50,
    text: 'HPが最も減っている味方1人のHPを50%回復',
    effects: [
      {
        text: 'HPを50%回復',
        effectItems: {
          'HP回復': 50,
        },
      },
    ],
    materials: {
      聖樹結晶: 5,
      'ラピス・パピヨン': 5,
      ゴルディナイト: 5,
    },
    colors: ['青', '紫', '黄'],
  },
  'プレートベスト': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 50 },
    text: '自身が味方全員回復時、HP回復量+4%',
    effects: [
      {
        text: 'HP回復量+4%',
        effectItems: {
          '与えるHP回復量+': 4,
        },
      },
    ],
    materials: {
      セイタカトーン: 50,
      魔石の欠片: 50,
      輝く水晶のカケラ: 30,
    },
  },
  'クリングメーネ': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 45, 魔攻: 20 },
    text: '得意属性が斬属性かつアタッカーの時、スキルダメージ+12%',
    effects: [
      {
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
    materials: {
      三つ子トーン: 20,
      安らぎの花: 30,
      誘惑の溶樹液: 10,
    },
    colors: ['青', '紫', '黄'],
  },
  'かぼちゃドール': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '弱体アイテム',
    area: '単',
    usageCount: 2,
    text: '最大HPが最も高い敵1体に「突属性耐性-25%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '突属性耐性-25%',
        effectItems: {
          '突属性耐性-': 25,
        },
      },
    ],
    materials: {
      千日草: 10,
      誘惑の溶樹液: 10,
      湖底のぬし: 10,
    },
    colors: ['紫', '赤', '緑'],
  },
  'ヤマネコの槍': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 45, 魔攻: 20 },
    text: '得意属性が突属性かつアタッカーの時、スキルダメージ+12%',
    effects: [
      {
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
    materials: {
      三つ子トーン: 20,
      金のハチの巣: 30,
      エスプラント: 10,
    },
    colors: ['青', '黄', '赤'],
  },
  'フォーチュンライト': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 45, 魔攻: 20 },
    text: '自身のHPが70%以上の時、受けるダメージ-6%',
    effects: [
      {
        text: '受けるダメージ-6%',
        effectItems: {
          '受けるダメージ-': 6,
        },
      },
    ],
    materials: {
      リュウソウラン: 20,
      彗星岩: 20,
      'ラピス・パピヨン': 10,
    },
    colors: ['青', '紫', '緑'],
  },
  '陽だまりの杖': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 45, 魔攻: 20 },
    text: '自身がディフェンダーの時、受けるダメージ-4%',
    effects: [
      {
        text: '受けるダメージ-4%',
        effectItems: {
          '受けるダメージ-': 4,
        },
      },
    ],
    materials: {
      大木のツタ: 15,
      彗星岩: 15,
      ほたる火草: 3,
    },
    colors: ['紫', '赤', '緑'],
  },
  '修練の道標': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '与えるマイナス効果量+8%',
    effects: [
      {
        text: '与えるマイナス効果量+8%',
        effectItems: {
          '与えるマイナス効果量+': 8,
        },
      },
    ],
    materials: {
      光る砂: 5,
      太陽の花: 5,
      メイスフィッシュ: 3,
    },
    colors: ['青', '紫', '黄'],
  },
  'エレメントブレス・火': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '得意属性が火属性かつアタッカーの時、スキルダメージ+12%',
    effects: [
      {
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
    materials: {
      光る砂: 10,
      太陽の花: 10,
      ソーンフィッシュ: 3,
    },
    colors: ['青', '赤', '緑'],
  },
  'エレメントブレス・雷': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '得意属性が雷属性かつアタッカーの時、スキルダメージ+12%',
    effects: [
      {
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
    materials: {
      銀のハチの巣: 60,
      丈夫なつる: 60,
      輝く水晶のカケラ: 60,
    },
    colors: ['青', '赤', '緑'],
  },
  'エレメントブレス・氷': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '得意属性が氷属性かつアタッカーの時、スキルダメージ+12%',
    effects: [
      {
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
    materials: {
      マジックグラス: 60,
      スカイバブル: 60,
      砂晶石: 60,
    },
    colors: ['紫', '黄', '赤'],
  },
  'コロッサルエッジ': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 50 },
    text: '得意属性が斬属性かつブレイカーの時、スキルダメージ+12%',
    effects: [
      {
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
    materials: {
      三つ子トーン: 20,
      金のハチの巣: 20,
      風船魚: 40,
    },
    colors: ['青', '紫', '黄'],
  },
  '白翼の槍': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 50 },
    text: '得意属性が突属性かつブレイカーの時、スキルダメージ+12%',
    effects: [
      {
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
    materials: {
      安らぎの花: 20,
      金のハチの巣: 20,
      ミネラル液晶: 20,
    },
  },
  'イバラの抱擁': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '弱体アイテム',
    area: '単',
    usageCount: 2,
    text: '最大HPが最も高い敵1体に「風属性耐性-25%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '風属性耐性-25%',
        effectItems: {
          '風属性耐性-': 25,
        },
      },
    ],
    materials: {
      エスプラント: 10,
      月イナゴ: 10,
      ミネラル液晶: 10,
    },
    colors: ['青', '紫', '黄'],
  },
  '精霊のローブ': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 魔防: 50 },
    text: '与える状態異常付与率+20%',
    effects: [
      {
        text: '与える状態異常付与率+20%',
        effectItems: {
          '与える状態異常付与率+': 20,
        },
      },
    ],
    materials: {
      セイタカトーン: 80,
      マジックグラス: 80,
      銀のハチの巣: 80,
    },
    colors: ['青', '黄', '赤'],
  },
  '旅の羽衣': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: 'スキル発動後、自身のHPを3%回復',
    effects: [
      {
        text: 'HPを3%回復',
        effectItems: {
          'HP回復': 3,
        },
      },
    ],
    materials: {
      魔石の欠片: 80,
      砂晶石: 40,
      輝く水晶のカケラ: 40,
    },
    colors: ['紫', '青', '緑'],
  },
  'ワンダーミステル・火': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 魔攻: 50 },
    text: '得意属性が火属性かつブレイカーの時、スキルダメージ+12%',
    effects: [
      {
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
    materials: {
      リュウソウラン: 20,
      大木のツタ: 30,
      剛鉄鉱: 30,
    },
  },
  '氷びし': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '弱体アイテム',
    area: '単',
    usageCount: 2,
    text: '最大HPが最も高い敵1体に「氷属性耐性-25%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '氷属性耐性-25%',
        effectItems: {
          '氷属性耐性-': 25,
        },
      },
    ],
    materials: {
      ほたる火草: 7,
      アンバーフライ: 7,
      黒陽鉱: 7,
    },
    colors: ['青', '黄', '紫'],
  },
  'ワンダーミステル・風': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 魔攻: 50 },
    text: '得意属性が風属性かつブレイカーの時、スキルダメージ+12%',
    effects: [
      {
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
    materials: {
      リュウソウラン: 20,
      彗星岩: 30,
      アンバーフライ: 10,
    },
    colors: ['黄', '赤', '緑'],
  },
  'ワンダーミステル・氷': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 魔攻: 50 },
    text: '得意属性が氷属性かつブレイカーの時、スキルダメージ+12%',
    effects: [
      {
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
    materials: {
      光る砂: 30,
      太陽の花: 20,
      甘露の実: 5,
    },
  },
  'ブリッツコア': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '弱体アイテム',
    area: '単',
    usageCount: 2,
    text: '最大HPが最も高い敵1体に「雷属性耐性-25%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '雷属性耐性-25%',
        effectItems: {
          '雷属性耐性-': 25,
        },
      },
    ],
    materials: {
      太古の蒼水: 2,
      ソーンフィッシュ: 2,
      エヴィヒブラウ: 2,
    },
    colors: ['紫', '黄', '赤'],
  },
  'ワンダーミステル・雷': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 魔攻: 50 },
    text: '得意属性が雷属性かつブレイカーの時、スキルダメージ+12%',
    effects: [
      {
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
    materials: {
      光る砂: 20,
      太陽の花: 30,
      太古の蒼水: 2,
    },
    colors: ['青', '黄', '赤'],
  },
  '生きてるゴミ箱': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '弱体アイテム',
    area: '単',
    usageCount: 2,
    text: '最大HPが最も高い敵1体に「打属性耐性-25%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '打属性耐性-25%',
        effectItems: {
          '打属性耐性-': 25,
        },
      },
    ],
    materials: {
      三つ子トーン: 25,
      大木のツタ: 25,
      光る砂: 25,
    },
  },
  '銀糸の鎧': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 50 },
    text: '受ける強化効果量+12%',
    effects: [
      {
        text: '受ける強化効果量+12%',
        effectItems: {
          '受ける強化効果量+': 12,
        },
      },
    ],
    materials: {
      安らぎの花: 25,
      リュウソウラン: 25,
      光る砂: 25,
    },
    colors: ['青', '赤', '緑'],
  },
  'ファーデンコート': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '自身がアタッカーの時、クリティカルダメージ+17%',
    effects: [
      {
        text: 'クリティカルダメージ+17%',
        effectItems: {
          'クリティカルダメージ+': 17,
        },
      },
    ],
    materials: {
      金のハチの巣: 25,
      彗星岩: 25,
      太陽の花: 25,
    },
    colors: ['青', '紫', '黄'],
  },
  'ゴールドジャケット': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '自身がアタッカーの時、バーストスキルダメージ+12%',
    effects: [
      {
        text: 'バーストスキルダメージ+12%',
        effectItems: {
          'バーストスキルダメージ+': 12,
        },
      },
    ],
    materials: {
      金のハチの巣: 25,
      大木のツタ: 25,
      太陽の花: 25,
    },
    colors: ['黄', '赤', '緑'],
  },
  '金刺繍のコート': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '単体攻撃の時、ブレイクダメージ+11%',
    effects: [
      {
        text: 'ブレイクダメージ+11%',
        effectItems: {
          'ブレイクダメージ+': 11,
        },
      },
    ],
    materials: {
      安らぎの花: 25,
      リュウソウラン: 25,
      光る砂: 25,
    },
    colors: ['青', '紫', '黄'],
  },
  'シャレードルマント': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '全体攻撃の時、ブレイクダメージ+11%',
    effects: [
      {
        text: 'ブレイクダメージ+11%',
        effectItems: {
          'ブレイクダメージ+': 11,
        },
      },
    ],
    materials: {
      三つ子トーン: 25,
      彗星岩: 25,
      太陽の花: 25,
    },
    colors: ['紫', '赤', '緑'],
  },
  'ヒロイックガイスト': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '弱体アイテム',
    area: '全',
    usageCount: 2,
    text: '敵全体に「受けるブレイクダメージ+30%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '受けるブレイクダメージ+30%',
        effectItems: {
          '受けるブレイクダメージ+': 30,
        },
      },
    ],
    materials: {
      永遠結晶: 10,
      千日草: 10,
      聖樹結晶: 10,
    },
  },
  '妖精の羽衣・火': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '自身が攻撃を受けた時、対象に「麻痺」を1回行動開始するまで中確率で付与',
    effects: [
      {
        timing: '自身が攻撃を受けた時',
        target: '敵単', text: '麻痺', duration: 1,
        effectItems: {
          '麻痺': true,
        },
      },
    ],
    materials: {
      大木のツタ: 25,
      リュウソウラン: 25,
      安らぎの花: 25,
    },
  },
  '妖精の羽衣・風': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '状態異常耐性+20%',
    effects: [
      {
        text: '状態異常耐性+20%',
        effectItems: {
          '状態異常耐性+': 20,
        },
      },
    ],
    materials: {
      千日草: 10,
      'ラピス・パピヨン': 10,
      太古の蒼水: 10,
    },
  },
  '妖精の羽衣・氷': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '自身が攻撃を受けた時、対象に「毒」を1回行動開始するまで中確率で付与',
    effects: [
      {
        timing: '自身が攻撃を受けた時',
        target: '敵単', text: '毒', duration: 1,
        effectItems: {
          '毒': true,
        },
      },
    ],
    materials: {
      湖底のぬし: 10,
      ゴルディナイト: 10,
      ソーンフィッシュ: 10,
    },
    colors: ['青', '緑', '紫'],
  },
  '万物の写本': {
    date: '2023/09/23', recipeGroup: 'ex1',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '弱体アイテム',
    area: '単',
    usageCount: 2,
    text: '最大HPが最も高い敵1体に「物理攻撃ダメージ-15%」と「受ける物理攻撃ダメージ+15%」を2回付与',
    effects: [
      {
        target: '敵単', text: '物理攻撃ダメージ-15%', duration: 2,
        effectItems: {
          '物理攻撃ダメージ-': 15,
        },
      },
      {
        target: '敵単', text: '受ける物理攻撃ダメージ+15%', duration: 2,
        effectItems: {
          '受ける物理攻撃ダメージ+': 15,
        },
      },
    ],
    materials: {
      エヴィヒブラウ: 10,
      月イナゴ: 10,
      黒陽鉱: 10,
    },
    note: '2023/10/31不具合修正内容\n修正前：最大HPが最も高い敵1体に「物攻-15%」「物防-15%」を2回付与'
  },

  //main4 recipeGroup追加、素材追加、effects削除
  '妖薬エボニアル': {
    date: '2023/10/10', recipeGroup: 'main4',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '全',
    usageCount: 2,
    text: '味方全員に「自身がアタッカーの時、スキルダメージ+35%」を2回行動終了するまで付与',
    effects: [
      {
        text: 'スキルダメージ+35%',
        effectItems: {
          'スキルダメージ+': 35,
        },
      },
    ],
    materials: {
      ローズビー: 40,
      輝く水晶のカケラ: 5,
    },
    colors: ['青', '黄', '緑'],
  },

  '波打つ刺剣': {
    date: '2023/10/10', recipeGroup: 'main4',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 50 },
    text: '自身がアタッカーの時、スキル発動後、自身に「スキルダメージ+9%」を1回行動終了するまで付与',
    effects: [
      {
        text: 'スキルダメージ+9%',
        effectItems: {
          'スキルダメージ+': 9,
        },
      },
    ],
    colors: ['青', '紫', '赤'],
    materials: {
      ローズビー: 40,
      砂晶石: 5,
    },
  },
  'クレプスクルン': {
    date: '2023/10/10', recipeGroup: 'main4',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 魔攻: 50 },
    text: '自身がサポーターの時、与えるマイナス効果量+10%',
    effects: [
      {
        text: '与えるマイナス効果量+10%',
        effectItems: {
          '与えるマイナス効果量+': 10,
        },
      },
    ],
    colors: ['紫', '緑', '黄'],
    materials: {
      首垂れ草: 30,
      ラプチャー: 5,
      スーメック: 2,
    },
  },
  '神速のブーツ': {
    date: '2023/10/10', recipeGroup: 'main4',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { 素早さ: 10 },
    text: '自身がアタッカーの時、スキル発動後、自身のHPを4%回復',
    effects: [
      {
        timing: 'スキル発動後',
        target: '自', text: 'HPを4%回復',
        effectItems: {
          'HP回復': 4,
        },
      }
    ],
    materials: {
      首垂れ草: 30,
      香木のくず: 5,
      聖なるねじれ樹: 2,
    },
    colors: ['赤', '青', '緑'],
  },
  'ミシカルリング': {
    date: '2023/10/10', recipeGroup: 'main4',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135, 素早さ: 4 },
    text: '自身がサポーターの時、スキルダメージ+8%',
    effects: [
      {
        text: 'スキルダメージ+8%',
        effectItems: {
          'スキルダメージ+': 8,
        },
      },
    ],
    colors: ['紫', '青', '黄'],
    materials: {
      首垂れ草: 30,
      砕けた石材: 5,
      ルインストン: 2,
    },
  },
  '廻る魔剣': {
    date: '2023/10/10', recipeGroup: 'main4',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '物',
    attribute: '斬',
    area: '全',
    usageCount: 3,
    damage: 150,
    text: '敵全体に斬属性ダメージ',
    colors: ['赤', '緑', '紫'],
    materials: {
      ラプチャー: 8,
      香木のくず: 8,
      砕けた石材: 8,
    },
  },
  '雷鳴の鎧': {
    date: '2023/10/10', recipeGroup: 'main4',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '得意属性が雷属性の時、攻撃後、敵に「受けるダメージ+5%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '受けるダメージ+5%',
        effectItems: {
          '受けるダメージ+': 5,
        },
      },
    ],
    colors: ['緑', '青', '紫'],
    materials: {
      紫紺の雫: 40,
      ラプチャー: 5,
      朽ちた樹の枯れ枝: 1,
    },
  },
  'ベルベットレイヤード・斬': {
    date: '2023/10/10', recipeGroup: 'main4',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '得意属性が斬属性の時、受ける強化効果量+18%',
    effects: [
      {
        text: '受ける強化効果量+18%',
        effectItems: {
          '受ける強化効果量+': 18,
        },
      },
    ],
    materials: {
      紫紺の雫: 40,
      スキマグサ: 5,
      朽ちた樹の大枝: 1,
    },
    colors: ['赤', '青', '黄'],
  },
  '氷霧の鎧': {
    date: '2023/10/10', recipeGroup: 'main4',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 魔防: 50 },
    text: '得意属性が氷属性の時、攻撃後、敵に「受けるダメージ+5%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '受けるダメージ+5%',
        effectItems: {
          '受けるダメージ+': 5,
        },
      },
    ],
    colors: ['紫', '赤', '黄'],
    materials: {
      オレンジグラス: 40,
      香木のくず: 5,
      古代魚: 1,
    },
  },
  'ベルベットレイヤード・打': {
    date: '2023/10/10', recipeGroup: 'main4',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 50 },
    text: '得意属性が打属性の時、攻撃後、敵に「受けるダメージ+5%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '受けるダメージ+5%',
        effectItems: {
          '受けるダメージ+': 5,
        },
      },
    ],
    colors: ['黄', '緑', '赤'],
    materials: {
      オレンジグラス: 40,
      スキマグサ: 5,
      朽ちた樹の枯れ枝: 1,
    },
  },
  'トランヒールサルヴ': {
    date: '2023/10/10', recipeGroup: 'main4',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '回復アイテム',
    area: '単',
    usageCount: 3,
    heal: 30,
    text: 'HPが最も減っている味方1人のHPを30%回復\n回復後、対象のマイナス効果を解除する',
    effects: [
      {
        target: '味単', text: 'HPを30%回復',
        effectItems: {
          'HP回復': 30,
        },
      },
      {
        timing: '回復後',
        target: '味単', text: 'マイナス効果を解除',
        effectItems: {
          'マイナス効果解除': true,
        },
      },
    ],
    colors: ['青', '紫', '緑'],
    materials: {
      朽ちた樹の大枝: 2,
      古代魚: 2,
      朽ちた樹の枯れ枝: 1,
    },
  },

  //EX2
  'ドナークリスタル': {
    date: '2023/10/10', recipeGroup: 'ex2',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '魔',
    attribute: '雷',
    area: '単',
    usageCount: 3,
    damage: 100,
    text: '現在HPが最も高い敵1体に雷属性ダメージを与え、\n対象に「麻痺」を2回行動開始するまで中確率で付与',
    effects: [
      {
        target: '敵単', text: '麻痺', duration: 2,
        effectItems: {
          '麻痺': true,
        },
      },
    ],
    materials: {
      ジェムフライ: 5,
      ルインストン: 10,
      ルインフィッシュ: 2,
    },
    colors: ['赤', '黄', '緑'],
  },

  '破壊の秘薬': {
    date: '2023/10/10', recipeGroup: 'ex2',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '全',
    usageCount: 2,
    text: '味方全員に「自身がブレイカーの時、ブレイクダメージ+35%」を2回行動終了するまで付与',
    effects: [
      {
        text: 'ブレイクダメージ+35%',
        effectItems: {
          'ブレイクダメージ+': 35,
        },
      },
    ],
    materials: {
      灯篭ホタル: 5,
      聖なるねじれ樹: 10,
      派手な石材: 2,
    },
    colors: ['紫', '青', '黄'],
  },
  '鋼鉄弓': {
    date: '2023/10/10', recipeGroup: 'ex2',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 45, 魔攻: 20 },
    text: '自身がブレイカーの時、ブレイクダメージ+8%',
    effects: [
      {
        text: 'ブレイクダメージ+8%',
        effectItems: {
          'ブレイクダメージ+': 8,
        },
      },
    ],
    materials: {
      スーメック: 15,
      邪なるねじれ樹: 3,
    },
    colors: ['緑', '赤', '紫'],
  },
  'フローリッシュハート': {
    date: '2023/10/10', recipeGroup: 'ex2',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '自身がディフェンダーの時、スキル発動後、自身のHPを4%回復',
    effects: [
      {
        timing: 'スキル発動後',
        target: '自', text: 'HPを4%回復',
        effectItems: {
          'HP回復': 4,
        },
      },
    ],
    materials: {
      朽ちた樹の枯れ枝: 10,
      古代魚: 10,
      朽ちた樹の大枝: 10,
    },
    colors: ['青', '紫', '黄'],
  },
  '炎熱の鎧': {
    date: '2023/10/10', recipeGroup: 'ex2',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '火属性耐性+8%',
    effects: [
      {
        text: '火属性耐性+8%',
        effectItems: {
          '火属性耐性+': 8,
        },
      },
    ],
    materials: {
      ルインフィッシュ: 2,
      ブランチトランク: 5,
      ツドイグサ: 5,
    },
    colors: ['赤', '緑', '青'],
  },
  '風凪の鎧': {
    date: '2023/10/10', recipeGroup: 'ex2',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '風属性耐性+8%',
    effects: [
      {
        text: '風属性耐性+8%',
        effectItems: {
          '風属性耐性+': 8,
        },
      },
    ],
    materials: {
      邪なるねじれ樹: 2,
      正体不明の輝石: 5,
      ブラストフィッシュ: 5,
    },
    colors: [],
  },
  'ベルベットレイヤード・突': {
    date: '2023/10/10', recipeGroup: 'ex2',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '突属性耐性+8%',
    effects: [
      {
        text: '突属性耐性+8%',
        effectItems: {
          '突属性耐性+': 8,
        },
      },
    ],
    materials: {
      派手な石材: 2,
      チョウロウウオ: 5,
      幻惑の木片: 5,
    },
    colors: [],
  },
  '白熱はちまき': {
    date: '2023/10/10', recipeGroup: 'ex2',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 8 },
    text: '物理攻撃から受けるダメージ-6%',
    effects: [
      {
        text: '受けるダメージ-6%',
        effectItems: {
          '受けるダメージ-': 6,
        },
      },
    ],
    materials: {
      激憤の叫び: 10,
      霊魂宝珠: 10,
    },
    colors: ['青', '紫', '黄'],
  },
  'グローリーベルト': {
    date: '2023/10/10', recipeGroup: 'ex2',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 8 },
    text: '魔法攻撃から受けるダメージ-6%',
    effects: [
      {
        text: '受けるダメージ-6%',
        effectItems: {
          '受けるダメージ-': 6,
        },
      },
    ],
    materials: {
      導きの花: 2,
      太古の聖魚: 2,
      太古の老木: 2,
    },
    colors: ['黄', '赤', '緑'],
  },


  //ザールブルグの錬金術士
  '鋼の杖': {
    date: '2023/10/17', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '自身がサポーターの時、与える強化効果量+10%',
    effects: [
      {
        text: '与える強化効果量+10%',
        effectItems: {
          '与える強化効果量+': 10,
        },
      },
    ],
    materials: {
      オニワライタケ: 20,
    },
    colors: ['緑', '紫', '黄'],
  },
  'ミーミルの杖': {
    date: '2023/10/17', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '得意属性が雷属性の時、ブレイクダメージ+10%',
    effects: [
      {
        text: 'ブレイクダメージ+10%',
        effectItems: {
          'ブレイクダメージ+': 10,
        },
      },
    ],
    materials: {
      オニワライタケ: 20,
    },
    colors: ['青', '黄', '赤'],
  },
  '鋼の鎧': {
    date: '2023/10/17', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '自身がサポーターの時、斬打突属性耐性+4%',
    effects: [
      {
        text: '斬打突属性耐性+4%',
        effectItems: {
          '斬属性耐性+': 4,
          '打属性耐性+': 4,
          '突属性耐性+': 4,
        },
      },
    ],
    materials: {
      こじょのこしかけ: 20,
    },
    colors: ['緑', '赤', '黄'],
  },
  '輝く絹の服': {
    date: '2023/10/17', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '得意属性が雷属性の時、状態異常耐性+24%',
    effects: [
      {
        text: '状態異常耐性+24%',
        effectItems: {
          '状態異常耐性+': 24,
        },
      },
    ],
    materials: {
      こじょのこしかけ: 20,
    },
    colors: ['青', '黄', '紫'],
  },
  'パルフューム': {
    date: '2023/10/17', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135, 素早さ: 4 },
    text: '自身がサポーターの時、火氷雷風属性耐性+4%',
    effects: [
      {
        text: '火氷雷風属性耐性+4%',
        effectItems: {
          '火属性耐性+': 4,
          '氷属性耐性+': 4,
          '雷属性耐性+': 4,
          '風属性耐性+': 4,
        },
      },
    ],
    materials: {
      レジエン石: 20,
    },
    colors: ['緑', '赤', '青'],
  },
  '安らぎのマフラー': {
    date: '2023/10/17', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135, 素早さ: 4 },
    text: '自身がブレイカーの時、ブレイクダメージ+8%',
    effects: [
      {
        text: 'ブレイクダメージ+8%',
        effectItems: {
          'ブレイクダメージ+': 8,
        },
      },
    ],
    materials: {
      レジエン石: 20,
    },
    colors: ['赤', '青', '紫'],
  },

  //
  'プリンセスステッキ': {
    date: '2023/10/24', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '得意属性が氷属性の時、スキル発動後、自身に「魔攻+2%」を2回行動終了するまで付与し、\n自身に「魔防+2%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '魔攻+2%',
        effectItems: {
          '魔攻+': 2,
        },
      },
      {
        text: '魔防+2%',
        effectItems: {
          '魔防+': 2,
        },
      },
    ],
    materials: {
      黄金うにの枝: 10
    },
    colors: ['紫', '黄', '緑'],
  },
  '勇者の剣': {
    date: '2023/10/24', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 50 },
    text: '自身のHPが70%以上の時、自身のスキルダメージ+12%',
    effects: [
      {
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
    materials: {
      黄金うにの枝: 10
    },
    colors: ['青', '赤', '緑'],
  },
  'プリンセスドレス': {
    date: '2023/10/24', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '得意属性が氷属性の時、状態異常耐性+24%',
    effects: [
      {
        text: '状態異常耐性+24%',
        effectItems: {
          '状態異常耐性+': 24,
        },
      },
    ],
    materials: {
      聖銀石: 10
    },
    colors: ['青', '紫', '黄'],
  },
  '勇者の鎧': {
    date: '2023/10/24', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '魔法属性のスキル発動時、与えるマイナス効果量+9%',
    effects: [
      {
        text: '与えるマイナス効果量+9%',
        effectItems: {
          '与えるマイナス効果量+': 9,
        },
      },
    ],
    materials: {
      聖銀石: 10,
    },
    colors: ['青', '紫', '黄'],
  },
  'プリンセスティアラ': {
    date: '2023/10/24', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135, 素早さ: 4 },
    text: '得意属性が氷属性の時、スキルダメージ+10%',
    effects: [
      {
        text: 'スキルダメージ+10%',
        effectItems: {
          'スキルダメージ+': 10,
        },
      },
    ],
    materials: {
      黄金うにの枝: 5,
      聖銀石: 5,
    },
    colors: ['紫', '赤', '緑'],
  },
  '勇者のお守り': {
    date: '2023/10/24', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 8 },
    text: 'バトル開始時、自身に「ターン開始時、HP回復+3%」を5回行動開始するまで付与',
    effects: [
      {
        text: 'ターン開始時、HP回復+3%',
        effectItems: {
          'ターン開始時HP回復': 3,
        },
      },
    ],
    materials: {
      黄金うにの枝: 5,
      聖銀石: 5,
    },
    colors: ['青', '黄', '赤'],
  },

  //イベント3
  '魔女の剣': {
    date: '2023/10/31', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 45, 魔攻: 20 },
    text: '自身がサポーターの時、スキルダメージ+8%',
    effects: [
      {
        text: 'スキルダメージ+8%',
        effectItems: {
          'スキルダメージ+': 8,
        },
      },
    ],
    materials: {
      ハロウィンパンプキン: 20,
    },
    colors: ['青', '緑', '赤'],
  },
  '魔女の服': {
    date: '2023/10/31', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '自身がサポーターの時、受けるダメージ-4%',
    effects: [
      {
        text: '受けるダメージ-4%',
        effectItems: {
          '受けるダメージ-': 4,
        },
      },
    ],
    materials: {
      ハロウィンパンプキン: 20,
    },
    colors: ['黄', '赤', '紫'],
  },
  '魔女のお面': {
    date: '2023/10/31', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135, 素早さ: 4 },
    text: '自身がサポーターの時、与える強化効果量+10%',
    effects: [
      {
        text: '与える強化効果量+10%',
        effectItems: {
          '与える強化効果量+': 10,
        },
      },
    ],
    materials: {
      ハロウィンパンプキン: 20,
    },
    colors: ['赤', '紫', '青'],
  },
  '吸血鬼の杖': {
    date: '2023/10/31', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '自身がアタッカーの時、スキル発動後、自身に「物攻・魔攻+7%」を1回行動終了するまで付与',
    effects: [
      {
        text: '物攻・魔攻+7%', duration: 1,
        effectItems: {
          '物攻+': 7,
        },
      },
      {
        text: '物攻・魔攻+7%', duration: 1,
        effectItems: {
          '魔攻+': 7,
        },
      },
    ],
    materials: {
      ハロウィンパンプキン: 20,
    },
    colors: ['紫', '黄', '緑'],
  },
  '吸血鬼のマント': {
    date: '2023/10/31', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '斬打突属性耐性+2%と状態異常耐性+10%',
    effects: [
      {
        text: '斬打突属性耐性+2%',
        effectItems: {
          '斬属性耐性+': 2,
          '打属性耐性+': 2,
          '突属性耐性+': 2,
        },
      },
      {
        text: '状態異常耐性+10%',
        effectItems: {
          '状態異常耐性+': 10,
        },
      },
    ],
    materials: {
      ハロウィンパンプキン: 20,
    },
    colors: ['緑', '青', '赤'],
  },
  '吸血鬼のブローチ': {
    date: '2023/10/31', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 8 },
    text: '得意属性が火属性の時、スキルダメージ+5%とバーストスキルダメージ+8%',
    effects: [
      {
        text: 'スキルダメージ+5%',
        effectItems: {
          'スキルダメージ+': 5,
        },
      },
      {
        text: 'バーストスキルダメージ+8%',
        effectItems: {
          'バーストスキルダメージ+': 8,
        },
      },
    ],
    materials: {
      ハロウィンパンプキン: 20,
    },
    colors: ['黄', '緑', '青'],
  },


  'プロテクトパウダー': {
    date: '2023/11/10', recipeGroup: 'main5',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '単',
    usageCount: 2,
    text: '最大HPが最も高い味方1人に「受けるダメージ-15%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '受けるダメージ-15%',
        effectItems: {
          '受けるダメージ-': 15,
        },
      },
    ],
    materials: {
      ファニプラント: 30,
      ジェムフライ: 10,
    },
    colors: ['赤', '黄', '緑'],
  },
  'まじないほうき': {
    date: '2023/11/10', recipeGroup: 'main5',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '得意属性が火属性かつアタッカーの時、全体攻撃のスキルダメージ+16%',
    effects: [
      {
        text: 'スキルダメージ+16%',
        effectItems: {
          'スキルダメージ+': 16,
        },
      },
    ],
    materials: {
      ファニプラント: 30,
      灯篭ホタル: 10,
    },
    colors: ['紫', '赤', '緑'],
  },
  'メタルターナー': {
    date: '2023/11/10', recipeGroup: 'main5',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 50 },
    text: '得意属性が打属性かつディフェンダーの時、スキル発動後、味方全員に「受けるダメージ-2%」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '受けるダメージ-2%',
        effectItems: {
          '受けるダメージ-': 2,
        },
      },
    ],
    materials: {
      酸いの実: 20,
      ホシナナ: 5,
      'スピリト・モルグ': 3,
    },
    colors: ['黄', '青', '赤'],
  },
  '神秘のタリスマン': {
    date: '2023/11/10', recipeGroup: 'main5',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 150 },
    text: '得意属性が斬属性かつサポーターの時、スキル発動後、味方全員に「受ける魔法攻撃ダメージ-3%」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '受ける魔法攻撃ダメージ-3%',
        effectItems: {
          '受けるダメージ-': 3,
        },
      },
    ],
    materials: {
      酸いの実: 20,
      赤曜鉱: 5,
      赤玉鉱石: 3,
    },
    colors: ['紫', '赤', '青'],
  },
  '羽根飾り': {
    date: '2023/11/10', recipeGroup: 'main5',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { 素早さ: 10 },
    text: '得意属性が火属性かつアタッカーの時、スキル発動後、自身のHPを6%回復',
    effects: [
      {
        text: 'HPを6%回復',
        effectItems: {
          'HP回復': 6,
        },
      },
    ],
    materials: {
      酸いの実: 20,
      マグマパウダー: 5,
      炭化樹皮: 3,
    },
    colors: ['赤', '緑', '紫'],
  },
  'シュタルレヘルン': {
    date: '2023/11/10', recipeGroup: 'main5',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '魔',
    attribute: '氷',
    area: '全',
    usageCount: 3,
    damage: 150,
    text: '敵全体に氷属性ダメージ',
    materials: {
      ホシナナ: 8,
      マグマパウダー: 8,
      赤曜鉱: 8,
    },
    colors: ['緑', '黄', '紫'],
  },
  'さすらい人の服': {
    date: '2023/11/10', recipeGroup: 'main5',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '得意属性が火属性かつアタッカーの時、受ける強化効果量+23%',
    effects: [
      {
        text: '受ける強化効果量+23%',
        effectItems: {
          '受ける強化効果量+': 23,
        },
      },
    ],
    materials: {
      アイヒェロア: 30,
      ホシナナ: 5,
      トキシーアント: 2,
    },
    colors: ['黄', '赤', '紫'],
  },
  '薬草のポンチョ': {
    date: '2023/11/10', recipeGroup: 'main5',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '得意属性が打属性かつディフェンダーの時、単体攻撃から受けるダメージ-10%',
    effects: [
      {
        text: '受けるダメージ-10%',
        effectItems: {
          '受けるダメージ-': 10,
        },
      },
    ],
    materials: {
      アイヒェロア: 30,
      紅草: 5,
      灰かぶり草: 2,
    },
    colors: ['緑', '青', '黄'],
  },
  'オーレスケイル': {
    date: '2023/11/10', recipeGroup: 'main5',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 50 },
    text: '得意属性が氷属性かつサポーターの時、与えるマイナス効果+15%',
    effects: [
      {
        text: '与えるマイナス効果+15%',
        effectItems: {
          '与えるマイナス効果+': 15,
        },
      },
    ],
    materials: {
      ハイネの炎石: 30,
      赤曜鉱: 5,
      赤熱結晶: 2,
    },
    colors: ['緑', '黄', '紫'],
  },
  'デイフーガ': {
    date: '2023/11/10', recipeGroup: 'main5',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 魔防: 50 },
    text: '得意属性が氷属性かつアタッカーの時、スキル発動後、自身に「魔攻+6%」を2回行動終了するまで付与',
    effects: [
      {
        text: '魔攻+6%',
        effectItems: {
          '魔攻+': 6,
        },
      },
    ],
    materials: {
      ハイネの炎石: 30,
      ホシナナ: 5,
      トキシーアント: 2,
    },
    colors: ['紫', '青', '緑'],
  },
  'カクテルレープ': {
    date: '2023/11/10', recipeGroup: 'main5',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '回復アイテム',
    area: '単',
    usageCount: 3,
    heal: 30,
    text: '最大HPが最も高い味方1人のHPを30%回復\n回復後、対象に「ターン開始時HP15%回復」を2回行動開始するまで付与',
    effects: [
      {
        target: '味単', text: 'HPを30%回復',
        effectItems: {
          'HP回復': 30,
        },
      },
      {
        target: '味単', text: 'ターン開始時HP15%回復',
        effectItems: {
          'ターン開始時HP回復': 15,
        },
      },
    ],
    colors: ['黄', '青', '赤'],
    materials: {
      灰かぶり草: 2,
      赤熱結晶: 2,
      トキシーアント: 1,
    },
  },


  'ラーヴァキューブ': {
    date: '2023/11/10', recipeGroup: 'ex3',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '魔',
    attribute: '火',
    area: '単',
    usageCount: 3,
    damage: 260,
    text: '現在HPが最も低い敵1体に火属性ダメージ',
    materials: {
      プルムル: 5,
      'スピリト・モルグ': 10,
      モノノフバッタ: 2,
    },
    colors: ['赤', '黄', '緑'],
  },
  'ラギーソード': {
    date: '2023/11/10', recipeGroup: 'ex3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 45, 魔攻: 20 },
    text: '得意属性が斬属性かつサポーターの時、スキル発動後、味方全員に「物理攻撃スキルダメージ+6%」を1回行動終了するまで付与',
    effects: [
      {
        text: 'スキルダメージ+6%',
        effectItems: {
          'スキルダメージ+': 6,
        },
      },
    ],
    materials: {
      灰かぶり草: 10,
      トキシーアント: 10,
      赤熱結晶: 10,
    },
    colors: ['赤', '緑', '黄'],
  },
  'コールドハンマー': {
    date: '2023/11/10', recipeGroup: 'ex3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 魔攻: 50 },
    text: '得意属性が氷属性かつアタッカーの時、スキル発動後、\n自身に「魔攻+3%」を2回行動終了するまで付与し、\n自身に「魔防+3%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '魔攻+3%',
        effectItems: {
          '魔攻+': 3,
        },
      },
      {
        text: '魔防+3%',
        effectItems: {
          '魔防+': 3,
        },
      },
    ],
    materials: {
      赤玉鉱石: 15,
      フロジストン: 3,
    },
    colors: ['緑', '黄', '紫'],
  },
  '詰め合わせキャンディ': {
    date: '2023/11/10', recipeGroup: 'ex3',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '全',
    usageCount: 2,
    text: '味方全員に「自身がサポーターの時、スキルダメージ+45%」を2回行動終了するまで付与',
    effects: [
      {
        text: 'スキルダメージ+45%',
        effectItems: {
          'スキルダメージ+': 45,
        },
      },
    ],
    materials: {
      ザフロア油: 5,
      炭化樹皮: 10,
      シュランク: 2,
    },
    colors: ['赤', '青', '緑'],
  },
  'スケイルアーマー': {
    date: '2023/11/10', recipeGroup: 'ex3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 50 },
    text: '得意属性が斬属性かつサポーターの時、与える強化効果量+8%とスキルダメージ+6%',
    effects: [
      {
        text: '与える強化効果量+8%',
        effectItems: {
          '与える強化効果量+': 8,
        },
      },
      {
        text: 'スキルダメージ+6%',
        effectItems: {
          'スキルダメージ+': 6,
        },
      },
    ],
    materials: {
      フラムドラグーン: 1,
      モノノフバッタ: 3,
      スピアワーム: 3,
    },
    colors: ['緑', '青', '赤'],
  },
  'ナチュラルコート': {
    date: '2023/11/10', recipeGroup: 'ex3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 魔防: 50 },
    text: '得意属性が雷属性かつブレイカーの時、スキル発動後、自身に「ブレイクダメージ+7%」を2回行動終了するまで付与',
    effects: [
      {
        text: 'ブレイクダメージ+7%',
        effectItems: {
          'ブレイクダメージ+': 7,
        },
      },
    ],
    materials: {
      聖石の欠片: 1,
      黒玉鉱石: 3,
      フロジストン: 3,
    },
    colors: ['赤', '青', '黄'],
  },
  'ダークレザー': {
    date: '2023/11/10', recipeGroup: 'ex3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '得意属性が風属性かつサポーターの時、与える強化効果量+15%',
    effects: [
      {
        text: '与える強化効果量+15%',
        effectItems: {
          '与える強化効果量+': 15,
        },
      },
    ],
    materials: {
      溶けあう硬木: 1,
      シュランク: 3,
      ブルリエーレ: 3,
    },
    colors: ['青', '緑', '黄'],
  },
  'オルフィックリング・雷': {
    date: '2023/11/10', recipeGroup: 'ex3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { 素早さ: 10 },
    text: '得意属性が雷属性かつブレイカーの時、全体攻撃のブレイクダメージ+16%',
    effects: [
      {
        text: 'ブレイクダメージ+16%',
        effectItems: {
          'ブレイクダメージ+': 16,
        },
      },
    ],
    materials: {
      ヴァイヒ: 1,
      老木の枝葉: 1,
      'フェロス・モルグ': 1,
    },
    colors: ['青', '赤', '緑'],
  },
  'オルフィックリング・氷': {
    date: '2023/11/10', recipeGroup: 'ex3',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135, 素早さ: 4 },
    text: '得意属性が氷属性かつアタッカーの時、スキルダメージ+12%',
    effects: [
      {
        text: 'スキルダメージ+12%',
        effectItems: {
          'スキルダメージ+': 12,
        },
      },
    ],
    materials: {
      煌めく砂: 5,
      恩寵の淑女: 5,
    },
    colors: ['緑', '黄', '紫'],
  },


  'ビギナースタッフ': {
    date: '2023/11/21', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 45 },
    text: '自身がサポーターの時、スキル発動後、対象に「受けるHP回復量+4%」を1回行動終了するまで付与',
    effects: [
      {
        text: '受けるHP回復量+4%',
        effectItems: {
          '受けるHP回復量+': 4,
        },
      },
    ],
    materials: {
      星の花: 20,
    },
    colors: ['紫', '赤', '緑'],
  },
  'ブラッディクロー': {
    date: '2023/11/21', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 45, 魔攻: 20 },
    text: '得意属性が打属性の時、スキル発動後、自身に「物攻+11%」を1回行動終了するまで付与',
    effects: [
      {
        text: '物攻+11%',
        effectItems: {
          '物攻+': 11,
        },
      },
    ],
    materials: {
      星の花: 20,
    },
    colors: ['青', '黄', '緑'],
  },
  '幻月の服': {
    date: '2023/11/21', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '自身がサポーターの時、与えるHP回復量+4%',
    effects: [
      {
        text: '与えるHP回復量+4%',
        effectItems: {
          '与えるHP回復量+': 4,
        },
      },
    ],
    materials: {
      星の実: 20,
    },
    colors: ['青', '紫', '赤'],
  },
  'ハードローブ': {
    date: '2023/11/21', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '得意属性が打属性の時、受けるダメージ-5%',
    effects: [
      {
        text: '受けるダメージ-5%',
        effectItems: {
          '受けるダメージ-': 5,
        },
      },
    ],
    materials: {
      星の実: 20,
    },
    colors: ['青', '黄', '赤'],
  },
  'ナックルガード': {
    date: '2023/11/21', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135, 素早さ: 4 },
    text: '得意属性が雷属性の時、火氷雷風属性耐性+5%',
    effects: [
      {
        text: '火氷雷風属性耐性+5%',
        effectItems: {
          '火属性耐性+': 5,
          '氷属性耐性+': 5,
          '雷属性耐性+': 5,
          '風属性耐性+': 5,
        },
      },
    ],
    materials: {
      星の花: 10,
      星の実: 10,
    },
    colors: ['青', '紫', '黄'],
  },
  'アンジュパリュール': {
    date: '2023/11/21', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 8 },
    text: '得意属性が打属性の時、ターン開始時、HP回復+3%',
    effects: [
      {
        text: 'ターン開始時、HP回復+3%',
        effectItems: {
          'ターン開始時HP回復': 3,
        },
      },
    ],
    materials: {
      星の花: 10,
      星の実: 10,
    },
    colors: ['紫', '黄', '緑'],
  },
  'さすらう地球儀': {
    date: '2023/11/21', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '戦闘アイテム',
    kind2: '攻撃アイテム',
    type: '魔',
    attribute: '打',
    area: '単',
    usageCount: 1,
    damage: 100,
    text: '現在HPが最も低い敵1体に打属性ダメージを与え、\n対象が水棲種族の時、ターンを2ターン遅らせる',
    materials: {
      ハイネライト: 30,
    },
    colors: ['黄', '赤', '緑'],
  },


  'ヘリオプロクス': {
    date: '2023/11/30', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 50 },
    text: '得意属性が斬属性の時、ブレイクダメージ+10%',
    effects: [
      {
        text: 'ブレイクダメージ+10%',
        effectItems: {
          'ブレイクダメージ+': 10,
        },
      },
    ],
    materials: {
      ヤギミルク: 20,
    },
    colors: ['黄', '青', '緑'],
  },

  '森番鐘': {
    date: '2023/11/30', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 45, 魔攻: 20 },
    text: '得意属性が打属性の時、与える強化効果量+12%',
    effects: [
      {
        text: '与える強化効果量+12%',
        effectItems: {
          '与える強化効果量+': 12,
        },
      },
    ],
    materials: {
      ヤギミルク: 20,
    },
    colors: ['赤', '緑', '紫'],
  },
  'ソルジャーキュイラス': {
    date: '2023/11/30', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '自身がブレイカーの時、攻撃後、対象に「斬属性耐性-5%」を2回攻撃を受けるまで付与',
    effects: [
      {
        text: '斬属性耐性-5%',
        effectItems: {
          '斬属性耐性-': 5,
        },
      },
    ],
    materials: {
      夢見の霧花: 20,
    },
    colors: ['緑', '黄', '青'],
  },



  'ゴールデンメイル': {
    date: '2023/11/30', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 20, 魔防: 45 },
    text: '自身がサポーターの時、スキル発動後、味方全員に「スキルダメージ+2%」を1回行動終了するまで付与',
    effects: [
      {
        text: 'スキルダメージ+2%',
        effectItems: {
          'スキルダメージ+': 2,
        },
      },
    ],
    materials: {
      夢見の霧花: 20,
    },
    colors: ['赤', '紫', '黄'],
  },
  '魔石のチェイン': {
    date: '2023/11/30', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 60, 素早さ: 8 },
    text: '攻撃後、対象に「受けるブレイクダメージ+6%」を1回攻撃を受けるまで付与',
    effects: [
      {
        text: '受けるブレイクダメージ+6%',
        effectItems: {
          '受けるブレイクダメージ+': 6,
        },
      },
    ],
    materials: {
      森の賢人: 20,
    },
    colors: ['青', '赤', '黄'],
  },
  'バロンズクラウン': {
    date: '2023/11/30', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '装飾品',
    status: { HP: 135, 素早さ: 4 },
    text: '得意属性が打属性の時、火氷雷風属性耐性+5%',
    effects: [
      {
        text: '火氷雷風属性耐性+5%',
        effectItems: {
          '火属性耐性+': 5,
          '氷属性耐性+': 5,
          '雷属性耐性+': 5,
          '風属性耐性+': 5,
        },
      },
    ],
    materials: {
      森の賢人: 20,
    },
    colors: ['紫', '緑', '青'],
  },

  '頼れる錬金術士の杖': {
    date: '2023/11/30', recipeGroup: 'event',//ライザからの挑戦
    rarity: 'SR',
    kind1: '装備アイテム', kind2: '武器',
    status: { 物攻: 20, 魔攻: 25 },
    text: 'スキルダメージ+5%',
    effects: [
      {
        text: 'スキルダメージ+5%',
        effectItems: {
          'スキルダメージ+': 5,
        },
      },
    ],
    materials: {
      トーン: 5,
      ナナシ草: 5,
    },
    colors: ['青', '黄', '赤'],
  },
  'グラスビーンズ': {
    date: '2023/11/30', recipeGroup: 'event',//ライザからの挑戦
    rarity: 'SR',
    kind1: '戦闘アイテム',
    kind2: '強化アイテム',
    area: '単',
    usageCount: 3,
    text: 'HPが最も減っている味方1人のマイナス効果を解除し、HPを15%回復',
    effects: [
      {
        target: '味単', text: 'マイナス効果を解除',
        effectItems: {
          'マイナス効果解除': true,
        },
      },
      {
        target: '味単',
        text: 'HPを15%回復',
        effectItems: {
          'HP回復': 15,
        },
      },
    ],
    materials: {
      植物エキス: 5,
      ハチの巣: 10,
    },
    colors: ['青', '赤', '緑'],
  },
  'クーケンスウェット': {
    date: '2023/11/30', recipeGroup: 'event',
    rarity: 'SSR',
    kind1: '装備アイテム', kind2: '防具',
    status: { 物防: 45, 魔防: 20 },
    text: '得意属性が斬属性の時、スキル発動後、自身のHPを5%回復',
    effects: [
      {
        text: 'HPを5%回復',
        effectItems: {
          'HP回復': 5,
        },
      },
    ],
    materials: {
      銀のハチの巣: 25,
      黒水: 10,
    },
    colors: ['紫', '黄', '緑'],
  },









}
export default item;
