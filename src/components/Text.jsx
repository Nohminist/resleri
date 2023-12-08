import React, { useMemo } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { mainBackgroundColor, checkColor, mainColor } from '../utils/commonStyle';


const originalNameStyle = {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'gray'
}
const subNameStyle = {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'gray'
}
export function CharaNameText({ text }) {
  const [originalName, subName] = text.split(/[-(]/);
  return (
    <>
      <span style={originalNameStyle} >
        {originalName}
      </span>
      <span style={subNameStyle}>
        {text.substring(originalName.length)}
      </span>
    </>
  );
}

export function TextskillEqName(props) {
  const { text } = props
  return (
    <Typography
      sx={{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray'
      }}>
      {text}
    </Typography>
  )
}


export const TextCharNameForTooltip = ({ text }) => {
  return (
    <div>
      <div>
        {text.split('_')[0]}
      </div>
      <div>
        {'【' + text.split('_')[1] + '】'}
      </div>
    </div>
  )
}

const redTextStyle = { color: 'pink' };
const orangeTextStyle = { color: checkColor };

// export const TextBr = ({ text, name, checkedTexts = [] }) => {
//   const regexRed = /\[red\](.*?)\[\/red\]/g;

//   let elementIndex = 0;

//   const parseLine = (line) => {
//     let lastIndex = 0;
//     const elements = [];
//     let matchRed, matchChecked;

//     const addSubstring = (endIndex, style = null) => {
//       if (endIndex > lastIndex) {
//         const substring = line.substring(lastIndex, endIndex);
//         elements.push(style ? <span key={elementIndex++} style={style}>{substring}</span> : substring);
//       }
//     };

//     while ((matchRed = regexRed.exec(line)) || (matchChecked = findCheckedMatch(line, lastIndex))) {
//       if (matchRed && (!matchChecked || matchRed.index < matchChecked.index)) {
//         addSubstring(matchRed.index);
//         elements.push(<span key={elementIndex++} style={redTextStyle}>{line.substring(matchRed.index + 5, matchRed.index + matchRed[0].length - 6)}</span>); // [red]と[/red]のタグを除外
//         lastIndex = regexRed.lastIndex;
//       } else if (matchChecked) {
//         addSubstring(matchChecked.index);
//         elements.push(<span key={elementIndex++} style={orangeTextStyle}>{matchChecked[0]}</span>);
//         lastIndex = matchChecked.index + matchChecked.length; // マッチしたテキストの長さを使用
//       }
//     }

//     addSubstring(line.length); // add the remaining text, if any
//     return elements;
//   };

//   const findCheckedMatch = (line, fromIndex) => {
//     for (let text of checkedTexts) {
//       const matchStart = line.toLowerCase().indexOf(text.toLowerCase(), fromIndex);
//       if (matchStart !== -1) {
//         return {
//           index: matchStart,
//           0: line.substring(matchStart, matchStart + text.length), // マッチしたテキストを返す
//           length: text.length, // マッチしたテキストの長さも返す
//         };
//       }
//     }
//     return null;
//   };

//   const parsedText = useMemo(() => {
//     if (!text) {
//       return null;
//     }

//     return text.split(/(\n)/).map((line, index) => {
//       if (line === '\n') {
//         return <br key={index} />;
//       } else {
//         return <React.Fragment key={index}>{parseLine(line)}</React.Fragment>;
//       }
//     });
//   }, [text, checkedTexts]);

//   return <>{parsedText}</>;
// };

// export const TextBr = ({ text }) => {
//   if (!text) {
//     return null; // テキストがない場合、何もレンダリングしません。
//   }

//   const lines = text.split('\n').map((line, index, arr) => (
//     <React.Fragment key={index}>
//       {line}
//       {index < arr.length - 1 && <br />}
//     </React.Fragment>
//   ));

//   return <>{lines}</>;
// };

// export const TextBr = ({ text, checkedTexts = [] }) => {
//   if (!text) {
//     return null;
//   }

//   const coloring = (line) => {
//     const parts = [];
//     let lastIndex = 0;

//     checkedTexts.forEach(keyword => {
//       const index = line.toLowerCase().indexOf(keyword.toLowerCase());
//       if (index !== -1) {
//         if (index > lastIndex) {
//           parts.push(<span key={lastIndex}>{line.substring(lastIndex, index)}</span>);
//         }
//         parts.push(
//           <span key={index} style={{color:checkColor}}>
//             {line.substring(index, index + keyword.length)}
//           </span>
//         );
//         lastIndex = index + keyword.length;
//       }
//     });

//     if (lastIndex < line.length) {
//       parts.push(<span key={lastIndex}>{line.substring(lastIndex)}</span>);
//     }

//     return <>{parts}</>;
//   };

//   const lines = text.split('\n').map((line, index, arr) => (
//     <React.Fragment key={index}>
//       {coloring(line)}
//       <br />
//     </React.Fragment>
//   ));

//   return <>{lines}</>;
// };

export const TextBr = ({ text, checkedTexts = [] }) => {
  if (!text) {
    return null;
  }

  const coloring = (line) => {
    const parts = [];
    let lastIndex = 0;
    let remainingCheckedTexts = [...checkedTexts];

    while (remainingCheckedTexts.length > 0) {
      const keyword = remainingCheckedTexts[0]; // 先頭のキーワードを取得
      const index = line.toLowerCase().indexOf(keyword.toLowerCase(), lastIndex);

      if (index !== -1) {
        if (index > lastIndex) {
          parts.push(<span key={lastIndex}>{line.substring(lastIndex, index)}</span>);
        }
        parts.push(
          <span key={index} style={{ color: checkColor }}>
            {line.substring(index, index + keyword.length)}
          </span>
        );
        lastIndex = index + keyword.length;
        remainingCheckedTexts.shift(); // 一致が見つかった場合のみキーワードを削除
      } else {
        break; // 一致が見つからなかった場合、ループを終了
      }
    }

    if (lastIndex < line.length) {
      parts.push(<span key={lastIndex}>{line.substring(lastIndex)}</span>);
    }

    return <>{parts}</>;
  };

  const lines = text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {coloring(line)}
      <br />
    </React.Fragment>
  ));

  return <>{lines}</>;
};


