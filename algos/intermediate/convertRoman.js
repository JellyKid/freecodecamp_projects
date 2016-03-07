// Convert the given number into a roman numeral.
//
// All roman numerals answers should be provided in upper-case.
//
var RN = [
  {
    numeral: 'M',
    value: 1000
  },
  {
    numeral: 'D',
    value: 500
  },
  {
    numeral: 'C',
    value: 100
  },
  {
    numeral: 'L',
    value: 50
  },
  {
    numeral: 'X',
    value: 10
  },{
    numeral: 'V',
    value: 5
  },{
    numeral: 'I',
    value: 1
  }
];

function dupString(times, string) {
  var returnString = '';
  for(var i = 0; i < times; i++){
    returnString += string;
  }
  return returnString;
}

function convert(num) {

  var romanNumeral = '';

  for(var i = 1000; i >= 1; i/=10){
    var placeValue = Math.floor(num / i); //place ie 10's 100's 1000's
    if(isNaN(placeValue) !== true){
      console.log(placeValue);
      for(var x = 0; RN[x].value !== i; x++){} //find corrisponding index of place in RN

      if(placeValue < 4 || i === 1000){
        romanNumeral += dupString(placeValue,RN[x].numeral);
      } else if(placeValue === 4){
        romanNumeral += RN[x].numeral + RN[x-1].numeral;
      } else if(placeValue > 4 && placeValue < 9){
        romanNumeral += RN[x-1].numeral + dupString(placeValue - 5, RN[x].numeral);
      } else {
        romanNumeral += RN[x].numeral + RN[x-2].numeral;
      }
      num = num - (RN[x].value * placeValue);
    }
  }
  return romanNumeral;
}

console.log(convert(17));
