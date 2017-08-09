/* eslint no-param-reassign: 0 */

const insertionSort = (array) => {
  const arrayLength = array.length;
  for (let indexNumber = 1; indexNumber < arrayLength; indexNumber += 1) {
    const number = array[indexNumber];
    let indexPrevNumber = indexNumber - 1;
    while (indexPrevNumber >= 0 && array[indexPrevNumber] > number) {
      array[indexPrevNumber + 1] = array[indexPrevNumber];
      indexPrevNumber -= 1;
    }
    array[indexPrevNumber + 1] = number;
  }
  return array;
};

export default insertionSort;
