import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { EnConstruccion } from "@/components/ui/en-construccion";
import { DICCIONARIOS, RUTAS, sitio } from "@/content/site";
import { IDIOMA_POR_DEFECTO } from "@/lib/i18n/idiomas";

// Los metadatos se generan en build, cuando todavía no hay navegador al que
// preguntarle el idioma: van siempre en el de por defecto.
const porDefecto = DICCIONARIOS[IDIOMA_POR_DEFECTO].enConstruccion.about;

export const metadata: Metadata = {
  title: `${porDefecto.titulo} · ${sitio.nombre}`,
  description: porDefecto.texto,
};

export default function About() {
  return (
    <>
      <SiteHeader activa={RUTAS.about} />
      <main>
        <EnConstruccion seccion="about" />
      </main>
    </>
  );
}
