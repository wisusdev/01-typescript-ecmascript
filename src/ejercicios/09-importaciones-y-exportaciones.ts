// importaciones y exportaciones
import {calculaIVA, Producto} from "./08-desestructuracion-de-argumentos";

const carrtoCompras: Producto[] = [
	{
		desc: 'Tel 01',
		precio: 100,
	},

	{
		desc: 'Tel 02',
		precio: 200,
	},
];

const [total, iva] = calculaIVA(carrtoCompras);

console.log('Total: ', total);
console.log('IVA', iva);