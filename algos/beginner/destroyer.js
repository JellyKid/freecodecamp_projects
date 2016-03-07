function destroyer(arr) {
  selfArgs = arguments;
  return arr.filter(function(item){
    for(var i = 1; i < selfArgs.length; i++){
        if(item === selfArgs[i]){
          return false;
        }
    }
    return true;
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
