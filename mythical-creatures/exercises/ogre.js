const Human = require('./human');
class Ogre{
  constructor(obj){
    this.name = obj.name;
    this.home = obj.abode || 'Swamp';
    this.swings = 0;
  }

  encounter(human){
    human.encounterCounter++;
    if(human.noticesOgre()){
      this.swingAt(human);
    if(this.swings){
      human.knockedOut = true;
    }
    }
  }

  swingAt(human){
    this.swings++
  }

  apologize(human){
    human.knockedOut = false;
  }
}


module.exports = Ogre;
