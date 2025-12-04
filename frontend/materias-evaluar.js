// Capturar parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const idMateria = urlParams.get('id');
const nombreMateria = urlParams.get('nombre');

// Mostrar nombre de la materia
if (nombreMateria) {
  document.getElementById('materiaNombre').textContent = decodeURIComponent(nombreMateria);
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

  if (!idMateria) {
    alert('Error: ID de materia no encontrado');
    return;
  }

  // Enviar datos al backend
  fetch('http://localhost:3000/guardar-formulario-Materia', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      Calificacion: calificacionSeleccionada,
      ID_Calificacion: 1, // Puedes ajustar si tienes otro valor
      ID_Materia: idMateria
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      alert('❌ Error: ' + data.error);
    } else {
      alert('✅ Calificación guardada correctamente');
      window.location.href = 'materias.html';
    }
  })
  .catch(err => {
    console.error('Error:', err);
    alert('Error de conexión con el servidor');
  });
});
