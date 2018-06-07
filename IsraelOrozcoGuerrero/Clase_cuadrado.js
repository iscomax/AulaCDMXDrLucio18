var console=require ("console")

class Forma{

	constructor(id,x,y)
{
this.id=id
this.mover(x,y)
}
mover(x,y)
{
this.x=x
this.y=y
}
}
class Cuadrado extends Forma{
	constructor(id,x,y,lado)
{
	super(id,x,y)
	this.lado=lado

}
´}
var cuadrado=Cuadrado(1,5,7,10);
console.log(cuadrado.id);
console.log(cuadrado.x);
console.log(cuadrado.y);
console.log(cuadrado.lado):	
