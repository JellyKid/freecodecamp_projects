function removeDupes(arr){
  return arr.reduce(function(prev,curr){
    if(prev.indexOf(curr) === -1){
      prev.push(curr);
    }
    return prev;
  },[]);
}

function sym(args){
  var arrays = [].concat.apply([],[].slice.call(arguments).map(removeDupes)); //convert arguments into 2d array and remove duplicates then concat the whole thing
  return arrays.reduce(function(prev,curr){
    if(prev.indexOf(curr) === -1){
      prev.push(curr);
      return prev;
    }
    return prev.filter(function(item){
      return item !== curr;
    });

  },[]);
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); //should return [1, 4, 5]

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // should return [1, 4, 5].
