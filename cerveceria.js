/* =========================================================
   MIRADOR DE LAS CAMELIAS
   CERVECERÍA
   ========================================================= */


/* =========================================================
   DATOS DEL MENÚ
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
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105003/corona330_lmquee.jpg"
  },

  {
    nombre: "Stella Artois",
    descripcion: "",
    precio: 15600,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105017/stella_rxlgep.jpg"
  },

  {
    nombre: "Tres Cordilleras Negra",
    descripcion: "",
    precio: 15600,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105017/trescornegra_bx7wwj.jpg"
  },

  {
    nombre: "Tres Cordilleras Rosada",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105018/trescorrosada_th0a7e.jpg"
  },

  {
    nombre: "Tres Cordilleras Roja",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105018/trescorroja_fd5rgg.jpg"
  },

  {
    nombre: "Tres Cordilleras Verde",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105018/trescorverde_ngobt6.jpg"
  },

  {
    nombre: "Heineken",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105003/heineken_l2ant3.jpg"
  },

  {
    nombre: "Budweiser lata",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104990/budweiser_oro8ma.jpg"
  },

  {
    nombre: "Águila original 330 ml",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104990/aguilaoriginal_rkmqtf.jpg"
  },

  {
    nombre: "Águila light 330 ml",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104990/aguilalight_cfxxhs.jpg"
  },

  {
    nombre: "Poker 330 ml",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105011/poker330_kvaifl.jpg"
  },

  {
    nombre: "Sol 330 ml",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105012/sol330_finfhj.jpg"
  },

  {
    nombre: "Reeds",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105011/redds_ukq0qh.jpg"
  },

  {
    nombre: "Club Colombia",
    descripcion: "",
    precio: 9600,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104991/clubcolombia_en6xny.jpg"
  },

  {
    nombre: "Cola y pola",
    descripcion: "",
    precio: 8600,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104991/colapola_sutuea.jpg"
  },

  {
    nombre: "Andina 330 ml",
    descripcion: "",
    precio: 8000,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104990/andina330_eka6mn.jpg"
  },

  {
    nombre: "Jarra refajo",
    descripcion: "",
    precio: 22500,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768106512/jarrarefajo_cdu9cq.jpg"
  },


  /* =======================================================
     MICHELADOS
  ======================================================= */

  {
    nombre: "Michelado tradicional",
    descripcion: "",
    precio: 4200,
    categoria: "michelados",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105018/vasomichelado_eynoic.jpg"
  },

  {
    nombre: "Michelado - Frutos rojos",
    descripcion: "",
    precio: 10000,
    categoria: "michelados",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105010/micheladorosa_frfa5f.jpg"
  },

  {
    nombre: "Michelado - Mango",
    descripcion: "",
    precio: 10000,
    categoria: "michelados",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105010/micheladomango_n1lgpw.jpg"
  },


  /* =======================================================
     LICORES - BAR
  ======================================================= */

  {
    nombre: "Botella - Antioqueño azul",
    descripcion: "",
    precio: 130900,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112066/botellaaguardienteazul_ebhbg3.jpg"
  },

  {
    nombre: "Media - Antioqueño azul",
    descripcion: "",
    precio: 71400,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112109/medioaguartienteazul_zy0lxb.jpg"
  },

  {
    nombre: "Botella - Antioqueño verde",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112066/botellaaguardienteverde_pyyjzw.jpg"
  },

  {
    nombre: "Media - Antioqueño verde",
    descripcion: "",
    precio: 65000,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112106/medioaguardienteverde_lpu4qg.jpg"
  },

  {
    nombre: "Botella amarillo - Real Antioqueño",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112066/botellaamarilloreal_za73gy.jpg"
  },

  {
    nombre: "Botella - Ron Medellín 3 años",
    descripcion: "",
    precio: 130900,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112072/botellaronmedellin3_y7gryb.jpg"
  },

  {
    nombre: "Media - Ron Medellín 3 años",
    descripcion: "",
    precio: 71400,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112110/medioronmedellin3_d1n3lz.jpg"
  },

  {
    nombre: "Botella - Ron rosado",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112072/botellaronrosado_qmayqm.jpg"
  },

  {
    nombre: "Botella - Ron Medellín",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112071/botellaron_luneuk.jpg"
  },

  {
    nombre: "Media - Ron Medellín",
    descripcion: "",
    precio: 65000,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112109/medioron_y1dm6o.jpg"
  },

  {
    nombre: "Botella - Ron Caldas",
    descripcion: "",
    precio: 130900,
    categoria: "licores - bar",
    imagen: ""
  },

  {
    nombre: "Media - Ron Caldas",
    descripcion: "",
    precio: 71400,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112109/medioroncaldas_g91erw.jpg"
  },

  {
    nombre: "Media - Brandy",
    descripcion: "",
    precio: 84000,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112109/mediobrandy_whmlzl.jpg"
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
    nombre: "Hit 250 ml",
    descripcion: "",
    precio: 4200,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768166574/hit250_u193o1.jpg"
  },

  {
    nombre: "Hit grande",
    descripcion: "",
    precio: 4200,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112099/hitgrande_z3gbg6.jpg"
  },

  {
    nombre: "Gaseosas 250 ml",
    descripcion: "",
    precio: 4200,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112095/gaseosa250_qoi1sj.jpg"
  },

  {
    nombre: "Gaseosas 350 ml",
    descripcion: "",
    precio: 5400,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112095/gaseosa350_djmt1l.jpg"
  },

  {
    nombre: "Gaseosas - Postobón 1.5 L",
    descripcion: "",
    precio: 11400,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112091/gaseosa1_5_wh1eht.jpg"
  },

  {
    nombre: "Gaseosas - Postobón 2.5 L",
    descripcion: "",
    precio: 16800,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112092/gaseosa2_5_h6hk52.jpg"
  },

  {
    nombre: "Pony Malta 330 ml",
    descripcion: "",
    precio: 5400,
    categoria: "bebidas gaseosas",
    imagen: ""
  },

  {
    nombre: "Pony Malta 1 L",
    descripcion: "",
    precio: 10500,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112119/ponylitro_z8q668.jpg"
  },

  {
    nombre: "Coca Cola 350 ml",
    descripcion: "",
    precio: 5400,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112077/cocacola350_flbilx.jpg"
  },

  {
    nombre: "Coca Cola 400 ml",
    descripcion: "",
    precio: 6600,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112080/cocacola400_xweuxr.jpg"
  },

  {
    nombre: "Coca Cola 600 ml",
    descripcion: "",
    precio: 7800,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112080/cocacola600_qnuibo.jpg"
  },

  {
    nombre: "Coca Cola 1.5 L",
    descripcion: "",
    precio: 13200,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112076/cocacola1_5_n6prvh.jpg"
  },

  {
    nombre: "Coca Cola 2.25 L",
    descripcion: "",
    precio: 19200,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112076/cocacola2_25_ibztjd.jpg"
  },

  {
    nombre: "H2O",
    descripcion: "",
    precio: 6500,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112095/h2o_hqhuhh.jpg"
  },

  {
    nombre: "Gatorade",
    descripcion: "",
    precio: 7800,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112095/gatoradecerveceria_mv3h4p.jpg"
  },

  {
    nombre: "Ginger Pequeña",
    descripcion: "",
    precio: 5400,
    categoria: "bebidas gaseosas",
    imagen: ""
  },

  {
    nombre: "Speed Max",
    descripcion: "",
    precio: 4750,
    categoria: "bebidas gaseosas",
    imagen: ""
  },

  {
    nombre: "Jugo del Valle",
    descripcion: "",
    precio: 6000,
    categoria: "bebidas gaseosas",
    imagen: ""
  }

];


