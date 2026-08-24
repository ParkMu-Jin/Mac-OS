/* ============================================================
   DATOS DE VERSIONES — PLACEHOLDER
   Reemplaza cada campo con la información real de tu investigación.
   Todas las páginas (línea de tiempo, versiones, comparación)
   leen de este mismo arreglo, así que solo necesitas editar aquí.
   ============================================================ */

const VERSIONS = [
  {
    id: "v1",
    name: "Macintosh System Software 1.0",
    codename: "Interfaz gráfica",
    version: "1.0",
    year: "1984",
    summary: "Fue el sistema operativo original del Macintosh y popularizó una forma de interacción basada en elementos gráficos, en lugar de depender exclusivamente de comandos.",
    features: [
      "Mejora principal: Introdujo ventanas, iconos, menús, carpetas y la papelera.",
      "Impacto en el desarrollo de software: Impulsó el desarrollo de aplicaciones con interfaces gráficas, haciendo que los programas fueran más visuales y fáciles de utilizar.",
      "Experiencia de usuario: Permitió interactuar con el computador mediante ratón y elementos gráficos, haciendo la informática más accesible.",
    ],
    specs: {
      requisitos: "[Requisitos mínimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "Interfaz gráfica",
    },
  },
  {
    id: "v2",
    name: "System 7",
    codename: "Multitarea",
    version: "7",
    year: "1991",
    summary: "System 7 representó una importante evolución del Macintosh al mejorar la administración de memoria, archivos y recursos del sistema.",
    features: [
      "Mejora principal: Incorporó una mejor gestión de memoria y capacidades de multitarea cooperativa.",
      "Impacto en el desarrollo de software: Permitió crear aplicaciones más completas y profesionales, aprovechando mejor los recursos del sistema.",
      "Experiencia de usuario: Facilitó trabajar con varias aplicaciones y archivos, haciendo el entorno más organizado y productivo.",
    ],
    specs: {
      requisitos: "[Requisitos mínimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad técnica principal]",
    },
  },
  {
    id: "v3",
    name: "Mac OS 8",
    codename: "Finder renovado",
    version: "8",
    year: "1997",
    summary: "Mac OS 8 modernizó considerablemente el entorno visual del Macintosh y el Finder.",
    features: [
      "Mejora principal: Renovó el Finder y mejoró la administración de archivos y carpetas.",
      "Impacto en el desarrollo de software: Favoreció aplicaciones orientadas a productividad, multimedia e Internet.",
      "Experiencia de usuario: Introdujo una interfaz más colorida y moderna, haciendo la navegación por archivos más intuitiva.",
    ],
    specs: {
      requisitos: "[Requisitos mínimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad técnica principal]",
    },
  },
  {
    id: "v4",
    name: "Mac OS 9",
    codename: "Conectividad",
    version: "9",
    year: "1999",
    summary: "Mac OS 9 fue la última gran versión de la línea clásica de Mac OS antes de la transición hacia Mac OS X.",
    features: [
      "Mejora principal: Mejoró las funciones de Internet, redes y administración de usuarios.",
      "Impacto en el desarrollo de software: Facilitó el desarrollo de aplicaciones que utilizaban servicios de red y conectividad.",
      "Experiencia de usuario: Permitió compartir información y recursos mediante redes de una manera más sencilla.",
    ],
    specs: {
      requisitos: "[Requisitos mínimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "[Novedad técnica principal]",
    },
  },
  {
    id: "v5",
    name: "Mac OS X 10.0 Cheetah",
    codename: "Cheetah",
    version: "10.0",
    year: "2001",
    summary: "Mac OS X introdujo una nueva arquitectura basada en tecnologías UNIX, proporcionando una base más moderna, estable y potente. Apple presentó además la nueva interfaz Aqua.",
    features: [
      "Mejora principal: Incorporó una arquitectura basada en UNIX, con mayor estabilidad y seguridad.",
      "Impacto en el desarrollo de software: Proporcionó herramientas y frameworks más avanzados para desarrollar aplicaciones profesionales.",
      "Experiencia de usuario: La interfaz Aqua introdujo transparencias, sombras, nuevos iconos y el Dock, transformando la apariencia del sistema.",
    ],
    specs: {
      requisitos: "[Requisitos mínimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "Arquitectura UNIX e interfaz Aqua",
    },
  },
  {
    id: "v6",
    name: "OS X Yosemite",
    codename: "Yosemite",
    version: "10.10",
    year: "2014",
    summary: "Yosemite modernizó la apariencia de OS X y aumentó la integración entre las computadoras Mac y otros dispositivos de Apple.",
    features: [
      "Mejora principal: Incorporó una interfaz visual más plana, limpia y moderna, junto con una mayor integración con los servicios de Apple.",
      "Impacto en el desarrollo de software: Favoreció el desarrollo de aplicaciones capaces de integrarse con el ecosistema Apple y sus servicios.",
      "Experiencia de usuario: Adoptó un diseño inspirado en iOS, con elementos más planos, transparencias y una apariencia visual más uniforme.",
    ],
    specs: {
      requisitos: "[Requisitos mínimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "Continuidad",
    },
  },
  {
    id: "v7",
    name: "macOS 11 Big Sur",
    codename: "Big Sur",
    version: "11",
    year: "2020",
    summary: "Big Sur marcó una importante renovación de macOS tanto en diseño como en arquitectura, preparando el ecosistema para la transición a los chips Apple Silicon.",
    features: [
      "Mejora principal: Rediseñó la interfaz y preparó macOS para funcionar con los nuevos chips Apple Silicon.",
      "Impacto en el desarrollo de software: Los desarrolladores tuvieron que adaptar sus aplicaciones para funcionar tanto en Intel como en Apple Silicon.",
      "Experiencia de usuario: Introdujo nuevos iconos, controles, Centro de Control y elementos visuales inspirados en iOS, haciendo el sistema más coherente.",
    ],
    specs: {
      requisitos: "[Requisitos mínimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "Apple Silicon",
    },
  },
  {
    id: "v8",
    name: "macOS 26 Tahoe",
    codename: "Tahoe",
    version: "26",
    year: "2025",
    summary: "Tahoe representa una nueva etapa de macOS, con un rediseño visual basado en Liquid Glass, además de nuevas funciones de productividad, continuidad e inteligencia.",
    features: [
      "Mejora principal: Introdujo el nuevo diseño Liquid Glass, junto con nuevas funciones de Spotlight, Continuidad y Apple Intelligence.",
      "Impacto en el desarrollo de software: Los desarrolladores deben adaptar sus aplicaciones al nuevo lenguaje visual y aprovechar nuevas capacidades del sistema.",
      "Experiencia de usuario: El escritorio, Dock, barras de herramientas, iconos y controles adquieren una apariencia más translúcida, dinámica y personalizable.",
    ],
    specs: {
      requisitos: "[Requisitos mínimos]",
      arquitectura: "[Arquitectura de procesador soportada]",
      novedad: "Liquid Glass",
    },
  },
];
/* ============================================================
   ILUSTRACIONES POR ERA — escenas SVG que evocan cada sistema
   Se muestran dentro del escritorio de época (.oswall).
   Los ids de <defs> llevan prefijo único para evitar colisiones.
   ============================================================ */

