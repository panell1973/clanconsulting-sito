import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Informativa sul trattamento dei dati personali del sito Clanconsulting, ai sensi del Regolamento UE 2016/679 (GDPR).",
};

const sectionTitleCls = "mt-10 font-serif text-2xl font-semibold text-primary";
const textCls = "mt-3 leading-relaxed text-ink/80";
const linkCls =
  "font-medium text-primary underline decoration-accent underline-offset-4 hover:text-accent";

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Informativa privacy">
        <p>
          Come trattiamo i dati personali raccolti attraverso questo sito, ai
          sensi del Regolamento UE 2016/679 (GDPR).
        </p>
      </PageHero>

      <section className="py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl font-semibold text-primary">
              Titolare del trattamento
            </h2>
            <p className={textCls}>
              Il titolare del trattamento è{" "}
              <strong>{site.legal.companyName}</strong>, con sede legale in{" "}
              {site.legal.address}, P.IVA {site.legal.vat}. Per ogni questione
              relativa alla privacy è possibile scrivere alla PEC{" "}
              <a href={`mailto:${site.legal.pec}`} className={linkCls}>
                {site.legal.pec}
              </a>
              .
            </p>

            <h2 className={sectionTitleCls}>Dati trattati e finalità</h2>
            <p className={textCls}>
              <strong>Form di contatto.</strong> Nome e cognome, email,
              telefono (facoltativo) e contenuto del messaggio, forniti
              volontariamente per ricevere una risposta alla propria richiesta.
              Base giuridica: esecuzione di misure precontrattuali adottate su
              richiesta dell&apos;interessato (art. 6.1.b GDPR).
            </p>
            <p className={textCls}>
              <strong>Candidature.</strong> I dati inviati via email per le
              selezioni (CV, video di presentazione ed eventuali altri
              allegati) sono trattati ai soli fini della selezione, sulla base
              del consenso espresso nel testo della candidatura (art. 6.1.a
              GDPR).
            </p>
            <p className={textCls}>
              Il sito non utilizza cookie di profilazione né strumenti di
              analisi del traffico. Possono essere trattati i soli dati
              tecnici di navigazione necessari al funzionamento del servizio
              di hosting.
            </p>

            <h2 className={sectionTitleCls}>Destinatari dei dati</h2>
            <p className={textCls}>
              I messaggi inviati dal form sono recapitati tramite Formspree
              Inc., che agisce come fornitore tecnico del servizio di inoltro.
              Il sito è ospitato su infrastruttura di hosting che tratta i
              dati tecnici di navigazione. I dati non sono diffusi né ceduti a
              terzi per finalità commerciali.
            </p>

            <h2 className={sectionTitleCls}>Conservazione</h2>
            <p className={textCls}>
              I dati delle richieste di contatto sono conservati per il tempo
              necessario a gestire la richiesta e comunque non oltre 24 mesi.
              I dati delle candidature sono conservati fino alla conclusione
              del processo di selezione, salvo consenso a conservarli per
              selezioni future.
            </p>

            <h2 className={sectionTitleCls}>Diritti dell&apos;interessato</h2>
            <p className={textCls}>
              Ai sensi degli artt. 15-22 GDPR è possibile chiedere in ogni
              momento l&apos;accesso ai propri dati, la rettifica, la
              cancellazione, la limitazione del trattamento, la portabilità e
              l&apos;opposizione al trattamento, oltre a revocare un consenso
              prestato. Le richieste vanno indirizzate alla PEC{" "}
              <a href={`mailto:${site.legal.pec}`} className={linkCls}>
                {site.legal.pec}
              </a>
              . Resta salvo il diritto di proporre reclamo al Garante per la
              protezione dei dati personali.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
