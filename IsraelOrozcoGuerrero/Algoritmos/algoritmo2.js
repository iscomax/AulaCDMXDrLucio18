

var prompt =require('prompt');

prompt.start();

prompt.get(['parcial1','parcial2','parcial3','examen','trab_fin'] ,function(err, promedio){
	var p1=Number(promedio.parcial1);
	var p2=Number(promedio.parcial2);
	var p3=Number(promedio.parcial3);
	var exam=Number(promedio.examen);
	var trabajo_fin=Number(promedio.trab_fin);
	var prom=((p1+p2+p3)/3)*0.55;
	var prom_final=(prom +(exam*0.30)+(trabajo_fin*0.15));
	console.log("Tu promedio es ",prom_final); 
}); 
