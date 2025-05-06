// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// My code:

function nameShuffler(str){
  return str.split(" ").reverse().join(" ")
}