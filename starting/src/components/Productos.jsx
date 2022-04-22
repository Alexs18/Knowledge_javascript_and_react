import { Fragment } from "react";

function Productos() {

    const listaProductos = ["Carne", "Manzana", "Pescado"]
    const ListaProductosJSX = listaProductos.map((producto, index)=> <p key={index}>{producto}</p>);

    const jsxElements = [ <p key={"1"}>Elemento1</p>, <p key={"2"}>Elemento2</p> ]

    return <Fragment>
                <p>hey guys I'm here</p>
                <a href="hola">this is me</a>
                {jsxElements}
                {ListaProductosJSX}
                {
                    listaProductos.map((producto, index)=>{

                        let indexnew = index+1
                        const ProductosModificados = producto.toUpperCase();
                        return <p key={indexnew}>{ProductosModificados}</p>

                    })
                }
            </Fragment>

}

export default Productos;