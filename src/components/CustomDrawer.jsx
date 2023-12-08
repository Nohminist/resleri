import React, { useState, useEffect } from 'react';
import { Autocomplete, Button, Checkbox, Chip, Drawer, ToggleButton, ToggleButtonGroup, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, TextField, Tooltip } from '@mui/material';
import { darken, lighten } from '@mui/system';
import StarIcon from '@mui/icons-material/Star'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from "@mui/icons-material/Close";

import ClearAllIcon from '@mui/icons-material/ClearAll';


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




export const BasicDrawer = ({ open, onClose, deselectAllItems, isMultiple, children }) => {

  const GridButtons = () => {

    //複数選択の場合
    if (isMultiple) {

      return (
        <Grid container
          spacing={'4px'}
          sx={{ width: '100%', margin: 0 }}
        >
          <Grid item xs={6}>
            <Button
              variant='contained'
              onClick={onClose}//閉じるときに更新
              sx={{
                width: '100%',
                color: mainColor,
                bgcolor: darken('#7fffff', 0.5),
                '&:hover': {
                  bgcolor: darken('#7fffff', 0.4),
                }
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 16, marginRight: '4px' }}/>
              決定（閉じる）
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ pr: '4px' }}>
            <Button
              variant='contained'
              onClick={deselectAllItems}
              sx={{
                width: '100%',
                color: mainColor,
                bgcolor: darken('#ff7f7f', 0.5),
                '&:hover': {
                  bgcolor: darken('#ff7f7f', 0.4),
                }
        
              }}
            >
              <ClearAllIcon sx={{ fontSize: 16, marginRight: '4px' }}/>
              全解除
            </Button>
          </Grid>
        </Grid>
      )
    }

    //単数選択の場合
    return (
      <Grid container
        spacing={'4px'}
        sx={{ width: '100%', margin: 0 }}
      >
        <Grid item xs={12} sx={{marginRight: '4px'}}>
          <Button
            variant='contained'
            onClick={onClose}//閉じるときに更新
            sx={{
              width: '100%',
              color: mainColor,
              bgcolor: darken('#7fffff', 0.5),
              '&:hover': {
                bgcolor: darken('#7fffff', 0.4),
              }
          }}
          >
            <CloseIcon sx={{ fontSize: 16, marginRight: '4px' }}/>
            閉じる
          </Button>
        </Grid>
      </Grid>

    )
  }



  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: 400,
        maxWidth: '100%', // 最大幅を100%に設定して、400pxを超えないようにする
        '& .MuiDrawer-paper': {
          width: 400, // Drawerの実際のペーパー要素の幅を400pxに固定
          maxWidth: '100%', // こちらも最大幅を100%に設定
          [`@media (max-width:600px)`]: { // ビューポート幅が600px以下の場合のスタイル
            width: '100%', // 幅を100%に変更
          }
        },
      }}
      onClick={(e) => e.stopPropagation()}

    >
      <GridButtons />
      {children}
      {isMultiple && <GridButtons />}

    </Drawer>
  );
};

