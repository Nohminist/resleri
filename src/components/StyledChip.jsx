import React, { useState, useEffect } from 'react';
import { Badge, Button, Collapse, Chip, Grid, List, ListItem, ListSubheader, Stack, Tooltip } from '@mui/material';
import { darken, lighten } from '@mui/system';

import gift from '../constants/gift';
import { Img } from './Img'
import { mainBackgroundColor, checkColor, mainColor, giftColorMap } from '../utils/commonStyle';


export const StyledChip = ({ iconName, label, isChecked, isChecked1, isChecked2, isChecked3, width, colorMatched = true, isValid = true }) => {
  // console.log(colorMatched)
  const getColor = () => {
    if (!colorMatched) {
      return darken(mainColor, 0.4);
    }
    return null;
  }

  const getBackgroundColor = () => {

    if (!isValid) {
      return darken(mainBackgroundColor, 0.2);
    }
    if (!colorMatched) {
      return null;
    }
    if (isChecked || isChecked1) {
      return darken(checkColor, 0.2);
    }
    if (isChecked2) {
      return darken(checkColor, 0.4);
    } if (isChecked3) {
      return darken(checkColor, 0.6);
    }

    return null;

  };



  return (
    <Chip
      icon={iconName
        ? <Img name={iconName} square={16} borderRadius={8} />
        : <></>
      }
      label={label}
      size='small'
      sx={{
        color: getColor(),
        width: width ?? null,
        height: 18,
        fontSize: '12px',
        marginTop: '1px',
        marginBottom: '1px',
        pl: iconName ? '1px' : 0,
        backgroundColor: getBackgroundColor(),
        justifyContent: 'flex-start',//左寄せ
      }}
    />
  )
}