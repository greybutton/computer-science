import radixSort from './index';

describe('radix sort', () => {
  const testList = {
    three: ['BAR', 'BOX', 'BIG', 'ROW', 'EAR', 'RUG', 'COW', 'TAR', 'TAN'],
    threeTwoNotAlphabet: ['BAR', 'BOX', 'BIG', 'ROW', 'EAR', 'RUG', 'COW', 'TAR', 'TA'],
    threeTwoOneNotAlphabet: ['BAR', 'BOX', 'BIG', 'ROW', 'EAR', 'RUG', 'COW', 'TAR', 'TA', 'T'],
    threeTwoAlphabet: ['TA', 'BAR', 'BOX', 'BIG', 'ROW', 'EAR', 'RUG', 'COW', 'TAR'],
    threeTwoOneAlphabet: ['T', 'TA', 'BAR', 'BOX', 'BIG', 'ROW', 'EAR', 'RUG', 'COW', 'TAR'],
    words: ['aba', 'aaa', 'bbb'],
    wordsRepeat: ['aba', 'aaa', 'bbb', 'aba'],
  };
  const resultList = {
    three: ['BAR', 'BIG', 'BOX', 'COW', 'EAR', 'ROW', 'RUG', 'TAN', 'TAR'],
    threeTwoNotAlphabet: ['BAR', 'BIG', 'BOX', 'COW', 'EAR', 'ROW', 'RUG', 'TAR', 'TA'],
    threeTwoOneNotAlphabet: ['BAR', 'BIG', 'BOX', 'COW', 'EAR', 'ROW', 'RUG', 'TAR', 'TA', 'T'],
    threeTwoAlphabet: ['BAR', 'BIG', 'BOX', 'COW', 'EAR', 'ROW', 'RUG', 'TA', 'TAR'],
    threeTwoOneAlphabet: ['BAR', 'BIG', 'BOX', 'COW', 'EAR', 'ROW', 'RUG', 'T', 'TA', 'TAR'],
    words: ['aaa', 'aba', 'bbb'],
    wordsRepeat: ['aaa', 'aba', 'aba', 'bbb'],
  };
  test(`Three letters words [${testList.three}] should be [${resultList.three}]`, () => {
    const received = radixSort(testList.three, 3);
    const expected = resultList.three;
    expect(received).toEqual(expected);
  });
  test(`Not alphabet. Three letters words and one word with two letters '${testList.threeTwoNotAlphabet[testList.threeTwoNotAlphabet.length - 1]}' [${testList.threeTwoNotAlphabet}] should be [${resultList.threeTwoNotAlphabet}]`, () => {
    const received = radixSort(testList.threeTwoNotAlphabet, 3);
    const expected = resultList.threeTwoNotAlphabet;
    expect(received).toEqual(expected);
  });
  test(`Not alphabet. Three letters words, one word with two letters '${testList.threeTwoOneNotAlphabet[testList.threeTwoOneNotAlphabet.length - 2]}' and one letter word '${testList.threeTwoOneNotAlphabet[testList.threeTwoOneNotAlphabet.length - 1]}' [${testList.threeTwoOneNotAlphabet}] should be [${resultList.threeTwoOneNotAlphabet}]`, () => {
    const received = radixSort(testList.threeTwoOneNotAlphabet, 3);
    const expected = resultList.threeTwoOneNotAlphabet;
    expect(received).toEqual(expected);
  });
  test(`Alphabet. Three letters words and one word with two letters '${testList.threeTwoAlphabet[0]}' [${testList.threeTwoAlphabet}] should be [${resultList.threeTwoAlphabet}]`, () => {
    const received = radixSort(testList.threeTwoAlphabet, 3);
    const expected = resultList.threeTwoAlphabet;
    expect(received).toEqual(expected);
  });
  test(`Alphabet. Three letters words, one word with two letters '${testList.threeTwoOneAlphabet[1]}' and one letter word '${testList.threeTwoOneAlphabet[0]}' [${testList.threeTwoOneAlphabet}] should be [${resultList.threeTwoOneAlphabet}]`, () => {
    const received = radixSort(testList.threeTwoOneAlphabet, 3);
    const expected = resultList.threeTwoOneAlphabet;
    expect(received).toEqual(expected);
  });
  test(`Words array [${testList.words}] should be [${resultList.words}]`, () => {
    const received = radixSort(testList.words, 3);
    const expected = resultList.words;
    expect(received).toEqual(expected);
  });
  test(`Repeat word ${testList.wordsRepeat[0]} [${testList.wordsRepeat}] should be [${resultList.wordsRepeat}]`, () => {
    const received = radixSort(testList.wordsRepeat, 3);
    const expected = resultList.wordsRepeat;
    expect(received).toEqual(expected);
  });
  // const testList = [
  //   ['BAR', 'BOX', 'BIG', 'ROW', 'EAR', 'RUG', 'COW', 'TAR', 'TAN'],
  //   ['BAR', 'BOX', 'BIG', 'ROW', 'EAR', 'RUG', 'COW', 'TAR', 'TA'],
  //   ['BAR', 'BOX', 'BIG', 'ROW', 'EAR', 'RUG', 'COW', 'TAR', 'TA', 'T'],
  // ];
  // const resultList = [
  //   ['BAR', 'BIG', 'BOX', 'COW', 'EAR', 'ROW', 'RUG', 'TAN', 'TAR'],
  //   ['BAR', 'BIG', 'BOX', 'COW', 'EAR', 'ROW', 'RUG', 'TAR', 'TA'],
  //   ['BAR', 'BIG', 'BOX', 'COW', 'EAR', 'ROW', 'RUG', 'TAR', 'TA', 'T'],
  // ];
  // test(`[${testList[0]}] should be [${resultList[0]}]`, () => {
  //   const received = radixSort(testList[0], 3);
  //   const expected = resultList[0];
  //   expect(received).toEqual(expected);
  // });
  // test(`[${testList[1]}] should be [${resultList[1]}]`, () => {
  //   const received = radixSort(testList[1], 3);
  //   const expected = resultList[1];
  //   expect(received).toEqual(expected);
  // });
  // test(`[${testList[2]}] should be [${resultList[2]}]`, () => {
  //   const received = radixSort(testList[2], 3);
  //   const expected = resultList[2];
  //   expect(received).toEqual(expected);
  // });
});
