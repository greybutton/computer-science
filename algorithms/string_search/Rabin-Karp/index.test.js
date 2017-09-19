import RabinKarpSearchString from './index';

describe('Rabin-Karp search string', () => {
  const testStringList = {
    emptyString: '',
    string: 'PROGRAMMING',
    badString: 'AAAAAAAB',
  };
  const testSubStringList = {
    emptySubString: '',
    beginSubString: 'PRO',
    midSubString: 'RAM',
    endSubString: 'ING',
    badSubString: 'AAB',
    numberSubString: '123',
  };
  const resultList = {
    empty: 'string is empty',
    subempty: 'substring is empty',
    beginSubString: 0,
    midSubString: 4,
    endSubString: 8,
    badString: 5,
    numberSubString: null,
  };
  test('should return string is empty', () => {
    const received = RabinKarpSearchString(
      testStringList.emptyString,
      testSubStringList.emptySubString,
    );
    const expected = resultList.empty;
    expect(received).toEqual(expected);
  });
  test('should return substring is empty', () => {
    const received = RabinKarpSearchString(testStringList.string, testSubStringList.emptySubString);
    const expected = resultList.subempty;
    expect(received).toEqual(expected);
  });
  test('begin substring should return 0', () => {
    const received = RabinKarpSearchString(testStringList.string, testSubStringList.beginSubString);
    const expected = resultList.beginSubString;
    expect(received).toEqual(expected);
  });
  test('middle substring should return 4', () => {
    const received = RabinKarpSearchString(testStringList.string, testSubStringList.midSubString);
    const expected = resultList.midSubString;
    expect(received).toEqual(expected);
  });
  test('end substring should return 8', () => {
    const received = RabinKarpSearchString(testStringList.string, testSubStringList.endSubString);
    const expected = resultList.endSubString;
    expect(received).toEqual(expected);
  });
  test('bad string should return 5', () => {
    const received = RabinKarpSearchString(
      testStringList.badString,
      testSubStringList.badSubString,
    );
    const expected = resultList.badString;
    expect(received).toEqual(expected);
  });
  test('should return null', () => {
    const received = RabinKarpSearchString(
      testStringList.string,
      testSubStringList.numberSubString,
    );
    const expected = resultList.numberSubString;
    expect(received).toEqual(expected);
  });
});
