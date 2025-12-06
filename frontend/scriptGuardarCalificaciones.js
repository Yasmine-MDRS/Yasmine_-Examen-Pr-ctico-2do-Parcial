// scriptGuardarCalificaciones.js
// Versión limpiada: usa los endpoints existentes en el backend

const botonEnviarMaestro = document.getElementById('botonEnviar');
const botonEnviarMateria = document.getElementById('botonEnviarMateria');
const botonEnviarMateriaMaestro = document.getElementById('botonEnviarMateriaMaestro');

function safeFetchJson(url, body) {
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).then(res => res.json());
}

if (botonEnviarMaestro) {
    botonEnviarMaestro.addEventListener('click', function (e) {
        e.preventDefault();
        const ID_Maestro = document.getElementById('tipo')?.value;
        const calificacion = document.getElementById('calificacion')?.value?.trim();

        if (!ID_Maestro || !calificacion) return alert('Completa ID de maestro y calificación.');

        safeFetchJson('http://localhost:3000/guardar-formulario-maestro', { Calificacion: calificacion, ID_Maestro })
            .then(data => {
                if (data.error) return alert('❌ Error: ' + data.error);
                alert('✅ Calificación maestro guardada');
                window.location.href = 'maestros.html';
            })
            .catch(err => { console.error(err); alert('Error de conexión con el servidor'); });
    });
}

if (botonEnviarMateria) {
    botonEnviarMateria.addEventListener('click', function (e) {
        e.preventDefault();
        const ID_Materia = document.getElementById('tipo_materia')?.value;
        const calificacion = document.getElementById('calificacion_materia')?.value?.trim();

        if (!ID_Materia || !calificacion) return alert('Completa ID de materia y calificación.');

        safeFetchJson('http://localhost:3000/guardar-formulario-materia', { Calificacion: calificacion, ID_Materia })
            .then(data => {
                if (data.error) return alert('❌ Error: ' + data.error);
                alert('✅ Calificación materia guardada');
                window.location.href = 'materia.html';
            })
            .catch(err => { console.error(err); alert('Error de conexión con el servidor'); });
    });
}

if (botonEnviarMateriaMaestro) {
    botonEnviarMateriaMaestro.addEventListener('click', function (e) {
        e.preventDefault();
        const ID_MateriaMaestro = document.getElementById('tipo_materia_maestro')?.value;
        const calificacion = document.getElementById('calificacion_materia_maestro')?.value?.trim();

        if (!ID_MateriaMaestro || !calificacion) return alert('Completa ID materia-maestro y calificación.');

        safeFetchJson('http://localhost:3000/guardar-formulario-materiamestro', { Calificacion: calificacion, ID_MateriaMaestro })
            .then(data => {
                if (data.error) return alert('❌ Error: ' + data.error);
                alert('✅ Calificación materia-maestro guardada');
                window.location.href = 'materia-maestro.html';
            })
            .catch(err => { console.error(err); alert('Error de conexión con el servidor'); });
    });
}

