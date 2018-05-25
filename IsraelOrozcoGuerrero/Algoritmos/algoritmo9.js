//Algoritmo multiplo de 3
//Solicitar un entero y determinar si es multiplo de 3 ademas que se
//encuentre en el rango (100-200)

var prompt= require('prompt');

prompt.start();

prompt.get(['num'], function(err,mult_tres){
	var numero=Number(mult_tres.num);
	if(numero>=100 || numero<=200)
	{
	if(numero%3===0)
	{	 	
console.log("Tu numero es multiplo  de 3 y esta dentro del rango");	
	}
	if((numero%3)!==(0))
	{
console.log("Tu numero no es multiplo de 3 pero esta dentro del rango");
	}
	}
	if(numero<100 || numero >200)
	{
console.log("Tu numero  no esta dentro del rango");
	}
});
