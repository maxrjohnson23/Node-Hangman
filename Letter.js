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

Letter.prototype.matches = function(character) {
    return this.character === character;
};

module.exports = Letter;