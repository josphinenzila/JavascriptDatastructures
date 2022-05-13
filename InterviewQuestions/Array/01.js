//Remove all even integers from the array
function oddInt(arr) {
  const newArr = [];
  for (i = 0; i < arr.length; i++) {
    let old = arr[i] % 2 === 1;
    if (old === false) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(oddInt([4, 1, 9, 10, 15, 22, 5, 14]));
