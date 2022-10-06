/* FUNCIONES CON OBJETOS */

// Declaramos nuestra interfaz
interface RepararLOR {
	nombre: string,
	porcentaje: number,
	mostrarPorcentaje: () => void, // Indicamos que es una función y que retorna vacío 
}

// Para retornal nada usamos void
function reparar(vehiculo: RepararLOR, porcentajeX: number): void {
	// La propiedad accede a los atributos de nuestra interfaz al indicarle el tipo el tipo de dato
	vehiculo.porcentaje += porcentajeX;
	console.log(vehiculo);
}

const repararNuevo: RepararLOR = {
	nombre: 'Honda',
	porcentaje: 16,
	mostrarPorcentaje() {
		console.log('Puntos de vida:', this.porcentaje);
	}
}

reparar(repararNuevo, 45);
repararNuevo.mostrarPorcentaje()