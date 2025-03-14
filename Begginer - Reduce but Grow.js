// Description:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// My code:

function grow(x){
    let multiOfX = x.reduce((a, c) => a * c, 1);
     return multiOfX
   }