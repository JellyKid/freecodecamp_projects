function where(collection, source) {
  return collection.filter(function(item){
    var found = true;
    Object.keys(source).forEach(function(key){
      if(source[key] !== item[key]){
        found = false;
      }
    });
    return found;
  });
}

console.log(where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }));
console.log(where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));
