function sumAll(arr) {
  if(arr[0] === arr[1]){return arr[0] + arr[1];} //if numbers are the same return sum
  var inc = arr[0] < arr[1] ? 1 : -1; //create an incremental value, if first num in array is less than second than incrementor is 1 otherwise it's -1
  var i = arr[0];
  var retVal = i;
  do{
    i = i + inc;
    retVal += i;
  } while (i !== arr[1]);
  return retVal;
}

console.log(sumAll([3, -4]));
