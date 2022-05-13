function logAtmost5(n) {
  for (var i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
console.log(logAtmost5(4));
