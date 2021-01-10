
    function game() {
    const computerNumber = Math.floor(Math.random() * 100);
    let userGuess = 0;
    let x = 0;
    //console.log ('computerNumber ' + computerNumber);
    //console.log ('userGuess ' + userGuess);
    while (x < 5) {
        userGuess = parseInt(prompt('Guess a number (1 - 100)'));
        console.log ('X ' + x);
        if (userGuess < computerNumber) {
            x = x + 1;
        }
        if (userGuess > computerNumber) {
            x = x + 1;
        }
        if (x > 5 ){
            console.log ('you are out of trys');
            break;
        }
        if (computerNumber == userGuess) {
            console.log('You are right!!');
            break;
        } else if (computerNumber > userGuess) {
             console.log('Too low')
            } else {
            console.log('Too high');
                        
        }
    }
}
    

