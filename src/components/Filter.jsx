import React, { useState, useEffect } from 'react';
import { Autocomplete, Button, Checkbox, Chip, Drawer, ToggleButton, ToggleButtonGroup, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, TextField, Tooltip } from '@mui/material';
import { darken, lighten } from '@mui/system';
import StarIcon from '@mui/icons-material/Star'
import CloseIcon from "@mui/icons-material/Close";


import { mainBackgroundColor, selectedBackgroundColor, checkColor, mainColor, toggleButtonStyle } from '../utils/commonStyle';
import charAbility from '../constants/charAbility';
import skill from '../constants/skill';
import item from '../constants/item';
import material from '../constants/material';
import quest from '../constants/quest';
import memoria from '../constants/memoria';
import gift from '../constants/gift';
import { Img } from "./Img";
import { isAnyMatch, isAllMatch, isAtLeastMultipleAndColorMatches } from '../utils/commonUtils';
import { giftColorList, GiftColorLR, GiftColor1 } from './GiftColor';
import { TextBr } from './Text'
import { character } from '../constants/character';
import { currentParameters } from '../utils/parameters';
import { BasicDrawer } from './CustomDrawer';






const icon = [
  'アタッカー', 'ブレイカー', 'ディフェンダー', 'サポーター',
  '火', '氷', '風', '雷', '斬', '突', '打',
  '装備アイテム', '戦闘アイテム',
  '攻撃', '強化', '弱体', '回復',
  '攻撃アイテム', '強化アイテム', '弱体アイテム', '回復アイテム', '武器', '防具', '装飾品',
]
export const filterList = {
  character: {
    get: ['恒常ガチャ', '限定ガチャ', '配布'],
    star: [3, 2, 1],
    role: ['アタッカー', 'ブレイカー', 'ディフェンダー', 'サポーター'],
    attribute: ['火', '氷', '雷', '風', '斬', '打', '突'],
    area: ['単', '全'],
    giftColorL: giftColorList,
    giftColorR: giftColorList,
    character: [],
    skill: [],
    charAbility: [],
    gift: [],
  },
  skill: {
    number: ['スキル1', 'スキル2', 'バーストスキル'],
    attribute: ['火', '氷', '雷', '風', '斬', '打', '突'],
    area: ['単', '全'],
    effectTarget: ['使用スキルのみ', '自', '味単', '味全', '敵単', '敵全'],
    effectTargetAttribute: ['火', '氷', '雷', '風', '斬', '打', '突'],
    skillEffectItem: [],
  },
  memoria: {
    get: ['恒常ガチャ', '限定ガチャ', '配布・他'],
    rarity: ['SSR', 'SR', 'R'],
    memoriaAbility: [],
    effectTarget: ['自', '味全', '敵'],
    effectTargetAttribute: ['火', '氷', '雷', '風', '斬', '打', '突'],
    effectItemOfMemoriaAbility: [],
  },
  item: {
    recipeGroup: ['main1', 'main2', 'main3', 'main4', 'main5', 'ex1', 'ex2', 'ex3', 'event'],
    rarity: ['SSR', 'SR', 'R'],
    kind1: ['戦闘アイテム', '装備アイテム'],
    kind2: ['攻撃アイテム', '強化アイテム', '弱体アイテム', '回復アイテム', '武器', '防具', '装飾品'],
    item: [],
    effectItemOfItem: [],
  },
  material: {
    target: ['戦闘アイテム', '装備アイテム'],
    rarity: ['SSR', 'SR', 'R'],
    giftColor: giftColorList,
    material: [],
    gift: [],
  },
  gift: {
    target: ['戦闘アイテム', '装備アイテム'],
    giftType: ['攻撃', '強化', '弱体', '回復'],
    gift: [],
    effectItemOfGift: [],
  },
  alchemy: {
    target: ['戦闘アイテム', '装備アイテム'],
    giftColor: giftColorList,
    character: [],
    materialOfAlchemy: [],
    gift: [],
    gift2: [],
    gift3: [],
  },
  quest: {
    questType: ['スコアバトル', 'ダンジョン', 'イベント'],
    quest: [],
  },
}
export const filterItemitialize = (category) => {
  return ({
    ...Object.fromEntries(Object.entries(filterList[category]).map(([key]) => [key, []])),
  })
}
const groupTitle = (category) => ({
  get: '入手手段',
  rarity: 'レアリティ',
  star: '初期レアリティ',
  role: 'ロール',
  attribute: category === 'character' ? '所持スキル属性' : '属性',
  area: category === 'character' ? 'スキル範囲' : '範囲',
  giftColorL: '受けるギフトカラー',
  giftColorR: '与えるギフトカラー',
  giftColor: category === 'alchemy' ? 'レシピのギフトカラー' : '特性発現カラー',
  number: 'スキル種別',
  effectTarget: '効果対象範囲',
  effectTargetAttribute: '効果対象属性',
  recipeGroup: 'カテゴリ',
  kind1: '種別',
  kind2: '戦闘アイテムカテゴリor装備種別',
  target: category === 'gift' ? '分類' : category === 'alchemy' ? 'レシピの種別' : '特性分類',
  giftType: '種別',
  questType: 'クエストの種類',
});


