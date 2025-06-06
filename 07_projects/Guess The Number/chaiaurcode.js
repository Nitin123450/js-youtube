let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numberGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click' , function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });

}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    } else if(guess < 1){
        alert("Please enter number greater than 0")
    } else if( guess >100){
        alert("Please enter a number less than 100")
    } else {
        prevGuess.push(guess);
        if(numberGuess == 11 ){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)

        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
    }else if( guess < randomNumber){
        displayMessage(`Number is TOOO low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is TOOO High`)
    }
}

function displayGuess(guess){                // clean up method
     userInput.value = ''
       guessSlot.innerHTML += `${guess}  `  // displaying the previous guesses 
     numberGuess++;
     remaining.innerHTML = `${11 - numberGuess}` ;    // displaying the no. of guesses left 

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`         // displaying message whether guess is right or wrong
}

function endGame(){
   userInput.innerHTNL = ''
   userInput.setAttribute('disabled' , '');       // disabled takes two argument (key,value pair)
    p.classList.add('button')
    p.innerHTML  = '<h2 id = "newGame">Start new Game</h2>'
    startOver.appendChild(p);
    playGame = false
    newGame()
}

function newGame(){
  const newGameButton  = document.querySelector('#newGame')
      newGameButton.addEventListener('click' , function(e){
         randomNumber = parseInt(Math.random() * 100 + 1);
         prevGuess = []
         numberGuess = 1;
         guessSlot.innerHTML = ''
         remaining.innerHTML = `${11 - numberGuess}` ;
         userInput.removeAttribute('disabled')
         startOver.removeChild('p')
        playGame = true
      })
}