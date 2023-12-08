import React, { useState, useEffect } from 'react';
import { Badge, Button, Collapse, Chip, Grid, List, ListItem, ListSubheader, Stack, Tooltip } from '@mui/material';
import { darken, lighten } from '@mui/system';

import gift from '../constants/gift';
import { Img } from './Img'
import { mainBackgroundColor, checkColor, mainColor, giftColorMap } from '../utils/commonStyle';

const statusKeys = ['HP', '素早さ', '物攻', '物防', '魔攻', '魔防']

const styleStatusKey = {
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',//横方向の中央寄せ
  alignItems: 'center',//縦方向の中央寄せ
  width: 50,
  height: 20,
  borderRadius: 10,
  backgroundColor: darken(mainBackgroundColor, 0.2),
  fontSize: '12px',
}

export const LabelStatus = ({ width }) => {
  return (
    <div style={{ display: 'flex' }}>
      {statusKeys.map((key) => (
        <div key={key} style={{ ...styleStatusKey, width }} >
          {key}
        </div>
      ))}
    </div>
  )
}


const skillStatusMap = {
  damage: 'ダメージ',
  break: 'ブレイク',
  heal: '回復力',
  wait: 'ウェイト',
}
const skillStatusMap2 = {
  damage: 'ダメージ',
  break: 'ブレイク',
  heal: '回復力',
  wait: 'ウェイト',
  // currentWait: '実ウェイト',
}

export const LabelSkillStatus = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 40 }}>
      </div>
      {Object.keys(skillStatusMap).map((key) => (
        <div key={key} style={styleStatusKey} >
          <Img name={key} square={18} borderRadius={4} />
        </div>
      ))}
    </div>
  )
}

export const LabelSkillStatus2 = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 170 }}>
      </div>
      {Object.keys(skillStatusMap2).map((key) => {
        return (
          <div key={key} style={styleStatusKey} >
            <Img name={key} square={18} borderRadius={4} />
          </div>
        )
      })}
    </div>
  )
}

export const LabelTitle = ({ title }) => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',        // divをフレックスコンテナとして設定
        justifyContent: 'center', // 横方向の中央寄せ
        alignItems: 'center',   // 縦方向の中央寄せ
        height: 20,
        backgroundColor: darken(mainBackgroundColor, 0.2),
        marginTop: '4px',
        fontSize: '12px',
      }}>
      {title}
    </div>
  )
}






