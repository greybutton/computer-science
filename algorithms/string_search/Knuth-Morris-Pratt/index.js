const buildPref = (string) => {
  const strLength = string.length;
  const pref = [null, 0];
  let i = 1;
  let j = 0;
  while (i < strLength) {
    if (string[i] === string[j]) {
      pref[i + 1] = j + 1;
      i += 1;
      j += 1;
    } else if (j > 0) {
      j = pref[j];
    } else {
      pref[i + 1] = 0;
      i += 1;
    }
  }
  return pref;
};

const KnuthMorrisPrattSearchString = (string, substring) => {
  const strLength = string.length;
  const subStrLength = substring.length;

  if (strLength === 0) {
    return 'string is empty';
  } else if (subStrLength === 0) {
    return 'substring is empty';
  }

  const pref = buildPref(substring);
  let strIndex = 0;
  let subStrIndex = 0;
  while (strIndex < strLength && subStrIndex < subStrLength) {
    if (string[strIndex] === substring[subStrIndex]) {
      strIndex += 1;
      subStrIndex += 1;
    } else if (subStrIndex > 0) {
      subStrIndex = pref[subStrIndex];
    } else {
      strIndex += 1;
    }
  }
  if (subStrIndex === subStrLength) {
    return strIndex - subStrLength;
  }
  return null;
};

export default KnuthMorrisPrattSearchString;
