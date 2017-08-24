const merge = (left, right) => {
  const leftLength = left.length;
  const rightLength = right.length;
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftLength || rightIndex < rightLength) {
    if (
      rightIndex === rightLength ||
      (leftIndex < leftLength && left[leftIndex] <= right[rightIndex])
    ) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }
  return result;
};

const mergeSort = (array) => {
  const arrayLength = array.length;
  if (arrayLength === 1) {
    return array;
  }
  let leftPartOfArray = array.slice(0, Math.floor(arrayLength / 2));
  let rightPartOfArray = array.slice(arrayLength / 2, arrayLength);
  leftPartOfArray = mergeSort(leftPartOfArray);
  rightPartOfArray = mergeSort(rightPartOfArray);
  return merge(leftPartOfArray, rightPartOfArray);
};

export default mergeSort;
