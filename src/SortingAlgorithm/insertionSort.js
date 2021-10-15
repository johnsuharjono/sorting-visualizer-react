export function getInsertionSortAnimations(arr) {
  const copyArr = arr.slice();
  console.log(copyArr);

  const animations = [];
  insertionSortHelper(copyArr, animations);
  return animations;
}

function insertionSortHelper(copyArr, animations) {
  for (let i = 1; i < copyArr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      animations.push([[j, j + 1], false]);
      if (copyArr[j + 1] < copyArr[j]) {
        animations.push([[j, copyArr[j + 1], j + 1, copyArr[j]], true]);
        swap(copyArr, j, j + 1);
      } else {
        break;
      }
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
