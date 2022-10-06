// Cases básicas
class Heroe {
	// Esta propiedad solo es visible dentro de la clase
	private alterEgo: string;

	// Public significa que se puede acceder a la propiedad desde fuera de la clase
	public edad: number;

	// Static significa que puedo acceder a la propiedad sin una isntancia de la clase
	static nombre: string;
}

// Instanciamos la clase
const spiderMan = new Heroe();
console.log(spiderMan.edad); // acediendo a la propiedad púbica