// ignoring punctuation, case, and spacing.
function palindrome(input) {
  str = input.replace(/[\W|\s|_]+/g, '').toUpperCase(); //stripping white space, underscores and non-word characters...global match
  for(var i = 0; i < str.length / 2; i++){
    if(str[i] !== str[str.length - 1 -i]){
      return false;
    }
  }
  return true;
}


console.log(palindrome("A man, a plan, a canal. Panama"));
