import HashTable from './index';

describe('hash table open addressing (closed hashing) linear probing', () => {
  describe('insert', () => {
    test('should return NaN', () => {
      const HT = new HashTable();
      const received = HT.insert('string');
      const expected = NaN;
      expect(received).toEqual(expected);
    });
    test('should return table is full', () => {
      const HT = new HashTable();
      const insert = (count) => {
        const iter = (i) => {
          if (i === count) {
            return;
          }
          HT.insert(i);
          iter(i + 1);
        };
        return iter(0);
      };
      insert(50);
      const received = HT.insert(100);
      const expected = 'table is full';
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
      HT.insert(100);
      const received = HT.get();
      const expected = [16, 11, 27, 19, 22, 6, 100];
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
      HT.insert(27);
      HT.insert(27);
      HT.insert(28);
      HT.insert(19);
      HT.insert(22);
      HT.insert(6);
      const received = HT.search(28);
      const expected = 30;
      expect(received).toEqual(expected);
    });
  });
});
