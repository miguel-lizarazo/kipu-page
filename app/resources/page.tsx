import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnConstruccion } from "@/components/ui/en-construccion";
import { DICCIONARIOS, RUTAS, sitio } from "@/content/site";
import { IDIOMA_POR_DEFECTO } from "@/lib/i18n/idiomas";

const porDefecto = DICCIONARIOS[IDIOMA_POR_DEFECTO].enConstruccion.resources;

export const metadata: Metadata = {
  title: `${porDefecto.titulo} · ${sitio.nombre}`,
  description: porDefecto.texto,
};

export default function Resources() {
  return (
    <>
      <SiteHeader activa={RUTAS.resources} />
      <main>
        <EnConstruccion seccion="resources" />
      </main>
      <SiteFooter />
    </>
  );
}
