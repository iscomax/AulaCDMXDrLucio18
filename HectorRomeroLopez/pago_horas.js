var prompt = require("prompt");
prompt.start();
//
var nempleado   = "" ,
    sueldo      = 0.0,
    thoras      = 0,
    pagHora	= 0;
//
//Funion anonima ---> function no tiene nombre
        //
prompt.get(['nombreEmpleado','totalHoras','pagHora'],function(err,result){
	nempleado = result.nombreEmpleado.toUpperCase();
	thoras = Number(result.totalHoras);
	pagHora = Number(result.pagHora);
	sueldo = pagHora * thoras;	
	console.log("Empleado: "+nempleado + ", Sueldo: " + sueldo);
});
