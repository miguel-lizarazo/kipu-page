import type { Idioma } from "@/lib/i18n/idiomas";

/**
 * Todo el texto de la página vive aquí, en los tres idiomas de la app.
 * Se itera sobre la copia sin tocar el maquetado, y añadir una sección es
 * añadir una clave en los tres diccionarios.
 */

/** Invariable: no se traduce y lo usan los metadatos, que se generan en build. */
export const sitio = {
  nombre: "Kipu",
  // El que sale en la pestaña del navegador y en las tarjetas al compartir.
  nombreCompleto: "Kipu Technologies",
  tagline: "Recursos abiertos para la gestión pública",
  descripcion:
    "Kipu reúne herramientas de govtech open source pensadas para equipos de gobierno.",
} as const;

/* Las rutas no se traducen: una URL que cambia con el idioma se rompe al
   compartirla. Lo que cambia es la etiqueta de la pestaña. */
export const RUTAS = {
  about: "/about/",
  resources: "/resources/",
} as const;

export type Diccionario = {
  irAlInicio: string;
  secciones: string;
  cambiarIdioma: string;
  temaAClaro: string;
  temaAOscuro: string;
  nav: { about: string; resources: string };
  hero: { titulo: string; entradilla: string };
  inicio: {
    releases: { titulo: string; texto: string };
    colaborar: { titulo: string; texto: string };
    postular: { titulo: string; texto: string };
  };
  enConstruccion: {
    etiqueta: string;
    about: { titulo: string; texto: string };
    resources: { titulo: string; texto: string };
  };
  pie: {
    company: string;
    contacto: string;
    derechos: string;
    linkedin: string;
    correo: string;
  };
};

const es: Diccionario = {
  irAlInicio: "Ir al inicio de Kipu",
  secciones: "Secciones",
  cambiarIdioma: "Cambiar idioma",
  temaAClaro: "Cambiar a modo claro",
  temaAOscuro: "Cambiar a modo oscuro",

  nav: {
    about: "Acerca de",
    resources: "Recursos",
  },

  hero: {
    titulo: "Govtech abierto para América Latina y el Caribe",
    entradilla:
      "Apoyados en tecnologías de frontera, producimos y entregamos valor público para gobiernos nacionales y locales en la región.",
  },

  inicio: {
    releases: {
      titulo: "Últimos lanzamientos",
      texto: "Aquí irá cada versión publicada, con su fecha y sus notas.",
    },
    colaborar: {
      titulo: "¿Construyendo? Colaboremos",
      texto:
        "Aquí irán las formas de sumarse: qué hace falta y por dónde entrar.",
    },
    postular: {
      titulo: "Postula proyectos",
      texto:
        "Aquí irá la convocatoria: qué proyectos buscamos y cómo presentarlos.",
    },
  },

  enConstruccion: {
    etiqueta: "En construcción",
    about: {
      titulo: "Acerca de",
      texto:
        "Qué es Kipu, de dónde sale y quién lo mantiene. Todavía se escribe.",
    },
    resources: {
      titulo: "Recursos",
      texto:
        "El catálogo de herramientas y su documentación. Todavía se ordena.",
    },
  },

  pie: {
    company: "Empresa",
    contacto: "Contacto",
    derechos: "© 2026 Kipu Technologies",
    linkedin: "LinkedIn",
    correo: "Correo electrónico",
  },
};

const en: Diccionario = {
  irAlInicio: "Go to the Kipu home page",
  secciones: "Sections",
  cambiarIdioma: "Change language",
  temaAClaro: "Switch to light mode",
  temaAOscuro: "Switch to dark mode",

  nav: {
    about: "About",
    resources: "Resources",
  },

  hero: {
    titulo: "Open Govtech for Latin America and the Caribbean",
    entradilla:
      "Building on frontier technologies, we produce and deliver public value for national and local governments across the region.",
  },

  inicio: {
    releases: {
      titulo: "Latest releases",
      texto: "Each published version will land here, with its date and notes.",
    },
    colaborar: {
      titulo: "Building? Let's collaborate",
      texto: "The ways to join in will land here: what is needed and where to start.",
    },
    postular: {
      titulo: "Submit projects",
      texto:
        "The call will land here: what projects we are looking for and how to submit them.",
    },
  },

  enConstruccion: {
    etiqueta: "Under construction",
    about: {
      titulo: "About",
      texto:
        "What Kipu is, where it comes from and who maintains it. Still being written.",
    },
    resources: {
      titulo: "Resources",
      texto:
        "The catalogue of tools and their documentation. Still being sorted out.",
    },
  },

  pie: {
    company: "Company",
    contacto: "Contact",
    derechos: "© 2026 Kipu Technologies",
    linkedin: "LinkedIn",
    correo: "Email",
  },
};

const pt: Diccionario = {
  irAlInicio: "Ir para o início do Kipu",
  secciones: "Seções",
  cambiarIdioma: "Mudar idioma",
  temaAClaro: "Mudar para o modo claro",
  temaAOscuro: "Mudar para o modo escuro",

  nav: {
    about: "Sobre",
    resources: "Recursos",
  },

  hero: {
    titulo: "Govtech aberto para a América Latina e o Caribe",
    entradilla:
      "Apoiados em tecnologias de fronteira, produzimos e entregamos valor público para governos nacionais e locais da região.",
  },

  inicio: {
    releases: {
      titulo: "Últimos lançamentos",
      texto: "Aqui virá cada versão publicada, com sua data e suas notas.",
    },
    colaborar: {
      titulo: "Está construindo? Vamos colaborar",
      texto:
        "Aqui virão as formas de participar: o que falta e por onde começar.",
    },
    postular: {
      titulo: "Proponha projetos",
      texto:
        "Aqui virá a chamada: que projetos buscamos e como apresentá-los.",
    },
  },

  enConstruccion: {
    etiqueta: "Em construção",
    about: {
      titulo: "Sobre",
      texto:
        "O que é o Kipu, de onde vem e quem o mantém. Ainda está sendo escrito.",
    },
    resources: {
      titulo: "Recursos",
      texto:
        "O catálogo de ferramentas e sua documentação. Ainda está sendo organizado.",
    },
  },

  pie: {
    company: "Empresa",
    contacto: "Contato",
    derechos: "© 2026 Kipu Technologies",
    linkedin: "LinkedIn",
    correo: "E-mail",
  },
};

export const DICCIONARIOS: Record<Idioma, Diccionario> = { es, en, pt };
