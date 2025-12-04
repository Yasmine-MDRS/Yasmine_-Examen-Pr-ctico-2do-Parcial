// Selecciona el botón de cerrar sesión
const btnCerrar = document.querySelector('.btn-cerrar');

// Agrega el evento click para redirigir
btnCerrar.addEventListener('click', function(e) {
  e.preventDefault(); // evita cualquier acción por defecto
  window.location.href = 'newsession.html'; // redirige al login/registro
});
