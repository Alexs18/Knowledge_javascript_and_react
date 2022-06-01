/**Basic example*/
let hora = new Date();
function waiting() {
    return new Promise((resolve)=>{
        console.log("im waiting")
        setTimeout((estado)=>{
            resolve("la hora actual es: " +hora.getHours()+ " horas con: " + hora.getMinutes() + " Minutos");
        },2000);
    })
}

async function waitingasync() {
    console.log("Im waiting.....");
    const horaactual = await waiting();
    console.log(horaactual);
    console.log("this is your hour")
}

waitingasync();

/**Las promesas por lo general esperan a que los sectores
 * de codigo se cumplan, antes de seguir a la siguiente función
 * o tambien podemos manejar las promesas por medio del asyn await
 */

/**Simule un ejercicio en el consulte dos veces a la misma
 * Api con diferentes tiempos de latencia en la primera respondera
 * con el nombre y en la segunda con la fecha de modificación
 */
const ApiSimulacion= 
[
    {
        name:"Linux",
        fecha:"12-04-2021"
    },
    {
        name:"Developes",
        fecha:"12-04-2022"
    }
]

function dt (){ApiSimulacion.forEach(e=> console.log(e)) }
//dt();



function Peticion1(Api) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(
                Api.forEach(data=> console.log(data.name))
            )
        }, 2000)
    });
}

function Peticion2(Api) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(
                Api.forEach(data=> console.log(data.fecha))
            )
        }, 1000)
    });
}

async function AllFunction(Api,Callback1, Callback2){
    try {
        let fechas = await Callback1(Api);
        let nombres = await Callback2(Api);
        console.log(fechas, nombres)      
    } catch (error) {
        console.log(error)
    }
}

AllFunction( ApiSimulacion,Peticion1, Peticion2)

















