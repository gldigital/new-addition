// ====================================================
//                   Gloabl Variables
// ====================================================
var selectedWord = "";
var lettersInWord = [];
var letterLine = [];
var displayText = "";


var currentsentence = 0;
var correctAnswers = 0;
var quizOver = false;

// game object

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

// ====================================================
//                   Functions
// ====================================================

function displayCurrentsentence() {
    
    $(".prizeBG").hide();

    var sentence = question[currentsentence].sentence;
    var sentenceClass = $(document).find(".sentence");
    var wordToGuess = question[currentsentence].word.length;

    // resetting letter line
    letterLine = [];
    // // Remove all current <li> elements (if any)
    $(".sentence").find("p").remove();

    
    for (i = 0; i < wordToGuess; i++) {
        selectedWord = question[currentsentence].word[i];
        lettersInWord = selectedWord.split("");
        numBlanks = lettersInWord.length;
    }

    for (var i = 0; i < numBlanks; i++) {
        letterLine.push("_");
    }

    $(".sentence").html(sentence);
    $(".guess").html(letterLine.join("  "));

}

function checkLetters(letter) {
    // Check if letter exists in Code
    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if(lettersInWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    // Check where in word letter exists and then populate out blankAndSuccesses array
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {

            if (lettersInWord[i] == letter) {
                letterLine[i] = letter;
            }
        }
    }    
}

function imgGif() {
    $('#theGif').html('<img id="theImg" src="https://media.giphy.com/media/fdyZ3qI0GVZC0/giphy.gif" />')
}

function roundComplete() {

    $(".guess").html(letterLine.join("  "));

    if (lettersInWord.toString() == letterLine.toString()) {
        // displaying word guessed once guessed correctly
        displayText += " " +  letterLine.toString().replace(/,/g, "");

        $(".prizeAnswer").html("<p>" + displayText + "</p>");

        imgGif();

       $('#theGif').show();
    }
}

function thePrize() {
    $(".prizeBG").show(1000);


}

// ====================================================
//                   Main Process
// ====================================================
$(document).ready(function () {

    displayCurrentsentence();

    // Register Key clicks
    document.onkeyup = function(event) {

    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    if (lettersInWord.toString() != letterLine.toString()) {
        
        checkLetters(letterGuessed);
        roundComplete();
    
        }
    }

    // On clicking next, display the next sentence
    $(document).find(".nextBtn").on("click", function() {
        currentsentence++; // Since we have already displayed the first sentence on DOM ready
        if (currentsentence < question.length) {
            displayCurrentsentence();
            $('#theGif').hide();
        } else {
            $(".sentence, .guess, .nextBtn, .jumbotron").hide();
            $("#theGif").hide();
            thePrize();
            
        }

    });

});













// function startGame() {

//     for (var i = 0; i < question.length; i++){
//         var sentences = question[i].sentence;
//         var words = question[i].word;
//         console.log(sentences);
//         console.log(words);
    
//         selectedWord = words[Math.floor(Math.random() * words.length)];
//         lettersInWord = selectedWord.split("");
//         numBlanks = lettersInWord.length;
//         console.log("numblanks", numBlanks)

//     }

//      // Populate Letter Line with right number of blanks
//     for (var i = 0; i < numBlanks; i++) {
//         letterLine.push("_");
//     }

//     numBlanks = letterLine.join(" ");

//     // Adding sentence + word to document 
//     var gameContainer = $('<div>')
//     var gameSentence = $("<p>").text(sentences + " " + numBlanks);

//     gameContainer.append(gameSentence);

//     $("#sentence").append(gameContainer);
   

//     // Test //
//     console.log(lettersInWord);
        
// }

// function checkLetters(letter) {
//     // Check if letter exists in Code
//     var isLetterInWord = false;

//     for (var i = 0; i < numBlanks; i++) {
//         if(selectedWord[i] == letter) {
//             isLetterInWord = true;
            
//         }
//     }

//     // Check where in word letter exists and then populate out blankAndSuccesses array
//     if (isLetterInWord) {
//         for (var i = 0; i < numBlanks; i++) {
//             if (selectedWord[i] == letter) {
//                 letterLine[i] = letter;
//             }
//         }
//     } // if didn't find letter
//      else {
//          wrongLetters.push(letter);
//          guessLeft--;
//      }
// }

// // ====================================================
// //                   Main process
// // ====================================================

// startGame();
// checkLetters();