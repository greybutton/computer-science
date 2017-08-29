class Queue {
  constructor() {
    this.queue = new Array(5).fill(null);
    this.head = 0;
    this.tail = 0;
  }

  isEmpty() {
    if (this.queue[this.head] === null) {
      return true;
    }
    return false;
  }

  enqueue(element) {
    if (this.head - this.tail === 0 && this.queue[this.head] !== null) {
      return 'overflow';
    }
    this.queue[this.tail] = element;
    if (this.tail === this.queue.length - 1) {
      this.tail = 0;
    } else {
      this.tail += 1;
    }
    return this.queue;
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'underflow';
    }
    const element = this.queue[this.head];
    this.queue[this.head] = null;
    if (this.head === this.queue.length - 1) {
      this.head = 0;
    } else {
      this.head += 1;
    }
    return element;
  }
}

export default Queue;
