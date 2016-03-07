function isDivisibleByRange(range, numerator) {
  for(var i = range.sort()[0] + 1; i < range.sort()[1]; i++){
    if(numerator%i !== 0){
      return false;
    }
  }
  return true;
}

function smallestCommons(arr) {
  var retNumber = 0;
  var multiplied = arr[0] * arr[1];
  for(var i = 1; retNumber === 0; i++){
    if(isDivisibleByRange(arr,multiplied * i)){
      retNumber = multiplied * i;
    }
  }
  return retNumber;
}


console.log(smallestCommons([1,13]));
