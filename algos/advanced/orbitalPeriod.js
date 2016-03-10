/*
Return a new array that transforms
the element's average altitude into
their orbital periods.

The array will contain objects in the
format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on
wikipedia.

The values should be rounded to the
nearest whole number. The body being
orbited is Earth.

The radius of the earth is 6367.4447
kilometers, and the GM value of earth
is 398600.4418
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var pi = 3.1415926535897932384626433832795;
  var retArr = [];
  for (var i = 0; i < arr.length; i++) {
    var period = Math.sqrt(((4*Math.pow(pi,2))/GM)*(Math.pow(arr[i].avgAlt + earthRadius, 3)));
    retArr.push({
      name: arr[i].name,
      orbitalPeriod: Math.round(period)
    });
  }
  return retArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

/*
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
*/
