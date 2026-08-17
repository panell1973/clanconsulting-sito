import type { Metadata } from "next";
import Button from "@/components/Button";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import SectionTitle from "@/components/SectionTitle";
import VimeoFacade from "@/components/VimeoFacade";

export const metadata: Metadata = {
  title: "Clan Development Center",
  description:
    "Il Clan Development Center (CDC) è la divisione Clanconsulting per la gestione delle opportunità di business e delle relazioni con i clienti, anche in outsourcing: nurturing, CRM avanzato, customer experience.",
};

const audiencePoints = [
  {
    title: "Conversione contatti → appuntamenti",
    text: "Ogni contatto viene gestito con metodo fino a diventare un appuntamento qualificato.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
      </svg>
    ),
  },
  {
    title: "Vendite e up-selling",
    text: "Il flusso di relazione è progettato per generare vendite e far crescere il valore di ogni cliente.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
  {
    title: "Fidelizzazione nel tempo",
    text: "Nurturing costante e attenzioni misurabili: i clienti restano, e tornano.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21C7 16.5 3 13.2 3 9.3 3 6.4 5.2 4 8 4c1.6 0 3.1.8 4 2 .9-1.2 2.4-2 4-2 2.8 0 5 2.4 5 5.3 0 3.9-4 7.2-9 11.7z" />
      </svg>
    ),
  },
  {
    title: "Flusso unico online-offline",
    text: "Email, telefono, canali digitali e punto vendita: un'unica esperienza, senza interruzioni.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 7a5 5 0 0 1 0 10h-3" />
        <path d="M7 17a5 5 0 0 1 0-10h3" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
];

export default function CdcPage() {
  return (
    <>
      <PageHero title="Clan Development Center">
        <p>
          Dove i dati diventano relazioni. Dove le relazioni generano valore.
        </p>
      </PageHero>

      {/* Manifesto */}
      <section className="bg-surface py-20">
        <Container>
          <FadeIn>
            <blockquote className="mx-auto max-w-4xl text-center">
              <p className="font-serif text-2xl font-medium leading-relaxed text-primary sm:text-3xl">
                &laquo;In ogni azienda esiste un potenziale enorme, spesso
                nascosto nei dati, nei contatti e nei clienti già presenti. Il
                Clan Development Center nasce per far emergere quel valore e
                trasformarlo in opportunità concrete di crescita. Uniamo
                strategia, tecnologia e persone.{" "}
                <em className="italic text-accent">
                  Non siamo solo un team: siamo un Clan.
                </em>
                &raquo;
              </p>
            </blockquote>
          </FadeIn>
        </Container>
      </section>

      {/* Cos'è il CDC */}
      <section className="py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <Photo
                src="/images/bdc.jpg"
                alt="Il team del Clan Development Center al lavoro"
                aspect="3/2"
              />
            </FadeIn>
            <FadeIn delay={150}>
              <SectionTitle eyebrow="Cos'è" align="left">
                La divisione che sviluppa il tuo business
              </SectionTitle>
              <p className="leading-relaxed text-ink/80">
                Il Clan Development Center è la divisione strategica di
                Clanconsulting dedicata alla gestione delle opportunità di
                business e al consolidamento delle relazioni con i clienti.
                Ottimizza la comunicazione e migliora la customer experience
                con un approccio strutturato e proattivo.
              </p>
              <p className="mt-4 leading-relaxed text-ink/80">
                Il CDC supporta le aziende — o le sostituisce, con un servizio
                in <strong>outsourcing</strong> — implementando tutti o parte
                dei livelli di relazione con il cliente, con attività di
                nurturing e sistemi avanzati di CRM.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* A chi serve */}
      <section className="bg-surface py-24">
        <Container>
          <SectionTitle eyebrow="A chi serve">
            Per chi vende, ogni contatto conta
          </SectionTitle>
          <p className="mx-auto -mt-6 mb-12 max-w-3xl text-center leading-relaxed text-ink/80">
            Chi opera nelle vendite deve garantire un&apos;esperienza
            d&apos;acquisto personalizzata e gestire con professionalità i
            contatti su email, telefono e su tutti i canali, creando un flusso
            unico tra online e offline. Il CDC nasce per questo: massimizzare
            il tasso di conversione e mantenere alta la fidelizzazione nel
            tempo.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {audiencePoints.map((point, i) => (
              <FadeIn key={point.title} delay={i * 80}>
                <div className="flex h-full gap-4 rounded-xl bg-white p-6 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    {point.icon}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-primary">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">
                      {point.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Video */}
      <section className="py-24">
        <Container>
          <SectionTitle eyebrow="Il CDC in un minuto">
            Guarda come lavoriamo
          </SectionTitle>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <VimeoFacade videoId="683859039" title="Clan Development Center" />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-surface py-24">
        <Container>
          <SectionTitle eyebrow="Il team">Chi guida il CDC</SectionTitle>
          <FadeIn>
            <div className="mx-auto max-w-sm rounded-xl bg-white p-10 text-center shadow-sm">
              <span
                aria-hidden="true"
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary font-serif text-2xl font-semibold text-accent"
              >
                GE
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">
                Giusy Esposito
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-accent">
                CDC Manager
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                Coordina le attività del Clan Development Center: processi,
                persone e relazioni con i clienti.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-center text-white">
        <Container>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Vuoi un CDC al lavoro per la tua azienda?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/80">
            Raccontaci come gestisci oggi contatti e clienti: ti mostriamo
            quanto valore c&apos;è ancora da far emergere.
          </p>
          <div className="mt-8">
            <Button href="/contatti">Contattaci</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
