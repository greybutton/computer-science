/* eslint no-param-reassign: 0 */

const swap = (array, oldPosition, newPosition) => {
  const temp = array[oldPosition];
  array[oldPosition] = array[newPosition];
  array[newPosition] = temp;
  return array;
};

const selectionSort = (array) => {
  const arrayLength = array.length;
  for (let index = 0; index < arrayLength - 1; index += 1) {
    let smallest = index;
    for (let nextIndex = index + 1; nextIndex < arrayLength; nextIndex += 1) {
      if (array[smallest] > array[nextIndex]) {
        smallest = nextIndex;
      }
    }
    swap(array, index, smallest);
  }
  return array;
};

export default selectionSort;
