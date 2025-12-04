// materia-maestro-evaluar.js (actualizado)
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-btn');
    let calificacionSeleccionada = 0;
    const btnEnviar = document.getElementById('btnEnviar');
    const mmNombre = document.getElementById('mmNombre');
    
    // Obtener parámetros de la URL (CORREGIDO)
    const urlParams = new URLSearchParams(window.location.search);
    const idMateria = urlParams.get('idMateria');      // ← CAMBIADO
    const idMaestro = urlParams.get('idMaestro');      // ← CAMBIADO
    const nombre = urlParams.get('nombre') || 'Materia - Maestro';
    
    // Verificar que tenemos los datos necesarios
    if (!idMateria || !idMaestro) {
        mmNombre.textContent = 'Error: No se especificó materia o maestro';
        btnEnviar.disabled = true;
        console.error('Parámetros faltantes:', { idMateria, idMaestro, urlParams: window.location.search });
        alert('Error: Faltan datos. Regresa a la lista y selecciona una materia-maestro.');
        return;
    }
    
    // Actualizar la interfaz
    mmNombre.textContent = nombre;
    document.getElementById('idMateria').value = idMateria;
    document.getElementById('idMaestro').value = idMaestro;
    
    // Manejo de estrellas
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const valor = parseInt(this.dataset.value);
            calificacionSeleccionada = valor;
            
            // Actualizar apariencia de estrellas
            stars.forEach((s, index) => {
                if (index < valor) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
        });
    });
    
    // Enviar calificación
    btnEnviar.addEventListener('click', function() {
        if (!calificacionSeleccionada) {
            alert('Por favor selecciona una calificación (1-5 estrellas)');
            return;
        }
        
        const datos = {
            Calificacion: parseInt(calificacionSeleccionada),
            ID_Materia: parseInt(idMateria),
            ID_Maestro: parseInt(idMaestro)
        };
        
        console.log('Enviando datos:', datos);
        
        fetch('http://localhost:3000/guardar-calificacion-materiamaestro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('Error: ' + data.error);
            } else {
                alert('✅ Calificación enviada correctamente');
                // Opcional: redirigir o limpiar
                setTimeout(() => {
                    window.location.href = 'materia-maestro.html';
                }, 1500);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error de conexión. Verifica que el servidor esté ejecutándose.');
        });
    });
});