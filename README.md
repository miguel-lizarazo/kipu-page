# Kipu · sitio

Página pública de Kipu, el conjunto de herramientas de govtech open source.
Next.js App Router con export estático, TypeScript y Tailwind 4 —el mismo stack
que la aplicación, para que marca y código no se separen.

Ahora mismo es la identidad visual y poco más: la home y dos pestañas, `About` y
`Resources`, en construcción. En la cabecera hay un botón de tema y un selector
de idioma.

## Trabajar en local

```bash
npm install
npm run dev
```

En [http://localhost:3000](http://localhost:3000).

## Temas

Mientras nadie toque el botón manda `prefers-color-scheme`, es decir lo que la
persona tenga configurado en su sistema. El botón guarda una preferencia
explícita en `localStorage` y esa gana; para volver al sistema hay que borrar
`kipu_tema`.

La paleta se escribe una vez, con `light-dark()`: el botón no reasigna colores,
solo fija `color-scheme` en el elemento raíz. Un script en el `<head>` aplica lo
guardado antes de pintar, para que no haya un fogonazo del tema contrario.

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

## Idiomas

Español, inglés y portugués, los mismos que la app. El idioma se resuelve en el
cliente y se guarda en `localStorage`: el sitio es estático y no hay servidor
que lea una cookie, como sí hace la app.

De ahí dos límites conocidos, que se arreglan el día que haya rutas `/en/` y
`/pt/`: el HTML servido está siempre en español, y el título de la pestaña y la
descripción no cambian de idioma —se generan en build—.

Añadir un texto es añadir la clave en los tres diccionarios de `content/site.ts`;
si falta en alguno, TypeScript lo dice.

## Dónde tocar qué

| Quiero cambiar | Archivo |
|---|---|
| Cualquier texto, en los tres idiomas | `content/site.ts` |
| Colores de ambos temas | `app/globals.css` |
| Las pestañas de la barra superior | `content/site.ts` → `RUTAS` y `nav` |
| El gráfico de cuerdas del hero | `components/brand/quipu.tsx` |

## Publicar

Cada push a `main` dispara `.github/workflows/deploy.yml`, que pasa el lint,
compila y sube `out/` a GitHub Pages. No hay que hacer nada a mano.

Para compilar en local:

```bash
npm run build
```

El sitio queda en `out/`: HTML plano, sin backend ni variables de entorno.

### Dominio

`kiputech.org`, registrado en Squarespace. El dominio vive en `public/CNAME`,
que Next copia a `out/` en cada build: así sobrevive a los despliegues y no
depende de un ajuste guardado solo en la interfaz de GitHub.

En el DNS de Squarespace, el vértice apunta a las cuatro IP de GitHub Pages
(`185.199.108-111.153`) y `www` es un CNAME a `miguel-lizarazo.github.io`.
Squarespace tiende a reponer sus propios registros si el dominio sigue
conectado a un sitio suyo; hay que desconectarlo primero.

## Pendiente

- Contenido real de `About` y `Resources`.
- Logotipo en SVG con fondo transparente; hoy se usa un JPG cuadrado recortado.
- Enlaces a repositorios, cuando haya organización pública.
- Multiidioma es/en/pt, como la app.
- Imagen de Open Graph propia.
