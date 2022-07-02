/**las clases en javascript nos permiten ahorrarnos tiempo al momento de escribir o reescribir nuestro codigo */
/**Definicion de una clase normal en javascript */
class Perro{
    constructor(name, lastname, age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
}
/**Instancia de las clases en javascript */
let Perro1 = new Perro('dogi', 'safiro', '16');
console.log(Perro1);

let Perro2 = new Perro('cheta', 'leon', '20');
console.log(Perro2)

/**Definicion de variables publicas y funciones publicas dentro de una clase de javascript*/

class PubliData{
    nombre = 'servidores';
    Saludar(){
        return ('te saluda: ' + this.nombre);
    }
}

let publicsaludo = new PubliData();
console.log(publicsaludo.Saludar()+ ' atentamente:' + publicsaludo.nombre);

/**¨Definicion de variables privadas y funciones privadas dentro de javascript*/
/**las funciones privadas solo pueden ser accesibles desde dentro de la clase, es decir una
 * funcion si puede acceder a las clases
 */
class PrivateDog{
    #nombre = 'dogi';
    saludar(){
        return ("Hola te saluda mi perro:" + this.#nombre)
    }
}

let dogi1 = new PrivateDog();
/**esto dara un error */
console.log(dogi1.nombre);

/**esto no dará un error */
console.log(dogi1.saludar());

/**herencia
 * podemos usar herencia, es decir de las clases anteriores definir otras clases
 * y pasarles los mismos metodos
 */

/**clase animales */

class Animales{

    constructor(nombre, especie){
        this.nombre = nombre;
        this.especie = especie;
    }
    MostrarEspecie(){
        return ('soy :' + this.nombre + ' mi especie es :' + this.especie)
    }

}

let Tiburon = new Animales('Tiburon', 'Marina');
console.log(Tiburon.MostrarEspecie());

class Vertebrados extends Animales{
    constructor(nombre, especie){
        super(nombre, especie)
    }
}

let Perrodog = new Vertebrados('Perro', 'Perruna');
console.log(Perrodog.MostrarEspecie());


