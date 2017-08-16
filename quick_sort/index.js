/* eslint no-param-reassign: 0 */

const split = (array, left, right, number) => {
  let divider = left;
  for (let index = left; index <= right; index += 1) {
    if (array[index] < number) {
      const temp = array[index];
      array[index] = array[divider];
      array[divider] = temp;
      divider += 1;
    }
  }
  return divider;
};

const quickSort = (array, left, right) => {
  if (left < right) {
    const randomIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    const randomNumber = array[randomIndex];
    const divider = split(array, left, right, randomNumber);
    quickSort(array, left, divider - 1);
    quickSort(array, divider, right);
  }
  return array;
};

export default quickSort;
