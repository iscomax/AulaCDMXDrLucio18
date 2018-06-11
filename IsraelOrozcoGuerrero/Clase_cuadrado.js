var console=require ('console')

class Forma
{

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
class Cuadrado extends Forma
{
	constructor(id,x,y,lado)
	{
	super(id,x,y)
	this.lado=lado

	}
	Area(lado)
	{
		var area=lado*lado
		return area
	}
}
var cuadrado= new Cuadrado(1,5,7,10);
console.log(cuadrado.id);
console.log(cuadrado.x);
console.log(cuadrado.y);
console.log(cuadrado.lado);
console.log(cuadrado.Area(5));
//mensaje