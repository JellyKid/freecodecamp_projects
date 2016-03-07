function end(str, target) {
  return str.search(target.concat('$')) === -1 ? false : true;
}



console.log(end("Bastian", "n")); //should return true.
console.log(end("Connor", "n")); //should return false.
console.log(end("Walking on water and developing software from a specification are easy if both are frozen", "specification")); //should return false.
console.log(end("He has to give me a new name", "name")); //should return true.
console.log(end("He has to give me a new name", "me")); //should return true.
console.log(end("He has to give me a new name", "na")); //should return false.
console.log(end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); //should return false.
