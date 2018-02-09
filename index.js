const Word = require('./word');
const WordBank = require('./wordbank')();
const inquirer = require('inquirer');
const chalk = require('chalk');

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
        console.reset();

        // Check user's guess against the word
        let userLetter = answer.userGuess.toUpperCase();
        word.guessLetter(userLetter);

        let displayWord = word.displayWord();
        console.log(chalk.bold(`\n ${displayWord} \n`));

        // Evaluate user's guess
        if(displayWord.includes(userLetter)) {
            console.log(chalk.green('Correct!'));
        } else {
            console.log(chalk.red('Incorrect!'));
            userGuesses--;
        }
        // Display user's remaining guesses
        console.log(`\n${chalk.red("Guesses remaining:")} ${chalk.red.bold(userGuesses)}`);

        // Word completed, finish the game
        if(!displayWord.includes('_')) {
            console.log(chalk.bold.green('\n You Win!! \n'));
            // See if the user wants to play again
            playAgain();
        } else if (userGuesses === 0) {
            console.log(chalk.bold.red('\n You Lose.. \n'));
            // Reveal the word
            console.log(`The word was: ${word.peekWord()} \n`);
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
        console.reset();
        if(answer.playAgain.toUpperCase() === "Y") {
            startGame();
        } else {
            console.log(chalk.bold.blue('Thanks for playing!'));
        }
    })
}


function startGame() {
    // Initialize user guesses
    let remainingGuesses = 9;

    // Generate random word
    const generatedWord = WordBank.generateWord().toUpperCase();
    // **HIDDEN** console.log(generatedWord);
    const word = new Word(generatedWord);

    console.log(chalk.bold(`\n ${word.displayWord()} \n\n\n\n`));

    promptUserGuess(word, remainingGuesses);
}

function displayGameHeader() {
    console.log(chalk.bold.blue('----------------------------------'));
    console.log(chalk.bold.green('Welcome to Hangman - Cars Edition!'));
    console.log(chalk.bold.blue('---------------------------------- \n'));
}

console.reset = function () {
    // Clears the console for a more fluid user experience
    process.stdout.write('\033c');
    displayGameHeader();
};

console.reset();
startGame();

