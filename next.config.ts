import type { NextConfig } from "next";

// Sitio estático: `next build` deja HTML plano en `out/`, que es lo que sirve
// GitHub Pages. Sin servidor no hay optimizador de imágenes, de ahí
// `unoptimized`; los assets de la página son pocos y ya vienen ligeros.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
