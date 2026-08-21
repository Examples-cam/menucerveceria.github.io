/* =========================================================
   MIRADOR DE LAS CAMELIAS
   CERVECERÍA
   ARCHIVO: cerveceria.js
   ========================================================= */


/* =========================================================
   1. DATOS DEL MENÚ
   ========================================================= */

const menuItems = [

  /* =======================================================
     CERVEZAS
     ======================================================= */

  {
    nombre: "Corona 330 ml",
    descripcion: "",
    precio: 15600,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105003/corona330_lmquee.jpg"
  },

  {
    nombre: "Stella artois",
    descripcion: "",
    precio: 15600,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105017/stella_rxlgep.jpg"
  },

  {
    nombre: "Tres cordilleras negra",
    descripcion: "",
    precio: 15600,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105017/trescornegra_bx7wwj.jpg"
  },

  {
    nombre: "Tres cordilleras rosada",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105018/trescorrosada_th0a7e.jpg"
  },

  {
    nombre: "Tres cordilleras roja",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105018/trescorroja_fd5rgg.jpg"
  },

  {
    nombre: "Tres cordilleras verde",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105018/trescorverde_ngobt6.jpg"
  },

  {
    nombre: "Heineken",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105003/heineken_l2ant3.jpg"
  },

  {
    nombre: "Budweiser lata",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104990/budweiser_oro8ma.jpg"
  },

  {
    nombre: "Aguila original 330 ml",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104990/aguilaoriginal_rkmqtf.jpg"
  },

  {
    nombre: "Aguila light 330 ml",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104990/aguilalight_cfxxhs.jpg"
  },

  {
    nombre: "Poker 330ml",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105011/poker330_kvaifl.jpg"
  },

  {
    nombre: "Sol 330ml",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105012/sol330_finfhj.jpg"
  },

  {
    nombre: "Reeds",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105011/redds_ukq0qh.jpg"
  },

  {
    nombre: "Club colombia",
    descripcion: "",
    precio: 9600,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104991/clubcolombia_en6xny.jpg"
  },

  {
    nombre: "Cola y pola",
    descripcion: "",
    precio: 8600,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104991/colapola_sutuea.jpg"
  },

  {
    nombre: "Andina 330ml",
    descripcion: "",
    precio: 8000,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104990/andina330_eka6mn.jpg"
  },

  {
    nombre: "Jarra refajo",
    descripcion: "",
    precio: 22500,
    categoria: "cervezas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768106512/jarrarefajo_cdu9cq.jpg"
  },


  /* =======================================================
     MICHELADOS
     ======================================================= */

  {
    nombre: "Michelado tradicional",
    descripcion: "",
    precio: 4200,
    categoria: "michelados",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105018/vasomichelado_eynoic.jpg"
  },

  {
    nombre: "Michelado - Frutos rojos",
    descripcion: "",
    precio: 10000,
    categoria: "michelados",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105010/micheladorosa_frfa5f.jpg"
  },

  {
    nombre: "Michelado - Mango",
    descripcion: "",
    precio: 10000,
    categoria: "michelados",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105010/micheladomango_n1lgpw.jpg"
  },


  /* =======================================================
     LICORES - BAR
     ======================================================= */

  {
    nombre: "Botella - antioqueño azul",
    descripcion: "",
    precio: 130900,
    categoria: "licores - bar",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112066/botellaaguardienteazul_ebhbg3.jpg"
  },

  {
    nombre: "Media - antioqueño azul",
    descripcion: "",
    precio: 71400,
    categoria: "licores - bar",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112109/medioaguartienteazul_zy0lxb.jpg"
  },

  {
    nombre: "Botella - antioqueño verde",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112066/botellaaguardienteverde_pyyjzw.jpg"
  },

  {
    nombre: "Media - antioqueño verde",
    descripcion: "",
    precio: 65000,
    categoria: "licores - bar",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112106/medioaguardienteverde_lpu4qg.jpg"
  },

  {
    nombre: "Botella amarillo - Real antioqueño",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112066/botellaamarilloreal_za73gy.jpg"
  },

  {
    nombre: "Botella - Ron medellin 3 años",
    descripcion: "",
    precio: 130900,
    categoria: "licores - bar",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112072/botellaronmedellin3_y7gryb.jpg"
  },

  {
    nombre: "Media - Ron medellin 3 años",
    descripcion: "",
    precio: 71400,
    categoria: "licores - bar",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112110/medioronmedellin3_d1n3lz.jpg"
  },

  {
    nombre: "Botella - Ron rosado",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112072/botellaronrosado_qmayqm.jpg"
  },

  {
    nombre: "Botella - Ron medellin",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112071/botellaron_luneuk.jpg"
  },

  {
    nombre: "Media - Ron medellin",
    descripcion: "",
    precio: 65000,
    categoria: "licores - bar",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112109/medioron_y1dm6o.jpg"
  },

  {
    nombre: "Botella - Ron caldas",
    descripcion: "",
    precio: 130900,
    categoria: "licores - bar",
    imagen: ""
  },

  {
    nombre: "Media - Ron caldas",
    descripcion: "",
    precio: 71400,
    categoria: "licores - bar",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112109/medioroncaldas_g91erw.jpg"
  },

  {
    nombre: "Media - Brandy",
    descripcion: "",
    precio: 84000,
    categoria: "licores - bar",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112109/mediobrandy_whmlzl.jpg"
  },

  {
    nombre: "Botella - Cristal XS < S < L",
    descripcion: "",
    precio: 110000,
    categoria: "licores - bar",
    imagen: ""
  },


  /* =======================================================
     BEBIDAS GASEOSAS
     ======================================================= */

  {
    nombre: "Hit 250ml",
    descripcion: "",
    precio: 4200,
    categoria: "bebidas gaseosas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768166574/hit250_u193o1.jpg"
  },

  {
    nombre: "Hit grande",
    descripcion: "",
    precio: 4200,
    categoria: "bebidas gaseosas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112099/hitgrande_z3gbg6.jpg"
  },

  {
    nombre: "Gaseosas 250ml",
    descripcion: "",
    precio: 4200,
    categoria: "bebidas gaseosas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112095/gaseosa250_qoi1sj.jpg"
  },

  {
    nombre: "Gaseosas 350ml",
    descripcion: "",
    precio: 5400,
    categoria: "bebidas gaseosas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112095/gaseosa350_djmt1l.jpg"
  },

  {
    nombre: "Gaseosas - Postobon 1.5L",
    descripcion: "",
    precio: 11400,
    categoria: "bebidas gaseosas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112091/gaseosa1_5_wh1eht.jpg"
  },

  {
    nombre: "Gaseosas - Postobon 2.5L",
    descripcion: "",
    precio: 16800,
    categoria: "bebidas gaseosas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112092/gaseosa2_5_h6hk52.jpg"
  },

  {
    nombre: "Pony malta 330ml",
    descripcion: "",
    precio: 5400,
    categoria: "bebidas gaseosas",
    imagen: ""
  },

  {
    nombre: "Pony malta 1L",
    descripcion: "",
    precio: 10500,
    categoria: "bebidas gaseosas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112119/ponylitro_z8q668.jpg"
  },

  {
    nombre: "Coca cola 350ml",
    descripcion: "",
    precio: 5400,
    categoria: "bebidas gaseosas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112077/cocacola350_flbilx.jpg"
  },

  {
    nombre: "Coca cola 400ml",
    descripcion: "",
    precio: 6600,
    categoria: "bebidas gaseosas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112080/cocacola400_xweuxr.jpg"
  },

  {
    nombre: "Coca cola 600ml",
    descripcion: "",
    precio: 7800,
    categoria: "bebidas gaseosas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112080/cocacola600_qnuibo.jpg"
  },

  {
    nombre: "Coca cola 1.5L",
    descripcion: "",
    precio: 13200,
    categoria: "bebidas gaseosas",
    imagen: ""
  },

  {
    nombre: "Coca cola 2.25L",
    descripcion: "",
    precio: 19200,
    categoria: "bebidas gaseosas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112076/cocacola2_25_ibztjd.jpg"
  },

  {
    nombre: "H2O",
    descripcion: "",
    precio: 6500,
    categoria: "bebidas gaseosas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112095/h2o_hqhuhh.jpg"
  },

  {
    nombre: "Gatorade",
    descripcion: "",
    precio: 7800,
    categoria: "bebidas gaseosas",
    imagen:
      "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112095/gatoradecerveceria_mv3h4p.jpg"
  },

  {
    nombre: "Ginger Pequeña",
    descripcion: "",
    precio: 5400,
    categoria: "bebidas gaseosas",
    imagen: ""
  },

  {
    nombre: "Speed max",
    descripcion: "",
    precio: 4750,
    categoria: "bebidas gaseosas",
    imagen: ""
  },

  {
    nombre: "Jugo del valle",
    descripcion: "",
    precio: 6000,
    categoria: "bebidas gaseosas",
    imagen: ""
  }

];


