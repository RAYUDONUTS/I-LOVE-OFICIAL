document.addEventListener("DOMContentLoaded", function() {
    const linkIniciarSesion = document.getElementById("link-iniciar-sesion");
    const registroLogin = document.querySelector(".registro-login");
    const loginUno = document.getElementById("login-uno");
    
    linkIniciarSesion.addEventListener("click", function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        
        // Oculta el formulario de registro
        registroLogin.style.display = "none";
        
        // Muestra el formulario de inicio de sesión y ajusta su posición
        loginUno.style.display = "block";
        
    });
});

const chat =document.querySelector(".chat-container");
const cerrarbot =document.querySelector(".cerrar-bot");

cerrarbot.addEventListener("click", () => {
    chat.style.display = "none";
});