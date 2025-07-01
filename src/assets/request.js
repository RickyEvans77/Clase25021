export const agregarProducto = (producto) => {
    return (
        new Promise(async (resu, rech) => {
            try {
                //const respuesta = await fetch("https://6834476e464b499636020d00.mockapi.io/productos", {
                const respuesta = await fetch('/productos.json', {
                    method: 'POST', headers: { 'Content-Type': 'application/json', },
                    body: JSON.stringify(producto),
                });

                if (!respuesta.ok) {
                    throw new Error('Error al agregar el producto.');
                }
                const data = await respuesta.json();
                    console.log('Producto agregado:', data);
                    resu(data)
            } catch (error) {
                    console.error(error.message);
                    rech(error.message)
            }
        })
    )

};