const StarIconGroup = ({ count, selected }) => {
  return (
    [...Array(Number(count))].map((_, starIndex) => (
      <StarIcon
        key={starIndex}
        style={{
          color: selected ? checkColor : 'yellow',
          fontSize: '16px',
          marginRight: -3
        }}
      />
    ))
  );
};





const containerStyle = {//画面右端で改行する
  display: 'flex',
  flexWrap: 'wrap',
};
const toggleButtonGroupStyle = {
  pb: 0.5,
  // height: 36,
  padding: 0,
  display: 'flex',
  flexWrap: 'wrap',
  // padding: '8px 16px', // パディングを適切に調整
  // 必要に応じて min-height を設定
  minHeight: '36px', // 最小高さの例
};
export const FilterButtonGroup = ({ category, filterItems, setFilterItems, group }) => {

  //filterItems[group]がlocalStrageに無かった場合の処理
  useEffect(() => {
    if (filterItems[group] === undefined) {
      filterItems[group] = []
      setFilterItems(prevFilterItems => ({ ...prevFilterItems, [group]: [] }));
    }
  }, []);

  const [items, setItems] = React.useState(filterItems[group] ?? []);

  const updateSelectedFilterItems = (event, newItems) => {
    setItems(newItems);
    const updatedFilterItems = {
      ...filterItems,
      [group]: [...newItems]
    }
    setFilterItems(updatedFilterItems)
    localStorage.setItem('filterItems_' + category, JSON.stringify(updatedFilterItems));
  };

  const renderButton = (name, index) => {
    const isNumber = !isNaN(name);
    const isIcon = icon.includes(name);
    const isGiftColor = giftColorList.includes(name);
    const selected = items.includes(name);

    const renderContent = (name, selected, group) => {
      if (isNumber) {
        return <StarIconGroup count={name} selected={selected} />;
      }

      if (isIcon) {
        return <Img
          name={name}
          square={30}
          borderRadius={(group === 'target' || group === 'giftType' || group === 'kind1' || (group === 'kind2' && name.includes('アイテム'))) ? 15 : 0}
          rhombus={(group === 'kind2' && !name.includes('アイテム')) ? true : false}
          sx={{ height: '30px' }}
        />;
      }

      if (isGiftColor) {
        if (category === 'material' || category === 'alchemy') {
          return <GiftColor1 color={name} size={8} />;
        } else {
          return GiftColorLR(name, group);
        }
      }

      return name;
    }

    return (
      <ToggleButton
        value={name}
        aria-label={name}
        key={index}
        size="small"
        sx={toggleButtonStyle}
        selected={selected}
      >
        {renderContent(name, selected, group)}
      </ToggleButton >
    );
  };

  return (
    <>
      <div style={{ fontSize: '12px', lineHeight: 1 }}>
        {groupTitle(category)[group] ?? group}
      </div>
      <div style={containerStyle}>
        <ToggleButtonGroup
          value={items}
          onChange={updateSelectedFilterItems}
          aria-label={'filterButton'}
          sx={toggleButtonGroupStyle}
        >
          {filterList[category][group].map(renderButton)}
        </ToggleButtonGroup>
      </div>
    </>
  )
}


