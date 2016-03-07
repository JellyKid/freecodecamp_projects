function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/([a-z]+[A-Z])|([a-zA-Z]+[\s|\_])|([A-Z].*)$/g,function(match,p1,p2,p3){
    console.log(match);
    if(p1){
      return p1[0].toLowerCase() + p1.slice(1, p1.length - 1) + '-' + p1[p1.length - 1].toLowerCase();
    }
    if(p2){
      return p2[0].toLowerCase() + p2.slice(1, p2.length - 1) + '-';
    }
    if(p3){
      return p3.toLowerCase();
    }
  });
}

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

//console.log(spinalCase('This Is Spinal Tap'));
//console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show")); //  should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh")); //  should return "teletubbies-say-eh-oh".
