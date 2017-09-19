const hash = (string) => {
  const primeNumber = 5;
  let i = 0;
  const iter = (letter, res) => {
    if (i === string.length - 1) {
      return res;
    }
    i += 1;
    letter = string[i];
    res = (res * 2 + letter.charCodeAt() - 97) % primeNumber;
    return iter(letter, res);
  };

  return iter(string[i], string.charCodeAt(0) - 97);
};

const buildHT = (string, substring) => {
  const strLength = string.length;
  const subStrLength = substring.length;
  const HT = new Array(strLength).fill(null).map((el, index) => {
    if (index === 0) {
      return hash(string.slice(index, subStrLength));
    }
    return hash(string.slice(index, index + subStrLength));
  });
  return HT;
};

const RabinKarpSearchString = (string, substring) => {
  const strLength = string.length;
  const subStrLength = substring.length;

  if (strLength === 0) {
    return 'string is empty';
  } else if (subStrLength === 0) {
    return 'substring is empty';
  }

  const H = hash(substring);
  const HT = buildHT(string, substring);

  for (let indexStr = 0; indexStr < strLength; indexStr += 1) {
    if (HT[indexStr] !== H) {
      continue;
    }
    let ok = true;
    for (let indexSubStr = 0; indexSubStr < subStrLength; indexSubStr += 1) {
      if (string[indexStr + indexSubStr] !== substring[indexSubStr]) {
        ok = false;
        break;
      }
    }
    if (ok) {
      return indexStr;
    }
  }
  return null;
};

export default RabinKarpSearchString;
