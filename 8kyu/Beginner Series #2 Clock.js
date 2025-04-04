// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
//My code

function past(h, m, s){
  
    m = m * 60000
    s = s * 1000
    h = h * 3600000;
     
     return h + m + s
    }