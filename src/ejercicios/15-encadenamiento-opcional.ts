interface Pasajero {
	nombre: string,
	hijos?: string[], // El signo de interrogación (?) significa que ese valor es opcional
}

const pasajero01: Pasajero = {
	nombre: 'José'
}

const pasajero02: Pasajero = {
	nombre: 'María',
	hijos: ['Roberto', 'Leticia']
}

function imprimirHijos(pasajero: Pasajero): void {
	const cuantosHijos = pasajero.hijos?.length || 0; // usamos el simbolo de interrogacion (?) para indicar si esa propiedad existe
	console.log(cuantosHijos);
}

imprimirHijos(pasajero01);