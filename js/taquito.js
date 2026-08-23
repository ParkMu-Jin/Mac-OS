const VERSIONES = [
  {
    id: "v1",
    nombre: "[Nombre de la version 1]",
    codigo: "[Codename]",
    version: "10.x",
    anio: "20XX",
    resumen: "[Resumen breve de esta version: que la definio y por que importa en la linea de tiempo de macOS.]",
    caracteristicas: [
      "[Caracteristica destacada 1]",
      "[Caracteristica destacada 2]",
      "[Caracteristica destacada 3]",
    ],
    ficha: {
      requisitos: "[Requisitos minimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad tecnica principal]",
    },
  },
  {
    id: "v2",
    nombre: "[Nombre de la version 2]",
    codigo: "[Codename]",
    version: "11.x",
    anio: "20XX",
    resumen: "[Resumen breve de esta version.]",
    caracteristicas: [
      "[Caracteristica destacada 1]",
      "[Caracteristica destacada 2]",
      "[Caracteristica destacada 3]",
    ],
    ficha: {
      requisitos: "[Requisitos minimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad tecnica principal]",
    },
  },
  {
    id: "v3",
    nombre: "[Nombre de la version 3]",
    codigo: "[Codename]",
    version: "12.x",
    anio: "20XX",
    resumen: "[Resumen breve de esta version.]",
    caracteristicas: [
      "[Caracteristica destacada 1]",
      "[Caracteristica destacada 2]",
      "[Caracteristica destacada 3]",
    ],
    ficha: {
      requisitos: "[Requisitos minimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad tecnica principal]",
    },
  },
  {
    id: "v4",
    nombre: "[Nombre de la version 4]",
    codigo: "[Codename]",
    version: "13.x",
    anio: "20XX",
    resumen: "[Resumen breve de esta version.]",
    caracteristicas: [
      "[Caracteristica destacada 1]",
      "[Caracteristica destacada 2]",
      "[Caracteristica destacada 3]",
    ],
    ficha: {
      requisitos: "[Requisitos minimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad tecnica principal]",
    },
  },
  {
    id: "v5",
    nombre: "[Nombre de la version 5]",
    codigo: "[Codename]",
    version: "14.x",
    anio: "20XX",
    resumen: "[Resumen breve de esta version.]",
    caracteristicas: [
      "[Caracteristica destacada 1]",
      "[Caracteristica destacada 2]",
      "[Caracteristica destacada 3]",
    ],
    ficha: {
      requisitos: "[Requisitos minimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad tecnica principal]",
    },
  },
  {
    id: "v6",
    nombre: "[Nombre de la version 6]",
    codigo: "[Codename]",
    version: "15.x",
    anio: "20XX",
    resumen: "[Resumen breve de esta version.]",
    caracteristicas: [
      "[Caracteristica destacada 1]",
      "[Caracteristica destacada 2]",
      "[Caracteristica destacada 3]",
    ],
    ficha: {
      requisitos: "[Requisitos minimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad tecnica principal]",
    },
  },
];

/* BLOQUE: ARRANQUE
   Lee VERSIONES y construye el sendero, las fichas de version,
   el comparador y el revelado en scroll. */
document.addEventListener("DOMContentLoaded", () => {
  iniciarMenuMovil();
  iniciarSendero();
  iniciarFichasVersion();
  iniciarComparador();
  iniciarRevelado();
});

/* BLOQUE: MENU MOVIL */
function iniciarMenuMovil() {
  const boton = document.querySelector(".menu__boton");
  const enlaces = document.querySelector(".menu__enlaces");
  if (!boton || !enlaces) return;

  boton.addEventListener("click", () => {
    const abierto = enlaces.classList.toggle("esta-abierto");
    boton.setAttribute("aria-expanded", String(abierto));
  });
}

