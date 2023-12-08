
import React, { useState, useEffect } from 'react';
import { Autocomplete, Checkbox, Chip, Container, FormControlLabel, Grid, List, ListItem, ListSubheader, Stack, Switch, TextField, Tooltip } from '@mui/material';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import { darken, lighten } from '@mui/system';

import { character } from '../constants/character';
import { mainBackgroundColor, selectedBackgroundColor, checkColor } from '../utils/commonStyle';
import { getEquippedStatus, getStatusMax  ,getSkillStatusMax ,getCalculatedSkillParams} from '../utils/calc';



import { Img } from './Img'
import skill from '../constants/skill';
import { attributes, initialAttributeResist } from '../constants/other';
import { maxValues, researchEffects, commonParams, currentEnemyAttributeResist, paramKeyLabelMap, getLocalStorage, updateSkillStatus, currentParameters } from '../utils/parameters';

import { alchemy } from './TabContents';
import { updateAlchemy } from '../utils/alchemyUtils';

const options = [1, 2, 3, 4, 5, 6]; // 選択肢となる数値の配列
const currentSkillParamsKeys = ['currentDamage', 'currentBreak', 'currentHeal', 'currentWait']

const inputEnemyAttributeResistStyle = {
  alignItems: 'center',
  fontSize: '12px',
  pl: '4px'
}

const inputEnemyAttributeResistGridStyle = {
  width: 80,
  display: 'flex',
  alignItems: 'center'
}

const inputProps = {
  min: -999,
  max: 999,
  step: 1,
  style: { textAlign: 'right' },
}
// export const InputCommonParams = ({ paramKey, faction, setTrigger }) => {

//   const [effectValue, setEffectValue] = useState(getLocalStorage(faction, paramKey));

//   const handleChange = (e) => {
//     let value = Math.floor(e.target.value);
//     setEffectValue(value);
//     commonParams[faction][paramKey] = value;
//     localStorage.setItem(`${faction}.${paramKey}`, value);

//     updateSkillStatus('input');
//     updateSkillStatusMax();
//     setTrigger(prev => 1 - prev);  // 0と1の間でトグルする
//   };

//   return (
//     <Grid container sx={inputEnemyAttributeResistStyle}>
//       <Grid item>
//         {paramKeyLabelMap[faction][paramKey]}
//       </Grid>
//       <Grid item sx={{ width: 60 }}>
//         <TextField
//           fullWidth
//           type="number"
//           variant="standard"
//           size="small"
//           value={effectValue}
//           onChange={handleChange}
//           inputProps={inputProps}
//           sx={{ input: { p: 0 } }}
//         />
//       </Grid>
//     </Grid>
//   );
// }



export const InputEnemyAttributeResist = ({ setTrigger }) => {

  //localStorageから読み込んだらvalueを数値に変換
  const [enemyAttributeResist, setEnemyAttributeResist] = useState(() => {
    const storedData = localStorage.getItem('enemyAttributeResist');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const convertedData = Object.fromEntries(
        Object.entries(parsedData).map(([key, value]) => [key, parseFloat(value)])
      );
      return convertedData;
    }
    return initialAttributeResist;
  });


  const handleChange = (attribute, newValue) => {
    currentEnemyAttributeResist[attribute] = Number(newValue)

    updateSkillStatus('InputEnemyAttributeResist');

    maxValues.skill = {
      'currentDamage': 0,
      'currentBreak': 0,
      'currentHeal': 0,
      'wait': 0
    };
    for (const skillEl of Object.values(skill)) {
      for (const key of Object.keys(maxValues.skill)) {
        if (!skillEl[key]) continue
        if (skillEl[key] > maxValues.skill[key]) {
          maxValues.skill[key] = skillEl[key];
        }
      }
    }


    const updatedValues = {
      ...enemyAttributeResist,
      [attribute]: Number(newValue)
    };
    setEnemyAttributeResist(updatedValues);
    localStorage.setItem('enemyAttributeResist', JSON.stringify(updatedValues));

    setTrigger(prev => 1 - prev);
  };

  return (
    <Grid container direction="column" sx={{
      alignItems: 'center',
      fontSize: '12px',
      border: '1px solid silver', borderRadius: '4px',
    }}>
      <Grid item sx={{ padding: '4px' }}>
        敵属性耐性(%)
      </Grid>
      {attributes.map(attribute => (
        <Grid item key={attribute} sx={inputEnemyAttributeResistGridStyle}>
          <Img name={attribute} square={20} rhombus={true} />
          <TextField
            fullWidth
            type="number"
            variant="standard"
            size="small"
            value={enemyAttributeResist[attribute]}
            onChange={(e) => handleChange(attribute, e.target.value)}
            inputProps={inputProps}
            sx={{ input: { p: 0 } }}
          />
        </Grid>
      ))}
    </Grid>
  );
}



//rowsに直接影響する
export const InputGiftThreshold = ({ giftCountThreshold, setGiftCountThreshold, localStorageKey }) => {

  const handleThresholdChange = (event) => {
    const value = event.target.value;
    setGiftCountThreshold(value);
    localStorage.setItem(localStorageKey, value);
  };

  return (
    <div style={{ fontSize: '12px', display: 'flex', alignItems: 'flex-end' }}>
      合計
      <FormControl
        variant="standard"
        sx={{ marginY: '4px', display: 'inline-block' }}
      >
        <Select
          labelId={`${localStorageKey}-label`}
          value={giftCountThreshold}
          onChange={handleThresholdChange}
          size="small"
          sx={{
            width: 60,
            height: 20,
            textAlign: 'right'
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <MenuItem key={num} value={num}>{num}</MenuItem>
          ))}
        </Select>
      </FormControl>
      個以上
    </div>
  );
}

