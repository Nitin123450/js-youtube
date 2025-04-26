// functions

function sayMyName(){     // Definition of a function
    console.log("N")
    console.log("I")
    console.log("T")
    console.log("I")
    console.log("N")
}

// sayMyName()   // Calling a function

// Adding two numbers 

function add (number1 , number2){
    let result = number1 + number2
    return result       
    console.log("Nitin")    // After hitting return no code is executed in function
}

 const result = add(2,3)
//  console.log(result)

 // Another example

//  function userLoggedIn(username){
//     // if(username === undefined)      // checking whether a username given or not 
//         if(!username)            // same but professional
//         {
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} is logged in `
//  }

 function userLoggedIn(username = "sam"){       // giving default value in case value is not passed
    // if(username === undefined)      // checking whether a username given or not 
        if(!username)            // same but professional
        {
        console.log("Please enter a username")
        return
    }
    return `${username} is logged in `
 }

 console.log(userLoggedIn())



 // Rest operator (...)

 function shoppingCart( val1 , val2 , ...num){   // first two values goes to val1 & val2 rest goes to num
    return num                     // returns an array of all values
 }

 console.log(shoppingCart(200,300,400 ,500,600))   
 
 // Objects in function

 const user = {
    username : "nitin",
    price : 199
 }

 function passingObject (anyObject){      // anyObject = user or anything as we want 
    return `username is ${anyObject.username} and price is ${anyObject.price}`

 }

//  console.log(passingObject(user))   // one way 
 console.log(passingObject({         // another way to directly pass a object 
    username : "nitin",
    price : 199
 }))

 // Array in function 

 const myNewArray = [100,200,300,400]

 function returnSecondValue(anyArray){
    return anyArray[1]
 }

 console.log(returnSecondValue(myNewArray))   // one way 
 console.log(returnSecondValue([100,200,300,400]))   // direct passing the values