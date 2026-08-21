/* =========================================================
   MIRADOR DE LAS CAMELIAS
   CERVECERÍA
   ========================================================= */

/* =========================================================
   VARIABLES
   ========================================================= */

:root {

  --bg: #17130f;
  --bg-soft: #211b15;
  --surface: #f4eee3;
  --surface-2: #ebe1d1;
  --card: #fffdf8;

  --text: #29221b;
  --text-light: #fffdf8;
  --muted: #786d60;

  --gold: #b08a4b;
  --gold-light: #d6bc8d;

  --border-light: rgba(41, 34, 27, .10);
  --border-dark: rgba(214, 188, 141, .18);

  --shadow-soft:
    0 20px 55px rgba(0, 0, 0, .12);

  --shadow-dark:
    0 25px 70px rgba(0, 0, 0, .30);

  --radius-small: 0;
  --transition:
    .30s cubic-bezier(.2, .7, .2, 1);
}


/* =========================================================
   RESET
   ========================================================= */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


html {
  scroll-behavior: smooth;
  background: var(--surface);
}


body {

  min-width: 320px;

  background: var(--surface);

  color: var(--text);

  font-family:
    "DM Sans",
    sans-serif;

  line-height: 1.6;

  overflow-x: hidden;
}


body.modal-open {
  overflow: hidden;
}


img {
  display: block;
  max-width: 100%;
}


a {
  color: inherit;
  text-decoration: none;
}


button {
  font: inherit;
}


button,
a {
  -webkit-tap-highlight-color: transparent;
}


.page-shell {
  min-height: 100vh;
  overflow: clip;
}


/* =========================================================
   HEADER
   ========================================================= */

.site-header {

  position: sticky;

  top: 0;

  z-index: 100;

  min-height: 76px;

  padding:
    0
    clamp(20px, 5vw, 72px);

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 28px;

  background:
    rgba(23, 19, 15, .95);

  color: var(--text-light);

  border-bottom:
    1px solid
    rgba(214, 188, 141, .14);

  backdrop-filter: blur(16px);
}


/* =========================================================
   BRAND
   ========================================================= */

.brand {

  display: inline-flex;

  align-items: center;

  gap: 12px;

  flex-shrink: 0;
}


.brand-mark {

  width: 38px;
  height: 38px;

  display: grid;

  place-items: center;

  border:
    1px solid
    rgba(214, 188, 141, .55);

  color: var(--gold-light);

  font-family:
    "Playfair Display",
    serif;

  font-size: 1.2rem;
}


.brand-copy {

  display: flex;

  flex-direction: column;

  line-height: 1;
}


.brand-copy strong {

  font-family:
    "Playfair Display",
    serif;

  letter-spacing: .18em;

  font-size: .92rem;

  font-weight: 500;
}


.brand-copy small {

  margin-top: 5px;

  color: var(--gold-light);

  font-size: .55rem;

  letter-spacing: .20em;
}


/* =========================================================
   DESKTOP NAVIGATION
   ========================================================= */

.desktop-nav {

  display: flex;

  align-items: center;

  justify-content: center;

  gap:
    clamp(16px, 2vw, 32px);
}


.desktop-nav a {

  color:
    rgba(255, 253, 248, .68);

  font-size: .66rem;

  letter-spacing: .13em;

  white-space: nowrap;

  transition:
    color var(--transition);
}


.desktop-nav a:hover,
.desktop-nav a.is-active {

  color: var(--gold-light);
}


/* =========================================================
   HEADER ACTIONS
   ========================================================= */

.header-actions {

  display: flex;

  align-items: center;

  gap: 14px;
}


.reserve-button {

  padding:
    11px 17px;

  border:
    1px solid
    rgba(214, 188, 141, .55);

  color: var(--gold-light);

  font-size: .66rem;

  letter-spacing: .13em;

  white-space: nowrap;

  transition:
    background var(--transition),
    color var(--transition),
    border-color var(--transition);
}


.reserve-button:hover {

  background: var(--gold);

  border-color: var(--gold);

  color: var(--bg);
}


/* =========================================================
   MOBILE MENU BUTTON
   ========================================================= */

