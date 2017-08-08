import plusTwo from './index';

describe('test', () => {
  test('plus two', () => {
    const received = plusTwo(2);
    const expected = 4;
    expect(received).toEqual(expected);
  });
});
