
let productos= JSON.parse(localStorage.getItem("productos")) || null;

window.buscadorProdInicio =()=> {

    let buscar = document.querySelector("#buscadorIn").value;

    if (buscar) {
        let coincidencias = productos.filter((product) => {
            return (
                product.nombre.toUpperCase().includes(buscar.toUpperCase()) ||
                product.categoria.toUpperCase().includes(buscar.toUpperCase()) ||
                product.marca.toUpperCase().includes(buscar.toUpperCase())
            );
        });

        if (coincidencias.length > 0) {
            alert(coincidencias.map(product => product.nombre + '\n'));
            document.getElementById('form-buscador-inicio').reset();
        } else {
            alert('No hay coincidencias');
            document.getElementById('form-buscador-inicio').reset();
        }
    } else {
        alert('Ingresa un término de búsqueda');
    }
    
};
