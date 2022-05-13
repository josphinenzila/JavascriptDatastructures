function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
console.log(double([1, 2, 3, 4, 5, 6, 7, 8, 9]));
