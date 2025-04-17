// Some more info about arrays

const marvel_heroes = ["ironman" ,"thor" ,"spiderman"]
const dc_heroes = ["flash" , "batman" , "superman"]

// marvel_heroes.push(dc_heroes)   // adds the dc_heroes as a array in the marvels
                                // so not a good practice 
// console.log(marvel_heroes)

const combine_heroes = marvel_heroes.concat(dc_heroes)  // makes a new array without modifying existing one
console.log(combine_heroes)

// Instead of concat we prefer to use spread method

const all_new_heroes = [...marvel_heroes,...dc_heroes]  // we can spread number of arrays no limit
console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6,[7,8,9]]]  // array of arrays 
// if we need all the elements in one single array 
// then we can use flat() method 

const new_another_array = another_array.flat(2)    // 2 here is depth , till what no. of arrays we want to flat
console.log(new_another_array)


// we can check whether value we got is array or not 

console.log(Array.isArray("nitin"))   // false
console.log(Array.from("nitin"))   // to convert in array

// we can pass string and objects as well to 
console.log(Array.from({name : "nitin"}))   // interesting it gives empty array 


// combining values and making an aray 
// we can use Array.from() or Array.of() method

let value1 = 100
let value2 = 200 
 let value3 = 300 

 console.log(Array.of(value1,value2,value3))  // gives an array 
