import type { Metadata } from "next";
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
    locale: "es",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
