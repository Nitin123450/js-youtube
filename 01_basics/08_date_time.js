//  Date 

let myDate = new Date()
console.log(myDate)   // gives the today date 

console.log(typeof(myDate))   // object 

console.log(myDate.toDateString())  
console.log(myDate.toString())
console.log(myDate.toLocaleString())

// let createdDate = new Date(2025 , 0 , 17)   // in js month starts from 0
let createdDate = new Date("2025-01-17")    // in format of yy-mm-dd
console.log(createdDate)
console.log(createdDate.toLocaleString())

// timsStamps in js

let myTimeStamp = Date.now()   // another way to create a date instance
                                 // gives the result in milliseconds from 1 jan 1970 

console.log(myTimeStamp) 
console.log(createdDate.getTime())   // gives a number in milliseconds   

console.log(Math.floor(Date.now()/1000))  // to get result in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)   // to get exact month not from 0

newDate.toLocaleString('default' , {    // we can pass object to locateString method 
                                         // and can see some more features (ctrl+space)
    weekday : "narrow",
    
})
console.log(newDate)