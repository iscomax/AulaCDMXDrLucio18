//Elaborar un algoritmo para leer 3 numeros
//y determinar si uno es la suma de los otros 2
var prompt=require('prompt');

prompt.start();

prompt.get(['num1','num2','num3'],function(err,suma)
	{
	var n1=Number(suma.num1);	
	var n2=Number(suma.num2);
	var n3=Number(suma.num3);
	if(n1==(n2+n3))
	{
		console.log("El numero 'N1'",n1,"Es la suma de",n2,"+",n3);
	}
	if(n2===(n1+n3))
	{
		console.log("El numero 'N2'",n2,"Es la suma de ",n1,"+",n3);
	}
	if(n3===(n1+n2))
	{
		console.log("El numero 'N3'",n3,"Es la suma de ",n1,"+",n2);
	}
	if((n1!==(n2+n3))&& (n2!==(n1+n3)) && (n3!==(n1+n2)))
	{
		console.log("Ningun numero es la suma de los otros 2");
	}
});
