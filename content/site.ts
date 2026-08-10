/**
 * Todo el texto de la página vive aquí: se itera sobre la copia sin tocar el
 * maquetado, y el día que la página sea multiidioma —la app ya lo es, en
 * es/en/pt— este archivo es lo único que hay que duplicar.
 */

export const sitio = {
  nombre: "Kipu",
  tagline: "Recursos abiertos para la gestión pública",
  descripcion:
    "Kipu reúne herramientas de govtech open source pensadas para equipos de gobierno.",
} as const;

export const navegacion = [
  { etiqueta: "About", href: "/about/" },
  { etiqueta: "Resources", href: "/resources/" },
] as const;

export const hero = {
  eyebrow: "Govtech · Código abierto",
  titulo: "Herramientas públicas para la gestión pública",
  entradilla:
    "Un kipu registraba, en cuerdas anudadas, lo que un Estado necesitaba recordar. Este también: instrumentos abiertos para que los equipos de gobierno sigan sus planes, midan sus avances y conserven sus datos.",
} as const;

export const enConstruccion = {
  etiqueta: "En construcción",
  about: {
    titulo: "About",
    texto: "Qué es Kipu, de dónde sale y quién lo mantiene. Todavía se escribe.",
  },
  resources: {
    titulo: "Resources",
    texto:
      "El catálogo de herramientas y su documentación. Todavía se ordena.",
  },
} as const;
