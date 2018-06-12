//Se define la clase
class Persona {
  contructor(nombre, apellido1, apellido2, edad) {
    this.nombre = nombre
    this.apellido1 = apellido1
    this.apellido2 = apellido2
    this.edad = edad
  }
//Método (función) de la clase
  saluda(nombre){
    console.log(`Hola ${nombre}!`);
  }
}

var tarcisio = new Persona("Tarcisio", "Pérez", "Benítez", 48);
tarcisio.saluda("Anita");