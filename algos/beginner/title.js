
function titleCase(title){
    return title.replace(/(\w)(\S*)/g, function(match,p1,p2){
      return p1.toUpperCase().concat(p2.toLowerCase());
    });
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
