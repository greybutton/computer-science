import SinglyLinkedList from '../singly_linked_list';

class HashTable {
  constructor() {
    this.table = new Array(8);
  }

  hash(key) {
    return key % this.table.length;
  }

  get() {
    return this.table;
  }

  insert(element) {
    const index = this.hash(element);
    if (isNaN(index)) {
      return NaN;
    }
    this.table[index] = new SinglyLinkedList(this.table[index]).insert(element);
    return this.table;
  }

  search(element) {
    const index = this.hash(element);
    if (isNaN(index)) {
      return NaN;
    }
    return new SinglyLinkedList(this.table[index]).search(element);
  }

  delete(element) {
    const index = this.hash(element);
    if (isNaN(index)) {
      return NaN;
    }
    const result = new SinglyLinkedList(this.table[index]).delete(element);
    if (result === 'list is empty') {
      return null;
    }
    return result;
  }
}

export default HashTable;
