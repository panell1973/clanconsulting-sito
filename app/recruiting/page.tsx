import type { Metadata } from "next";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clan Talent Management — Recruiting",
  description:
    "Selezioniamo i futuri direttori commerciali per le Agenzie Unipol della Campania. Non serve esperienza: formazione a 360°, coaching dedicato e percorso di carriera meritocratico.",
};

const mailtoHref = `mailto:${site.contacts.recruitingEmail}?subject=${encodeURIComponent(
  "Candidatura Talent Academy Management"
)}`;

const stroke = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  width: 22,
  height: 22,
} as const;

const offers = [
  {
    title: "Formazione a 360°",
    text: "Non solo competenza tecnica: un percorso che fa crescere anche la persona.",
    icon: (
      <svg {...stroke}>
        <path d="M12 4l10 5-10 5L2 9l10-5z" />
        <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
      </svg>
    ),
  },
  {
    title: "Mentoring & coaching dedicato",
    text: "Affiancamento costante con professionisti del settore e sviluppo della leadership.",
    icon: (
      <svg {...stroke}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <path d="M16 5a3 3 0 0 1 0 6" />
        <path d="M18.5 14.5c1.9.9 3.2 2.6 3.4 4.5" />
      </svg>
    ),
  },
  {
    title: "Percorso di carriera certificato",
    text: "Traguardi chiari e meritocratici verso ruoli dirigenziali, con la prospettiva di raggiungere i vertici di agenzia in tempi brevi.",
    icon: (
      <svg {...stroke}>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
  {
    title: "Trattamento economico",
    text: "RAL iniziale commisurata all'ingresso, poi scatto importante con piano provvigionale di alto livello e, ai ruoli apicali, partecipazione ai profitti di agenzia.",
    icon: (
      <svg {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.5 8.5c-.6-.9-1.5-1.5-2.5-1.5-1.7 0-3 1.3-3 3s1.3 3 3 3 3 1.3 3 3-1.3 3-3 3c-1 0-1.9-.6-2.5-1.5" />
        <path d="M12 5.5v13" />
      </svg>
    ),
  },
  {
    title: "Equilibrio e stabilità",
    text: "Inserimento a lungo termine e attenzione reale al work-life balance.",
    icon: (
      <svg {...stroke}>
        <path d="M12 3v3" />
        <path d="M5 21h14" />
        <path d="M12 6l-7 4h14l-7-4z" />
        <path d="M5 10l-2 5a3 3 0 0 0 6 0l-2-5M19 10l-2 5a3 3 0 0 0 6 0l-2-5" transform="scale(0.85) translate(2 1)" />
      </svg>
    ),
  },
  {
    title: "Nella tua provincia",
    text: "Inserimento in agenzia nella provincia di residenza: cresci sul tuo territorio, senza emigrare.",
    icon: (
      <svg {...stroke}>
        <path d="M12 21c-4-4.5-7-7.6-7-11a7 7 0 0 1 14 0c0 3.4-3 6.5-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Ufficio e remoto",
    text: "Organizzazione del lavoro flessibile: in agenzia e da remoto.",
    icon: (
      <svg {...stroke}>
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

const activities = [
  "Processi di lead management e gestione prospect",
  "Organizzazione e gestione dei portafogli d'agenzia",
  "Analisi dei KPI di performance",
  "Gestione digital & CRM con i principali tool del settore",
  "Formazione d'aula e affiancamento on-the-job con coach dedicato nei primi mesi",
];

const requirements = [
  "Diploma o laurea (anche in corso)",
  "Dimestichezza con strumenti informatici (Office, Google Workspace, CRM)",
  "Eccellenti doti comunicative e relazionali",
  "Propensione alla leadership e orientamento ai risultati",
  "Dinamismo e attitudine commerciale",
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

export default function RecruitingPage() {
  return (
    <>
      <PageHero title="Clan Talent Management">
        <p className="font-serif text-xl italic">
          &laquo;Non cerchiamo la tua esperienza: cerchiamo il tuo
          potenziale.&raquo;
        </p>
      </PageHero>

      {/* Intro */}
      <section className="py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <SectionTitle eyebrow="La selezione">
                Futuri direttori commerciali, Agenzie Unipol Campania
              </SectionTitle>
              <p className="leading-relaxed text-ink/80">
                Con Clan Talent Management stiamo selezionando i futuri
                direttori commerciali per le Agenzie Unipol della Campania, in
                tutte e cinque le province. Non serve esperienza pregressa:
                contano il potenziale, il dinamismo e la voglia di crescere
                sul proprio territorio, senza dover emigrare.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Cosa offriamo */}
      <section className="bg-surface py-24">
        <Container>
          <SectionTitle eyebrow="Cosa offriamo">
            Un percorso, non un posto
          </SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer, i) => (
              <FadeIn key={offer.title} delay={i * 60}>
                <div className="h-full rounded-xl bg-white p-6 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-primary">
                    {offer.icon}
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-primary">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {offer.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Il percorso */}
      <section className="py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <img
                src="/images/piramide-carriera.png"
                alt="Piramide del percorso di carriera: dall'ingresso in agenzia al ruolo di Direttore Commerciale"
                width={532}
                height={355}
                loading="lazy"
                className="w-full rounded-xl border border-primary/10 shadow-lg"
              />
            </FadeIn>
            <FadeIn delay={150}>
              <SectionTitle eyebrow="Il percorso" align="left">
                Chi cerchiamo
              </SectionTitle>
              <p className="leading-relaxed text-ink/80">
                Cerchiamo risorse ad alto potenziale per un percorso
                strutturato: i candidati entrano subito nell&apos;attività
                commerciale delle Agenzie e, affiancati da coach esperti,
                acquisiscono le competenze per guidare le sedi e ambire al
                ruolo di Direttore Commerciale.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Cosa farai + Requisiti */}
      <section className="bg-surface py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-serif text-2xl font-semibold text-primary sm:text-3xl">
                Cosa farai concretamente
              </h2>
              <ul className="mt-6 space-y-3">
                {activities.map((item) => (
                  <li key={item} className="flex gap-2 text-ink/80">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={120}>
              <h2 className="font-serif text-2xl font-semibold text-primary sm:text-3xl">
                Requisiti
              </h2>
              <ul className="mt-6 space-y-3">
                {requirements.map((item) => (
                  <li key={item} className="flex gap-2 text-ink/80">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
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
