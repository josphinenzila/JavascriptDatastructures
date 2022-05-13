function charCount(str) {
  //make object to return at the end
  var result = {};
  //loop over string foreach character
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    //if the char is a number/letter and is a key object add one to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
console.log(charCount("My phone number is 0706792519"));
