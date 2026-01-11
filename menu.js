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
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105003/corona330_lmquee.jpg",
  },
  {
    nombre: "Stella artois",
    descripcion: "",
    precio: 15600,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105017/stella_rxlgep.jpg",
  },
  {
    nombre: "Tres cordilleras negra",
    descripcion: "",
    precio: 15600,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105017/trescornegra_bx7wwj.jpg",
  },
  {
    nombre: "Tres cordilleras rosada",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105018/trescorrosada_th0a7e.jpg",
  },
  {
    nombre: "Tres cordilleras roja",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105018/trescorroja_fd5rgg.jpg",
  },
  {
    nombre: "Tres cordilleras verde",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105018/trescorverde_ngobt6.jpg",
  },
  {
    nombre: "Heineken",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105003/heineken_l2ant3.jpg",
  },
  {
    nombre: "Budweiser lata",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104990/budweiser_oro8ma.jpg",
  },
  {
    nombre: "Aguila original 330 ml",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104990/aguilaoriginal_rkmqtf.jpg",
  },
  {
    nombre: "Aguila light 330 ml",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104990/aguilalight_cfxxhs.jpg",
  },
  {
    nombre: "Poker 330ml",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105011/poker330_kvaifl.jpg",
  },
  {
    nombre: "Sol 330ml",
    descripcion: "",
    precio: 13200,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105012/sol330_finfhj.jpg",
  },
  {
    nombre: "Reeds",
    descripcion: "",
    precio: 8950,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105011/redds_ukq0qh.jpg",
  },
  {
    nombre: "Club colombia",
    descripcion: "",
    precio: 9600,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104991/clubcolombia_en6xny.jpg",
  },
  {
    nombre: "Cola y pola",
    descripcion: "",
    precio: 8600,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104991/colapola_sutuea.jpg",
  },
  {
    nombre: "Andina 330ml",
    descripcion: "",
    precio: 8000,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104990/andina330_eka6mn.jpg",
  },
  {
    nombre: "Jarra refajo",
    descripcion: "",
    precio: 22500,
    categoria: "cervezas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768106512/jarrarefajo_cdu9cq.jpg",
  },
  {
    nombre: "Michelado tradicional",
    descripcion: "",
    precio: 4200,
    categoria: "michelados",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105018/vasomichelado_eynoic.jpg",
  },
  {
    nombre: "Michelado - Frutos rojos",
    descripcion: "",
    precio: 4200,
    categoria: "michelados",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105010/micheladorosa_frfa5f.jpg",
  },
  {
    nombre: "Michelado - Mango",
    descripcion: "",
    precio: 3600,
    categoria: "michelados",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105010/micheladomango_n1lgpw.jpg",
  },
  {
    nombre: "Botella - antioqueño azul",
    descripcion: "",
    precio: 130900,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112066/botellaaguardienteazul_ebhbg3.jpg",
  },
  {
    nombre: "Media - antioqueño azul",
    descripcion: "",
    precio: 71400,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112109/medioaguartienteazul_zy0lxb.jpg",
  },
  {
    nombre: "Botella - antioqueño verde",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112066/botellaaguardienteverde_pyyjzw.jpg",
  },
  {
    nombre: "Media - antioqueño verde",
    descripcion: "",
    precio: 65000,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112106/medioaguardienteverde_lpu4qg.jpg",
  },
  {
    nombre: "Botella amarillo - Real antioqueño",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112066/botellaamarilloreal_za73gy.jpg",
  },
  {
    nombre: "Botella - Ron medellin 3 años",
    descripcion: "",
    precio: 130900,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112072/botellaronmedellin3_y7gryb.jpg",
  },
  {
    nombre: "Media - Ron medellin 3 años",
    descripcion: "",
    precio: 71400,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112110/medioronmedellin3_d1n3lz.jpg",
  },
  {
    nombre: "Botella - Ron rosado",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112072/botellaronrosado_qmayqm.jpg",
  },
  {
    nombre: "Botella - Ron medellin",
    descripcion: "",
    precio: 125000,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112071/botellaron_luneuk.jpg",
  },
  {
    nombre: "Media - Ron medellin",
    descripcion: "",
    precio: 65000,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112109/medioron_y1dm6o.jpg",
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
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112109/medioroncaldas_g91erw.jpg",
  },
  {
    nombre: "Media - Brandy",
    descripcion: "",
    precio: 84000,
    categoria: "licores - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112109/mediobrandy_whmlzl.jpg",
  },
  {
    nombre: "Botella - Cristal XS < S < L",
    descripcion: "",
    precio: 110000,
    categoria: "licores - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
   {
    nombre: "Hit 250ml",
    descripcion: "",
    precio: 4200,
    categoria: "bebidas gaseosas",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
   {
    nombre: "Hit grande",
    descripcion: "",
    precio: 4200,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768112099/hitgrande_z3gbg6.jpg",
  },
  {
    nombre: "Gaseosas 250ml",
    descripcion: "",
    precio: 4200,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112095/gaseosa250_qoi1sj.jpg",
  },
  {
    nombre: "Gaseosas 350ml",
    descripcion: "",
    precio: 5400,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112095/gaseosa350_djmt1l.jpg",
  },
  {
    nombre: "Gaseosas - Postobon 1.5L ",
    descripcion: "",
    precio: 11400,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112091/gaseosa1_5_wh1eht.jpg",
  },
  {
    nombre: "Gaseosas - Postobon 2.5L",
    descripcion: "",
    precio: 16800,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112092/gaseosa2_5_h6hk52.jpg",
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
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112119/ponylitro_z8q668.jpg",
  },
  {
    nombre: "Coca cola 350ml",
    descripcion: "",
    precio: 5400,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112077/cocacola350_flbilx.jpg",
  },
  {
    nombre: "Coca cola 400ml",
    descripcion: "",
    precio: 6600,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112080/cocacola400_xweuxr.jpg",
  },
  {
    nombre: "Coca cola 600ml",
    descripcion: "",
    precio: 7800,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112080/cocacola600_qnuibo.jpg",
  },
  {
    nombre: "Coca cola 1.5L",
    descripcion: "",
    precio: 13200,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112076/cocacola1_5_n6prvh.jpg",
  },
  {
    nombre: "Coca cola 2.25L",
    descripcion: "",
    precio: 19200,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112076/cocacola2_25_ibztjd.jpg",
  },
  {
    nombre: "H2O",
    descripcion: "",
    precio: 6500,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112095/h2o_hqhuhh.jpg",
  },
  {
    nombre: "Gatorade",
    descripcion: "",
    precio: 7800,
    categoria: "bebidas gaseosas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112095/gatoradecerveceria_mv3h4p.jpg",
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
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112091/festival_kyblky.jpg",
  },
  {
    nombre: "Galleta milo",
    descripcion: "",
    precio: 3000,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112114/milo_kevmn8.jpg",
  },
  {
    nombre: "Galleta oreo ",
    descripcion: "",
    precio: 3000,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112114/oreo_fgmr6x.jpg",
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
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112081/cheetospequeno_et6fhc.jpg",
  },
  {
    nombre: "Choclitos pequeños",
    descripcion: "",
    precio: 6000,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
   {
    nombre: "Cheesetris",
    descripcion: "",
    precio: 6000,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112081/cheesetris_apcuzg.jpg",
  },
  {
    nombre: "Margarita pequeño",
    descripcion: "",
    precio: 6000,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112104/margaritapequeno_bfyg51.jpg",
  },
  {
    nombre: "DeTodito pequeño",
    descripcion: "",
    precio: 7500,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112091/detoditopequeno_dylima.jpg",
  },
  {
    nombre: "Cheetos grande",
    descripcion: "",
    precio: 15600,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112081/cheetosgrande_nkhgdo.jpg",
  },
  {
    nombre: "Margarita grande",
    descripcion: "",
    precio: 15600,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112104/margaritagrande_n1cgra.jpg",
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
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112081/choclitosgrande_m7sadv.jpg",
  },
  {
    nombre: "Chocoso",
    descripcion: "",
    precio: 3600,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112087/chocoso_gczpuc.jpg",
  },
  {
    nombre: "Casero pastel",
    descripcion: "",
    precio: 11900,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112073/caseropastel_xnjyd5.jpg",
  },
  {
    nombre: "Brownie",
    descripcion: "",
    precio: 7000,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112072/brownie_lkstum.jpg",
  },
  {
    nombre: "Submarino",
    descripcion: "",
    precio: 3500,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112119/submarino_up2fjd.jpg",
  },
  {
    nombre: "Pekitas",
    descripcion: "",
    precio: 3500,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112114/pekitas_fhgnsq.jpg",
  },
  {
    nombre: "Piolo",
    descripcion: "",
    precio: 3500,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112118/piolo_g7tcy5.jpg",
  },
  {
    nombre: "Pinguino",
    descripcion: "",
    precio: 5500,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112114/pinguino_bzhej8.jpg",
  },
  {
    nombre: "Manimotos",
    descripcion: "",
    precio: 3600,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112104/manimoto_t0dfb7.jpg",
  },
  {
    nombre: "DeTodito Grande",
    descripcion: "",
    precio: 15600,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112087/detoditogrande_vi9o5h.jpg",
  },
  {
    nombre: "Chokis",
    descripcion: "",
    precio: 3000,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112087/chokis_yrdqsa.jpg",
  },
  {
    nombre: "Manchitas",
    descripcion: "",
    precio: 3500,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112100/manchitas_zwbojo.jpg",
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
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112100/jumbo_yyk5x6.jpg",
  },
  {
    nombre: "Jumbito mini",
    descripcion: "",
    precio: 2400,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/v1768112100/jumbitomini_fnyg2c.jpg",
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
    nombre: "Candelas",
    descripcion: "",
    precio: 3600,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Chocolores",
    descripcion: "",
    precio: 4200,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112086/chocolores_yt0o9i.jpg",
  },
  {
    nombre: "Trident cool",
    descripcion: "",
    precio: 7800,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112122/tridentcool_u5hmqr.jpg",
  },
  {
    nombre: "Trident total",
    descripcion: "",
    precio: 4800,
    categoria: "dulceria - bar",
    imagen: "productos_imagenes/bar-heladeria/insertarnombre",
  },
  {
    nombre: "Trident individual",
    descripcion: "",
    precio: 600,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112065/adams_svbta4.jpg",
  },
  {
    nombre: "Adams individual",
    descripcion: "",
    precio: 600,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112065/adams_svbta4.jpg",
  },
  {
    nombre: "Barra halls",
    descripcion: "",
    precio: 4750,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112065/barrahalls_jdfchp.jpg",
  },
  {
    nombre: "Halls individual",
    descripcion: "",
    precio: 600,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112065/adams_svbta4.jpg",
  },
  {
    nombre: "bon bon bum",
    descripcion: "",
    precio: 1500,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112065/bonbonbum_yenh0q.jpg",
  },
  {
    nombre: "bananas",
    descripcion: "",
    precio: 600,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112065/bananas_fiwi0j.jpg",
  },
  {
    nombre: "club social",
    descripcion: "",
    precio: 3000,
    categoria: "dulceria - bar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768112076/clubsocial_m7pcdk.jpg",
  },
  {
    nombre: "Brownie con helado",
    descripcion: "",
    precio: 14000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104991/browniehelado_bh5zq7.jpg",
  },
  {
    nombre: "Banana split",
    descripcion: "",
    precio: 17000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104991/bananasplit_gnju3e.jpg",
  },
  {
    nombre: "Copa kick",
    descripcion: "",
    precio: 17000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105002/copakick_nhogra.jpg",
  },
  {
    nombre: "Copa oreo",
    descripcion: "",
    precio: 17000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105003/copaoreo_ac4kww.jpg",
  },
  {
    nombre: "Copa milo",
    descripcion: "",
    precio: 17000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105002/copamilo_ujjedh.jpg",
  },
  {
    nombre: "Ensalada de frutas",
    descripcion: "",
    precio: 18000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105003/ensaladafrutas_vdjidu.jpg",
  },
  {
    nombre: "Copa coffee delight",
    descripcion: "",
    precio: 18000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104992/copacoffedelight_wf2ez1.jpg",
  },
  {
    nombre: "Copa frutos rojos",
    descripcion: "",
    precio: 18000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104992/copafrutosrojos_czkpok.jpg",
  },
  {
    nombre: "Copa durazno",
    descripcion: "",
    precio: 18000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104992/copadurazno_ezm4go.jpg",
  },
  {
    nombre: "Copa Baileys",
    descripcion: "",
    precio: 19000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104991/copabaileys_dlfxnd.jpg",
  },
   {
    nombre: "Copa chocolate",
    descripcion: "",
    precio: 19000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104991/copabaileys_dlfxnd.jpg",
  },
  {
    nombre: "Malteada",
    descripcion: "",
    precio: 13000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105004/malteada_qpgnkh.jpg",
  },
  {
    nombre: "Cono una bola",
    descripcion: "",
    precio: 5500,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104991/conounabola_aqvbov.jpg",
  },
  {
    nombre: "Cono dos bolas",
    descripcion: "",
    precio: 8000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768104992/conodosbolas_ixhcby.jpg",
  },
  {
    nombre: "Torta",
    descripcion: "",
    precio: 8000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105017/torta_jvczq6.jpg",
  },
  {
    nombre: "Torta cumpleaños",
    descripcion: "",
    precio: 17000,
    categoria: "heladeria",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105018/tortacumpleanos_dbrzfy.jpg",
  },
  {
    nombre: "Jarra de limonada natural o panela",
    descripcion: "",
    precio: 18000,
    categoria: "jugos naturales",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105003/Jarralimonadanatural_qy91z1.jpg",
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
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105003/limonadacoco_xjoqbw.jpg",
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
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105011/milofrio_wvynex.jpg",
  },
  {
    nombre: "Mazamorra o claro",
    descripcion: "",
    precio: 7000,
    categoria: "jugos naturales",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/f_auto,q_auto,w_800,dpr_auto/v1768105010/mazamorra_tmvi0j.jpg",
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
