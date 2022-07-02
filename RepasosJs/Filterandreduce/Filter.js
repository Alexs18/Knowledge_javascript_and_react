let CatalogosComida = [
    {
        namefood:"ceviche",
        price:"25$",
        promocion:true
    },
    {
        namefood:"encebollado",
        price:"45$",
    },
    {
        namefood:"Bandera",
        price:"22$",
        promocion:true
    },
    {
        namefood:"Salchipapa",
        price:"22$"
    }
]
/**filter working to rerturn a new array depents of condition  */
let Filter = CatalogosComida.filter((element)=>{
    return element.namefood.length <= 7;
    
}, this)

//console.log(Filter);

 /**reduce is working to acount values betwen them */
/**acumulador que cuenta con los datos a contar, y retorna un solo valor al final */
 let reduce = CatalogosComida.reduce((acum, element, index)=>{
    //console.log(index)
    return (acum.concat(element.price))
   //numero que se le pasa al acumulador de inicio
 },[]);

console.log(reduce);

/**Argumentos dentro de una funcion en javascript */

function Argunmentos(nombre, valor) {
    
    if (arguments[1] === 'server') {
        arguments[1] = 'what fucking server'
    }
    //console.log(arguments[1])
    console.log(nombre+valor)
}

Argunmentos('linux', 'server');

/**spred operator en javascript*/
let dataspred = [1,2,3,4]
function Spread(...params) {
 
    console.log(arguments[2]())
    
}
Spread(dataspred, 'linux', ()=>{console.log('workingf')});