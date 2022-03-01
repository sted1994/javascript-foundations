class Sphinx{
  constructor(){
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle){
    this.riddles.push(riddle)
    if(this.riddles.length > 3){
      this.riddles.shift()
    }
  }

  attemptAnswer(riddle){
    for (var i = 0; i < this.riddles.length; i++){
      if(riddle === this.riddles[i].answer){
        if(this.riddles.length - 1 === 0){
          var test = this.riddles[i].answer
          this.riddles.splice(i,1)
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${test}"???`;
        }
        this.riddles.splice(i,1)
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
    }
    // var rage = `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${this.riddles[this.riddles.length - 1].answer}"\???`
    // console.log(rage)
    this.heroesEaten++
  }
}

module.exports = Sphinx;
