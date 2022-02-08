class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    if (color === undefined){
      this.color = 'white';
    } else {
      this.color = color
    }
  }
  isWhite(){
    if (this.color !== "white"){
      return false;
    }
  }
  says(sparklyWord) {
    return `**;* ${sparklyWord} *;**`
  }
}

module.exports = Unicorn;
