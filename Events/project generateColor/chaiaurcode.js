//  generating a random color 
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// console.log("Random Color: " + getRandomColor());

  let intervalId;

const startChangingColor = function(){
    
      // safety check   --> if intervalId is null then 
      if(!intervalId){        
        intervalId =  setInterval(changeBgColor,1000)
      }
   
      function changeBgColor () { 
        document.querySelector('body').style.backgroundColor = getRandomColor()
    }
  
}

const stopChangingColor = function(){
    clearInterval(intervalId)
      intervalId = null
}

document.querySelector('#start').addEventListener('click' , startChangingColor)
document.querySelector('#stop').addEventListener('click' , stopChangingColor)
