var alphabets =  [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var myguesses = " ";


document.onkeypress = function(event)
{

   //computer randomly picks a letter

     var computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)];
     var userGuess = event.key;

//if user picks the correct letter
//win column goes up

        //displaying the guesses in the form a, e, j, 
        myguesses = myguesses + " " + event.key;

    if(userGuess == computerGuess)
    {
        wins = wins + 1; 

        //resets
        guessesLeft = 9;
        myguesses  = " ";
    }
    else
    {
        guessesLeft = guessesLeft - 1;


    }

    if(guessesLeft == 0)

    {

        alert('You Lost! You are not a psychic!');
        losses = losses + 1;
        guessesLeft = 9;
        myguesses  = " ";
        


    }

    var winsGame= document.getElementById("winsGame");
    winsGame.innerHTML = wins;

    var lossesGame= document.getElementById("lossesGame");
    lossesGame.innerHTML = losses;

    var numberOfGuesses = document.getElementById("guessesleft");
    numberOfGuesses.innerHTML = guessesLeft;

    var showGuesses = document.getElementById("myguesses");
    showGuesses.innerHTML = myguesses;


}
