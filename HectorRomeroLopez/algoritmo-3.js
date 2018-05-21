var prompt = require('prompt');

prompt.start();

 console.log('Ingresa tu nombre ');
 prompt.get(['Nombre','Horas'],  function (err, result){
  
  Horas = Number(result.Horas); 

  sueldo= 50.30*Horas;

  console.log(' Nombre: ' + result.Nombre + ' sueldo: ' + sueldo);
  
});


