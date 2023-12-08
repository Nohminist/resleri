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
import { CharMainIcon, CharName, CharStatus, CharSkillDitails, SkillAttribute, SkillArea, SkillStatusDitails } from './Parts';
import { CommonChart } from './Chart';
import { EquipmentSetting } from './Setting';


import { alchemy } from './TabContents';
import { updateAlchemy } from '../utils/alchemyUtils';


function getCheckedTexts(dataEl, effectItems) {
  let checkedTexts = [];
  if (effectItems.length > 0) {
    if (dataEl.effects) {
      for (const effectEl of dataEl.effects) {
        if (isAnyMatch(effectItems, Object.keys(effectEl.effectItems))) {
          checkedTexts.push(effectEl.text);
        }
      }
    }
  }
  return checkedTexts;
}

const skillStatusMap = {
  damage: 'ダメージ',
  break: 'ブレイク',
  heal: '回復力',
  wait: 'ウェイト',
}

const statusStyle = () => {
  return ({
    boxSizing: 'border-box', /* borderとpaddingを含めたサイズ指定を有効にする */
    width: 50,
    height: '100%',
    position: 'relative',
    textAlign: 'right',
    border: '1px solid darkgray',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  }

  )
}



const statusChartStyle = (value, category, key, isSortItem) => {



  const maxValue = category === 'gift' ? 160 : maxValues[category][key]

  return (
    {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: value ? (value / maxValue * 48) : 0,
      backgroundColor: isSortItem ? darken(checkColor, 0.2) : lighten(mainBackgroundColor, 0.2)
    }
  )
}

const currentSkillStatusKeys = ['damage', 'break', 'heal', 'wait']//暫定





export const ListSubheaderSkill = () => {
  return (
    <Grid container >
      <Grid item sx={{ width: 200 }} >
      </Grid>
      <Grid item>
        <LabelSkillStatus />
      </Grid>
    </Grid>
  )
}

export const ListSubheaderMemoria = () => {
  return (
    <Grid container >
      <Grid item sx={{ width: 220 }} >
      </Grid>
      <Grid item sx={{ width: 360 }} >
        <LabelStatus width={60} />
      </Grid>
    </Grid>
  )
}

const styleLabelTitleInline = {
  boxSizing: 'border-box',
  display: 'flex',        // divをフレックスコンテナとして設定
  justifyContent: 'center', // 横方向の中央寄せ
  alignItems: 'center',   // 縦方向の中央寄せ
  width: 60,
  height: 20, // Imgが垂直方向にも中央寄せされるよう、高さを設定
  backgroundColor: darken(mainBackgroundColor, 0.2),
  fontSize: '12px',
}


