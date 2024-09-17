
let contFoto = document.getElementById('contFoto');

let productos= JSON.parse(localStorage.getItem("productos")) || null;


const urlParams = new URLSearchParams(window.location.search);
const productoIndex = parseInt(urlParams.get("index"));
if (!isNaN(productoIndex) && productoIndex >= 0 && productoIndex < productos.length) {
    const producto = productos[productoIndex];
    const contFoto = document.getElementById('contFoto');

    // Crear la estructura para mostrar la imagen
    // ******
    let columnaDet = document.createElement("div");
    columnaDet.classList = "col-md-4 my-4 ";
    let tarjetaDetalle1 = `<img src=${producto.img} class="img-fluid rounded-start" alt=${producto.nombre}>
    </div>`;
    let columnaDet2= document.createElement('div');
    columnaDet2.classList="col-md-8 my-2"
    let tarjetaDetalle2=
    `<div class="card-body">
        <h5 class="card-title fw-bold text-danger-emphasis mt-4"><u>${producto.nombre}</u></h5>
        <p class="card-text  mt-5"><b>DESCRIPCION :</b><br> ${producto.descrip}.</p>
        <p class="card-text  fw-bold">PRECIO : $ ${producto.precio}</p>
        <p class="card-text"><small class="text-body-secondary fw-semibold">STOCK DISPONIBLE : ${producto.stock}</small></p>
        <p class="card-text"><small class="text-body-secondary fw-semibold">CATEGORIA : ${producto.categoria}</small></p>
        <a href="/Pages/error404.html" class="btn btn-success text-light fw-bold mb-2">agregar</a>
        <a href="/Pages/error404.html" class="btn fw-bold btn-secondary mb-2">ver cuotas y medios de pago</a>
    </div>
    </div>
    </div>` ;  

    columnaDet.innerHTML =tarjetaDetalle1;
    columnaDet2.innerHTML=tarjetaDetalle2;
    contFoto.append(columnaDet);
    contFoto.append(columnaDet2);

} 
// *****Llamando la función del buscador
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
