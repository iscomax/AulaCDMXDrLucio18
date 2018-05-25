//Algoritmo par o impar
 var prompt= require('prompt');

prompt.start();

	console.log("Algoritmo Par o impar");
	console.log("Teclea un numero");

prompt.get(['numero'],function(err,par_impar){
	
	n=Number(par_impar.numero);
	if(n%2)
	{
	console.log("Tu numero es impar");
	}
	if((n%2)==(0))
	{
	console.log("Tu numero es par");
	}
});
