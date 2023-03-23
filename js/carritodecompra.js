
let productoEnCarrito = localStorage.getItem('prod');
productoEnCarrito = JSON.parse(productoEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProducto = document.querySelector("#carrito-productos");
const contenedorCarritoAciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


function cargarProductosCarrito() {


    if (productoEnCarrito && productoEnCarrito.length > 0) {



        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProducto.classList.remove("disabled");
        contenedorCarritoAciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProducto.innerHTML = "";


        productoEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
        <img class="producto-imagen productoImagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="carrito-producto-titulo">
             <small>Titulo</small>
             <h3>${producto.titulo}</h3>
        </div>
        <div class="carrito-producto-cantidad">
             <small>Cantidad</small>
             <p>${producto.cantidad}</p>
        </div>
        <div class="carrito-producto-precio">
                <small>Precio</small>
                 <p>${producto.precio}</p>
        </div>
        <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                 <p>${producto.precio * producto.cantidad}</p>
        </div>
        <button class="carrito-producto-eliminar" id="${producto.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16"
         height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path
         d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
        </svg></button>
        `;

            contenedorCarritoProducto.append(div);
        })





    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProducto.classList.add("disabled");
        contenedorCarritoAciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarbtnEliminar();
    actualizarTotal();
}

cargarProductosCarrito();

function actualizarbtnEliminar() {
    btnEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    btnEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });

}


function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productoEnCarrito.findIndex(producto => producto.id === idBoton);

    productoEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("prod", JSON.stringify(productoEnCarrito));

}


botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productoEnCarrito.length = 0;
    localStorage.setItem("prod", JSON.stringify(productoEnCarrito));
    cargarProductosCarrito();
}


function actualizarTotal() {
    const totalCompra = productoEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCompra}`;

}


botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {
    productoEnCarrito.length = 0;
    localStorage.setItem("prod", JSON.stringify(productoEnCarrito));

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProducto.classList.add("disabled");
    contenedorCarritoAciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}





