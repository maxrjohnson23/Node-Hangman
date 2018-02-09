const Word = require('./word');
// Create as singleton
const WordBank = require('./wordbank')();
const inquirer = require('inquirer');

// Generate random word
const generatedWord = WordBank.generateWord().toUpperCase();
const word = new Word(generatedWord);

console.log(generatedWord);

let question = [{
    name: 'userGuess',
    message: 'Guess a letter'
}];

function promptUser() {
    inquirer.prompt(question).then(answer => {
        word.guessLetter(answer.userGuess);
        let displayWord = word.displayWord();
        console.log(displayWord);
        if(displayWord.includes('_')) {
            promptUser();
        } else {
            console.log('Win!');
        }
    });
};

promptUser();

