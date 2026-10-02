import { ReactNode } from "react";
import Container from "./Container";

export default function PageHero({
  title,
  centered = false,
  children,
}: {
  title: string;
  /** true per le bande senza sottotitolo: titolo centrato e leggermente più grande. */
  centered?: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-primary text-white ${
        centered ? "py-24" : "py-20"
      }`}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
      >
        <defs>
          <pattern
            id="page-hero-dots"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#F6F5F2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#page-hero-dots)" />
      </svg>
      <Container className="relative">
        <h1
          className={`font-serif font-semibold ${
            centered
              ? "text-center text-4xl sm:text-6xl"
              : "text-4xl sm:text-5xl"
          }`}
        >
          {title}
        </h1>
        {children && (
          <div className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
