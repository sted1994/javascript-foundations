class Direwolf{
  constructor(name, home, size){
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark){
    if(stark.location === this.home){
      this.starksToProtect.push(stark)
      stark.safe = true;
      this.huntsWhiteWalkers = false;
      if(this.starksToProtect.length === 3){
        this.starksToProtect.pop();
      }
    }
  }

  leave(stark){
    for(var i = 0; i < this.starksToProtect.length; i++){
      if(this.starksToProtect[i].name === stark.name){
        this.starksToProtect.splice(i,1)
        stark.safe = false
      }
    }
  }


}

module.exports = Direwolf;
