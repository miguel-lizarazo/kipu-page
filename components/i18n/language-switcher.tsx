"use client";

import { useEffect, useRef, useState } from "react";
import { IDIOMAS, type Idioma } from "@/lib/i18n/idiomas";
import { useIdioma } from "@/components/i18n/language-provider";
import { cn } from "@/lib/utils";

/** Mismo desplegable que el de la app, con los tokens de esta página. */
export function LanguageSwitcher() {
  const { idioma, cambiarIdioma, t } = useIdioma();
  const [abierto, setAbierto] = useState(false);
  const contenedor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!abierto) return;

    function alPulsarFuera(evento: PointerEvent) {
      if (!contenedor.current?.contains(evento.target as Node)) {
        setAbierto(false);
      }
    }

    function alPulsarEscape(evento: KeyboardEvent) {
      if (evento.key === "Escape") setAbierto(false);
    }

    document.addEventListener("pointerdown", alPulsarFuera);
    document.addEventListener("keydown", alPulsarEscape);

    return () => {
      document.removeEventListener("pointerdown", alPulsarFuera);
      document.removeEventListener("keydown", alPulsarEscape);
    };
  }, [abierto]);

  return (
    <div ref={contenedor} className="relative">
      <button
        type="button"
        onClick={() => setAbierto((previo) => !previo)}
        aria-label={t.cambiarIdioma}
        aria-haspopup="listbox"
        aria-expanded={abierto}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary"
      >
        {IDIOMAS[idioma].etiqueta}
        <span aria-hidden="true" className="text-[0.6rem] leading-none opacity-70">
          ▼
        </span>
      </button>

      {abierto && (
        <ul
          role="listbox"
          aria-label={t.cambiarIdioma}
          className="absolute right-0 z-50 mt-2 min-w-[11rem] overflow-hidden rounded-2xl border border-border bg-card py-1 shadow-[0_16px_36px_rgb(0_0_0_/_0.18)]"
        >
          {(Object.keys(IDIOMAS) as Idioma[]).map((codigo) => (
            <li key={codigo}>
              <button
                type="button"
                role="option"
                aria-selected={codigo === idioma}
                onClick={() => {
                  cambiarIdioma(codigo);
                  setAbierto(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-sm transition-colors hover:bg-primary/10",
                  codigo === idioma
                    ? "font-semibold text-primary"
                    : "text-foreground-soft",
                )}
              >
                {IDIOMAS[codigo].nombre}
                <span className="text-xs text-muted">
                  {IDIOMAS[codigo].etiqueta}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
