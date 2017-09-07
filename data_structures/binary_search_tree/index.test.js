import BinarySearchTree from './index';

describe('binary search tree', () => {
  describe('insert', () => {
    test('is valid', () => {
      const BST = new BinarySearchTree();
      BST.insert(null, 5);
      BST.insert(null, 10);
      BST.insert(null, 100);
      BST.insert(null, 1);
      const tree = BST.tree();
      const received = BST.isValid(tree);
      const expected = true;
      expect(received).toEqual(expected);
    });
    test('is not valid', () => {
      const BST = new BinarySearchTree();
      BST.insert(null, 5);
      BST.insert(null, 5);
      BST.insert(null, 100);
      BST.insert(null, 1);
      const tree = BST.tree();
      const received = BST.isValid(tree);
      const expected = false;
      expect(received).toEqual(expected);
    });
  });
  describe('search', () => {
    test('should return false', () => {
      const BST = new BinarySearchTree();
      const received = BST.search(null, 1);
      const expected = false;
      expect(received).toEqual(expected);
    });
    test('should return null', () => {
      const BST = new BinarySearchTree();
      BST.insert(null, 5);
      BST.insert(null, 10);
      BST.insert(null, 100);
      BST.insert(null, 1);
      const received = BST.search(null, 20);
      const expected = null;
      expect(received).toEqual(expected);
    });
    test('should return node', () => {
      const BST = new BinarySearchTree();
      BST.insert(null, 50);
      BST.insert(null, 10);
      BST.insert(null, 100);
      BST.insert(null, 1);
      const received = BST.search(null, 10);
      const { key } = received;
      expect(BST.isValid(received)).toEqual(true);
      expect(key).toEqual(10);
    });
  });
});
