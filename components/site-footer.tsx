"use client";

import Image from "next/image";
import { useT } from "@/components/i18n/language-provider";

/**
 * El pie va siempre oscuro, también con el tema claro: cierra la página con un
 * bloque macizo, como el de YC. Por eso los colores son literales y no tokens
 * —los tokens cambiarían con el tema y aquí no debe cambiar nada—.
 *
 * Es un tono por debajo del lienzo oscuro (#1f1e1d): con el mismo, en tema
 * oscuro el pie se fundía con la página y dejaba de leerse como bloque. La
 * línea de arriba remata esa separación, y sobra en claro —donde el corte de
 * crema a negro ya es evidente—, así que ahí va transparente.
 *
 * Los iconos y «Contacto» todavía no llevan enlace: falta a dónde apuntar.
 */
export function SiteFooter() {
  const t = useT();

  return (
    <footer
      className="border-t bg-[#161514] text-[#f5f4ef]"
      style={{ borderTopColor: "light-dark(transparent, #3a3936)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/kipu-logo-full.jpg"
              alt="Kipu"
              width={48}
              height={48}
              className="rounded-xl"
              style={{ width: 48, height: 48 }}
            />
            <p className="max-w-xs text-pretty leading-relaxed">{t.pie.lema}</p>
          </div>

          <div className="sm:text-right">
            <p className="font-semibold">{t.pie.company}</p>
            <p className="mt-4 text-[#c2c0b6]">{t.pie.contacto}</p>
          </div>
        </div>

        <hr className="my-10 border-0 border-t border-[#383734] sm:my-12" />

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#c2c0b6]">{t.pie.derechos}</p>

          <div className="flex items-center gap-5 text-[#c2c0b6]">
            <span role="img" aria-label={t.pie.linkedin}>
              <IconoLinkedin />
            </span>
            <span role="img" aria-label={t.pie.correo}>
              <IconoCorreo />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IconoLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.9 21.5h4.16V10H2.9v11.5ZM9.6 10h3.99v1.57h.06c.56-1 1.9-2.06 3.92-2.06 4.2 0 4.97 2.63 4.97 6.05v5.94h-4.15v-5.27c0-1.26-.02-2.87-1.8-2.87-1.8 0-2.08 1.36-2.08 2.78v5.36H9.6V10Z" />
    </svg>
  );
}

function IconoCorreo() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-6"
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 7 7.36 5.25a2 2 0 0 0 2.28 0L20.5 7" />
    </svg>
  );
}
