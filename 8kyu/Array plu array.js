// Description:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// My code:

function arrayPlusArray(arr1, arr2) {
    let sumOfArr = arr1.concat(arr2);
    return sumOfArr.reduce((acc, curr) => acc + curr, 0);
  }