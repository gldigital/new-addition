var selectedWord = "";
var wordLine = [];
var theWord = [];

var currentsentence = 0;
var imageClue = [];



var question = [{
    sentence: "Prince Ali's real name is A ",
    word: ["laddin"],
    },
    {
        sentence: "John's name in Spanish is ",
        word: ["juan"],
    }];

    

function displayCurrentsentence() {
    
  
    var sentence = question[currentsentence].sentence;
    var sentenceClass = $(document).find(".sentence");
    var wordToGuess = question[currentsentence].word.length;

    // // Remove all current <li> elements (if any)
    $(".sentence").find("p").remove();

    
    for (i = 0; i < wordToGuess; i++) {
        selectedWord = question[currentsentence].word[i];
        theWord = selectedWord;
        console.log(theWord, "the word");
    }
    
    $(".sentence").html(sentence);

}

function checkWord(){
    
$(document).find(".nextBtn").on("click", function() {
    var goodGuess = $('#usr').val();
    if (theWord == goodGuess){

        displayText = " " +  goodGuess;
        $(".prizeAnswer").html('<p class=" answerText center-text">' + displayText + '</p>');

    } else {
        alert('false');
    }
    
    });
}

displayCurrentsentence();
checkWord();

    