var prompt = require ("prompt");
    prompt.start();
    prompt.get(["calificacion1", "calificacion2", "calificacion3"], function (err,result) {
    console.log("Comand-line input received:");
    var calificacion1 = Number(calificacion1.result);
    var calificacion2 = Number(calificacion2.result);
    var calificacion3 = Number(calificacion3.result);
    console.log(calificacion1);
    console.log(calificacion2);
    console.log(calificacion3);

});
