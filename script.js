// Variables
let carrito = [];
let total = 0;

// Métodos
function agregarProducto(nombre, precio) {
  carrito.push({
    nombre: nombre,
    precio: precio
  });
  
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  
  actualizarCarrito();
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  const totalCarrito = document.getElementById('total');
  
  // Vaciar lista
  listaCarrito.innerHTML = '';
  
  // Actualizar lista
  carrito.forEach(function(producto) {
    const li = document.createElement('li');
    li.innerText = producto.nombre + ' - $' + producto.precio;
    listaCarrito.appendChild(li);
  });
  
  // Actualizar total
  total = carrito.reduce(function(acc, producto) {
    return acc + producto.precio;
  }, 0);
  
  totalCarrito.innerText = total.toFixed(2);
  
  // Almacenar en LocalStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarrito() {
  // Cargar carrito desde LocalStorage
  const carritoStorage = localStorage.getItem('carrito');
  
  if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
    actualizarCarrito();
  }
}

function detectarUsuario() {
  const userAgent = window.navigator.userAgent;
  
  if (userAgent.includes('Chrome')) {
    alert('Estás usando Google Chrome');
  } else {
    alert('No estás usando Google Chrome');
  }
}

// Cargar carrito desde LocalStorage
cargarCarrito();

// Detectar usuario
detectarUsuario();
