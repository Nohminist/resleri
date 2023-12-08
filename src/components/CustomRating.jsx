import React, { useState, useEffect } from 'react';
import { Badge, Button, Collapse, Grid, List, ListItem, ListSubheader, Rating, Stack, Tooltip } from '@mui/material';
import { darken, lighten } from '@mui/system';

import { character } from '../constants/character';
import { alchemy } from './TabContents';
import { updateAlchemy } from '../utils/alchemyUtils';





export const Star = ({name }) => {

  return (
    <Rating
      name="currentStar"
      value={character[name].currentStar}
      precision={0.5}
      size="small"
      onChange={(event, newValue) => {

        character[name].currentStar = newValue;

        const storedData = JSON.parse(localStorage.getItem(name));
        storedData.star = newValue;
        localStorage.setItem(name, JSON.stringify(storedData));

        updateAlchemy(alchemy)
        // setTrigger(prev => 1 - prev);//0と1の間でトグルする //キャラ画面では不要
      }}
    />


  )
}