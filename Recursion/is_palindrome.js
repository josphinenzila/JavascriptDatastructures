function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str[-1]) return isPalindrome(str.slice(1, -1));
  return false;
}
console.log(isPalindrome("tacocat"));