const isAnyMatchForArray = (filterItems, dataEl, key1, key2) => {
  if (!dataEl[key1]) return false
  return dataEl[key1].some(key1El => filterItems.includes(key1El[key2]));
};

const isAnyMatchForArrayForObjKeys = (filterItems, dataEl) => {
  if (!dataEl.effects) return false
  return dataEl.effects.some(effectEl =>
    Object.keys(effectEl.effectItems).some(key => filterItems.includes(key))
  );
};

const doesEffectMatch = (dataEl, filterItems, targetKey, categoryEffectItem) => {
  // dataEl.effectsが無い場合、length0の時のみtrue
  if (!dataEl.effects) {
    return filterItems[categoryEffectItem].length === 0 && filterItems.effectTarget.length === 0 && filterItems.effectTargetAttribute.length === 0;
  }

  // 'effects'配列の中で、指定された条件に一致する要素があるかどうかをチェック
  return dataEl.effects.some(effectEl => {
    // 'target'キーに対するフィルター項目と一致するか確認
    const matchesTarget = filterItems.effectTarget.length === 0 || filterItems.effectTarget.includes(effectEl[targetKey]);
    // const isMatcheAttribute = filterItems.effectTargetAttribute.length === 0 || filterItems.effectTargetAttribute.includes(effectEl.attribute);
    const isMatcheAttribute = filterItems.effectTargetAttribute.length === 0 || (effectEl.attributes && isAnyMatch(filterItems.effectTargetAttribute, effectEl.attributes));



    // 'effectItems'のキーに対するフィルター項目と一致するか確認
    const matchesEffectItemKeys = filterItems[categoryEffectItem].length === 0 || Object.keys(effectEl.effectItems).some(key => filterItems[categoryEffectItem].includes(key));

    return matchesTarget && isMatcheAttribute && matchesEffectItemKeys;
  });
};

// let test = 0
const DetermineCombination = (dataEl, filterItems, giftCountThreshold, giftCountThreshold2, giftCountThreshold3) => {

  // console.log(dataEl)

  const char1Matched = filterItems.giftColor.length === 0 || filterItems.giftColor.includes(dataEl.giftColor)
  const char2Matched = dataEl.giftColors[1] === dataEl.giftColors[2]
  // test ++
  // console.log(char1Matched,char2Matched,test)


  const isAtLeastMultipleAndColorMatches = (arrA, arrB, threshold, n) => {
    // console.log(arrA, arrB, threshold)

    const Gifts1 = dataEl.target === '装備アイテム' ? [arrB[0]] : [arrB[0], arrB[1]]
    const Gifts2 = dataEl.target === '装備アイテム' ? [arrB[1]] : [arrB[2], arrB[3]]
    const Gifts3 = dataEl.target === '装備アイテム' ? [arrB[2], arrB[3]] : [arrB[4], arrB[5]]


    let count = 0;
    for (let el of arrA) {
      if (char1Matched) {
        let occurrenceCount1 = Gifts1.filter((item) => item === el).length;
        count += occurrenceCount1;
      }
      if (char2Matched) {
        let occurrenceCount2 = Gifts2.filter((item) => item === el).length;
        count += occurrenceCount2;
      }
      let occurrenceCount3 = Gifts3.filter((item) => item === el).length;
      count += occurrenceCount3;


      if (count >= threshold) {
        return true;
      }
    }
    return false;
  }


  let isMatched = (isAtLeastMultipleAndColorMatches(filterItems.gift, dataEl.gifts, giftCountThreshold, 1)) &&
    (filterItems.gift2.length === 0 || isAtLeastMultipleAndColorMatches(filterItems.gift2, dataEl.gifts, giftCountThreshold2, 2)) &&
    (filterItems.gift3.length === 0 || isAtLeastMultipleAndColorMatches(filterItems.gift3, dataEl.gifts, giftCountThreshold3, 3))


  return isMatched





}

