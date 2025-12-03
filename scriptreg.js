const registroForm = document.getElementById('registroForm');
const botonRegistro = document.querySelector('.btn-success');

// Crear alerta dinámica
let alerta = document.createElement('div');
alerta.className = 'alert alert-danger d-none';
alerta.setAttribute('role', 'alert');
registroForm.parentNode.insertBefore(alerta, registroForm);

// Evento click del botón (VERSIÓN CORREGIDA)
botonRegistro.addEventListener('click', function(e) {
    e.preventDefault();

    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmar = document.getElementById('confirmar').value.trim();

    // Validaciones
    if (!correo || !password || !confirmar) {
        alerta.textContent = "Por favor, completa todos los campos.";
        alerta.classList.remove('d-none');
        return;
    }

    if (password !== confirmar) {
        alerta.textContent = "Las contraseñas no coinciden.";
        alerta.classList.remove('d-none');
        return;
    }

    // Ocultar alerta
    alerta.classList.add('d-none');
    
    // Llamar a la función que guarda en la BD
    guardarAlumno(correo, password);
});

// Función para guardar alumno (CORREGIDA)
function guardarAlumno(usuario, contrasena) {
    const Ruta_foto_perfil = '/backend/img_profesores/'; // Aquí puedes añadir lógica para subir imágenes
    
    fetch('http://localhost:3000/guardar-datos-alumno', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ 
            usuario, 
            contrasena, 
            Ruta_foto_perfil 
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        if (data.mensaje) {
            alert('Registro exitoso!');
            window.location.href = 'Start.html';
        } else {
            alerta.textContent = data.error || 'Error desconocido';
            alerta.classList.remove('d-none');
        }
    })
    .catch(err => {
        console.error('Error:', err);
        alerta.textContent = 'Error de conexión con el servidor';
        alerta.classList.remove('d-none');
    });
}