export const ListItemCharacter = ({ dataEl, filterItems, sortItem, selectedCharacter, setTrigger, statusType,skillParamsType }) => {


  return (
    <Grid container sx={{ fontSize: '14px' }}>
      <Grid item sx={{ width: 420, marginRight: '4px' }}>
        <div style={{ display: 'flex' }}>
          <CharMainIcon name={dataEl.name} />
          <Stack>
            <div style={{
              // width: 300,
              display: 'flex', // Flexbox を使って子要素を横並びにする
              alignItems: 'center',
              height: 40,
              paddingLeft: 4,
              lineHeight: 1,
            }}>
              <div style={{ width: 250 }}>
                <Star name={dataEl.name} />
                <CharName name={dataEl.name} />
              </div>
              <div style={{}}>
                <EquipmentSetting name={dataEl.name} category={'memoria'} setTrigger={setTrigger}/>
                <EquipmentSetting name={dataEl.name} category={'weapon'} setTrigger={setTrigger} />
                <EquipmentSetting name={dataEl.name} category={'armor'} setTrigger={setTrigger} />
                <EquipmentSetting name={dataEl.name} category={'accessory'}  setTrigger={setTrigger}/>
              </div>
            </div>

            <Collapse in={selectedCharacter === dataEl.name}>
              <LabelTitle title={'ステータス（ガチャ画面の値が基準）'} />
              <LabelStatus width={50} />
            </Collapse>
            {statusType === 'basic'
              ? <CharStatus name={dataEl.name} sortItem={sortItem} />
              : <CharStatus name={dataEl.name} sortItem={sortItem} type={'equipped'} />
            }


            <Collapse in={selectedCharacter === dataEl.name}>
              <div style={{
                height: 20,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',   // 縦方向の中央寄せ
                marginTop: '4px',
              }}>
                <div style={{ ...styleLabelTitleInline, width: 50 }} >
                  実装
                </div>
                <div
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',        // divをフレックスコンテナとして設定
                    // alignItems: 'center',   // 縦方向の中央寄せ
                    height: 20, // Imgが垂直方向にも中央寄せされるよう、高さを設定
                    fontSize: '14px',
                  }}>
                  {dataEl.date}
                </div>
                <div style={{ ...styleLabelTitleInline, width: 50, marginLeft: '10px' }}>
                  入手
                </div>
                <div
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',        // divをフレックスコンテナとして設定
                    alignItems: 'center',   // 縦方向の中央寄せ
                    height: 20, // Imgが垂直方向にも中央寄せされるよう、高さを設定
                    fontSize: '14px',
                  }}
                >
                  {dataEl.get}
                </div>
              </div>
              {/* {dataEl.get === '配布' &&
                  <div>
                    ガチャ画面で確認できない

                  </div>
                } */}
            </Collapse>
          </Stack>
        </div>
      </Grid>

      <Grid item sx={{ width: 420, marginRight: '4px' }}>
        <div style={{ alignItems: 'center' }} >
          <Collapse in={selectedCharacter === dataEl.name}>
            <LabelTitle title={'スキル'} />
            <LabelSkillStatus2 />
          </Collapse>
          <CharSkillDitails
            charEl={dataEl}
            filterItems={filterItems}
            sortItem={sortItem}
            selectedCharacter={selectedCharacter}
            skillParamsType={skillParamsType}
          />
        </div>
      </Grid>

      <Grid item sx={{ width: 200, marginRight: '4px', lineHeight: 1 }}>
        <Collapse in={selectedCharacter === dataEl.name}>
          <LabelTitle title={'アビリティ'} />
        </Collapse>

        {dataEl.ability.map(abilityName => {
          return (
            <div key={abilityName}>
              <StyledChip
                label={abilityName}
                isChecked={filterItems?.charAbility.length > 0 && filterItems.charAbility.includes(abilityName)}
                width={200}
              />
              <Collapse in={selectedCharacter === dataEl.name}>
                <div style={{ fontSize: '12px', paddingLeft: '8px', lineHeight: 1.2 }}>
                  <TextBr text={charAbility[abilityName].text} />
                </div>
              </Collapse>
            </div>
          )
        })}
      </Grid>

      <Grid item sx={{ width: 210 }}>
        <Collapse in={selectedCharacter === dataEl.name}>
          <LabelTitle title={'特性'} />
        </Collapse>
        <ChipGifts
          gifts={dataEl.gift}
          filterItems={filterItems.gift}
          isSelected={selectedCharacter === dataEl.name}
        />
      </Grid>
    </Grid>
  )
}


