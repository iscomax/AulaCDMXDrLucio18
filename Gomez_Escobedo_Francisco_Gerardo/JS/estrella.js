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
 	constructor(id, x, y, radio, lado)
	{
	 super(id, x, y)
	 this.radio = radio
	 this.lado = lado
	}
       }
var estrella = new Estrella(1, 4, 5, 10, 4);
console.log ("El id de la estrella es:" + estrella.id)
console.log("El x de la estrella es:" + estrella.id)
console.log("El y de la estrella es:" + estrella.id)
console.log("El radio de la estrella es:" + estrella.radio) 
console.log("Los lados de la estrella son:" + estrella.lado)
