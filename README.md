# Kipu · sitio

Página pública de Kipu, el conjunto de herramientas de govtech open source.
Next.js App Router con export estático, TypeScript y Tailwind 4 —el mismo stack
que la aplicación, para que marca y código no se separen.

Ahora mismo es la identidad visual y poco más: la home y dos pestañas, `About` y
`Resources`, en construcción.

## Trabajar en local

```bash
npm install
npm run dev
```

En [http://localhost:3000](http://localhost:3000).

## Temas

Dos paletas, sin interruptor: manda `prefers-color-scheme`, es decir lo que la
persona ya tenga configurado en su sistema.

| | Claro | Oscuro |
|---|---|---|
| Fondo | `#f5f4ef` | `#1f1e1d` |
| Tarjeta | `#fbfaf6` | `#262624` |
| Texto | `#1f1e1d` | `#f5f4ef` |
| Marca (texto y rellenos) | `#0a6b74` | `#58bfcb` |
| Marca (decorativo) | `#089fac` | `#58bfcb` |

Los tokens del oscuro son copia literal de los de la app
(`Kipu_app/app/globals.css`); si cambian allí, hay que cambiarlos aquí. El claro
usa cremas cálidas y sin blanco puro.

El verde azulado de marca sobre crema da 2.9:1, así que como texto no vale: en
claro se usa la versión honda (`#0a6b74`, 5.7:1) y el brillante queda para lo
decorativo. Medido en ambos temas, todo el texto pasa WCAG AA.

## Dónde tocar qué

| Quiero cambiar | Archivo |
|---|---|
| Cualquier texto de la página | `content/site.ts` |
| Colores de ambos temas | `app/globals.css` |
| Las pestañas de la barra superior | `content/site.ts` → `navegacion` |
| El gráfico de cuerdas del hero | `components/brand/quipu.tsx` |

## Publicar

```bash
npm run build
```

Deja el sitio estático en `out/`, listo para GitHub Pages, Netlify o cualquier
servidor de archivos. No hay backend ni variables de entorno.

## Pendiente

- Contenido real de `About` y `Resources`.
- Logotipo en SVG con fondo transparente; hoy se usa un JPG cuadrado recortado.
- Enlaces a repositorios, cuando haya organización pública.
- Multiidioma es/en/pt, como la app.
- Imagen de Open Graph propia.
