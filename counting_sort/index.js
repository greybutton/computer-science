const countKeysEqual = (array, max) => {
  const equal = [];
  for (let i = 0; i <= max; i += 1) {
    equal[i] = 0;
  }
  for (let j = 0; j < array.length; j += 1) {
    const key = array[j];
    equal[key] += 1;
  }
  return equal;
};

const countKeysLess = (equal, max) => {
  const less = [0];
  less[0] = equal[0];
  for (let i = 1; i <= max; i += 1) {
    less[i] = less[i - 1] + equal[i];
  }
  return less;
};

const rearrange = (array, less) => {
  const result = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    result[less[array[i]] - 1] = array[i];
    less[array[i]] = less[array[i]] - 1;
  }
  return result;
};

const countingSort = (array) => {
  if (array.length === 1) {
    return array;
  }
  const max = Math.max(...array);
  const isLessThanZero = element => element < 0;
  if (max < 1 || isNaN(max) || array.some(isLessThanZero)) {
    return [];
  }
  const equal = countKeysEqual(array, max);
  const less = countKeysLess(equal, max);
  const result = rearrange(array, less);
  return result;
};

export default countingSort;
