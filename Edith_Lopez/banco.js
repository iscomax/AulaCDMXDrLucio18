alert("BIENVENIDO A BANCOMER");
var nocuenta=prompt("Ingrese su numero de cuenta o tarjeta");
if(isNaN(nocuenta)===true)
{
do  
  {
      alert("Ingrese solo numeros")
        nocuenta=prompt("Ingrese su numero de cuenta");

    } while(isNaN(nocuenta)===true)    
}

var login=prompt("Ingresa contraseña");
var empresa=prompt("Empresa que laboras");

var RFC=prompt("Ingrese su RFC");
if(RFC.length!==12)
{
do
{
  alert("El RFC no es valido debe tener 12 caracteres");
  RFC=prompt("Ingrese RFC");
}while(RFC.length!==12);
}

var salario=prompt("Ingrese su salario actual");

do{
if(salario!=isNaN)
{
   alert("Ingrese solo numeros")
    salario=prompt("Ingrese su numero de cuenta");
}}while(salario==isNaN);

var fecha=prompt("Ingrese su fecha de ingreso");
console.log("Empresa ",empresa);
console.log("RFC ",RFC);
console.log("Tu salario es ",salario, "con fecha de ingreso ",fecha);

if (salario >=5000)
{
  console.log("Con tu sueldo puedes pedir un prestamo");
}
else
{
  console.log("No puedes pedir prestamo");
}