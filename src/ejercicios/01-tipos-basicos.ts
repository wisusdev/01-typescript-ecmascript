console.log('Index.ts');

/*
    Tipos basicos y conceptos generales
*/

// String (se debe poner : seguido de el tipo de datos)
let nombre: string = 'Jesus';
// name = 1990; -> no se puede asigar otro tipo de datos a una variable previamente definida

// number es el tipo de datos numerico
let edad: number = 32;

// Una variable puede aceptar uno o mas tipos de datos
let altura: number | string = 170;

// Booleano (true o false)
let feliz: boolean = true;

console.log(nombre, edad, altura, feliz);