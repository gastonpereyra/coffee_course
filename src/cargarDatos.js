// Armar la página desde el JSON
fetch('prueba.json')
  .then(response => response.json())
  .then(data => {
    // Barra de Navegación
    const $barra = document.getElementById("barra_links");
    data.secciones.forEach(item => {
      const $item = document.createElement('span');
      $item.classList.add(['navbar-item']);
      $item.innerHTML = `
      <a class="button is-coffee is-outlined is-inverted is-rounded is-size-5"  href="#${item.link}">
        <span class="icon">
          <i class="${item.icono}"></i>
        </span> 
        <span>${item.titulo}</span>
      </a>
      `;
      $barra.appendChild($item);
    });

    
  });