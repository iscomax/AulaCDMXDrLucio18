var prompt = require('prompt');
prompt.start();
//
prompt.get(['numero1', 'numero2','numero3'], function(err,result)
{
//
var num1 = Number(result.numero1);
var num2 = Number(result.numero2);
var num3 = Number(result.numero3);
if (num1 == num2 + num3) {
  console.log("El número1 es la suma de número2 y número3");
}
else if(num2 == num1 + num3) {
  console.log("El número2 es la suma de número1 y número3");
}
else if(num3 == num1 + num2) {
  console.log("El número3 es la suma de número1 y número2");
}
else
  console.log("Ningún número es la suma de los otros dos");
});

