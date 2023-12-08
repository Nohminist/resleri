import React, { useState, useEffect, useMemo } from 'react';
import { Box, Button, Chip, Grid, List, ListItem, ListSubheader, Stack, TextField, ToggleButtonGroup, ToggleButton, Tooltip } from '@mui/material';
import { darken, lighten } from '@mui/system';


import { mainBackgroundColor, mainColor, selectedBackgroundColor } from '../utils/commonStyle';

import { character } from '../constants/character';
import skill from '../constants/skill';
import item from '../constants/item';

import memoria from '../constants/memoria';
import material from '../constants/material';
import gift from '../constants/gift';
import quest from '../constants/quest';
import { updateAlchemy } from '../utils/alchemyUtils';
import { currentParameters } from '../utils/parameters';


import { ListContents } from './ListContents';
import { SaveButton } from './Save';
import { CommonToggleButtonGroup } from './CustomToggleButton';

import { filterList, filterItemitialize, FilterButtonGroup, isFilterPassed, DrawerForSelect } from './Filter'
import { SortOrderButton, SortButtonGroup, sortItemList } from './Sort'
import { InputCommonParams, InputEnemyAttributeResist, InputGiftThreshold, SwitchCommonParams, StyledCheckbox, InputNumber } from './Input'


//調合data作成
export const alchemy = {}
updateAlchemy(alchemy)

//調合組合せ保存
const storedsavedAlchemyGiftSets = localStorage.getItem('alchemyGiftSets');
export const savedAlchemyGiftSets = storedsavedAlchemyGiftSets ? JSON.parse(storedsavedAlchemyGiftSets) : {}


const categoryMap = {
  character: character,
  skill: skill,
  memoria: memoria,
  item: item,
  material: material,
  gift: gift,
  alchemy: alchemy,
  quest: quest,
}

