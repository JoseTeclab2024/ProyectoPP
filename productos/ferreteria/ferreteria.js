const productos = [];
const URL = 'ferreteria.json';

const container = document.querySelector('div.container');

const retornarCardHTML = (producto) => {
  return `
      <div class="card">
        <div class="card-image">
          <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        <div class="card-body">
          <div class="card-name">${producto.nombre}</div>
          <div class="card-price">${producto.precio}</div>
          <div class="card-button d-grid gap-2">
            <button class="btn btn-lg btn-primary button-add" id="${producto.id}" title="Clic para agregar al carrito">Comprar</button>
          </div>
        </div>
      </div>`;
};

const activarClickEnBotones = () => {
  const botonesAgregar = document.querySelectorAll('button.button-add');
  botonesAgregar.forEach((button) => {
    button.addEventListener('click', (e) => {
      agregarAlCarrito(e.target.id);
    });
  });
};

const cargarProductos = (array) => {
  if (array.length > 0) {
    array.forEach((producto) => {
      container.innerHTML += retornarCardHTML(producto);
    });
    activarClickEnBotones();
  }
};

const obtenerProducto = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => productos.push(...data))
    .then(() => cargarProductos(productos));
};

obtenerProducto();
