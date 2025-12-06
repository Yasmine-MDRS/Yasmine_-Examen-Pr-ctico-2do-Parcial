const loginForm = document.getElementById('loginForm');
const alerta = document.getElementById('alerta');
const botonLogin = document.querySelector('.btn-success');

botonLogin.addEventListener('click', function(e) {
  e.preventDefault();

  const correo = document.getElementById('loginCorreo').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!correo || !password) {
    alerta.textContent = "Por favor, completa todos los campos.";
    alerta.classList.remove('d-none');
    return;
  }

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario: correo, contrasena: password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      alerta.textContent = data.error;
      alerta.classList.remove('d-none');
    } else {
      alert('✅ Login correcto');
      window.location.href = 'Start.html';
    }
  })
  .catch(err => {
    console.error('Error de conexión:', err);
    alerta.textContent = 'Error de conexión con el servidor. Asegúrate de que está corriendo en puerto 3000.';
    alerta.classList.remove('d-none');
  });
});
