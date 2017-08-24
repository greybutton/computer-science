import Stack from './index';

describe('stack', () => {
  test('Stack is empty', () => {
    const stack = new Stack();
    const received = stack.isEmpty();
    const expected = true;
    expect(received).toEqual(expected);
  });
  test('Stack is not empty', () => {
    const stack = new Stack();
    stack.push(123);
    const received = stack.isEmpty();
    const expected = false;
    expect(received).toEqual(expected);
  });
  test('Stack push', () => {
    const stack = new Stack();
    const element = 123;
    const received = stack.push(element);
    const expected = [element, null, null, null, null];
    expect(received).toEqual(expected);
  });
  test('Stack pop', () => {
    const stack = new Stack();
    stack.push(123);
    stack.push(456);
    stack.push(789);
    const received = stack.pop();
    const expected = 789;
    expect(received).toEqual(expected);
  });
  test('Stack is underflow', () => {
    const stack = new Stack();
    const received = stack.pop();
    const expected = 'underflow';
    expect(received).toEqual(expected);
  });
  test('Stack is overflow', () => {
    const stack = new Stack();
    const element = 123;
    stack.push(element);
    stack.push(element);
    stack.push(element);
    stack.push(element);
    stack.push(element);
    const received = stack.push(element);
    const expected = 'overflow';
    expect(received).toEqual(expected);
  });
});
