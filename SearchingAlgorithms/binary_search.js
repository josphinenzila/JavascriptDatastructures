function binarySearch(arr, elem) {
  // add whatever parameters you deem necessary - good luck!
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (arr[middle] < elem) start = middle + 1;
    else end = middle - 1;

    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4));