export const TabContents = ({ category, maxValues, onChangeTab }) => {

  const [sortOrder, setSortOrder] = useState(() => {
    return localStorage.getItem('sortOrder_' + category) || 'desc';
  });
  const [sortItem, setSortItem] = useState(() => {
    return localStorage.getItem('sortItem_' + category) || (category === 'skill' ? 'damage' : category === 'alchemy' ? 'giftBonus' : 'date');
  });
  const [filterItems, setFilterItems] = useState(() => {//既にcategoryを反映
    const storedData = localStorage.getItem('filterItems_' + category);
    return storedData ? { ...filterItemitialize(category), ...JSON.parse(storedData) } : filterItemitialize(category);
  });
  const [giftCountThreshold, setGiftCountThreshold] = useState(() => {
    const savedThreshold = localStorage.getItem('giftCountThreshold');
    return savedThreshold ? Number(savedThreshold) : 2;
  });
  const [giftCountThreshold2, setGiftCountThreshold2] = useState(() => {
    const savedThreshold = localStorage.getItem('giftCountThreshold2');
    return savedThreshold ? Number(savedThreshold) : 2;
  });
  const [giftCountThreshold3, setGiftCountThreshold3] = useState(() => {
    const savedThreshold = localStorage.getItem('giftCountThreshold3');
    return savedThreshold ? Number(savedThreshold) : 2;
  });
  const [statusType, setStatusType] = useState(() => {
    const storedData = localStorage.getItem('statusType');
    return storedData ?? 'basic';
  });
  const [skillParamsType, setSkillParamsType] = useState(() => {
    const storedData = localStorage.getItem('skillParamsType');
    return storedData ?? 'origin';
  });

  const [researchEffects, setResearchEffects] = useState(() => {
    const storedData = localStorage.getItem('researchEffects');
    return storedData ? { ...JSON.parse(storedData) } : {};
  });
  const [trigger, setTrigger] = useState(0);//ステータスなどが変更されたら


  const rows = useMemo(() => {
    let newRows = [];
    Object.entries(categoryMap[category]).forEach(([dataName, dataEl]) => {
      if (isFilterPassed({ category, dataEl, filterItems, giftCountThreshold, giftCountThreshold2, giftCountThreshold3 })) {
        const statusData = (category === 'character' && statusType === 'equipped') ? dataEl.equippedStatus : dataEl.status;

        let skillParamsData = {}
        if (category === 'character') {
          skillParamsData = skillParamsType === 'origin'
            ? {
              damage0: dataEl.skillParams[0].damage,
              damage1: dataEl.skillParams[1].damage,
              damage2: dataEl.skillParams[2].damage,
              break0: dataEl.skillParams[0].break,
              break1: dataEl.skillParams[1].break,
              break2: dataEl.skillParams[2].break,
              heal0: dataEl.skillParams[0].heal,
              heal1: dataEl.skillParams[1].heal,
              heal2: dataEl.skillParams[2].heal,
              wait0: dataEl.skillParams[0].wait,
              wait1: dataEl.skillParams[1].wait,
              wait2: dataEl.skillParams[2].wait,
            }
            : {
              damage0: dataEl.skillParams[0].damage,//暫定
              damage1: dataEl.skillParams[1].damage,
              damage2: dataEl.skillParams[2].damage,
              break0: dataEl.skillParams[0].break,
              break1: dataEl.skillParams[1].break,
              break2: dataEl.skillParams[2].break,
              heal0: dataEl.skillParams[0].heal,
              heal1: dataEl.skillParams[1].heal,
              heal2: dataEl.skillParams[2].heal,
              // damage0: dataEl.skillParams[0].currentDamage,
              // damage1: dataEl.skillParams[1].currentDamage,
              // damage2: dataEl.skillParams[2].currentDamage,
              // break0: dataEl.skillParams[0].currentBreak,
              // break1: dataEl.skillParams[1].currentBreak,
              // break2: dataEl.skillParams[2].currentBreak,
              // heal0: dataEl.skillParams[0].currentHeal,
              // heal1: dataEl.skillParams[1].currentHeal,
              // heal2: dataEl.skillParams[2].currentHeal,
              wait0: dataEl.skillParams[0].currentWait,
              wait1: dataEl.skillParams[1].currentWait,
              wait2: dataEl.skillParams[2].currentWait,
            }
        }else if( category === 'skill'){
          skillParamsData = skillParamsType === 'origin'
          ? {
            damage: dataEl.params.damage,
            break: dataEl.params.break,
            heal: dataEl.params.heal,
            wait: dataEl.params.wait,
          }
          : {
            damage: dataEl.params.damage,//暫定
            break: dataEl.params.break,
            heal: dataEl.params.heal,
            // damage: dataEl.params.currentDamage,
            // break: dataEl.params.currentBreak,
            // heal: dataEl.params.currentHeal,
            wait: dataEl.params.currentwait,

          }


        }


        newRows.push({
          ...dataEl,
          ...statusData,
          ...skillParamsData,
          name: dataName,
        })
      }
    });


    newRows.sort((a, b) => {
      if (a[sortItem] === undefined) return 1;
      if (b[sortItem] === undefined) return -1;

      const itemA = sortItem === 'date' ? new Date(a[sortItem]) : a[sortItem];
      const itemB = sortItem === 'date' ? new Date(b[sortItem]) : b[sortItem];
      if (sortOrder === 'asc') {
        if (itemA < itemB) return -1;
        if (itemA > itemB) return 1;
      } else {
        if (itemA < itemB) return 1;
        if (itemA > itemB) return -1;
      }
      return 0;
    });

    // console.log(newRows)

    return newRows;
  }, [filterItems, sortItem, sortOrder, giftCountThreshold, giftCountThreshold2, giftCountThreshold3, trigger]);

  return (
    <div style={{ padding: '4px' }}>

      {category === 'character' &&
        <Grid container>
          <Grid item >
            <CommonToggleButtonGroup
              group={'statusType'}
              value={statusType}
              setValue={setStatusType}
              setTrigger={setTrigger}
            />
          </Grid>
          <Grid item sx={{marginLeft:'4px'}}>
            <CommonToggleButtonGroup
              group={'skillParamsType'}
              value={skillParamsType}
              setValue={setSkillParamsType}
              setTrigger={setTrigger}
            />
          </Grid>

          <Grid item>
            <div style={{ paddingLeft: '4px' }}>
              <InputNumber
                value={researchEffects}
                setValue={setResearchEffects}
                localStorageKey='researchEffects'
                valueKey='装飾品の素早さアップ'
                setTrigger={setTrigger}
              />
            </div>
          </Grid>
        </Grid>
      }

      {category !== 'material' && category !== 'gift' && category !== 'quest' &&
        <div style={{
          display: 'inline-block', // または 'inline-flex'
          backgroundColor: darken(mainBackgroundColor, 0.2),
          minWidth: 420,
          // marginTop: '4px',
          paddingRight: '4px',
        }}>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 'bold',
              paddingLeft: '4px',
              lineHeight: 1.2,
            }}>
            ソート
          </div>
          <Grid container>
            <Grid item sx={{ pt: '4px', pl: '4px' }}>
              <SortOrderButton category={category} sortOrder={sortOrder} setSortOrder={setSortOrder} />
            </Grid>
            <Grid item sx={{ pt: '4px', pl: '4px' }}>
              <SortButtonGroup props={{ category, sortItem, setSortItem, sortItemList: sortItemList[category] }} />
            </Grid>
          </Grid>
        </div>
      }

      <br />

      <div style={{
        display: 'inline-block', // または 'inline-flex'
        backgroundColor: darken(mainBackgroundColor, 0.2),
        marginTop: '4px',
        paddingRight: '4px',
        paddingBottom: '4px',
        minWidth: 420,
      }}>
        <div
          style={{
            fontSize: '14px',
            fontWeight: 'bold',
            paddingLeft: '4px',
            lineHeight: 1.2,
          }}>
          フィルター
        </div>
        <Grid container>
          {Object.keys(filterList[category]).map(group => {
            // groupが'skillEffectItem'でない場合のみ描画

            if (!group.includes('effectTarget') && filterList[category][group].length > 0) {
              return (
                <Grid item key={group} sx={{ pl: '4px', pt: '4px' }}>
                  <FilterButtonGroup
                    category={category}
                    filterItems={filterItems}
                    setFilterItems={setFilterItems}
                    group={group}
                  />
                </Grid>
              );
            }
            return null;
          })}
        </Grid>

        <Grid>
          {(category === 'character') &&
            <>
              <Grid item xs={12} sx={{ pt: '4px', pl: '4px' }} >
                <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'character'} />
              </Grid>
              <Grid item xs={12} sx={{ pl: '4px', pt: '4px' }} >
                <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'skill'} />
              </Grid>
              <Grid item xs={12} sx={{ pl: '4px', pt: '4px' }} >
                <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'charAbility'} />
              </Grid>
              <Grid item xs={12} sx={{ pl: '4px', pt: '4px' }} >
                <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'gift'} />
              </Grid>

            </>

          }
          {(category === 'memoria') &&
            <Grid item xs={12} sx={{ pt: '4px', pl: '4px' }}>
              <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'memoriaAbility'} />
            </Grid>
          }

          {(category === 'item') &&
            <>
              <Grid item xs={12} sx={{ pt: '4px', pl: '4px' }}>
                <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'item'} />
              </Grid>
              <Grid item xs={12} sx={{ pl: '4px', pt: '4px' }}>
                <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'effectItemOfItem'} />
              </Grid>
            </>
          }
          {(category === 'material') &&
            <>
              <Grid item xs={12} sx={{ pt: '4px', pl: '4px' }} >
                <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'material'} />
              </Grid>
              <Grid item xs={12} sx={{ pl: '4px', pt: '4px' }} >
                <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'gift'} />
              </Grid>
            </>
          }
          {(category === 'gift') &&
            <>
              <Grid item xs={12} sx={{ pt: '4px', pl: '4px' }}>
                <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'gift'} />
              </Grid>
              <Grid item xs={12} sx={{ pl: '4px', pt: '4px' }}>
                <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'effectItemOfGift'} />
              </Grid>
            </>
          }
          {(category === 'alchemy') &&
            <>
              <Grid item xs={12} sx={{ pt: '4px', pl: '4px' }} >
                <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'character'} />
              </Grid>
              <Grid item xs={12} sx={{ pl: '4px', pt: '4px' }} >
                <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'materialOfAlchemy'} />
              </Grid>

            </>
          }
          {(category === 'quest') &&
            <Grid item xs={12} sx={{ pt: '4px', pl: '4px' }}>
              <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'quest'} />
            </Grid>
          }


          {/* {(category === 'skill') &&
          <>
            <Grid item sx={{ width: 'fit-content', pr: '4px', border: '1px solid silver', borderRadius: '4px', marginRight: '4px' }} >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div >
                  <InputCommonParams faction='ally' paramKey='currentHP' setTrigger={setTrigger} sx={{ pb: '4px' }} />
                </div>
                <div >
                  <InputCommonParams faction='enemy' paramKey='currentHP' setTrigger={setTrigger} sx={{ pb: '4px' }} />
                </div>
              </div>
            </Grid>
            <Grid item sx={{ width: 'fit-content', pr: '4px', border: '1px solid silver', borderRadius: '4px', marginRight: '4px', justifyContent: "flex-end" }} justifyContent="flex-end" >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div >
                  <InputCommonParams faction='ally' paramKey='damageGivenBuff' setTrigger={setTrigger} sx={{ pb: '4px' }} />
                </div>
                <div >
                  <InputCommonParams faction='ally' paramKey='breakGivenBuff' setTrigger={setTrigger} sx={{ pb: '4px' }} />
                </div>
                <div >
                  <InputCommonParams faction='enemy' paramKey='damageTakenDebuff' setTrigger={setTrigger} sx={{ pb: '4px' }} />
                </div>

              </div>
            </Grid>
            <Grid item sx={{ pr: '4px' }} >
              <InputEnemyAttributeResist setTrigger={setTrigger} />
            </Grid>
            <Grid item sx={{ width: 'fit-content', pr: '4px', border: '1px solid silver', borderRadius: '4px', marginRight: '4px' }} >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div >
                  <SwitchCommonParams faction='ally' paramKey='isCritical' setTrigger={setTrigger} />
                </div>
                <div >
                  <SwitchCommonParams faction='enemy' paramKey='isBreak' setTrigger={setTrigger} />
                </div>
                <div >
                  <SwitchCommonParams faction='enemy' paramKey='isPoisoned' setTrigger={setTrigger} />
                </div>
                <div >
                  <SwitchCommonParams faction='enemy' paramKey='isParalyzed' setTrigger={setTrigger} />
                </div>
              </div>

            </Grid>
            <Grid item sx={{ width: 'fit-content', pr: '4px', border: '1px solid silver', borderRadius: '4px', marginRight: '4px' }} >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div >
                  <SwitchCommonParams faction='ally' paramKey='isHPLowMax' setTrigger={setTrigger} />
                </div>
                <div >
                  <SwitchCommonParams faction='ally' paramKey='isBuffCountMax' setTrigger={setTrigger} />
                </div>
                <div >
                  <SwitchCommonParams faction='ally' paramKey='isEnemyCountMax' setTrigger={setTrigger} />
                </div>
              </div>

            </Grid>


          </>
        } */}


        </Grid>
        {category === 'skill' && (
          <Grid container>
            <Box sx={{ pt: '4px', pb: '4px', width: '100%', border: '1px solid grey', marginTop: '4px', marginLeft: '4px', lineHeight: 1 }}>
              <div style={{ marginLeft: '4px', fontSize: '12px' }}>
                スキル効果
              </div>
              <Grid container>
                <Grid item sx={{ marginLeft: '4px', marginTop: '4px' }}>
                  <FilterButtonGroup
                    category={category}
                    filterItems={filterItems}
                    setFilterItems={setFilterItems}
                    group={'effectTarget'}
                  />
                </Grid>
                <Grid item sx={{ marginLeft: '4px', marginTop: '4px' }}>
                  <FilterButtonGroup
                    category={category}
                    filterItems={filterItems}
                    setFilterItems={setFilterItems}
                    group={'effectTargetAttribute'}
                  />
                </Grid>
                <Grid item xs={12} sx={{ marginLeft: '4px', marginTop: '4px' }}>
                  <DrawerForSelect
                    rows={rows}
                    category={category}
                    filterItems={filterItems}
                    setFilterItems={setFilterItems}
                    group={'skillEffectItem'}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        )}
        {category === 'memoria' && (
          <Grid container>
            <Box sx={{ pt: '4px', pb: '4px', width: '100%', border: '1px solid grey', marginTop: '4px', marginLeft: '4px', lineHeight: 1 }}>
              <div style={{ marginLeft: '4px', fontSize: '12px' }}>
                メモリアアビリティ効果
              </div>
              <Grid container>
                <Grid item sx={{ marginLeft: '4px', marginTop: '4px' }}>
                  <FilterButtonGroup
                    category={category}
                    filterItems={filterItems}
                    setFilterItems={setFilterItems}
                    group={'effectTarget'}
                  />
                </Grid>
                {/* <Grid item  sx={{ marginLeft: '4px' ,marginTop: '4px'}}>
                  <FilterButtonGroup
                    category={category}
                    filterItems={filterItems}
                    setFilterItems={setFilterItems}
                    group={'effectTargetAttribute'}
                  />
                </Grid> */}
                <Grid item xs={12} sx={{ marginLeft: '4px', marginTop: '4px' }}>
                  <DrawerForSelect
                    rows={rows}
                    category={category}
                    filterItems={filterItems}
                    setFilterItems={setFilterItems}
                    group={'effectItemOfMemoriaAbility'}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        )}
        {(category === 'alchemy') &&
          <>
            <Box sx={{
              border: 1,
              borderColor: 'gray',
              marginTop: '4px',
              marginLeft: '4px',
              pb: '4px',
            }}>
              <div style={{
                display: 'flex', // Flexbox を有効化
                justifyContent: 'space-between', // 左右の要素を端に寄せる
                marginTop: '4px',
                marginRight: '4px',
                fontSize: '14px',
              }}>
                <div style={{ marginLeft: '4px' }}>特性</div>
                <div>
                  <SaveButton
                    filterItems={filterItems}
                    thresholds={[giftCountThreshold, giftCountThreshold2, giftCountThreshold3]}
                    setGiftCountThreshold={setGiftCountThreshold}
                    setGiftCountThreshold2={setGiftCountThreshold2}
                    setGiftCountThreshold3={setGiftCountThreshold3}
                    setTrigger={setTrigger}
                  />
                </div>
              </div>
              <Stack sx={{ border: 1, borderColor: 'gray', borderBottom: 'none', pl: '4px', pt: '4px', pr: '4px', marginTop: '4px', marginLeft: '4px', marginRight: '4px' }}>
                <div>
                  <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'gift'} trigger={trigger} />
                </div>
                <div style={{ paddingLeft: '4px' }}>
                  <InputGiftThreshold giftCountThreshold={giftCountThreshold} setGiftCountThreshold={setGiftCountThreshold} localStorageKey='giftCountThreshold' />
                </div>
              </Stack>
              <Stack sx={{ border: 1, borderColor: 'gray', borderBottom: 'none', pl: '4px', pt: '4px', pr: '4px', marginLeft: '4px', marginRight: '4px' }}>
                <div>
                  <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'gift2'} trigger={trigger} />
                </div>
                <div style={{ paddingLeft: '4px' }}>
                  <InputGiftThreshold giftCountThreshold={giftCountThreshold2} setGiftCountThreshold={setGiftCountThreshold2} localStorageKey='giftCountThreshold2' />
                </div>
              </Stack>
              <Stack sx={{ border: 1, borderColor: 'gray', pl: '4px', pt: '4px', pr: '4px', marginLeft: '4px', marginRight: '4px' }}>
                <div>
                  <DrawerForSelect category={category} filterItems={filterItems} setFilterItems={setFilterItems} group={'gift3'} trigger={trigger} />
                </div>
                <div style={{ paddingLeft: '4px' }}>
                  <InputGiftThreshold giftCountThreshold={giftCountThreshold3} setGiftCountThreshold={setGiftCountThreshold3} localStorageKey='giftCountThreshold3' />
                </div>
              </Stack>

            </Box>
            <div style={{ paddingLeft: '4px' }}>
              <StyledCheckbox label='ギフトカラーが一致するキャラのみ' objKey="colorMatchedCharaOnly" setTrigger={setTrigger} />
            </div>
          </>

        }


      </div>



      <div style={{ paddingTop: '4px' }}>
        <ListContents
          rows={rows}
          category={category}
          maxValues={maxValues}
          filterItems={filterItems}
          setFilterItems={setFilterItems}
          sortItem={sortItem}
          onChangeTab={onChangeTab}
          setTrigger={setTrigger}
          statusType={statusType}
          skillParamsType={skillParamsType}
        />
      </div>

      <div style={{ lineHeight: 1.2, fontSize: '14px', borderTop: `1px solid ${mainColor}`, color: mainColor }}>
        <ul>
          {category === 'character' &&
            <>
              <li>キャラの行をクリックすると詳細が表示されます。</li>
              <li>ガチャ画面から確認できる数値を記載します。（Lv60、覚醒段階MAX、グロウボード全解放時のステータス。但し、ロール強化分を除きます。）</li>
              <li>ガチャ画面から確認できないキャラ（配布キャラ）の素早さ以外のステータスは未入力です。</li>
              <li>HPは戦闘研究のHPアップ（など？）が反映されているようです。当サイトで全キャラ同条件でのステータスを表示できていない可能性があります。</li>
            </>
          }
          {category === 'memoria' &&
            <>
              <li>ガチャ画面から確認できる数値を記載します。（Lv30、解放ランクMAX時のステータス）</li>
              <li>ガチャ画面から確認できないメモリアの数値は暫定です。</li>
            </>
          }
          {category === 'item' &&
            <>
              <li>ギフトカラーが無いものは、未入手などで確認ができていないものです。</li>
              <li>リストのギフトカラーをクリックすると「調合」タブへ移行します。「調合」タブでは、選択したアイテムの「戦闘/装備アイテム」「ギフトカラー」のフィルター機能を自動的に適用します。</li>
            </>
          }
          {category === 'alchemy' &&
            <>
              <li>選択した特性が設定個数以上含まれる組合せを表示します。</li>
              <li>特性は、第1候補群、第2候補群、第3候補群の順で入力してください。（その順序で絞り込むロジックにしています）</li>
              <li>特性の個数は、ひとつの候補群の中ではOR条件、別の候補群とはAND条件にしてカウントされます。</li>
              <li>ギフトボーナスは、2キャラ分を加算しています。（星3以下=30%,星3.5=35%,星4=45%,星4.5=60%,星5=80%,ボードは解放済み）</li>
              <li>表示する組合せが多いと時間がかかる場合があります。</li>
            </>
          }
          {category === 'quest' &&
            <>
              <li>素材収集に必要なクエストを表示します。（素材クエスト、イベントクエスト）</li>
              <li>イベントクエストの詳細は省略します。</li>
            </>
          }

          <li>ソートやフィルターの設定は、ローカルストレージに保存されます。</li>

        </ul>
      </div>

    </div>
  );
};
