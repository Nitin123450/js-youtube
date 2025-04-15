// 1. Primitive (call by value)

// 7 types : string , number , boolean , null , undefined , Symbol , bigInt
 
// Note : JavaScript is a dynamically typed language. 
//        This means that the type of a variable is not checked at compile time

// Examples
let score = 100
let name = "nitin"
let isBool = true
let a = null ; 
let b; // undefined 


let id = Symbol('123')
let anotherId = Symbol('123')
console.log(id == anotherId)  // false as both are unique 

let bigNumber = 65738976455373883n  // bigInt


// 2. Non-primitive or reference type (call by reference)

// types : Array , objects , functions

let myArr = ["nitin" , "saurbh"] 

let myObj = {
    name : "nitin",
    age : 23
}
const myFunction = function (){
    console.log("Hello World!");
    
}


// Way to find the type : use The typeof operator returns a string indicating the type of the operand's value.
console.log(typeof score ) // number
console.log(typeof a  )  // object
console.log(typeof b)   //undefined
console.log(typeof bigNumber)  //bigInt
console.log(typeof id)  // symbol

console.log(typeof myArr)   // object
console.log(typeof myObj)  //object
console.log(typeof myFunction)  // function-object