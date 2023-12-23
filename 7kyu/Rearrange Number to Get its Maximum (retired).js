// Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.
// Return -1 if the argument is not valid
// Return null (nil for Ruby, nothing for Julia) if the argument is not valid.

let maxRedigit = function(num) {
  if ( num<=0 || String(num).length !==3 ) {
    return null
 } 
  let a = String(num)
      return Number([...a].sort((a, b) => Number(b) - Number(a)).join(''))
  }
