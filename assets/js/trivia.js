/* =======================================================================
    GLOBAL VARIABLES
======================================================================== */
var currentsentence = 0;
var correctAnswers = 0;
var quizOver = false;
var gameCountDown = 10 * 3;

// setup word

var word = [{
    sentence: "The Republic of China was established, the Titanic hit an iceberg and Arizona became the 48th U.S. state.",
    word: ["2013", "1912", "1843", "Adam & Eve"],
    correctAnswer: 1
}, {
    sentence: "The first commercial Concorde flight, Harold Wilson resigned from his post as Prime Minister and the Eagles released Hotel California.",
    word: ["1954", "47 AD", "1976", "1965"],
    correctAnswer: 2
}, {
    sentence: "Germany invaded Denmark and Norway in operation Weserübung, Winston Churchill gave his first address as Prime Minister and Walt Disney’s Fantasia is released.",
    word: ["1940", "1840", "1934", "2302"],
    correctAnswer: 0
}, {
    sentence: "An earthquake measuring 7.0 devastated Haiti, the Eurozone and the International Monetary Fund agreed a 110 billion euro bailout deal for Greece and 33 Chilean miners were rescued after being trapped underground for 69 days.",
    word: ["2005", "2001", "2009", "2010"],
    correctAnswer: 3
}, {
    sentence: " David Niven and Jean Genet were born, the Union of South Africa was created and George V became King of England.",
    word: ["1910", "1898", "1932", "1700"],
    correctAnswer: 0
}];

/* ===================================================================
    FUNCTIONS 
==================================================================== */

// This displays the current sentence AND the word
function displayCurrentsentence() {

    console.log("In display current sentence");

    var sentence = word[currentsentence].sentence;
    var sentenceClass = $(document).find(".quizContainer .sentence");
    var choiceList = $(document).find(".quizContainer .choiceList");
    var numword = word[currentsentence].word.length;

    // Set the sentenceClass text to the current sentence
    $(sentenceClass).text(sentence);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numword; i++) {
        choice = word[currentsentence].word[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + '<label>' + choice + '</li>').appendTo(choiceList);
    }
}
    
// reset quiz
function resetQuiz() {
    currentsentence = 0;
    correctAnswers = 0;
    stopTimer();
    hideScore(); 

    
}

// Hide score during game
function hideScore() {
    $(document).find(".result").hide();
    $(document).find("#theGif").hide();
}

// display score after game
function displayScore() {
    $(document).find(".quizContainer .result").text("You scored: " + correctAnswers + " out of: " + word.length);
    $(document).find(".quizContainer .result").show();
    $(document).find("#theGif").show();
}

function imgGif() {
    $('#theGif').html('<img id="theImg" src="https://media.giphy.com/media/fdyZ3qI0GVZC0/giphy.gif" />')
}


/* =====================================================================
    MAIN PROCESS 
====================================================================== */
$(document).ready(function () {
    
    $(this).find('.startGame').hide();
    $(this).find('#timerDisplay').hide();

    // On Click hide welcome message and show timer and quesitons
    $( ".startButton" ).click(function() {
    $('.startButton').hide();
    $('#welcome').hide();
    $('.startGame').show(1000);
    $('#timerDisplay').show(1000);
  });
        // Display the first sentence
        displayCurrentsentence();
        $(this).find(".quizMessage").hide();

        // Adding 30 sec on the clock to ansewr the word
        timerSetup();

        // On clicking next, display the next sentence
        $(this).find(".nextButton").on("click", function () {
            if (!quizOver) {

                value = $("input[type='radio']:checked").val();

                if (value == undefined) {
                    $(document).find(".quizMessage").text("Please select an answer");
                    $(document).find(".quizMessage").show();
                } else {
                    // TODO: Remove any message 
                    $(document).find(".quizMessage").hide();

                    if (value == word[currentsentence].correctAnswer) {
                        correctAnswers++;
                    }

                    currentsentence++; // Since we have already displayed the first sentence on DOM ready
                    if (currentsentence < word.length) {
                        displayCurrentsentence();
                    } else {
                        displayScore();
                        imgGif();

                        $(document).find(".nextButton").text("Play Again?");
                        quizOver = true;
                        stopTimer();
                    }
                }
            }else { // quiz is over and clicked the next button (which now displays 'Play Again?'
                    quizOver = false;
                    $(document).find(".nextButton").text("Next sentence");
                    resetQuiz();
                    displayCurrentsentence();
                    hideScore();
                    
                    
            }
        });

    });