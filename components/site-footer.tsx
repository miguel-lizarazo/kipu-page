import { KipuLogo } from "@/components/brand/kipu-logo";
import { navegacion, sitio } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <KipuLogo tamano={32} />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {sitio.tagline}.
          </p>
        </div>

        <nav aria-label="Pie" className="flex flex-wrap gap-x-6 gap-y-2">
          {navegacion.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.etiqueta}
            </a>
          ))}
          <a
            href={sitio.repositorio}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
