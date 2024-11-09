// console.log(2>1) 
// console.log(2>=1) 
// console.log(2<=1) 
// console.log(2==1) 

console.log("2" > 1)
console.log("2">="1") 
console.log("2" > "3") //important note comparision like this are done by first conversion and then comparision. Here the values are first converted to number and then compared 

console.log(null < 0)
console.log(null == 0) //important note (==) and (<=,>=) are not treated as same in javascript so the equalities (<=,>=) are giving true because the value of null is converted to number which is 0 and then compared to zero but in case of (==) value of null is not converted to 0 
console.log(null <= 0)
console.log(null >= 0)

// we can also use (===) to do a strict comparision 
console.log(null === 0)
console.log("0" === 0) // important note==> if there were (==) instead of (===) the output would have been true but we get false because we are doing strict comparision which also checks the data types of the values which are compared 




