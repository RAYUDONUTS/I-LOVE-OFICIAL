document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos del DOM
    const menuBtn = document.getElementById("menu");
    const closeBtn = document.getElementById("cerrar");
    const header = document.getElementById("home");



// Función para actualizar la visibilidad del elemento con el id "home"
function actualizarVisibilidadHome() {
    const homeElement = document.getElementById("home");
    // Verificar el ancho de la pantalla
    if (window.innerWidth <= 1025) {
        // Ocultar el elemento con id "home" si la pantalla es menor o igual a 1025px
        homeElement.style.display = "none";
        closeBtn.style.display="none";
        menuBtn.style.display="block";
    } else {
        // Mostrar el elemento con id "home" si la pantalla es mayor a 1025px
        homeElement.style.display = "block";
    }
}

// Llamar a la función al cargar la página
window.addEventListener("load", () => {
    actualizarVisibilidadHome();
});

// Llamar a la función al cambiar el tamaño de la ventana
window.addEventListener("resize", () => {
    actualizarVisibilidadHome();
});


    // Agregar un evento de clic al botón de menú
    menuBtn.addEventListener("click", () => {
        // Mostrar el botón de cerrar y el encabezado
        closeBtn.style.display = "block";
        header.style.display = "block";
        // Ocultar el botón de menú
        menuBtn.style.display = "none";
    });

    // Agregar un evento de clic al botón de cerrar
    closeBtn.addEventListener("click", () => {
        // Ocultar el botón de cerrar y el encabezado
        closeBtn.style.display = "none";
        header.style.display = "none";
        // Mostrar el botón de menú
        menuBtn.style.display = "block";
    });
});