const filterPassFunctionMap = (giftCountThreshold, giftCountThreshold2, giftCountThreshold3) => ({
  character: (dataEl, filterItems) => (
    (filterItems.get.length === 0 || filterItems.get.includes(dataEl.get)) &&
    (filterItems.star.length === 0 || filterItems.star.includes(dataEl.star)) &&
    (filterItems.role.length === 0 || filterItems.role.includes(dataEl.role)) &&
    (filterItems.attribute.length === 0 || isAnyMatch(filterItems.attribute, Object.keys(dataEl.attribute))) &&
    (filterItems.area.length === 0 || isAnyMatch(filterItems.area, Object.keys(dataEl.area))) &&
    (filterItems.giftColorL.length === 0 || filterItems.giftColorL.includes(dataEl.giftColor[0])) &&
    (filterItems.giftColorR.length === 0 || filterItems.giftColorR.includes(dataEl.giftColor[1])) &&
    (filterItems.character.length === 0 || filterItems.character.includes(dataEl.name)) &&
    (filterItems.skill.length === 0 || (isAnyMatch(filterItems.skill, dataEl.skill))) &&
    (filterItems.charAbility.length === 0 || (isAnyMatch(filterItems.charAbility, dataEl.ability))) &&
    (filterItems.gift.length === 0 || (isAnyMatch(filterItems.gift, dataEl.gift)))
  ),
  skill: (dataEl, filterItems) => (
    (filterItems.number.length === 0 || filterItems.number.includes(dataEl.number)) &&
    (filterItems.attribute.length === 0 || filterItems.attribute.includes(dataEl.attribute)) &&
    (filterItems.area.length === 0 || filterItems.area.includes(dataEl.area)) &&
    doesEffectMatch(dataEl, filterItems, 'target', 'skillEffectItem')

  ),
  memoria: (dataEl, filterItems) => (
    (filterItems.get.length === 0 || filterItems.get.includes(dataEl.get)) &&
    (filterItems.rarity.length === 0 || filterItems.rarity.includes(dataEl.rarity)) &&
    (filterItems.memoriaAbility.length === 0 || filterItems.memoriaAbility.includes(dataEl.memoriaAbility)) &&
    doesEffectMatch(dataEl, filterItems, 'target', 'effectItemOfMemoriaAbility')
  ),
  item: (dataEl, filterItems) => (
    (filterItems.recipeGroup.length === 0 || filterItems.recipeGroup.includes(dataEl.recipeGroup)) &&
    (filterItems.rarity.length === 0 || filterItems.rarity.includes(dataEl.rarity)) &&
    (filterItems.kind1.length === 0 || filterItems.kind1.includes(dataEl.kind1)) &&
    (filterItems.kind2.length === 0 || filterItems.kind2.includes(dataEl.kind2)) &&
    (filterItems.item.length === 0 || filterItems.item.includes(dataEl.name)) &&
    (filterItems.effectItemOfItem.length === 0 || (dataEl.effects && isAnyMatchForArrayForObjKeys(filterItems.effectItemOfItem, dataEl)))
  ),
  material: (dataEl, filterItems) => (
    (filterItems.target.length === 0 || filterItems.target.includes(dataEl.target)) &&
    (filterItems.rarity.length === 0 || filterItems.rarity.includes(dataEl.rarity)) &&
    (filterItems.giftColor.length === 0 || filterItems.giftColor.includes(dataEl.giftColor)) &&
    (filterItems.material.length === 0 || filterItems.material.includes(dataEl.name)) &&
    (filterItems.gift.length === 0 || (isAnyMatch(filterItems.gift, dataEl.gift)))
  ),
  gift: (dataEl, filterItems) => (
    (filterItems.target.length === 0 || filterItems.target.includes(dataEl.target)) &&
    (filterItems.giftType.length === 0 || filterItems.giftType.includes(dataEl.giftType)) &&
    (filterItems.gift.length === 0 || filterItems.gift.includes(dataEl.name)) &&
    (filterItems.effectItemOfGift.length === 0 || (isAnyMatchForArrayForObjKeys(filterItems.effectItemOfGift, dataEl)))
  ),
  alchemy: (dataEl, filterItems) => (
    (filterItems.target.length === 0 || filterItems.target.includes(dataEl.target)) &&
    // (filterItems.giftColor.length === 0 || !currentParameters.colorMatchedCharaOnly || filterItems.giftColor.includes(dataEl.giftColor)) &&
    (filterItems.giftColor.length === 0 || !currentParameters.colorMatchedCharaOnly || filterItems.giftColor.includes(dataEl.giftColor)) &&
    (!currentParameters.colorMatchedCharaOnly || dataEl.giftColors[1] === dataEl.giftColors[2]) &&
    (filterItems.character.length === 0 || isAnyMatch(filterItems.character, dataEl.names)) &&
    (filterItems.materialOfAlchemy.length === 0 || filterItems.materialOfAlchemy.includes(dataEl.names[2])) &&
    DetermineCombination(dataEl, filterItems, giftCountThreshold, giftCountThreshold2, giftCountThreshold3)

  ),
  quest: (dataEl, filterItems) => (
    (filterItems.questType.length === 0 || filterItems.questType.includes(dataEl.questType)) &&
    (filterItems.quest.length === 0 || filterItems.quest.includes(dataEl.name))
  ),
});
export function isFilterPassed({ category, dataEl, filterItems, giftCountThreshold, giftCountThreshold2, giftCountThreshold3 }) {
  // console.log(currentParameters.colorMatchedCharaOnly)
  // console.log(dataEl.name)
  const filterPassFunctions = filterPassFunctionMap(giftCountThreshold, giftCountThreshold2, giftCountThreshold3);
  const filterPassFunction = filterPassFunctions[category];

  // console.log(filterItems, giftCountThreshold, giftCountThreshold2, giftCountThreshold3)

  if (!filterPassFunction) console.log(category);
  return filterPassFunction(dataEl, filterItems);
}



