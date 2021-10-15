export function getQuickSortAnimations(arr) {
  const copyArr = arr.slice();
  console.log(copyArr);

  const animations = [];
  quickSort(copyArr, 0, copyArr.length - 1, animations);
  console.log(copyArr);
  return animations;
}

function quickSort(arr, start, end, animations) {
  if (start >= end) {
    return;
  }
  var pIndex = partition(arr, start, end, animations);
  quickSort(arr, start, pIndex - 1, animations);
  quickSort(arr, pIndex + 1, end, animations);
}

function partition(arr, start, end, animations) {
  var pivot = arr[end];
  var partitionIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, partitionIndex);
      animations.push([[i, partitionIndex], false]);
      animations.push([[i, arr[i], partitionIndex, arr[partitionIndex]], true]);
      partitionIndex++;
    }
  }
  swap(arr, partitionIndex, end);
  animations.push([[end, partitionIndex], false]);
  animations.push([[end, arr[end], partitionIndex, arr[partitionIndex]], true]);
  return partitionIndex;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
