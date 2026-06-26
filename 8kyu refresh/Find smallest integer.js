// Given an array of integers your solution should find the smallest integer.

// My code:

function findSmallestInt(arr) {
  return arr.sort((a, b) => a - b).shift()
  
}