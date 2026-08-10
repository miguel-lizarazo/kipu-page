"use client";

import { useCallback, useSyncExternalStore } from "react";
import { useT } from "@/components/i18n/language-provider";
import {
  ATRIBUTO_TEMA,
  CLAVE_TEMA,
  esTemaValido,
  type Tema,
} from "@/lib/tema";

const CONSULTA_OSCURO = "(prefers-color-scheme: dark)";

/* Como con el idioma: `localStorage` no avisa dentro de la misma pestaña. */
const EVENTO_TEMA = "kipu:tema";

function suscribir(alCambiar: () => void) {
  const consulta = window.matchMedia(CONSULTA_OSCURO);
  consulta.addEventListener("change", alCambiar);
  window.addEventListener("storage", alCambiar);
  window.addEventListener(EVENTO_TEMA, alCambiar);
  return () => {
    consulta.removeEventListener("change", alCambiar);
    window.removeEventListener("storage", alCambiar);
    window.removeEventListener(EVENTO_TEMA, alCambiar);
  };
}

/** Respaldo si el navegador tiene el almacenamiento bloqueado. */
let enMemoria: Tema | null = null;

function leer(): Tema {
  try {
    const guardado = window.localStorage.getItem(CLAVE_TEMA);
    if (esTemaValido(guardado)) return guardado;
  } catch {
    // Sin almacenamiento: se sigue con lo que haya en memoria.
  }
  if (enMemoria) return enMemoria;
  return window.matchMedia(CONSULTA_OSCURO).matches ? "dark" : "light";
}

/* En build no hay navegador al que preguntarle el tema. Devolver `null` deja
   el botón sin icono en el HTML servido, y el icono correcto aparece al
   hidratar: es preferible a pintar un sol donde va una luna. */
function leerEnServidor(): Tema | null {
  return null;
}

/**
 * Alterna entre claro y oscuro. Mientras nadie lo pulse no hay preferencia
 * guardada y manda el sistema; el primer clic parte del tema que se esté
 * viendo, de modo que el botón siempre hace lo que promete su icono.
 */
export function ThemeToggle() {
  const t = useT();
  const tema = useSyncExternalStore(suscribir, leer, leerEnServidor);

  const alternar = useCallback(() => {
    const siguiente: Tema = leer() === "dark" ? "light" : "dark";

    enMemoria = siguiente;
    document.documentElement.setAttribute(ATRIBUTO_TEMA, siguiente);
    try {
      window.localStorage.setItem(CLAVE_TEMA, siguiente);
    } catch {
      // Sin almacenamiento el cambio dura lo que la pestaña.
    }
    window.dispatchEvent(new Event(EVENTO_TEMA));
  }, []);

  const etiqueta = tema === "dark" ? t.temaAClaro : t.temaAOscuro;

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={etiqueta}
      title={etiqueta}
      className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
    >
      {tema === null ? (
        <span className="size-5" />
      ) : tema === "dark" ? (
        <IconoSol />
      ) : (
        <IconoLuna />
      )}
    </button>
  );
}

function IconoSol() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
      className="size-5"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" />
    </svg>
  );
}

function IconoLuna() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-5"
    >
      <path d="M20 13.4A8 8 0 1 1 10.6 4a6.4 6.4 0 0 0 9.4 9.4Z" />
    </svg>
  );
}
