const BoyerMooreSearchString = (string, substring) => {
  const strLength = string.length;
  const subStrLength = substring.length;

  if (strLength === 0) {
    return 'string is empty';
  } else if (subStrLength === 0) {
    return 'substring is empty';
  }

  // The Bad Character Rule

  const tableBadChar = [];
  for (let i = 0; i < strLength - 1; i += 1) {
    tableBadChar[string[i]] = i;
  }

  let positionInText = 0;
  while (positionInText <= strLength - subStrLength) {
    let checkSymbol = subStrLength - 1;
    while (string[positionInText + checkSymbol] === substring[checkSymbol]) {
      checkSymbol -= 1;
      if (checkSymbol < 0) {
        return positionInText;
      }
    }
    positionInText += Math.max(checkSymbol - tableBadChar[string[positionInText + checkSymbol]], 1);
  }

  return null;
};

export default BoyerMooreSearchString;
