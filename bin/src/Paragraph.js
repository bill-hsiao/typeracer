class Paragraph {

  //paragraph is going to be player-inputted paragraphs
  constructor(words) {
    this.words = words;
    this.letters = [];
  }
  deconstruct() {
    this.letters = this.words.split('');
  }
}
