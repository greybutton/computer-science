import BinaryHeap from '../binary_heap';

class MaxHeap {
  constructor(array) {
    this.heap = array || [];
  }

  isEmpty() {
    if (this.heap.length === 0) {
      return true;
    }
    return false;
  }

  maximum() {
    if (this.isEmpty()) {
      return 'underflow';
    }
    return this.heap[0];
  }

  extractMax() {
    if (this.isEmpty()) {
      return 'underflow';
    }
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length];
    this.heap = new BinaryHeap().maxHeapify(this.heap.slice(0, -1), 0);
    return max;
  }

  increaseKey(index, key) {
    if (key < this.heap[index - 1]) {
      return 'error';
    }
    this.heap[index - 1] = key;
    const isEven = number => number % 2 === 0;
    const indexParent = (indexChild) => {
      if (isEven(indexChild)) {
        return Math.floor((indexChild - 1) / 2);
      }
      return Math.floor(indexChild / 2);
    };
    while (
      index - 1 > 0 &&
      (this.heap[indexParent(index - 1)] < this.heap[index - 1] ||
        this.heap[indexParent(index - 1)] < this.heap[index])
    ) {
      if (this.heap[indexParent(index - 1)] < this.heap[index]) {
        const temp = this.heap[index];
        this.heap[index] = this.heap[indexParent(index - 1)];
        this.heap[indexParent(index - 1)] = temp;
        index = indexParent(index);
      }
      if (this.heap[indexParent(index - 1)] < this.heap[index - 1]) {
        const temp = this.heap[index - 1];
        this.heap[index - 1] = this.heap[indexParent(index - 1)];
        this.heap[indexParent(index - 1)] = temp;
        index = indexParent(index);
      }
    }
    return this.heap;
  }

  insert(key) {
    this.heap.push(-Infinity);
    const heapSize = this.heap.length;
    this.increaseKey(heapSize, key);
    return this.heap;
  }
}

export default MaxHeap;
