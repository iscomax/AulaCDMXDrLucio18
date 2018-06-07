ar prompt = reuire("prompt");
prompt.start();
prompt.get(["numero1", "numero2", "numero3"] function(err, result) {
          var numero1 = Number(result.numero1);
          var numero2 = Number(result.numero2);
          var numero3 = Number(result.numero3);
         
          if (numero1===numero2+numero3){
             console.log("numero1 es la suma de numero 2 y numero 3");
           } else if (numero2===numero1+numero3) {
             console.log("numero2 es la suma de numero 1 y numero 3");
           } else if (numero3===numero2+numero1) {
             console.log("numero 3 es la suma de numero2 y numero1");
           } else {
             console.log("ninguno es la suma de los otros dos");
           }

});
