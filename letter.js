function Letter(character) {
    this.character = character;
    this.guessed = false;
}


Letter.prototype.displayLetter = function() {
    // Display the actual or masked letter
    if(this.guessed) {
        return this.character;
    } else {
        return '_';
    }
};

Letter.prototype.checkGuess = function(character) {
    // Update guessed value if it matches
    this.guessed = (this.character === character);
};

module.exports = Letter;