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


import { mainBackgroundColor, mainColor, selectedBackgroundColor } from '../utils/commonStyle';
import { savedAlchemyGiftSets } from './TabContents';
import { BasicDrawer } from './CustomDrawer';
import { Gift, ChipGifts } from './Gift'
import { SmallButton } from './CustomButton'

const objToArr = (obj) => {
  return Object.entries(obj).map(([key, el]) => ({ ...el, key }));
}





export const SaveButton = ({ filterItems, thresholds, setGiftCountThreshold, setGiftCountThreshold2, setGiftCountThreshold3, setTrigger }) => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [rows, setRows] = useState(objToArr(savedAlchemyGiftSets));//objからarrに変換
  const [inputValue, setInputValue] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);



  const handleSave = () => {

    //条件が無いならsaveしない
    if (filterItems.gift.length === 0) {
      return;
    }

    //keyにはgiftsとthresholdを入れる
    const createKey = (gifts, threshold) => (
      gifts.length > 0 ? `(${gifts.join(',')})${threshold}` : ''
    )
    const key =
      `${createKey(filterItems.gift, thresholds[0])}` +
      `${createKey(filterItems.gift2, thresholds[1])}` +
      `${createKey(filterItems.gift3, thresholds[2])}`;

    if (Object.keys(savedAlchemyGiftSets).includes(key)) {
      setSaveSuccess(false);
      setOpenSnackbar(true);
      return;
    }

    savedAlchemyGiftSets[key] = {
      key: key,
      gifts: [filterItems.gift, filterItems.gift2, filterItems.gift3],
      thresholds: [...thresholds],
    }

    localStorage.setItem('alchemyGiftSets', JSON.stringify(savedAlchemyGiftSets));
    setRows(objToArr(savedAlchemyGiftSets));

    setSaveSuccess(true);
    setOpenSnackbar(true);

  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };


  const handleSelect = (rowEl) => {
    //選択されたらfilterItems更新、ローカルストレージ反映、再計算のためのsetTrigger、閉じる

    filterItems.gift = rowEl.gifts[0];
    filterItems.gift2 = rowEl.gifts[1];
    filterItems.gift3 = rowEl.gifts[2];
    localStorage.setItem("filterItems_alchemy", JSON.stringify(filterItems));

    setGiftCountThreshold(rowEl.thresholds[0])
    localStorage.setItem('giftCountThreshold', rowEl.thresholds[0]);

    if (rowEl.gifts[1].length > 0) {
      setGiftCountThreshold2(rowEl.thresholds[1])
      localStorage.setItem('giftCountThreshold2', rowEl.thresholds[1]);
    }
    if (rowEl.gifts[2].length > 0) {
      setGiftCountThreshold3(rowEl.thresholds[2])
      localStorage.setItem('giftCountThreshold3', rowEl.thresholds[2]);
    }

    setTrigger(prev => 1 - prev);
    setDrawerOpen(false);
  };



  const handleDelete = (key) => {
    //保存先削除、ストレージ反映、画面更新のためrows更新
    delete savedAlchemyGiftSets[key]
    localStorage.setItem('alchemyGiftSets', JSON.stringify(savedAlchemyGiftSets));
    setRows(objToArr(savedAlchemyGiftSets));
  };

  //テキストフィールドの入力値でフィルター
  const filteredRows = rows.filter(el => {
    return el.key.includes(inputValue);
  });

  return (
    <>
      <SmallButton onClick={() => handleSave()}>
        <SaveIcon sx={{ fontSize: 16, marginRight: '4px' }} />
        save
      </SmallButton>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        sx={{
          '& .MuiSnackbarContent-root': {
            color: mainColor,
            bgcolor: saveSuccess ? darken('#7fff7f', 0.5) : darken('#ffff7f', 0.5), // 成功時は緑色、失敗時は黄色
          }
        }}

      >
        <SnackbarContent
          message={
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {saveSuccess ? <CheckCircleIcon sx={{ mr: 1 }} /> : <WarningIcon sx={{ mr: 1 }} />}
              {saveSuccess ? "保存しました" : "保存済みです"}
            </span>
          }
        />
      </Snackbar>
      <Button
        variant='contained'
        size='small'
        sx={{
          height: 20,
          color: mainColor,
          bgcolor: darken('#7fbfff', 0.5),
          '&:hover': {
            bgcolor: darken('#7fbfff', 0.4),
          }

        }}
        onClick={() => setDrawerOpen(true)}
      >
        <GetAppIcon sx={{ fontSize: 18, marginRight: '4px' }} />
        load
      </Button>
      <BasicDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          size='small'
          sx={{ margin: '4px' }}
        />

        <List sx={{ padding: 0 }}>
          {filteredRows.map(el => {
            return (
              <ListItem key={el.key} sx={{
                padding: 0, px: '4px',
                // borderBottom: `1px solid ${mainColor}`,
              }}>
                <div>
                  <IconButton
                    aria-label="delete"
                    color="primary"
                    size='small'
                    onClick={() => handleDelete(el.key)}
                    sx={{
                      color: mainColor,
                      bgcolor: darken('#ff7f7f', 0.5),
                      '&:hover': {
                        bgcolor: darken('#ff7f7f', 0.4),
                      }

                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>

                <ListItemButton
                  onClick={() => handleSelect(el)}
                  sx={{
                    display: 'block',
                    marginY: '4px',
                    padding: 0,
                  }}
                >
                  <div style={{
                    // display: 'flex',
                    // alignItems: 'flex-end',//下寄せ
                    fontSize: '14px',
                    color: mainColor,
                    // fontWeight: 'bold',
                    borderBottom: `1px solid ${mainColor}`
                  }}>
                    <Grid container sx={{
                      alignItems: 'center',
                    }}>
                      <Grid item sx={{ width: '100%' }}>

                        {el.gifts[0].length > 0
                          ? <Stack
                            sx={{
                              border: 1,
                              borderColor: 'gray',
                              borderBottom: 'none',
                              borderLeft: 'none',
                              borderRight: 'none',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                              }}>

                              <div style={{ width: 210 }}>
                                <ChipGifts
                                  gifts={el.gifts[0]}
                                  filterItems={{ gift: el.gifts[0] }}
                                />
                              </div>
                              <div
                                style={{
                                  paddingLeft: '4px',
                                }}
                              >
                                {'×' + el.thresholds[0]}
                              </div>
                            </div>
                          </Stack>
                          : ''
                        }


                        {el.gifts[1].length > 0
                          ? <Stack
                            sx={{
                              border: 1,
                              borderColor: 'gray',
                              borderBottom: 'none',
                              borderLeft: 'none',
                              borderRight: 'none',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                              }}>

                              <div style={{ width: 210 }}>
                                <ChipGifts
                                  gifts={el.gifts[1]}
                                  filterItems={{ gift2: el.gifts[1] }}
                                />
                              </div>
                              <div
                                style={{
                                  paddingLeft: '4px',
                                }}
                              >
                                {'×' + el.thresholds[1]}
                              </div>
                            </div>
                          </Stack>
                          : ''
                        }
                        {el.gifts[2].length > 0
                          ? <Stack
                            sx={{
                              border: 1, borderColor: 'gray',
                              borderBottom: 'none',
                              borderLeft: 'none',
                              borderRight: 'none',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                              }}>

                              <div style={{ width: 210 }}>
                                <ChipGifts
                                  gifts={el.gifts[2]}
                                  filterItems={{ gift3: el.gifts[2] }}
                                />
                              </div>
                              <div
                                style={{
                                  paddingLeft: '4px',
                                }}
                              >
                                {'×' + el.thresholds[2]}
                              </div>
                            </div>
                          </Stack>
                          : ''
                        }
                      </Grid>
                    </Grid>

                  </div>
                </ListItemButton>

              </ListItem>
            )
          })}
        </List>
      </BasicDrawer>
    </>


  )


}


