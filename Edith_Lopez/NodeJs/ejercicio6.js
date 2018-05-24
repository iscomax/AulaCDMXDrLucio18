var prompt = require ("prompt");
    prompt.start();
    prompt.get(["calificacion1", "calificacion2", "calificacion3", "Examen", "TrabajoFinal"], function (err, result) {
    console.log("Comand-line imput received:");
    var calificacion1 = Number(result.calificacion1);
    var calificacion2 = Number(result.calificacion2);
    var calificacion3 = Number(result.calificacion3);
    var Examen = Number(result.Examen);
    var TrabajoFinal = Number(result.TrabajoFinal);
    var promedio = ((calificacion1+calificacion2+calificacion3)/3)*0.55;
    var promedioFinal = (promedio + (Examen*0.30)+(TrabajoFinal*0.15))
    console.log("Tu calificacion final es " +promedioFinal);
});
