import * as React from 'react';
import { IconButton, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import { darken, lighten } from '@mui/system';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';

import { mainBackgroundColor, selectedBackgroundColor, checkColor, mainColor, toggleButtonStyle } from '../utils/commonStyle';

import { Img } from "./Img";
import { TextBr } from './Text'

export const sortItemList = {
  // character: ['date', 'HP', '素早さ', '物攻', '物防', '魔攻', '魔防', 'damage0', 'break0', 'heal0', 'wait0', 'damage1', 'break1', 'heal1', 'wait1', 'damage2', 'break2', 'heal2', 'wait2'],
  // character: ['date', 'HP', '素早さ', '物攻', '物防', '魔攻', '魔防', 'damage0', 'damage1', 'damage2', 'break0', 'break1', 'break2', 'heal0', 'heal1', 'heal2', 'wait0', 'wait1', 'wait2', 'currentWait0', 'currentWait1', 'currentWait2'],
  character: ['date', 'HP', '素早さ', '物攻', '物防', '魔攻', '魔防', 'damage0', 'damage1', 'damage2', 'break0', 'break1', 'break2', 'heal0', 'heal1', 'heal2', 'wait0', 'wait1', 'wait2'],
  skill: ['damage', 'break', 'heal', 'wait'],
  memoria: ['date', 'HP', '素早さ', '物攻', '物防', '魔攻', '魔防'],
  item: ['date', 'HP', '素早さ', '物攻', '物防', '魔攻', '魔防'],
  material: ['date'],
  alchemy: ['giftBonus'],
}
const icon = [
  'damage', 'break', 'heal', 'wait',
]

const textMap = {
  date: '実装日',
  // damage: 'ダメージ',
  // break: 'ブレイク',
  // heal: '回復力',
  // wait: 'ウェイト',
  // damage0: 'スキル1\nダメージ',
  // damage1: 'スキル2\nダメージ',
  // damage2: 'スキル3\nダメージ',
  // break0: 'スキル1\nブレイク',
  // break1: 'スキル2\nブレイク',
  // break2: 'スキル3\nブレイク',
  // heal0: 'スキル1\n回復力',
  // heal1: 'スキル2\n回復力',
  // heal2: 'スキル3\n回復力',
  // wait0: 'スキル1\nウェイト',
  // wait1: 'スキル2\nウェイト',
  // wait2: 'スキル3\nウェイト',
  // currentDamage: 'ダメージ',
  // currentBreak: 'ブレイク',
  // currentHeal: '回復力',
  giftBonus: 'ギフトボーナス'

}

const getSkillContent = (name) => {
  const skillMatch = name.match(/(damage|break|heal|wait|currentWait)(\d)/);
  if (skillMatch) {
    const [, skillType, skillNumber] = skillMatch;
    let iconComponent;
    switch (skillNumber) {
      case '0':
        iconComponent = <LooksOneIcon sx={{ fontSize: '20px', my: '-2px' }} />;
        break;
      case '1':
        iconComponent = <LooksTwoIcon sx={{ fontSize: '20px', my: '-2px' }} />;
        break;
      case '2':
        iconComponent = <Looks3Icon sx={{ fontSize: '20px', my: '-2px' }} />;
        break;
      default:
        iconComponent = null;
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {iconComponent}
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          {skillType.includes('current') && <>実</> }
          <Img name={skillType === 'currentWait' ? 'wait' : skillType} height={18} borderRadius={2} />
        </div>
      </div>
    );
  }
  return null;
};



const sortOrderButtonStyle = {
  width: '36px',
  height: '36px',
  padding: '0px',
  color: mainBackgroundColor,
  backgroundColor: darken(selectedBackgroundColor, 0.1),
  '&:hover': {
    backgroundColor: darken(selectedBackgroundColor, 0.2)
  },
}
export const SortOrderButton = ({ category, sortOrder, setSortOrder }) => {

  const handleClick = () => {
    const newSortOrder = sortOrder === 'asc' ? "desc" : "asc"
    setSortOrder(newSortOrder);
    localStorage.setItem('sortOrder_' + category, newSortOrder);
  };

  return (
    <Tooltip title='▲昇順▼降順' placement="top" arrow>
      <IconButton
        onClick={handleClick}
        sx={sortOrderButtonStyle}
      >
        {sortOrder === 'asc' ? '▲' : '▼'}
      </IconButton>
    </Tooltip >
  );
}



const containerStyle = {//画面右端で改行する
  display: 'flex',
  flexWrap: 'wrap',
};
const toggleButtonGroupStyle = (category) => ({
  pb: 0.5,
  height: category === 'character' ? 'auto' : 36,
  display: 'flex',
  flexWrap: 'wrap'
})
export const SortButtonGroup = (props) => {
  const { category, sortItem, setSortItem, sortItemList } = props.props

  const handleSortChange = (event, newSortItem) => {
    if (newSortItem) {
      setSortItem(newSortItem);
      localStorage.setItem('sortItem_' + category, newSortItem);
    }
  };

  return (
    <div style={containerStyle}>
      <ToggleButtonGroup
        value={sortItem}
        exclusive//単一選択
        onChange={handleSortChange}
        aria-label={'SortButtonGroup'}
        sx={toggleButtonGroupStyle(category)}
      >
        {sortItemList.map((name, i) => {

          let content = getSkillContent(name);
          if (!content) {
            if (icon.includes(name)) {
              content = <Img name={name} height={26} borderRadius={4} />;
            } else {
              const text = textMap[name] ?? name;
              content = <span dangerouslySetInnerHTML={{ __html: text.replace('\n', '<br/>') }} />;
            }
          }

          return (
            <ToggleButton
              key={i}
              value={name}
              aria-label={name}
              size="small"
              sx={{ ...toggleButtonStyle, padding: 0.5 }}
            >
              {content}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </div>
  )
}



