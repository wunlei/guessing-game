class GuessingGame {
  constructor() {
    this.min;
    this.max;
    this.answer;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return (this.answer = Math.ceil((this.min + this.max) / 2));
  }

  lower() {
    this.max = this.answer;
  }

  greater() {
    this.min = this.answer;
  }
}

module.exports = GuessingGame;