const ART = {
  v1: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <defs>
      <pattern id="art1-dither" width="2" height="2" patternUnits="userSpaceOnUse">
        <rect width="2" height="2" fill="#c8c5ba"/>
        <rect width="1" height="1" fill="#8f8c82"/><rect x="1" y="1" width="1" height="1" fill="#8f8c82"/>
      </pattern>
      <pattern id="art1-titlebar" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect width="4" height="2" fill="#cfccbf"/><rect y="2" width="4" height="2" fill="#faf9f4"/>
      </pattern>
    </defs>
    <!-- fondo tramado 1-bit -->
    <rect width="400" height="300" fill="url(#art1-dither)"/>

    <!-- barra de menús -->
    <rect width="400" height="16" fill="#000"/>
    <path d="M10 4c0-1 .8-1.8 1.8-1.8.7 0 1.3.4 1.6.9-.7.4-1 1-1 1.7 0 .8.5 1.5 1.2 1.7-.3.7-.7 1.4-1.3 1.4-.5 0-.8-.3-1.3-.3s-.9.3-1.3.3c-.6 0-1.1-.8-1.5-1.6.6-.3 1-1 1-1.7z M11.4 1.9c-.1-.8.5-1.6 1.3-1.7.1.8-.5 1.6-1.3 1.7z" fill="#fff"/>
    <g font-family="'Silkscreen','JetBrains Mono',monospace" font-size="7.5" fill="#fff">
      <text x="30" y="11">File</text>
      <text x="56" y="11">Edit</text>
      <text x="86" y="11">View</text>
      <text x="118" y="11">Special</text>
    </g>

    <!-- ventana Finder -->
    <g>
      <rect x="46" y="34" width="252" height="58" fill="#fdfdfb" stroke="#111" stroke-width="2"/>
      <rect x="46" y="34" width="252" height="12" fill="url(#art1-titlebar)" stroke="#111" stroke-width="2"/>
      <rect x="51" y="37" width="8" height="7" fill="#fff" stroke="#111" stroke-width="1.2"/>
      <g font-family="'Silkscreen','JetBrains Mono',monospace" font-size="7" fill="#111" text-anchor="middle">
        <text x="172" y="72">The Macintosh Finder, Version 1.0 (18 Jan 84)</text>
        <text x="172" y="85">©1984 Apple Computer</text>
      </g>
    </g>

    <!-- ventana System Disk -->
    <g>
      <rect x="62" y="128" width="226" height="118" fill="#fdfdfb" stroke="#111" stroke-width="2"/>
      <rect x="62" y="128" width="226" height="14" fill="#fdfdfb" stroke="#111" stroke-width="2"/>
      <text x="175" y="139" font-family="'Silkscreen','JetBrains Mono',monospace" font-size="8" font-weight="bold" fill="#111" text-anchor="middle">System Disk</text>
      <!-- fila de datos -->
      <line x1="62" y1="142" x2="288" y2="142" stroke="#111" stroke-width="1.5"/>
      <line x1="62" y1="154" x2="288" y2="154" stroke="#111" stroke-width="1.5"/>
      <line x1="140" y1="142" x2="140" y2="154" stroke="#111" stroke-width="1.5"/>
      <line x1="212" y1="142" x2="212" y2="154" stroke="#111" stroke-width="1.5"/>
      <g font-family="'Silkscreen','JetBrains Mono',monospace" font-size="6" fill="#111">
        <text x="66" y="151">4 items</text><text x="144" y="151">324K in disk</text><text x="216" y="151">75K available</text>
      </g>
      <!-- carpetas -->
      <g stroke="#111" fill="#fdfdfb" stroke-width="1.5">
        <path d="M78 176h16l4 4h14v18H78z"/><path d="M120 176h16l4 4h14v18h-34z"/>
        <path d="M162 176h16l4 4h14v18h-34z"/><path d="M204 176h16l4 4h14v18h-34z"/>
      </g>
      <g font-family="'Silkscreen','JetBrains Mono',monospace" font-size="4.5" fill="#111" text-anchor="middle">
        <text x="93" y="207">System Folder</text>
        <text x="137" y="207">MacPaint 1.0</text>
        <text x="179" y="207">Utilities</text>
        <text x="223" y="207">Empty Folder</text>
      </g>
      <!-- scrollbars -->
      <rect x="276" y="156" width="12" height="76" fill="#fdfdfb" stroke="#111" stroke-width="1.5"/>
      <rect x="278" y="158" width="8" height="8" fill="#fff" stroke="#111"/><path d="M280 163h5l-2.5-3z" fill="#111"/>
      <rect x="278" y="222" width="8" height="8" fill="#fff" stroke="#111"/><path d="M280 225h5l-2.5 3z" fill="#111"/>
      <rect x="281" y="180" width="6" height="24" fill="url(#art1-titlebar)" stroke="#111" stroke-width=".8"/>
      <rect x="64" y="232" width="212" height="12" fill="#fdfdfb" stroke="#111" stroke-width="1.5"/>
      <rect x="66" y="234" width="8" height="8" fill="#fff" stroke="#111"/><path d="M67 236h5l-2.5 3z" fill="#111"/>
      <rect x="266" y="234" width="8" height="8" fill="#fff" stroke="#111"/><path d="M271 236h-5l2.5 3z" fill="#111"/>
      <rect x="90" y="235" width="40" height="8" fill="url(#art1-titlebar)" stroke="#111" stroke-width=".8"/>
    </g>

    <!-- iconos a la derecha -->
    <g font-family="'Silkscreen','JetBrains Mono',monospace" font-size="6" fill="#111" text-anchor="middle">
      <rect x="332" y="36" width="34" height="34" fill="url(#art1-dither)" stroke="#111" stroke-width="1.5"/>
      <text x="349" y="80">System Disk</text>
      <rect x="337" y="92" width="24" height="32" fill="#fdfdfb" stroke="#111" stroke-width="1.5"/>
      <path d="M341 98h16 M341 103h16 M341 108h16 M341 113h12" stroke="#111" stroke-width="1.2"/>
      <text x="349" y="134">Welcome</text>
      <rect x="336" y="148" width="26" height="30" rx="2" fill="#fdfdfb" stroke="#111" stroke-width="1.5"/>
      <rect x="342" y="152" width="14" height="10" fill="#fdfdfb" stroke="#111"/>
      <rect x="342" y="168" width="14" height="4" fill="#8f8c82"/>
      <text x="349" y="188">Infinite HD</text>
      <path d="M334 226h30l-3 34h-24z" fill="#fdfdfb" stroke="#111" stroke-width="1.5"/>
      <rect x="330" y="219" width="38" height="7" fill="#fdfdfb" stroke="#111" stroke-width="1.5"/>
      <path d="M340 233v20 M348 233v20 M356 233v20" stroke="#111" stroke-width="1.2"/>
      <text x="349" y="272">Trash</text>
    </g>

    <!-- cursor -->
    <path d="M292 96l0 14 3.5-3 2.5 6 3-1.3-2.5-5.5 5-.5z" fill="#111" stroke="#fdfdfb" stroke-width="1"/>
  </svg>`,

  v2: `<img src="IMG/system7-screenshot.jpg" alt="Escritorio de System 7 (1991)" style="width:100%;height:100%;object-fit:cover;" aria-hidden="true">`,

  v3: `<img src="IMG/macos8-screenshot.png" alt="Escritorio de Mac OS 8 (1997)" style="width:100%;height:100%;object-fit:contain;" aria-hidden="true">`,

  v4: `<img src="IMG/macos9-screenshot.jpg" alt="Escritorio de Mac OS 9 (1999)" style="width:100%;height:100%;object-fit:contain;" aria-hidden="true">`,

  v5: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <defs>
      <pattern id="art5-pins" width="3" height="3" patternUnits="userSpaceOnUse">
        <rect width="3" height="1" fill="rgba(255,255,255,.35)"/>
      </pattern>
      <linearGradient id="art5-gel" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#9fd0ff"/><stop offset=".45" stop-color="#2a72d4"/>
        <stop offset=".55" stop-color="#1a56ad"/><stop offset="1" stop-color="#4a92e6"/>
      </linearGradient>
    </defs>
    <rect x="70" y="48" width="260" height="150" rx="8" fill="#fdfeff" stroke="#aec3de" stroke-width="2"/>
    <path d="M70 56a8 8 0 018-8h244a8 8 0 018 8v22H70z" fill="url(#art5-gel)"/>
    <rect x="70" y="48" width="260" height="30" rx="8" fill="url(#art5-pins)"/>
    <g>
      <circle cx="88" cy="63" r="5.5" fill="#ff5f57" stroke="#c33"/><circle cx="106" cy="63" r="5.5" fill="#febc2e" stroke="#b83"/><circle cx="124" cy="63" r="5.5" fill="#28c840" stroke="#161"/>
    </g>
    <text x="200" y="67" font-family="'PT Sans',sans-serif" font-size="11" font-weight="bold" fill="#f4f8ff" text-anchor="middle">Mac OS X</text>
    <rect x="92" y="92" width="216" height="6" rx="3" fill="#dbe7f6"/>
    <rect x="92" y="106" width="170" height="6" rx="3" fill="#dbe7f6"/>
    <rect x="92" y="120" width="192" height="6" rx="3" fill="#dbe7f6"/>
    <!-- Dock con botones "gel" -->
    <rect x="86" y="222" width="228" height="44" rx="14" fill="rgba(255,255,255,.35)" stroke="rgba(255,255,255,.7)" stroke-width="1.5"/>
    <g>
      <rect x="100" y="230" width="28" height="28" rx="7" fill="url(#art5-gel)"/>
      <rect x="136" y="230" width="28" height="28" rx="7" fill="url(#art5-gel)" opacity=".85"/>
      <rect x="172" y="230" width="28" height="28" rx="7" fill="#7ecbff"/>
      <rect x="208" y="230" width="28" height="28" rx="7" fill="#8fe08f"/>
      <rect x="244" y="230" width="28" height="28" rx="7" fill="#ffd57e"/>
    </g>
  </svg>`,

  v6: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <rect x="70" y="50" width="260" height="160" rx="8" fill="rgba(250,250,252,.92)" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>
    <g>
      <circle cx="92" cy="68" r="6" fill="#ff5f57"/><circle cx="110" cy="68" r="6" fill="#febc2e"/><circle cx="128" cy="68" r="6" fill="#28c840"/>
    </g>
    <rect x="92" y="94" width="180" height="7" rx="3.5" fill="#d8dade"/>
    <rect x="92" y="108" width="216" height="7" rx="3.5" fill="#e3e5ea"/>
    <rect x="92" y="122" width="150" height="7" rx="3.5" fill="#e3e5ea"/>
    <!-- dock plano estilo iOS -->
    <rect x="82" y="226" width="236" height="42" rx="12" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.45)" stroke-width="1.5"/>
    <g>
      <rect x="96" y="232" width="30" height="30" rx="8" fill="#0a84ff"/>
      <rect x="136" y="232" width="30" height="30" rx="8" fill="#34c759"/>
      <rect x="176" y="232" width="30" height="30" rx="8" fill="#ff9f0a"/>
      <rect x="216" y="232" width="30" height="30" rx="8" fill="#ff375f"/>
      <rect x="256" y="232" width="30" height="30" rx="8" fill="#af52de"/>
      <circle cx="111" cy="247" r="8" fill="#fff" opacity=".85"/>
      <path d="M143 256l8-9 8 9z" fill="#fff" opacity=".85"/>
      <path d="M183 240l16 7-16 7z" fill="#fff" opacity=".85"/>
      <rect x="222" y="240" width="18" height="3" fill="#fff" opacity=".85"/>
      <rect x="222" y="246" width="18" height="3" fill="#fff" opacity=".85"/>
      <rect x="222" y="252" width="12" height="3" fill="#fff" opacity=".85"/>
      <circle cx="271" cy="245" r="5" fill="#fff" opacity=".85"/>
      <path d="M264 258c2-6 12-6 14 0z" fill="#fff" opacity=".85"/>
    </g>
  </svg>`,

  v7: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <defs>
      <linearGradient id="art7-ic1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ff7a59"/><stop offset="1" stop-color="#ff4d8d"/>
      </linearGradient>
      <linearGradient id="art7-ic2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#7a5cff"/><stop offset="1" stop-color="#3aa6ff"/>
      </linearGradient>
    </defs>
    <!-- Centro de Control -->
    <rect x="96" y="52" width="150" height="128" rx="18" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.3)" stroke-width="1.5"/>
    <rect x="110" y="66" width="56" height="34" rx="9" fill="rgba(255,255,255,.16)"/>
    <rect x="174" y="66" width="56" height="34" rx="9" fill="rgba(255,255,255,.16)"/>
    <circle cx="126" cy="83" r="8" fill="url(#art7-ic1)"/>
    <circle cx="190" cy="83" r="8" fill="url(#art7-ic2)"/>
    <rect x="110" y="114" width="120" height="8" rx="4" fill="rgba(255,255,255,.2)"/>
    <rect x="110" y="114" width="76" height="8" rx="4" fill="#ff8fa3"/>
    <circle cx="186" cy="118" r="7" fill="#fff"/>
    <rect x="110" y="134" width="120" height="8" rx="4" fill="rgba(255,255,255,.2)"/>
    <rect x="110" y="134" width="100" height="8" rx="4" fill="#9d8cff"/>
    <circle cx="210" cy="138" r="7" fill="#fff"/>
    <rect x="110" y="156" width="52" height="12" rx="6" fill="rgba(255,255,255,.2)"/>
    <rect x="166" y="156" width="52" height="12" rx="6" fill="rgba(255,255,255,.2)"/>
    <!-- Dock vidrio -->
    <rect x="76" y="224" width="248" height="46" rx="16" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.28)" stroke-width="1.5"/>
    <g>
      <rect x="92" y="232" width="30" height="30" rx="9" fill="url(#art7-ic1)"/>
      <rect x="132" y="232" width="30" height="30" rx="9" fill="url(#art7-ic2)"/>
      <rect x="172" y="232" width="30" height="30" rx="9" fill="#3aa6ff"/>
      <rect x="212" y="232" width="30" height="30" rx="9" fill="#ffb88c"/>
      <rect x="252" y="232" width="30" height="30" rx="9" fill="#ff5f8f"/>
    </g>
  </svg>`,

  v8: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <defs>
      <linearGradient id="art8-edge" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#7dd8ff"/><stop offset=".4" stop-color="#ba84ff"/>
        <stop offset=".7" stop-color="#7dd6ff"/><stop offset="1" stop-color="#ffaadc"/>
      </linearGradient>
    </defs>
    <!-- ventana Liquid Glass con borde iridiscente -->
    <rect x="82" y="52" width="236" height="140" rx="22" fill="rgba(255,255,255,.10)" stroke="url(#art8-edge)" stroke-width="2"/>
    <circle cx="120" cy="72" r="5.5" fill="#ff5f57" opacity=".9"/>
    <circle cx="138" cy="72" r="5.5" fill="#febc2e" opacity=".9"/>
    <circle cx="156" cy="72" r="5.5" fill="#28c840" opacity=".9"/>
    <rect x="104" y="94" width="150" height="7" rx="3.5" fill="rgba(255,255,255,.35)"/>
    <rect x="104" y="108" width="192" height="7" rx="3.5" fill="rgba(255,255,255,.22)"/>
    <rect x="104" y="122" width="120" height="7" rx="3.5" fill="rgba(255,255,255,.22)"/>
    <!-- Spotlight -->
    <rect x="104" y="146" width="192" height="26" rx="13" fill="rgba(255,255,255,.14)" stroke="rgba(125,216,255,.6)" stroke-width="1.5"/>
    <circle cx="120" cy="159" r="6" fill="none" stroke="#7dd8ff" stroke-width="2"/>
    <path d="M125 164l5 5" stroke="#7dd8ff" stroke-width="2" stroke-linecap="round"/>
    <rect x="136" y="155" width="90" height="7" rx="3.5" fill="rgba(255,255,255,.3)"/>
    <!-- burbujas glass -->
    <circle cx="330" cy="120" r="26" fill="rgba(186,132,255,.25)" stroke="rgba(255,255,255,.4)"/>
    <circle cx="310" cy="200" r="16" fill="rgba(125,216,255,.25)" stroke="rgba(255,255,255,.4)"/>
    <!-- Dock -->
    <rect x="76" y="222" width="248" height="48" rx="18" fill="rgba(255,255,255,.09)" stroke="rgba(255,255,255,.25)" stroke-width="1.5"/>
    <g>
      <rect x="92" y="231" width="30" height="30" rx="10" fill="rgba(125,216,255,.5)" stroke="rgba(255,255,255,.5)"/>
      <rect x="132" y="231" width="30" height="30" rx="10" fill="rgba(186,132,255,.5)" stroke="rgba(255,255,255,.5)"/>
      <rect x="172" y="231" width="30" height="30" rx="10" fill="rgba(125,255,214,.45)" stroke="rgba(255,255,255,.5)"/>
      <rect x="212" y="231" width="30" height="30" rx="10" fill="rgba(255,170,220,.45)" stroke="rgba(255,255,255,.5)"/>
      <rect x="252" y="231" width="30" height="30" rx="10" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.5)"/>
    </g>
  </svg>`,
};

/* ============================================================
   INTERACCIÓN COMPARTIDA
   Lee VERSIONS y construye:
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

/* respeta la preferencia del sistema de reducir movimiento */
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

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

/* resuelve el logo de una era a partir de su año:
   busca coincidencia exacta (1984.png) o dentro de un rango
   en el nombre del archivo (1997-1999.png, 2020-2025.jpg) */
function logoForYear(year) {
  const files = ["1984.png", "1991.png", "1997-1999.png", "2001.png", "2014.png", "2020-2025.jpg"];
  const y = parseInt(year, 10);
  const hit = files.find((f) => {
    const parts = f.replace(/\.(png|jpg)$/, "").split("-").map(Number);
    return y >= parts[0] && y <= (parts[1] || parts[0]);
  });
  return hit ? "img/" + hit : null;
}

function initTrail() {
  const track = document.querySelector(".trail__track");
  const pathEl = document.querySelector(".trail__path");
  const detail = document.querySelector(".trail__detail");
  if (!track || typeof VERSIONS === "undefined") return;

  // ancho virtual del sendero: el SVG escala al 100% del contenedor,
  // los puntos se posicionan en % para que todo quepa sin scroll
  const VW = 1360;
  const points = VERSIONS.map((v, i) => {
    const x = 90 + i * ((VW - 180) / (VERSIONS.length - 1 || 1));
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
    pathEl.setAttribute("viewBox", `0 0 ${VW} 180`);
    pathEl.setAttribute("preserveAspectRatio", "none");
  }

  function scrollToDetail() {
    if (!detail || prefersReducedMotion()) return;
    // lleva la vista al inicio del sendero para que la línea de tiempo
    // y el panel informativo queden visibles juntos en pantalla
    const host = detail.closest(".trail") || detail;
    host.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  points.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.className = "trail__point";
    btn.style.left = (p.x / VW) * 100 + "%";
    btn.style.top = p.y + "px";
    btn.style.setProperty("--d", i * 90 + "ms");
    btn.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    const logo = logoForYear(p.v.year);
    btn.innerHTML = `
      <span class="trail__tip">${p.v.name}</span>
      ${logo ? `<img class="trail__logo" src="${logo}" alt="Logo de ${p.v.name} (${p.v.year})" loading="lazy">` : ""}
      <span class="trail__num">${String(i + 1).padStart(2, "0")}</span>
      <span class="trail__dot"></span>
      <span class="trail__year">${p.v.year}</span>
    `;
    btn.addEventListener("click", () => {
      selectVersion(p.v, btn, i);
      scrollToDetail();
    });
    track.appendChild(btn);
  });

  function selectVersion(v, btn, i) {
    track.querySelectorAll(".trail__point").forEach((el) =>
      el.setAttribute("aria-pressed", String(el === btn))
    );
    if (!detail) return;

    // viste TODA la sección (hero, sendero, panel) con el tema de la época
    const main = detail.closest("main");
    if (main) {
      VERSIONS.forEach((x) => main.classList.remove("theme-" + x.id));
      main.classList.add("theme-" + v.id);
    }

    // el panel también rota su tema (viene con theme-v1 hardcodeado en el HTML)
    VERSIONS.forEach((x) => detail.classList.remove("theme-" + x.id));
    detail.classList.add("theme-" + v.id);

    // rota tema en el monitor de la línea de tiempo
    const monitor = detail.querySelector(".mac-monitor--timeline");
    if (monitor) {
      VERSIONS.forEach((x) => monitor.classList.remove("theme-" + x.id));
      monitor.classList.add("theme-" + v.id);
    }

    // controles de la ventana según la era (caja clásica vs semáforos)
    const ctl = detail.querySelector(".oswin__ctl");
    if (ctl) {
      ctl.innerHTML = i >= 4
        ? '<span class="oswin__lights"><i></i><i></i><i></i></span>'
        : '<span class="oswin__box" aria-hidden="true"></span>';
    }

    const titleEl = detail.querySelector(".trail__detail-title");
    if (titleEl) titleEl.textContent = v.name;

    detail.querySelector(".trail__detail-name").textContent = v.name;
    detail.querySelector(".trail__detail-code").textContent =
      `${v.codename} — macOS ${v.version} · ${v.year}`;
    detail.querySelector(".trail__detail-summary").textContent = v.summary;
    detail.querySelector(".trail__detail-features").innerHTML = v.features
      .map((f) => `<li>${f}</li>`)
      .join("");

    // escritorio de época dentro del panel
    const shotNum = detail.querySelector(".shot-num");
    if (shotNum) shotNum.textContent = String(i + 1).padStart(2, "0");
    const shotName = detail.querySelector(".shot-name");
    if (shotName) shotName.textContent = v.name;
    const shotYear = detail.querySelector(".shot-year");
    if (shotYear) shotYear.textContent = v.year;

    // ilustración de la era dentro del panel
    const hint = detail.querySelector(".oswall__hint");
    if (ART[v.id]) {
      if (hint) hint.remove();
      let art = detail.querySelector(".oswall__art");
      if (!art) {
        detail
          .querySelector(".trail__detail-shot")
          .insertAdjacentHTML("beforeend", `<span class="oswall__art">${ART[v.id]}</span>`);
      } else {
        art.innerHTML = ART[v.id];
      }
    }
    detail.setAttribute("aria-label",
      `Escritorio de la era ${v.name}`);

    // micro-transición al cambiar de era
    detail.classList.remove("is-swapping");
    void detail.offsetWidth;
    detail.classList.add("is-swapping");
  }

  if (points.length) {
    selectVersion(points[0].v, track.querySelector(".trail__point"), 0);
  }
}

/* ---------- SECCIONES POR VERSIÓN (ventanas de época) ---------- */
function initVersionSections() {
  const host = document.querySelector("[data-version-sections]");
  if (!host || typeof VERSIONS === "undefined") return;

  const total = String(VERSIONS.length).padStart(2, "0");
  host.innerHTML = VERSIONS.map((v, i) => {
    const num = String(i + 1).padStart(2, "0");
    const lights = i >= 4
      ? '<span class="oswin__lights"><i></i><i></i><i></i></span>'
      : '<span class="oswin__box" aria-hidden="true"></span>';
    return `
    <article class="version theme-${v.id}" id="${v.id}">
      <div class="mac-monitor theme-${v.id}">
        <div class="mac-monitor__body">
          <div class="mac-monitor__screen">
            <div class="oswall" role="img" aria-label="Escritorio de la era ${v.name}">
              <div class="oswall__menubar"><span>${v.name}</span><span>${v.year}</span></div>
              <span class="oswall__year" aria-hidden="true">${num}</span>
              ${ART[v.id]
                ? `<span class="oswall__art" aria-hidden="true">${ART[v.id]}</span>`
                : '<span class="oswall__hint">[ Espacio para tu captura ]</span>'}
            </div>
          </div>
          <div class="mac-monitor__chin">
            <span class="mac-monitor__logo"></span>
            <span class="mac-monitor__power"></span>
          </div>
        </div>
        <div class="mac-monitor__neck"></div>
        <div class="mac-monitor__base"></div>
      </div>
      <div class="oswin" data-tilt>
        <div class="oswin__chrome">
          ${lights}
          <span class="oswin__title">${v.name}</span>
          <span class="oswin__chrome-end" aria-hidden="true"></span>
        </div>
        <div class="version__body">
          <div class="version__index">${num} / ${total}</div>
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
      </div>
    </article>`;
  }).join("");

  initVersionReveal();
  initWindowTilt();
}

/* reveal escalonado de cada ventana al hacer scroll */
function initVersionReveal() {
  const items = document.querySelectorAll(".version");
  if (!items.length) return;
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (idx % 2) * 90 + "ms";
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
}

/* tilt 3D + reflejo especular que sigue el cursor */
function initWindowTilt() {
  if (window.matchMedia("(hover: none)").matches) return;
  document.querySelectorAll(".oswin[data-tilt]").forEach((win) => {
    win.addEventListener("mousemove", (e) => {
      const r = win.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      win.style.setProperty("--rx", (-y * 3.5).toFixed(2) + "deg");
      win.style.setProperty("--ry", (x * 4.5).toFixed(2) + "deg");
      win.style.setProperty("--mx", ((x + 0.5) * 100).toFixed(1) + "%");
      win.style.setProperty("--my", ((y + 0.5) * 100).toFixed(1) + "%");
    });
    win.addEventListener("mouseleave", () => {
      win.style.setProperty("--rx", "0deg");
      win.style.setProperty("--ry", "0deg");
    });
  });
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
