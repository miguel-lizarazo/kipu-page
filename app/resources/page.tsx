import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { EnConstruccion } from "@/components/ui/en-construccion";
import { enConstruccion, sitio } from "@/content/site";

export const metadata: Metadata = {
  title: `Resources · ${sitio.nombre}`,
  description: enConstruccion.resources.texto,
};

export default function Resources() {
  return (
    <>
      <SiteHeader activa="/resources/" />
      <main>
        <EnConstruccion
          titulo={enConstruccion.resources.titulo}
          texto={enConstruccion.resources.texto}
        />
      </main>
    </>
  );
}
