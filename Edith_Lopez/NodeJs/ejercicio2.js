var prompt = require ("prompt");
prompt.start();
prompt.get(["name","age"], function(err, result){
   console.log("Command-line input received: ");
   console.log(result.name);
   console.log("tu edad es ");
   console.log( result.age);
});
