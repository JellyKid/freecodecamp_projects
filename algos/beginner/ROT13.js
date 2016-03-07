function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, function(match){
    return String.fromCharCode((((match.charCodeAt(0) - 65) + 13) % 26)+65);
  });
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
