// truthy and falsy values 
// some values are considered as truthy and some as falsy in boolean context 
//falsy values : 0, -0, 0n(BigInt) , NaN , null , undefined , "" (empty string) , false
// truthy values : Everything else left are truthy values 
// some surprising truthy values are : "0" , " " , 'false' ,[] , {} , function() {} (empty function)

// const user = "nitin@gmail.com"    // truthy value
const user = ""                       // falsy value

if(user){
    console.log("User has email address");
    
} else {
    console.log("User don't have email address");
    
}

// checking array is empty or not 

let user1 = []

if(user1.length === 0){
    console.log("Array is empty")
}

// checking object is empty  or not 

const tinderUser = {}

// console.log(Object.keys(tinderUser))  // it returns an array of keys

if(Object.keys(tinderUser).length === 0){      // checking the length of array 
   console.log("object is empty")
}  


// Nullish Coalescing operator (??) : used to handle null and undefined 

// let val1 = 10 ?? 20    // 10
// let val1 = null ?? 10     // 10 
// let val1 = undefined ?? 10   // 10 
let val1 = null ?? 20 ?? 10     // 20 


console.log(val1)

// terniary operator 
// syntax : 
// condition ? true : false 

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log("more than 80 ");

