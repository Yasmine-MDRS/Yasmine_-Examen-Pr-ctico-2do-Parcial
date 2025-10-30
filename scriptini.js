// Obtener referencias
const loginForm = document.getElementById('loginForm');
const alerta = document.getElementById('alerta');
const botonLogin = document.querySelector('.btn-success');

// Evento click del botón
botonLogin.addEventListener('click', function(e) {
  e.preventDefault(); // evitar envío automático

  const correo = document.getElementById('loginCorreo').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!correo || !password) {
    alerta.textContent = "Por favor, completa todos los campos.";
    alerta.classList.remove('d-none'); // mostrar alerta
  } else {
    alerta.classList.add('d-none'); // ocultar alerta
    loginForm.submit(); // enviar formulario
    window.location.href = 'Start.html'; // redirige al login/registro
  }
});
