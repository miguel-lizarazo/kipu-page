import type { Metadata } from "next";
import { LanguageProvider } from "@/components/i18n/language-provider";
import { IDIOMA_POR_DEFECTO } from "@/lib/i18n/idiomas";
import { SCRIPT_TEMA } from "@/lib/tema";
import { sitio } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${sitio.nombre} · ${sitio.tagline}`,
  applicationName: sitio.nombre,
  description: sitio.descripcion,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${sitio.nombre} · ${sitio.tagline}`,
    description: sitio.descripcion,
    type: "website",
    locale: IDIOMA_POR_DEFECTO,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // `lang` sale del idioma por defecto y lo reescribe el proveedor si hay
    // otro guardado; `suppressHydrationWarning` porque el script del tema toca
    // este mismo elemento antes de que React lo vea.
    <html lang={IDIOMA_POR_DEFECTO} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: SCRIPT_TEMA }} />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
