// Destructuración de argumentos

export interface Producto {
	desc: string,
	precio: number
}

const telefono: Producto = {
	desc: 'Nokia A1',
	precio: 200
}

const tablet: Producto = {
	desc: 'iPad',
	precio: 400,
}

export function calculaIVA(productos: Producto[]): [number, number] {
	let total = 0;
	productos.forEach( ( {precio} ) => {
		total += precio;
	});

	return [total, total * 0.13];
}

const articulos = [telefono, tablet];
const [total, iva] = calculaIVA(articulos);
console.log('IVA:', iva);