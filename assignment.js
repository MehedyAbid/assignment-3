// This function will take feet as an input and will show the respected mile for that amount of feet

function feetToMile(feet) {
  if (feet < 0) {
    return "Distance can never be negetive.Provide a positive value.";
  } else {
    let mile = feet / 5280;
    return mile;
  }
}
let mile = feetToMile(1); // This will call the function
console.log(mile);

/**  This function will take three parameter, the first one is chair count,then table count and then bed count and the function will provide the amount of wood needed to make those furniture.*/

function woodCalculator(chair, table, bed) {
  if (chair < 0 || table < 0 || bed < 0) {
    return "Negetive number can not be accepted.Provide a valid number to get the total wood amount ";
  } else {
    let totalWood = chair * 1 + table * 3 + bed * 5;
    return totalWood;
  }
}
let totalWoodNeeded = woodCalculator(1, 1, 2); //this will call woodCalculator function
console.log(totalWoodNeeded);

/**  brickCalculator function take total floor of the building as an input, and calculate total brick needed to build that building */

function brickCalculator(totalFloor) {
  if (totalFloor <= 0) {
    return "Building height can not be 0 or negetive";
  } else if (totalFloor <= 10) {
    let totalBrickNeeded = totalFloor * 15 * 1000;
    return totalBrickNeeded;
  } else if (totalFloor <= 20) {
    let extraFloor = totalFloor - 10; //this will calculate the amount of  total floor after 10th floor
    let totalBrickNeeded = 10 * 15 * 1000 + extraFloor * 12 * 1000;
    return totalBrickNeeded;
  } else {
    let extraFloor = totalFloor - 20; //this will calculate the amount of total floor after 20th floor
    let totalBrickNeeded =
      10 * 15 * 1000 + 10 * 12 * 1000 + extraFloor * 10 * 1000;
    return totalBrickNeeded;
  }
}
let totalBrickNeeded = brickCalculator(22); //this will call the function brickCalculator

console.log(totalBrickNeeded); // This will display the output

// This function will take an array of friends name or strings and will generate the shortest name of the friend or string

function tinyFriend(friendsNameArray) {
  if (friendsNameArray.length == 0 || friendsNameArray.length == 1) {
    return "Please provide at least two name in the array";
  } else {
    let smallestName = friendsNameArray[0]; //assuming the first name from the array is the smallest name of the entire array

    let smallestNameLength = friendsNameArray[0].length; // length of the first array

    for (let i = 1; i < friendsNameArray.length; i++) {
      let currentNameLength = friendsNameArray[i].length;
      if (currentNameLength < smallestNameLength) {
        smallestName = friendsNameArray[i];
        smallestNameLength = currentNameLength;
      }
    }
    return smallestName;
  }
}
let smallestFriend = tinyFriend([
  "abid",
  "onu",
  "Mostakim",
  "tanvir",
  "Mehedy",
]); // Passing Friends name as an array and calling the tinyFriend function

console.log(smallestFriend);
