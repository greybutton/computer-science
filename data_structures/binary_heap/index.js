class BinaryHeap {
  buildMaxHeap(array) {
    const heapSize = array.length;
    for (let index = Math.floor(heapSize / 2); index >= 0; index -= 1) {
      this.maxHeapify(array, index);
    }
    return array;
  }
  maxHeapify(array, index) {
    const heapSize = array.length;
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let largest = 0;
    if (left <= heapSize && array[left] > array[index]) {
      largest = left;
    } else {
      largest = index;
    }
    if (right <= heapSize && array[right] > array[largest]) {
      largest = right;
    }
    if (largest !== index) {
      const temp = array[index];
      array[index] = array[largest];
      array[largest] = temp;
      this.maxHeapify(array, largest);
    }
    return array;
  }
}

export default BinaryHeap;
