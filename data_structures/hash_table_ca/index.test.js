import HashTable from './index';

describe('hash table closed addressing (open hashing) separate chaining with linked lists', () => {
  describe('insert', () => {
    test('should return NaN', () => {
      const HT = new HashTable();
      const received = HT.insert('string');
      const expected = NaN;
      expect(received).toEqual(expected);
    });
    test('is valid', () => {
      const HT = new HashTable();
      HT.insert(16);
      HT.insert(11);
      HT.insert(27);
      HT.insert(19);
      HT.insert(22);
      HT.insert(6);
      const received = HT.get();
      const object1 = { value: 16, next: null };
      const object2 = { value: 19, next: { value: 27, next: { value: 11, next: null } } };
      const object3 = { value: 6, next: { value: 22, next: null } };
      const expected = [object1, object2, object3];
      expect(received).toEqual(expect.arrayContaining(expected));
    });
  });
  describe('search', () => {
    test('should return NaN', () => {
      const HT = new HashTable();
      const received = HT.search('string');
      const expected = NaN;
      expect(received).toEqual(expected);
    });
    test('should return null', () => {
      const HT = new HashTable();
      HT.insert(16);
      HT.insert(11);
      HT.insert(27);
      HT.insert(19);
      HT.insert(22);
      HT.insert(6);
      const received = HT.search(100);
      const expected = null;
      expect(received).toEqual(expected);
    });
    test('is valid', () => {
      const HT = new HashTable();
      HT.insert(16);
      HT.insert(11);
      HT.insert(27);
      HT.insert(19);
      HT.insert(22);
      HT.insert(6);
      const received = HT.search(27);
      const expected = { value: 27, next: { value: 11, next: null } };
      expect(received).toEqual(expected);
    });
  });
  describe('delete', () => {
    test('should return NaN', () => {
      const HT = new HashTable();
      const received = HT.delete('string');
      const expected = NaN;
      expect(received).toEqual(expected);
    });
    test('should return null', () => {
      const HT = new HashTable();
      const received = HT.delete(100);
      const expected = null;
      expect(received).toEqual(expected);
    });
    test('is valid', () => {
      const HT = new HashTable();
      HT.insert(16);
      HT.insert(11);
      HT.insert(27);
      HT.insert(19);
      HT.insert(22);
      HT.insert(6);
      const received = HT.delete(27);
      const expected = { value: 19, next: { value: 11, next: null } };
      expect(received).toEqual(expected);
    });
  });
});
