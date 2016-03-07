function mutation(arr) {
  for(var i = 0; i < arr[1].length; i++){
    if(arr[0].search(new RegExp(arr[1][i],'i')) === -1){
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
