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



export const SmallButton = ({onClick, children}) => {

  return (
    <Button
      variant='contained'
      size='small'
      sx={{
        height: 20,
        marginRight: '4px',
        color: mainColor,
        bgcolor: darken('#7fff7f', 0.5),
        '&:hover': {
          bgcolor: darken('#7fff7f', 0.4),
        }
      }}
      onClick={onClick}
    >
      {children}
    </Button>

  )
}