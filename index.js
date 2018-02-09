const Word = require('./word');
// Create as singleton
const WordBank = require('./wordbank')();
const inquirer = require('inquirer');

// Prompt for user input
let question = [{
    name: 'userGuess',
    message: 'Guess a letter',
    validate: function(value) {
        let onlySingleLetter = value.match(/^([a-zA-Z-]){1}$/);
        return onlySingleLetter ? true : 'Please enter a valid letter';
    }
}];

// Prompt user to play again
let again = [{
    name: 'playAgain',
    message: "Would you like to play again?",
    default: "Y"
}];

function promptUserGuess(word) {
    inquirer.prompt(question).then(answer => {
        //
        word.guessLetter(answer.userGuess.toUpperCase());
        let displayWord = word.displayWord();

        console.log(displayWord);

        if(displayWord.includes('_')) {
            // Word is not yet uncovered, continue input
            promptUserGuess(word);
        } else {
            console.log('You Win!');
            // See if the user wants to play again
            playAgain();
        }
    });
};

function playAgain() {
    inquirer.prompt(again).then(answer => {
        if(answer.playAgain.toUpperCase() === "Y") {
            startGame();
        } else {
            console.log('Thanks for playing!');
        }
    })
}



function startGame() {
    // Generate random word
    const generatedWord = WordBank.generateWord().toUpperCase();
    const word = new Word(generatedWord);
    console.log(generatedWord);
    console.log(word.displayWord());
    promptUserGuess(word);
}

startGame();

