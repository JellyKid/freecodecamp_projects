function repeat(string, times) {
  var ret = "";
  for(;times > 0; times--){
    ret = ret.concat(string);
  }
  return ret;
}

console.log(repeat("*", 3)); //should return "***".
console.log(repeat("abc", 3)); //should return "abcabcabc".
console.log(repeat("abc", 4)); //should return "abcabcabcabc".
console.log(repeat("abc", 1)); //should return "abc".
console.log(repeat("*", 8)); //should return "********".
console.log(repeat("abc", -2)); //should return "".
