import Container from "./Container";
import ContactForm from "./ContactForm";
import FadeIn from "./FadeIn";
import { site } from "@/lib/site";

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.6-1.3.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1.1 2.6c.1.2 1.8 2.7 4.3 3.8 1.6.7 2.2.8 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8c0 .3.3.6.6.6h16.8c.3 0 .6-.3.6-.6V3.6a.6.6 0 0 0-.6-.6zM8.3 18.4H5.7V9.7h2.6v8.7zM7 8.5a1.6 1.6 0 1 1 0-3.1 1.6 1.6 0 0 1 0 3.1zm11.4 9.9h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.7V9.7h2.6v1.2h.1c.3-.7 1.2-1.4 2.5-1.4 2.6 0 3.1 1.7 3.1 4v4.9z" />
    </svg>
  );
}

const channelCls =
  "flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.06] px-5 py-4 text-sm text-white/90 transition-colors hover:border-accent/50 hover:text-accent";

/** Sezione contatti condivisa: chiude la home e costruisce la pagina /contatti. */
export default function ContactSection() {
  return (
    <section
      id="contatti"
      className="bg-gradient-to-b from-primary to-[#0A1D33] py-24 text-white"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[2fr,3fr] lg:items-start">
          <div>
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Contatti
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                Parliamo del tuo progetto
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-white/80">
                Raccontaci i tuoi obiettivi: ti rispondiamo con una proposta
                concreta, su misura per la tua azienda.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="mt-10 space-y-4">
                <a
                  href={`https://wa.me/${site.contacts.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={channelCls}
                >
                  <WhatsAppIcon />
                  <span>WhatsApp: {site.contacts.whatsappDisplay}</span>
                </a>
                <a
                  href={site.social.linkedinCompany}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={channelCls}
                >
                  <LinkedInIcon />
                  <span>Seguici su LinkedIn</span>
                </a>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={200}>
            <div className="rounded-xl bg-white p-6 shadow-2xl shadow-black/30 sm:p-10">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
