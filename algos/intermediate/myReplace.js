function myReplace(str, before, after) {
  return str.replace(new RegExp(before), function(match){
    if(match.charCodeAt(0) <= 90 && match.charCodeAt(0) >= 65){
      return after.charAt(0).toUpperCase() + after.slice(1);
    }
    return after.charAt(0).toLowerCase() + after.slice(1);
  });
}


console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
