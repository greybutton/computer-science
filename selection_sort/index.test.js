import selectionSort from './index';

describe('selection sort', () => {
  const testList = [
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    [1, 8, 4, 2, 3, 7, 5, 6, 9, 0],
    [5, 2, 4, 6, 1, 3],
    [10, 8, 2, 12, 5, 10],
    [123],
  ];
  const resultList = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6],
    [2, 5, 8, 10, 10, 12],
    [123],
  ];
  test(`[${testList[0]}] should be [${resultList[0]}]`, () => {
    const received = selectionSort(testList[0], 0, testList[0].length);
    const expected = resultList[0];
    expect(received).toEqual(expected);
  });
  test(`[${testList[1]}] should be [${resultList[1]}]`, () => {
    const received = selectionSort(testList[1], 0, testList[1].length);
    const expected = resultList[1];
    expect(received).toEqual(expected);
  });
  test(`[${testList[2]}] should be [${resultList[2]}]`, () => {
    const received = selectionSort(testList[2], 0, testList[2].length);
    const expected = resultList[2];
    expect(received).toEqual(expected);
  });
  test(`[${testList[3]}] should be [${resultList[3]}]`, () => {
    const received = selectionSort(testList[3], 0, testList[3].length);
    const expected = resultList[3];
    expect(received).toEqual(expected);
  });
  test(`[${testList[4]}] should be [${resultList[4]}]`, () => {
    const received = selectionSort(testList[4], 0, testList[4].length);
    const expected = resultList[4];
    expect(received).toEqual(expected);
  });
});
