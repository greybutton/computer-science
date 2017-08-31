import BinaryHeap from './index';

describe('binary heap', () => {
  test('max heapify', () => {
    const array = [17, 4, 13, 14, 15, 11, 8, 9, 1, 12, 2, 10];
    const expected = [17, 15, 13, 14, 12, 11, 8, 9, 1, 4, 2, 10];
    const received = new BinaryHeap().maxHeapify(array, 1);
    expect(received).toEqual(expected);
  });
  test('build max heap', () => {
    const array = [10, 15, 5, 4, 12, 11, 8, 9, 1, 5, 30, 13];
    const expected = [30, 15, 13, 9, 12, 11, 8, 4, 1, 5, 10, 5];
    const received = new BinaryHeap().buildMaxHeap(array);
    expect(received).toEqual(expected);
  });
});
