fetch('http://localhost:3000/materia')
  .then(res => res.json())
  .then(materias => {

    const contenedor = document.getElementById('contenedorMaterias');
    contenedor.innerHTML = "";

    materias.forEach(materia => {

      const card = document.createElement('div');
      card.classList.add('card-materia');

      card.innerHTML = `
        <img src="materia.jpg" alt="Materia">
        <p>${materia.Nombre_Materia}</p>
      `;

      // ✅ Click para ir al detalle
      card.addEventListener('click', () => {
        window.location.href = `detalle-materia.html?id=${materia.ID_Materia}`;
      });

      contenedor.appendChild(card);
    });

  })
  .catch(error => console.error('Error:', error));
