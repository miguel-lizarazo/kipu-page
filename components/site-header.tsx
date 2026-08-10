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
      {/* Tres columnas con los lados a 1fr: da igual lo que ocupen la marca y
          los controles, la navegación queda centrada en la página. */}
      <div className="mx-auto grid h-16 w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-5 sm:gap-3 sm:px-8">
        <KipuLogo priority />

        <nav
          aria-label={t.secciones}
          className="flex items-center justify-center gap-1"
        >
          {pestanas.map((pestana) => {
            const esActiva = pestana.href === activa;
            return (
              <a
                key={pestana.href}
                href={pestana.href}
                aria-current={esActiva ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-full px-2 py-2 text-sm transition-colors sm:px-4",
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

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
