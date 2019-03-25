// Buscar Elementos
const navbar = document.getElementById("navbar");
const promocion = document.getElementById("Promocion");
const producto = document.getElementById("Productos");
const acerca = document.getElementById("Acerca");
const contacto = document.getElementById("Contacto");
const boton_theme = document.getElementById("theme");

// Convertir REM a Pixel
const convertRemToPixels = (rem) => {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// Mostrar y Ocultar Barra Navegadora
window.onscroll = () => {
    if (document.body.scrollTop > (window.innerHeight-convertRemToPixels(3.5)) || 
        document.documentElement.scrollTop > (window.innerHeight-convertRemToPixels(3.5))) {
            navbar.classList.add('is-fixed-top');
            navbar.classList.add('has-background-coffee');
    } else {
            navbar.classList.remove('is-fixed-top');
            navbar.classList.remove('has-background-coffee');
    }
};

// Agregar Menu Desplegable a la Barra Navegadora, para Moviles
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
if ($navbarBurgers.length > 0) {

  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });
};

// Switch Claro - Oscuro
const changeLightDarkMode = () => {
    boton_theme.classList.toggle('is-outlined');

    const $themes = Array.prototype.slice.call(document.querySelectorAll('.themes'), 0);
    if ($themes.length > 0) {
        $themes.forEach( sections => {
            sections.classList.toggle('is-coffee');
            sections.classList.toggle('is-light');
        })
    }
};
