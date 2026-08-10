/** Los tres idiomas de la app, con las mismas etiquetas y el mismo orden. */
export const IDIOMAS = {
  es: { etiqueta: "ESP", nombre: "Español" },
  en: { etiqueta: "ENG", nombre: "English" },
  pt: { etiqueta: "POR", nombre: "Português" },
} as const;

export type Idioma = keyof typeof IDIOMAS;

export const IDIOMA_POR_DEFECTO: Idioma = "es";

/* La app guarda el idioma en una cookie porque lo necesita el servidor al
   renderizar. Aquí el sitio es estático: no hay servidor que leer, así que
   basta `localStorage`. El nombre de la clave es el mismo por costumbre. */
export const CLAVE_IDIOMA = "kipu_idioma";

export function esIdiomaValido(valor: string | null): valor is Idioma {
  return valor !== null && valor in IDIOMAS;
}
