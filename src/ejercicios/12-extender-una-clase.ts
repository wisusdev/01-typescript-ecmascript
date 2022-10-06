class User {
	// Podemos declarar nuestro contructor de la siguiente manera
	constructor(public name:string, public age:number, public address:string) {

	}
}

// Usamos extends para extender las propiedades de nuestra clase
class Employee extends User{
	constructor(public fullName:string, public email:string,  public phone:number) {
		super(fullName, 32, 'Chalate'); // super llama al contructor de la clase a la que estamos extendiendo
	}
}

const newUser = new Employee('Juan Palo', 'juan@mail.com', 12345678);
console.log(newUser);