import { darken, lighten } from '@mui/system';


export const mainBackgroundColor = '#3D4657'
export const selectedBackgroundColor = '#EBE6DC'
export const checkColor = '#daa520'// 'goldenrod'
export const mainColor = '#EBE6DC'//'#FFFEEF'

export const giftColorMap = {
  緑: '#7fff7f',
  赤: '#ff7f7f',
  黄: '#ffff7f',
  青: '#7fbfff',
  紫: '#bf7fff',
}


export const toggleButtonStyle = {
  color: mainColor,
  borderColor: lighten(mainBackgroundColor, 0.5),
  '&.Mui-selected': {
    color: mainBackgroundColor,
    backgroundColor: darken(selectedBackgroundColor, 0.1),
    '&:hover': {
      backgroundColor: selectedBackgroundColor,
    },
  },
  // minWidth:'30px',
  maxHeight: '36px',
  // px:'4px',
  lineHeight: 1,
};
