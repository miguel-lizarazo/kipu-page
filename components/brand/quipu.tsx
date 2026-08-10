import { cn } from "@/lib/utils";

/**
 * Un kipu real es una cuerda principal de la que cuelgan cuerdas colgantes, y
 * el dato vive en los nudos: su tipo y su altura son el número. Es literalmente
 * el objeto que da nombre al proyecto, así que sirve de gráfico del hero mejor
 * que cualquier ilustración genérica de «datos».
 *
 * La geometría es determinista —nada de Math.random— porque el HTML se genera
 * en build y tiene que coincidir con lo que hidrata el navegador.
 */

type Punto = readonly [number, number];

// Cuerda principal: cae un poco por su propio peso, como colgada de dos clavos.
const CUERDA: readonly [Punto, Punto, Punto, Punto] = [
  [40, 84],
  [320, 152],
  [880, 152],
  [1160, 76],
];

function enCubica(
  [p0, p1, p2, p3]: readonly [Punto, Punto, Punto, Punto],
  t: number,
): Punto {
  const u = 1 - t;
  const a = u * u * u;
  const b = 3 * u * u * t;
  const c = 3 * u * t * t;
  const d = t * t * t;
  return [
    a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0],
    a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1],
  ];
}

// largo: cuánto cuelga. deriva: cuánto se va de lado al caer.
// nudos: a qué fracción de la cuerda está cada nudo. destacada: en color marca.
const COLGANTES: ReadonlyArray<{
  t: number;
  largo: number;
  deriva: number;
  nudos: readonly number[];
  destacada?: boolean;
}> = [
  { t: 0.02, largo: 196, deriva: -14, nudos: [0.42, 0.7] },
  { t: 0.08, largo: 268, deriva: -6, nudos: [0.3, 0.55, 0.82], destacada: true },
  { t: 0.14, largo: 152, deriva: 8, nudos: [0.5] },
  { t: 0.2, largo: 232, deriva: -10, nudos: [0.36, 0.74] },
  { t: 0.27, largo: 300, deriva: 4, nudos: [0.25, 0.48, 0.68, 0.88] },
  { t: 0.33, largo: 178, deriva: 12, nudos: [0.44], destacada: true },
  { t: 0.4, largo: 246, deriva: -8, nudos: [0.33, 0.62] },
  { t: 0.47, largo: 138, deriva: 6, nudos: [0.55] },
  { t: 0.53, largo: 284, deriva: -12, nudos: [0.28, 0.52, 0.8] },
  { t: 0.6, largo: 204, deriva: 10, nudos: [0.4, 0.72], destacada: true },
  { t: 0.67, largo: 258, deriva: -4, nudos: [0.31, 0.58, 0.85] },
  { t: 0.73, largo: 164, deriva: 14, nudos: [0.47] },
  { t: 0.8, largo: 224, deriva: -10, nudos: [0.35, 0.66] },
  { t: 0.87, largo: 292, deriva: 6, nudos: [0.24, 0.5, 0.72, 0.9] },
  { t: 0.94, largo: 172, deriva: -8, nudos: [0.45, 0.78] },
  { t: 0.99, largo: 212, deriva: 10, nudos: [0.38] },
];

function colgante(inicio: Punto, largo: number, deriva: number) {
  const [x, y] = inicio;
  return [
    [x, y],
    [x + deriva * 0.2, y + largo * 0.34],
    [x + deriva * 1.4, y + largo * 0.72],
    [x + deriva, y + largo],
  ] as const;
}

export function Quipu({ className }: { className?: string }) {
  const d = (p: readonly Punto[]) =>
    `M ${p[0][0]} ${p[0][1]} C ${p[1][0]} ${p[1][1]}, ${p[2][0]} ${p[2][1]}, ${p[3][0]} ${p[3][1]}`;

  return (
    <svg
      viewBox="0 0 1200 460"
      fill="none"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
      preserveAspectRatio="xMidYMin slice"
    >
      <defs>
        <linearGradient id="kipu-desvanece" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="62%" stopColor="white" stopOpacity="0.55" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="kipu-mascara">
          <rect width="1200" height="460" fill="url(#kipu-desvanece)" />
        </mask>
      </defs>

      <g mask="url(#kipu-mascara)">
        {COLGANTES.map((c) => {
          const curva = colgante(enCubica(CUERDA, c.t), c.largo, c.deriva);
          // Las opacidades son variables CSS porque cambian con el tema: sobre
          // crema, los valores del modo oscuro dejan las cuerdas invisibles.
          // Van por `style` y no por atributo: var() solo se resuelve en CSS.
          return (
            <g key={c.t}>
              <path
                d={d(curva)}
                stroke={
                  c.destacada
                    ? "var(--color-primary-soft)"
                    : "var(--color-foreground)"
                }
                style={{
                  strokeOpacity: c.destacada ? 0.55 : "var(--quipu-trazo)",
                }}
                strokeWidth={c.destacada ? 2.4 : 1.8}
                strokeLinecap="round"
              />
              {c.nudos.map((n) => {
                const [nx, ny] = enCubica(curva, n);
                return (
                  <circle
                    key={n}
                    cx={nx}
                    cy={ny}
                    r={c.destacada ? 5.5 : 4}
                    fill={
                      c.destacada
                        ? "var(--color-primary-soft)"
                        : "var(--color-muted)"
                    }
                    style={{
                      fillOpacity: c.destacada ? 0.95 : "var(--quipu-nudo)",
                    }}
                  />
                );
              })}
            </g>
          );
        })}

        <path
          d={d(CUERDA)}
          stroke="var(--color-primary-soft)"
          strokeOpacity="0.7"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
