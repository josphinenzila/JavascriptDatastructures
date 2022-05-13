//Find the missing number in a given integer array of 1 to 100
function missingNo(arr) {
  const newArr = [];
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      newArr.push([arr[i] + 1]);
    }
  }
  return newArr;
}
console.log(missingNo([1, 2, 3, 4, 5, 7, 8, 10]));
