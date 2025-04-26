// Scopes 

// let a = 12      // All are defined as global and used inside a block 
// const b = 15
// var c = 30

// if(true){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

var c = 300    

if(true){
// Defined inside a block (block scope )
   let a = 12 
   console.log("InNER : ", a)    // prints 12      
   const b = 15
  var c = 30
}

    // console.log(a)      // cannot be used out of the loop (block scope )
    // console.log(b)      // same (block scope )
    console.log(c)         // prints 30 (this is the problem with var )



    // function inside a function 

    function one(){
        const username  = "nitin"

        function two(){
            const website = "www.nitin.com"
            console.log(username)   // it runs as child function can take the values of parent function
        }
        // console.log(website)   // it throws error as child function value cant be accessed by parent function

        two()
    }

    one()

    // if condition inside another if 
     
    if(true){
        const username = "nitin"

    if(username === "nitin"){
        const website =  " youtube"
        console.log(username)        // it prints nitin 

    }
    // console.log(username + website)   // gives error as website cant be acessed out of its block scope
}

// console.log(username)          // error as username cant be acessed out of the if block 



// +++++++++++++++++++ Interesting ++++++++++++++++++++++++++

console.log(addOne(5))   // this is also right we can call a function before its declaration 
function addOne(num){
    return num+1
}

console.log(addOne(5))    // this gives 6  


// addTwo(5)     // here it will show error we Cannot access 'addTwo' before initialization 
  
const addTwo = function (num) {    // this is called function expression 
    return num+2
}

console.log(addTwo(5))     // it is okay 
