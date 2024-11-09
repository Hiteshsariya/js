"use strict"; // treat all JS code as newer version 

// alert(3+3) // we are using nodejs , not browser

console.log(3
    
    +3) // code readability should be good 
    
console.log("hitesh")


let name = "hitesh"
let age = 18 
let isLoggedIn = false

//number ==> 2 to power 53
//bigint 
//string ==> ""
//boolean ==> true/false
// null ==> standalone value
// undefined ==> 
// symbol ==> unique 

// object 

console.log(typeof null)
console.log(typeof undefined)

/* primitive datatype 
number , boolean , string, null , undefined, bigInt, symbol

reference(non primitive) 
array, function, object
 
Q: is javascript dynamic or static 
javascript is dynamic because we do not need to specify the datatype while writing it javascript automatically distinguishes between at the time of code execution 


*/

const Id = Symbol('123')
const Id2 = Symbol('123')

console.log(Id===Id2)

console.log(typeof null)

const myFunction = function(){
console.log("hello world")

}
console.log(typeof myFunction)




