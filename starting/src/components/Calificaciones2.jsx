import { Fragment } from "react"
import DetallesAlumno from "./DetallesAlumno"
import Menu from "./Menu"

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

            <Menu>
                <ul>
                    <li>
                        Hola
                    </li>
                </ul>
            </Menu>
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
                            <DetallesAlumno notas={notas} alumnos={["Alexis", "Karen", "Dayana"]} jsx={<div><h1>Hola</h1><p>Hola2</p></div>} ></DetallesAlumno>
                        )
                    )}
                </tbody>
            </table>
        </>        
    )
}

export default Calificaciones2