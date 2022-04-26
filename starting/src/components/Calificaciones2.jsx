import { Fragment } from "react"
import DetallesAlumno from "./DetallesAlumno"

let Notas8vo = [
    {
        Id:1,
        Nombre:"Alexis",
        Calificaciones:[10,7,5]
    },
    {
        Id:2,
        Nombre:"Tommy",
        Calificaciones:[10,10,2]
    }
]

function Calificaciones2() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Calificaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {Notas8vo.map(notas=>(
                            <DetallesAlumno notas={notas}></DetallesAlumno>
                        )
                    )}
                </tbody>
            </table>
        </>        
    )
}

export default Calificaciones2