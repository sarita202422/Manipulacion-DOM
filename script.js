// script.js

// Caso 1: Suscripción
// Evento cuando se hace clic en el botón de suscripción
document.getElementById("boton").addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;

    // Muestra un mensaje personalizado
    document.getElementById("mensaje").innerText = `Gracias por suscribirte, ${nombre}`;

    // Cambia el título principal con el nombre de la persona
    document.getElementById("titulo").innerText = `¡Bienvenido(a) a nuestra tienda, ${nombre}!`;
});

// Caso 2: Cambio de productos
document.getElementById("btn1").addEventListener("click", () => {
    document.getElementById("img").src = "img/smartphone x1.png";
    document.getElementById("nombreProducto").innerText = "Smartphone X1";
    document.getElementById("desc").innerText = "El nuevo Smartphone X1 con cámara de 108MP y pantalla AMOLED.";
});

document.getElementById("btn2").addEventListener("click", () => {
    document.getElementById("img").src = "img/auriculares.png";
    document.getElementById("nombreProducto").innerText = "Auriculares bluetooth";
    document.getElementById("desc").innerText = "Sonido de alta calidad, perfecto para hacer deporte o escuchar música sin cables.";
});

document.getElementById("btn3").addEventListener("click", () => {
    document.getElementById("img").src = "img/laptop.png";
    document.getElementById("nombreProducto").innerText = "Laptop ultradelgada Z8";
    document.getElementById("desc").innerText = "La laptop ultradelgada Z8 con procesador Intel i7, ideal para trabajo y entretenimiento.";
});
