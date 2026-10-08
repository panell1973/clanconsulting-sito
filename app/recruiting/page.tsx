import type { Metadata } from "next";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clan Talent",
  description:
    "Clan Talent: ricerca e selezione su misura per integrare le risorse strategiche della tua azienda. In corso: la selezione dei futuri direttori commerciali per le Agenzie Unipol della Campania.",
};

const mailtoHref = `mailto:${site.contacts.recruitingEmail}?subject=${encodeURIComponent(
  "Candidatura Talent Academy Management"
)}`;

const methodSteps = [
  "Definiamo in dettaglio il profilo ricercato, le competenze chiave e il contesto organizzativo d'inserimento.",
  "Attiviamo canali di ricerca mirati e strategie per intercettare i migliori profili sul mercato.",
  "Conduciamo colloqui strutturati e analisi delle soft skill per garantire un reale allineamento con i valori aziendali.",
  "Presentiamo una shortlist qualificata di candidati e affianchiamo la direzione aziendale fino all'inserimento del professionista.",
];

const applySteps = [
  {
    title: "CV aggiornato",
    text: "In formato PDF.",
  },
  {
    title: "Short video di max 20 secondi",
    text: "Chi sei e perché scegliere te.",
  },
  {
    title: "Consenso privacy & GDPR",
    text: "Nel testo della mail, ai sensi dell'art. 13 del Regolamento UE 2016/679: “Dichiaro di aver letto l'informativa privacy e acconsento al trattamento della mia immagine e voce tramite il video inviato ai soli fini della selezione.”",
  },
  {
    title: "Invia la candidatura",
    text: `A ${site.contacts.recruitingEmail} con oggetto “Candidatura Talent Academy Management”.`,
  },
];

export default function RecruitingPage() {
  return (
    <>
      <PageHero title="Clan Talent Management">
        <p className="font-serif text-xl italic">
          &laquo;Non cerchiamo la tua esperienza: cerchiamo il tuo
          potenziale.&raquo;
        </p>
      </PageHero>

      {/* Ricerca e Selezione */}
      <section className="py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <SectionTitle eyebrow="Ricerca e Selezione">
                Il talento giusto per la crescita della tua azienda
              </SectionTitle>
              <p className="leading-relaxed text-ink/80">
                Strutturiamo processi di selezione su misura per integrare le
                risorse strategiche di cui la tua organizzazione ha bisogno.
              </p>
              <p className="mt-4 leading-relaxed text-ink/80">
                Trovare i professionisti giusti richiede metodo, visione e
                strategie personalizzate. Clan Talent si sviluppa attraverso
                un percorso strutturato su misura per ogni realtà aziendale.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16">
            <FadeIn>
              <h3 className="text-center font-serif text-2xl font-semibold text-primary">
                La nostra metodologia
              </h3>
            </FadeIn>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2">
              {methodSteps.map((step, i) => (
                <FadeIn key={step} delay={i * 80}>
                  <li className="flex h-full gap-4 rounded-xl bg-surface p-6">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-serif text-lg font-semibold text-primary"
                    >
                      {i + 1}
                    </span>
                    <p className="leading-relaxed text-ink/80">{step}</p>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* La selezione */}
      <section className="bg-surface py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="mb-6 inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-widest text-primary shadow-md">
                Ottobre – Dicembre 2026: chi stiamo cercando
              </p>
              <SectionTitle eyebrow="La selezione" align="left">
                Futuri direttori commerciali, Agenzie Unipol Campania
              </SectionTitle>
              <p className="leading-relaxed text-ink/80">
                Con Clan Talent Management stiamo selezionando i futuri
                direttori commerciali per le Agenzie Unipol della Campania, in
                tutte e cinque le province. Non serve esperienza pregressa:
                contano il potenziale, il dinamismo e la voglia di crescere
                sul proprio territorio, senza dover emigrare.
              </p>
              <div className="mt-8">
                <a
                  href={site.recruitingAnnouncementUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-current px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Leggi l&apos;annuncio completo su LinkedIn
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <img
                src="/images/piramide-carriera.png"
                alt="Piramide del percorso di carriera: dall'ingresso in agenzia al ruolo di Direttore Commerciale"
                width={532}
                height={355}
                loading="lazy"
                className="w-full rounded-xl border border-primary/10 shadow-lg"
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Come candidarsi */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-8 text-white shadow-xl sm:p-12">
              <h2 className="font-serif text-3xl font-semibold">
                Come candidarsi
              </h2>
              <ol className="mt-8 space-y-6">
                {applySteps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-serif text-lg font-semibold text-primary"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/80">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-10">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-[#c69a3e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Invia la tua candidatura
                </a>
                <p className="mt-3 text-xs text-white/60">
                  Si apre la tua email con oggetto già compilato.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
