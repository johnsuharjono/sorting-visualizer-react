export function getMergeSortAnimations(arr) {
  // make copyArr so it does not modify the original array
  const copyArr = arr.slice();
  const len = copyArr.length;
  const aux = Array(len);
  //the animations array that will be return
  const animations = [];
  mergeSortHelper(copyArr, aux, 0, len - 1, animations);
  return animations;
}

// I learn the merge sort algorithm from this YT video: https://www.youtube.com/watch?v=TzeBrDU-JaY&t=510s

function mergeSortHelper(copyArr, aux, left, right, animations) {
  if (right === left) return; // array of length 1 reached, base condition for the recursive call
  const mid = left + Math.floor((right - left) / 2); // find the midpoint then call mergesort recursively
  mergeSortHelper(copyArr, aux, left, mid, animations);
  mergeSortHelper(copyArr, aux, mid + 1, right, animations);
  doMerge(copyArr, aux, left, mid, right, animations); //combining the array that have been splitted
}

function doMerge(arr, aux, left, mid, right, animations) {
  // arr here is the copy of the array, so does not modify the original array.
  // you can think of the auxiliary array as the array that have the value not yet merged
  for (let i = left; i <= right; i++) aux[i] = arr[i];
  let i = left; // i is the index for left subarray
  let j = mid + 1; // j is the index for right subarray
  for (let k = left; k <= right; k++) {
    // there is 4 cases whereby we take values to merge

    // 1. when all the right array have been added.
    if (i > mid) {
      animations.push([[j], false]);
      animations.push([[k, aux[j]], true]);
      arr[k] = aux[j];
      j++;
    }
    // 2. when all the left array have been added
    else if (j > right) {
      animations.push([[i], false]);
      animations.push([[k, aux[i]], true]);
      arr[k] = aux[i];
      i++;
    }
    // 3. when the value in the right array is smaller then the value in the left array
    // we take values from the right array
    else if (aux[j] < aux[i]) {
      animations.push([[i, j], false]);
      animations.push([[k, aux[j]], true]);
      arr[k] = aux[j];
      j++;
    }
    // 4. when the value in the left array is smaller then the value in the right array
    // we take values from the left array
    else {
      animations.push([[i, j], false]);
      animations.push([[k, aux[i]], true]);
      arr[k] = aux[i];
      i++;
    }
  }
}
