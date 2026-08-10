import { Seccion } from "@/components/ui/seccion";
import { herramientas, type EstadoHerramienta } from "@/content/site";

const ETIQUETA_ESTADO: Record<EstadoHerramienta, string> = {
  disponible: "Disponible",
  "en-construccion": "En construcción",
  explorando: "Explorando",
};

function Estado({ estado }: { estado: EstadoHerramienta }) {
  const disponible = estado === "disponible";
  return (
    <span
      className={
        disponible
          ? "inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary"
          : "inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
      }
    >
      <span
        aria-hidden="true"
        className={
          disponible
            ? "size-1.5 rounded-full bg-primary"
            : "size-1.5 rounded-full bg-muted"
        }
      />
      {ETIQUETA_ESTADO[estado]}
    </span>
  );
}

export function Herramientas() {
  return (
    <Seccion
      id="herramientas"
      eyebrow="Catálogo"
      titulo="Las herramientas"
      className="border-t border-border/60"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {herramientas.map((h) => (
          <article
            key={h.nombre}
            className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
          >
            <Estado estado={h.estado} />

            <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
              {h.nombre}
            </h3>
            <p className="mt-2 text-pretty font-medium leading-relaxed text-foreground-soft">
              {h.resumen}
            </p>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted">
              {h.detalle}
            </p>

            {h.href ? (
              <a
                href={h.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
              >
                Ver el repositorio
                <span aria-hidden="true">→</span>
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </Seccion>
  );
}
