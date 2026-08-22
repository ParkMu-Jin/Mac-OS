/* ============================================================
   DATOS DE VERSIONES — PLACEHOLDER
   Reemplaza cada campo con la información real de tu investigación.
   Todas las páginas (línea de tiempo, versiones, comparación)
   leen de este mismo arreglo, así que solo necesitas editar aquí.
   ============================================================ */

const VERSIONS = [
  {
    id: "v1",
    name: "[Nombre de la versión 1]",
    codename: "[Codename]",
    version: "10.x",
    year: "20XX",
    summary: "[Resumen breve de esta versión: qué la definió y por qué importa en la línea de tiempo de macOS.]",
    features: [
      "[Característica destacada 1]",
      "[Característica destacada 2]",
      "[Característica destacada 3]",
    ],
    specs: {
      requisitos: "[Requisitos mínimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad técnica principal]",
    },
  },
  {
    id: "v2",
    name: "[Nombre de la versión 2]",
    codename: "[Codename]",
    version: "11.x",
    year: "20XX",
    summary: "[Resumen breve de esta versión.]",
    features: [
      "[Característica destacada 1]",
      "[Característica destacada 2]",
      "[Característica destacada 3]",
    ],
    specs: {
      requisitos: "[Requisitos mínimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad técnica principal]",
    },
  },
  {
    id: "v3",
    name: "[Nombre de la versión 3]",
    codename: "[Codename]",
    version: "12.x",
    year: "20XX",
    summary: "[Resumen breve de esta versión.]",
    features: [
      "[Característica destacada 1]",
      "[Característica destacada 2]",
      "[Característica destacada 3]",
    ],
    specs: {
      requisitos: "[Requisitos mínimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad técnica principal]",
    },
  },
  {
    id: "v4",
    name: "[Nombre de la versión 4]",
    codename: "[Codename]",
    version: "13.x",
    year: "20XX",
    summary: "[Resumen breve de esta versión.]",
    features: [
      "[Característica destacada 1]",
      "[Característica destacada 2]",
      "[Característica destacada 3]",
    ],
    specs: {
      requisitos: "[Requisitos mínimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad técnica principal]",
    },
  },
  {
    id: "v5",
    name: "[Nombre de la versión 5]",
    codename: "[Codename]",
    version: "14.x",
    year: "20XX",
    summary: "[Resumen breve de esta versión.]",
    features: [
      "[Característica destacada 1]",
      "[Característica destacada 2]",
      "[Característica destacada 3]",
    ],
    specs: {
      requisitos: "[Requisitos mínimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad técnica principal]",
    },
  },
  {
    id: "v6",
    name: "[Nombre de la versión 6]",
    codename: "[Codename]",
    version: "15.x",
    year: "20XX",
    summary: "[Resumen breve de esta versión.]",
    features: [
      "[Característica destacada 1]",
      "[Característica destacada 2]",
      "[Característica destacada 3]",
    ],
    specs: {
      requisitos: "[Requisitos mínimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad técnica principal]",
    },
  },
];
/* ============================================================
   INTERACCIÓN COMPARTIDA
   Lee VERSIONS desde data.js y construye:
   - el sendero interactivo (timeline.html)
   - las secciones por versión (versiones.html)
   - el comparador (comparacion.html)
   - el reveal en scroll (impacto.html)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initTrail();
  initVersionSections();
  initComparator();
  initScrollReveal();
});

/* ---------- NAV MÓVIL ---------- */
function initMobileNav() {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

/* ---------- SENDERO / LÍNEA DE TIEMPO ---------- */
function initTrail() {
  const track = document.querySelector(".trail__track");
  const pathEl = document.querySelector(".trail__path");
  const detail = document.querySelector(".trail__detail");
  if (!track || typeof VERSIONS === "undefined") return;

  const width = Math.max(960, VERSIONS.length * 170);
  track.style.minWidth = width + "px";

  const points = VERSIONS.map((v, i) => {
    const x = 90 + i * ((width - 180) / (VERSIONS.length - 1 || 1));
    const wobble = i % 2 === 0 ? 40 : 110;
    return { x, y: wobble, v };
  });

  // dibuja el sendero como una curva suave (topografía) entre puntos
  if (pathEl) {
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midX = (prev.x + curr.x) / 2;
      d += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
    }
    pathEl.innerHTML = `<path d="${d}"></path>`;
    pathEl.setAttribute("viewBox", `0 0 ${width} 180`);
    pathEl.setAttribute("preserveAspectRatio", "none");
  }

  points.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.className = "trail__point";
    btn.style.left = p.x + "px";
    btn.style.top = p.y + "px";
    btn.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    btn.innerHTML = `
      <span class="trail__dot"></span>
      <span class="trail__label">${p.v.version} · ${p.v.year}</span>
    `;
    btn.addEventListener("click", () => selectVersion(p.v, btn));
    track.appendChild(btn);
  });

  function selectVersion(v, btn) {
    track.querySelectorAll(".trail__point").forEach((el) =>
      el.setAttribute("aria-pressed", String(el === btn))
    );
    if (!detail) return;
    detail.querySelector(".trail__detail-name").textContent = v.name;
    detail.querySelector(".trail__detail-code").textContent =
      `${v.codename} — macOS ${v.version}`;
    detail.querySelector(".trail__detail-summary").textContent = v.summary;
    detail.querySelector(".trail__detail-features").innerHTML = v.features
      .map((f) => `<li>${f}</li>`)
      .join("");
  }

  if (points.length) selectVersion(points[0].v, track.querySelector(".trail__point"));
}

