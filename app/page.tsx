import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Photo from "@/components/Photo";
import SectionTitle from "@/components/SectionTitle";
import { serviceIcons } from "@/components/icons";
import { services } from "@/lib/services";

function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Griglia di punti */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.05]">
        <defs>
          <pattern
            id="hero-dots"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#F6F5F2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>
      {/* Linee curve ascendenti */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          d="M-100 780 C 350 700, 700 520, 1540 120"
          stroke="#D4A94E"
          strokeOpacity="0.06"
          strokeWidth="2"
        />
        <path
          d="M-100 840 C 400 780, 800 620, 1540 260"
          stroke="#F6F5F2"
          strokeOpacity="0.05"
          strokeWidth="1.5"
        />
        <path
          d="M-100 720 C 300 620, 650 420, 1540 -20"
          stroke="#D4A94E"
          strokeOpacity="0.04"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 text-accent" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const glass =
  "rounded-xl border border-white/15 bg-primary/60 shadow-2xl shadow-black/40 backdrop-blur-md";

function HeroVisual() {
  return (
    <div className="relative hidden lg:block" aria-hidden="true">
      <FadeIn delay={200}>
        <Photo
          src="/images/hero.jpg"
          alt=""
          aspect="3/2"
          overlay="medium"
          priority
          className="rounded-2xl"
        />
      </FadeIn>
      <FadeIn delay={400} className="absolute -left-6 -top-6 z-10">
        <div className={`${glass} -rotate-3 px-7 py-5`}>
          <p className="font-serif text-4xl font-semibold text-accent">30</p>
          <p className="mt-1 text-sm text-white/80">anni di esperienza</p>
        </div>
      </FadeIn>
      <FadeIn delay={550} className="absolute -bottom-6 -right-4 z-10">
        <div className={`${glass} rotate-2 px-7 py-5`}>
          <Stars />
          <p className="mt-2 text-sm text-white/80">Programmi su misura</p>
        </div>
      </FadeIn>
    </div>
  );
}

function HeroStrip() {
  return (
    <div className="mt-12 flex flex-wrap gap-3 lg:hidden">
      {["30 anni di esperienza", "Performance in crescita", "Programmi su misura"].map(
        (label) => (
          <span
            key={label}
            className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs text-white/70"
          >
            {label}
          </span>
        )
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-gradient-to-b from-primary to-[#0A1D33] text-white">
      <HeroBackground />
      <Container className="relative py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <FadeIn>
              <p className="inline-flex items-center rounded-full border border-accent/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                Dal 1996 nel training
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.1] sm:text-6xl lg:text-7xl">
                Diamo <em className="italic text-accent">energia</em> alle
                persone, <em className="italic text-accent">visione</em> alle
                aziende
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
                Training, coaching e sviluppo del business per organizzazioni
                che vogliono crescere. Programmi su misura, assistenza
                continuativa, trent&apos;anni di esperienza sul campo.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/servizi">Scopri i servizi</Button>
                <Button href="/contatti" variant="outlineLight">
                  Contattaci
                </Button>
              </div>
              <p className="mt-8 text-sm text-white/50">
                Training &amp; Coaching · BDC · Soft Skills · Sales
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <HeroStrip />
            </FadeIn>
          </div>
          <HeroVisual />
        </div>
      </Container>
      <div
        aria-hidden="true"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce text-white/40"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="5 9 12 16 19 9" />
        </svg>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="bg-surface py-24">
      <Container>
        <SectionTitle eyebrow="Cosa facciamo">I nostri servizi</SectionTitle>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.id];
            return (
              <FadeIn key={service.id} delay={i * 80}>
                <Link
                  href={`/servizi#${service.id}`}
                  className="group block h-full rounded-xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative">
                    <Photo
                      src={service.image}
                      alt={service.imageAlt}
                      aspect="3/2"
                      zoom
                      className="rounded-b-none rounded-t-xl border-0"
                    />
                    <span className="absolute -bottom-5 left-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-primary shadow-md">
                      <Icon />
                    </span>
                  </div>
                  <div className="px-5 pb-6 pt-9">
                    <h3 className="font-serif text-xl font-semibold text-primary group-hover:text-accent">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {service.short}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function AboutBrief() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <Photo
              src="/images/chi-siamo.jpg"
              alt="Emilio Orsini, fondatore di Clanconsulting"
              aspect="3/4"
              className="mx-auto max-w-md"
            />
          </FadeIn>
          <FadeIn delay={150}>
            <SectionTitle eyebrow="Chi siamo" align="left">
              Trent&apos;anni di training, una nuova visione
            </SectionTitle>
            <p className="leading-relaxed text-ink/80">
              Clanconsulting nasce nel 2024 dall&apos;esperienza di{" "}
              <strong>Emilio Orsini</strong>, trainer e coach attivo dal 1996:
              dagli esordi con Half a Car, poi diventata The Academy — realtà
              di riferimento del training nell&apos;Automotive Business in
              Italia — fino a oggi. Una storia costruita in aula e sul campo,
              al fianco di reti vendita e organizzazioni di ogni dimensione.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              Base operativa in Campania, progetti in tutta Italia: programmi
              su misura, assistenza continuativa e un obiettivo semplice — dare
              energia alle persone e visione alle aziende.
            </p>
            <div className="mt-8">
              <Button href="/chi-siamo" variant="outline">
                La nostra storia
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AboutBrief />
    </>
  );
}
