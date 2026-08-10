import { Seccion } from "@/components/ui/seccion";
import { principios } from "@/content/site";

export function Principios() {
  return (
    <Seccion
      id="principios"
      eyebrow="Cómo se construye"
      titulo="Principios"
      className="border-t border-border/60"
    >
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {principios.map((p, i) => (
          <li key={p.titulo} className="bg-card px-7 py-8">
            <span className="text-sm font-semibold tabular-nums text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
              {p.titulo}
            </h3>
            <p className="mt-2 text-pretty leading-relaxed text-muted">
              {p.texto}
            </p>
          </li>
        ))}
      </ol>
    </Seccion>
  );
}
