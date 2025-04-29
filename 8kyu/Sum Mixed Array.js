// Description:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My code:

function sumMix(arr) {
    return arr.reduce((sum, val) => sum + Number(val), 0);
  }
