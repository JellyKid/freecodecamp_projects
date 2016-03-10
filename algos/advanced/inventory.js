function convertToObject(array) {
  var object = {};
  for (var i = 0; i < array.length; i++) {
    object[array[i][1]] = array[i][0];
  }
  return object;
}

function convertFromObject(object) {
  var array = [];
  for (var item in object) {
    if (object.hasOwnProperty(item)) {
      array.push([object[item],item]);
    }
  }
  return array;
}

function alphabetical(a,b) {
  for (var i = 0; i < a[1].length; i++) {
    if(b[1][i] === null){
      return 0;
    }
    if(a[1][i] > b[1][i]){
      return 1;
    }
    if(a[1][i] < b[1][i]){
      return -1;
    }
  }
  return 0;
}

function inventory(arr1, arr2) {
    var currentInventory = convertToObject(arr1);
    var newInventory = convertToObject(arr2);
    for (var item in newInventory) {
      if (newInventory.hasOwnProperty(item)) {
        if(currentInventory.hasOwnProperty(item)){
          currentInventory[item] = currentInventory[item] + newInventory[item];
        } else {
          currentInventory[item] = newInventory[item];
        }
      }
    }
    return convertFromObject(currentInventory).sort(alphabetical);
}



console.log(inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
//should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
/*
Compare and update inventory stored in a 2d array against a
second 2d array of a fresh delivery. Update current inventory
item quantity, and if an item cannot be found, add the new
item and quantity into the inventory array in alphabetical order.

Remember to use Read-Search-Ask if you get stuck. Try to pair
program. Write your own code.

Here are some helpful links:
*/

// inventory() should return an array.
// inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length should return an array with a length of 6.
// inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
// inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
// inventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
// inventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
