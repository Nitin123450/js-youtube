  // For loop 

  // shortcut for duplicate is => first select the word then ctrl + D

  for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(i)
    
  }

  // Nested loop 

  for (let i = 0; i <= 10; i++) {
    //   console.log(`Outer loop value is ${i}`);
      for (let j = 0; j < 10; j++) {
        //   console.log(`Inner loop ${j} and Inner value ${i} `)
        // console.log(i + " * " + j + " = " + i*j)
        
      }
  }

  // Loop on array 
    
  let myArray = ['Batman' , 'Superman'  , "Spiderman"]
  for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(`My Array values are ${element}`)
    console.log(element)
    
  }


  // break 

  for (let i = 1; i <= 20; i++) {
    if(i == 5){
      console.log("Detected 5")
      break
    }
     console.log(i)
    
  }

    // continue  => skip one iteration

  for (let i = 1; i <= 20; i++) {
    if(i == 5){
      console.log("Detected 5")
      continue
    }
     console.log(i)
    
  }

