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
    document.getElementById("img").src = "producto1.jpg";
    document.getElementById("nombreProducto").innerText = "Smartphone x1";
    document.getElementById("desc").innerText = "Descripción del producto 1";
});

document.getElementById("btn2").addEventListener("click", () => {
    document.getElementById("img").src = "producto2.jpg";
    document.getElementById("nombreProducto").innerText = "Auriculares bluetooth";
    document.getElementById("desc").innerText = "Descripción del producto 2";
});

document.getElementById("btn3").addEventListener("click", () => {
    document.getElementById("img").src = "producto3.jpg";
    document.getElementById("nombreProducto").innerText = "Producto 3";
    document.getElementById("desc").innerText = "Descripción del producto 3";
});
