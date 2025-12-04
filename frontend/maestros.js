fetch('http://localhost:3000/maestros')
  .then(res => res.json())
  .then(maestros => {

    const contenedor = document.getElementById('contenedorMaestros');
    contenedor.innerHTML = "";

    maestros.forEach(maestro => {

      const card = document.createElement('div');
      card.classList.add('card-maestro');

      card.innerHTML = `
        <img src="maestro1.jpg" alt="Maestro">
        <p>${maestro.Nombre} ${maestro.Apellido}</p>
      `;

      // 👉 EVENTO CLICK PARA IR A EVALUAR AL MAESTRO
      card.addEventListener('click', () => {
        window.location.href = `maestro-evaluar.html?id=${maestro.ID_Maestro}&nombre=${encodeURIComponent(maestro.Nombre + ' ' + maestro.Apellido)}`;
      });

      contenedor.appendChild(card);
    });

  })
  .catch(error => console.error('Error:', error));