const getLabelForGroup = (group, category) => {
  switch (group) {
    case 'character':
      return 'キャラ';
    case 'gift':
      return category === 'alchemy' ? '第1候補群（必須）' : '特性';
    case 'gift2':
      return '第2候補群（任意）';
    case 'gift3':
      return '第3候補群（任意）';

    case 'skill':
      return 'スキル';
    case 'charAbility':
    case 'memoriaAbility':
      return 'アビリティ';
    case 'item':
      return 'アイテム';
    case 'material':
    case 'materialOfAlchemy':
      return '素材';
    case 'quest':
      return 'クエスト';
    default:
      return '効果';
  }
}
const optionsOfEffectItem = [
  { name: '最大HP+' },
  { name: '素早さ+' },
  { name: '物攻+' },
  { name: '物防+' },
  { name: '魔攻+' },
  { name: '魔防+' },

  { name: 'スキル威力+' },

  { name: 'ダメージ+' },
  { name: '属性ダメージ+' },

  { name: 'スキルダメージ+' },
  { name: '魔法攻撃スキルダメージ+' },
  { name: '物理攻撃スキルダメージ+' },
  { name: '火属性スキルダメージ+' },
  { name: '氷属性スキルダメージ+' },
  { name: '雷属性スキルダメージ+' },
  { name: '風属性スキルダメージ+' },
  { name: '斬属性スキルダメージ+' },
  { name: '打属性スキルダメージ+' },
  { name: '突属性スキルダメージ+' },

  { name: 'クリティカル確率+' },
  { name: 'クリティカルダメージ+' },
  { name: 'バーストスキルダメージ+' },

  { name: 'ブレイクダメージ+' },
  { name: '魔法攻撃ブレイクダメージ+' },
  { name: '物理攻撃ブレイクダメージ+' },
  { name: '火属性ブレイクダメージ+' },
  { name: '氷属性ブレイクダメージ+' },
  { name: '雷属性ブレイクダメージ+' },
  { name: '風属性ブレイクダメージ+' },
  { name: '斬属性ブレイクダメージ+' },
  { name: '打属性ブレイクダメージ+' },
  { name: '突属性ブレイクダメージ+' },

  { name: '与える強化効果量+' },
  { name: '与えるダメージ強化効果量+', text: 'スキルダメージアップに適用\n属性ダメージアップに非適用' },
  { name: '与える物理/魔法被ダメージダウン効果量+', text: '物理耐性アップ強化\n魔法耐性アップ強化' },
  { name: '受ける強化効果量+' },

  { name: '属性耐性+' },
  { name: '火属性耐性+' },
  { name: '氷属性耐性+' },
  { name: '雷属性耐性+' },
  { name: '風属性耐性+' },
  { name: '斬属性耐性+' },
  { name: '打属性耐性+' },
  { name: '突属性耐性+' },

  { name: '状態異常耐性+' },

  { name: '受けるダメージ-' },
  { name: '受ける物理攻撃ダメージ-', text: '物理被ダメージダウン(物理耐性アップに該当)' },
  { name: '受ける魔法攻撃ダメージ-', text: '魔法被ダメージダウン(魔法耐性アップに該当)' },

  { name: 'ダメージ-' },
  { name: '物理攻撃ダメージ-' },
  { name: '魔法攻撃ダメージ-' },

  { name: '受けるダメージ+' },
  { name: '受ける物理攻撃ダメージ+', text: '物理被ダメージアップ(物理耐性ダウンに該当)' },
  { name: '受ける魔法攻撃ダメージ+', text: '魔法被ダメージアップ(魔法耐性ダウンに該当)' },
  { name: '受ける物理攻撃スキルダメージ+' },
  { name: '受ける魔法攻撃スキルダメージ+' },
  { name: '受けるブレイクダメージ+' },

  { name: '回避' },

  { name: '属性耐性-' },
  { name: '全属性耐性-' },
  { name: '火属性耐性-' },
  { name: '氷属性耐性-' },
  { name: '雷属性耐性-' },
  { name: '風属性耐性-' },
  { name: '斬属性耐性-' },
  { name: '打属性耐性-' },
  { name: '突属性耐性-' },

  { name: '与えるマイナス効果量+' },
  { name: '与える物理/魔法被ダメージアップ効果量+', text: '物理耐性ダウン強化\n魔法耐性ダウン強化' },

  { name: '状態異常耐性-' },
  { name: '与える状態異常付与率+' },

  { name: '毒' },
  { name: '麻痺' },
  { name: '火傷' },

  { name: 'HP回復' },
  { name: 'ターン開始時HP回復' },
  { name: '与えるHP回復量+' },
  { name: '受けるHP回復量+' },

  { name: 'マイナス効果解除' },
  { name: 'マイナス効果無効' },
  { name: '状態異常回復' },

  { name: 'ターンを遅らせる' },
  { name: 'アイテムゲージ回復' },
  { name: 'かばう' },
  { name: '強制ブレイク' },
]
const filterOptionsOfEffectItemInData = (options, data) => {
  // skillの中の全てのeffectItemを一つのsetに集め、optionsの中からeffectItemsSetに存在するnameのものだけを抽出
  const effectItemsSet = new Set();
  Object.values(data).forEach(dataEl => {
    dataEl.effects && dataEl.effects.forEach(effectEl => {
      Object.keys(effectEl.effectItems).forEach(effectItem => {
        effectItemsSet.add(effectItem);
      });
    });
  });
  return options.filter(option => effectItemsSet.has(option.name));
};
const optionsOfGift = Object.entries(gift).map(([name, el]) => ({ ...el, name: name }))
const filterOptionsOfGiftInData = (options, data) => {
  // skillの中の全てのeffectItemを一つのsetに集め、optionsの中からeffectItemsSetに存在するnameのものだけを抽出
  const giftSet = new Set();
  Object.values(data).forEach(dataEl => {
    dataEl.gift.forEach(giftName => {
      giftSet.add(giftName);
    });
  });
  return options.filter(option => giftSet.has(option.name));
};


