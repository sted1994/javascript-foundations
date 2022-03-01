const Human = require('./human');
class Ogre{
  constructor(obj){
    this.name = obj.name;
    this.home = obj.abode || 'Swamp';
    this.swings = 0;
  }

  encounter(human){
    this.swingAt(human);
  }

  swingAt(human){
    human.encounterCounter++;
    if(human.noticesOgre()){
      this.swings++
       if(this.swings === 2){
         human.knockedOut = true;
       }
    }
  }

  apologize(human){
    human.knockedOut = false;
  }
}


module.exports = Ogre;
