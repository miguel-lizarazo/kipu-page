import { KipuLogo } from "@/components/brand/kipu-logo";
import { navegacion } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * La pestaña activa llega como prop desde cada página en vez de leerse con
 * `usePathname`: son tres rutas estáticas y así la cabecera no necesita
 * volverse un componente de cliente.
 */
export function SiteHeader({ activa }: { activa?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <KipuLogo priority />

        <nav aria-label="Secciones" className="flex items-center gap-1">
          {navegacion.map((item) => {
            const esActiva = item.href === activa;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={esActiva ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  esActiva
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted hover:text-foreground",
                )}
              >
                {item.etiqueta}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
