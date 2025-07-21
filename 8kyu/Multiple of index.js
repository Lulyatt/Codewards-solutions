// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// My code:

function multipleOfIndex(arr) {
  return arr.filter((value, index) => index === 0 ? value === 0 : value % index === 0);
}
