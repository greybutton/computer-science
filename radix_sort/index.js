const insertionSort = (array, indexLetter) => {
  const arrayLength = array.length;
  for (let index = 1; index < arrayLength; index += 1) {
    const word = array[index];
    let indexPrev = index - 1;
    while (indexPrev >= 0 && array[indexPrev][indexLetter] > word[indexLetter]) {
      array[indexPrev + 1] = array[indexPrev];
      indexPrev -= 1;
    }
    array[indexPrev + 1] = word;
  }
  return array;
};

const radixSort = (array, wordLength) => {
  for (let i = wordLength; i >= 0; i -= 1) {
    array = insertionSort(array, i);
  }
  return array;
};

export default radixSort;
