const binarySearch = (array, x) => {
  let left = -1;
  let right = array.length;
  while (right > left + 1) {
    const middle = Math.floor((left + right) / 2);
    if (array[middle] < x) {
      left = middle;
    } else {
      right = middle;
    }
  }
  if (right < array.length && array[right] === x) {
    return right;
  }
  return 'not found';
};

export default binarySearch;