const optionsOfCharacter = Object.keys(character).map(name => ({ name: name }))
const optionsOfEffectItemInSkill = filterOptionsOfEffectItemInData(optionsOfEffectItem, skill)
const optionsOfEffectItemInMemoriaAbility = filterOptionsOfEffectItemInData(optionsOfEffectItem, memoria)
const optionsOfEffectItemInItem = filterOptionsOfEffectItemInData(optionsOfEffectItem, item)
const optionsOfEffectItemInGift = filterOptionsOfEffectItemInData(optionsOfEffectItem, gift)
const optionsOfGiftInChar = filterOptionsOfGiftInData(optionsOfGift, character)
const optionsOfGiftInMaterial = filterOptionsOfGiftInData(optionsOfGift, material)
const optionsOfQuest = Object.keys(quest).map(name => ({ name: name }))


const filterOptions = (options, rows) => {
  // rowsの中の全てのeffectItemsを一つのセットに収集
  const effectItemsSet = new Set();
  rows.forEach(row => {
    row.effects && row.effects.forEach(effect => {
      Object.keys(effect.effectItems).forEach(itemKey => {
        effectItemsSet.add(itemKey);
      });
    });
  });

  // optionsの中からeffectItemsSetに存在するnameのものだけを抽出
  return options.filter(option => effectItemsSet.has(option.name));
};

