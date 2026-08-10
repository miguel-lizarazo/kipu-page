import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/secciones/hero";
import { BloquesInicio } from "@/components/secciones/bloques-inicio";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <BloquesInicio />
      </main>
      <SiteFooter />
    </>
  );
}
