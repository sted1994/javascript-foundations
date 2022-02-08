class Dragon {
  constructor(name, rider){
    this.name = name,
    this.rider = rider,
    this.hungry = true
    this.timesAte = 0
  }
  greet(){
    return `Hi, ${this.rider}!`
  }
  eat(){
    var timesAte = 0;
      this.timesAte++
      if(this.timesAte === 3){
        this.hungry = false
      }
    }

  }


module.exports = Dragon
