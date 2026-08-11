"use client";

import { useT } from "@/components/i18n/language-provider";

export function Hero() {
  const t = useT();

  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-36">
      <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
        {t.hero.titulo}
      </h1>

      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground-soft">
        {t.hero.entradilla}
      </p>
    </section>
  );
}
