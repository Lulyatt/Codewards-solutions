// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// My code:

function aliasGen(first, last) {
  return /^[a-z]/i.test(first) && /^[a-z]/i.test(last)
    ? `${firstName[first[0].toUpperCase()]} ${surname[last[0].toUpperCase()]}`
    : "Your name must start with a letter from A - Z.";
}