/* BLOQUE: SENDERO / LINEA DE TIEMPO */
function iniciarSendero() {
  const pista = document.querySelector(".sendero__pista");
  const ruta = document.querySelector(".sendero__ruta");
  const detalle = document.querySelector(".sendero__detalle");
  if (!pista || typeof VERSIONES === "undefined") return;

  const ancho = Math.max(960, VERSIONES.length * 170);
  pista.style.minWidth = ancho + "px";

  const puntos = VERSIONES.map((v, i) => {
    const x = 90 + i * ((ancho - 180) / (VERSIONES.length - 1 || 1));
    const y = i % 2 === 0 ? 40 : 110;
    return { x, y, v };
  });

  // dibuja el sendero como una curva suave (topografia) entre puntos
  if (ruta) {
    let d = `M ${puntos[0].x} ${puntos[0].y}`;
    for (let i = 1; i < puntos.length; i++) {
      const anterior = puntos[i - 1];
      const actual = puntos[i];
      const puntoMedioX = (anterior.x + actual.x) / 2;
      d += ` C ${puntoMedioX} ${anterior.y}, ${puntoMedioX} ${actual.y}, ${actual.x} ${actual.y}`;
    }
    ruta.innerHTML = `<path d="${d}"></path>`;
    ruta.setAttribute("viewBox", `0 0 ${ancho} 180`);
    ruta.setAttribute("preserveAspectRatio", "none");
  }

  puntos.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.className = "sendero__punto";
    btn.style.left = p.x + "px";
    btn.style.top = p.y + "px";
    btn.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    btn.innerHTML = `
      <span class="sendero__marca"></span>
      <span class="sendero__etiqueta">${p.v.version} · ${p.v.anio}</span>
    `;
    btn.addEventListener("click", () => seleccionarVersion(p.v, btn));
    pista.appendChild(btn);
  });

  function seleccionarVersion(v, btn) {
    pista.querySelectorAll(".sendero__punto").forEach((el) =>
      el.setAttribute("aria-pressed", String(el === btn))
    );
    if (!detalle) return;
    detalle.querySelector(".sendero__detalle-nombre").textContent = v.nombre;
    detalle.querySelector(".sendero__detalle-codigo").textContent =
      `${v.codigo} — macOS ${v.version}`;
    detalle.querySelector(".sendero__detalle-resumen").textContent = v.resumen;
    detalle.querySelector(".sendero__detalle-lista").innerHTML = v.caracteristicas
      .map((c) => `<li>${c}</li>`)
      .join("");
  }

  if (puntos.length) seleccionarVersion(puntos[0].v, pista.querySelector(".sendero__punto"));
}

/* BLOQUE: FICHAS POR VERSION */
function iniciarFichasVersion() {
  const contenedor = document.querySelector("[data-secciones-version]");
  if (!contenedor || typeof VERSIONES === "undefined") return;

  contenedor.innerHTML = VERSIONES.map((v, i) => `
    <article class="version" id="${v.id}">
      <div class="version__imagen" role="img" aria-label="Captura de pantalla — ${v.nombre}"></div>
      <div class="version__cuerpo">
        <div class="version__numero">${String(i + 1).padStart(2, "0")} / ${String(VERSIONES.length).padStart(2, "0")}</div>
        <h2 class="version__nombre">${v.nombre}</h2>
        <div class="version__codigo">${v.codigo} — macOS ${v.version} · ${v.anio}</div>
        <p class="version__resumen">${v.resumen}</p>
        <ul class="version__lista">
          ${v.caracteristicas.map((c) => `<li>${c}</li>`).join("")}
        </ul>
        <dl class="version__ficha">
          <div><dt>Requisitos</dt><dd>${v.ficha.requisitos}</dd></div>
          <div><dt>Arquitectura</dt><dd>${v.ficha.arquitectura}</dd></div>
          <div><dt>Novedad tecnica</dt><dd>${v.ficha.novedad}</dd></div>
        </dl>
      </div>
    </article>
  `).join("");
}

/* BLOQUE: COMPARADOR */
function iniciarComparador() {
  const selectorA = document.querySelector("#comparar-a");
  const selectorB = document.querySelector("#comparar-b");
  const cuerpo = document.querySelector("#comparar-cuerpo");
  if (!selectorA || !selectorB || typeof VERSIONES === "undefined") return;

  [selectorA, selectorB].forEach((sel, idx) => {
    sel.innerHTML = VERSIONES.map((v, i) =>
      `<option value="${v.id}" ${i === (idx === 0 ? 0 : 1) ? "selected" : ""}>${v.nombre} (${v.version})</option>`
    ).join("");
  });

  function renderizar() {
    const a = VERSIONES.find((v) => v.id === selectorA.value);
    const b = VERSIONES.find((v) => v.id === selectorB.value);
    if (!a || !b || !cuerpo) return;

    document.querySelector("#comparar-cabecera-a").textContent = a.nombre;
    document.querySelector("#comparar-cabecera-b").textContent = b.nombre;

    const filas = [
      ["Codename", a.codigo, b.codigo],
      ["Año", a.anio, b.anio],
      ["Versión", a.version, b.version],
      ["Requisitos", a.ficha.requisitos, b.ficha.requisitos],
      ["Arquitectura", a.ficha.arquitectura, b.ficha.arquitectura],
      ["Novedad técnica", a.ficha.novedad, b.ficha.novedad],
      ["Características", a.caracteristicas.join(" · "), b.caracteristicas.join(" · ")],
    ];

    cuerpo.innerHTML = filas.map(([etiqueta, va, vb]) => `
      <tr>
        <th scope="row">${etiqueta}</th>
        <td>${va}</td>
        <td>${vb}</td>
      </tr>
    `).join("");
  }

  selectorA.addEventListener("change", renderizar);
  selectorB.addEventListener("change", renderizar);
  renderizar();
}

/* BLOQUE: REVELADO EN SCROLL (pagina de impacto) */
function iniciarRevelado() {
  const tarjetas = document.querySelectorAll(".tarjeta-impacto");
  if (!tarjetas.length) return;

  if (!("IntersectionObserver" in window)) {
    tarjetas.forEach((el) => el.classList.add("es-visible"));
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

  tarjetas.forEach((el) => observador.observe(el));
}
