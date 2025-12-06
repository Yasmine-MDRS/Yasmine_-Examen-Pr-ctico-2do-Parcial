// Manejo del botón Cerrar Sesión (si existe)
const btnCerrar = document.querySelector('.btn-cerrar');
if (btnCerrar) {
  btnCerrar.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'newsession.html';
  });
}

// Marcar la pestaña de navegación activa según la página actual
function marcarNavActivo() {
  const path = window.location.pathname.split('/').pop(); // p.ej. 'maestros.html'
  const links = document.querySelectorAll('.navbar .nav-link');
  links.forEach(link => {
    // normalizar href (solo el nombre de archivo)
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefFile = href.split('/').pop();
    if (hrefFile === path || (hrefFile === 'Start.html' && (path === '' || path === 'index.html'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', marcarNavActivo);
