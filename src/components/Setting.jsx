import React, { useState, useEffect, useMemo } from 'react';
import { Box, Button, Chip, Grid, IconButton, List, ListItem, ListItemButton, ListSubheader, Snackbar, SnackbarContent, Stack, TextField, Tooltip } from '@mui/material';
import { darken, lighten } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import FolderOpenIcon from '@mui/icons-material/FolderOpen'; // または GetAppIcon
import GetAppIcon from '@mui/icons-material/GetApp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';

import { character } from '../constants/character';
import skill from '../constants/skill';
import item from '../constants/item';
import material from '../constants/material';
import quest from '../constants/quest';
import memoria from '../constants/memoria';
import { mainBackgroundColor, mainColor, selectedBackgroundColor } from '../utils/commonStyle';
import { getEquippedStatus, getStatusMax, getSkillStatusMax, getCalculatedSkillParams } from '../utils/calc';
import { maxValues } from '../utils/parameters';

import { savedAlchemyGiftSets } from './TabContents';
import { BasicDrawer } from './CustomDrawer';
import { Gift, ChipGifts } from './Gift'
import { SmallButton } from './CustomButton'
import { Img } from './Img'
import { TextBr } from './Text'

const currentSkillParamsKeys = ['currentDamage', 'currentBreak', 'currentHeal', 'currentWait']

const categoryMap = {
  'memoria': memoria,
  'weapon': item,
  'armor': item,
  'accessory': item,
}


const getOptions = (category) => {
  switch (category) {
    case 'memoria':
      return Object.keys(memoria).map(name => ({ name: name }))
    case 'weapon':
      return Object.keys(item).filter(key => item[key].kind2 === '武器').map(name => ({ name: name }));
    case 'armor':
      return Object.keys(item).filter(key => item[key].kind2 === '防具').map(name => ({ name: name }));
    case 'accessory':
      return Object.keys(item).filter(key => item[key].kind2 === '装飾品').map(name => ({ name: name }));
    default:
      return [];
  }
}




export const EquipmentSetting = ({ name, category, setTrigger }) => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const options = getOptions(category);


  const filteredOptions = options.filter(option =>
    option.name.includes(inputValue)
  );

  const handleSelect = (e, option) => {

    //元データ更新
    character[name][category] = option.name

    //localStorage更新
    const storedData = JSON.parse(localStorage.getItem(name));
    storedData[category] = option.name;
    localStorage.setItem(name, JSON.stringify(storedData));

    //ステータス更新(該当キャラのみ)
    character[name].equippedStatus = getEquippedStatus(name)
    character[name].currentStatus = { ...character[name].equippedStatus }

    //計算値更新
    const attributeType = character[name].status.物攻 >= character[name].status.魔攻 ? '物' : '魔'
    const currentPow = character[name].currentStatus[attributeType + '攻']
    for (const [index, skillName] of character[name].skill.entries()) {
      currentSkillParamsKeys.forEach(key => {
        const currentValue = getCalculatedSkillParams({ key, currentPow, skillName, charEl: character[name] })
        character[name].skillParams[index][key] = currentValue
        skill[skillName].params[key] = currentValue
      })
    }

    //最大値更新
    maxValues.character = { ...getStatusMax(character, 'character'), ...getSkillStatusMax() }
    maxValues.skill = { ...getSkillStatusMax() }

    //List画面更新
    setTrigger(prev => 1 - prev);

    //Drawer閉じ
    setDrawerOpen(false)

    //イベント伝搬阻止
    e.stopPropagation()
  };


  return (
    <>
      <Button
        sx={{
          padding: 0,
          //margin:0, //関係ない
          width: 25,
          minWidth: 25,
          height: 40,
        }}
        onClick={(e) => {
          // console.log(name, category)
          setDrawerOpen(true)
          e.stopPropagation()

        }}
      >
        {character[name][category]
          ? <Img name={character[name][category]} width={25} />
          : <div style={{ fontSize: '18px', lineHeight: 0.8 }}>
            <Img name={category} width={20} rhombus={category !== 'memoria' && true} />
            +</div>
        }
      </Button>
      <BasicDrawer
        open={drawerOpen}
        onClose={(e) => {
          setDrawerOpen(false)
          e.stopPropagation()//イベント伝搬阻止
        }}
      >
        {character[name][category] &&
          <div style={{ display: 'flex' }}>
            <div styke={{ width: 60 }}>
              <Button
                variant='contained'
                onClick={(e) => {
                  handleSelect(e, { name: '' });
                }}
                sx={{
                  color: mainColor,
                  bgcolor: darken('#ffff7f', 0.5),
                  '&:hover': {
                    bgcolor: darken('#ffff7f', 0.4),
                  },
                  marginLeft: '4px',
                  marginTop: '4px',
                }}
              >
                外す
              </Button>
            </div>


            <div style={{ marginTop: '4px', marginLeft: '4px' }}>
              <div>
                {character[name][category]}
              </div>
              <div style={{ fontSize: '12px' }}>
                {Object.entries(categoryMap[category][character[name][category]].status).map(([key, value]) => {
                  return (
                    <React.Fragment key={key}>{key + value + ', '}</React.Fragment>
                  )
                })}
              </div>
              {categoryMap[category][character[name][category]].text &&
                <div style={{ fontSize: '12px' }}>
                  <TextBr text={categoryMap[category][character[name][category]].text} />
                </div>
              }
            </div>


          </div>
        }
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onClick={(e) => e.stopPropagation()} // ここでクリックイベントの伝搬を阻止
          size='small'
          sx={{ margin: '4px' }}
        />

        <List sx={{
          padding: 0,
        }}>
          {filteredOptions.map(option => (
            <ListItem key={option.name} sx={{ padding: 0, px: '4px' }}>
              <ListItemButton
                onClick={(e) => handleSelect(e, option)}
                sx={{
                  display: 'block',
                  marginY: '4px',
                  padding: 0,
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-end',//下寄せ
                  fontSize: '14px',
                  color: mainColor,
                  fontWeight: 'bold',
                  borderBottom: `1px solid ${mainColor}`
                }}>
                  {option.name}
                </div>
                <div style={{ fontSize: '12px', color: mainColor }}>
                  <TextBr text={option.text} />
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </BasicDrawer>

    </>




  )




}