export const StyledCheckbox = ({ label, objKey, setTrigger }) => {


  const [checked, setChecked] = useState(currentParameters.colorMatchedCharaOnly);

  const handleChange = (event) => {

    setChecked(event.target.checked);

    //localStorage更新
    localStorage.setItem(objKey, JSON.stringify(event.target.checked));
    currentParameters[objKey] = event.target.checked

    //rowsには影響しないので不要
    // updateAlchemy(alchemy)

    //画面更新で必須
    setTrigger(prev => 1 - prev)
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          size='small'
          sx={{ padding: '0px' }}
        />
      }
      label={<span style={{ fontSize: '12px' }}>{label}</span>}
      sx={{ margin: 0 }}
    />
  );
}

export const InputNumber = ({ value, setValue, localStorageKey, valueKey, setTrigger }) => {


  const [inputValue, setInputValue] = useState(value[valueKey] ?? 0);

  const handleBlur = () => {
    //非アクティブになったらinputValueで再計算する

    //元データ更新
    researchEffects[valueKey] = inputValue;

    //localStorage更新
    const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    storedData[valueKey] = inputValue;
    localStorage.setItem(localStorageKey, JSON.stringify(storedData));

    //コンポーネント値更新
    setValue(storedData);

    //全員更新
    Object.keys(character).forEach(charName => {

      //ステータス更新
      character[charName].equippedStatus = getEquippedStatus(charName)
      character[charName].currentStatus = { ...character[charName].equippedStatus }


      // for (const [index, skillName] of character[charName].skill.entries()) {
      //   const currentWait = Math.floor(57600 / character[charName].currentStatus.素早さ + skill[skillName].wait - 200)
      //   character[charName]['currentWait' + index] = currentWait
      //   skill[skillName].currentWait = currentWait
      // }

      //計算値更新
      const attributeType = character[charName].status.物攻 >= character[charName].status.魔攻 ? '物' : '魔'
      const currentPow = character[charName].currentStatus[attributeType + '攻']
      for (const [index, skillName] of character[charName].skill.entries()) {
        currentSkillParamsKeys.forEach(key => {
          const currentValue = getCalculatedSkillParams({ key, currentPow, skillName, charEl: character[charName] })
          character[charName].skillParams[index][key] = currentValue
          skill[skillName].params[key] = currentValue
        })
      }
  
    })

    //最大値更新
    maxValues.character = { ...getStatusMax(character, 'character'), ...getSkillStatusMax() }
    maxValues.skill = { ...getSkillStatusMax() }

    //List画面更新
    setTrigger(prev => 1 - prev);

  };

  const handleChange = (e) => {
    //inputValueを更新するだけ
    const newValue = parseFloat(e.target.value);
    setInputValue(isNaN(newValue) ? 0 : newValue);
  };

  return (
    <div style={{ fontSize: '14px', display: 'flex', alignItems: 'flex-end' }}>
      {'【研究】' + valueKey + '+'}
      <FormControl
        variant="standard"
        sx={{ marginY: '4px', display: 'inline-block' }}
      >
        <TextField
          variant="standard"
          type="number"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleBlur(e)
            }
          }}
          size="small"
          inputProps={{
            step: 0.1,
            style: {
              width: 70,
              textAlign: 'right',
              marginBottom: -7,
            },
          }}
        />
        %
      </FormControl>
    </div>
  );
};








// export const SwitchCommonParams = ({ paramKey, faction, setTrigger }) => {
//   const [switchState, setSwitchState] = useState(getLocalStorage(faction, paramKey));

//   const handleChange = (event) => {
//     const newValue = event.target.checked;
//     setSwitchState(newValue);
//     commonParams[faction][paramKey] = newValue;
//     localStorage.setItem(`${faction}.${paramKey}`, newValue);

//     updateSkillStatus('input');
//     updateSkillStatusMax();
//     setTrigger(prev => 1 - prev);  // 0と1の間でトグルする
//   };

//   return (
//     <Grid container>
//       <Grid item>
//         <FormControlLabel

//           control={
//             <Switch
//               checked={switchState}
//               onChange={handleChange}
//               name={`${faction}.${paramKey}`}
//               size='small'
//               sx={{
//                 margin: 0, // 右のスペースを減らす
//                 // ONスイッチ
//                 // '& .MuiSwitch-switchBase.Mui-checked': {
//                 //   backgroundColor: lighten(mainBackgroundColor, 0.15),
//                 // },

//                 //ONトラック
//                 '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
//                   backgroundColor: lighten(mainBackgroundColor, 0.8),
//                 },

//                 //OFFスイッチ
//                 '& .MuiSwitch-switchBase': {
//                   color: lighten(mainBackgroundColor, 0.7),
//                 },

//                 //OFFトラック
//                 '& .MuiSwitch-switchBase + .MuiSwitch-track': {
//                   backgroundColor: darken(mainBackgroundColor, 0.8),
//                 },
//               }}
//             />
//           }
//           label={
//             <span style={{ fontSize: 12, margin: '0px' }}>
//               {paramKeyLabelMap[faction][paramKey]}
//             </span>
//           }
//           style={{
//             margin: '0px', // FormControlLabelの外周りのマージンを0にする。
//             padding: '0px', // 必要に応じて、パディングを0に設定して、スペースをさらに減らす。
//           }}
//         />
//       </Grid>
//     </Grid>
//   );
// };


