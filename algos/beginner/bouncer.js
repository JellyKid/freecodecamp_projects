function bouncer(arr) {
  return arr.filter(function(item){
    if(item){
      return true;
    }
    return false;
  });
}
//isNaN(item) || item === false || item == '' || item === null || item === 0 || item === undefined
console.log(bouncer([7, "ate", "", false, 9]));
