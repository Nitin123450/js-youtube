// simple comparisions : result comes in boolean ( tre or false )

console.log(2 > 3)
console.log(2 < 3)
console.log(2 == 3)
console.log(2 >= 3)
console.log(2 <= 3)

// some difficult or confusing are
console.log(null > 0)   // false
console.log(null >= 0)   // true 
console.log(null == 0)    // false

// null evaluates differently when used in comaprision or equality 
// null value in comparision is 0

// strict check 
// In strict check value and type of the value both are checked

console.log( "2" == 2)  // true 
console.log("2" === 2)  // false as type are not same 
 