import { Seccion } from "@/components/ui/seccion";
import { queEs } from "@/content/site";

export function QueEs() {
  return (
    <Seccion id="que-es" eyebrow="El proyecto" titulo={queEs.titulo}>
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="space-y-5">
          {queEs.parrafos.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="text-pretty text-lg leading-relaxed text-foreground-soft"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Ficha del nombre: explica la metáfora una vez, en un sitio, y libera
            al resto de la página de tener que insistir en ella. */}
        <aside className="rounded-2xl border border-border bg-card p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            El nombre
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-foreground-soft">
            El <span className="text-foreground">kipu</span> —o quipu— fue el
            sistema de registro de los Andes: cuerdas anudadas donde la posición
            y el tipo de nudo guardaban censos, tributos y calendarios. Un
            registro público, portátil y legible por quien conociera la
            convención.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted">
            La convención abierta es la parte que nos interesa.
          </p>
        </aside>
      </div>
    </Seccion>
  );
}
