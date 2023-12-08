
import { darken, lighten } from '@mui/system';

import material from '../constants/material';
import { mainBackgroundColor, checkColor, mainColor, giftColorMap } from '../utils/commonStyle';

export const Img = ({ name, width, height, square, borderRadius = 0, rhombus, style }) => {

  return (
    <img
      src={`${process.env.PUBLIC_URL}/${name}.png`}
      alt=''
      style={{
        ...style,
        width: square ?? width,
        height: square ?? height,
        borderRadius,
        clipPath: rhombus ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : '',
      }}
    />
  );
};

export const ImgMaterial = ({ dataEl }) => {
  const name = dataEl.name;

  const overallStyle = {
    width: '100%',
    height: 40,
    borderRadius: '20px',
    backgroundColor: material[name].giftColor !== '' ? darken(giftColorMap[material[name].giftColor], 0.5) : 'default',
    display: 'flex',
    alignItems: 'center',
  }

  const iconStyle = {
    position: 'relative',  // <-- 'absolute'から'relative'に変更
    left: 0,
    height: 40,
  }

  return (
    <div style={overallStyle}>
      <div style={iconStyle} >
        <Img
          name={name}
          square={40}
          borderRadius={20}
        />
        <Img
          name={dataEl.target}
          square={18}
          borderRadius={9}
          style={{
            position: 'absolute',
            top: 0,
            left: 25,
          }}
        />
      </div>
      <div
        style={{
          fontSize: '14px',
          fontWeight: 'bold',
          paddingLeft: '4px'
        }}
      >
        {name}
      </div>
    </div>
  );
};




