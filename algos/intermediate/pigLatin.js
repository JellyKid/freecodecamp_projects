function translate(str) {
  return str.replace(/([^aeiou]*)(\w+)/, function(match,p1,p2){
    if(p1){
      return p2 + p1 + 'ay';
    }
    return p2 + 'way';
  });
}
