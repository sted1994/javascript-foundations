const Direwolf = require('./direwolf');

class Stark{
  constructor(obj){
    this.name = obj.name;
    this.location = obj.area || 'Winterfell';
    this.safe = false;
    // this.callDirewolf = this.callDirewolf();
  }

  sayHouseWords(){
    if(this.safe === true){
      return 'The North Remembers'
    }
    return 'Winter is Coming'
  }

  callDirewolf(name, location){
    var direwolf = new Direwolf(name, this.location);
    this.safe = true;
    direwolf.starksToProtect.push(this)
    return direwolf;
  }
}

module.exports = Stark;
