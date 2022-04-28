import Menu from "./Menu";
function DetallesAlumno({notas, alumnos, jsx}) {
   
    console.log(alumnos, jsx)
    //podemos hacerlo de esta forma, pero tambien podemos hacer inyeccion de dependencia
    //const {notas} = props;

    //Definir funcion para la cuenta de valores><
    let CalificacioFinal = 0;
    function CalcularValores(notas1) {
        alert("estamos calculando su promedio señor", +  notas1.Nombre);
        CalificacioFinal = 10;
    }

    return (
        <>
            <tr key={notas.Id}>
                <td>{notas.Id}</td>
                <td>{notas.Nombre}</td>
                {
                    notas.Calificaciones.map((notasprocess, index)=>(

                        <td key={index}>{notasprocess}</td>

                    ))
                }
                <td>{CalificacioFinal}</td>
                <td>
                    <button onClick={CalcularValores}>Precioname</button>
                </td>
            </tr>
            <Menu>
                <ul>
                    <li>
                        Linux
                    </li>
                </ul>
            </Menu>
        </>
    )

}

export default DetallesAlumno