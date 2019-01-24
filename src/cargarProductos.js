//import { productos } from '../messages/productos';
const SI = true;
const NO = false;

const productos= [
    {
        nombre: "Producto 1",
        descripcion: "Este es un producto de gran valor porque todos lo quieren.",
        imagen: "producto_1",
        precio: "1.5",
        promocion: SI,
        precio_promo: "0.5",
        desc_promo: "Ahorra y Gana."
    },
    {
        nombre: "Producto 2",
        descripcion: "Este es un producto de gran valor porque todos lo quieren.",
        imagen: "producto_2",
        precio: "151.5",
        promocion: NO,
        precio_promo: "0.5",
        desc_promo: "Ahorra y Gana."
    },
    {
        nombre: "Producto 2",
        descripcion: "Este es un producto de gran valor porque todos lo quieren.",
        imagen: "producto_2",
        precio: "151.5",
        promocion: NO,
        precio_promo: "0.5",
        desc_promo: "Ahorra y Gana."
    },
    ,
    {
        nombre: "Producto 2",
        descripcion: "Este es un producto de gran valor porque todos lo quieren.",
        imagen: "producto_2",
        precio: "151.5",
        promocion: NO,
        precio_promo: "0.5",
        desc_promo: "Ahorra y Gana."
    },
    ,
    {
        nombre: "Producto 2",
        descripcion: "Este es un producto de gran valor porque todos lo quieren.",
        imagen: "producto_2",
        precio: "151.5",
        promocion: NO,
        precio_promo: "0.5",
        desc_promo: "Ahorra y Gana."
    },
    {
        nombre: "Producto 1",
        descripcion: "Este es un producto de gran valor porque todos lo quieren.",
        imagen: "producto_1",
        precio: "1.5",
        promocion: SI,
        precio_promo: "0.5",
        desc_promo: "Ahorra y Gana."
    },
    {
        nombre: "Producto 1",
        descripcion: "Este es un producto de gran valor porque todos lo quieren.",
        imagen: "producto_1",
        precio: "1.5",
        promocion: SI,
        precio_promo: "0.5",
        desc_promo: "Ahorra y Gana."
    },
    
];

const m= document.getElementById("mostrar_prod");

productos.forEach( prod => {
    const node = document.createElement("DIV")
    node.innerHTML = `
    <p class="level-item has-text-centered">
        <div class="card box show has-background-info is-hidden">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="/assets/image/${prod.imagen}.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <p class="title is-4 has-text-dark">${prod.nombre}</p>                
                <div class="content">
                    ${prod.descripcion}
                </div>
                <div class="tags has-addons">
                    <span class="tag is-dark is-large">$</span>
                    <span class="tag is-light is-large">${prod.precio}</span>
                </div>
            </div>
        </div>
    </p>`

    m.appendChild(node); 
});

const $show = Array.prototype.slice.call(document.querySelectorAll('.show'), 0);

const primero = 0;
const ultimo = 4;