const getOptionsForGroup = (group, filterItems, rows) => {
  let options;
  switch (group) {
    case 'character':
      return optionsOfCharacter;
    case 'gift':
      if (!filterItems.target) {//char
        return optionsOfGiftInChar
      } else {//alchemy
        options = optionsOfGiftInMaterial;
        return options.filter((el) => {
          return (filterItems.target.length === 0 || filterItems.target.includes(el.target));
        });
      }
    case 'gift2':
    case 'gift3':
      options = optionsOfGiftInMaterial;
      return options.filter((el) => {
        return (filterItems.target.length === 0 || filterItems.target.includes(el.target));
      });

    case 'skill':
      return Object.keys(skill).map(skillName => ({ name: skillName, text: skill[skillName].text }));
    case 'skillEffectItem':
      return optionsOfEffectItemInSkill
    case 'charAbility':
      return Object.keys(charAbility).map(abilityName => ({ name: abilityName, text: charAbility[abilityName].text }));
    case 'memoriaAbility':
      return Object.values(memoria).map(memoriaEl => ({ name: memoriaEl.memoriaAbility, text: memoriaEl.text }));
    case 'item':
      options = Object.entries(item).map(([name, el]) => ({ ...el, name: name }));
      return options.filter((el) => {
        return (filterItems.recipeGroup.length === 0 || filterItems.recipeGroup.includes(el.recipeGroup)) &&
          (filterItems.rarity.length === 0 || filterItems.rarity.includes(el.rarity)) &&
          (filterItems.kind1.length === 0 || filterItems.kind1.includes(el.kind1)) &&
          (filterItems.kind2.length === 0 || filterItems.kind2.includes(el.kind2));
      });
    case 'effectItemOfMemoriaAbility':
      return optionsOfEffectItemInMemoriaAbility;
    case 'effectItemOfItem':
      return optionsOfEffectItemInItem;
    case 'effectItemOfGift':
      return optionsOfEffectItemInGift;
    case 'material':
      options = Object.entries(material).map(([name, el]) => ({ ...el, name: name }));
      return options.filter((el) => {
        return (filterItems.target.length === 0 || filterItems.target.includes(el.target)) &&
          (filterItems.rarity.length === 0 || filterItems.rarity.includes(el.rarity)) &&
          (filterItems.giftColor.length === 0 || filterItems.giftColor.includes(el.giftColor)) &&
          (filterItems.gift.length === 0 || (isAnyMatch(filterItems.gift, el.gift)));
      });
    case 'materialOfAlchemy':
      return Object.entries(material).map(([name, el]) => ({ ...el, name: name }));
    case 'quest':
      return optionsOfQuest;
    default:
      return [];
  }
}

