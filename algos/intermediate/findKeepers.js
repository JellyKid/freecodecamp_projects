function find(arr, func) {
  var num = 0;
  for(var i = 0; i < arr.length; i++){
    if(func(arr[i])){
      return arr[i];
    }
  }
  return undefined;
}

console.log(find([1, 2, 3, 4], function(num){ return num % 2 === 0; }));


//Create a function that looks through an array (first argument)
//and returns the first element in the array that passes a truth test (second argument).
