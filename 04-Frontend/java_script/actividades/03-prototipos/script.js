/*  ACTIVIDAD PROTOTIPOS CON SINTAXIS DE CLASES Y HERENCIA
1. Crea una clase base llamada "Vehiculo" que tenga las siguientes propiedades:

    - Marca (string)
    - Modelo (string)
    - Año (number)

2. Agrega un método llamado "obtenerDetalles" a la clase "Vehiculo" que imprima por consola las propiedades del vehículo.

3. Crea una clase llamada "Automovil" que herede de la clase "Vehiculo" y agregue una propiedad adicional:

    - Puertas (number) 

4. Sobrescribe el método "obtenerDetalles" en la clase "Automovil" para que también imprima por consola la cantidad de puertas.

5. Crea otra clase llamada "Motocicleta" que herede de la clase "Vehiculo" y agregue una propiedad adicional:

    - Cilindrada (number)

6. Sobrescribe el método "obtenerDetalles" en la clase "Motocicleta" para que también imprima por consola la cilindrada.

7. Crea instancias de las clases "Automovil" y "Motocicleta" y llama al método "obtenerDetalles" en cada una de ellas para comprobar que funcionan correctamente.
*/

class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }
  obtenerDetalles() {
    return `DETALLES: La marca es ${this.marca}, el modelo es ${this.modelo} y es del año ${this.año}`;
  }
}

class Automovil extends Vehiculo {
  constructor(marca, modelo, año, puertas) {
    super(marca, modelo, año);
    this.puertas = puertas;
  }
  obtenerDetalles() {
    return this;
  }
}
class Motocicleta extends Vehiculo {
  constructor(marca, modelo, año, cilindraje) {
    super(marca, modelo, año);
    this.cilindraje = cilindraje;
  }
  obtenerDetalles() {
    return this;
  }
}

const auto = new Automovil("chevrolet", "spark GT", "2018", 4);
const carro = new Automovil("renault", "sail", 2004, 4);
const moto = new Motocicleta("pulsar", 135, 2015, "alto");
