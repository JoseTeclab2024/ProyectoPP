// Función para agregar al carrito
function agregarAlCarrito(nombre, cantidad, precio) {
    // Crear un objeto de producto
    const producto = {
      nombre: nombre,
      cantidad: cantidad,
      precio: precio
    };
  
    // Verificar si ya hay productos en el carrito (localStorage)
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    // Buscar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.nombre === nombre);
  
    if (productoExistente) {
      // Si el producto ya existe, solo se actualiza la cantidad
      productoExistente.cantidad += cantidad;
    } else {
      // Si no existe, se agrega el nuevo producto
      carrito.push(producto);
    }
  
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
  
    // Mostrar mensaje de éxito
    alert(`${nombre} ha sido agregado al carrito.`);
  }
  
  // Función para ver los productos en el carrito (puedes usarla para depuración)
  function verCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    console.log(carrito);
  }
  