function findLongestWord(str) {
  var arr = str.split(/\s/);
  return arr.reduce(function(prev, cur, i){
    return cur.length > prev.length ? cur : prev;
  }).length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
