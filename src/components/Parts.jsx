import React, { useState, useEffect } from 'react';
import { Badge, Button, Collapse, Grid, List, ListItem, ListSubheader, Rating, Stack, Tooltip } from '@mui/material';
import { darken, lighten } from '@mui/system';
import StarIcon from '@mui/icons-material/Star'
// import { styled } from '@mui/material/styles';
import { styled } from '@mui/system';

import { mainBackgroundColor, checkColor, mainColor, giftColorMap } from '../utils/commonStyle';
import { character } from '../constants/character';
import skill from '../constants/skill';
import charAbility from '../constants/charAbility';
import quest from '../constants/quest';
import gift from '../constants/gift';

import material from '../constants/material';

import { maxValues } from '../utils/parameters';

import { filterList, filterItemitialize, FilterButtonGroup, isFilterPassed } from './Filter'
import { Img, ImgMaterial } from './Img'
import { TextBr, TextOnBothEnds } from './Text'
import { ButtonToSwitchTabs, ButtonToSwitchAlchemyTab } from './ButtonToSwitchTabs'
import { Gift, ChipGifts } from './Gift'
import { GiftColor, GiftColor1 } from './GiftColor'
import { isAnyMatch } from '../utils/commonUtils';
import { LabelStatus, LabelSkillStatus } from './Label';
import { StyledChip } from './StyledChip';
import { Star } from './CustomRating';
import { CommonChart } from './Chart';



export const CharMainIcon = ({ name }) => {
  const dataEl = character[name]
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', height: 60 }}>
      <div style={{ height: 60 }}>
        <Img name={name} square={60} borderRadius={30} />
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <Img name={dataEl.role} square={20} />
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <Img name={dataEl.strongAttribute} square={20} />
      </div>
      <div style={{ position: 'absolute', bottom: -5, left: -1 }}>
        {[...Array(dataEl.star)].map((_, index) => (
          <StarIcon key={index}
            style={{
              color: 'yellow',
              fontSize: '18px',
              marginRight: -3,
              textShadow: '0 0 3px black', // 影のオフセットとぼかしの大きさ
              strokeWidth: 1, // 輪郭の太さ
            }}
          />
        ))}
      </div>
    </div>
  )
}

export const CharName = ({ name }) => {
  return (
    <div>
      <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
        {name.split('【')[0]}
      </span>
      <span style={{ fontSize: '12px' }} >
        {'【' + name.split('【')[1]}
      </span>
    </div>
  )
}

export const CharStatus = ({ name, sortItem, type }) => {

  const statsType = type === 'equipped' ? 'equippedStatus' : 'status'
  return (
    <div style={{ height: 20, display: 'flex' }}>
      {character[name][statsType] && Object.entries(character[name][statsType]).map(([key, value]) => {
        return (
          <CommonChart
            key={key}
            valueKey={key}
            value={value}
            category={'character'}
            isSortItem={sortItem === key}
            width={50}
            percentage={false}
          />
        )
      })}
    </div>
  )
}


const splitSortItem = (text) => {
  const result = text.match(/([a-zA-Z]+)(\d+)/);
  if (result) {
    const [, status, index] = result;
    return { status, index };
  }
  return { status: '', index: '' };
};
export const SkillStatusDitails = ({ skillName, skillStatus, sortItem, skillIndex }) => {

  let { status, index } = splitSortItem(sortItem)
  if (skillIndex === undefined) {
    status = sortItem
  }

  return (
    <div style={{ display: 'flex' }}>
      {skillStatus.map(key => {


        let isSortItem = false
        if (key === status && (skillIndex === undefined || skillIndex === Number(index))) {
          isSortItem = true
        }

        return (
          <CommonChart
            key={key}
            valueKey={key}
            value={skill[skillName][key]}
            category={skillIndex === undefined ? 'skill' : 'character'}
            isSortItem={isSortItem}
            width={50}
            percentage={key !== 'wait' && key !== 'currentWait'}
          />
        )
      })}
    </div>
  );
};

export const SkillParamsDitails = ({ charEl, skillStatus, sortItem, skillIndex, skillParamsType }) => {

  let { status, index } = splitSortItem(sortItem)
  if (skillIndex === undefined) {
    status = sortItem
  }

  return (
    <div style={{ display: 'flex' }}>
      {skillStatus.map(key => {


        let isSortItem = false
        if (key === status && (skillIndex === undefined || skillIndex === Number(index))) {
          isSortItem = true
        }

        return (
          <CommonChart
            key={key}
            valueKey={key}
            // value={skill[skillName][key]}
            value={charEl[key + skillIndex]}
            category={skillIndex === undefined ? 'skill' : 'character'}
            isSortItem={isSortItem}
            width={key === 'damage' ? 50 : 50}
            // percentage={skillParamsType === 'origin' && (key === 'damage' || key === 'break' || key === 'heal')}　//暫定
            percentage={key === 'damage' || key === 'break' || key === 'heal'}
            skillParamsType={skillParamsType}
          />
        )
      })}
    </div>
  );
};


const skillAreaStyle = (isFilterItemArea) => {
  return {
    width: 20,
    minWidth: 20,
    height: 20,
    textAlign: 'center',
    backgroundColor: isFilterItemArea ? darken(checkColor, 0.2) : 'transparent',  // 'default'を'transparent'に変更しました
  };
}
const skillStatus = ['damage', 'break', 'heal', 'wait']
export const SkillAttribute = ({ name, isFilterItem }) => {
  return (
    <div style={skillAreaStyle(isFilterItem)}>
      <Img name={name} square={20} />
    </div>
  )
}
export const SkillArea = ({ name, isFilterItem }) => {
  return (
    <div style={skillAreaStyle(isFilterItem)}>
      {name}
    </div>
  )
}
export const CharSkillDitails = ({ charEl, filterItems, sortItem, selectedCharacter, skillParamsType }) => {
  return (
    <>
      {charEl.skill.map((skillName, skillIndex) => {
        return (
          <div key={skillName}>
            <div style={{ width: 420, display: 'flex' }}>
              <StyledChip
                label={skillName}
                isChecked={filterItems?.skill.length > 0 && filterItems.skill.includes(skillName)}
                width={130}
              />
              <SkillAttribute
                name={skill[skillName].attribute}
                isFilterItem={filterItems.attribute.length > 0 && filterItems.attribute.includes(skill[skillName].attribute)}
              />
              <SkillArea
                name={skill[skillName].area}
                isFilterItem={filterItems.area.length > 0 && filterItems.area.includes(skill[skillName].area)}
              />
              <SkillParamsDitails
                charEl={charEl}
                skillStatus={skillStatus}
                sortItem={sortItem}
                skillIndex={skillIndex}
                skillParamsType={skillParamsType}
              />
            </div>
            <Collapse in={selectedCharacter === charEl.name}>
              <div style={{ fontSize: '12px', paddingLeft: '8px', lineHeight: 1.2, marginBottom: '4px' }}>
                <TextBr text={skill[skillName].text} />
              </div>
            </Collapse>
          </div>
        )
      })}
    </>
  )
} 