/* =========================================================
   CONFIGURACIÓN
   ========================================================= */

const INITIAL_VISIBLE = 8;

const categoryNames = {
  "cervezas": "CERVEZAS",
  "michelados": "MICHELADOS",
  "licores - bar": "LICORES - BAR",
  "bebidas gaseosas": "BEBIDAS GASEOSAS"
};

const categoryEyebrows = {
  "cervezas": "SELECCIÓN DE LA CASA",
  "michelados": "PARA COMENZAR LA NOCHE",
  "licores - bar": "SELECCIÓN DE BAR",
  "bebidas gaseosas": "OPCIONES REFRESCANTES"
};


/* =========================================================
   REFERENCIAS DOM
   ========================================================= */

const menuContainer =
  document.getElementById("menuContainer");

const licoresPreview =
  document.getElementById("licoresPreview");

const gaseosasPreview =
  document.getElementById("gaseosasPreview");

const categoryButtons =
  document.querySelectorAll(".category-btn");

const categoryTitle =
  document.getElementById("categoryTitle");

const categoryEyebrow =
  document.getElementById("categoryEyebrow");

const viewAllButton =
  document.getElementById("viewAll");

const featureButton =
  document.getElementById("featureButton");

const modal =
  document.getElementById("productModal");

const modalImage =
  document.getElementById("modalImage");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const modalPrice =
  document.getElementById("modalPrice");

