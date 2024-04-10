document.addEventListener("DOMContentLoaded", function() {
    let sliderIndex = 0;
    const slides = document.querySelectorAll('#slider-padre img');
    const regresarBtn = document.querySelector('.regresar');
    const siguienteBtn = document.querySelector('.siguiente');

    // Función para mostrar la imagen actual
    function mostrarSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    // Función para avanzar al siguiente slide
    function siguienteSlide() {
        sliderIndex++;
        if (sliderIndex >= slides.length) {
            sliderIndex = 0;
        }
        mostrarSlide(sliderIndex);
    }

    // Función para retroceder al slide anterior
    function retrocederSlide() {
        sliderIndex--;
        if (sliderIndex < 0) {
            sliderIndex = slides.length - 1;
        }
        mostrarSlide(sliderIndex);
    }

    // Event listener para el botón "siguiente"
    siguienteBtn.addEventListener('click', () => {
        siguienteSlide();
    });

    // Event listener para el botón "regresar"
    regresarBtn.addEventListener('click', () => {
        retrocederSlide();
    });

    // Cambiar de slide automáticamente cada 4 segundos
    setInterval(siguienteSlide, 4000);

    // Mostrar el primer slide al cargar la página
    mostrarSlide(sliderIndex);
});
