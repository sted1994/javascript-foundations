class Centaur{
  constructor(obj){
    this.name = obj.name;
    this.breed = obj.type;
    this.cranky = false;
    this.standing = true;
    this.hastledCounter = 0;
    this.layingDown = false;
  }

  run(){
    this.hastledCounter++;
    if(this.hastledCounter >= 3 || this.layingDown === true){
      this.cranky = true;
      return 'NO!'
    }
    return 'Clop clop clop clop!!!'
  }

  shootBow(){
    this.hastledCounter++;
    if(this.hastledCounter >= 3 || this.layingDown === true){
      this.cranky = true;
      return 'NO!'
    }
      return 'Twang!!!'
  }

  sleep(){
    if(!this.standing){
      this.cranky = false;
      this.hastledCounter = 0;
      return 'ZZZZ'
    }
    return 'NO!'
  }

  layDown(){
    this.standing = false;
    this.layingDown = true;
  }

  standUp(){
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion(){
    if(!this.layingDown){
    this.cranky = false;
    }
    return 'Not while I\'m laying down!'
  }
}

module.exports = Centaur;
