"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import {
  CLAVE_IDIOMA,
  IDIOMA_POR_DEFECTO,
  esIdiomaValido,
  type Idioma,
} from "@/lib/i18n/idiomas";
import { DICCIONARIOS, type Diccionario } from "@/content/site";

type Contexto = {
  idioma: Idioma;
  cambiarIdioma: (idioma: Idioma) => void;
  t: Diccionario;
};

const ContextoIdioma = createContext<Contexto | null>(null);

/* `localStorage` no avisa de sus propios cambios dentro de la misma pestaña
   —el evento `storage` solo viaja entre pestañas—, así que al escribir se
   lanza este evento a mano. */
const EVENTO_IDIOMA = "kipu:idioma";

function suscribir(alCambiar: () => void) {
  window.addEventListener("storage", alCambiar);
  window.addEventListener(EVENTO_IDIOMA, alCambiar);
  return () => {
    window.removeEventListener("storage", alCambiar);
    window.removeEventListener(EVENTO_IDIOMA, alCambiar);
  };
}

/* Respaldo para navegadores con el almacenamiento bloqueado: así el cambio de
   idioma sigue funcionando, solo que no sobrevive a recargar. */
let enMemoria: Idioma | null = null;

function leer(): Idioma {
  try {
    const guardado = window.localStorage.getItem(CLAVE_IDIOMA);
    if (esIdiomaValido(guardado)) return guardado;
  } catch {
    // Sin almacenamiento: se sigue con lo que haya en memoria.
  }
  return enMemoria ?? IDIOMA_POR_DEFECTO;
}

function leerEnServidor(): Idioma {
  return IDIOMA_POR_DEFECTO;
}

/**
 * El idioma se resuelve en el cliente porque el sitio es estático: el HTML se
 * genera una sola vez, en build. `useSyncExternalStore` es lo que hace que
 * hidratar sea seguro: el primer render usa el idioma por defecto, igual que
 * el HTML servido, y lo guardado entra justo después.
 *
 * La consecuencia es que el HTML servido está en español. Es lo correcto para
 * los buscadores mientras no haya rutas por idioma; el día que las haya, esto
 * se sustituye por `/en/` y `/pt/`.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const idioma = useSyncExternalStore(suscribir, leer, leerEnServidor);

  useEffect(() => {
    document.documentElement.lang = idioma;
  }, [idioma]);

  const cambiarIdioma = useCallback((siguiente: Idioma) => {
    enMemoria = siguiente;
    try {
      window.localStorage.setItem(CLAVE_IDIOMA, siguiente);
    } catch {
      // Sin almacenamiento el cambio dura lo que la pestaña.
    }
    window.dispatchEvent(new Event(EVENTO_IDIOMA));
  }, []);

  return (
    <ContextoIdioma.Provider
      value={{ idioma, cambiarIdioma, t: DICCIONARIOS[idioma] }}
    >
      {children}
    </ContextoIdioma.Provider>
  );
}

export function useIdioma() {
  const contexto = useContext(ContextoIdioma);
  if (!contexto) {
    throw new Error("useIdioma necesita estar dentro de <LanguageProvider>");
  }
  return contexto;
}

/** Atajo para los componentes que solo necesitan leer texto. */
export function useT() {
  return useIdioma().t;
}
