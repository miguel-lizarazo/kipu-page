# Kipu · sitio

Página pública de Kipu, el conjunto de herramientas de govtech open source.
Next.js App Router con export estático, TypeScript y Tailwind 4 —el mismo stack
que la aplicación, para que marca y código no se separen.

## Trabajar en local

```bash
npm install
npm run dev
```

En [http://localhost:3000](http://localhost:3000).

## Dónde tocar qué

| Quiero cambiar | Archivo |
|---|---|
| Cualquier texto de la página | `content/site.ts` |
| Colores y tipografía | `app/globals.css` |
| Ritmo vertical y ancho de las secciones | `components/ui/seccion.tsx` |
| El gráfico de cuerdas del hero | `components/brand/quipu.tsx` |
| Orden de las secciones | `app/page.tsx` |

Los tokens de `app/globals.css` son copia literal de los de la app
(`Kipu_app/app/globals.css`). Si cambian allí, hay que cambiarlos aquí.

## Publicar

```bash
npm run build
```

Deja el sitio estático en `out/`, listo para GitHub Pages, Netlify o cualquier
servidor de archivos. No hay backend ni variables de entorno.

## Pendiente

- Logotipo en SVG con fondo transparente; hoy se usa un JPG cuadrado recortado.
- Enlaces reales de GitHub: los de `content/site.ts` están marcados con `TODO`.
- Multiidioma es/en/pt, como la app.
- Imagen de Open Graph propia.
