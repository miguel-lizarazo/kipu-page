"use client";

import { useT } from "@/components/i18n/language-provider";

/**
 * Recuadro que reserva el sitio de una sección que todavía no existe. El alto
 * mínimo es parte del mensaje: sin él la caja se encoge hasta parecer un aviso
 * y no un hueco a la espera de contenido.
 */
export function PanelEnObras({ texto }: { texto: string }) {
  const t = useT();

  return (
    <div className="flex min-h-[16rem] flex-col items-center justify-center gap-4 rounded-3xl bg-panel px-8 py-14 text-center sm:min-h-[18rem]">
      <p className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-foreground-soft">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
        {t.enConstruccion.etiqueta}
      </p>

      <p className="max-w-md text-pretty leading-relaxed text-foreground-soft">
        {texto}
      </p>
    </div>
  );
}
