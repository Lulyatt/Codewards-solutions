// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"

// My code:


function replace(s) {
  const vowels = "AEIOUaeiou";
  return s.split("").map(char => vowels.includes(char) ? "!" : char).join("");
}
