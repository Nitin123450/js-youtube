const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
// console.log(buttons)

buttons.forEach(function(button){
    //  console.log(button)

    button.addEventListener('click', function (e) {    // e => event object
        console.log(e);                                // gives the event object
        console.log(e.target)                           // from where the object came

        switch(e.target.id){
            case 'grey' : body.style.backgroundColor = e.target.id
            break;

            case 'white' : body.style.backgroundColor = e.target.id
            break;

            case 'blue' : body.style.backgroundColor = e.target.id
            break;

            case 'yellow' : body.style.backgroundColor = e.target.id
            break;

            default : console.log('click on color box please')
            break;

        }
    })
})