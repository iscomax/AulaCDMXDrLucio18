
var  prompt= require ('prompt');
prompt.start();
prompt.get(['x'],function(err,evaluacion){
	var xi=Number(evaluacion.x);
	var y=3*Math.pow(xi,2)+7*(xi)-15;
	console.log("La funcion a evaluar es y=3x^2+7x-15");
	console.log("El resultado es",y);
}); 
