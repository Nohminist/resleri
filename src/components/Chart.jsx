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
import { LabelStatus, LabelSkillStatus, LabelSkillStatus2, LabelTitle } from './Label';
import { StyledChip } from './StyledChip';
import { Star } from './CustomRating';

import { alchemy } from './TabContents';
import { updateAlchemy } from '../utils/alchemyUtils';







export const CommonChart = ({ valueKey, value, category, isSortItem, width, percentage, skillParamsType }) => {

  const statusStyle = {
    boxSizing: 'border-box', /* borderとpaddingを含めたサイズ指定を有効にする */
    width: width,
    height: '100%',
    position: 'relative',
    textAlign: 'right',
    border: '1px solid darkgray',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  }

  let maxValue = category === 'gift' ? 160 : maxValues[category][valueKey]
  if( skillParamsType == 'calculated'){
    // if( valueKey === 'damage') maxValue = maxValues[category].currentDamage　//暫定
    // if( valueKey === 'break') maxValue = maxValues[category].currentBreak
    // if( valueKey === 'heal') maxValue = maxValues[category].currentHeal
    if( valueKey === 'wait') maxValue = maxValues[category].currentWait
  }
  const statusChartStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: value ? (value / maxValue * (width - 2)) : 0,
    backgroundColor: isSortItem ? darken(checkColor, 0.2) : lighten(mainBackgroundColor, 0.2)
  }

  const statusValueStyle = {
    color: mainColor,
    position: 'relative',
    right: '4px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    // fontSize:'14px',
  }

  return (
    <div style={statusStyle}>
      <div style={statusChartStyle}></div>
      <div style={statusValueStyle}>{value ? (value.toLocaleString() + (percentage ? '%' : '')) : '-'}</div>
    </div>

  )
}
