function sumFibs(num) {
  var seq = [0,1];
  var retNum = 0;
  var shifted = 0;
  while(num >= seq[0]){
    seq.push(seq[0] + seq[1]);
    shifted = seq.shift();
    if(shifted%2 !==0){
      retNum += shifted;
    }
  }
  return retNum;
}

console.log(sumFibs(75025));

// Return the sum of all odd seqonacci numbers up to and including the passed number if it is a seqonacci number.
//
// The first few numbers of the seqonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
//
// As an example, passing 4 to the function should return 5 because all the odd seqonacci numbers under 4 are 1, 1, and 3.

// sumseqs(1000) should return 1785.
// sumseqs(4000000) should return 4613732.
// sumseqs(4) should return 5.
// sumseqs(75024) should return 60696.
// sumseqs(75025) should return 135721.
