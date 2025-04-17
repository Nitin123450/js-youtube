const score = 100
console.log(score)

const balance = new Number(500)
console.log(balance);

console.log(balance.toString())   // change to string
console.log(balance.toString().length)

console.log(balance.toFixed(2))   // to fix the precision value to some point

const anotherNumber = 789.99
console.log(anotherNumber.toPrecision(4))

const anotherNumber2 = 1000000
console.log(anotherNumber2.toLocaleString())   // use US standards 
console.log(anotherNumber2.toLocaleString('en-IN'))   // converting in indain standards

// ++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++

console.log(Math)   // Math is a object have many properties

console.log(Math.abs(-5))   // gives absolute value as 5
console.log(Math.round(4.5))  // gives the roundof value as 5
console.log(Math.ceil(4.5))  // choosing the upper value as 5
console.log(Math.floor(4.5))  // choosing the lower value as 4
console.log(Math.sqrt(25)) // gives the square root of 25 as 5
console.log(Math.pow(4,2))   // gives 4*4 = 16
console.log(Math.max(2,3,4,5))  // gives the maximum from all of these
console.log(Math.min(2,3,4,5))   // gives the minimum from all of these


// Most useful method 

// Math.random()

console.log(Math.random())   // 0-1
console.log(Math.floor(Math.random() ) + 1)  // to avoid getting 0
console.log(Math.floor(Math.random() * 10) + 1)

// to get a value in between a min amd max range 

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
