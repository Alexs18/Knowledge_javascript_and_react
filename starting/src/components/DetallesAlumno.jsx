
function DetallesAlumno(props) {
   
    const {notas} = props;

    //Definir funcion para la cuenta de valores
    console.log(notas.Nombre);
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
        </>
    )

}

export default DetallesAlumno