/* =========================================================
   2. CONFIGURACIÓN
   ========================================================= */

/*
   Cantidad de productos que se muestran inicialmente
   en cada categoría.

   Al pulsar VER TODAS se muestran todos.
*/

const INITIAL_VISIBLE = 4;


/*
   Estado de cada categoría.
*/

const expandedCategories = {
  cervezas: false,
  michelados: false,
  "licores - bar": false,
  "bebidas gaseosas": false
};


/* =========================================================
   3. REFERENCIAS DOM
   ========================================================= */

const containers = {

  cervezas:
    document.getElementById("cervezasContainer"),

  michelados:
    document.getElementById("micheladosContainer"),

  "licores - bar":
    document.getElementById("licoresContainer"),

  "bebidas gaseosas":
    document.getElementById("gaseosasContainer")

};


const viewButtons = {

  cervezas:
    document.getElementById("viewCervezas"),

  michelados:
    document.getElementById("viewMichelados"),

  "licores - bar":
    document.getElementById("viewLicores"),

  "bebidas gaseosas":
    document.getElementById("viewGaseosas")

};


/* =========================================================
   4. FORMATEAR PRECIOS
   ========================================================= */

function formatPrice(price) {

  return new Intl.NumberFormat(
    "es-CO",
    {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0
    }
  ).format(price);

}


