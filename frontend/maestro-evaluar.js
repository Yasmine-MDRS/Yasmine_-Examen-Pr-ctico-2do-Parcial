// Capturar parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const idMaestro = urlParams.get('id');
const nombreMaestro = urlParams.get('nombre');

console.log('DEBUG: ID Maestro recibido:', idMaestro);
console.log('DEBUG: Nombre Maestro:', nombreMaestro);

// Mostrar nombre del maestro
if (nombreMaestro) {
    document.getElementById('maestroNombre').textContent = decodeURIComponent(nombreMaestro);
}

let calificacionSeleccionada = 0;

// Manejo de estrellas
const starBtns = document.querySelectorAll('.star-btn');
starBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        calificacionSeleccionada = this.getAttribute('data-value');
        
        // Resaltar estrellas seleccionadas
        starBtns.forEach(b => {
            if (b.getAttribute('data-value') <= calificacionSeleccionada) {
                b.style.color = '#FFD700'; // Oro
            } else {
                b.style.color = '#ccc'; // Gris
            }
        });
        
        console.log('DEBUG: Calificación seleccionada:', calificacionSeleccionada);
    });

    // Efecto hover
    btn.addEventListener('mouseover', function() {
        const value = this.getAttribute('data-value');
        starBtns.forEach(b => {
            if (b.getAttribute('data-value') <= value) {
                b.style.color = '#FFA500'; // Naranja
            } else {
                b.style.color = '#ccc';
            }
        });
    });
});

// Reset hover
document.getElementById('starsContainer').addEventListener('mouseout', function() {
    starBtns.forEach(b => {
        if (b.getAttribute('data-value') <= calificacionSeleccionada) {
            b.style.color = '#FFD700';
        } else {
            b.style.color = '#ccc';
        }
    });
});

// Enviar calificación
document.getElementById('btnEnviar').addEventListener('click', function() {
    if (!calificacionSeleccionada) {
        alert('Por favor selecciona una calificación (estrellas)');
        return;
    }

    if (!idMaestro) {
        alert('Error: ID de maestro no encontrado');
        return;
    }

    console.log('DEBUG: Enviando calificación...', {
        ID_Maestro: idMaestro,
        Calificacion: calificacionSeleccionada
    });

    // Enviar datos al backend
    fetch('http://localhost:3000/guardar-calificacion-maestro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Calificacion: calificacionSeleccionada,
            ID_Maestro: idMaestro
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log('DEBUG: Respuesta del servidor:', data);
        if (data.error) {
            alert('❌ Error: ' + data.error);
        } else {
            alert('✅ ' + data.mensaje);
            window.location.href = 'maestros.html';
        }
    })
    .catch(err => {
        console.error('Error:', err);
        alert('Error de conexión con el servidor');
    });
});