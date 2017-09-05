import binarySearch from './index';

describe('binary search', () => {
  const testList = {
    empty: [],
    oneNotFound: [123],
    one: [123],
    notFound: [1, 3, 4, 6, 7, 10, 12, 20],
    simple: [1, 3, 4, 6, 7, 10, 12, 20],
    repeat: [1, 3, 4, 6, 7, 10, 10, 12, 20],
    real: [0.19, 0.4, 0.41, 0.46, 0.6, 0.61, 0.63, 0.71, 0.85],
    realRepeat: [0.19, 0.4, 0.41, 0.41, 0.46, 0.6, 0.61, 0.71, 0.85],
  };
  const resultList = {
    empty: 'not found',
    oneNotFound: 'not found',
    one: 0,
    notFound: 'not found',
    simple: 3,
    repeat: 5,
    real: 3,
    realRepeat: 2,
  };
  test('empty array should return not found', () => {
    const array = testList.empty;
    const received = binarySearch(array, 15);
    const expected = resultList.empty;
    expect(received).toEqual(expected);
  });
  test('one number array should return not found', () => {
    const array = testList.oneNotFound;
    const received = binarySearch(array, 15);
    const expected = resultList.oneNotFound;
    expect(received).toEqual(expected);
  });
  test('one number array should find', () => {
    const array = testList.one;
    const received = binarySearch(array, testList.one[0]);
    const expected = resultList.one;
    expect(received).toEqual(expected);
  });
  test('simple array should return not found', () => {
    const array = testList.notFound;
    const received = binarySearch(array, 15);
    const expected = resultList.notFound;
    expect(received).toEqual(expected);
  });
  test('simple array should find', () => {
    const array = testList.simple;
    const received = binarySearch(array, 6);
    const expected = resultList.simple;
    expect(received).toEqual(expected);
  });
  test('repeat number 10 should find first', () => {
    const array = testList.repeat;
    const received = binarySearch(array, 10);
    const expected = resultList.repeat;
    expect(received).toEqual(expected);
  });
  test('real number array should find', () => {
    const array = testList.real;
    const received = binarySearch(array, 0.46);
    const expected = resultList.real;
    expect(received).toEqual(expected);
  });
  test('real number 0.41 should find first', () => {
    const array = testList.realRepeat;
    const received = binarySearch(array, 0.41);
    const expected = resultList.realRepeat;
    expect(received).toEqual(expected);
  });
});
