// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).
// It is guaranteed that a and b are both present in arr.

function consecutive(arr, a, b) {
  for (let i=0; i<arr.length-1; i++){
    if (arr [i] == a){
      return arr [i+1] == b
    }
    if (arr [i] == b){
      return arr [i+1] == a
    }
  }
  return false
}
