const CalificacionForm = document.getElementById('CalificacionForm');
const botonEnviarMaestro = document.getElementById('botonEnviar');
const botonEnviarMateria = document.getElementById('botonEnviarMateria');
const botonEnviarMateriaMaestro = document.getElementById('botonEnviarMateriaMaestro');

let alerta = document.createElement('div');
alerta.className = 'alert alert-danger d-none';
alerta.setAttribute('role', 'alert');
registroForm.parentNode.insertBefore(alerta, registroForm);

botonEnviarMaestro.addEventListener('click', function(e) {
    e.preventDefault();
    const ID_Maestro = document.getElementById('tipo').value;
    const calificacion = document.getElementById('calificacion').value.trim();
    const ID_Calificacion = document.getElementById('id_calificacion').value.trim();   
    const ID_Materia = document.getElementById('tipo_materia').value;
});
// Validaciones
if (!ID_Maestro || !calificacion || !ID_Calificacion) {
    alerta.textContent = "Por favor, completa todos los campos.";
    alerta.classList.remove('d-none');
    return;
}
// Ocultar alerta
alerta.classList.add('d-none');
// Llamar a la función que guarda en la BD
function guardarCalificacionMaestro(ID_Maestro, calificacion, ID_Calificacion) {
    fetch('http://localhost:3000/guardar-formulario-Profesor', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ 
            Calificacion, 
            ID_Calificacion, 
            ID_Maestro 
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

botonEnviarMateria.addEventListener('click', function(e) {
    e.preventDefault();
    const ID_Materia = document.getElementById('tipo_materia').value;
    const calificacion = document.getElementById('calificacion_materia').value.trim();
    const ID_Calificacion = document.getElementById('id_calificacion_materia').value.trim();   
});
// Validaciones
if (!ID_Materia || !calificacion || !ID_Calificacion) { 
    alerta.textContent = "Por favor, completa todos los campos.";
    alerta.classList.remove('d-none');
    return;
}
// Ocultar alerta
alerta.classList.add('d-none');

// Llamar a la función que guarda en la BD
function guardarCalificacionMateria(ID_Materia, calificacion, ID_Calificacion) {
    fetch('http://localhost:3000/guardar-formulario-Materia', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Calificacion,
            ID_Calificacion,
            ID_Materia
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
botonEnviarMateriaMaestro.addEventListener('click', function(e) {
    e.preventDefault();
    const ID_Materia = document.getElementById('tipo_materia_maestro').value;
    const calificacion = document.getElementById('calificacion_materia_maestro').value.trim();
    const ID_Calificacion = document.getElementById('id_calificacion_materia_maestro').value.trim();
    const ID_Maestro = document.getElementById('tipo_maestro_materia').value;
    }
);

// Validaciones
if (!ID_Materia || !calificacion || !ID_Calificacion || !ID_Maestro) {
    alerta.textContent = "Por favor, completa todos los campos.";
    alerta.classList.remove('d-none');
    return;
}
// Ocultar alerta
alerta.classList.add('d-none');
// Llamar a la función que guarda en la BD
function guardarCalificacionMateriaMaestro(ID_Materia, calificacion, ID_Calificacion, ID_Maestro) {
    fetch('http://localhost:3000/guardar-formulario-MateriaMaestro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Calificacion,
            ID_Calificacion,
            ID_Materia,
            ID_Maestro
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


