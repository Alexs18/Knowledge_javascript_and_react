let CatalogosComida = [
    {
        namefood:"ceviche",
        price:"25$",
        promocion:true
    },
    {
        namefood:"encebollado",
        price:"45$",
    },
    {
        namefood:"Bandera",
        price:"22$",
        promocion:true
    },
    {
        namefood:"Salchipapa",
        price:"22$"
    }
]

let newvalue = CatalogosComida.map((values, index, newarray)=>{
    
    if (values.promocion === true) {
        
        let nuevosvalores= {

            comida: values.namefood,
            precio: values.price,
            promocion: "Arriba"
        }

        return nuevosvalores
    }

})
console.log(newvalue);