//You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

//Examples:

//uniTotal("a") == 97
//uniTotal("aaa") == 291

function uniTotal (str) {
let res=0
for (i=0;i<str.length;i++){
  res+=str.charCodeAt(i)
  }return res
}