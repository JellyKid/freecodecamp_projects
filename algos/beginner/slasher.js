function slasher(arr, howMany) {
  if(howMany >= arr.length){
    return [];
  }
  return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2));
