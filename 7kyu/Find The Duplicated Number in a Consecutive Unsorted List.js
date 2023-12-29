
function findDup( arr ){
return arr.sort((a,b)=>a-b).filter((item,i,arr)=>item===arr[i+1])*1;
};

// return arr.sort (function (a,b){
// return(a-b)};).filter (function (item,index,arr){
// return item === arr[i+1]
// };)
// };