.menu-toggle {

  display: none;

  width: 42px;
  height: 42px;

  border:
    1px solid
    rgba(214, 188, 141, .35);

  background: transparent;

  color: var(--text-light);

  cursor: pointer;
}


.menu-toggle span {

  display: block;

  width: 18px;
  height: 1px;

  margin: 4px auto;

  background: currentColor;

  transition:
    transform var(--transition),
    opacity var(--transition);
}


.menu-toggle.is-open span:nth-child(1) {

  transform:
    translateY(5px)
    rotate(45deg);
}


.menu-toggle.is-open span:nth-child(2) {

  opacity: 0;
}


.menu-toggle.is-open span:nth-child(3) {

  transform:
    translateY(-5px)
    rotate(-45deg);
}


/* =========================================================
   MOBILE NAV
   ========================================================= */

.mobile-nav {

  position: fixed;

  inset:
    76px
    0
    auto
    0;

  z-index: 99;

  display: flex;

  flex-direction: column;

  padding:
    10px
    24px
    24px;

  background:
    rgba(23, 19, 15, .98);

  border-bottom:
    1px solid
    rgba(214, 188, 141, .15);

  transform:
    translateY(-120%);

  transition:
    transform
    .35s
    cubic-bezier(.2, .7, .2, 1);
}


.mobile-nav.is-open {

  transform:
    translateY(0);
}


.mobile-nav a {

  padding:
    16px
    4px;

  border-bottom:
    1px solid
    rgba(255, 255, 255, .08);

  color:
    rgba(255, 253, 248, .78);

  font-size: .72rem;

  letter-spacing: .14em;

  transition:
    color var(--transition);
}


.mobile-nav a:hover {

  color: var(--gold-light);
}


/* =========================================================
   HERO
   ========================================================= */

.hero {

  position: relative;

  min-height:
    min(
      760px,
      calc(100vh - 76px)
    );

  padding:
    clamp(60px, 8vw, 120px)
    clamp(24px, 8vw, 120px);

  display: grid;

  grid-template-columns:
    minmax(0, .9fr)
    minmax(360px, 1.1fr);

  align-items: center;

  gap:
    clamp(40px, 7vw, 110px);

  background:

    radial-gradient(
      circle at 70% 35%,
      rgba(176, 138, 75, .13),
      transparent 35%
    ),

    var(--surface);
}


/* =========================================================
   HERO COPY
   ========================================================= */

.hero-copy {

  position: relative;

  z-index: 2;

  max-width: 610px;
}


.eyebrow {

  margin-bottom: 16px;

  color: var(--gold);

  font-size: .62rem;

  letter-spacing: .22em;

  font-weight: 600;
}


.hero h1 {

  max-width: 650px;

  font-family:
    "Playfair Display",
    serif;

  font-size:
    clamp(
      3.6rem,
      7.5vw,
      7.4rem
    );

  line-height: .88;

  font-weight: 400;

  letter-spacing: -.035em;
}


.hero h1 em {

  color: var(--gold);

  font-style: italic;
}


.ornament {

  margin:
    25px 0
    18px;

  color: var(--gold);

  font-size: .8rem;
}


.hero-text {

  max-width: 480px;

  margin-bottom: 30px;

  color: var(--muted);

  font-size: .94rem;
}


/* =========================================================
   OUTLINE BUTTON
   ========================================================= */

.outline-button {

  min-height: 46px;

  display: inline-flex;

  align-items: center;

  gap: 30px;

  padding:
    0 18px;

  border:
    1px solid
    var(--gold);

  background: transparent;

  color: var(--gold);

  font-size: .62rem;

  letter-spacing: .16em;

  cursor: pointer;

  transition:
    background var(--transition),
    color var(--transition),
    transform var(--transition);
}


.outline-button:hover {

  background: var(--gold);

  color: var(--text-light);

  transform:
    translateY(-2px);
}


.outline-button span {

  font-size: .85rem;
}


/* =========================================================
   HERO VISUAL
   ========================================================= */

.hero-visual {

  position: relative;

  min-height:
    min(650px, 70vh);

  display: grid;

  place-items: center;
}


.hero-halo {

  position: absolute;

  width:
    min(70vw, 560px);

  aspect-ratio: 1;

  border-radius: 50%;

  background:
    rgba(176, 138, 75, .08);
}


