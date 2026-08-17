import type { Metadata } from "next";
import Container from "@/components/Container";
import Logo, { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Logo test",
  robots: { index: false },
};

export default function LogoTestPage() {
  return (
    <Container className="space-y-12 py-16">
      <h1 className="font-serif text-3xl font-semibold text-primary">
        Confronto logo — pagina temporanea
      </h1>

      <section>
        <h2 className="mb-4 font-semibold text-primary">
          Originale vs ricostruzione SVG
        </h2>
        <div className="flex flex-wrap items-center gap-8">
          <figure>
            <img
              src="/images/logo-originale.png"
              alt="Logo originale"
              width={400}
              height={400}
              className="w-[400px] rounded-lg border border-primary/10"
            />
            <figcaption className="mt-2 text-sm text-ink/60">
              Originale (PNG)
            </figcaption>
          </figure>
          <figure>
            <div className="flex h-[400px] w-[400px] items-center justify-center rounded-lg border border-primary/10 bg-[#8a8d7f]">
              <LogoMark size={220} className="text-accent" />
            </div>
            <figcaption className="mt-2 text-sm text-ink/60">
              Ricostruzione SVG (fondo simile per confronto)
            </figcaption>
          </figure>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-semibold text-primary">Varianti componente</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-primary/10 bg-white p-6">
            <Logo variant="light" />
            <p className="mt-2 text-xs text-ink/50">light — fondo bianco</p>
          </div>
          <div className="rounded-lg bg-primary p-6">
            <Logo variant="dark" />
            <p className="mt-2 text-xs text-white/50">dark — fondo navy</p>
          </div>
          <div className="rounded-lg border border-primary/10 bg-white p-6">
            <Logo compact />
            <p className="mt-2 text-xs text-ink/50">compact — solo simbolo</p>
          </div>
          <div className="flex items-center gap-6 rounded-lg border border-primary/10 bg-white p-6">
            <LogoMark size={16} className="text-accent" />
            <LogoMark size={32} className="text-accent" />
            <LogoMark size={64} className="text-accent" />
            <LogoMark size={128} className="text-accent" />
            <p className="text-xs text-ink/50">scale ridotte (test favicon)</p>
          </div>
        </div>
      </section>
    </Container>
  );
}
