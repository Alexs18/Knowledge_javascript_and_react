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

/**foreach have 5 params, the first is a callback, the second is the currectValue
 * the nexts is index, the nexts es the array the nexts es thisargs
 */

/**first params */

CatalogosComida.forEach((params, index, newarray)=>{

    if (params.namefood === "ceviche") {
        params.disponibilidad = "no hay"
        console.log(params)
    }

});

/**Index */

CatalogosComida.forEach((params, index, newarray)=>{

    if (index === 0) {
        params.promocion = true;
        console.log(params)
    }

});
console.log("new arrays")
/*new array */

CatalogosComida.forEach((params, index, newarray)=>{

    let oldarray = params;

    if (params.promocion === true) {
        params.descuento = "10%";
        console.log("old array", oldarray);
        console.log("new array", newarray);    
    }    

});