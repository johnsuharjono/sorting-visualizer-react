export function getSelectionSortAnimations(arr) {
  const copyArr = arr.slice();
  console.log(copyArr);

  const animations = [];
  selectionSortHelper(copyArr, animations);
  return animations;
}

function selectionSortHelper(arr, animations) {
  for (var i = 0; i < arr.length; ++i) {
    var min = i;
    for (var j = i; j < arr.length; ++j) {
      animations.push([[min, j], false]);
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    animations.push([[i, min], false]);
    animations.push([[i, arr[min], min, arr[i]], true]);
    var temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
}
