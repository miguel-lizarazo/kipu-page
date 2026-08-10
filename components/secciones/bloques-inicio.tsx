"use client";

import { useT } from "@/components/i18n/language-provider";
import { PanelEnObras } from "@/components/ui/panel-en-obras";

/** Las dos secciones que siguen al hero: novedades y colaboración. */
export function BloquesInicio() {
  const t = useT();

  const bloques = [t.inicio.releases, t.inicio.colaborar];

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-28 sm:px-8 sm:pb-36">
      {bloques.map((bloque) => (
        <section key={bloque.titulo} className="mt-16 first:mt-0 sm:mt-20">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {bloque.titulo}
          </h2>
          <PanelEnObras texto={bloque.texto} />
        </section>
      ))}
    </div>
  );
}
