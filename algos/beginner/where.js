function where(arr, val) {
  var sorted = arr.sort(function(a, b){
    if (a == b){
      return 0;
    }
    return a < b ? -1 : 1;
  });
  var index;
  for (var i = 0; i < sorted.length; i++){
    if(val == sorted[i]){
      index = i;
    }
    if(val > sorted[i]){
      index = i+1;
    }
    if(val < sorted[i]){
      return index;
    }
  }
  return index;
}

console.log(where([40, 60, 4, 39, 100, 41], 50));
console.log(where([10, 20, 30, 40, 50], 35));
