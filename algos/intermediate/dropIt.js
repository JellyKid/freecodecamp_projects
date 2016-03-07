function drop(arr, func) {
  // Drop them elements.
  while(arr.length > 0){
    if(func(arr[0])){
      return arr;
    }
    arr.shift();
  }
  return arr;
}

console.log(drop([1, 2, 3, 4], function(n) {return n >= 3;}));

// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
//
// Return the rest of the array, otherwise return an empty array.
