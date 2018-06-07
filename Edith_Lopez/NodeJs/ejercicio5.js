var prompt= require ("prompt");
    prompt.start();
    prompt.get(["NumberOne", "NumberTwo", "NumberThree"], function (err, result) {
    console.log("Comand-line input received:");
    var NumberOne = Number(result.NumberOne);
    var NumberTwo = Number(result.NumberTwo);
    var NumberThree = Number(result.NumberThree);

    if(NumberOne===NumberTwo+ NumberOne) {
      console.log("El numero uno es la suma de numero 2 y 3");
    }else if (NumberTwo===NumberOne+NumberTrhree){
      console.log("el numero dos es la suma de numero 1 y 3");
    }else if (NumberTrhree===NumberOne+NumberTwo){
      console.log("el numero tres es la suma de numero 1 y 2");
    }else{
      console.log("ninguno es la suma de los otros dos numeros");
    }
});
