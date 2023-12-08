
//浮動小数を考慮した切捨て。デフォルト4桁で四捨五入
export const preciseFloor = (value, decimalPlaces = 4) => {
  const factor = Math.pow(10, decimalPlaces);
  return Math.floor(Math.round(value * factor) / factor);
}



//arrのいずれかにtargetが含まれていればtrue
export const IsSomeIncludeTargetInArray = (arr, target) => {
  return arr.some(el => el.includes(target));
}

//arrのいずれかがtargetに含まれていればture
export function IsSomeIncludeArrInTarget(arr, target) {
  return arr.some(el => target.includes(el))
}




//arryのいずれかにtargetが含まれている最初の要素を返す
export const findElementIncludesTargetInArray = (texts, targetText) => {
  return texts.find(text => text.includes(targetText));
}

//arryのいずれかにtargetが含まれている全ての要素を返す
export const filterElementsIncludesTargetInArray = (texts, targetText) => {
  return texts.filter(text => text.includes(targetText));
}


//arrAのいずれかの要素が、arrBのいずれかの要素と一致すればtrue
export function isAnyMatch(arrA, arrB) {
  return arrA.some((el) => arrB.includes(el));
}

// arrA の全ての要素が、arrB のいずれかの要素に一致すれば true
export function isAllMatch(arrA, arrB) {
  return arrA.every((el) => arrB.includes(el));
}

//「arrAの各要素がarrBに存在する数」が設定個数以上あればtrue
export const isAtLeastMultipleMatches = (arrA, arrB, threshold = 2) => {
  // console.log(arrA, arrB, threshold)
  let count = 0;
  for (let el of arrA) {
    
    let occurrenceCount = arrB.filter(item => item === el).length;
    count += occurrenceCount;
    if (count >= threshold) {
      return true;
    }
  }
  return false;
}

//「arrAの各要素がarrBに存在し、かつ色が合っている数」が設定個数以上あればtrue
export const isAtLeastMultipleAndColorMatches = (arrA, arrB, threshold , char1Matched , char2Matched ) => {
  // console.log(arrA, arrB, threshold)
  let count = 0;
  for (let el of arrA) {
    
    let occurrenceCount = arrB.filter(item => item === el).length;
    count += occurrenceCount;
    if (count >= threshold) {
      return true;
    }
  }
  return false;
}





//数値を0～100に収める
export function clampBetween0And100(value) {
  return Math.min(Math.max(value, 0), 100);
}


export function ValueToString(value) {
  return value < 0 ? String(value) : `+${value}`;
}


export function TextToValue(text) {
  return Number(text.split(/[+-]/)[1].split('%')[0]);
}





