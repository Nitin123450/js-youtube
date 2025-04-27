// If - Else 
 
// let temp = 41

// if(temp ===41){
//     console.log("Temperature is less than 50")
// } else{
//     console.log("Temperature is more than 50")
// }

// console.log("executed")

// var has a global scope

// if(true){
//     var power = "fly"
    
// }

// console.log(`power is ${power}`)      // it still runs because var has global scope but bad approach


// if - else if 

// const balance = 1000

// if(balance < 500){
//     console.log("less than 500")
// } else if(balance < 750){
//     console.log("less than 750")
// } else if (balance < 900){
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }


// checking multiple statements 

const userLoggedIn = true
const debitCard = true 
const emailLoggedIn = true
const gogleLoggedIn = false


if(userLoggedIn && debitCard){             // both statements should be true
    console.log("You can do shopping")
}

if(emailLoggedIn || gogleLoggedIn){
    console.log("User logged in ")
}


