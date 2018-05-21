
var prompt =require('prompt');

prompt.start

prompt.get(['nombre','horas'], function (err,calc_sueldo){
	var hrs=Number(calc_sueldo.horas);
	var sueldo=(hrs)*(50.30);
	console.log("El empleado ",calc_sueldo.nombre,"tiene un sueldo de ",sueldo);
});
