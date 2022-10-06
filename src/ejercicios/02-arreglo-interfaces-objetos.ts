/* ARREGLOS */

// Arreglo (array) - Le podemos indicar los tipos de datos que podemos guardar en el arreglo
let colores: string[] = ['Verde', 'amarillo', 'azul'];
colores.push('rojo');

let habilidades: (string | number | boolean)[] = ['CSS', 'HTML', 'JS', 200];
habilidades.push(true)

console.log(colores, habilidades);

/* OBJETOS */

// Interface sirve para definir los tipos de datos soportados en nuestro elemento y inicia con mayuscula
interface Hero {
	nombre: string,
	hp: number,
	habilidades: string[],
	residencia?: string, // El signo ? sirve para indicar que ese elemento es opcional
}

const hero: Hero = {
	nombre: 'Peter Parker',
	hp: 100,
	habilidades: ['fuerza', 'inteligencia', 'telaraña']
}

// Agregamos un nuevo registro
hero.residencia = 'Queens'

console.log(hero);
console.log(hero.nombre);