//Inicializar variables
var nempresa= ""
var rfc=""
var salariomensual= 0
var fechaingreso=""
var prompt = require("prompt");
prompt.start();
//Pedir valores por la terminal
prompt.get(['valorempresa','valorrfc', 'valorsalariomensual','valorfechaingreso'],function(err,result){
   salariomensual=Number(result.valorsalariomensual);
   rfc=result.valorrfc.toUpperCase();
//Mostrar mensaje en la terminal
console.log("tu información ha sido enviada al departamento de crédito");
//console.log(rfc);
        });

