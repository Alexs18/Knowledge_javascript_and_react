import React, {useState} from 'react'
import "./Styles.css";
import EstadoSimple from './EstadoSimple';

export default function Estados() {
  
   const childrens = [
       {
            id:1,
            name:"Alex",
            age:23,
            url:"https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?w=2000"
       },
       {
            id:2,
            name:"Alberto",
            age:20,
            url:"https://cdn.pixabay.com/photo/2018/05/01/16/19/young-man-3366016_960_720.jpg"
       },
       {
        id:3,
        name:"Karen",
        age:21,
        url:"https://www.esic.edu/sites/default/files/rethink/8ba013b5-customer-persona.jpg"
   },
   ]
   
    /**Hook de estado del arreglo */
    const [value] = useState(childrens);
    /**Hook del indicador */
    const [index, setIndex] = useState(0);
    

    const ChangeIndex =()=>{
        
        if (index < value.length-1) {
            setIndex(index+1)
            console.log(value);   
        }
    }
    const NoChangeIndex =()=>{
        if (index> 0) {
            console.log(index, value.length)
            setIndex(index-1)
            console.log(value);   
        }
    }

    return (
    <>
        <div className='Target_people'>
            <ul className='Target_people_ul'>
                <li>
                    <img className='Target_img' src={value[index].url} alt="" />
                </li>
                <li>
                    Identificador:{value[index].id}
                </li>
                <li>
                    Nombre:{value[index].name}
                </li>
                <li>
                    Edad:{value[index].age}
                </li>
            </ul>
            <button onClick={ChangeIndex}>after</button>
            <button onClick={NoChangeIndex}>before</button>
        </div>
        {/**Estado simple*/}
        <EstadoSimple>

        </EstadoSimple>
    </>
  )
}
