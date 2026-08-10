/**
 * Todo el texto de la página vive aquí. Dos razones: se itera sobre la copia
 * sin tocar el maquetado, y el día que la página sea multiidioma —la app ya lo
 * es, en es/en/pt— este archivo es lo único que hay que duplicar.
 *
 * Los TODO marcan lo que está inventado como andamio y necesita un dato real.
 */

export const sitio = {
  nombre: "Kipu",
  tagline: "Recursos abiertos para la gestión pública",
  descripcion:
    "Kipu reúne herramientas de govtech open source pensadas para equipos de gobierno: software que se despliega en la infraestructura de la institución, sin licencias ni dependencia de un proveedor.",
  // TODO: apuntar a la organización real de GitHub cuando exista.
  repositorio: "https://github.com/kipu",
} as const;

export const navegacion = [
  { etiqueta: "Qué es", href: "#que-es" },
  { etiqueta: "Herramientas", href: "#herramientas" },
  { etiqueta: "Principios", href: "#principios" },
  { etiqueta: "Empezar", href: "#empezar" },
] as const;

export const hero = {
  eyebrow: "Govtech · Código abierto",
  titulo: "Herramientas públicas para la gestión pública",
  entradilla:
    "Un kipu registraba, en cuerdas anudadas, lo que un Estado necesitaba recordar. Este también: instrumentos abiertos para que los equipos de gobierno sigan sus planes, midan sus avances y conserven sus datos.",
  ctaPrimario: { etiqueta: "Ver las herramientas", href: "#herramientas" },
  ctaSecundario: { etiqueta: "Código en GitHub", href: sitio.repositorio },
  // TODO: sustituir por cifras reales antes de publicar.
  marcadores: [
    { valor: "MIT", nota: "Licencia permisiva" },
    { valor: "es · en · pt", nota: "Idiomas de la región" },
    { valor: "Autoalojable", nota: "Los datos no salen de la institución" },
  ],
} as const;

export const queEs = {
  titulo: "Qué es Kipu",
  parrafos: [
    "Kipu no es un producto: es un conjunto de herramientas que resuelven problemas que se repiten en toda institución pública —seguir un plan de trabajo, reportar avance, auditar quién cambió qué— y que hoy se resuelven con hojas de cálculo sueltas o con licencias caras.",
    "Cada pieza se publica con su código, se despliega en la infraestructura de quien la usa y se puede adaptar sin pedir permiso. Lo que una institución mejora queda disponible para las demás.",
  ],
} as const;

export type EstadoHerramienta = "disponible" | "en-construccion" | "explorando";

export const herramientas: ReadonlyArray<{
  nombre: string;
  estado: EstadoHerramienta;
  resumen: string;
  detalle: string;
  href?: string;
}> = [
  {
    nombre: "Kipu App",
    estado: "disponible",
    resumen: "Seguimiento de planes de trabajo para Unidades de Cumplimiento.",
    detalle:
      "Un administrador define los niveles de la organización, carga el plan del año y da de alta a los usuarios. Cada persona reporta avance sobre sus hitos y el tablero resume el estado, con historial de cambios.",
    // TODO: enlazar al repositorio público de la app.
    href: "https://github.com/kipu/kipu-app",
  },
  {
    nombre: "Avances cuantitativos",
    estado: "en-construccion",
    resumen: "Indicadores con meta, línea base y series de tiempo.",
    detalle:
      "La contraparte numérica del reporte cualitativo: cargar indicadores, fijar metas y ver la desviación mes a mes sin salir de la misma herramienta.",
  },
  {
    nombre: "Por definir",
    estado: "explorando",
    resumen: "El siguiente problema repetido que valga la pena abrir.",
    detalle:
      "Este espacio está a propósito vacío. Si tu equipo resuelve algo a mano que otras instituciones también resuelven a mano, es candidato.",
  },
];

export const principios = [
  {
    titulo: "Código abierto, de verdad",
    texto:
      "Licencia permisiva, repositorio público y sin edición «enterprise» detrás. Lo que se ve es todo lo que hay.",
  },
  {
    titulo: "Los datos se quedan donde estén",
    texto:
      "Cada institución despliega en su propia infraestructura. No hay un servicio central que acumule información pública.",
  },
  {
    titulo: "Se instala en una tarde",
    texto:
      "Dependencias mínimas y arranque sin configuración. Si hacen falta tres reuniones para levantarlo, está mal diseñado.",
  },
  {
    titulo: "Escrito para la región",
    texto:
      "Interfaz en español, inglés y portugués, y vocabulario tomado de cómo trabajan de verdad las instituciones, no de un manual traducido.",
  },
] as const;

export const empezar = {
  titulo: "Empezar",
  entradilla:
    "Todo el catálogo se clona y se levanta igual. Este es el camino para Kipu App:",
  pasos: [
    {
      titulo: "Clonar",
      texto: "El repositorio de la herramienta que necesites.",
      comando: "git clone https://github.com/kipu/kipu-app.git",
    },
    {
      titulo: "Levantar",
      texto: "Sin variables de entorno: arranca con datos locales de prueba.",
      comando: "npm install && npm run dev",
    },
    {
      titulo: "Desplegar",
      texto:
        "Con un disco persistente en el proveedor que ya use la institución.",
      comando: "npm run build && npm start",
    },
  ],
} as const;

export const cierre = {
  titulo: "Kipu se construye con quien lo usa",
  texto:
    "Si trabajas en una institución pública y algo de esto te sirve —o te falta— el sitio para decirlo es el repositorio.",
  cta: { etiqueta: "Abrir un issue", href: sitio.repositorio },
} as const;
