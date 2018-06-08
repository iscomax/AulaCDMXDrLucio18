class Persona
{
    constructor(nombre,apellido1,apellido2,edad)
    {
        this.nombre=nombre
        this.apellido1=apellido1
        this.apellido2=apellido2
        this.edad=edad
    }
    imprimir(nombre,apellido1,apellido2)
    {
        console.log(`¡Tus datos son ${nombre +apellido1 +apellido2}!`);
    }
}
var perengano =new Persona("Pedro","Pecas","Castillo",20);
perengano.imprimir("Marco","Llango","Loso");