/* =========================================================
   5. CREAR TARJETA DE PRODUCTO
   ========================================================= */

function createProductCard(item, index) {

  const card =
    document.createElement("article");


  card.className =
    "menu-card card-reveal";


  /*
     Pequeño retraso para que las tarjetas
     entren progresivamente.
  */

  card.style.animationDelay =
    `${Math.min(index * 0.055, 0.4)}s`;


  /* =======================================================
     IMAGEN
     ======================================================= */

  const imageWrap =
    document.createElement("div");

  imageWrap.className =
    "menu-card-image";


  if (item.imagen) {

    const image =
      document.createElement("img");

    image.src =
      item.imagen;

    image.alt =
      item.nombre;

    image.loading =
      index > 3
        ? "lazy"
        : "eager";


    /*
       Si Cloudinary o la URL falla,
       eliminamos la imagen y dejamos
       un placeholder elegante.
    */

    image.onerror = function () {

      this.remove();

      imageWrap.innerHTML =
        `<div class="menu-card-placeholder">
          ${item.nombre}
        </div>`;

    };


    imageWrap.appendChild(image);

  } else {

    imageWrap.innerHTML =
      `<div class="menu-card-placeholder">
        ${item.nombre}
      </div>`;

  }


  /* =======================================================
     CONTENIDO
     ======================================================= */

  const content =
    document.createElement("div");

  content.className =
    "menu-card-content";


  const category =
    document.createElement("div");

  category.className =
    "menu-card-category";

  category.textContent =
    item.categoria;


  const title =
    document.createElement("h3");

  title.textContent =
    item.nombre;


  content.appendChild(category);

  content.appendChild(title);


  if (item.descripcion) {

    const description =
      document.createElement("p");

    description.textContent =
      item.descripcion;

    content.appendChild(description);

  }


  const price =
    document.createElement("div");

  price.className =
    "menu-card-price";

  price.textContent =
    formatPrice(item.precio);


  content.appendChild(price);


  card.appendChild(imageWrap);

  card.appendChild(content);


  /* =======================================================
     MODAL
     ======================================================= */

  card.addEventListener(
    "click",
    () => {

      openProductModal(item);

    }
  );


  return card;

}


