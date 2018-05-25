//Algoritmo valor absoluto
var prompt=require('prompt');
prompt.start();

prompt.get(['x'],function (err,valor_abs)
	{
 	console.log("Teclee el valor de X");
 	var x1=Number(valor_abs.x);
//Si el valor de x1 es negativo lo multiplicamos por menos 1
	if(x1<0)
	{
		x1=x1*(-1);
	}
	console.log("El valor absoluto es :",x1 );


});
