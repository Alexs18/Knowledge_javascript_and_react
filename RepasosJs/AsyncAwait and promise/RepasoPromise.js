const Promesa = new Promise((resolve, reject)=>{
    if (25>10) {
        resolve("success")
    }else{
        reject(reject(new Error('Menor a 4')))
    }
})

Promesa.then(data=>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})

/**Ejercicio en javascript con promesas
 * Usted esta cursando con 7 asignaruras en la universidad y usted
 * le promete a su familia que pasara las 7 materias, en caso de usted aprobar todas
 * las materias usted habrá cumplido su promesa, caso contrarío no lo hará
 */

const asignaturas = [
    {
        name:"Sistemas Distribuidos",
        estado:"Aprobado"
    },
    {
        name:"Informatica forense",
        estado:"Aprobado"
    },
    {
        name:"Inteligencia Artificial",
        estado:"Aprobado"
    },
    {
        name:"Emprendimiento",
        estado:"Aprobado"
    },
    {
        name:"Administración de unidades informaticas",
        estado:"Reprobado"
    },
    {
        name:"Gestión de proyectos",
        estado:"Aprobado"
    },
    {
        name:"Auditoria",
        estado:"Reprobado"
    },
]

/**const valor1 = asignaturas.find(e=>{e.estado == "Reprobado"; return e.name})
console.log(valor1)**/

const resultadoPromesa=(resolve, reject)=>{
    let materiasreprobadas = asignaturas.filter((valor)=> {
        return valor.estado !== "Aprobado"
    });
    if(materiasreprobadas.length !== 0){
        reject(materiasreprobadas)
    }else{
        resolve("Felicidades, usted a aprobado en todas las materias:::")
    }
    
}

//resultadoPromesa()
const PaseDeGrado = new Promise(resultadoPromesa);

PaseDeGrado.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log("Usted a reprobado en las siguientes materias: ")
    error.map((valor)=>{
        console.log(valor.name)
    })
})