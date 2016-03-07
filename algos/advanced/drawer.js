var cashBox =
  {
    "PENNY":
    {
      value: 1,
      onHand: 0
    },
    "NICKEL":
    {
      value: 5,
      onHand: 0
    },
    "DIME":
    {
      value: 10,
      onHand: 0
    },
    "QUARTER":
    {
      value: 25,
      onHand: 0
    },
    "HALF DOLLAR":
    {
      value: 50,
      onHand: 0
    },
    "ONE":
    {
      value: 100,
      onHand: 0
    },
    "FIVE":
    {
      value: 500,
      onHand: 0
    },
    "TEN":
    {
      value: 1000,
      onHand: 0
    },
    "TWENTY":
    {
      value: 2000,
      onHand: 0
    },
    "FIFTY":
    {
      value: 5000,
      onHand: 0
    },
    "ONE HUNDRED":
    {
      value: 10000,
      onHand: 0
    }
  };



function cashBoxEmpty() {
  for (var unit in cashBox) {
    if (cashBox.hasOwnProperty(unit)) {
      if(cashBox[unit].onHand > 0){
        return false;
      }
    }
  }
  return true;
}

function initCID(cid) {
  for(var i = 0; i < cid.length; i++){
    var denom = cid[i][0];
    var amount = Math.round(cid[i][1] * 100); //have to round due to floating point errors;
    cashBox[denom].onHand = amount / cashBox[denom].value;
  }
}

function reduceByMaxOnHand(value, change) {

}

function calculateChange(change) {
  var valSort = [];
  var retChange = [];

  for (var denom in cashBox) {
    if (cashBox.hasOwnProperty(denom) && cashBox[denom].onHand) {
      valSort.push(cashBox[denom].value);
    }
  }

  valSort.sort(function(a,b){
    return b - a;
  });



  for (var i = 0; i < valSort.length && change > 0; i++) {
    for (var unit in cashBox) {
      if (cashBox.hasOwnProperty(unit) && cashBox[unit].value == valSort[i]) {
        var subByTimes = (change / valSort[i] | 0) < (cashBox[unit].onHand) ? (change / valSort[i] | 0) : (cashBox[unit].onHand);
        if (subByTimes !== 0) {
          change -= valSort[i] * subByTimes;
          cashBox[unit].onHand -= subByTimes;
          retChange.push([unit, (valSort[i] * subByTimes)/100]);
        }
      }
    }
  }

  if(change > 0){
    return "Insufficient Funds";
  }

  if(cashBoxEmpty()){
    return "Closed";
  }

  console.log(Array.isArray(retChange));
  return retChange;
}

function drawer(price, payment, cid) {
  var change = Math.round((payment - price) * 100);
  initCID(cid);
  return calculateChange(change);
}



// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]
/*
Design a cash register drawer function that accepts purchase price
as the first argument, payment as the second argument, and
cash-in-drawer (cid) as the third argument.

cid is a 2d array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less
than the change due. Return the string "Closed" if cash-in-drawer
is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to
lowest order.
*/

//console.log(drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));// should return an array.
//console.log(drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); //  should return a string.
// drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
console.log(drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) ); // should return [["QUARTER", 0.50]].
console.log(drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) ); // should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
// drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
// drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
// drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed".
