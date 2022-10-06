/* FUNCIONES */

// Seguido de los argumentos le indicamos el tipo de dato. Tambien podemos indicar el tipo de retorno
function sumar(a: number, b: number): number  {
	return a + b;
}

// Función de flecha
const sumFlecha = (a: number, b: number): number => {
	return a + b;
}

// Argumentos obligatorios, argumento opcional(se coloca un ?) y argumento con valor por defecto
function multiplicar(num01:number, num02?:number, base:number = 2): number {
	return num01 * base;
}

const suma01 = sumar(4, 8);
const suma02 = sumFlecha(3, 9);
const multi = multiplicar(5, 5);

console.log(suma01, suma02, multi);