function reverseString(str) {
  var temp = [];
  for(var i = 0; i < str.length; i++){
    temp[i] = str[str.length - 1 - i];
  }
  str = temp.join('');
  return str;
}

console.log(reverseString("hello"));
