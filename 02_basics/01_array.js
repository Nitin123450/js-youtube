// Arrays 


let myArr = [1,2,3,4]  // use square brackets to declare
console.log(typeof(myArr))   // object 

let myArr2 = new Array(1,2,3,4 )  // Another way to define 

let myArr3 = [1,"nitin", 3,"true"] // can store different datatypes at a time

console.log(myArr3[1])  // accessing array elements

// Array methods

myArr.push(6)  // added element to the end 
myArr.pop()    // removes last element
myArr.unshift(9)  // adds element at the first (not a good method)
myArr.shift()   // removes the first element
console.log(myArr.includes(9))  // for finding any element (present or not )
console.log(myArr.indexOf(9))  // gives -1 as not present
 
let myArr4 = myArr.join()   // it copies the array in the new array but
                            //  return the values as a type of string
console.log(myArr4) 
 
// slice and splice method

console.log("A" , myArr)

const newArr = myArr.slice(1,3)  // returns a part of original but as a copy 
console.log(newArr)


const colors = ["red" , "yellow" , "blue" ,"orange" , "pink" , "white"] 
colors.splice(0,2)
console.log(colors)

