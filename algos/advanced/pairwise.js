/*
Return the sum of all element indices
of array arr that can be paired with
one other element to form a sum that
equals the value in the second argument
arg. If multiple sums are possible,
return the smallest sum. Once an element
has been used, it cannot be reused to
pair with another.

For example, pairwise([1, 4, 2, 3, 0, 5], 7)
should return 11 because 4, 2, 3 and 5 can
be paired with each other to equal 7 and
their indices (1, 2, 3, and 5) sum to 11.

pairwise([1, 3, 2, 4], 4) would only return
1, because only the first two elements can
be paired to equal 4, and the first element
has an index of 0!
*/
function moreThanOne(arr) {
  return arr.length > 2;
}


function findAllPairs(arr) {
  var max = arr.sort()[arr.length - 1] + arr.sort()[arr.length - 2];
  var min = arr.sort()[0];
  var pairs = [];
  for(var a = min; a <= max; a++){
    pairs[a] = [a];
    for(var b = 0; b < arr.length; b++){
      for(var c = 0; c < arr.length; c++){
        if(b !== c && arr[b] + arr[c] === a){
          var pair = [arr[b],arr[c]].sort().join(',');
          if(pairs[a].indexOf(pair) === -1){
            pairs[a].push(pair);
          }

        }
      }
    }
  }
  return pairs.filter(moreThanOne);
}


function pairwise(arr,match) {

  var pairs = [match];
  var count = 0;
  var indices = [];
  for(var b = 0; b < arr.length; b++){
    for(var c = b + 1; c < arr.length; c++){
      if(arr[b] + arr[c] === match && indices.indexOf(b) === -1 && indices.indexOf(c) === -1){
        count += b + c;
        indices.push(b,c);
      }
    }
  }
  return count;
}



console.log(pairwise([1,4,2,3,0,5],7));
console.log('should return 11.\n');

console.log(pairwise([1, 3, 2, 4], 4));
console.log('should return 1.\n');

console.log(pairwise([1, 1, 1], 2));
console.log('should return 1.\n');

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
console.log('should return 10.\n');
console.log(pairwise([], 100));
console.log('should return 0.\n');
