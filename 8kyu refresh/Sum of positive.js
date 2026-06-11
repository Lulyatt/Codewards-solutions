// Description:
// Task
// You get an array of numbers, return the sum of all of the positives ones.


function positiveSum(arr) {
  let sum = arr.filter(num => num > 0).reduce((acc,curr) => acc + curr, 0);
  return sum
}