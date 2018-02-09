function Letter(character) {
    this.character = character;
    this.guessed = false;

    this.displayLetter = function() {
        if(this.guessed) {
            return this.character;
        } else {
            return '_';
        }
    };

    this.matches = function(character) {
        return this.character === character;
    };
}