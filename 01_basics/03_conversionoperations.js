let score = "33"

console.log(typeof(score))

let scoreInNumber = Number(score)  // converting string to number (use datatypes in capital)
console.log(scoreInNumber)
console.log(typeof(scoreInNumber))

//  "33" => 33
// "33abd" => NaN
// true => 1 and false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); 

let isLoggedOut = ""
let booleanIsLoggedOut = Boolean(isLoggedOut)
console.log(booleanIsLoggedOut);

 // 1 => true and 0 => false 
 // "" => false and "nitin" => true

 let number = 33
 let stringNumber = String(number)
 console.log(stringNumber)
 console.log(typeof(stringNumber))  // string



 // ******************************operations*****************************

 // Arithmetic operations as we all knew

// console.log(2 + 2)  // 4 (Addition)
// console.log(2 - 2)  // 0  (subtraction)
// console.log(2 * 2)  // 4  (multiplication)
// console.log(2 ** 2) // 4 , power (2 raise to power 2)
// console.log(2 % 2)   // 0 (modulous operator)
// console.log(2 / 2)    // 1  (divide)


// prefix and postfix
 
// postfix : first value is used then increment or decrement 
let a = 2
let b = ++a
console.log(a , b) // 3 , 2 

// prefix : first value is increment or decrement then used 
let x = 3
let y = x++
console.log(x , y) // 4 , 4



