import { Producto } from "./clases.js";

const myModal = new bootstrap.Modal(document.getElementById('myModal'));


export let productos = JSON.parse(localStorage.getItem('productos')) || [];
// localStorage.removeItem('productos');
// localStorage.removeItem('users');
let auth = JSON.parse(localStorage.getItem('auth')) || null;
let contenido = document.getElementById('main');
let btnClose = document.getElementById('logOut');


if (!auth) {
    btnClose.className = "d-none";
    contenido.innerHTML = "";
    let mensaje = document.createElement('div');
    mensaje.classList = "alert alert-info pt-5 mt-4";
    mensaje.role = "alert";
    mensaje.innerHTML = `<i class="bi bi-exclamation-triangle-fill"></i> No tienes accesso a esta página, haz click <a href="/Pages/login.html" class="alert-link">Aquí para iniciar sesión.</a>`
    contenido.append(mensaje);
}
window.guardar_datos = (event) => {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let categoria = document.getElementById('categoria').value;
    let img = document.getElementById('img').value;
    let stock = document.getElementById('stock').value;
    let precio = document.getElementById('precio').value;
    let codigo = document.getElementById('codigo').value;
    let marca = document.getElementById('marca').value;
    let descrip = document.getElementById('descripcion').value;
    let nuevo_producto = new Producto(nombre, categoria, img, stock, precio, codigo, marca, descrip);
    if (precio) {
        parseFloat(precio)
    }

    productos.push(nuevo_producto);
    localStorage.setItem('productos', JSON.stringify(productos));
    document.getElementById('myFormAddProd').reset();
    myModal.hide();
    cargar_tabla();

}


let tabla = document.querySelector('tbody');
window.cargar_tabla = () => {
    tabla.innerHTML = "";
    productos.map((producto, index) => {
        let fila = document.createElement('tr');
        let celda = `<td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
        <td>${producto.stock}</td>
        <td>$${producto.precio}</td>
        <td>${producto.codigo}</td>
        <td>${producto.marca}</td>
        <td>${producto.descrip}</td>
        <td ><button class="btn btn-danger fw-bold my-2 me-2" onclick="eliminar(${index})"><i class="bi bi-trash3-fill"></i> </button><button class="btn btn-success fw-bold" onclick="mostrar_modal(${index})"><i class="bi bi-pencil-square"></i> </button></td>`
        fila.innerHTML = celda;
        tabla.append(fila);
    })
}

window.eliminar = (index) => {
    let validar = confirm(`Desea eliminar: ${productos[index].nombre.toUpperCase()} de la lista?`);
    if (validar) {
        productos.splice(index, 1);
        alert('El producto se eliminó correctamente.');
        localStorage.setItem('productos', JSON.stringify(productos));
        cargar_tabla();
    }
}



let posicionProd = null;
window.mostrar_modal = (index) => {
    posicionProd = index;
    document.getElementById('nombreModal').value = productos[posicionProd].nombre;
    document.getElementById('categoriaModal').value = productos[posicionProd].categoria;
    document.getElementById('imgModal').value = productos[posicionProd].img;
    document.getElementById('stockModal').value = productos[posicionProd].stock;
    document.getElementById('precioModal').value = productos[posicionProd].precio;
    document.getElementById('codigoModal').value = productos[posicionProd].codigo;
    document.getElementById('marcaModal').value = productos[posicionProd].marca;
    document.getElementById('descripcionModal').value = productos[posicionProd].descrip;

    myModal.show();
}


window.actualizarProducto = (event) => {
    event.preventDefault();

    productos[posicionProd].nombre = document.getElementById('nombreModal').value;
    productos[posicionProd].categoria = document.getElementById('categoriaModal').value;
    productos[posicionProd].img = document.getElementById('imgModal').value;
    productos[posicionProd].stock = document.getElementById('stockModal').value;
    productos[posicionProd].precio = document.getElementById('precioModal').value;
    productos[posicionProd].codigo = document.getElementById('codigoModal').value;
    productos[posicionProd].marca = document.getElementById('marcaModal').value;
    productos[posicionProd].descrip = document.getElementById('descripcionModal').value;

    if (precio.value) {
        parseFloat(precio)
    }
    localStorage.setItem('productos', JSON.stringify(productos));

    myModal.hide();
    cargar_tabla();
}


window.buscadorProd = () => {
    let buscar = document.querySelector("#buscador").value;
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
            document.getElementById('form-buscador').reset();
        } else {
            alert('No hay coincidencias');
            document.getElementById('form-buscador').reset();
        }
    } else {
        alert('Ingresa un término de búsqueda');
    }
};


cargar_tabla();


const cerrarSesion = () => {
    localStorage.removeItem('auth');
    location.replace('/')
}
btnClose.addEventListener('click', cerrarSesion);


let inputSusc = document.querySelector('#inputSuscrip');
let formSuscrip = document.getElementById('suscrip');
const suscripcion = (event) => {
    event.preventDefault();
    const email = inputSusc.value.trim();
    // alert(`Gracias por suscribirte con el correo electrónico: ${email}`);
    Swal.fire({
        title: `Bienvenido/a: ${email}`,
        text: '¡Gracias por suscribirte!',
        icon: "success"
    })
    formSuscrip.reset();
}
formSuscrip.addEventListener('submit', suscripcion);

window.arrepentimiento = () => {
    Swal.fire({
        title: "¿ Estás seguro ?",
        text: "Perderás todos los cambios.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, me arrepiento!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "¡ cancelado !",
                text: "Tu operación fue eliminada.",
                icon: "success"
            });
        }
    });

}

