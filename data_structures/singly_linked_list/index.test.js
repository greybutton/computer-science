import SinglyLinkedList from './index';

describe('Singly linked list', () => {
  test('List is empty', () => {
    const list = new SinglyLinkedList();
    const received = list.isEmpty();
    const expected = true;
    expect(received).toEqual(expected);
  });
  test('List is not empty', () => {
    const list = new SinglyLinkedList();
    list.insert(123);
    const received = list.isEmpty();
    const expected = false;
    expect(received).toEqual(expected);
  });
  test('List insert in empty list', () => {
    const list = new SinglyLinkedList();
    const received = list.insert(123);
    const expected = { value: 123, next: null };
    expect(received).toEqual(expected);
  });
  test('List insert', () => {
    const list = new SinglyLinkedList();
    list.insert(123);
    const received = list.insert(456);
    const expected = { value: 456, next: { value: 123, next: null } };
    expect(received).toEqual(expected);
  });
  test('List search should return null', () => {
    const list = new SinglyLinkedList();
    const received = list.search(123);
    const expected = null;
    expect(received).toEqual(expected);
  });
  test('List search', () => {
    const list = new SinglyLinkedList();
    list.insert(123);
    list.insert(456);
    list.insert(789);
    const received = list.search(456);
    const expected = { value: 456, next: { value: 123, next: null } };
    expect(received).toEqual(expected);
  });
  test('List cannot delete because list is empty', () => {
    const list = new SinglyLinkedList();
    const received = list.delete();
    const expected = 'list is empty';
    expect(received).toEqual(expected);
  });
  test('List delete head', () => {
    const list = new SinglyLinkedList();
    list.insert(123);
    list.insert(456);
    list.insert(789);
    const received = list.delete(789);
    const expected = { value: 456, next: { value: 123, next: null } };
    expect(received).toEqual(expected);
  });
  test('List delete last', () => {
    const list = new SinglyLinkedList();
    list.insert(123);
    list.insert(456);
    list.insert(789);
    const received = list.delete(123);
    const expected = { value: 789, next: { value: 456, next: null } };
    expect(received).toEqual(expected);
  });
  test('List delete', () => {
    const list = new SinglyLinkedList();
    list.insert(123);
    list.insert(456);
    list.insert(789);
    const received = list.delete(456);
    const expected = { value: 789, next: { value: 123, next: null } };
    expect(received).toEqual(expected);
  });
});
