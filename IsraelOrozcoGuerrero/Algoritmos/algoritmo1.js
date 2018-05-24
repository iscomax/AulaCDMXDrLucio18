
var prompt =require ("prompt");
prompt.start();
prompt.get(['num1','num2','num3'], function (err,suma){

var n1=Number(suma.num1);
var n2=Number(suma.num2);
var n3=Number(suma.num3);
var resultado=(n1+n2+n3)/3;

console.log("El promedio es ",resultado);
});
