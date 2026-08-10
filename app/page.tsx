import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/secciones/hero";
import { QueEs } from "@/components/secciones/que-es";
import { Herramientas } from "@/components/secciones/herramientas";
import { Principios } from "@/components/secciones/principios";
import { Empezar } from "@/components/secciones/empezar";
import { Cierre } from "@/components/secciones/cierre";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <QueEs />
        <Herramientas />
        <Principios />
        <Empezar />
        <Cierre />
      </main>
      <SiteFooter />
    </>
  );
}
