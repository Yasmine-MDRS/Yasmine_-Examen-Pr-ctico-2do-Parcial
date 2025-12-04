fetch('http://localhost:3000/materiamaestro')
  .then(res => res.json())
  .then(datos => {
    console.log('DEBUG: datos recibidos de /materiamaestro:', datos);

    const contenedor = document.getElementById('contenedorMateriaMaestro');
    contenedor.innerHTML = "";

    datos.forEach(item => {
      console.log('DEBUG: item IDs:', { ID_Materia: item.ID_Materia, ID_Maestro: item.ID_Maestro });

      const card = document.createElement('div');
      card.classList.add('card-materia-maestro');

      card.innerHTML = `
        <img src="materiamaestro.jpg" alt="Materia">
        <h6>${item.Nombre_Materia}</h6>
        <p>${item.Nombre} ${item.Apellido}</p>
      `;

      // ✅ Click para ir a evaluar materia-maestro
      card.addEventListener('click', () => {
        window.location.href = `materia-maestro-evaluar.html?idMateria=${item.ID_Materia}&idMaestro=${item.ID_Maestro}&nombre=${encodeURIComponent(item.Nombre_Materia + ' - ' + item.Nombre + ' ' + item.Apellido)}`;
      });

      contenedor.appendChild(card);
    });

  })
  .catch(error => console.error('Error:', error));
