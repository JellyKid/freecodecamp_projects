function factorialize(num) {
  var temp = 1;
  for(var i = num; i > 0; i--){
    temp = temp * i;
  }
  return temp;
}

console.log(factorialize(5));
