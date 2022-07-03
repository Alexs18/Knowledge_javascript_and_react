/**basic example to generator*/
/**un generator es una forma basica de crear un iterador dentro de 
 * javascript, es como una funcion, pero se define con un *
 */
function * generator() {
    yield 10;
    yield 2;
}

let gener = generator();
for (let index = 0; index < 5; index++) {
    console.log('dino')
    console.log(gener.next())
    
}
/**ejemplo avanzado de generator*/

function *GeneratorMultiple(Nombre, Apellido) {
  if (arguments[0] == 'Nombres') {
        yield arguments;   
  }
  yield 'vacio'
}

console.log(GeneratorMultiple('Nombre', 'Linux').next());
