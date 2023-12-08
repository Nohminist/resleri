import React, { useState, useEffect, useMemo } from 'react';
import { Box, Chip, Grid, List, ListItem, ListSubheader, Stack, TextField, Tooltip } from '@mui/material';
import { darken, lighten } from '@mui/system';

import { character } from '../constants/character';
import material from '../constants/material';



const getGiftBonus = (star) => {
  switch (star) {
    case 3.5:
      return 35;
    case 4:
      return 45;
    case 4.5:
      return 60;
    case 5:
      return 80;
    default:
      return 30;
  }
}


export const updateAlchemy = (alchemy) => {

  for (const [charName1, charEl1] of Object.entries(character)) {

    //初回読み込み時、charEl1.currentStarより早く発動してしまう
    const star1 = charEl1.currentStar ?? JSON.parse(localStorage.getItem(charName1))?.star ?? charEl1.star;

    for (const [charName2, charEl2] of Object.entries(character)) {

      if (charName1.split('【')[0] === charName2.split('【')[0]) continue;//同キャラならスキップ
      // if (charEl1.giftColor[1] !== charEl2.giftColor[0]) continue;//ギフトカラーが合わなければスキップ

      const star2 = charEl2.currentStar ?? JSON.parse(localStorage.getItem(charName2))?.star ?? charEl2.star;


      for (const [materialName, materialEl] of Object.entries(material)) {

        if (charEl2.giftColor[1] !== materialEl.giftColor) continue;//ギフトカラーが合わなければそもそも選択肢に出てこない

        let gifts = []
        if (materialEl.target === '戦闘アイテム') {
          gifts = [
            charEl1.gift[0],
            charEl1.gift[1],
            charEl2.gift[0],
            charEl2.gift[1],
            ...materialEl.gift
          ]
        } else {
          gifts = [charEl1.gift[2], charEl2.gift[2], ...materialEl.gift]
        }

        alchemy[charName1 + '-' + charName2 + '-' + materialName] = {
          target: materialEl.target,
          names: [charName1, charName2, materialName],
          gifts,
          giftColor: charEl1.giftColor[0],
          giftColors: [...charEl1.giftColor, ...charEl2.giftColor, materialEl.giftColor],
          giftBonus: getGiftBonus(star1) + getGiftBonus(star2)
        }
      }
    }
  }





} 