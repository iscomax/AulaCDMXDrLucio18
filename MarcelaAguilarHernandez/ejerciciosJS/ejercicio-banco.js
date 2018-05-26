alert("Bancomer solicita tus datos laborales para otorgarte un crédito");

var datos = new Object()
	datos.empresa = "";
	datos.rfc = "";
	datos.salario = 0;
	datos.fechaIngreso = "";

datos.empresa = prompt("¿Cuál es el nombre de la empresa?");
datos.rfc = prompt("Ingresa tu RFC")
datos.salario = parseInt(prompt("¿Cuál es tu salario actual?"))
datos.fechaIngreso = prompt("¿En qué fecha ingresaste a trabajar?")

if (datos.salario >= 15000){
	alert("Crédito aprobado");
} else {
 	alert("Crédito rechazado")}; 

document.write(
	"\nDatos de la empresa: " + datos.empresa + 
"\nRFC" + datos.rfc + 
"\nSalario: " + datos.salario +
"\nFecha de ingreso: " + datos.fechaIngreso);

