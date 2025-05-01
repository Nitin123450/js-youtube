// Iterate over object
// for in loop => It gives index or keys directlty not values 

const myObject = {
    js : "JavaScript",
    cpp : "C++",
    Rb : "Ruby"
}

for (const key in myObject) {
      // console.log(key)
      console.log(`${key} is used for ${myObject[key]}`)
        
    }

    // for in loop on array 

    const programming = ['js' , 'rb' , 'java']
    for (const key in programming) {
      // console.log(key)

      console.log(programming[key])
    
    }
