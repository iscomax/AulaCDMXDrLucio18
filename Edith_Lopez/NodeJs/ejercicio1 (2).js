var prompt = requiere("prompt");
prompt.start();
prompt.get(["username", "email"], function (err, result){
  console.log("Comand-line input received:");
  console.log("username: " + result.username);
  console.log("email: "+ result.email);
});
