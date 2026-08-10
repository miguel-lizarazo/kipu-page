import { Quipu } from "@/components/brand/quipu";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {/* El quipu ocupa la mitad superior y se desvanece; el texto va encima,
          sobre la zona ya casi vacía, para que nunca compita con los nudos. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-90"
      >
        <Quipu />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-40 sm:px-8 sm:pb-32 sm:pt-52">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-primary">
          {hero.eyebrow}
        </p>

        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
          {hero.titulo}
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground-soft">
          {hero.entradilla}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={hero.ctaPrimario.href}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            {hero.ctaPrimario.etiqueta}
          </a>
          <a
            href={hero.ctaSecundario.href}
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {hero.ctaSecundario.etiqueta}
          </a>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {hero.marcadores.map((m) => (
            <div key={m.nota} className="bg-card px-6 py-5">
              <dt className="text-xl font-semibold text-primary">{m.valor}</dt>
              <dd className="mt-1 text-sm text-muted">{m.nota}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
