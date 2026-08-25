/* BLOQUE: GALERÍAS DE CAPTURAS PARA EL VISOR DE LA PÁGINA DE COMPARACIÓN */
const GALERIAS_COMPARACION = {
  a: {
    nombre: "Mac OS X 10.0",
    imagenes: [
      "https://media.512pixels.net/downloads/macos-screenshots/10-0/10-0-Cheetah-About-This-Mac.png",
      "https://preview.redd.it/on-this-day-25-years-ago-i-e-in-2001-mac-os-x-10-0-cheetah-v0-o6qzg8dv54rg1.png?width=640&crop=smart&auto=webp&s=c57107a546124ef93f7440ce0146e2378a586587",
      "https://cdn.arstechnica.net/wp-content/uploads/archive/reviews/01q2/macos-x-final/images/home-dir-big.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhvbqcUX8vGjkNdpxQpIND35YgWRZn6_u5o0QxWkfxpoc1S_dAwOhBJSx&s=10",
    ],
  },
  b: {
    nombre: "macOS Golden Gate 27",
    imagenes: [
      "https://photos5.appleinsider.com/gallery/67811-143050-000-macOS-GG-017-xl.jpg",
      "https://platform.theverge.com/wp-content/uploads/sites/2/2026/07/Screenshot-2026-07-13-at-11.41.37-AM.png?quality=90&strip=all&crop=1.5190972222222%2C0%2C96.961805555556%2C100&w=2400",
      "https://static2.pisapapeles.net/uploads/2026/06/descarga-10.webp",
      "https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_uigHOhGfBDba3gUu-a_Oy9s8XJgVRp1RWdAUvi8J4ABc6SKt4r55S9B14Yja2oSyXFlKl4h15WKDWooblD4yHI-JGN-KJJE8Zqq592AlwpGnZyAayxklmUc5we-LdZvt4B-wWnNfCGeQ=w1200-h675-p-k-no-nu",
    ],
  },
};

document.addEventListener("DOMContentLoaded", () => {
  iniciarRevelado();
  iniciarVisor();
});

/* BLOQUE: REVELADO EN SCROLL DE CADA CATEGORÍA */
function iniciarRevelado() {
  const items = document.querySelectorAll(".comp__item");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("es-visible"));
    return;
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("es-visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => observador.observe(el));
}

/* BLOQUE: VISOR DE IMÁGENES (pantalla grande + barra lateral por sistema) */
function iniciarVisor() {
  const visor = document.querySelector("#visor");
  const disparadores = document.querySelectorAll("[data-abrir-visor]");
  if (!visor || !disparadores.length) return;

  const imagenPrincipal = visor.querySelector("#visor-imagen");
  const nombreEl = visor.querySelector("#visor-nombre");
  const contadorEl = visor.querySelector("#visor-contador");
  const lateral = visor.querySelector("#visor-lateral");
  const btnAnterior = visor.querySelector("[data-visor-anterior]");
  const btnSiguiente = visor.querySelector("[data-visor-siguiente]");

  let ladoActual = null;
  let indiceActual = 0;
  let elementoDisparador = null;

  function mostrarIndice(indice) {
    const galeria = GALERIAS_COMPARACION[ladoActual];
    if (!galeria) return;
    const total = galeria.imagenes.length;
    indiceActual = (indice + total) % total;

    imagenPrincipal.src = galeria.imagenes[indiceActual];
    imagenPrincipal.alt = `${galeria.nombre} — captura ${indiceActual + 1}`;
    contadorEl.textContent = `${String(indiceActual + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

    lateral.querySelectorAll(".visor__miniatura").forEach((btn, i) => {
      btn.classList.toggle("es-activa", i === indiceActual);
    });
  }

  function construirLateral() {
    const galeria = GALERIAS_COMPARACION[ladoActual];
    lateral.innerHTML = galeria.imagenes
      .map(
        (src, i) => `
      <button class="visor__miniatura" type="button" data-indice="${i}" aria-label="Ver captura ${i + 1} de ${galeria.nombre}">
        <img src="${src}" alt="" loading="lazy">
      </button>`
      )
      .join("");

    lateral.querySelectorAll(".visor__miniatura").forEach((btn) => {
      btn.addEventListener("click", () => mostrarIndice(Number(btn.dataset.indice)));
    });
  }

  function abrir(lado, indiceInicial, disparador) {
    if (!GALERIAS_COMPARACION[lado]) return;
    ladoActual = lado;
    elementoDisparador = disparador;
    nombreEl.textContent = GALERIAS_COMPARACION[lado].nombre;

    construirLateral();
    mostrarIndice(indiceInicial);

    visor.classList.add("esta-abierto");
    visor.setAttribute("aria-hidden", "false");
    document.body.classList.add("sin-scroll");
    visor.querySelector(".visor__cerrar").focus();
  }

  function cerrar() {
    visor.classList.remove("esta-abierto");
    visor.setAttribute("aria-hidden", "true");
    document.body.classList.remove("sin-scroll");
    if (elementoDisparador) elementoDisparador.focus();
  }

  disparadores.forEach((el) => {
    el.addEventListener("click", () => abrir(el.dataset.abrirVisor, 0, el));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        abrir(el.dataset.abrirVisor, 0, el);
      }
    });
  });

  visor.querySelectorAll("[data-cerrar-visor]").forEach((el) => {
    el.addEventListener("click", cerrar);
  });

  if (btnAnterior) btnAnterior.addEventListener("click", () => mostrarIndice(indiceActual - 1));
  if (btnSiguiente) btnSiguiente.addEventListener("click", () => mostrarIndice(indiceActual + 1));

  document.addEventListener("keydown", (e) => {
    if (!visor.classList.contains("esta-abierto")) return;
    if (e.key === "Escape") cerrar();
    if (e.key === "ArrowLeft") mostrarIndice(indiceActual - 1);
    if (e.key === "ArrowRight") mostrarIndice(indiceActual + 1);
  });
}
