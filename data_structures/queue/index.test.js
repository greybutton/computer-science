import Queue from './index';

describe('queue', () => {
  test('Queue is empty', () => {
    const queue = new Queue();
    const received = queue.isEmpty();
    const expected = true;
    expect(received).toEqual(expected);
  });
  test('Queue is not empty', () => {
    const queue = new Queue();
    queue.enqueue(123);
    const received = queue.isEmpty();
    const expected = false;
    expect(received).toEqual(expected);
  });
  test('Queue enqueue', () => {
    const queue = new Queue();
    const element = 123;
    const received = queue.enqueue(element);
    const expected = [element, null, null, null, null];
    expect(received).toEqual(expected);
  });
  test('Queue dequeue', () => {
    const queue = new Queue();
    const element = 123;
    queue.enqueue(element);
    queue.enqueue(element);
    queue.enqueue(element);
    const received = queue.dequeue();
    const expected = element;
    expect(received).toEqual(expected);
  });
  test('Queue is underflow', () => {
    const queue = new Queue();
    const received = queue.dequeue();
    const expected = 'underflow';
    expect(received).toEqual(expected);
  });
  test('Queue is overflow', () => {
    const queue = new Queue();
    const element = 123;
    queue.enqueue(element);
    queue.enqueue(element);
    queue.enqueue(element);
    queue.enqueue(element);
    queue.enqueue(element);
    const received = queue.enqueue(element);
    const expected = 'overflow';
    expect(received).toEqual(expected);
  });
  test('should set tail equal zero', () => {
    const queue = new Queue();
    const element = 123;
    queue.enqueue(element);
    queue.enqueue(element);
    queue.enqueue(element);
    queue.enqueue(element);
    queue.enqueue(element);
    queue.dequeue();
    const received = queue.enqueue(456);
    const expected = [456, element, element, element, element];
    expect(received).toEqual(expected);
  });
  test('should set head equal zero', () => {
    const queue = new Queue();
    const element = 123;
    queue.enqueue(element);
    queue.enqueue(element);
    queue.enqueue(element);
    queue.enqueue(element);
    queue.enqueue(element);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.enqueue(456);
    const received = queue.dequeue();
    const expected = 456;
    expect(received).toEqual(expected);
  });
});
