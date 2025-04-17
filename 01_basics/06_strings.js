// About string

let name = "ni-t-in"  // Declaring a string variable name

const name2 = new String("nitin")   // by using new and string constructor (values stored in key value pairs)
console.log(`My name is ${name2}`)   // using string interpolation 
console.log(name2[0])  // accessing value using key 

console.log(name.__proto__)  

console.log(name2.length)
console.log(name2.toUpperCase())
console.log(name2.charAt(3))
console.log(name2.indexOf('i'))
console.log(name2.substring(0,4))
console.log(name2.slice(-5,4))

const anotherString = "    nitin    "

console.log(anotherString)

console.log(anotherString.trim())

const string1 = "https://nitin%20.com"
console.log(string1.replace('%20' , '-'))
console.log(name2.includes('nitin'))
console.log(name2.includes('sundar'))
console.log(name.split('-',2))