.hero-ring {

  position: absolute;

  width:
    min(60vw, 470px);

  aspect-ratio: 1;

  border:
    1px solid
    rgba(176, 138, 75, .35);

  border-radius: 50%;
}


.hero-visual img {

  position: relative;

  z-index: 2;

  width:
    min(70%, 470px);

  aspect-ratio: 4 / 5;

  object-fit: cover;

  box-shadow:
    var(--shadow-soft);

  animation:
    floatImage
    7s
    ease-in-out
    infinite;
}


.hero-caption {

  position: absolute;

  right: 0;

  bottom: 8%;

  z-index: 3;

  display: flex;

  align-items: center;

  gap: 12px;

  color: var(--gold);

  font-size: .58rem;

  letter-spacing: .18em;
}


.hero-caption i {

  width: 46px;
  height: 1px;

  background: var(--gold);
}


/* =========================================================
   CATEGORY SECTION
   ========================================================= */

.category-section {

  padding:
    28px
    clamp(24px, 8vw, 120px)
    20px;

  background: var(--bg);

  color: var(--text-light);
}


.section-kicker {

  margin-bottom: 14px;

  color: var(--gold-light);

  font-size: .60rem;

  letter-spacing: .20em;
}


.categories {

  display: flex;

  gap: 10px;

  overflow-x: auto;

  scrollbar-width: none;

  padding-bottom: 3px;
}


.categories::-webkit-scrollbar {
  display: none;
}


/* =========================================================
   CATEGORY BUTTONS
   ========================================================= */

.category-chip {

  flex:
    0 0 auto;

  padding:
    12px
    18px;

  border:
    1px solid
    rgba(214, 188, 141, .28);

  color:
    rgba(255, 253, 248, .70);

  font-size: .63rem;

  letter-spacing: .13em;

  transition:
    background var(--transition),
    border-color var(--transition),
    color var(--transition);
}


.category-chip:hover,
.category-chip.is-active {

  background: var(--gold);

  border-color: var(--gold);

  color: var(--bg);
}


/* =========================================================
   PRODUCTS SECTIONS
   ========================================================= */

.products-section {

  padding:
    clamp(70px, 8vw, 110px)
    clamp(24px, 8vw, 120px);

  background: var(--surface);
}


.compact-section {

  padding-top:
    clamp(58px, 7vw, 90px);
}


/* =========================================================
   SECTION HEADINGS
   ========================================================= */

.section-heading {

  max-width: 1390px;

  margin:
    0 auto
    38px;

  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 25px;
}


.section-heading h2 {

  font-family:
    "Playfair Display",
    serif;

  font-size:
    clamp(
      2.7rem,
      5vw,
      5rem
    );

  line-height: .95;

  font-weight: 400;

  letter-spacing: -.035em;
}


/* =========================================================
   VIEW ALL
   ========================================================= */

.view-all {

  border: 0;

  background: transparent;

  color: var(--gold);

  font-size: .60rem;

  letter-spacing: .15em;

  cursor: pointer;

  white-space: nowrap;

  transition:
    transform var(--transition),
    opacity var(--transition);
}


.view-all:hover {

  transform:
    translateX(4px);
}


.view-all:active {

  transform:
    translateX(6px);
}


/* =========================================================
   PRODUCT GRID
   ========================================================= */

.menu-container {

  max-width: 1390px;

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    repeat(
      4,
      minmax(0, 1fr)
    );

  gap: 18px;
}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

.menu-card {

  position: relative;

  min-width: 0;

  overflow: hidden;

  background: var(--card);

  border:
    1px solid
    var(--border-light);

  cursor: pointer;

  transition:
    transform .35s ease,
    box-shadow .35s ease;
}


.menu-card:hover {

  transform:
    translateY(-5px);

  box-shadow:
    0 18px 35px
    rgba(0, 0, 0, .11);
}


/* =========================================================
   PRODUCT IMAGE
   ========================================================= */

.menu-card-image {

  position: relative;

  aspect-ratio:
    4 / 4.6;

  overflow: hidden;

  background:
    var(--surface-2);
}


