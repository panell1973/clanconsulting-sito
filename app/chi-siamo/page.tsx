import type { Metadata } from "next";
import Button from "@/components/Button";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "La storia di Clanconsulting e di Emilio Orsini: trent'anni di training e coaching, dagli esordi con Half a Car e The Academy alla fondazione nel 2024.",
};

const timeline = [
  {
    year: "1996",
    title: "Gli esordi con Half a Car",
    text: "Emilio Orsini inizia il suo percorso di trainer con Half a Car, azienda di training del Delaware (USA), lavorando con le reti vendita del settore automotive.",
  },
  {
    year: "2000s",
    title: "The Academy",
    text: "Half a Car diventa The Academy, realtà di riferimento del training nell'Automotive Business in Italia. Anni di aula, coaching e progetti con concessionarie e case madri.",
  },
  {
    year: "2024",
    title: "Nasce Clanconsulting",
    text: "Trent'anni di esperienza confluiscono in un progetto nuovo: una società di consulenza con base in Campania che unisce training, coaching e sviluppo del business.",
  },
];

export default function ChiSiamoPage() {
  return (
    <>
      <PageHero title="Chi siamo">
        <p>
          {site.claim}. Da questa idea, e da trent&apos;anni di esperienza sul
          campo, nasce Clanconsulting.
        </p>
      </PageHero>

      <section className="py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[2fr,3fr] lg:items-start">
            <FadeIn>
              <Photo
                src="/images/chi-siamo.jpg"
                alt="Emilio Orsini, fondatore di Clanconsulting"
                aspect="3/4"
              />
              <p className="mt-4 text-sm text-ink/60">
                Emilio Orsini, fondatore di Clanconsulting.{" "}
                <a
                  href={site.social.linkedinPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline decoration-accent underline-offset-4 hover:text-accent"
                >
                  Profilo LinkedIn
                </a>
              </p>
            </FadeIn>
            <div>
              <SectionTitle eyebrow="La storia" align="left">
                Dal 1996 a oggi
              </SectionTitle>
              <ol className="relative space-y-10 border-l-2 border-accent/30 pl-8">
                {timeline.map((step, i) => (
                  <FadeIn key={step.year} delay={i * 120}>
                    <li className="relative">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-white"
                      />
                      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                        {step.year}
                      </p>
                      <h3 className="mt-1 font-serif text-2xl font-semibold text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-ink/80">
                        {step.text}
                      </p>
                    </li>
                  </FadeIn>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <SectionTitle eyebrow="Mission e valori">
            In cosa crediamo
          </SectionTitle>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Le persone al centro",
                text: "La crescita di un'azienda passa dalla crescita delle sue persone: energia, motivazione e competenze si allenano.",
              },
              {
                title: "Su misura, sempre",
                text: "Nessun programma a catalogo: ogni percorso nasce dall'ascolto dell'azienda e dai suoi obiettivi reali.",
              },
              {
                title: "Risultati che restano",
                text: "Non finiamo con l'aula: assistenza continuativa e verifiche sul campo, finché il metodo diventa patrimonio dell'azienda.",
              },
            ].map((value, i) => (
              <FadeIn key={value.title} delay={i * 100}>
                <div className="h-full rounded-xl bg-white p-8 shadow-sm">
                  <h3 className="font-serif text-xl font-semibold text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {value.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionTitle eyebrow="Il team">Chi lavora con te</SectionTitle>
          <div className="mx-auto max-w-3xl space-y-4 text-center leading-relaxed text-ink/80">
            <p>
              Accanto a Emilio Orsini lavora una figura senior con esperienza
              consolidata in ambito BDC e CRM, insieme a una rete di
              professionisti selezionati per i progetti che richiedono
              competenze specifiche.
            </p>
            <p>
              Un clan, appunto: piccolo, affiatato e concentrato sui risultati
              dei clienti.
            </p>
          </div>
          <div className="mt-10 text-center">
            <Button href="/contatti">Lavora con noi</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
