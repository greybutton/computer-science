import insertionSort from '../insertion_sort';

const makeBuckets = (array) => {
  const arrayLength = array.length;
  const buckets = [];
  const isElementNotFirst = index => buckets[Math.floor(arrayLength * array[index])];
  for (let index = 0; index < arrayLength; index += 1) {
    if (isElementNotFirst(index)) {
      buckets[Math.floor(arrayLength * array[index])].push(array[index]);
    } else {
      buckets[Math.floor(arrayLength * array[index])] = [array[index]];
    }
  }
  return buckets;
};

const sortBuckets = (buckets) => {
  for (let index = 0; index < buckets.length; index += 1) {
    if (buckets[index]) {
      insertionSort(buckets[index]);
    }
  }
  return buckets;
};

const bucketSort = (array) => {
  const buckets = makeBuckets(array);
  const bucketsSorted = sortBuckets(buckets);
  const result = bucketsSorted.reduce(
    (prevBucket, currBucket) => prevBucket.concat(currBucket),
    [],
  );
  return result;
};

export default bucketSort;
