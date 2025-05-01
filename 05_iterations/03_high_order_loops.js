// high order loops 

// for of loop 

let numbers = [1,2,3,4]
for (const nums of numbers) {
    // console.log(`Numbers are ${nums}`)
}

let greetings = "Hello World!"

for (const greet of greetings) {
    if(greet == ' ')
        continue
    // console.log(`Each character is ${greet}`)
}

// Map  => object

let map = new Map
map.set('IN' , "India")
map.set('usa' , "United States Of America")
map.set('Fr' , "France")

// console.log(map)

for(const [ key , value] of map){    // to access both key and value at a time
    // console.log(key, ':-' ,value)
}


// const myObject = {
//     'game1' : "Spiderman",
//     'game2' : 'cricket',
//     'game3' : 'COD'
// }

// for (const [key , value] of myObject) {
//     console.log(key, ':-' ,value)        // this myObject is not iterable
// }