const menuToggle =
  document.getElementById("menuToggle");

const mobileNav =
  document.getElementById("mobileNav");

const backToTop =
  document.getElementById("backToTop");


/* =========================================================
   ESTADO
   ========================================================= */

let currentCategory = "cervezas";

let showingAll = false;


/* =========================================================
   FORMATEAR PRECIO
   ========================================================= */

function formatPrice(price) {

  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(price);

}


/* =========================================================
   CREAR TARJETA
   ========================================================= */

function createProductCard(item) {

  const card =
    document.createElement("article");

  card.className = "menu-card card-enter";

  card.setAttribute(
    "tabindex",
    "0"
  );

  card.setAttribute(
    "aria-label",
    `Ver detalles de ${item.nombre}`
  );


  /* Imagen */

  const imageWrapper =
    document.createElement("div");

  imageWrapper.className =
    "menu-card-image";


  if (item.imagen) {

    const image =
      document.createElement("img");

    image.src = item.imagen;

    image.alt = item.nombre;

    image.loading = "lazy";

    image.onerror = () => {

      imageWrapper.innerHTML = "";

      imageWrapper.classList.add(
        "no-image"
      );

    };

    imageWrapper.appendChild(image);

  } else {

    imageWrapper.classList.add(
      "no-image"
    );

  }


  /* Contenido */

  const content =
    document.createElement("div");

  content.className =
    "menu-card-content";


  const title =
    document.createElement("h3");

  title.textContent =
    item.nombre;


  if (item.descripcion) {

    const description =
      document.createElement("p");

    description.textContent =
      item.descripcion;

    content.appendChild(
      description
    );

  }


  const price =
    document.createElement("span");

  price.className =
    "price";

  price.textContent =
    formatPrice(item.precio);


  content.insertBefore(
    title,
    content.firstChild
  );

  content.appendChild(price);


  card.appendChild(
    imageWrapper
  );

  card.appendChild(
    content
  );


  /* Abrir modal */

  const openCard = () => {

    openModal(item);

  };


  card.addEventListener(
    "click",
    openCard
  );


  card.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        openCard();

      }

    }
  );


  return card;

}


/* =========================================================
   RENDER PRODUCTOS
   ========================================================= */

function renderProducts(
  container,
  items,
  limit = null
) {

  if (!container) return;

  container.innerHTML = "";


  const visibleItems =
    limit === null
      ? items
      : items.slice(0, limit);


  if (visibleItems.length === 0) {

    const empty =
      document.createElement("p");

    empty.textContent =
      "No hay productos disponibles.";

    empty.style.color =
      "var(--muted)";

    container.appendChild(
      empty
    );

    return;

  }


  visibleItems.forEach(
    (item, index) => {

      const card =
        createProductCard(item);

      container.appendChild(
        card
      );


      requestAnimationFrame(() => {

        setTimeout(() => {

          card.classList.remove(
            "card-enter"
          );

          card.classList.add(
            "card-visible"
          );

        }, index * 45);

      });

    }
  );

}


/* =========================================================
   OBTENER CATEGORÍA
   ========================================================= */

function getCategoryItems(category) {

  return menuItems.filter(
    item =>
      item.categoria === category
  );

}


/* =========================================================
   RENDER CATEGORÍA PRINCIPAL
   ========================================================= */

function renderCategory(
  category,
  showAll = false,
  scrollToProducts = true
) {

  currentCategory =
    category;

  showingAll =
    showAll;


  const items =
    getCategoryItems(
      category
    );


  categoryTitle.textContent =
    categoryNames[category] ||
    category.toUpperCase();


  categoryEyebrow.textContent =
    categoryEyebrows[category] ||
    "SELECCIÓN";


  renderProducts(
    menuContainer,
    items,
    showAll
      ? null
      : INITIAL_VISIBLE
  );


  viewAllButton.textContent =
    showAll
      ? "MOSTRAR MENOS"
      : "VER TODAS";


  const arrow =
    document.createElement("span");

  arrow.textContent =
    showAll
      ? "↑"
      : "→";

  viewAllButton.appendChild(
    arrow
  );


  if (scrollToProducts) {

    document
      .getElementById("menu")
      .scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

  }

}


