// Description:
// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// My code:

function findAverage(array) {
    if (array.length === 0) return 0;
 let sum = array.reduce((total, num) => total + num, 0);
 return sum / array.length
 }