import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { EnConstruccion } from "@/components/ui/en-construccion";
import { enConstruccion, sitio } from "@/content/site";

export const metadata: Metadata = {
  title: `About · ${sitio.nombre}`,
  description: enConstruccion.about.texto,
};

export default function About() {
  return (
    <>
      <SiteHeader activa="/about/" />
      <main>
        <EnConstruccion
          titulo={enConstruccion.about.titulo}
          texto={enConstruccion.about.texto}
        />
      </main>
    </>
  );
}
