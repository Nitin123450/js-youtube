

// const coding = ["JS" , "ruby" , "java" , "cpp" , "python"]

// const values = coding.forEach( (item) =>{       // forEach doesn't return anything
//     console.log(item)
//     return item
// } )



// filter 

const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = nums.filter( (item) => (item > 4) )   // returns element satisfy that condition
// console.log(newNums)

// same using with forEach loop 

const newNums = []
nums.forEach((item) => {
    if(item > 4){
       newNums.push(item)
    }
} )

// console.log(newNums) 

// Example 

const books = [
    {
     title1 : 'Book One',
     genre : 'fiction',
     published : 1991
    },
    {
     title1 : 'Book Two',
     genre : 'Non-fiction',
     published : 1992
    },
    {
     title1 : 'Book Three',
     genre : 'fiction',
     published : 1993
    },
    {
     title1 : 'Book Four',
     genre : 'Maths',
     published : 1994
    },
    {
     title1 : 'Book Five',
     genre : 'History',
     published : 1995
    },
    {
     title1 : 'Book Six',
     genre : 'Science',
     published : 1996
    },
    {
     title1 : 'Book Seven',
     genre : 'Non-fiction',
     published : 1997
    },
];

const bk = books.filter( (item) => item.genre == 'fiction' )
// console.log(bk)


// Map  => It automatically returns values like filter

let myArray = [1,2,3,4,5,6,7,8,9,10]

// let newnums = myArray.map( (item) => item = item + 10 )
// console.log(newnums)

// chaining 

let newNumbers = myArray
                        .map( (num) => num = num * 10 )
                        .map( (num) => num = num + 1 )  // This map works after the completion of first 
                        .filter( (num) => num >= 40 )
                        // console.log(newNumbers)


// reduce 

let score = [1,2,3]

// let total = score.reduce( function (accumulator , currentValue) {

//     console.log(`Acc : ${accumulator} and current value is : ${currentValue}`)

//     return accumulator + currentValue
// },3 )


// using arrow function 
let total = score.reduce( (acc, currval) => acc + currval , 3) 

// console.log(total)   // 9

// Another expample 

const shoppingCart = [
    {
       courseName : 'Js',
       price : 2999
    },
    {
       courseName : 'py',
       price : 999
    },
    {
       courseName : 'Java',
       price : 3999
    },
]

let totalPay = shoppingCart.reduce( (acc , item) => item.price + acc ,0)
console.log(totalPay)