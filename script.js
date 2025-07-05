document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdown = document.querySelector('.dropdown');

    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que el enlace recargue la página
        dropdown.classList.toggle('show'); // Alterna la clase 'show'
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});