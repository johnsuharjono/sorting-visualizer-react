export function getBubbleSortAnimations(arr) {
  const copyArr = arr.slice();
  console.log(copyArr);

  const animations = [];
  bubbleSortHelper(copyArr, animations);
  return animations;
}

function bubbleSortHelper(arr, animations) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      animations.push([[j, j + 1], false]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        animations.push([[j, arr[j], j + 1, arr[j + 1]], true]);
      }
    }
  }
  console.log(arr);
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