/* =========================================================
   6. OBTENER PRODUCTOS POR CATEGORÍA
   ========================================================= */

function getCategoryProducts(category) {

  return menuItems.filter(
    item =>
      item.categoria === category
  );

}


/* =========================================================
   7. RENDERIZAR UNA CATEGORÍA
   ========================================================= */

function renderCategory(category) {

  const container =
    containers[category];


  if (!container) {

    console.warn(
      `No existe contenedor para: ${category}`
    );

    return;

  }


  const products =
    getCategoryProducts(category);


  container.innerHTML = "";


  if (!products.length) {

    container.innerHTML =
      `<p class="empty-menu">
        No hay productos disponibles.
      </p>`;

    updateViewButton(
      category,
      0
    );

    return;

  }


  const isExpanded =
    expandedCategories[category];


  const visibleProducts =
    isExpanded
      ? products
      : products.slice(
          0,
          INITIAL_VISIBLE
        );


  visibleProducts.forEach(
    (item, index) => {

      container.appendChild(
        createProductCard(
          item,
          index
        )
      );

    }
  );


  updateViewButton(
    category,
    products.length
  );

}


/* =========================================================
   8. ACTUALIZAR BOTÓN "VER TODAS"
   ========================================================= */

function updateViewButton(
  category,
  totalProducts
) {

  const button =
    viewButtons[category];


  if (!button) {
    return;
  }


  /*
     Si hay 4 o menos productos,
     no necesitamos mostrar VER TODAS.
  */

  if (
    totalProducts <=
    INITIAL_VISIBLE
  ) {

    button.style.display =
      "none";

    return;

  }


  button.style.display =
    "inline-flex";


  const expanded =
    expandedCategories[category];


  button.innerHTML =
    expanded

      ? `VER MENOS <span>↑</span>`

      : `VER TODAS <span>→</span>`;

}


/* =========================================================
   9. CONFIGURAR BOTONES VER TODAS
   ========================================================= */

function setupViewButtons() {

  Object.entries(
    viewButtons
  ).forEach(
    ([category, button]) => {

      if (!button) {
        return;
      }


      button.addEventListener(
        "click",
        () => {

          expandedCategories[category] =
            !expandedCategories[category];


          renderCategory(
            category
          );


          /*
             Cuando se cierra una categoría,
             regresamos suavemente al encabezado.
          */

          if (
            !expandedCategories[category]
          ) {

            const section =
              document.getElementById(
                category === "licores - bar"
                  ? "licores"
                  : category
              );


            if (section) {

              const header =
                section.querySelector(
                  ".section-heading"
                );


              if (header) {

                header.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });

              }

            }

          }

        }
      );

    }
  );

}


/* =========================================================
   10. MODAL
   ========================================================= */

const modal =
  document.getElementById(
    "productModal"
  );


const modalImage =
  document.getElementById(
    "modalImage"
  );


const modalTitle =
  document.getElementById(
    "modalTitle"
  );


const modalDescription =
  document.getElementById(
    "modalDescription"
  );


const modalPrice =
  document.getElementById(
    "modalPrice"
  );


function openProductModal(item) {

  if (!modal) {
    return;
  }


  modalTitle.textContent =
    item.nombre;


  modalDescription.textContent =
    item.descripcion ||
    "Una selección de la carta de Mirador de las Camelias.";


  modalPrice.textContent =
    formatPrice(item.precio);


  if (item.imagen) {

    modalImage.src =
      item.imagen;

    modalImage.alt =
      item.nombre;

    modalImage.style.display =
      "block";

  } else {

    modalImage.removeAttribute(
      "src"
    );

    modalImage.alt =
      "";

    modalImage.style.display =
      "none";

  }


  modal.classList.add(
    "is-open"
  );


  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );

}


