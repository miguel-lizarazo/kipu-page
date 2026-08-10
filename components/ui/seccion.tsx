import { cn } from "@/lib/utils";

/**
 * Envoltorio único de sección: fija el ancho de lectura y el ritmo vertical.
 * Si el espaciado de la página se siente mal, se corrige aquí y no en ocho
 * sitios distintos.
 */
export function Seccion({
  id,
  eyebrow,
  titulo,
  className,
  children,
}: {
  id?: string;
  eyebrow?: string;
  titulo?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28",
        className,
      )}
    >
      {eyebrow || titulo ? (
        <div className="mb-12 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          {titulo ? (
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {titulo}
            </h2>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
