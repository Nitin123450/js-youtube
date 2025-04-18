// More about objects

// const objectUser = new Object()  // declaring singleton object using object constructor
  
// objects of object
   const someUser = {
    name : "Nitin",
    fullname : {
        userfullname : {
            firstname : "nitin",
            lastname : "yadav",
        }  
    }
   }

   // Accessing values
   console.log(someUser.fullname.userfullname.firstname)

   // combining objects 

   const obj1 = {1:"a" , 2:"b"}
   const obj2 = {3:"a" , 4:"b"}
//    const obj3 = {obj1 , obj2}   // not a good practice because it becomes objects of object
   
    // const obj3 = Object.assign(obj1,obj2)
//     console.log(obj1)
//    console.log(obj3) 

// another way 

// const obj3 = Object.assign({} ,obj1,obj2)  // an empty object so all copies to this empty object 

// Best way is to use spread 
const obj3  = {...obj1,...obj2}
console.log(obj3)
   
// Array of objects 
const users = [
    {
        id : 1,
        email : "nitin"
    },
    {
        id : 1,
        email : "nitin"
    },
    {
        id : 1,
        email : "nitin"
    }
]

// Accessing values 
console.log(users[0].email)

// Accessing keys and values of object 
const tinderUser = {
    name:"nitin",
    id : 1
}

console.log(Object.keys(tinderUser))  // it returns an array of keys 
console.log(Object.values(tinderUser))  // same

console.log(Object.entries(tinderUser))  // gives array of arrays of each individual key - value pair


// to check whether a property exist in a object or not 
console.log(tinderUser.hasOwnProperty("isLoggedIn"))  // gives false

// Destructuring of objects 

const user = {
  courseName : "JavaScript",
  courseInstructor : "Hitesh",
  fees : 999
}

const {courseInstructor : instructor} = user   // Destructuring (to get the result from object keys )
  console.log(instructor)   // Hitesh 