"use client";

import { KipuLogo } from "@/components/brand/kipu-logo";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { ThemeToggle } from "@/components/tema/theme-toggle";
import { useT } from "@/components/i18n/language-provider";
import { RUTAS } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * La pestaña activa llega como prop desde cada página en vez de leerse con
 * `usePathname`: son tres rutas estáticas y el dato ya se conoce al escribirlas.
 */
export function SiteHeader({ activa }: { activa?: string }) {
  const t = useT();

  const pestanas = [
    { href: RUTAS.about, etiqueta: t.nav.about },
    { href: RUTAS.resources, etiqueta: t.nav.resources },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <KipuLogo priority />

        <div className="flex items-center gap-2 sm:gap-3">
          <nav aria-label={t.secciones} className="flex items-center gap-1">
            {pestanas.map((pestana) => {
              const esActiva = pestana.href === activa;
              return (
                <a
                  key={pestana.href}
                  href={pestana.href}
                  aria-current={esActiva ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition-colors sm:px-4",
                    esActiva
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {pestana.etiqueta}
                </a>
              );
            })}
          </nav>

          {/* Separador: los dos controles de preferencias no son navegación. */}
          <span aria-hidden="true" className="h-6 w-px bg-border" />

          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
