var globalPerms = [];
var globalCount = 0;

function removeDupes(str) {
  return str.split('').reduce(function(prev,curr,i,array){
    if(prev.indexOf(curr) === -1){
      prev.push(curr);
    }
    return prev;
  }, []).join('');
}

function testRepeats(array) {
  for(var i = 0; i < array.length -1; i++){
    if(array[i] === array[i+1]){
      return 0;
    }
  }
  return 1;
}

function generate(n,a){
  if (n === 1){
    //globalPerms.push(a.join(''));    This get's gigantic if you have a lot of permutations, it's better to just count them.
    globalCount += testRepeats(a);
  } else {
    for (var i = 0; i < n - 1; i++) {
      generate(n - 1,a);
      var t;
      if (n%2 === 0){
        t = a[n-1];
        a[n-1] = a[i];
        a[i] = t;
      } else {
        t = a[n-1];
        a[n-1] = a[0];
        a[0] = t;
      }
    }
    generate(n - 1,a);
  }
}

function permAlone(str) {
  generate(str.length,str.split(''));
  return globalCount;
}


console.log(permAlone("aab")); // should return a number.
console.log(permAlone("aab"));// should return 2.
console.log(permAlone("aaa"));// should return 0.
console.log(permAlone("aabb"));// should return 8.
console.log(permAlone("abcdefa"));// should return 3600.
console.log(permAlone("abfdefa"));// should return 2640.
console.log(permAlone("zzzzzzzz"));// should return 0.
