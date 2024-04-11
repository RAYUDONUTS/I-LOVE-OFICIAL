var lastScrollTop = 0;

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var menuButton = document.getElementById('menu');

    if (scrollPosition > lastScrollTop && scrollPosition > 80) {
        menuButton.style.top = '70px'; // Mover hacia abajo solo si el desplazamiento es hacia abajo y más de 80px
    } else {
        menuButton.style.top = '10px'; // Volver a la posición original si el desplazamiento es hacia arriba
    }
    lastScrollTop = scrollPosition;
});
