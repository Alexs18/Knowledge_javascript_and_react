const Listas =()=>{

    /**El reto es mostrar datos de los alumnos */
    const alumnos =[
        {
            id:"1",
            name:"Alex",
            age:"22"
        },
        {
            id:"2",
            name:"Nardine",
            age:"22"
        },
        {
            id:"3",
            name:"Karen",
            age:"20"
        },
        {
            id:"4",
            name:"Sebastian",
            age:"19"
        }
    ]

    let alumnoslistas = alumnos.map((values, index, array)=>{

        return <ul className="ListStudents" key={values.id}>
                    <li>Id: {values.id}</li>
                    <li>Nombre:{values.name}</li>
                    <li>Edad:{values.age}</li>
               </ul>
        
    })
    return <div className="ComponentContent">
                <h1 className="TituloLista">Lista de estudiantes</h1>
                <div className="ListContent">
                            {alumnoslistas}
                </div>
           </div>

}

export default Listas