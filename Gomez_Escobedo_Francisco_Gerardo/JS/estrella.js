var console = require("console")
class Forma {
	constructor(id, x, y) {
		this.id = id 		
		this.mover(x,y)
	}
       	mover(x, y){
	 this.x = x	
	 this.y = y
	}
      }
class Estrella extends Forma{
 	constructor(id, x, y, radio)
	{
	 super(id, x, y)
	 this.radio = radio
	}
       }
var estrella = new Estrella(1, 4, 5, 10);
console.log ("El id de la estrella es:" + estrella.id)
console.log("El x de la estrella es:" + estrella.id)
console.log("El y de la estrella es:" + estrella.id)
console.log("El radio de la estrella es de:" + estrella.radio) 
