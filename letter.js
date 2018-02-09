function Letter(character) {
    this.character = character;
    this.guessed = false;
}


Letter.prototype.displayLetter = function() {
    // Display the actual or masked letter
    if(this.guessed || this.character === ' ') {
        return this.character;
    } else {
        return '_';
    }
};

Letter.prototype.checkGuess = function(character) {
    // Update guessed value if it matches
    if(this.character === character){
        this.guessed = true;
    }
};

module.exports = Letter;