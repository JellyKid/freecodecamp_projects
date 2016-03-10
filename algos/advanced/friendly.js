function toMonth(unit) {
  if(typeof unit === 'string'){
    unit = Number.parseInt(unit);
  }
  switch (unit) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
    default:

  }
}

function toDay(unit) {
  if(typeof unit === 'number'){
    unit = unit.toString();
  }
  if(unit == 13){return unit + 'th'}
  var tens = Number.parseInt(unit[unit.length-1]);
  var retStr;
  switch (tens) {
    case 1:
    retStr = unit + 'st';
    break;
    case 2:
    retStr = unit + 'nd';
    break;
    case 3:
    retStr = unit + 'rd';
    break;
    default:
    retStr = unit + 'th';
  }
  return /^0*(.+)/.exec(retStr)[1];
}



function beautifyDate(date,filter) {
  var array = date.split('-').map(function(unit, i){
    if(i === 0){
      return unit;
    }
    if(i === 1){
      return toMonth(unit);
    }
    if(i === 2){
      return toDay(unit);
    }
  });
  if(filter === 'md'){
    return array[1] + ' ' + array[2];
  }
  if(filter === 'd'){
    return array[2];
  }
  return array[1] + ' ' + array[2] + ', ' + array[0];
}

function compareDate(a, b) {
  a = a.split('-').map(function(str){
    return Number.parseInt(str);
  });
  b = b.split('-').map(function(str){
    return Number.parseInt(str);
  });

  if((b[0]*12 + b[1]) - (a[0]*12 + a[1]) <= 12){///If dates are less than 12 months apart
    if(b[0] === a[0] && a[1] === b[1]){
      return 'YM';
    }
    return 'Y';
  }
}

function removeNull(elem){
  if(elem === null){
    return false;
  }
  return true;
}

function friendly(arr) {
  var check = compareDate(arr[0],arr[1]); //check to see if dates are in same month or year.

  a = arr[0].split('-').map(function(str){
    return Number.parseInt(str);
  });
  b = arr[1].split('-').map(function(str){
    return Number.parseInt(str);
  });

  var sameDate = arr[0] === arr[1];

  var sameYear = b[0] === a[0];
  var sameMonth = b[1] === a[1];
  var inCurrentYear = a[0] === new Date().getFullYear();
  if ((b[0]*12 + b[1]) - (a[0]*12 + a[1]) <= 12){
    lessThanYear = true;
    if(sameMonth && !sameYear){
      lessThanYear = a[2] > b[2];
    }
  } else {
    lessThanYear = false;
  }

  // console.log('sameDate', sameDate);
  // console.log('sameYear', sameYear);
  // console.log('inCurrentYear', inCurrentYear);
  // console.log('sameMonth',sameMonth);
  // console.log('lessThanYear', lessThanYear);

  return arr.map(function(date, i, array){
    if(i === 0){
      if(lessThanYear && inCurrentYear){
        return beautifyDate(date, 'md');
      }
      return beautifyDate(date);
    }
    if(sameDate){
      return null;
    }
    if(lessThanYear){
      if(sameYear && sameMonth){
        return beautifyDate(date, 'd');
      }
      return beautifyDate(date, 'md');
    }
    return beautifyDate(date);
  }).filter(removeNull);
}

//friendly(['2016-07-01', '2016-07-04']);


console.log(friendly(["2018-01-13", "2018-01-13"]));
console.log('["January 13th, 2018"].\n');
console.log(friendly(["2022-09-05", "2023-09-05"]));
console.log('["September 5th, 2022","September 5th, 2023"].\n');
// console.log(friendly(["2016-12-01", "2017-02-03"]));
// console.log('["December 1st","February 3rd"].\n');
// console.log(friendly(["2017-03-01", "2017-05-05"]));
// console.log('["March 1st, 2017","May 5th"]\n');
// console.log(friendly(["2018-01-13", "2018-01-13"]));
// console.log('["January 13th, 2018"].\n');
// console.log(friendly(["2022-09-05", "2023-09-04"]));
// console.log('["September 5th, 2022","September 4th"].');


/*
Convert a date range consisting of two dates
formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead
of numbers and ordinal dates instead of cardinal
(1st instead of 1).

Do not display information that is redundant or that
can be inferred by the user: if the date range ends in
less than a year from when it begins, do not display
the ending year. If the range ends in the same month
that it begins, do not display the ending year or month.

Additionally, if the date range begins in the current
year and ends within one year, the year should not be
displayed at the beginning of the friendly range.

Examples:

friendly(["2016-07-01", "2016-07-04"]) should return
["July 1st","4th"]

friendly(["2016-07-01", "2018-07-04"]) should return
["July 1st, 2016", "July 4th, 2018"].
*/
