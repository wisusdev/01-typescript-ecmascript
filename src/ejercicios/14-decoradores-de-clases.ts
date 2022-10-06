// Decoradores

function classDecorator<T extends { new (...args: any[]): {}}>(constructor: T){
	return class extends constructor {
		newProperty = "new property";
		hello = 'override';
	}
}

@classDecorator
class SuperClase {
	public miPropiedad: string = 'ABC123';

	imprimir(){
		console.log('Hola desde mi super clase');
	}
}

console.log(SuperClase);

const miClase = new SuperClase();
console.log(miClase);
console.log(miClase.miPropiedad);