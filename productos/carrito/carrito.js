const tbody = document.querySelector('tbody');
const btnComprar = document.querySelector('button#btnComprar');

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para renderizar la tabla HTML
const retornarTablaHTML = (producto) => {
  return `
    <tr data-id="${producto.id}">
        <td><img src="${producto.imagen}" alt="${producto.nombre}" width="50"></td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td><button class="btn-remove" data-id="${producto.id}">Quitar</button></td>
    </tr>`;
};

// Función para actualizar la tabla del carrito
const renderizarCarrito = () => {
  tbody.innerHTML = ''; // Limpiamos el contenido actual
  carrito.forEach((producto) => {
    tbody.innerHTML += retornarTablaHTML(producto); // Añadimos cada producto
  });

  // Activamos los eventos de los botones "Quitar"
  activarBotonesEliminar();
};

// Función para eliminar un producto del carrito
const eliminarProducto = (productoId) => {
  const index = carrito.findIndex((producto) => producto.id === parseInt(productoId));
  if (index !== -1) {
    carrito.splice(index, 1); // Eliminamos el producto del array
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualizamos localStorage
    renderizarCarrito(); // Volvemos a renderizar la tabla
  }
};

// Función para asignar eventos a los botones "Quitar"
const activarBotonesEliminar = () => {
  const botonesEliminar = document.querySelectorAll('.btn-remove');
  botonesEliminar.forEach((button) => {
    button.addEventListener('click', (e) => {
      const productoId = e.target.dataset.id; // Obtenemos el ID del producto
      eliminarProducto(productoId);
    });
  });
};

// Renderizamos el carrito al cargar la página
renderizarCarrito();

// Evento para el botón "Comprar"
btnComprar.addEventListener('click', () => {
  if (carrito.length === 0) {
    Swal.fire({
      icon: 'info',
      title: 'Carrito vacío',
      text: '¡No tienes productos en el carrito!',
      confirmButtonText: 'Aceptar',
    });
    return;
  }

  Swal.fire({
    icon: 'success',
    title: '¡Compra realizada!',
    text: 'Muchas gracias por tu compra. Tu pedido está en proceso.',
    confirmButtonText: 'Aceptar',
    background: '#f9f9f9', // Fondo claro
    color: '#333', // Texto oscuro
    confirmButtonColor: '#3085d6', // Color del botón
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/190/190411.png', // Ícono personalizado
    imageWidth: 80,
    imageHeight: 80,
  }).then(() => {
    localStorage.removeItem('carrito'); // Limpiamos el carrito
    carrito.length = 0; // Vaciamos el array
    renderizarCarrito(); // Actualizamos la tabla
  });
});



