class Fairy{
  constructor(name){
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief(){
    this.dust++;
  }

  believe(){
    this.dust += 10;
  }

  makeDresses(flowersArr){
    for(var i = 0; i < flowersArr.length; i++){
      this.clothes.dresses.push(flowersArr[i])
    }
  }

  becomeProvoked(){
    this.disposition = 'Vengeful'
  }

  replaceInfant(infant){
    var currentInfant = infant;
    if(this.disposition === 'Vengeful'){
    currentInfant.disposition = 'Malicious'
    this.humanWards.push(currentInfant)
      if(this.humanWards.length === 3){
        this.disposition = 'Good natured'
      }
    }
    return currentInfant
  }
}


module.exports = Fairy;
