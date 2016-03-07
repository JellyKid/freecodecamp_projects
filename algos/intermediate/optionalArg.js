function add() {
  args = Array.prototype.slice.call(arguments);
  for(var i = 0; i < args.length; i++){
    if (!Number.isInteger(args[i]) || Array.isArray(args[i])){
      return undefined;
    }
  }
  if(args.length < 2){
    return function(num){
      if(Number.isInteger(num)){
        return args[0] + num;
      }
      return undefined;

    };
  }
  return args[0] + args[1];
}

console.log(add(2)([3]));


// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//
// For example, add(2, 3) should return 5, and add(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
// var sumTwoAnd = add(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.
