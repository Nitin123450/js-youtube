// IIFE => Immediately Invoked Function Expression 
    // It is used when we want our function to execute suddenly after we start 
    // basically used to reduce the chance of code polluted via global scope variables 
    // for this we need to wrap the complete function definition in paranthesis ()

    (function chini() {
        // This is named IIFE having a name called chini
        console.log("DB Connected");
      })();     // we need this ; because the iife doesn't know when to stop 
                // and it will not let other code to run 

    
   ( (name) => {                             // Now it runs otherwise not 
    // Simple iife without name                              
    console.log(`DB connected two , ${name}`)
   })("Nitin")
