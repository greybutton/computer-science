const simpleSearchString = (string, substring) => {
  const strLength = string.length;
  const subStrLength = substring.length;

  if (strLength === 0) {
    return 'string is empty';
  } else if (subStrLength === 0) {
    return 'substring is empty';
  }

  for (let indexStr = 0; indexStr < strLength; indexStr += 1) {
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

export default simpleSearchString;
