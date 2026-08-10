import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * El activo de marca es un JPG cuadrado con el fondo verde azulado incluido,
 * así que se recorta en un contenedor redondeado en vez de intentar sacarlo
 * sobre el fondo de la página.
 *
 * TODO: pedir el logotipo en SVG con fondo transparente. Con él se podría
 * recolorear la marca y dejar de arrastrar un JPG de 17 kB.
 */
type KipuLogoProps = {
  href?: string;
  className?: string;
  tamano?: number;
  conNombre?: boolean;
  priority?: boolean;
};

export function KipuLogo({
  href = "/",
  className,
  tamano = 36,
  conNombre = true,
  priority = false,
}: KipuLogoProps) {
  const marca = (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/kipu-logo-full.jpg"
        alt=""
        width={tamano}
        height={tamano}
        priority={priority}
        className="rounded-xl"
        style={{ width: tamano, height: tamano }}
      />
      {conNombre ? (
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Kipu
        </span>
      ) : null}
    </span>
  );

  if (!href) {
    return <span className={cn("inline-flex items-center", className)}>{marca}</span>;
  }

  return (
    <Link
      href={href}
      aria-label="Kipu, ir al inicio"
      className={cn("inline-flex items-center", className)}
    >
      {marca}
    </Link>
  );
}