export function TextTlntTxt(props) {
  const { text } = props
  // console.log(text)
  return (
    text.map((texts, i) => {
      return (
        <div key={i}>
          {texts.map((text, i) => {
            return (
              text.includes(',') ?
                <span key={i} style={{ fontWeight: 'bold', color: 'blue' }}>{text}</span>
                :
                <span key={i}>{text}</span>
            );
          })}
        </div>
      );
    })
  );
}




export function TextCost({ cost }) {
  return (
    <div style={{ color: 'limegreen' }}>
      {cost === 1 ? '◆' :
        cost === 2 ? '◆◆' : ''}
    </div>
  )
}


export function TextCoolTime({ coolTime }) {
  return coolTime === 0 ? '-' : coolTime;
}

export function TextArea({ area, type }) {
  return type === 'passive' ? '-' :
    area === 0 ? '単' :
      (area * 10) % 10 === 1 ? '周' + Math.floor(area) :
        (area * 10) % 10 === 2 ? '直' + Math.floor(area) :
          area >= 10 ? '全' : area
}

export function TextRange({ range, type }) {
  return type === 'passive' ? '-' :
    range === 0 ? '自' : range
}

export function TextRv({ text }) {
  return (
    <span
      style={{
        color: mainColor,
        backgroundColor: 'darkgray',
        borderRadius: 2,
        fontSize: 14,
        paddingLeft: 2,
        paddingRight: 2,
      }}
    >
      {text}
    </span>
  )
}

export function TextOrange(props) {
  const { text } = props
  return (
    <span style={{ color: mainColor, backgroundColor: checkColor, borderRadius: 2 }} >
      &nbsp;{text}&nbsp;
    </span>
  )
}

export function TextGray(props) {
  const { text } = props
  return (
    <span style={{ color: mainColor, backgroundColor: 'darkgray', borderRadius: 2 }} >
      &nbsp;{text}&nbsp;
    </span>
  )
}

export const AlignedText = ({ text }) => {
  // 文字列を分割する
  const splitIndex = text.indexOf('[');
  const hasBracket = splitIndex !== -1; // '['が含まれているかをチェック

  let leftText = text;
  let rightText = '';
  if (hasBracket) {
    leftText = text.substring(0, splitIndex);
    rightText = text.substring(splitIndex);
  }

  // スタイル
  const containerStyle = {
    display: 'flex', // Flexboxを使用して内部要素を横に並べる
    justifyContent: hasBracket ? 'space-between' : 'flex-start', // '['がある場合はspace-between, ない場合はflex-start
    width: '100%', // 必要に応じてコンテナの幅を調整
  };

  return (
    <div style={containerStyle}>
      <span>{leftText}</span>
      {hasBracket && <span>{rightText}</span>}
    </div>
  );
}


export const TextOnBothEnds = ({ text }) => {
  // 文字列を分割する
  const splitIndex = text.indexOf(',');
  const hasComma = splitIndex !== -1; // ','が含まれているかをチェック

  let leftText = text;
  let rightText = '';
  if (hasComma) {
    leftText = text.substring(0, splitIndex); // 最初の','までの文字列
    rightText = text.substring(splitIndex + 1); // 最初の','の後の文字列
  }

  // スタイル
  const containerStyle = {
    display: 'flex', // Flexboxを使用して内部要素を横に並べる
    justifyContent: hasComma ? 'space-between' : 'flex-start', // ','がある場合はspace-between, ない場合はflex-start
    width: '100%', // 必要に応じてコンテナの幅を調整
  };

  return (
    <div style={containerStyle}>
      <span style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>
        {leftText}
      </span>
      {hasComma && <span>{rightText}</span>}
    </div>
  );
}
