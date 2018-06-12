var prompt= require("prompt");
prompt.start();
costotraje=""
descuento=""
preciofinal=""
console.log("Este programa calcula el pecio final de los trajes en la tienda");
console.log("Por favor ingresa el costo de tu traje ");
prompt.get(["preciotraje"], function(err,result) {
  descuento1=0.50
  descuento2=0.25
  costotraje=result.preciotraje
  if (costotraje>=2500) {

    descuento=costotraje*descuento1

  }
  else {
    descuento=costotraje*descuento2
  }

  preciofinal=costotraje-descuento

  console.log("el precio final de tu traje es :");
  console.log(preciofinal);



})
