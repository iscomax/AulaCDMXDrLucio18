var prompt = require("prompt");
prompt.start();
//
var numero      = 0.0,
    limiteInf	= 100,
    limiteSup	= 200;

//
 //funcion anonima ---> function no tiene nombre
 //
prompt.get(['numero'],function(err,result){
//
	numero = Number(result.numero);
	if((numero > limiteInf) && (numero <= limiteSup)){
	  if(numero % 3 == 0)
		console.log("el numero " + numero + " es multiplo de 3 y esta dentro del rango.");
	  else
                console.log("el numero " + numero + " NO es multiplo de 3 pero esta dentro del rango.");	       } 
	else
		 console.log("el numero " + numero + " NO esta dentro del rango.");		
});

