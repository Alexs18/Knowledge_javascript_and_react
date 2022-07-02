/**to make constructor to a function we need a create a simple function and then call them 
 * through a object 
 */
function Objeto(title, name, version, data) {
    arguments[0] = arguments[0].toUpperCase();
    this.title = title
    this.name = name,
    this.version = version,
    this.data = data
}

let objeto = new Objeto('Linux', 'server', '27.0', {dataversion:"23", pool:"3 pool request"});
let objeto1 = new Objeto('Windows', 'Max')

/**DESTRUCTURANDO EL OBJETO 0 */

let {title, ...resto} = objeto;
console.log(title, resto)

/**destructuración, la destructuracion puede ser tanto de un objeto como de una arreglo */
let arreglo = {...objeto, fecha:"12:10:2022"}
console.log(arreglo);

/**destructurando un arreglo */

let arreglodes = ['linux', 'server', {data:'1'}]

let [d, t ,data] = arreglodes;
console.log(data.data);