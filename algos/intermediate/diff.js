function diff(arr1, arr2) {
  var newArr = arr1.filter(function(num){
    return arr2.indexOf(num) === -1;
  });
  console.log(newArr);
  // Same, same; but different.
  return newArr.concat(arr2.filter(function(num){
    return arr1.indexOf(num) === -1;
  })).sort();
}

console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diff([1,3,4,6],[3,4,5,7]));

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
