var prompt = require('prompt');
prompt.start();

prompt.get(['Nombre', 'Horas'],  function (err, result){

  Horas = Number(result.Horas);

  sueldo= 50.30*Horas;

  console.log(' Nombre: ' + result.Nombre + ' sueldo: ' + sueldo);

});

