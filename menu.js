/* =====================================================
   ARCHIVO: menu.js
   FUNCIÓN: Manejar los datos del menú y su renderizado
   ===================================================== */

/* -----------------------------------------------------
   1. DATOS DEL MENÚ
   -----------------------------------------------------
   Cada objeto representa UN producto del restaurante.
   Las categorías deben coincidir EXACTAMENTE con las
   categorías técnicas definidas en el HTML.
----------------------------------------------------- */
console.log("menu.js cargado correctamente");

const menuItems = [
  {
    nombre: "Corona 330 ml",
    descripcion: "",
    precio: 15600,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/corona330.jpg",
  },
  {
    nombre: "stella artois",
    descripcion: "",
    precio: 15600,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/stella.jpg",
  },
  {
    nombre: "tres cordilleras negra",
    descripcion: "",
    precio: 15600,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/trescornegra.jpg",
  },
  {
    nombre: "tres cordilleras rosada",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/trescorrosada.jpg",
  },
  {
    nombre: "tres cordilleras roja",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/trescorroja.jpg",
  },
  {
    nombre: "tres cordilleras verde",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/trescorverde.jpg",
  },
  {
    nombre: "heineken",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/heineken.jpg",
  },
  {
    nombre: "budweiser lata",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/budweiser.jpg",
  },
  {
    nombre: "aguila original 330 ml",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/aguilaoriginal.jpg",
  },
  {
    nombre: "aguila light 330 ml",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/aguilalight.jpg",
  },
  {
    nombre: "poker 330ml",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/poker330.jpg",
  },
  {
    nombre: "Sol 330ml",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/sol330.jpg",
  },
  {
    nombre: "reeds",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/redds.jpg",
  },
  {
    nombre: "club colombia",
    descripcion: "",
    precio: 9600,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/clubcolombia.jpg",
  },
  {
    nombre: "cola y pola",
    descripcion: "",
    precio: 8600,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/colapola.jpg",
  },
  {
    nombre: "andina 330ml",
    descripcion: "",
    precio: 8000,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/andina330.jpg",
  },
  {
    nombre: "jarra refajo",
    descripcion: "",
    precio: 22500,
    categoria: "cervezas",
    imagen: "productos_imagenes/bar-heladeria/jarrarefajo.jpg",
  },
  {
    nombre: "Michelado tradicional",
    descripcion: "",
    precio: 4200,
    categoria: "michelados",
    imagen: "productos_imagenes/bar-heladeria/vasomichelado.jpg",
  },
  {
    nombre: "Michelado - Frutos rojos",
    descripcion: "",
    precio: 4200,
    categoria: "michelados",
    imagen: "productos_imagenes/bar-heladeria/micheladorosa.jpg",
  },
  {
    nombre: "Michelado - Mango",
    descripcion: "",
    precio: 3600,
    categoria: "michelados",
    imagen: "productos_imagenes/bar-heladeria/micheladomango.jpg",
  },
  {
    nombre: "Botella - antioqueño azul",
    descripcion: "",
    precio: 130900,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Media - antioqueño azul",
    descripcion: "",
    precio: 71400,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Botella - antioqueño verde",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Media - antioqueño verde",
    descripcion: "",
    precio: 65000,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Botella amarillo - Real antioqueño",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Botella - Ron medellin 3 años",
    descripcion: "",
    precio: 130900,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Media - Ron medellin 3 años",
    descripcion: "",
    precio: 71400,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Botella - Ron rosado",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Botella - Ron medellin",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Media - Ron medellin",
    descripcion: "",
    precio: 65000,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Botella - Ron caldas",
    descripcion: "",
    precio: 130900,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Media - Ron caldas",
    descripcion: "",
    precio: 71400,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Media - Brandy",
    descripcion: "",
    precio: 84000,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Botella - Cristal XS < S < L",
    descripcion: "",
    precio: 110000,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Gaseosas 250ml",
    descripcion: "",
    precio: 4200,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Gaseosas 350ml",
    descripcion: "",
    precio: 5400,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Gaseosas - Postobon 1.5L ",
    descripcion: "",
    precio: 11400,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Gaseosas - Postobon 2.5L",
    descripcion: "",
    precio: 16800,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Pony malta 330ml",
    descripcion: "",
    precio: 5400,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Pony malta 1L",
    descripcion: "",
    precio: 10500,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Coca cola 350ml",
    descripcion: "",
    precio: 5400,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Coca cola 400ml",
    descripcion: "",
    precio: 6600,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Coca cola 600ml",
    descripcion: "",
    precio: 7800,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Coca cola 1.5L",
    descripcion: "",
    precio: 13200,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Coca cola 2.25L",
    descripcion: "",
    precio: 19200,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "H2O",
    descripcion: "",
    precio: 6500,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Gatorade",
    descripcion: "",
    precio: 7800,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Ginger Pequeña",
    descripcion: "",
    precio: 5400,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Speed max",
    descripcion: "",
    precio: 4750,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Jugo del valle",
    descripcion: "",
    precio: 6000,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Festival",
    descripcion: "",
    precio: 3000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Galleta milo",
    descripcion: "",
    precio: 3000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Galleta oreo ",
    descripcion: "",
    precio: 3000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Bocadillo",
    descripcion: "",
    precio: 700,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Cheetos pequeños",
    descripcion: "",
    precio: 6000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Choclitos pequeños",
    descripcion: "",
    precio: 6000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Margarita pequeño",
    descripcion: "",
    precio: 6000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "DeTodito pequeño",
    descripcion: "",
    precio: 7500,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Cheetos grande",
    descripcion: "",
    precio: 15600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Margarita grande",
    descripcion: "",
    precio: 15600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Natuchips grande",
    descripcion: "",
    precio: 11000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Doritos grande",
    descripcion: "",
    precio: 15600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Choclitos grande",
    descripcion: "",
    precio: 15600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Chocoso",
    descripcion: "",
    precio: 3600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Casero pastel",
    descripcion: "",
    precio: 11900,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Brownie",
    descripcion: "",
    precio: 7000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Submarino",
    descripcion: "",
    precio: 3500,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Pekitas",
    descripcion: "",
    precio: 3500,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Piolo",
    descripcion: "",
    precio: 3500,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Pinguino",
    descripcion: "",
    precio: 5500,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Manimotos",
    descripcion: "",
    precio: 3600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "DeTodito Grande",
    descripcion: "",
    precio: 15600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Chokis",
    descripcion: "",
    precio: 3000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Manchitas",
    descripcion: "",
    precio: 3500,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Natuchips pequeño",
    descripcion: "",
    precio: 15600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Paleta dracula",
    descripcion: "",
    precio: 8000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Nucita",
    descripcion: "",
    precio: 0,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Jumbo",
    descripcion: "",
    precio: 7500,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Jumbito mini",
    descripcion: "",
    precio: 2400,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Paleta Tosh",
    descripcion: "",
    precio: 0,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Bocatto",
    descripcion: "",
    precio: 8000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Casero helado",
    descripcion: "",
    precio: 5000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Helado artesanal",
    descripcion: "",
    precio: 6000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Paleta agua",
    descripcion: "",
    precio: 5000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Chococono",
    descripcion: "",
    precio: 6000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Polet",
    descripcion: "",
    precio: 8000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Vaso Aloha",
    descripcion: "",
    precio: 8000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Jet helado",
    descripcion: "",
    precio: 7000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Lucky Strike x10",
    descripcion: "",
    precio: 11900,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Premier x20",
    descripcion: "",
    precio: 16800,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Premier x10",
    descripcion: "",
    precio: 9600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Bonfiest",
    descripcion: "",
    precio: 5300,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Lua",
    descripcion: "",
    precio: 5300,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Acetaminofen",
    descripcion: "",
    precio: 700,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Curas",
    descripcion: "",
    precio: 500,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "candelas",
    descripcion: "",
    precio: 3600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "chocolores",
    descripcion: "",
    precio: 4200,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "trident cool",
    descripcion: "",
    precio: 7800,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "trident total",
    descripcion: "",
    precio: 4800,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "trident individual",
    descripcion: "",
    precio: 600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "adams individual",
    descripcion: "",
    precio: 600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "barra halls",
    descripcion: "",
    precio: 4750,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "halls individual",
    descripcion: "",
    precio: 600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "bon bon bum",
    descripcion: "",
    precio: 1500,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "bananas",
    descripcion: "",
    precio: 600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "club social",
    descripcion: "",
    precio: 3000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Brownie con helado",
    descripcion: "",
    precio: 14000,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Banana split",
    descripcion: "",
    precio: 17000,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Copa kick",
    descripcion: "",
    precio: 17000,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Copa oreo",
    descripcion: "",
    precio: 17000,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Copa milo",
    descripcion: "",
    precio: 17000,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Ensalada de frutas",
    descripcion: "",
    precio: 18000,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Copa coffee delight",
    descripcion: "",
    precio: 18000,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Copa frutos rojos",
    descripcion: "",
    precio: 18000,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Copa durazno",
    descripcion: "",
    precio: 18000,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Copa Baileys",
    descripcion: "",
    precio: 19000,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Malteada",
    descripcion: "",
    precio: 13000,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Cono una bola",
    descripcion: "",
    precio: 5500,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Cono dos bolas",
    descripcion: "",
    precio: 8000,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Torta",
    descripcion: "",
    precio: 8000,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Torta cumpleaños",
    descripcion: "",
    precio: 17000,
    categoria: "heladeria",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Jarra de limonada natural o panela",
    descripcion: "",
    precio: 18000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Jarra de jugo en agua",
    descripcion: "",
    precio: 21000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Jarra de jugo en leche",
    descripcion: "",
    precio: 23000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Jarra de maracuya en agua",
    descripcion: "",
    precio: 23000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Jarra de maracuya en leche",
    descripcion: "",
    precio: 25000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Jarra de limonada de coco",
    descripcion: "",
    precio: 25000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Tamarindo michelado",
    descripcion: "",
    precio: 8000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Limonada natural o panela",
    descripcion: "",
    precio: 8000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Jugo en agua",
    descripcion: "",
    precio: 9000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Jugo en leche",
    descripcion: "",
    precio: 10000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Jugo de maracuya en agua",
    descripcion: "",
    precio: 10000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Jugo de maracuya en leche",
    descripcion: "",
    precio: 11000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Limonada de coco",
    descripcion: "",
    precio: 11000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Vaso de leche",
    descripcion: "",
    precio: 3500,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Milo frio",
    descripcion: "",
    precio: 11000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Mazamorra o claro",
    descripcion: "",
    precio: 7000,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Botella de agua con o sin gas",
    descripcion: "",
    precio: 4500,
    categoria: "jugos naturales",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  
  
]

/* ===============================
   2. REFERENCIAS DOM
================================ */

const menuContainer = document.getElementById("menu");
const categoryButtons = document.querySelectorAll(".category-btn");


/* ===============================
   3. RENDER DEL MENÚ
================================ */

function renderMenu(items) {
  menuContainer.innerHTML = "";

  document.addEventListener("DOMContentLoaded", () => {
  const cocteles = menuItems.filter(item => item.categoria === "cervezas");
  renderMenu(cervezas);
});

  if (!items || items.length === 0) {
    menuContainer.innerHTML = "<p>No hay productos disponibles</p>";
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";

    // Imagen
    if (item.imagen) {
      const img = document.createElement("img");
      img.src = item.imagen;
      img.alt = item.nombre;

      img.onerror = () => {
        img.style.display = "none";
      };

      card.appendChild(img);
    }

    // Información
    const info = document.createElement("div");
    info.className = "menu-card-content";

    info.innerHTML = `
      <h3>${item.nombre}</h3>
      ${item.descripcion ? `<p>${item.descripcion}</p>` : ""}
      <span class="price">$${item.precio.toLocaleString("es-CO")}</span>
    `;

    card.appendChild(info);
    menuContainer.appendChild(card);
  });
}


/* ===============================
   4. FILTRO POR CATEGORÍAS
================================ */

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const categoria = btn.dataset.category;

    // Botón activo
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Filtrar productos
    const filtrados = menuItems.filter(
      item => item.categoria === categoria
    );

    renderMenu(filtrados);
  });
});


/* ===============================
   5. RENDER INICIAL (PORCIONES)
================================ */

const categoriaInicial = "cervezas";

// Marcar botón activo inicial
categoryButtons.forEach(btn => {
  if (btn.dataset.category === categoriaInicial) {
    btn.classList.add("active");
  }
});

// Render inicial optimizado
const productosIniciales = menuItems.filter(
  item => item.categoria === categoriaInicial
);

renderMenu(productosIniciales);
