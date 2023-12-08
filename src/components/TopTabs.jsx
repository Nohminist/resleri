import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { TabContents } from './TabContents';
import { character } from '../constants/character';
import skill from '../constants/skill';
import item from '../constants/item';
import material from '../constants/material';
import gift from '../constants/gift';
import quest from '../constants/quest';
import { initialize } from '../utils/initialize';
import { commonParams, currentEnemyAttributeResist, getLocalStorage, updateSkillStatus } from '../utils/parameters';
import ButtonToClearLocalStorage from './ButtonToClearLocalStorage';

//ローカルストレージをcarrentに入れる
let storedData = localStorage.getItem('enemyAttributeResist');
if (storedData) {
  const parsedData = JSON.parse(storedData);
  const convertedData = Object.fromEntries(
    Object.entries(parsedData).map(([key, value]) => [key, parseFloat(value)])
  );

  for (const attribute of Object.keys(currentEnemyAttributeResist)) {
    currentEnemyAttributeResist[attribute] = convertedData[attribute]
  }

}

initialize();


// console.log(character)



const addOwnerCategoryMap = {
  character: character,
  material, material
}
Object.entries(addOwnerCategoryMap).forEach(([category, data]) => {
  Object.entries(data).forEach(([dataName, dataEl]) => {
    dataEl.gift.forEach(giftName => {
      gift[giftName].owner[category].push(dataName)
    })
  })
})






//commonParamsにlocalStorageの値を入れ、skillStatusを更新しておく
// for (const faction of Object.keys(commonParams)) {
//   for (const paramKey of Object.keys(commonParams[faction])) {
//     commonParams[faction][paramKey] = getLocalStorage(faction, paramKey)
//   }
// }
// updateSkillStatus('TopTabs');
// updateSkillStatusMax();









function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TopTabs() {
  const [tabCategory, setTabCategory] = React.useState('character');
  const handleChange = (event, newValue) => {
    setTabCategory(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabCategory}
          onChange={handleChange}
          variant="scrollable" // ここに追加
          scrollButtons="auto"
          allowScrollButtonsMobile // ここに追加
          aria-label='カテゴリー選択タブ'
        >
          <Tab label="キャラ" value={'character'} {...a11yProps(0)} />
          <Tab label="スキル" value={'skill'} {...a11yProps(1)} />
          <Tab label="メモリア" value={'memoria'} {...a11yProps(2)} />
          <Tab label="アイテム" value={'item'} {...a11yProps(3)} />
          <Tab label="素材" value={'material'} {...a11yProps(4)} />
          <Tab label="特性" value={'gift'} {...a11yProps(5)} />
          <Tab label="調合" value={'alchemy'} {...a11yProps(6)} />
          <Tab label="クエスト" value={'quest'} {...a11yProps(7)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={tabCategory} index={'character'}>
        <TabContents category={'character'} onChangeTab={setTabCategory}/>
      </CustomTabPanel>
      <CustomTabPanel value={tabCategory} index={'skill'}>
        <TabContents category={'skill'} onChangeTab={setTabCategory} />
      </CustomTabPanel>
      <CustomTabPanel value={tabCategory} index={'memoria'}>
        <TabContents category={'memoria'} onChangeTab={setTabCategory}/>
      </CustomTabPanel>
      <CustomTabPanel value={tabCategory} index={'item'}>
        <TabContents category={'item'} onChangeTab={setTabCategory} />
      </CustomTabPanel>
      <CustomTabPanel value={tabCategory} index={'material'}>
        <TabContents category={'material'} onChangeTab={setTabCategory}/>
      </CustomTabPanel>
      <CustomTabPanel value={tabCategory} index={'gift'}>
        <TabContents category={'gift'} onChangeTab={setTabCategory}/>
      </CustomTabPanel>
      <CustomTabPanel value={tabCategory} index={'alchemy'}>
        <TabContents category={'alchemy'} onChangeTab={setTabCategory}/>
      </CustomTabPanel>
      <CustomTabPanel value={tabCategory} index={'quest'}>
        <TabContents category={'quest'} onChangeTab={setTabCategory}/>
      </CustomTabPanel>
      <ButtonToClearLocalStorage/>
    </Box>
  );
}