.menu-card-image img {

  width: 100%;
  height: 100%;

  object-fit: cover;

  transition:
    transform
    .55s
    cubic-bezier(.2, .7, .2, 1);
}


.menu-card:hover
.menu-card-image img {

  transform:
    scale(1.045);
}


/* =========================================================
   IMAGE PLACEHOLDER
   ========================================================= */

.menu-card-placeholder {

  width: 100%;
  height: 100%;

  display: grid;

  place-items: center;

  padding: 20px;

  color: var(--gold);

  background:

    radial-gradient(
      circle at center,
      rgba(176, 138, 75, .12),
      transparent 55%
    ),

    var(--surface-2);

  font-family:
    "Playfair Display",
    serif;

  font-size: 1.1rem;

  text-align: center;
}


/* =========================================================
   PRODUCT CONTENT
   ========================================================= */

.menu-card-content {

  padding:
    17px
    17px
    19px;
}


.menu-card-category {

  margin-bottom: 7px;

  color: var(--gold);

  font-size: .53rem;

  letter-spacing: .15em;

  text-transform: uppercase;
}


.menu-card h3 {

  min-height: 2.7em;

  color: var(--text);

  font-family:
    "Playfair Display",
    serif;

  font-size: 1.15rem;

  line-height: 1.15;

  font-weight: 500;
}


.menu-card-price {

  margin-top: 13px;

  color: var(--gold);

  font-size: .90rem;

  font-weight: 600;
}


/* =========================================================
   PRODUCT DESCRIPTION
   ========================================================= */

.menu-card-content > p {

  margin-top: 9px;

  color: var(--muted);

  font-size: .72rem;

  line-height: 1.45;

  display:
    -webkit-box;

  -webkit-line-clamp: 3;

  -webkit-box-orient: vertical;

  overflow: hidden;
}


/* =========================================================
   FEATURE SECTION
   ========================================================= */

.feature-section {

  max-width: 1390px;

  margin:
    0 auto;

  padding:
    clamp(50px, 7vw, 90px)
    clamp(24px, 5vw, 70px);

  display: grid;

  grid-template-columns:
    .9fr
    1.1fr;

  align-items: center;

  gap:
    clamp(35px, 7vw, 100px);

  background:
    var(--surface-2);
}


.feature-copy {

  max-width: 520px;
}


.feature-copy h2 {

  font-family:
    "Playfair Display",
    serif;

  font-size:
    clamp(
      3.1rem,
      5.5vw,
      5.6rem
    );

  line-height: .90;

  font-weight: 400;

  letter-spacing: -.035em;
}


.feature-copy h2 em {

  color: var(--gold);

  font-style: italic;
}


.feature-copy > p:not(.eyebrow) {

  max-width: 460px;

  margin:
    22px 0
    28px;

  color: var(--muted);

  font-size: .92rem;
}


.feature-visual {

  position: relative;

  overflow: hidden;
}


.feature-visual img {

  width: 100%;

  aspect-ratio:
    1.18 / 1;

  object-fit: cover;

  transition:
    transform
    .60s
    cubic-bezier(.2, .7, .2, 1);
}


.feature-visual:hover img {

  transform:
    scale(1.025);
}


.feature-badge {

  position: absolute;

  right: 18px;

  bottom: 18px;

  padding:
    10px
    13px;

  background:
    rgba(23, 19, 15, .88);

  color: var(--gold-light);

  font-size: .55rem;

  letter-spacing: .16em;
}


/* =========================================================
   FOOTER
   ========================================================= */

.site-footer {

  padding:
    52px
    clamp(24px, 8vw, 120px);

  display: flex;

  justify-content: space-between;

  gap: 30px;

  background: var(--bg);

  color: var(--text-light);
}


.site-footer p {

  margin-top: 13px;

  color:
    rgba(255, 253, 248, .55);

  font-size: .78rem;
}


.footer-links {

  display: flex;

  align-items: center;

  gap: 24px;
}


.footer-links a {

  color: var(--gold-light);

  font-size: .58rem;

  letter-spacing: .14em;

  transition:
    color var(--transition);
}


.footer-links a:hover {

  color: var(--text-light);
}


/* =========================================================
   MODAL
   ========================================================= */

