/**Ejemplos basicos de callback */

function Cambios(valor) {
    console.log(valor+15)
}
function CambiosNuevos(Valor2, callback) {
    const resultado = Valor2-5;
    callback(resultado)
}
CambiosNuevos(20, Cambios);

/**Ejemplos de callbacks con arrays */

const arraycont = [50, 10, 2,5,30, 20]

function ChangeArrayValue(Array, callback) {
    for (const key in Array) {
         if (Array[key] > 10) {
             callback(Array[key])
         }
    }
}

const newarray = [];

function SaveArrayValue(Data) {
    newarray.push(Data)
    console.log(newarray)
}

ChangeArrayValue(arraycont, SaveArrayValue);
