import React, { useState, useEffect, useMemo } from 'react';
import { Box, Button, Chip, Grid, List, ListItem, ListSubheader, Stack, TextField, ToggleButtonGroup, ToggleButton, Tooltip } from '@mui/material';
import { darken, lighten } from '@mui/system';



import { character } from '../constants/character';
import skill from '../constants/skill';
import item from '../constants/item';

import memoria from '../constants/memoria';
import material from '../constants/material';
import gift from '../constants/gift';
import quest from '../constants/quest';
import { updateAlchemy } from '../utils/alchemyUtils';
import { currentParameters } from '../utils/parameters';

import { mainBackgroundColor, selectedBackgroundColor, checkColor, mainColor, toggleButtonStyle } from '../utils/commonStyle';

import { ListContents } from './ListContents';
import { SaveButton } from './Save';

import { filterList, filterItemitialize, FilterButtonGroup, isFilterPassed, DrawerForSelect } from './Filter'
import { SortOrderButton, SortButtonGroup, sortItemList } from './Sort'
import { InputCommonParams, InputEnemyAttributeResist, InputGiftThreshold, SwitchCommonParams, StyledCheckbox } from './Input'


const valueMap = {
  'statusType': ['basic', 'equipped'],
  'skillParamsType': ['origin', 'calculated'],

}

const textMap = {
  'basic': '装備前ステータス',
  'equipped': '装備後ステータス',
  'origin': 'スキル値',
  'calculated': '計算値(実ウェイト)',
}

export const CommonToggleButtonGroup = ({ group, value, setValue, setTrigger }) => {

  const handleChange = (e, newValue) => {
    if (newValue) {

      // if (group === 'statusType') {
      //   setValue(newValue);
      //   localStorage.setItem(group, newValue);
      //   setTrigger(prev => 1 - prev);
      // } else if (group === 'skillParamsType') {
      //   setValue(newValue);
      //   localStorage.setItem(group, newValue);
      //   setTrigger(prev => 1 - prev);
      // }

      setValue(newValue);
      localStorage.setItem(group, newValue);
      setTrigger(prev => 1 - prev);

    }
  };

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="status condition"
    >
      {valueMap[group].map(valueItem => {
        return (
          <ToggleButton
            key={valueItem}
            value={valueItem}
            aria-label={valueItem}
            sx={{ ...toggleButtonStyle, height: 20 }}
          >
            <span style={{ fontSize: '12px' }}>
              {textMap[valueItem]}
            </span>
          </ToggleButton>
        )
      })}
    </ToggleButtonGroup>
  )
}