var prompt = require ("prompt");
prompt.start();
prompt.get(["numberOne", "numberTwo", "numberThree"], function(err,result){
      console.log("Command-line input received:");
      var suma =Number(result.numberOne)+Number(result.numberTwo)+Number(result.numberThree);
      console.log(suma);

})
