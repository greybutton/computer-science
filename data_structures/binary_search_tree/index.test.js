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
});
