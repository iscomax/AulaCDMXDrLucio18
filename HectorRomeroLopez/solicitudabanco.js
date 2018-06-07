var prompt = require("prompt");
prompt.start();
//Inicializar variables
var nombreEmpresa= ""
var rfc=""
var salariomensual= 0
var fechaingreso=""
//Pedir valores por la terminal
prompt.get(['nombreEmpresa','valorrfc', 'valorsalariomensual','valorfechaingreso'],function(err,result){
   salariomensual=Number(result.valorsalariomensual);
   rfc=result.valorrfc.toUpperCase();
//Mostrar mensaje en la terminal
console.log("tu información ha sido enviada al departamento de crédito");
});
