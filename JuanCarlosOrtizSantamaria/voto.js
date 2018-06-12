var prompt = require("prompt");
prompt.start();

  m=0
  o=0
  a=0
  input=""
  VOTOMAX=5
  cont=0


void function pedirVoto() {
  console.log("Ingresa tu voto: m, para meade/ a, anaya / o, para el peje ");
  prompt.get(["voto"], function (err,result){
    input=result.voto
    console.log("ingresaste  " + result.voto);

    switch (input) {
        case "m":
              m++
              cont++
              break;
        case "o":
              o++
              cont++
              break;
        case "a":
              a++
              cont++
              break;
        default:console.log("valor invalido los valores validos son m para meade, o para obrador y a para anaya");
              break;
    }

    if(cont < VOTOMAX){
      pedirVoto();
    }else {
      console.log("El total de votos para meade son:");

      console.log(m);

      console.log("el total de votos para lopez obrador son:");

      console.log(o);

      console.log("el total de votos para anaya son:");

      console.log(a);
    }
  });

}();
