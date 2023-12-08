import React, { useState, useEffect } from 'react';
import { Badge, Button, Chip, Grid, IconButton, List, ListItem, ListSubheader, Stack, Tooltip } from '@mui/material';
import { darken, lighten } from '@mui/system';


import material from '../constants/material';
import { mainBackgroundColor, checkColor, mainColor, giftColorMap } from '../utils/commonStyle';
import { filterList, filterItemitialize, FilterButtonGroup, isFilterPassed } from './Filter'
import { GiftColor, GiftColor1 } from './GiftColor'
import { Img } from './Img'
import { TextBr, TextOnBothEnds } from './Text'





const handleClickCommon = (onChangeTab, name, category, filterItemKey) => {
  let storedData = localStorage.getItem('filterItems_' + category);
  let updatedFilterItems = storedData ? JSON.parse(storedData) : filterItemitialize(category);
  updatedFilterItems = {
    ...updatedFilterItems,
    [filterItemKey]: [name],
  };
  localStorage.setItem('filterItems_' + category, JSON.stringify(updatedFilterItems));

  onChangeTab(category);
};

const handleClickAlchemy = (onChangeTab, dataEl) => {
  let storedData = localStorage.getItem('filterItems_alchemy');
  let updatedFilterItems = storedData ? JSON.parse(storedData) : filterItemitialize('alchemy');
  updatedFilterItems = {
    ...updatedFilterItems,
    target: [dataEl.kind1],
    giftColor: dataEl.colors ? [...dataEl.colors] : [],
  };
  localStorage.setItem('filterItems_alchemy', JSON.stringify(updatedFilterItems));

  onChangeTab('alchemy'); //alchemyに移行
};




export const ButtonToSwitchTabs = ({ onChangeTab, name, name2, category, filterItemKey, fullWidth, pr }) => {

  // console.log(name, category, filterItemKey)


  if (category === 'character') {
    return (
      <Tooltip title={name} placement="top-start" arrow>
        <IconButton
          sx={{ padding: 0 }}
          onClick={() => handleClickCommon(onChangeTab, name, category, filterItemKey)}
        >
          <Img name={name} square={40} borderRadius={20} />
        </IconButton>
      </Tooltip>
    )
  }

  if (category === 'item') {
    return (
      <Button
        name={name}
        variant="outlined"
        size="small"
        sx={{
          width: '100%',
          height: 20,
          padding: '4px',
          color: mainColor,
        }}
        onClick={() => handleClickCommon(onChangeTab, name, category, filterItemKey)}
      >
        <span style={{ display: 'inline-block', width: '100%', textAlign: 'left' }}>
          {name}
        </span>
      </Button>
    )
  }


  if (category === 'material') {
    return (
      // <Button
      //   name={name}
      //   variant="outlined"
      //   size="small"
      //   sx={{
      //     width: fullWidth && '100%',
      //     // height: 20,
      //     px: '4px',
      //     pr: pr ?? '4px',
      //     color: mainColor,
      //     backgroundColor: material[name].giftColor !== '' ? darken(giftColorMap[material[name].giftColor], 0.5) : 'default',
      //     ':hover': {
      //       backgroundColor: material[name].giftColor !== '' ? darken(giftColorMap[material[name].giftColor], 0.4) : 'default',
      //     },
      //     lineHeight:1,
      //   }}
      //   onClick={() => handleClickCommon(onChangeTab, name, category, filterItemKey)}
      // >
      //   {name}
      // </Button>
      <Tooltip title={name} placement="top-start" arrow>

      <IconButton
        name={name}
        size="small"
        sx={{
          width: 40,
          height: 40,
          padding: 0,
        }}
        onClick={() => handleClickCommon(onChangeTab, name, category, filterItemKey)}
      >

        <div style={{
          width: 40,
          height: 40,
          backgroundColor: material[name].giftColor !== '' ? darken(giftColorMap[material[name].giftColor], 0.25) : 'default',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '20px',
        }}>
          <div
            style={{
              position: 'relative',
              width: 32,   // 幅を指定
              height: 32,
            }}
          >
            <Img
              name={name}
              square={32}
              borderRadius={16}
            />
            <Img
              name={material[name].target}
              square={12}
              borderRadius={6}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
              }}
            />
          </div>
        </div>

      </IconButton>
      </Tooltip>


    )
  }

  if (category === 'quest') {
    return (
      <Button
        name={name}
        variant="outlined"
        size="small"
        sx={{
          width: fullWidth && '100%',
          height: 20,
          px: '4px',
          pr: pr ?? '4px',
          color: mainColor,
        }}
        onClick={() => handleClickCommon(onChangeTab, name, category, filterItemKey)}
      >
        <span style={{
          whiteSpace: 'nowrap',
          width: '100%', // span に親要素の幅を強制する
        }}>
          <TextOnBothEnds text={name + name2} />
        </span>
      </Button>
    )
  }





}

export const ButtonToSwitchAlchemyTab = ({ onChangeTab, dataEl }) => {

  return (
    <Button
      variant="outlined"
      sx={{ width: '100%', height: 20, padding: 0 }}
      onClick={() => handleClickAlchemy(onChangeTab, dataEl)}
    >
      <Img name={dataEl.kind1} square={20} borderRadius={10} />
      {(dataEl.colors && dataEl.colors.length > 0)
        ? dataEl.colors.map(color => (
          <GiftColor1 key={color} color={color} />
        ))
        : <div>　　　</div>
      }
    </Button>
  )
}