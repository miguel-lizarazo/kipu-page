"use client";

import { Quipu } from "@/components/brand/quipu";
import { useT } from "@/components/i18n/language-provider";

export function Hero() {
  const t = useT();

  return (
    <section className="relative overflow-hidden">
      {/* El quipu ocupa la mitad superior y se desvanece; el texto va debajo,
          sobre la zona ya casi vacía, para no competir con los nudos. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
      >
        <Quipu />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "var(--quipu-halo)" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-32 pt-40 sm:px-8 sm:pb-44 sm:pt-52">
        <p className="mb-5 inline-flex items-center rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-primary">
          {t.hero.eyebrow}
        </p>

        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
          {t.hero.titulo}
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground-soft">
          {t.hero.entradilla}
        </p>
      </div>
    </section>
  );
}
