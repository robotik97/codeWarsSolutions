//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//Return your answer as a number.

function sumMix(x){
let res=x.map (Number)
return res.reduce ((sum,num)=>sum+num)
}