function steamroller(arr) {
  return arr.reduce(function(prev,curr){
    if(Array.isArray(curr)){
      return prev.concat(steamroller(curr));
    } else {
      return prev.concat(curr);
    }
  },[]);
}

console.log(steamroller([1, [2],{}, [3, [[4]]]]));
console.log(steamroller([1, {}, [3, [[4]]]]) );
