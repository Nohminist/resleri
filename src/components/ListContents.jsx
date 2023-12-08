import React, { useState, useEffect } from 'react';
import { Chip, Collapse, Grid, List, ListSubheader, ListItem, ListItemButton, Stack, Tooltip } from '@mui/material';

import { mainBackgroundColor, selectedBackgroundColor, checkColor, mainColor, toggleButtonStyle } from '../utils/commonStyle';
import { ListSubheaderSkill, ListItemCharacter, ListItemSkill, ListSubheaderMemoria, ListItemMemoria, ListItemItem, ListItemMaterial, ListItemGift, ListItemAlchemy, ListItemQuest } from './ListItemContents'


const listItemStyle = (index) => ({
  color: mainColor,
  borderTop: '1px solid gray',
  width: '100%',
  height: 'auto',
  padding: 0,
});

const listSubheaderStyle = {
  position: 'sticky',
  top: 0, // ヘッダーがある場合はその高さを設定
  backgroundColor: mainBackgroundColor,
  height: 'auto',
  color: mainColor,
  zIndex: 10, // 必要に応じてこの値を他の要素より高く調整
  padding: 0,
  margin: 0,
  lineHeight: 1,
}


const listSubheaderComponents = {
  character: null,//<ListSubheaderCharacter />,
  skill: <ListSubheaderSkill />,
  memoria: <ListSubheaderMemoria />,
  item: null,
  material: null,
  gift: null,
  alchemy: null,
  quest: null,
};
const listItemComponents = {
  character: ListItemCharacter,
  skill: ListItemSkill,
  memoria: ListItemMemoria,
  item: ListItemItem,
  material: ListItemMaterial,
  gift: ListItemGift,
  alchemy: ListItemAlchemy,
  quest: ListItemQuest,
};


export const ListContents = ({ rows, category, filterItems, setFilterItems, sortItem, onChangeTab, setTrigger ,statusType,skillParamsType}) => {
  // console.log(category,rows,filterItems)
  const [selectedCharacter, setSelectedCharacter] = useState(null);


  const handleListItemButtonClick = (dataEl) => {
    switch (category) {
      case 'character':
        setSelectedCharacter(dataEl.name === selectedCharacter ? null : dataEl.name);
        break;
      default: break;
    }
  };

  return (
    <List
      sx={{ width: '100%' }}
      subheader={
        <ListSubheader sx={listSubheaderStyle} >
          {listSubheaderComponents[category]}
        </ListSubheader>
      }
    >
      {rows.map((dataEl, index) => {
        const ContentsToRender = listItemComponents[category];


        return (
          <ListItem key={dataEl.name} sx={listItemStyle(index)} >
            <ListItemButton
              sx={{
                padding: 0,
                // cursor: (category === 'character') ? 'pointer' : 'default', // カーソルのスタイルを設定(onClickイベントが無ければカーソルdefault)
                cursor: 'default', // カーソルのスタイルを設定(onClickイベントが無ければカーソルdefault)
              }}
              onClick={() => handleListItemButtonClick(dataEl)}
            >
              <ContentsToRender
                category={category}
                dataEl={dataEl}
                filterItems={filterItems}
                sortItem={sortItem}
                onChangeTab={onChangeTab}
                selectedCharacter={selectedCharacter}
                setTrigger={setTrigger}
                statusType={statusType}
                skillParamsType={skillParamsType}
                // onRatingChange={(newRating) => handleRatingChange(dataEl.name, newRating)}
  
              />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}