function Productos() {

    const listaProductos = ["Carne", "Manzana", "Pescado"]
    const ListaProductosJSX = listaProductos.map(producto=> <p>{producto}</p>);

    const jsxElements = [ <p>Elemento1</p>, <p>Elemento2</p> ]

    return <div>
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
            </div>

}

export default Productos;