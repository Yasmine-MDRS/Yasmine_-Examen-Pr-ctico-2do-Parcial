fetch('http://localhost:3000/materiamaestro')
  .then(res => res.json())
  .then(datos => {

    const contenedor = document.getElementById('contenedorMateriaMaestro');
    contenedor.innerHTML = "";

    datos.forEach(item => {

      const card = document.createElement('div');
      card.classList.add('card-materia-maestro');

      card.innerHTML = `
        <img src="materiamaestro.jpg" alt="Materia">
        <h6>${item.Nombre_Materia}</h6>
        <p>${item.Nombre} ${item.Apellido}</p>
      `;

      // ✅ Click para ir al detalle
      card.addEventListener('click', () => {
        window.location.href = `detalle-materiamaestro.html?id=${item.ID_MateriaMaestro}`;
      });

      contenedor.appendChild(card);
    });

  })
  .catch(error => console.error('Error:', error));
