var prompt=require('prompt');
prompt.start();
console.log('   Solicitud de informacion laboral del cliente');
console.log('Ingresa los siguientes datos: ');

prompt.get(['Nombre de la empresa', 'RFC','Fecha de ingreso a la empresa','Salario_actual','Monto_del_prestamo'], function(err,result){



   SalarioA=Number(result.Salario_actual);
   Prestamo=Number(result.Monto_del_prestamo);

   if(SalarioA>0 &&  Prestamo<=SalarioA){
        console.log('Prestamo autorizado');
        }

   else{
        console.log('Prestamo denegado');
        }

});
