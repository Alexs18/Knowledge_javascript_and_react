import { Fragment } from "react"

const Listas =()=>{

    /**El reto es mostrar datos de los alumnos */
    const alumnos =[
        {
            id:"1",
            name:"Alex",
            age:"22",
            img:"../static/img/Ed.jpg"
        },
        {
            id:"2",
            name:"Nardine",
            age:"22",
            img:"../static/img/Edd.png"
        },
        {
            id:"3",
            name:"Karen",
            age:"20",
            img:"https://st2.depositphotos.com/27610122/47131/i/600/depositphotos_471319338-stock-photo-three-medical-masks-lie-in.jpg"
        },
        {
            id:"4",
            name:"Sebastian",
            age:"19",
            img:"../static/img/Tablon.png"
        }
    ]

    let alumnoslistas = alumnos.map((values, index, array)=>{

        return <Fragment> 
                    <ul className="ListStudents" key={values.id}>
                        <li>Id: {values.id}</li>
                        <li>Nombre:{values.name}</li>
                        <li>Edad:{values.age}</li>
                     </ul>
               </Fragment>
        
    })
    return <div className="ComponentContent">
                <h1 className="TituloLista">Lista de estudiantes</h1>
                <div className="ListContent">
                            {alumnoslistas}
                </div>
           </div>

}

export default Listas