.modal {

  position: fixed;

  inset: 0;

  z-index: 300;

  display: grid;

  place-items: center;

  padding: 22px;

  opacity: 0;

  pointer-events: none;

  transition:
    opacity .30s ease;
}


.modal.is-open {

  opacity: 1;

  pointer-events: auto;
}


.modal-backdrop {

  position: absolute;

  inset: 0;

  background:
    rgba(15, 12, 9, .78);

  backdrop-filter:
    blur(8px);
}


/* =========================================================
   MODAL PRODUCT
   ========================================================= */

.product-detail {

  position: relative;

  z-index: 1;

  width:
    min(900px, 100%);

  max-height:
    min(720px, 92vh);

  display: grid;

  grid-template-columns:
    1fr
    1fr;

  overflow: hidden;

  background: var(--card);

  box-shadow:
    0 30px 90px
    rgba(0, 0, 0, .35);

  transform:
    translateY(20px)
    scale(.98);

  transition:
    transform
    .35s
    cubic-bezier(.2, .7, .2, 1);
}


.modal.is-open
.product-detail {

  transform:
    translateY(0)
    scale(1);
}


/* =========================================================
   MODAL CLOSE
   ========================================================= */

.modal-close {

  position: absolute;

  top: 13px;
  right: 13px;

  z-index: 3;

  width: 38px;
  height: 38px;

  border:
    1px solid
    rgba(255, 255, 255, .35);

  background:
    rgba(23, 19, 15, .72);

  color: var(--text-light);

  font-size: 1.4rem;

  cursor: pointer;

  transition:
    background var(--transition);
}


.modal-close:hover {

  background: var(--gold);
}


/* =========================================================
   MODAL IMAGE
   ========================================================= */

.detail-image-wrap {

  min-height: 400px;

  background:
    var(--surface-2);
}


.detail-image-wrap img {

  width: 100%;
  height: 100%;

  object-fit: cover;
}


/* =========================================================
   MODAL CONTENT
   ========================================================= */

.detail-content {

  align-self: center;

  padding:
    clamp(28px, 5vw, 60px);
}


.detail-content h2 {

  font-family:
    "Playfair Display",
    serif;

  font-size:
    clamp(
      2.4rem,
      4vw,
      4rem
    );

  line-height: .95;

  font-weight: 400;

  letter-spacing: -.035em;
}


.detail-content > p:not(.eyebrow) {

  margin-top: 18px;

  color: var(--muted);

  font-size: .90rem;
}


.detail-price {

  margin-top: 25px;

  color: var(--gold);

  font-size: 1.25rem;

  font-weight: 600;
}


/* =========================================================
   BACK TO TOP
   ========================================================= */

.back-to-top {

  position: fixed;

  right: 22px;

  bottom: 22px;

  z-index: 90;

  width: 42px;
  height: 42px;

  border:
    1px solid
    var(--gold);

  background:
    var(--bg);

  color:
    var(--gold-light);

  cursor: pointer;

  opacity: 0;

  transform:
    translateY(12px);

  pointer-events: none;

  transition:
    opacity var(--transition),
    transform var(--transition);
}


.back-to-top.is-visible {

  opacity: 1;

  transform:
    translateY(0);

  pointer-events: auto;
}


.back-to-top:hover {

  background: var(--gold);

  color: var(--bg);
}


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

.reveal {

  opacity: 0;

  transform:
    translateY(22px);

  transition:
    opacity .70s ease,
    transform .70s
    cubic-bezier(.2, .7, .2, 1);
}


.reveal.is-visible {

  opacity: 1;

  transform:
    translateY(0);
}


/* =========================================================
   CARD ANIMATION
   ========================================================= */

.card-reveal {

  animation:
    cardReveal
    .45s
    both;
}


@keyframes cardReveal {

  from {

    opacity: 0;

    transform:
      translateY(16px);
  }

  to {

    opacity: 1;

    transform:
      translateY(0);
  }
}


/* =========================================================
   HERO FLOAT
   ========================================================= */

@keyframes floatImage {

  0%,
  100% {

    transform:
      translateY(0);
  }

  50% {

    transform:
      translateY(-8px);
  }
}


