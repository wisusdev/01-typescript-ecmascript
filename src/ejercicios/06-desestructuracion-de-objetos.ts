// Desestructuracion de objetos
interface Reproductor {
	volumen: number,
	segundo: number,
	cancion: string,
	detalles: Detalles,
}

interface Detalles {
	autor: string,
	anio: number,
}

const reproductor: Reproductor = {
	volumen: 90,
	segundo: 36,
	cancion: 'Mess',
	detalles: {
		autor: 'Ed',
		anio: 2017
	}
}

// Desestructuración de un objeto
const {volumen, segundo, cancion, detalles} = reproductor;
const { autor } = detalles;
//const {volumen: vol, segundo: seg, cancion: song, detalles: {autor: author}} = reproductor; // podemos usar aliases

console.log('El volumen es: ' + volumen );
console.log('El segundo es: ' + segundo );
console.log('La canción es: ' + cancion );
console.log('El autor es: ' + autor );