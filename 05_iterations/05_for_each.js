// forEach loop 

const coding = ["JS" , "ruby" , "java" , "cpp" , "python"]

coding.forEach( function (item) {    // callback function is without name 
    // console.log(item)
})

coding.forEach( (item) => {         // Arrow function
    // console.log(item)
} )

function iterate(item){
    console.log(item)
}

// coding.forEach(iterate)   // passing reference of a function to forEach()


coding.forEach( (item , index , arr) => {      // it can take upto three parameters (item , index , array)
    // console.log(item,index,arr)
} )  


// Array of objects 

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) =>{
    //  console.log(item)    // return all the three objects
    //   console.log(item.languageName)
    console.log(item["languageName"])
} )