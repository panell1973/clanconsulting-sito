import Link from "next/link";

/**
 * Simbolo Clanconsulting: quadrato ruotato 45° (rombo) con intaglio a "C/G".
 * Il perimetro si interrompe sul lato alto-destro (apertura della C) e dal
 * gomito interno destro parte la barra orizzontale con terminale a becco
 * (la traversa della G). Riempimento con currentColor: ricolorabile via CSS.
 */
export function LogoMark({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="currentColor"
        d="M63.8 17.8 L50 4 L4 50 L50 96 L96 50 L76 30 L76 42 L36 42 L28 58 L44 52 L79.9 52 L50 81.9 L18.1 50 L50 18.1 L63.8 31.9 Z"
      />
    </svg>
  );
}

export default function Logo({
  variant = "light",
  compact = false,
  size = 34,
}: {
  /** light: scritta navy (fondi chiari) — dark: scritta bianca (fondi navy) */
  variant?: "light" | "dark";
  compact?: boolean;
  size?: number;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={size} className="shrink-0 text-accent" />
      {!compact && (
        <span
          className={`font-sans text-[15px] font-extrabold uppercase tracking-[0.1em] ${
            variant === "dark" ? "text-white" : "text-primary"
          }`}
        >
          Clanconsulting
        </span>
      )}
    </span>
  );
}

export function LogoLink({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  return (
    <Link href="/" aria-label="Clanconsulting — Home">
      <Logo variant={variant} />
    </Link>
  );
}
