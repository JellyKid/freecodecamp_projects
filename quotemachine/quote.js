var QUOTES = [
  {
    author: "Batman",
    quote: "Quick! To the Batmobile!"
  },{
    author: "Robin",
    quote: "The opposite of a girl is a boy!"
  },{
    author: "Robin",
    quote: "Holy atomic pile, Batman!"
  },{
    author: "Batman",
    quote: "Precisely, Robin!"
  },{
    author: "Batman",
    quote: "Nothing's sacred to those devils."
  },{
    author: "Batman",
    quote: "How does she DO IT?"
  },{
    author: "Batman",
    quote: "Come on, Robin, to the Bat Cave! There's not a moment to lose!"
  },{
    author: "Batman",
    quote: "The miserable weakling. He fainted dead away!"
  }
];

var quoteIndex = 0;

function randomNoRepeat(min,max,num){
  var rand = num;
  while(rand == num){
    rand = Math.floor(Math.random() * (max - min + 1)) + min; //taken straight from MDN
  }
  return rand;
}

function randomQuote() {
  quoteIndex = randomNoRepeat(0,QUOTES.length - 1,quoteIndex);
  var quote = QUOTES[quoteIndex];
  $("#quote").html("&quot;" + quote.quote + "&quot;");
  $("#author").html("-" + quote.author);
  if(quote.author == "Robin"){
    $(".bubble-tail").addClass('left-tail');
  } else {
    $(".bubble-tail").removeClass('left-tail');
  }
  $("#tweet-it").parent().attr('href', 'https://twitter.com/intent/tweet?text='+quote.quote+'&hashtags='+quote.author);
}

$(document).ready(function() {
  randomQuote();

  $(".quote-btn").click(function(event) {
    randomQuote();
  });
});
