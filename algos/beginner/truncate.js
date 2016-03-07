function truncate(string, chars) {
  if(string.length <= chars){
    return string;
  }
  if(chars < 3){
    return string.slice(0,chars).concat('...');
  }
  return string.slice(0,chars-3).concat('...');
}

console.log(truncate("A-tisket a-tasket A green and yellow basket", 11)); //should return "A-tisket...".
console.log(truncate("Peter Piper picked a peck of pickled peppers", 14)); //should return "Peter Piper...".
console.log(truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); //should return "A-tisket a-tasket A green and yellow basket".
console.log(truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); //should return "A-tisket a-tasket A green and yellow basket".
console.log(truncate("A-", 1)); //should return "A...".
console.log(truncate("Absolutely Longer", 2)); //should return "Ab...".
