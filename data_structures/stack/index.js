class Stack {
  constructor() {
    this.stack = new Array(5).fill(null);
    this.top = 0;
  }

  isEmpty() {
    if (this.top === 0) {
      return true;
    }
    return false;
  }

  push(element) {
    if (this.top === this.stack.length) {
      return 'overflow';
    }
    this.stack[this.top] = element;
    this.top += 1;
    return this.stack;
  }

  pop() {
    if (this.isEmpty()) {
      return 'underflow';
    }
    const element = this.stack[this.top - 1];
    this.top -= 1;
    this.stack[this.top] = null;
    return element;
  }
}

export default Stack;
