
const registroForm = document.getElementById('registroForm');
const botonRegistro = document.querySelector('.btn-success');

// Crear alerta dinámica
let alerta = document.createElement('div');
alerta.className = 'alert alert-danger d-none';
alerta.setAttribute('role', 'alert');
registroForm.parentNode.insertBefore(alerta, registroForm); // colocar arriba del form

// Evento click del botón
botonRegistro.addEventListener('click', function(e) {
  e.preventDefault(); // evitar envío automático

  const correo = document.getElementById('correo').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmar = document.getElementById('confirmar').value.trim();

  if (!correo || !password || !confirmar) {
    alerta.textContent = "Por favor, completa todos los campos.";
    alerta.classList.remove('d-none');
  } else if (password !== confirmar) {
    alerta.textContent = "Las contraseñas no coinciden.";
    alerta.classList.remove('d-none');
  } else {
    alerta.classList.add('d-none'); // ocultar alerta si todo está correcto
    registroForm.submit(); // enviar formulario
     window.location.href = 'Start.html'; // redirige al login/registro
  }
});
