import { KipuLogo } from "@/components/brand/kipu-logo";
import { navegacion, sitio } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <KipuLogo priority />

        <nav
          aria-label="Secciones"
          className="hidden items-center gap-7 md:flex"
        >
          {navegacion.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.etiqueta}
            </a>
          ))}
        </nav>

        <a
          href={sitio.repositorio}
          className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
