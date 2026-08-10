import { Seccion } from "@/components/ui/seccion";
import { empezar } from "@/content/site";

export function Empezar() {
  return (
    <Seccion
      id="empezar"
      eyebrow="Instalación"
      titulo={empezar.titulo}
      className="border-t border-border/60"
    >
      <p className="-mt-6 mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-foreground-soft">
        {empezar.entradilla}
      </p>

      <ol className="grid gap-5 md:grid-cols-3">
        {empezar.pasos.map((paso, i) => (
          <li
            key={paso.titulo}
            className="flex flex-col rounded-2xl border border-border bg-card p-7"
          >
            <span className="flex size-8 items-center justify-center rounded-full border border-primary/40 text-sm font-semibold tabular-nums text-primary">
              {i + 1}
            </span>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
              {paso.titulo}
            </h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
              {paso.texto}
            </p>
            <pre className="mt-5 overflow-x-auto rounded-xl border border-border bg-background px-4 py-3 text-xs leading-relaxed text-foreground-soft">
              <code>{paso.comando}</code>
            </pre>
          </li>
        ))}
      </ol>
    </Seccion>
  );
}
