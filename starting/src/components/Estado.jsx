import { useState } from "react"

export default function Estado() {

    /**destructuracion del estdo del componente */
    const [content, setContent] = useState("");

    const [message, setMessage] = useState([]);

    //**Evento de javascript implementado desde react */
    const ChangeInput = (event)=>{
        //console.log(event);
        //content.texto = event.target.value
        setContent(event.target.value);
    }

    /**Cambiamos el contenido del mensaje utilizando la mutación del estado
     * de react
     */
    const sendMessage =()=>{
        message.push(content)
        setMessage([...message]); //[...message]
        //explicar esta funcion
        setContent("")
    }

    //Componente controlado
    //Llamamos al evento y mapeamos el mensaje coolocandolo en el div de contenido
    return (
        <>
            <div>
                    {/*este es el contenedor de todos los mensajes*/}
                    {message.map(message=><p className="message">{message}</p>)}
            </div>
            {/*este será el texto que se ests escribiendo*/}
            <p className="writing" >{content}</p>
            {/*Boton por el cual cambimos el contenido donde se guardaran todos los mensajes*/}
            <input type="text" value={content} onChange={ChangeInput}/>
            <button onClick={sendMessage}>Enviar</button>
        </>
    )
}