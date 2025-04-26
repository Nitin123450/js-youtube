// this keyword used to refer current context 

const user = {
    username : "nitin",
    price : 199,

     userMessage : function(){
        console.log(`${this.username} , you are welcome`);
        console.log(this)     // this here refering the cureent object user 
        
    }
}

user.userMessage()

user.username = "Abhishek"
user.userMessage()

console.log(this)     // In node it gives empty object {}

// this in function 

function chai (){
    let username = "Nitin"
    console.log(this.username )     // it gives undefined so it doesn't work in function 
}
chai()

// Arrow function and this 

const arrowFunction  = () => {
    let username = "Nitin"
    console.log(this.username )  // it gives undefined so it doesn't work in function     
}

    arrowFunction() 

    // some more about arrow function
    // const addTwo = (num1 , num2) => {
    //     return num1 + num2
    // }

    // Implicit return  => No need of curly braces and return statement 
    // const addTwo = (num1 , num2) => num1 + num2

    // const addTwo = (num1 , num2) => (num1 + num2)    // this is also a way 

    // if we want to return an object then 
      
    const addTwo = (num1 , num2) => ({username : "nitin"})

   

    console.log(addTwo(2,3))


    
    




