import MaxHeap from './index';

describe('max heap', () => {
  test('is empty', () => {
    const heap = new MaxHeap();
    const received = heap.isEmpty();
    const expected = true;
    expect(received).toEqual(expected);
  });
  test('is not empty', () => {
    const heap = new MaxHeap([123]);
    const received = heap.isEmpty();
    const expected = false;
    expect(received).toEqual(expected);
  });
  test('get maximum should return underflow', () => {
    const maxHeap = new MaxHeap();
    const expected = 'underflow';
    const received = maxHeap.maximum();
    expect(received).toEqual(expected);
  });
  test('get maximum', () => {
    const heap = [17, 15, 13, 14, 12, 11, 8, 9, 1, 4, 2, 10];
    const maxHeap = new MaxHeap(heap);
    const expected = heap[0];
    const received = maxHeap.maximum();
    expect(received).toEqual(expected);
  });
  test('extract maximum should return underflow', () => {
    const maxHeap = new MaxHeap();
    const expected = 'underflow';
    const received = maxHeap.extractMax();
    expect(received).toEqual(expected);
  });
  test('extract maximum', () => {
    const heap = [17, 15, 13, 14, 12, 11, 8, 9, 1, 4, 2, 10];
    const maxHeap = new MaxHeap(heap);
    const expected = heap[0];
    const received = maxHeap.extractMax();
    expect(received).toEqual(expected);
  });
  test('increase key 10 to 5 should return error', () => {
    const heap = [17, 16, 13, 14, 15, 11, 8, 9, 1, 12, 2, 10];
    const maxHeap = new MaxHeap(heap);
    const expected = 'error';
    const received = maxHeap.increaseKey(12, 5);
    expect(received).toEqual(expected);
  });
  test('increase key 2 to 200', () => {
    const heap = [17, 16, 13, 14, 15, 11, 8, 9, 1, 12, 2, 10];
    const maxHeap = new MaxHeap(heap);
    const expected = [200, 17, 13, 14, 16, 11, 8, 9, 1, 12, 15, 10];
    const received = maxHeap.increaseKey(11, 200);
    expect(received).toEqual(expected);
  });
  test('insert 3', () => {
    const heap = [17, 16, 13, 14, 15, 11, 8, 9, 1, 12, 2, 10];
    const maxHeap = new MaxHeap(heap);
    const expected = [17, 16, 13, 14, 15, 11, 8, 9, 1, 12, 2, 10, 3];
    const received = maxHeap.insert(3);
    expect(received).toEqual(expected);
  });
  test('insert 30', () => {
    const heap = [17, 16, 13, 14, 15, 11, 8, 9, 1, 12, 2, 10];
    const maxHeap = new MaxHeap(heap);
    const expected = [30, 16, 17, 14, 15, 13, 8, 9, 1, 12, 2, 10, 11];
    const received = maxHeap.insert(30);
    expect(received).toEqual(expected);
  });
});
