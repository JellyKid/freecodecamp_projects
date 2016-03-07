function getPair(base) {
  switch (base) {
    case 'C':
    return 'G';
    case 'G':
    return 'C';
    case 'A':
    return 'T';
    case 'T':
    return 'A';
  }
}
function pair(str) {
  return str.split('').map(function(base){
    return [base, getPair(base)];
  });
}

console.log(pair("GCG"));