const getChipStyle = (group) => ({
  backgroundColor: group === 'gift3' ? darken(checkColor, 0.6) : group === 'gift2' ? darken(checkColor, 0.4) : darken(checkColor, 0.2),
  color: mainColor,
  height: 18,
  padding: 0,
  margin: 0,
});

export const DrawerForSelect = ({ rows, category, filterItems, setFilterItems, group ,trigger }) => {

  const [selectedItems, setSelectedItems] = useState(
    filterItems[group].map(item => ({ name: item }))
  );
  const [inputValue, setInputValue] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const options = getOptionsForGroup(group, filterItems, rows);

  //savedAlchemyGiftSetsをloadした時に更新
  useEffect(() => {
    setSelectedItems(filterItems[group].map(item => ({ name: item })));
  }, [trigger]);



  const updateSelectedItems = (newItemObj) => {
    setSelectedItems(newItemObj);
    const updatedFilterItems = {
      ...filterItems,
      [group]: newItemObj.map((el) => el.name)
    };
    setFilterItems(updatedFilterItems);
    localStorage.setItem("filterItems_" + category, JSON.stringify(updatedFilterItems));
  };

  const handleSelect = (option) => {
    const newSelectedItems = [...selectedItems];
    const index = newSelectedItems.findIndex(item => item.name === option.name);
    if (index !== -1) {
      newSelectedItems.splice(index, 1);
    } else {
      newSelectedItems.push(option);
    }
    setSelectedItems(newSelectedItems);
  };

  const handleCloseDrawer = () => {
    updateSelectedItems(selectedItems);  // Drawerが閉じるときにupdateSelectedItemsを実行します。
    setDrawerOpen(false);
  };

  const filteredOptions = options.filter(option =>
    option.name.includes(inputValue)
  );

  const handleDeselectItem = (itemName) => {
    const newSelectedItems = selectedItems.filter(item => item.name !== itemName);
    updateSelectedItems(newSelectedItems);
  };

  const deselectAllItems = () => {
    setSelectedItems([]);

    const updatedFilterItems = {
      ...filterItems,
      [group]: []
    };
    setFilterItems(updatedFilterItems);
    localStorage.setItem("filterItems_" + category, JSON.stringify(updatedFilterItems));
  };

  return (
    <Grid container sx={{ lineHeight: 1 }}>
      <Grid item>
        <Button
          variant="outlined"
          size="small"
          sx={{ height: 20 }}
          onClick={() => setDrawerOpen(true)}
        >
          {getLabelForGroup(group, category)}
        </Button>
      </Grid>
      {selectedItems.map(item => (
        <Grid item key={item.name}>
          <Chip
            label={item.name}
            variant="outlined"
            size="small"
            sx={getChipStyle(group)}
            onClick={() => handleDeselectItem(item.name)} // Chip全体のクリックでhandleDeselectItemを実行
            onDelete={() => handleDeselectItem(item.name)} // オプショナル: Chipの削除アイコンをクリックした場合もhandleDeselectItemを実行
          />
        </Grid>
      ))}
      <BasicDrawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        deselectAllItems={deselectAllItems}
        isMultiple={true}
      >
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          size='small'
          sx={{ margin: '4px' }}
        />
        <List sx={{
          padding: 0,
        }}>
          {filteredOptions.map(option => (
            <ListItem key={option.name} sx={{ padding: 0, px: '4px' }}>
              <ListItemButton
                onClick={() => handleSelect(option)}
                sx={{
                  display: 'block',
                  marginY:'4px',
                  padding: 0,
              }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-end',//下寄せ
                  fontSize: '14px',
                  color: mainColor,
                  fontWeight: 'bold',
                  borderBottom: `1px solid ${mainColor}`
                }}>
                  <Checkbox
                    checked={selectedItems.some(item => item.name === option.name)}
                    sx={{ padding: 0, marginRight: '8px' }}
                  />
                  {option.name}
                </div>
                <div style={{ fontSize: '12px', color: mainColor }}>
                  <TextBr text={option.text} />
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </BasicDrawer>
    </Grid>
  );
};













