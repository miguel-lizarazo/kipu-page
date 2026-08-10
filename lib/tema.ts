export type Tema = "light" | "dark";

export const CLAVE_TEMA = "kipu_tema";

/** Atributo del elemento raíz que fija `color-scheme` en `app/globals.css`. */
export const ATRIBUTO_TEMA = "data-tema";

export function esTemaValido(valor: string | null): valor is Tema {
  return valor === "light" || valor === "dark";
}

/**
 * Se inyecta tal cual en el `<head>`, antes de que el navegador pinte nada: si
 * la preferencia guardada se aplicara desde React, la página aparecería un
 * instante con el tema del sistema y saltaría al otro. Va en `try` porque
 * `localStorage` lanza si el navegador tiene las cookies bloqueadas.
 */
export const SCRIPT_TEMA = `try{var t=localStorage.getItem(${JSON.stringify(
  CLAVE_TEMA,
)});if(t==="light"||t==="dark")document.documentElement.setAttribute(${JSON.stringify(
  ATRIBUTO_TEMA,
)},t)}catch(e){}`;
