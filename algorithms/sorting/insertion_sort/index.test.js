import insertionSort from './index';

describe('insertion sort', () => {
  const testList = {
    one: [123],
    simple: [5, 2, 4, 6, 1, 3],
    reverse: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    sorted: [1, 8, 4, 2, 3, 7, 5, 6, 9, 0],
    repeat: [10, 8, 2, 12, 5, 10],
    real: [0.63, 0.19, 0.46, 0.61, 0.85, 0.4, 0.6, 0.71, 0.41],
    realRepeat: [0.41, 0.19, 0.46, 0.61, 0.85, 0.4, 0.6, 0.71, 0.41],
    negative: [-5, 2, 4, 6, 1, 3],
    negativeRepeat: [-5, 2, 4, 1, 3, -5],
    words: ['aba', 'aaa', 'bbb'],
    wordsRepeat: ['aba', 'aaa', 'bbb', 'aba'],
  };
  const resultList = {
    one: [123],
    simple: [1, 2, 3, 4, 5, 6],
    reverse: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    sorted: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    repeat: [2, 5, 8, 10, 10, 12],
    real: [0.19, 0.4, 0.41, 0.46, 0.6, 0.61, 0.63, 0.71, 0.85],
    realRepeat: [0.19, 0.4, 0.41, 0.41, 0.46, 0.6, 0.61, 0.71, 0.85],
    negative: [-5, 1, 2, 3, 4, 6],
    negativeRepeat: [-5, -5, 1, 2, 3, 4],
    words: ['aaa', 'aba', 'bbb'],
    wordsRepeat: ['aaa', 'aba', 'aba', 'bbb'],
  };
  test(`One number [${testList.one}] should be [${resultList.one}]`, () => {
    const received = insertionSort(testList.one);
    const expected = resultList.one;
    expect(received).toEqual(expected);
  });
  test(`Simple array [${testList.simple}] should be [${resultList.simple}]`, () => {
    const received = insertionSort(testList.simple);
    const expected = resultList.simple;
    expect(received).toEqual(expected);
  });
  test(`Reverse array [${testList.reverse}] should be [${resultList.reverse}]`, () => {
    const received = insertionSort(testList.reverse);
    const expected = resultList.reverse;
    expect(received).toEqual(expected);
  });
  test(`Sorted array [${testList.sorted}] should be [${resultList.sorted}]`, () => {
    const received = insertionSort(testList.sorted);
    const expected = resultList.sorted;
    expect(received).toEqual(expected);
  });
  test(`Repeat number ${testList.repeat[0]} [${testList.repeat}] should be [${resultList.repeat}]`, () => {
    const received = insertionSort(testList.repeat);
    const expected = resultList.repeat;
    expect(received).toEqual(expected);
  });
  test(`Real numbers [${testList.real}] should be [${resultList.real}]`, () => {
    const received = insertionSort(testList.real);
    const expected = resultList.real;
    expect(received).toEqual(expected);
  });
  test(`Repeat real number ${testList.realRepeat[0]} [${testList.realRepeat}] should be [${resultList.realRepeat}]`, () => {
    const received = insertionSort(testList.realRepeat);
    const expected = resultList.realRepeat;
    expect(received).toEqual(expected);
  });
  test(`Negative number ${testList.negative[0]}  [${testList.negative}] should be [${resultList.negative}]`, () => {
    const received = insertionSort(testList.negative);
    const expected = resultList.negative;
    expect(received).toEqual(expected);
  });
  test(`Repeat negative number ${testList.negativeRepeat[0]} [${testList.negativeRepeat}] should be [${resultList.negativeRepeat}]`, () => {
    const received = insertionSort(testList.negativeRepeat);
    const expected = resultList.negativeRepeat;
    expect(received).toEqual(expected);
  });
  test(`Words array [${testList.words}] should be [${resultList.words}]`, () => {
    const received = insertionSort(testList.words);
    const expected = resultList.words;
    expect(received).toEqual(expected);
  });
  test(`Repeat word ${testList.wordsRepeat[0]} [${testList.wordsRepeat}] should be [${resultList.wordsRepeat}]`, () => {
    const received = insertionSort(testList.wordsRepeat);
    const expected = resultList.wordsRepeat;
    expect(received).toEqual(expected);
  });
});
