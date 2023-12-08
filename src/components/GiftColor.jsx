import React from 'react';

export const giftColorList = ['青', '紫', '黄', '赤', '緑']
const colorMap = {
  緑: '#7fff7f',
  赤: '#ff7f7f',
  黄: '#ffff7f',
  青: '#7fbfff',
  紫: '#ff7fff',
}
const commonStyles = {
  width: 0,
  height: 0,
  borderStyle: 'solid',
  position: 'absolute',
};


export const GiftColor = ({ color }) => {


  const leftHalfStyles = {
    ...commonStyles,
    borderWidth: '15px 15px 15px 0',
    borderColor: `transparent ${colorMap[color[0]]} transparent transparent`,
    left: 0,
    top: 15,
  };

  const rightHalfStyles = {
    ...commonStyles,
    borderWidth: '15px 0 15px 15px',
    borderColor: `transparent transparent transparent ${colorMap[color[1]]}`,
    left: 14,
    top: 15,
  };

  const containerStyles = {
    width: '30px',
    height: '60px',
    position: 'relative',
    overflow: 'hidden',
  };




  return (
    <div style={containerStyles}>
      <div style={leftHalfStyles}></div>
      <div style={rightHalfStyles}></div>
    </div>
  );
};

export const GiftColorLR = (color, group) => {
  return (
    <div style={{ width: 12 }}>
      {group === 'giftColorL'
        ? <div
          style={{
            width: 5,
            height: 0,
            borderStyle: 'solid',
            position: 'absolute',
            borderWidth: '15px 15px 15px 0',
            borderColor: `transparent ${colorMap[color]} transparent transparent`,
            left: 0,
            top: 3,
          }}
        ></div>
        : <div
          style={{
            width: 5,
            height: 0,
            borderStyle: 'solid',
            position: 'absolute',
            borderWidth: '15px 0 15px 15px',
            borderColor: `transparent transparent transparent ${colorMap[color]}`,
            right: 0,
            top: 3,
          }}
        ></div>



      }
    </div>



  )


}

export const GiftColor1 = ({ color, size = 8 }) => {
  return (
    <div style={{
      position: 'relative',
      width: size === 8 ? 16 : 29,
      height: size === 8 ? 16 : 29
    }}>
      {/* 右側の三角形 */}
      <div style={{
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: size === 8 ? '8px 0 8px 8px' : '15px 0 15px 15px',
        borderColor: `transparent transparent transparent ${colorMap[color]}`,
        position: 'absolute',
        top: 0,
        right: 0
      }}></div>
      {/* 左側の三角形 */}
      <div style={{
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: size === 8 ? '8px 8px 8px 0' : '15px 15px 15px 0',
        borderColor: `transparent ${colorMap[color]} transparent transparent`,
        position: 'absolute',
        top: 0,
        left: 0
      }}></div>
    </div>
  );
}

