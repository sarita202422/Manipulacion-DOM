// script.js

// ----------------------
// Caso 1: Suscripción
// ----------------------

// Escucha el evento 'click' en el botón con ID 'boton'
document.getElementById("boton").addEventListener("click", () => {
    // Obtiene el valor del campo de texto con ID 'nombre'
    let nombre = document.getElementById("nombre").value;

    // Muestra un mensaje personalizado debajo del formulario
    document.getElementById("mensaje").innerText = `Gracias por suscribirte, ${nombre}`;

    // Cambia el texto del título principal con un saludo personalizado
    document.getElementById("titulo").innerText = `¡Bienvenido(a) a nuestra tienda, ${nombre}!`;
});

// ----------------------
// Caso 2: Cambio de productos
// ----------------------

// Evento para mostrar el producto 1: Smartphone X1
document.getElementById("btn1").addEventListener("click", () => {
    // Cambia la imagen mostrada por la del Smartphone X1
    document.getElementById("img").src = "img/smartphone x1.png";

    // Cambia el nombre del producto
    document.getElementById("nombreProducto").innerText = "Smartphone X1";

    // Cambia la descripción del producto
    document.getElementById("desc").innerText = "El nuevo Smartphone X1 con cámara de 108MP y pantalla AMOLED.";
});

// Evento para mostrar el producto 2: Auriculares Bluetooth
document.getElementById("btn2").addEventListener("click", () => {
    // Cambia la imagen por los auriculares
    document.getElementById("img").src = "img/auriculares.png";

    // Cambia el nombre del producto
    document.getElementById("nombreProducto").innerText = "Auriculares bluetooth";

    // Cambia la descripción del producto
    document.getElementById("desc").innerText = "Sonido de alta calidad, perfecto para hacer deporte o escuchar música sin cables.";
});

// Evento para mostrar el producto 3: Laptop ultradelgada Z8
document.getElementById("btn3").addEventListener("click", () => {
    // Cambia la imagen por la de la laptop
    document.getElementById("img").src = "img/laptop.png";

    // Cambia el nombre del producto
    document.getElementById("nombreProducto").innerText = "Laptop ultradelgada Z8";

    // Cambia la descripción del producto
    document.getElementById("desc").innerText = "La laptop ultradelgada Z8 con procesador Intel i7, ideal para trabajo y entretenimiento.";
});
