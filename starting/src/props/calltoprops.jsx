import React from 'react'
import Funcionesexample from './propsExamples'


export default function calltoprops() {


    const valores =[
        {
            id:1,
            nombre:"alexis",
            apellido:"Lopez"
        },
        {
            id:2,
            nombre:"Jesus",
            apellido:"Molina"
        }
    ]

    const alumno ={
        name:"linux",
        profesion:"developer",
        skills:{
            english:"b1",
            css:"alto",
            javascript:"medio-alto"
        }
    }

    const Pelis= [
        {
            Title:"Avengers",
            Category:"Comic"
        },
        {
            Title:"Avengers1",
            Category:"Comic"
        },
        {
            Title:"Avengers3",
            Category:"Comic"
        }
    ]

    console.log("renderizacion")
    return (

    <>
        <Funcionesexample.Funcion3 Peliculas={Pelis}/>
        <Funcionesexample.Funcion1 name={"alexis1"}/>
        <Funcionesexample.Funcion1 skills={alumno.skills.english}/>
        <Funcionesexample.Funcion2 values={valores}/>
    </>

  )
}