function closeProductModal() {

  if (!modal) {
    return;
  }


  modal.classList.remove(
    "is-open"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   11. CERRAR MODAL
   ========================================================= */

document.querySelectorAll(
  "[data-close-modal]"
).forEach(
  element => {

    element.addEventListener(
      "click",
      closeProductModal
    );

  }
);


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeProductModal();

    }

  }
);


/* =========================================================
   12. NAVEGACIÓN MÓVIL
   ========================================================= */

const menuToggle =
  document.getElementById(
    "menuToggle"
  );


const mobileNav =
  document.getElementById(
    "mobileNav"
  );


function closeMobileMenu() {

  if (!menuToggle || !mobileNav) {
    return;
  }


  menuToggle.classList.remove(
    "is-open"
  );


  menuToggle.setAttribute(
    "aria-expanded",
    "false"
  );


  mobileNav.classList.remove(
    "is-open"
  );


  mobileNav.setAttribute(
    "aria-hidden",
    "true"
  );

}


if (
  menuToggle &&
  mobileNav
) {

  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        menuToggle.classList.toggle(
          "is-open"
        );


      mobileNav.classList.toggle(
        "is-open",
        isOpen
      );


      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      mobileNav.setAttribute(
        "aria-hidden",
        String(!isOpen)
      );

    }
  );


  mobileNav
    .querySelectorAll("a")
    .forEach(
      link => {

        link.addEventListener(
          "click",
          closeMobileMenu
        );

      }
    );

}


/* =========================================================
   13. FEATURE BUTTON
   ========================================================= */

const featureButton =
  document.getElementById(
    "featureButton"
  );


if (featureButton) {

  featureButton.addEventListener(
    "click",
    () => {

      const section =
        document.getElementById(
          "michelados"
        );


      if (section) {

        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    }
  );

}


/* =========================================================
   14. CATEGORÍAS
   ========================================================= */

const categoryLinks =
  document.querySelectorAll(
    ".category-chip"
  );


categoryLinks.forEach(
  link => {

    link.addEventListener(
      "click",
      () => {

        categoryLinks.forEach(
          item =>
            item.classList.remove(
              "is-active"
            )
        );


        link.classList.add(
          "is-active"
        );

      }
    );

  }
);


/* =========================================================
   15. REVEAL ANIMATIONS
   ========================================================= */

function setupRevealAnimations() {

  const elements =
    document.querySelectorAll(
      ".reveal"
    );


  /*
     Si el navegador no soporta
     IntersectionObserver, mostramos
     todo inmediatamente.
  */

  if (
    !("IntersectionObserver" in window)
  ) {

    elements.forEach(
      element =>
        element.classList.add(
          "is-visible"
        )
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "is-visible"
              );


              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );


  elements.forEach(
    element =>
      observer.observe(
        element
      )
  );

}


/* =========================================================
   16. BACK TO TOP
   ========================================================= */

const backToTop =
  document.getElementById(
    "backToTop"
  );


function updateBackToTop() {

  if (!backToTop) {
    return;
  }


  if (
    window.scrollY >
    550
  ) {

    backToTop.classList.add(
      "is-visible"
    );

  } else {

    backToTop.classList.remove(
      "is-visible"
    );

  }

}


window.addEventListener(
  "scroll",
  updateBackToTop,
  {
    passive: true
  }
);


if (backToTop) {

  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* =========================================================
   17. INICIALIZACIÓN
   ========================================================= */

function initializeMenu() {

  /*
     Renderizamos las cuatro categorías
     independientemente.
  */

  renderCategory(
    "cervezas"
  );


  renderCategory(
    "michelados"
  );


  renderCategory(
    "licores - bar"
  );


  renderCategory(
    "bebidas gaseosas"
  );


  setupViewButtons();


  setupRevealAnimations();


  updateBackToTop();

}


/* =========================================================
   18. ARRANCAR
   ========================================================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializeMenu
  );

} else {

  initializeMenu();

}
