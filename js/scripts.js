// Ejemplo: Efecto de animación al hacer clic en los enlaces
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        alert('Vas a ser redirigido a otra página');
    });
});
