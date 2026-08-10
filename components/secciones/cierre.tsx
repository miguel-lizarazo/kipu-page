import { cierre } from "@/content/site";

export function Cierre() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-14 text-center sm:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 w-[560px] rounded-full bg-primary/15 blur-[100px]"
          />
          <div className="relative">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {cierre.titulo}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-foreground-soft">
              {cierre.texto}
            </p>
            <a
              href={cierre.cta.href}
              className="mt-9 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              {cierre.cta.etiqueta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
