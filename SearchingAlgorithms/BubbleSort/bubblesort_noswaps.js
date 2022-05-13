function bubbleSort(arr) {
  var noSwaps;
  for (i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
console.log(bubbleSort([37, 45, 29, 8]));
