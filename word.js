const Letter = require('./letter');

function Word(word){
    this.letterArray = [];
    for(let letter of word) {
        // Create an array of individual letters
        this.letterArray.push(new Letter(letter));
    }
}

Word.prototype.displayWord = function() {
    // Each letter determines the value to show
    return this.letterArray.map(letter => letter.displayLetter()).join(' ');
};

Word.prototype.peekWord = function() {
    // Peek at the characters to reveal the word
    return this.letterArray.map(letter => letter.character).join('');
};

Word.prototype.guessLetter = function(character) {
    // Check each letter for a match with the user's guess
    this.letterArray.forEach(l => l.checkGuess(character));
};

module.exports = Word;
