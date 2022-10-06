// Genéricos

// <T> es un estandar para indicar que el argumento que vamos a recibir es un generico
function tipoDeArgumento<T>(argumento: T){
	return argumento;
}

let esString = tipoDeArgumento('Hola mundo');
let esNumero = tipoDeArgumento(200);
let esArreglo = tipoDeArgumento([1,2,3,4,5,6,7,8] );

let esExplicito = tipoDeArgumento<number>(100); // con <number> le indicamos que es un tipo number lo que se espera de retorno.