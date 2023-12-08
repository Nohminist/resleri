import React, { useState, useEffect } from 'react';
import { Chip, Collapse, Grid, List, ListItem, ListSubheader, Stack, Tooltip } from '@mui/material';
import { darken, lighten } from '@mui/system';
import StarIcon from '@mui/icons-material/Star'

import { mainBackgroundColor, checkColor, mainColor } from '../utils/commonStyle';
import gift from '../constants/gift';
import { Img } from './Img'
import { TextBr } from './Text'
import { GiftColor, GiftColor1 } from './GiftColor'
import { LabelStatus, LabelSkillStatus } from './Label';
import { StyledChip } from './StyledChip';

const ChipGift = ({ giftName, filterItems, isSelected, colorMatched }) => {


  return (
    <div style={{ lineHeight: 1 }} >
      <StyledChip
        iconName={gift[giftName].giftType}
        label={giftName}
        isChecked={filterItems?.length > 0 && filterItems.includes(giftName)}//キャラはこの形で来る
        isChecked1={filterItems?.gift && filterItems?.gift.length > 0 && filterItems.gift.includes(giftName)}
        isChecked2={filterItems?.gift2 && filterItems?.gift2.length > 0 && filterItems.gift2.includes(giftName)}
        isChecked3={filterItems?.gift3 && filterItems?.gift3.length > 0 && filterItems.gift3.includes(giftName)}
        width={210}
        colorMatched={colorMatched}
      />
      <Collapse in={isSelected}>
        <div style={{ fontSize: '12px', paddingLeft: '8px', lineHeight: 1.2 }}>
          <TextBr text={gift[giftName].text} name={giftName} />
        </div>
      </Collapse>
    </div>

  )


}


export const ChipGifts = ({ gifts, filterItems, isSelected, colorMatched }) => {
  // console.log(gifts)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      {gifts.map(giftName => {
        if (!gift[giftName]) console.log(giftName)
        return (
          <ChipGift
            key={giftName}
            giftName={giftName}
            filterItems={filterItems}
            isSelected={isSelected}
            colorMatched={colorMatched}
          />
        )
      })}
    </div>
  )
}
