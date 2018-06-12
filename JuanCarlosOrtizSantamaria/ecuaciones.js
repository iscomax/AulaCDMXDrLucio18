var prompt = require("prompt");

prompt.start();

console.log("este programa resuelve ecuaciones de primer grado de 2x2 de la soguiente sintaxis (ax+by=c) (dx+ey=f) ");
console.log("Acontinuacion ingresa los valores en el siguientes orde a,b,c,d,e y f  ");
prompt.get(["a","b","c","d","e","f"], function (err,result) {
  var divisor=((result.a*result.e)-(result.b*result.d))
  var dividendox=((result.c*result.e)-(result.b*result.f))
  var dividendoy=((result.a*result.f)-(result.c*result.d))
  var x=dividendox/divisor
  var y=dividendoy/divisor


  console.log("divisor");
  console.log(divisor);

  console.log("dividendox");
  console.log(dividendox);
  console.log("dividendoy");
  console.log(dividendoy);




  console.log("el valor de x es: ");
  console.log(x);
  console.log("el valor de y es:");
  console.log(y)


});
