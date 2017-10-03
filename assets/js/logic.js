// ====================================================
//                   Main process
// ====================================================

// Array and variables for word to guess
var wordOptions = ["laddin", "family", "adding", "juan"];
var selectedWord = "";
var lettersInWord = [];
var numberBlanks = 0;
var letterLine = [];
var wrongLetters = [];

// Array for sentences 

var question = [{
    sentence: "Prince Ali's real name is A ",
    word: ["laddin"],
    correctAnswer: 0
}, {
    sentence: "The Adam's ",
    word: ["family"],
    correctAnswer: 0
}, {
    sentence: "Subtracting and ",
    word: ["adding"],
    correctAnswer: 0
}, {
    sentence: "John's name in Spanish is ",
    word: ["juan"],
    correctAnswer: 0

}];


// Game counters 
var winCount = 0;
var lossCount = 0;
var guessLeft = 4;

/* FUNCTIONS 
====================
*/

function startGame () {
    selectedWord = question[0].word[Math.floor(Math.random() * question[0].word.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    // Reset //
    guessLeft = 4;
    wrongLetters = [];
    letterLine = [];

    // setting up the sentence 
    chooseSentence = sentences;

    // Populate Letter Line with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        letterLine.push("_");
    }

    // Adding JS to document 
    
    $("#wordToGuess").html(letterLine.join(" "));
    $("#numGuesses").html(guessLeft);
    $("#winCounter").html(winCount);
    $("#lossCounter").html(lossCount);

    // Test //
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(letterLine);

}

    function checkLetters(letter) {
        // Check if letter exists in Code
        var isLetterInWord = false;

        for (var i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
                isLetterInWord = true;
                
            }
        }

        // Check where in word letter exists and then populate out blankAndSuccesses array
        if (isLetterInWord) {
            for (var i = 0; i < numBlanks; i++) {
                if (selectedWord[i] == letter) {
                    letterLine[i] = letter;
                }
            }
        } // if didn't find letter
         else {
             wrongLetters.push(letter);
             guessLeft--;
         }
        // testing 
        console.log(letterLine);    
    }

    function roundComplete() {
        console.log("WIn Count: " + winCount + "| Loss Count: " + lossCount + "Guesses Left: " + guessLeft);

        // Update the HTML to reflect stats
        $("#numGuesses").html(guessLeft);
        $("#wordToGuess").html(letterLine.join(" "));
        $("#wrongGuessess").html(wrongLetters.join(" "));
        
        // Check if user won
        if (lettersInWord.toString() == letterLine.toString()) {
            winCount++;
            alert("You Won!!");

            // Update the win counter in HTMl
            $("#winCounter").html(winCount);
            

            startGame();
        }

        // Check if user lost
        else if (guessLeft == 0) {
            lossCount++;
            alert("You Lost!");

            // Update in HTML
            document.getElementById("lossCounter").innerHTML = lossCount;
            $("#lossCounter").html(lossCount);
            

            startGame();
        }
    }



/* MAIN PROCESS
====================
*/

startGame();

// Register Key clicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
}