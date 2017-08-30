class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    }
    return false;
  }

  insert(value) {
    const node = {
      value,
      next: this.head,
    };
    this.head = node;
    return this.head;
  }

  search(value) {
    let list = this.head;
    while (list !== null && list.value !== value) {
      list = list.next;
    }
    return list;
  }

  delete(value) {
    if (this.isEmpty()) {
      return 'list is empty';
    }
    let list = this.head;
    // delete first node
    if (list.value === value) {
      this.head = list.next;
    } else {
      let prev = list;
      while (list.next) {
        if (list.value === value) {
          prev.next = list.next;
          break;
        }
        prev = list;
        list = list.next;
      }
      // delete last node
      if (list.value === value && list.next === null) {
        prev.next = null;
      }
    }
    return this.head;
  }
}

export default SinglyLinkedList;
