// Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"
// Examples
// 9  -->  "25-16"
// 5  -->  "9-4"
// 7  -->  "16-9"

const findSquares = num => {
let a=(num-1)/2
let b=a+1
return `${b*b}-${a*a}`;
};
