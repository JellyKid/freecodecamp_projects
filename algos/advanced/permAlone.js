function factorial(num){
  for(var f = 1; num > 0; num--){
    f *= num;
  }
  return f;
}

function removeDupes(str) {
  return str.split('').reduce(function(prev,curr,i,array){
    if(prev.indexOf(curr) === -1){
      prev.push(curr);
    }
    return prev;
  }, []).join('');
}


function countChars(str, char) {
  return str.match(new RegExp(char,'g')).length;
}


function permAlone(str) {
  var noDupes = removeDupes(str);
  var total = factorial(noDupes.length);
  for(var i = 0; i < noDupes.length; i++){
    total *= factorial(countChars(str,noDupes[i]));
  }
  return total;  //L! - N!(D!)   <--- hope this is correct
}

console.log(permAlone('aaabb')); //should return 8

/*
Return the number of total permutations of the
provided string that don't have repeated consecutive
letters. Assume that duplicate characters are each
unique.

For example, aab should return 2 because it has 6 total
permutations (aab, aab, aba, aba, baa, baa), but only
2 of them (aba and aba) don't have the same letter
(in this case a) repeating.
*/