/* ---------- SECCIONES POR VERSIÓN ---------- */
function initVersionSections() {
  const host = document.querySelector("[data-version-sections]");
  if (!host || typeof VERSIONS === "undefined") return;

  host.innerHTML = VERSIONS.map((v, i) => `
    <article class="version" id="${v.id}">
      <div class="version__media" role="img" aria-label="Captura de pantalla — ${v.name}"></div>
      <div class="version__body">
        <div class="version__index">${String(i + 1).padStart(2, "0")} / ${String(VERSIONS.length).padStart(2, "0")}</div>
        <h2 class="version__name">${v.name}</h2>
        <div class="version__code">${v.codename} — macOS ${v.version} · ${v.year}</div>
        <p class="version__summary">${v.summary}</p>
        <ul class="version__features">
          ${v.features.map((f) => `<li>${f}</li>`).join("")}
        </ul>
        <dl class="version__specs">
          <div><dt>Requisitos</dt><dd>${v.specs.requisitos}</dd></div>
          <div><dt>Arquitectura</dt><dd>${v.specs.arquitectura}</dd></div>
          <div><dt>Novedad técnica</dt><dd>${v.specs.novedad}</dd></div>
        </dl>
      </div>
    </article>
  `).join("");
}

/* ---------- COMPARADOR ---------- */
function initComparator() {
  const selectA = document.querySelector("#compare-a");
  const selectB = document.querySelector("#compare-b");
  const tbody = document.querySelector("#compare-body");
  const heads = document.querySelectorAll("#compare-head-a, #compare-head-b");
  if (!selectA || !selectB || typeof VERSIONS === "undefined") return;

  [selectA, selectB].forEach((sel, idx) => {
    sel.innerHTML = VERSIONS.map((v, i) =>
      `<option value="${v.id}" ${i === (idx === 0 ? 0 : 1) ? "selected" : ""}>${v.name} (${v.version})</option>`
    ).join("");
  });

  function render() {
    const a = VERSIONS.find((v) => v.id === selectA.value);
    const b = VERSIONS.find((v) => v.id === selectB.value);
    if (!a || !b || !tbody) return;

    document.querySelector("#compare-head-a").textContent = a.name;
    document.querySelector("#compare-head-b").textContent = b.name;

    const rows = [
      ["Codename", a.codename, b.codename],
      ["Año", a.year, b.year],
      ["Versión", a.version, b.version],
      ["Requisitos", a.specs.requisitos, b.specs.requisitos],
      ["Arquitectura", a.specs.arquitectura, b.specs.arquitectura],
      ["Novedad técnica", a.specs.novedad, b.specs.novedad],
      ["Características", a.features.join(" · "), b.features.join(" · ")],
    ];

    tbody.innerHTML = rows.map(([label, va, vb]) => `
      <tr>
        <th scope="row">${label}</th>
        <td>${va}</td>
        <td>${vb}</td>
      </tr>
    `).join("");
  }

  selectA.addEventListener("change", render);
  selectB.addEventListener("change", render);
  render();
}

/* ---------- REVEAL EN SCROLL (página de impacto) ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll(".impact-card");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => io.observe(el));
}
