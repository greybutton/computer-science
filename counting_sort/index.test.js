import countingSort from './index';

describe('counting sort', () => {
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
    real: [],
    realRepeat: [],
    negative: [],
    negativeRepeat: [],
    words: [],
    wordsRepeat: [],
  };
  test(`One number [${testList.one}] should be [${resultList.one}]`, () => {
    const received = countingSort(testList.one);
    const expected = resultList.one;
    expect(received).toEqual(expected);
  });
  test(`Simple array [${testList.simple}] should be [${resultList.simple}]`, () => {
    const received = countingSort(testList.simple);
    const expected = resultList.simple;
    expect(received).toEqual(expected);
  });
  test(`Reverse array [${testList.reverse}] should be [${resultList.reverse}]`, () => {
    const received = countingSort(testList.reverse);
    const expected = resultList.reverse;
    expect(received).toEqual(expected);
  });
  test(`Sorted array [${testList.sorted}] should be [${resultList.sorted}]`, () => {
    const received = countingSort(testList.sorted);
    const expected = resultList.sorted;
    expect(received).toEqual(expected);
  });
  test(`Repeat number ${testList.repeat[0]} [${testList.repeat}] should be [${resultList.repeat}]`, () => {
    const received = countingSort(testList.repeat);
    const expected = resultList.repeat;
    expect(received).toEqual(expected);
  });
  test(`Real numbers [${testList.real}] should be [${resultList.real}]`, () => {
    const received = countingSort(testList.real);
    const expected = resultList.real;
    expect(received).toEqual(expected);
  });
  test(`Repeat real number ${testList.realRepeat[0]} [${testList.realRepeat}] should be [${resultList.realRepeat}]`, () => {
    const received = countingSort(testList.realRepeat);
    const expected = resultList.realRepeat;
    expect(received).toEqual(expected);
  });
  test(`Negative number ${testList.negative[0]}  [${testList.negative}] should be [${resultList.negative}]`, () => {
    const received = countingSort(testList.negative);
    const expected = resultList.negative;
    expect(received).toEqual(expected);
  });
  test(`Repeat negative number ${testList.negativeRepeat[0]} [${testList.negativeRepeat}] should be [${resultList.negativeRepeat}]`, () => {
    const received = countingSort(testList.negativeRepeat);
    const expected = resultList.negativeRepeat;
    expect(received).toEqual(expected);
  });
  test(`Words array [${testList.words}] should be [${resultList.words}]`, () => {
    const received = countingSort(testList.words);
    const expected = resultList.words;
    expect(received).toEqual(expected);
  });
  test(`Repeat word ${testList.wordsRepeat[0]} [${testList.wordsRepeat}] should be [${resultList.wordsRepeat}]`, () => {
    const received = countingSort(testList.wordsRepeat);
    const expected = resultList.wordsRepeat;
    expect(received).toEqual(expected);
  });


  // const testList = [
  //   [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  //   [1, 8, 4, 2, 3, 7, 5, 6, 9, 0],
  //   [5, 2, 4, 6, 1, 3],
  //   [10, 8, 2, 12, 5, 10],
  //   [123],
  //   [0.63, 0.19, 0.46, 0.61, 0.85, 0.4, 0.6, 0.71, 0.41],
  //   [0.41, 0.19, 0.46, 0.61, 0.85, 0.4, 0.6, 0.71, 0.41],
  //   [-5, 2, 4, 6, 1, 3],
  //   [-5, 2, 4, 1, 3, -5],
  // ];
  // const resultList = [
  //   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  //   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  //   [1, 2, 3, 4, 5, 6],
  //   [2, 5, 8, 10, 10, 12],
  //   [123],
  //   [],
  //   [],
  //   [1, 2, 3, 4, 6],
  //   [1, 2, 3, 4],
  // ];
  // test(`Reverse array [${testList[0]}] should be [${resultList[0]}]`, () => {
  //   const received = countingSort(testList[0]);
  //   const expected = resultList[0];
  //   expect(received).toEqual(expected);
  // });
  // test(`Sorted array [${testList[1]}] should be [${resultList[1]}]`, () => {
  //   const received = countingSort(testList[1]);
  //   const expected = resultList[1];
  //   expect(received).toEqual(expected);
  // });
  // test(`[${testList[2]}] should be [${resultList[2]}]`, () => {
  //   const received = countingSort(testList[2]);
  //   const expected = resultList[2];
  //   expect(received).toEqual(expected);
  // });
  // test(`Repeat number ${testList[3][0]} [${testList[3]}] should be [${resultList[3]}]`, () => {
  //   const received = countingSort(testList[3]);
  //   const expected = resultList[3];
  //   expect(received).toEqual(expected);
  // });
  // test(`One number [${testList[4]}] should be [${resultList[4]}]`, () => {
  //   const received = countingSort(testList[4]);
  //   const expected = resultList[4];
  //   expect(received).toEqual(expected);
  // });
  // test(`Real numbers [${testList[5]}] should be [${resultList[5]}]`, () => {
  //   const received = countingSort(testList[5]);
  //   const expected = resultList[5];
  //   expect(received).toEqual(expected);
  // });
  // test(`Repeat real number ${testList[6][0]} [${testList[6]}] should be [${resultList[6]}]`, () => {
  //   const received = countingSort(testList[6]);
  //   const expected = resultList[6];
  //   expect(received).toEqual(expected);
  // });
  // test(`Negative number ${testList[7][0]}  [${testList[7]}] should be [${resultList[7]}]`, () => {
  //   const received = countingSort(testList[7]);
  //   const expected = resultList[7];
  //   expect(received).toEqual(expected);
  // });
  // test(`Repeat negative number ${testList[8][0]} [${testList[8]}] should be [${resultList[8]}]`, () => {
  //   const received = countingSort(testList[8]);
  //   const expected = resultList[8];
  //   expect(received).toEqual(expected);
  // });
});
