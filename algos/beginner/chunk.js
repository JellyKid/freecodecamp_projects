function chunk(arr, size) {
  var ret = [];
  for(var i = 0; i < arr.length; i = i + size){
    if(arr.length > i + size){
      ret.push(arr.slice(i,i + size));
    } else {
      ret.push(arr.slice(i,arr.length));
    }    
  }
  return ret;
}

console.log(chunk(["a", "b", "c", "d"], 2));
