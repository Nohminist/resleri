import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';


import TopTabs from './components/TopTabs';
import { mainBackgroundColor, mainColor } from './utils/commonStyle';



const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: mainColor,
    },
    background: {
      default: mainBackgroundColor,
    },
    text: {
      primary: mainColor,
    },
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: 'rgba(51, 57, 68, 0.9)', //25%暗く
        },
      },
    },
  },
});

const styles = {
  footer: {
    padding: '4px 4px',
    borderTop: '1px solid #e7e7e7',
    textAlign: 'right',
    lineHeight: 1,
    color: mainColor,
  }
}
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>画像の著作権は©コーエーテクモゲームス / Akatsuki Games Inc.に帰属します。</div>
      <div>©KOEI TECMO GAMES / Akatsuki Games Inc. All rights reserved. </div>
      <a href="https://twitter.com/nohmin2" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>
        <TwitterIcon style={{ color: '#1DA1F2', verticalAlign: 'middle' }} />
      </a>
    </footer>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: mainBackgroundColor, minHeight: '100vh', color: mainColor }}>
        <div style={{ paddingLeft: '4px', fontSize: '14px' }}>
          ・2023/12/4_ライザの挑戦状Lv4まで反映
        </div>
        <TopTabs />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