export const ListItemSkill = ({ dataEl, filterItems, sortItem, onChangeTab }) => {
  let checkedTexts = []
  if (filterItems.skillEffectItem.length > 0) {
    if (dataEl.effects) {
      for (const effectEl of dataEl.effects) {
        if (isAnyMatch(filterItems.skillEffectItem, Object.keys(effectEl.effectItems))) {
          checkedTexts.push(effectEl.text)
        }
      }
    }
  }

  return (
    <Grid container sx={{ fontSize: '14px', alignItems: 'center' }}>
      <Grid item sx={{ width: 40, height: 40 }}>
        <ButtonToSwitchTabs
          onChangeTab={onChangeTab}
          name={dataEl.owner}
          category={'character'}
          filterItemKey={'character'}
        />
      </Grid>
      <Grid item sx={{ width: 160, height: 40, lineHeight: 1.2 }}>
        <StyledChip
          label={dataEl.number === 'スキル1' ? '1' : dataEl.number === 'スキル2' ? '2' : 'B'}
          isChecked={filterItems.number.length > 0 && filterItems.number.includes(dataEl.number)}
        />
        <div style={{ fontWeight: 'bold' }}>
          {dataEl.name}
        </div>
      </Grid>
      <Grid item sx={{ width: 240 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SkillAttribute
            name={dataEl.attribute}
            isFilterItem={filterItems.attribute.length > 0 && filterItems.attribute.includes(dataEl.attribute)}
          />
          <SkillArea
            name={dataEl.area}
            isFilterItem={filterItems.area.length > 0 && filterItems.area.includes(dataEl.area)}
          />
          <SkillStatusDitails
            skillName={dataEl.name}
            skillStatus={currentSkillStatusKeys}
            sortItem={sortItem}
          />
        </div>
      </Grid>
      <Grid item sx={{ width: 360, fontSize: '12px', pl: '4px', lineHeight: 1.2 }}>
        <TextBr text={dataEl.text} checkedTexts={checkedTexts} />
      </Grid>
    </Grid>
  )
}



export const ListItemMemoria = ({ dataEl, filterItems, sortItem }) => {
  // console.log(dataEl)
  const isFilterItemEffectName = filterItems.memoriaAbility.length > 0 && filterItems.memoriaAbility.includes(dataEl.memoriaAbility)

  const checkedTexts = getCheckedTexts(dataEl, filterItems.effectItemOfMemoriaAbility);


  return (
    <Grid container sx={{ fontSize: '14px', alignItems: 'center' }}>
      <Grid item sx={{ width: 40, height: 60 }}>
        <Img name={dataEl.name} width={38} />
      </Grid>

      <Grid item sx={{ width: 180 }}>
        <StyledChip
          label={dataEl.get}
          isChecked={filterItems.get.length > 0 && filterItems.get.includes(dataEl.get)}
        />
        <StyledChip
          label={dataEl.rarity}
          isChecked={filterItems.rarity.length > 0 && filterItems.rarity.includes(dataEl.rarity)}
        />
        <div style={{ paddingLeft: '4px', fontWeight: 'bold' }}>
          {dataEl.name}
        </div>
        <div style={{ paddingRight: '4px', fontSize: '12px', textAlign: 'right' }}>
          {dataEl.date}
        </div>
      </Grid>
      <Grid item sx={{ width: 360, height: 20, marginRight: '4px' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          {Object.entries(dataEl.status).map(([key, value]) => {
            return (
              <CommonChart
                key={key}
                valueKey={key}
                value={value}
                category={'memoria'}
                isSortItem={sortItem === key}
                width={60}
                percentage={true}
              />
            )
          })}
        </div>
        <div>
          {dataEl.provisional ? '※数値は暫定' : ''}
        </div>
      </Grid>
      <Grid item sx={{ width: 360 }}>
        <StyledChip
          label={dataEl.memoriaAbility}
          isChecked={isFilterItemEffectName}
          width={200}
        />
        <div style={{ fontSize: '12px', paddingLeft: '10px', lineHeight: 1.2 }}>
          <TextBr text={dataEl.text} checkedTexts={checkedTexts} name={dataEl.name} />
        </div>
      </Grid>
    </Grid>
  )
}


const equipmentStatusMap = {
  '武器': ['物攻', '魔攻'],
  '防具': ['物防', '魔防'],
  '装飾品': ['HP', '素早さ'],
}

const StyledBadge = styled(Badge, {
  shouldForwardProp: (prop) => prop !== 'topValue',
})(({ theme, topValue }) => ({
  '& .MuiBadge-badge': {
    fontSize: '12px',
    color: mainColor,
    backgroundColor: darken(mainBackgroundColor, 0.3),
    right: 6,
    top: topValue || 32,
    padding: '0 4px',
    minWidth: '16px',
    height: '16px',
    borderRadius: '8px',
  },
}));

export const ListItemItem = ({ dataEl, filterItems, sortItem, onChangeTab }) => {

  return (
    <Grid container sx={{ fontSize: '14px' }}>
      <Grid item sx={{ width: 270 }}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: 60, height: 60 }}>
            <Img name={dataEl.name} height={60} />
          </div>
          <Stack>
            <div style={{ display: 'flex', width: 70 }}>
              {/* <Img name={dataEl.kind2} square={20} borderRadius={10} rhombus={!dataEl.kind2.includes('アイテム')} /> */}
              <ButtonToSwitchAlchemyTab onChangeTab={onChangeTab} dataEl={dataEl} />
            </div>
            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
              {dataEl.name}
            </div>
          </Stack>
        </div>
      </Grid>
      <Grid item sx={{ width: 400, fontSize: '12px' }} >
        <div style={{ display: 'flex' }}>
          {dataEl.kind1 === '装備アイテム'
            ?
            equipmentStatusMap[dataEl.kind2].map((key) => {
              if (dataEl.status[key]) {
                const isSortItem = sortItem === key
                return (
                  <div key={key} style={{ ...statusStyle(), width: 60 }}>
                    <div style={statusChartStyle(dataEl.status[key], 'item', key, isSortItem)}></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', zIndex: 1 }}>
                      <span style={{ fontSize: '10px', textAlign: 'left', paddingLeft: '2px' }}>{key}</span>
                      <span style={{ fontSize: '14px', textAlign: 'right', paddingRight: '4px' }}>{dataEl.status[key]}</span>
                    </div>
                  </div>
                )
              } else {
                return <div key={key} style={{ ...statusStyle(), width: 60 }}>　</div>
              }
            })
            : <div
              style={{
                width: 180,
                height: 18,
                display: 'flex',
                alignItems: 'center', // <-- これを追加
                border: '1px solid darkgray',
              }}
            >
              <div style={{ width: 20, display: 'flex', textAlign: 'center', alignItems: 'center' }}>
                {dataEl.attribute &&
                  <Img name={dataEl.attribute} square={18} />
                }
              </div>
              <div style={{ width: 20, fontSize: '14px', textAlign: 'center' }}>{dataEl.area}</div>
              <div style={{ width: 80, textAlign: 'center' }}>
                <span style={{ fontSize: '12px', textAlign: 'center' }}>使用回数 </span>
                <span style={{ fontSize: '14px' }}>{dataEl.usageCount}</span>
              </div>
              {Object.keys(skillStatusMap).map((key) =>
                dataEl[key] && (
                  <div key={key} style={{ display: 'flex' }}>
                    <Img name={key} square={18} borderRadius={5} />
                    <span>{dataEl[key].toLocaleString() + (dataEl.fixed ? '' : '%')}</span>
                  </div>
                )
              )}
            </div>
          }
        </div>
        <div style={{ lineHeight: 1.2 }}>
          <TextBr
            text={dataEl.text}
            checkedTexts={getCheckedTexts(dataEl, filterItems.effectItemOfItem)}
            name={dataEl.name}
          />
        </div>

      </Grid>
      <Grid item
        sx={{
          width: 400,
          height: 'auto',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          // gap: '10px', // ボタンとバッジ間のスペース
        }}
      >
        {dataEl.materials && Object.entries(dataEl.materials).map(([materialName, pieces], index) => {
          return (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <StyledBadge
                badgeContent={pieces}
                sx={{ zIndex: 2 }}
                topValue={32}
              >
                <ButtonToSwitchTabs
                  onChangeTab={onChangeTab}
                  name={materialName}
                  category={'material'}
                  filterItemKey={'material'}
                  pr={'16px'}
                />
              </StyledBadge>
            </div>
          );
        })}
      </Grid>
    </Grid>
  )
}

export const ListItemMaterial = ({ dataEl, filterItems, sortItem, onChangeTab }) => {
  return (
    <Grid container>
      <Grid item sx={{ width: 200, marginY: '1px' }} >
        <ImgMaterial dataEl={dataEl} />
      </Grid>
      <Grid item sx={{ width: 210, marginY: '1px', marginRight: '4px' }} >
        <ChipGifts
          gifts={dataEl.gift}
          filterItems={filterItems.gift}
          isSelected={false}
        />
      </Grid>
      <Grid item sx={{ width: 180, fontSize: '12px', marginY: '1px', marginRight: '4px' }}>
        {Object.entries(dataEl.quest).map(([questName, pieces]) => {
          return (
            <div key={questName} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <StyledBadge
                badgeContent={quest[questName].materials[dataEl.name]}
                sx={{ width: '100%', marginRight: '4px', zIndex: 9 }}
                topValue={12}
              >
                <ButtonToSwitchTabs
                  key={questName}
                  onChangeTab={onChangeTab}
                  name={questName}
                  name2={quest[questName].recommendedPower ? (',' + quest[questName].recommendedPower.toLocaleString()) : ''}
                  category={'quest'}
                  filterItemKey={'quest'}
                  fullWidth={true}
                  pr={'16px'}
                />
              </StyledBadge>
            </div>
          )
        })}
      </Grid>
      <Grid item sx={{ width: 180, marginY: '1px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {Object.entries(dataEl.items).map(([itemName, pieces]) => {
            return (
              <StyledBadge
                key={itemName}
                badgeContent={pieces}
                right={-10}
                topValue={12}
              >
                <ButtonToSwitchTabs
                  key={itemName}
                  onChangeTab={onChangeTab}
                  name={itemName}
                  category={'item'}
                  filterItemKey={'item'}
                  fullWidth={true}
                />
              </StyledBadge>
            )
          })}
        </div>
      </Grid>
    </Grid>
  )
}

//TextBrのdivは必要
export const ListItemGift = ({ dataEl, filterItems, sortItem, onChangeTab }) => {
  return (
    <Grid container>
      <Grid item sx={{ width: 250, display: 'flex', alignItems: 'center' }}>
        <Img name={dataEl.target} square={20} borderRadius={10} />
        <Img name={dataEl.giftType} square={20} borderRadius={10} />
        <div style={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4px' }}>
          {dataEl.name}
        </div>
      </Grid>
      <Grid item sx={{ width: 400, display: 'flex', alignItems: 'center', fontSize: '12px', }}>
        <div>
          <TextBr
            text={dataEl.text}
            checkedTexts={getCheckedTexts(dataEl, filterItems.effectItemOfGift)}
          />
        </div>
      </Grid>
      <Grid item sx={{ width: 400, display: 'flex', alignItems: 'center' }}>
        {dataEl.owner.character.map((charName) => {
          return (
            <ButtonToSwitchTabs
              key={charName}
              onChangeTab={onChangeTab}
              name={charName}
              category={'character'}
              filterItemKey={'character'}
            />
          )
        })}
        {dataEl.owner.material.map((materialName) => {
          return (
            <ButtonToSwitchTabs
              key={materialName}
              onChangeTab={onChangeTab}
              name={materialName}
              category={'material'}
              filterItemKey={'material'}
            />
          )
        })}
      </Grid>
    </Grid>
  )
}




export const ListItemAlchemy = ({ dataEl, filterItems, sortItem, onChangeTab, setTrigger }) => {


  // const storedData = JSON.parse(localStorage.getItem(dataEl.names[0])) || {};
  // if (!storedData) {
  //   localStorage.setItem(dataEl.names[0], JSON.stringify({ star: dataEl.star }));
  // } else if (!storedData?.star) {
  //   const storedData = JSON.parse(localStorage.getItem(dataEl.names[0])) || {};
  //   storedData.star = dataEl.star;
  //   localStorage.setItem(dataEl.names[0], JSON.stringify(storedData));
  // }
  // const characterStar = storedData?.star || 0;
  // const handleRatingChange = (event, newValue) => {
  //   const storedData = JSON.parse(localStorage.getItem(dataEl.names[0])) || {};
  //   storedData.star = newValue;
  //   localStorage.setItem(dataEl.names[0], JSON.stringify(storedData));
  //   updateAlchemy(alchemy)
  //   setTrigger(prev => 1 - prev);//0と1の間でトグルする
  // };

  // console.log(dataEl)




  const GridGift = ({ num }) => {

    const category = num === 2 ? 'material' : 'character'
    const giftMap = {
      戦闘アイテム: {
        0: [dataEl.gifts[0], dataEl.gifts[1]],
        1: [dataEl.gifts[2], dataEl.gifts[3]],
        2: [dataEl.gifts[4], dataEl.gifts[5]],
      },
      装備アイテム: {
        0: [dataEl.gifts[0]],
        1: [dataEl.gifts[1]],
        2: [dataEl.gifts[2], dataEl.gifts[3]],
      },
    }

    let colorMatched = false
    if (num === 0) {
      if (filterItems.giftColor.length === 0 || filterItems.giftColor.includes(dataEl.giftColor)) {
        colorMatched = true
      }
    } else if (num === 1) {
      if (dataEl.giftColors[1] === dataEl.giftColors[2]) {
        colorMatched = true
      }
    } else if (num === 2) {
      colorMatched = true
    }

    return (
      <Grid item sx={{ width: 260 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ButtonToSwitchTabs
            onChangeTab={onChangeTab}
            name={dataEl.names[num]}
            category={category}
            filterItemKey={category}
            fullWidth={true}
          />
          <ChipGifts
            gifts={giftMap[dataEl.target][num]}
            filterItems={filterItems}
            isSelected={false}
            colorMatched={colorMatched}
          />
        </div>
      </Grid>
    )
  }



  return (
    <Grid container>
      <GridGift num={0} />
      <GridGift num={1} />
      <GridGift num={2} />
      <Grid item>
        {/* <Rating
          name="currentRarity"
          value={characterStar}
          onChange={handleRatingChange}
          precision={0.5}
          size="small"
        /> */}

        <div style={{
          height: 40,
          lineHeight: 1.5,
          display: 'flex',
          alignItems: 'center',//縦方向の中央寄せ
        }}>
          <CommonChart
            valueKey={''}
            value={dataEl.giftBonus}
            category={'gift'}
            isSortItem={true}
            width={60}
            percentage={true}
          />
        </div>
      </Grid>
    </Grid>
  )
}


const styleQuestNameGrid = {
  width: 180,
  border: '1px solid darkgray',
  px: '4px',
  lineHeight: 1.2,
}
export const ListItemQuest = ({ dataEl, filterItems, sortItem, onChangeTab }) => {
  return (
    <Grid container>
      <Grid item sx={styleQuestNameGrid}>
        <div>
          {dataEl.name}
        </div>
        {dataEl.recommendedPower ?
          <div style={{ textAlign: 'right' }} >
            {dataEl.recommendedPower.toLocaleString()}
          </div> : ''
        }
      </Grid>
      <Grid item >
        <Grid container>
          {Object.entries(dataEl.materials).map(([materialName, pieces], index) => {
            return (
              <Grid item key={index}>
                <StyledBadge
                  badgeContent={pieces}
                  topValue={32}
                >
                  <ButtonToSwitchTabs
                    onChangeTab={onChangeTab}
                    name={materialName}
                    category={'material'}
                    filterItemKey={'material'}
                    pr={'16px'}
                  />
                </StyledBadge>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}




