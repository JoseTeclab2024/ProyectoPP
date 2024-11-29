const agregarAlCarrito = (productoId) => {
  if (productoId > 0) {
    const productoEncontrado = productos.find((producto) => producto.id === parseInt(productoId));
    if (productoEncontrado) {
      carrito.push(productoEncontrado);
      almacenarCarrito();
    }
  }
};

const almacenarCarrito = () => {
  if (carrito.length > 0) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }
};

const recuperarCarrito = () => {
  return JSON.parse(localStorage.getItem('carrito')) || [];
};

const carrito = recuperarCarrito();
