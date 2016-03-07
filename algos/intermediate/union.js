function unite(arr1, arr2, arr3) {
  var combined = Array.prototype.concat.apply([],Array.prototype.slice.call(arguments));
  return combined.reduce(function(prev,curr){
    if(prev.indexOf(curr) === -1){
      prev.push(curr); //if I concat here it flattens arrays, but I'm not sure why
      //return prev.concat(curr);
    }
    return prev;
  },[]);
}


console.log(unite([1, 3, 2], [1, [5]], [2, [4]]));
