function isPrime(num) {
  if(num < 2){
    return false;
  }
  for(var i = num - 1; i > 1; i--){
    if(num%i === 0){
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  var retNumber = 0;
  for(i = 1; i <= num; i++){
    if(isPrime(i)){
      retNumber += i;
    }
  }
  return retNumber;
}

console.log(sumPrimes(977));
