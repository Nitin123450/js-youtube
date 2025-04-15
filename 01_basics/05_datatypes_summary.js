// 1. Primitive (call by value)

// 7 types : string , number , boolean , null , undefined , Symbol , bigInt
 
// Note : JavaScript is a dynamically typed language. 
//        This means that the type of a variable is not checked at compile time

  /* Description : //datatypes are based on memory allocation
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify
 the data type of a variable when you declare it.
*/


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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory management

// stack (Primitive Datatype)     Heap (Non-primitive )

let name1 = "nitin"
let name2 = name1 
console.log(name1)  // nitin
console.log(name2)  // nitin  
name2 = "Nitin2"
console.log(name1 )  // nitin
console.log(name2)  // Nitin2  , because copy of value is used not the reference

let obj1 = {
    email : "nitin@google.com",
    upi :  "nitin@ybl"
}

let obj2 = obj1   

console.log(obj1)
console.log(obj2)

 obj1.email = "nitin@gmail.com" 

 console.log(obj1)  // value is changed as the reference of the object is used (eamil: "nitin@gmail.com")
 console.log(obj2)




