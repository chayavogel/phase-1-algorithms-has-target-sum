// 1) Rewrite the Problem in Your Own Words:
// I have an array of numbers and a target number. I need to create a function that will check if there are two numbers in the array that add up to equal the target number. The arguments of the function will be the array and the target number.

// 2) Write Your Own Test Cases:
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([4,6,8,2,4], 14));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1,1,1,1], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1,1,1,1], -5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1], 3));
}

// Pseudocode:
// Add each element of the array to every single other element and see if the equal to the target value.

// Code:
function hasTargetSum(array, target) {
  // Iterate through the array, and assign the index to i.
  let firstNumIndex= 0
  while (firstNumIndex < array.length) {
    // Then iterate through the array again from the index of the current value of i +1) and assign the index to j.
    for (let secondNumIndex= 1; (secondNumIndex >= (firstNumIndex + 1)) && (secondNumIndex < array.length); secondNumIndex++) {
      // Within that nested loop, check if the sum of the value at i and the value at j equal to the target number. If yes, return true. If false, add 1 to the value of i.
      if ((array[firstNumIndex] + array[secondNumIndex] === target) === true) {
        return true
      }
    }
  }
  // Repeat.
  firstNumIndex++
}

// Make It Clean and Readable:

// Optimize:

// Add written explanation of your solution here:

// Write the Big O time complexity of your function here


module.exports = hasTargetSum;
