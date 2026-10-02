import type { Metadata } from "next";
import Button from "@/components/Button";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { serviceIcons } from "@/components/icons";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Training e coaching aziendale, Business Development Center, soft skills, sales, mystery shopping e service design: i servizi Clanconsulting.",
};

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-accent"
      aria-hidden="true"
    >
      <polyline points="4 12 10 18 20 6" />
    </svg>
  );
}

export default function ServiziPage() {
  return (
    <>
      <PageHero title="I nostri servizi">
        <p>
          Sei aree di intervento, un unico approccio: capire la tua azienda,
          costruire un percorso su misura e restare al tuo fianco finché i
          risultati non arrivano.
        </p>
      </PageHero>

      {services.map((service, i) => {
        const Icon = serviceIcons[service.id];
        const even = i % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-20 py-20 ${even ? "bg-white" : "bg-surface"}`}
          >
            <Container>
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <FadeIn className={even ? "" : "lg:order-2"}>
                  <Photo
                    src={service.image}
                    alt={service.imageAlt}
                    aspect="3/2"
                  />
                </FadeIn>
                <FadeIn delay={150} className={even ? "" : "lg:order-1"}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">
                    <Icon />
                  </span>
                  <h2 className="mt-5 font-serif text-3xl font-semibold text-primary">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-ink/80">
                    {service.description}
                  </p>
                  <h3 className="mt-7 text-sm font-semibold uppercase tracking-widest text-accent">
                    Cosa comprende
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-ink/80">
                        <Check />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-7 text-sm font-semibold uppercase tracking-widest text-accent">
                    Risultati per il cliente
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {service.results.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-ink/80">
                        <Check />
                        {item}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-primary py-20 text-center text-white">
        <Container>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Parliamo della tua azienda?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/80">
            Raccontaci obiettivi e situazione di partenza: costruiamo insieme
            il percorso più adatto.
          </p>
          <div className="mt-8">
            <Button href="/contatti">Contattaci</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
