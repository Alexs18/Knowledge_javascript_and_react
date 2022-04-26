import { Fragment } from "react";

let NotesStudents = [

    {
        Id:1,
        Nombre:"Nardine Mendoza",
        Actuacion:{
            Nota:7,
            Descripcion:"Faltaron participaciones"
        },
        Exposicion:{
            Nota:9,
            Descripcion:"Excelente Dinamica"
        },
        Debate:{
            Nota:9,
            Descripcion:"Ideas Claras"
        },
        Examen:{
            Nota:7,
            Descripcion:"Falló en 3 Preguntas"
        },
        Proyecto:{
            Nota:10,
            Descripcion:"Excelente proyecto"
        },
    },
    {
        Id:2,
        Nombre:"Karen Santana",
        Actuacion:{
            Nota:8,
            Descripcion:"Faltaron participaciones"
        },
        Exposicion:{
            Nota:10,
            Descripcion:"Excelente Dinamica"
        },
        Debate:{
            Nota:8,
            Descripcion:"Ideas Claras"
        },
        Examen:{
            Nota:5,
            Descripcion:"Falló en 5 Preguntas"
        },
        Proyecto:{
            Nota:10,
            Descripcion:"Excelente proyecto"
        }
    },
    {
        Id:3,
        Nombre:"Karla Rivas",
        Actuacion:{
            Nota:9,
            Descripcion:"Faltaron participaciones"
        },
        Exposicion:{
            Nota:7,
            Descripcion:"Excelente Dinamica"
        },
        Debate:{
            Nota:10,
            Descripcion:"Ideas Claras"
        },
        Examen:{
            Nota:6,
            Descripcion:"Falló en 3 Preguntas"
        },
        Proyecto:{
            Nota:8,
            Descripcion:"Excelente proyecto"
        },
    },
    {
        Id:4,
        Nombre:"Alexander Peres",
        Actuacion:{
            Nota:9,
            Descripcion:"Faltaron participaciones"
        },
        Exposicion:{
            Nota:8,
            Descripcion:"Excelente Dinamica"
        },
        Debate:{
            Nota:10,
            Descripcion:"Ideas Claras"
        },
        Examen:{
            Nota:2,
            Descripcion:"Falló en 3 Preguntas"
        },
        Proyecto:{
            Nota:10,
            Descripcion:"Excelente proyecto"
        },
    },
    {
        Id:5,
        Nombre:"Jordi Caicedo",
        Actuacion:{
            Nota:7,
            Descripcion:"Faltaron participaciones"
        },
        Exposicion:{
            Nota:9,
            Descripcion:"Excelente Dinamica"
        },
        Debate:{
            Nota:9,
            Descripcion:"Ideas Claras"
        },
        Examen:{
            Nota:7,
            Descripcion:"Falló en 3 Preguntas"
        },
        Proyecto:{
            Nota:10,
            Descripcion:"Excelente proyecto"
        },
    }

]

function Calificaciones() {

    let NotasEstudiantes = NotesStudents.map((data, index, array)=>{

        return <Fragment>
                        <tr  className="TblCalification__Content" key={data.Id}>
                        <td className="TblCalification__Content__Text ID">{data.Id}</td>
                        <td className="TblCalification__Content__Text">{data.Nombre}</td>
                        <td className="TblCalification__Content__Text Calificacion Actuacion">
                            <p className="Front">{data.Actuacion.Nota}</p>
                            <p className="Back">{data.Actuacion.Descripcion}</p> 
                        </td>
                        <td className="TblCalification__Content__Text Calificacion Actuacion">
                            <p className="Front">{data.Debate.Nota}</p>
                            <p className="Back">{data.Debate.Descripcion}</p>
                        </td>
                        <td className="TblCalification__Content__Text Calificacion Actuacion">
                            <p className="Front">{data.Exposicion.Nota}</p>
                            <p className="Back">{data.Exposicion.Descripcion}</p>
                        </td>
                        <td className="TblCalification__Content__Text Calificacion Actuacion">
                            <p className="Front">{data.Proyecto.Nota}</p>
                            <p className="Back">{data.Proyecto.Descripcion}</p>
                        </td>
                        <td className="TblCalification__Content__Text Calificacion Actuacion">
                            <p className="Front">{data.Examen.Nota}</p>
                            <p className="Back">{data.Examen.Descripcion}</p>
                        </td>
                    </tr>
               </Fragment>

    });
    
    return <Fragment>
                    <table className="TblCalification">
                        <tbody>
                            <tr className="TblCalification__Content" key={1}>
                                <th className="TblCalification__Content__Head">Id</th>
                                <th className="TblCalification__Content__Head Nombre">Nombre</th>
                                <th className="TblCalification__Content__Head Calificacion">Actuación</th>
                                <th className="TblCalification__Content__Head Calificacion">Exposición</th>
                                <th className="TblCalification__Content__Head Calificacion">Debate</th>
                                <th className="TblCalification__Content__Head Calificacion">Proyecto</th>
                                <th className="TblCalification__Content__Head Calificacion">Examen</th>
                            </tr>
                        </tbody>
                        <tbody>
                            
                            {
                            
                                NotasEstudiantes

                            }
                        </tbody>
                    </table>
            </Fragment>

}

export default Calificaciones