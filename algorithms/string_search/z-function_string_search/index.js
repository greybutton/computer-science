const zFunction = (string, substring) => {
  const concatString = `${substring}#${string}`;
  const concatStrLength = concatString.length;
  const strLength = string.length;
  const subStrLength = substring.length;

  if (strLength === 0) {
    return 'string is empty';
  } else if (subStrLength === 0) {
    return 'substring is empty';
  }

  const z = [null];
  let left = 0;
  let right = 0;
  let subStrIndex = 0;
  for (let strIndex = 1; strIndex < concatStrLength; strIndex += 1) {
    if (strIndex >= right) {
      subStrIndex = 0;
      while (
        strIndex + subStrIndex < concatStrLength &&
        concatString[strIndex + subStrIndex] === concatString[subStrIndex]
      ) {
        subStrIndex += 1;
      }
      left = strIndex;
      right = strIndex + subStrIndex;
      z[strIndex] = subStrIndex;
      if (subStrIndex === subStrLength) {
        return strIndex - subStrLength - 1;
      }
    } else if (z[strIndex - left] < right - strIndex) {
      z[strIndex] = z[strIndex - left];
    } else {
      subStrIndex = right - strIndex;
      while (
        strIndex + subStrIndex < concatStrLength &&
        concatString[strIndex + subStrIndex] === concatString[subStrIndex]
      ) {
        subStrIndex += 1;
      }
      left = strIndex;
      right = strIndex + subStrIndex;
      z[strIndex] = subStrIndex;
      if (subStrIndex === subStrLength) {
        return strIndex - subStrLength - 1;
      }
    }
  }
  return null;
};

export default zFunction;