/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 1120px) {

  .desktop-nav {

    gap: 14px;
  }


  .desktop-nav a {

    font-size: .57rem;
  }


  .hero {

    grid-template-columns:
      1fr
      .9fr;
  }


  .menu-container {

    grid-template-columns:
      repeat(
        3,
        minmax(0, 1fr)
      );
  }

}


/* =========================================================
   TABLET / MOBILE
   ========================================================= */

@media (max-width: 850px) {

  .desktop-nav,
  .header-actions .reserve-button {

    display: none;
  }


  .menu-toggle {

    display: block;
  }


  .hero {

    min-height: auto;

    grid-template-columns: 1fr;

    padding-top: 65px;

    padding-bottom: 55px;
  }


  .hero h1 {

    font-size:
      clamp(
        3.7rem,
        13vw,
        6.4rem
      );
  }


  .hero-visual {

    min-height: 430px;
  }


  .hero-visual img {

    width:
      min(70%, 390px);
  }


  .feature-section {

    margin:
      0 24px;

    grid-template-columns: 1fr;
  }


  .menu-container {

    grid-template-columns:
      repeat(
        2,
        minmax(0, 1fr)
      );
  }


  .product-detail {

    grid-template-columns: 1fr;

    max-height: 92vh;

    overflow-y: auto;
  }


  .detail-image-wrap {

    min-height: 300px;

    max-height: 48vh;
  }

}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 560px) {

  /* HEADER */

  .site-header {

    min-height: 68px;

    padding:
      0 18px;
  }


  .mobile-nav {

    inset:
      68px
      0
      auto
      0;
  }


  .brand-mark {

    width: 34px;
    height: 34px;
  }


  .brand-copy strong {

    font-size: .82rem;
  }


  /* HERO */

  .hero {

    padding:
      52px
      20px
      42px;
  }


  .hero h1 {

    font-size:
      clamp(
        3.35rem,
        16vw,
        5rem
      );
  }


  .hero-text {

    font-size: .86rem;
  }


  .hero-visual {

    min-height: 350px;
  }


  .hero-visual img {

    width: 72%;
  }


  .hero-caption {

    right: 3%;

    font-size: .50rem;
  }


  /* CATEGORY */

  .category-section {

    padding:
      25px
      18px
      17px;
  }


  .categories {

    margin-right: -18px;

    padding-right: 18px;
  }


  .category-chip {

    padding:
      11px
      15px;

    font-size: .58rem;
  }


  /* PRODUCTS */

  .products-section {

    padding:
      58px
      18px
      68px;
  }


  .section-heading {

    margin-bottom: 27px;
  }


  .section-heading h2 {

    font-size:
      clamp(
        2.35rem,
        12vw,
        3.6rem
      );
  }


  .menu-container {

    gap: 10px;
  }


  .menu-card-image {

    aspect-ratio:
      1 / 1.08;
  }


  .menu-card-content {

    padding: 12px;
  }


  .menu-card-category {

    font-size: .47rem;
  }


  .menu-card h3 {

    min-height: 3em;

    font-size: .96rem;
  }


  .menu-card-price {

    margin-top: 10px;

    font-size: .78rem;
  }


  .menu-card-content > p {

    font-size: .67rem;
  }


  /* FEATURE */

  .feature-section {

    margin:
      0 18px;

    padding:
      40px
      18px;
  }


  .feature-copy h2 {

    font-size:
      clamp(
        2.9rem,
        14vw,
        4.5rem
      );
  }


  /* FOOTER */

  .site-footer {

    padding:
      42px
      20px;

    flex-direction: column;
  }


  .footer-links {

    flex-wrap: wrap;

    gap:
      14px
      20px;
  }


  /* MODAL */

  .modal {

    padding: 12px;
  }


  .detail-image-wrap {

    min-height: 240px;
  }


  .detail-content {

    padding:
      28px
      24px
      32px;
  }


  .detail-content h2 {

    font-size: 2.7rem;
  }


  /* BACK TO TOP */

  .back-to-top {

    right: 15px;

    bottom: 15px;
  }

}


/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {

  html {

    scroll-behavior: auto;
  }


  *,
  *::before,
  *::after {

    animation-duration:
      .01ms !important;

    animation-iteration-count:
      1 !important;

    transition-duration:
      .01ms !important;
  }

}
