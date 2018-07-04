var prompt = require("prompt");

prompt.start();
PRECIOHORA=80
ss=""

console.log("Este programa calcula el sueldo de un trabajor ")
console.log ("ingresa tu numero de horas que trabajaste en la semana ")

prompt.get(["hrst",], function (err,result) {
console.log(" num de hrs trabajadas " + result.hrst);

ht=result.hrst
ss=PRECIOHORA*ht

console.log("Tu sueldo Semanal es de :");
console.log(ss);






});
