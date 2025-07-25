// Description:
// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

// The resulting array is sorted in ascending order.

// Any duplicate values are removed, so each integer appears only once.

// If both input arrays are empty, return an empty array.

// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

// My code:

function mergeArrays(arr1, arr2) {
  let mergedArray = arr1.concat(arr2)
  return sort(mergedArray.filter((value, index, self) => {
    return self.indexOf(value) === index;
  }))
}