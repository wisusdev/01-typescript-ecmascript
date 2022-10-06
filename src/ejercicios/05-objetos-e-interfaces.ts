interface SuperHeroe {
	nombre: string,
	edad: number,
	direccion: Direccion, // Instanciamos una interfaz para evitar que el codigo se complique
	mostrarDireccion: () => string,
}

// Creamos una nueva interfaz
interface Direccion {
	calle: string,
	pais: string,
	ciudad: string
}

const superHeroes: SuperHeroe = {
	nombre: 'Spiderman',
	edad: 30,
	direccion: {
		calle: 'Main St.',
		pais: 'USA',
		ciudad: 'Queens'
	},
	mostrarDireccion(){
		return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais
	}
};

const direccion = superHeroes.mostrarDireccion();
console.log(direccion);