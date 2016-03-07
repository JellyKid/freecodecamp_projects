function convert(str) {
  return str.replace(/\W/g,function(match){
    //return '&' + match.charCodeAt() + ';'; would have been easier
    switch (match) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&apos;';
    }
    return match;
  });
}

console.log(convert("Dolce & Gabbana"));

//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


// convert("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convert("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convert("Sixty > twelve") should return Sixty &​gt; twelve.
// convert('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
// convert("Shindler's List") should return Shindler&​apos;s List.
// convert("<>") should return &​lt;&​gt;.
// convert("abc") should return abc.
