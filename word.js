const Letter = require('./letter');

function Word(word){
    this.letterArray = [];
    for(let letter of word) {
        // Create an array of individual letters
        this.letterArray.push(new Letter(letter));
    }

}

Word.prototype.displayWord = function() {
    let word = "";
    // Each letter determines the value to show
    this.letterArray.forEach(l => word += `${l.displayLetter()} `);
    console.log(word);
};

module.exports = Word;