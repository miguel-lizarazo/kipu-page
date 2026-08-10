"use client";

import { useT } from "@/components/i18n/language-provider";

/** Estado compartido por About y Resources mientras no tengan contenido. */
export function EnConstruccion({
  seccion,
}: {
  seccion: "about" | "resources";
}) {
  const t = useT();
  const { titulo, texto } = t.enConstruccion[seccion];

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-start px-5 pb-32 pt-32 sm:px-8 sm:pt-40">
      <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
        {t.enConstruccion.etiqueta}
      </p>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {titulo}
      </h1>

      <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-foreground-soft">
        {texto}
      </p>
    </section>
  );
}
