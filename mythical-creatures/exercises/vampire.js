class Vampire{
  constructor(name, pet){
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
    this.ouncesDrank = 0;
    if(this.pet === undefined){
      this.pet = "bat"
    }
  }
  drink(){
    if(this.ouncesDrank < 50){
      this.ouncesDrank += 10
      this.thirsty = false
    }
 return `I\'m too full to drink anymore!`

  }
}


module.exports = Vampire;
