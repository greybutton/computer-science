import BinaryHeap from '../../../data_structures/binary_heap';

const heapSort = (array) => {
  const binaryHeap = new BinaryHeap();
  const heap = binaryHeap.buildMaxHeap(array);
  const result = [];
  for (let index = heap.length - 1; index >= 0; index -= 1) {
    result.unshift(heap[0]);
    const temp = heap[0];
    heap[0] = heap[index];
    heap[index] = temp;
    heap.length -= 1;
    binaryHeap.maxHeapify(heap, 0);
  }
  return result;
};

export default heapSort;
