import { useState } from "react"

export default function Estado() {
    
    const [content, setContent] = useState("");

    const [message, setMessage] = useState([]);

    const ChangeInput = (event)=>{
        console.log(event);
        setContent(event.target.value);
    }

    const sendMessage =()=>{
        message.push(content)
        setMessage([...message]);
        //explicar esta funcion
        setContent("")
    }

    //Componente controlado
    return (
        <>
            <div>
                    {message.map(message=> <p>{message}</p>)}
            </div>
            <p>{content}</p>
            <input type="text" value={content} onChange={ChangeInput}/>
            <button onClick={sendMessage}>Enviar</button>
        </>
    )
}