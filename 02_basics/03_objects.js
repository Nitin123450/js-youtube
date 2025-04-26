// objects 

// Singleton ---> when object created using object constructor 
// Not-singleton ---> when created using object literals



// object literal
  // define a symbol and adding it to the object to print it 
  const mySym = Symbol("key1")

const jsUser = {
    name : "nitin",
    email : "nitin@google.com",
    "full name" : "Nitin yadav",
    [mySym] : "myKey"
}

console.log(jsUser)

// Accessing object values
// Basically used two ways 
// 1.
console.log(jsUser.name)

// 2.
console.log(jsUser["full name"])   // Best way because if key is given as string then
                                   // we can't use .(dot) operator method to access

// Accessing Symbol value 
console.log(jsUser[mySym])    // This is the only way 

// to change a value in object 

jsUser.email = "nitin@gmail.com"

console.log(jsUser)   // eamil value is changed

// We can freeze a object means then the value cant be changed or no
// new key value is added

// Object.freeze(jsUser)

jsUser.email = "nitin@yahoo.com"   // this value will not be changed due to freeze()
console.log(jsUser)

jsUser.greeting = function(){
  console.log("Hello js User")
}

console.log(jsUser.greeting)   // ---> it gives function anonymous
console.log(jsUser.greeting())   // ---> now we get output

jsUser.greetingTwo = function(){
  console.log(`Hello jsUser ${this.name}`)   // this is used when we want to refer the variable
                                               // or property of the same object
}

console.log(jsUser.greetingTwo())