/* =========================================================
   BOTONES DE CATEGORÍA
   ========================================================= */

categoryButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        const category =
          button.dataset.category;


        categoryButtons.forEach(
          btn => {

            const active =
              btn === button;

            btn.classList.toggle(
              "active",
              active
            );

            btn.setAttribute(
              "aria-selected",
              active
            );

          }
        );


        renderCategory(
          category,
          false,
          true
        );

      }
    );

  }
);


/* =========================================================
   VER TODAS
   ========================================================= */

viewAllButton.addEventListener(
  "click",
  () => {

    renderCategory(
      currentCategory,
      !showingAll,
      false
    );

  }
);


/* =========================================================
   BOTONES SECUNDARIOS
   ========================================================= */

document
  .querySelectorAll(
    "[data-category-target]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          const category =
            button.dataset.categoryTarget;


          const categoryButton =
            document.querySelector(
              `.category-btn[data-category="${category}"]`
            );


          if (categoryButton) {

            categoryButton.click();

          }

        }
      );

    }
  );


/* =========================================================
   PREVIEW LICORES
   ========================================================= */

function renderLicoresPreview() {

  const items =
    getCategoryItems(
      "licores - bar"
    );

  renderProducts(
    licoresPreview,
    items,
    4
  );

}


/* =========================================================
   PREVIEW GASEOSAS
   ========================================================= */

function renderGaseosasPreview() {

  const items =
    getCategoryItems(
      "bebidas gaseosas"
    );

  renderProducts(
    gaseosasPreview,
    items,
    4
  );

}


/* =========================================================
   MODAL
   ========================================================= */

function openModal(item) {

  modalImage.src =
    item.imagen || "";

  modalImage.alt =
    item.nombre;


  if (!item.imagen) {

    modalImage.style.display =
      "none";

  } else {

    modalImage.style.display =
      "block";

  }


  modalTitle.textContent =
    item.nombre;


  modalDescription.textContent =
    item.descripcion ||
    "Disfruta esta opción en Mirador de las Camelias.";


  modalPrice.textContent =
    formatPrice(
      item.precio
    );


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


/* =========================================================
   CERRAR MODAL
   ========================================================= */

function closeModal() {

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


document
  .querySelectorAll(
    "[data-close-modal]"
  )
  .forEach(
    element => {

      element.addEventListener(
        "click",
        closeModal
      );

    }
  );


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      modal.classList.contains(
        "is-open"
      )
    ) {

      closeModal();

    }

  }
);


/* =========================================================
   MOBILE MENU
   ========================================================= */

function closeMobileNav() {

  menuToggle.classList.remove(
    "is-open"
  );

  mobileNav.classList.remove(
    "is-open"
  );

  menuToggle.setAttribute(
    "aria-expanded",
    "false"
  );

  mobileNav.setAttribute(
    "aria-hidden",
    "true"
  );

}


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


/* Cerrar menú al seleccionar */

mobileNav
  .querySelectorAll("a")
  .forEach(
    link => {

      link.addEventListener(
        "click",
        closeMobileNav
      );

    }
  );


/* =========================================================
   BACK TO TOP
   ========================================================= */

window.addEventListener(
  "scroll",
  () => {

    if (
      window.scrollY > 500
    ) {

      backToTop.classList.add(
        "visible"
      );

    } else {

      backToTop.classList.remove(
        "visible"
      );

    }

  },
  {
    passive: true
  }
);


backToTop.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


if (
  "IntersectionObserver" in window
) {

  const revealObserver =
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

              revealObserver.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach(
    element => {

      revealObserver.observe(
        element
      );

    }
  );

} else {

  revealElements.forEach(
    element => {

      element.classList.add(
        "is-visible"
      );

    }
  );

}


/* =========================================================
   RENDER INICIAL
   ========================================================= */

renderCategory(
  "cervezas",
  false,
  false
);

renderLicoresPreview();
renderGaseosasPreview();


/* =========================================================
   MENSAJE DE COMPROBACIÓN
   ========================================================= */

console.log(
  "Cervecería Mirador cargada correctamente."
);

console.log(
  `Productos cargados: ${menuItems.length}`
);
