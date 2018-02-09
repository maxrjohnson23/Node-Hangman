const Word = require('./word');
// Create as singleton
const WordBank = require('./wordbank')();
const inquirer = require('inquirer');

let question = [{
    name: 'userGuess',
    message: 'Guess a letter'
}];

let again = [{
    name: 'playAgain',
    message: "Would you like to play again?"
}];

function promptUser(word) {
    inquirer.prompt(question).then(answer => {
        word.guessLetter(answer.userGuess.toUpperCase());
        let displayWord = word.displayWord();
        console.log(displayWord);
        if(displayWord.includes('_')) {
            promptUser(word);
        } else {
            console.log('Win!');
            playAgain();
        }
    });
};

function playAgain() {
    inquirer.prompt(again).then(answer => {
        if(answer.playAgain) {
            startGame();
        } else {
            console.log('Bye!');
        }
    })
}



function startGame() {
    // Generate random word
    const generatedWord = WordBank.generateWord().toUpperCase();
    const word = new Word(generatedWord);
    console.log(generatedWord);
    console.log(word.displayWord());
    promptUser(word);
}

startGame();

