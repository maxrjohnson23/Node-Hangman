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

function promptUserGuess(word, userGuesses) {
    inquirer.prompt(question).then(answer => {
        // Check user's guess against the word
        let userLetter = answer.userGuess.toUpperCase();
        word.guessLetter(userLetter);

        let displayWord = word.displayWord();
        console.log(displayWord);

        // Evaluate user's guess
        if(displayWord.includes(userLetter)) {
            console.log('Correct!');
        } else {
            console.log('Incorrect!');
            userGuesses--;
        }

        // Word completed, finish the game
        if(!displayWord.includes('_')) {
            console.log('You Win!!');
            // See if the user wants to play again
            playAgain();
        } else if (userGuesses === 0) {
            console.log('You Lose..');
            // Reveal the word
            console.log(`The word was: ${word.peekWord()}`);
            // See if the user wants to play again
            playAgain();
        } else {
            // Still playing, continue prompting the user
            promptUserGuess(word, userGuesses);
        }
    });
}

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
    // Initialize user guesses
    let remainingGuesses = 2;

    // Generate random word
    const generatedWord = WordBank.generateWord().toUpperCase();
    const word = new Word(generatedWord);
    console.log(generatedWord);
    console.log(word.displayWord());
    promptUserGuess(word, remainingGuesses);
}

startGame();

