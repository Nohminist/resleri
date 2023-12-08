import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { filterList } from './Filter'
import { sortItemList } from './Sort'
import { currentParameters } from '../utils/parameters';


const ButtonToClearLocalStorage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClearLocalStorage = () => {

    Object.keys(filterList).forEach(category => {
      localStorage.removeItem('filterItems_' + category)
    })
    Object.keys(sortItemList).forEach(category => {
      localStorage.removeItem('sortItem_' + category)
    })
    localStorage.removeItem('giftCountThreshold')
    localStorage.removeItem('giftCountThreshold2')
    localStorage.removeItem('giftCountThreshold3')
    Object.keys(currentParameters).forEach(key => {
      localStorage.removeItem(key)
    })
    localStorage.removeItem('statusType')
    localStorage.removeItem('researchEffects')
    
    

    

    // localStorage.clear();
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="error" onClick={handleClickOpen}
        sx={{ margin: '4px' }}
        size='small'
      >
        ソート,フィルター設定をクリアする
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{"ローカルストレージをクリアします"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ソート、フィルターに関する部分がクリアされます。<br />
            クリア実行しただけでは画面は更新されませんので、必要に応じて更新してください。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleClearLocalStorage} color="error">
            実行
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ButtonToClearLocalStorage;
