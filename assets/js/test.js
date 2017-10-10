// ====================================================
//                   Gloabl Variables
// ====================================================
var selectedWord = "";
var lettersInWord = [];
var letterLine = [];
var displayText = "";


var currentsentence = 0;
var imageClue = [];
var quizOver = false;

// game object

var question = [{
    sentence: "Prince Ali's real name is A ",
    word: ["laddin"],
    imageClue: "data:image/jpeg;base64,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"
}, {
    sentence: "The Adam's ",
    word: ["family"],
    imageClue: "data:image/jpeg;base64,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"
}, {
    sentence: "Subtracting and ",
    word: ["adding"],
    imageClue: "data:image/jpeg;base64,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"
}, {
    sentence: "John's name in Spanish is ",
    word: ["juan"],
    imageClue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0AliAZEYudZbT1YoblX3bgXveNfFfzFM8FkQhAJDzjWp-hAo"

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
    $('.theGif').html('<img src="https://media.giphy.com/media/fdyZ3qI0GVZC0/giphy.gif" />')
}

function roundComplete() {

    $(".guess").html(letterLine.join("  "));

    if (lettersInWord.toString() == letterLine.toString()) {
        // displaying word guessed once guessed correctly
        displayText += " " +  letterLine.toString().replace(/,/g, "");

        $(".prizeAnswer").html('<p class=" answerText center-text">' + displayText + '</p>');

        imgGif();
        $(".imageClue").hide();
        $('.theGif').show();
    }
}

function thePrize() {
    $(".prizeBG").show(1000);

}

function imagesClue() {
    var imgClue = question[currentsentence].imageClue;
    
    console.log('imgclue', imgClue);
    $(".imageClue").html('<img src="'+imgClue+'">');
    

}

function music () {
    // Create an audio element with JavaScript
    var audioElement = document.createElement("audio");
    
        // Set it's source to the location
        // of our Captain Planet theme song file.
        audioElement.setAttribute("src", "assets/img/Fly away Copy.m4a");

        // // Theme Button
        // $(".theme-button").on("load", function() {
            audioElement.play();
        // });

        // Pause Button
        $(".pause-button").on("click", function() {
            audioElement.pause();
        });
}

// ====================================================
//                   Main Process
// ====================================================
$(document).ready(function () {
    focus();
    music();
    displayCurrentsentence();
    imagesClue();

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
        
        if (lettersInWord.toString() != letterLine.toString()) {
            alert("You need to complete the sentence before moving on.");
        
            } else {
                currentsentence++; // Since we have already displayed the first sentence on DOM ready
                
                if (currentsentence < question.length) {
                    displayCurrentsentence();
                    imagesClue();
                    $(".imageClue").show();
                    $('.theGif').hide();
                }  else {
                    $(".sentence, .guess, .questionAnswer, .nextBtn, .jumbotron").hide();
                    $(".theGif").hide();
                    $(".imageClue").hide();
                    $(".prizeAnswer").hide();
                    $(".clue").hide();
                    thePrize();
                }
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