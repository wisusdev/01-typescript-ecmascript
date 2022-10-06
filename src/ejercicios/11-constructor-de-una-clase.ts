// Constructor de una clase
class Vehiculo {
	// por defecto las propiedades que no se han definido su alcance son publicas
	color: string;
	ruedas: number;
	tipo: string;

	// El contructor es la primera función que se ejecuta
	constructor(color: string, ruedas: number, tipo: string) {
		console.log('Desde el contructor de clase');

		// this sirve para usar la instancia de la clase
		this.color = color; // "color" es la propiedad que recibe el constructor
		console.log(color);
		console.log(ruedas);
		console.log(tipo);
	}

	/*
	Tambien podemos declarar nuestro contructor de la siguiente manera

	constructor(public color: string, public ruedas: number, public tipo: string) {

	}
	 */
}

const auto = new Vehiculo('Rojo', 4, '4x4');
console.log(auto);