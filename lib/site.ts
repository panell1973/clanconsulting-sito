// NEXT_PUBLIC_PREVIEW: impostarla a "true" (build-time) per i deploy di
// anteprima (es. Vercel .vercel.app): aggiunge meta robots noindex/nofollow,
// svuota la sitemap e il robots.txt blocca tutti i crawler. Assente o
// "false" = comportamento normale (produzione su Aruba).
export const isPreview = process.env.NEXT_PUBLIC_PREVIEW === "true";

export const site = {
  name: "Clanconsulting",
  claim: "Diamo energia alle persone, visione alle aziende",
  description:
    "Clanconsulting: training, coaching e sviluppo del business. Dal 1996 al fianco di aziende e persone per potenziare performance e risultati.",
  url: "https://www.clanconsulting.eu",
  contacts: {
    whatsapp: "+393445584630",
    whatsappDisplay: "+39 344 558 4630",
    recruitingEmail: "clanconsultingacademy@gmail.com",
  },
  social: {
    linkedinPersonal: "https://www.linkedin.com/in/emilio-orsini-6a117729",
    linkedinCompany: "https://www.linkedin.com/company/102206680",
  },
  // Dati legali ufficiali (footer e pagina privacy).
  legal: {
    companyName: "Clanconsulting di Emilio Orsini",
    address: "Via Fucilari 70 – 84014 Nocera Inferiore (SA)",
    vat: "06234730650",
    pec: "clanconsulting360@pec-mail.it",
  },
  // TODO: sostituire con l'URL del post LinkedIn dell'annuncio completo
  // quando il cliente lo fornisce (per ora punta alla pagina aziendale).
  recruitingAnnouncementUrl: "https://www.linkedin.com/company/102206680",
  // ID del form su formspree.io: se torna vuoto il form contatti mostra
  // un avviso e disabilita l'invio.
  FORMSPREE_ID: "xoejdwww",
} as const;

type NavItem = {
  label: string;
  href: string;
  /** Etichetta alternativa usata solo nel footer (es. "CDC" invece di "Clan CDC"). */
  footerLabel?: string;
};

export const nav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Servizi", href: "/servizi" },
  { label: "Clan CDC", href: "/clan-development-center", footerLabel: "CDC" },
  // TODO: ripristinare { label: "Blog", href: "/blog" } quando la sezione
  // blog sarà pubblicata (Sessione 3 del piano).
  { label: "Clan Talent", href: "/recruiting" },
  { label: "Contatti", href: "/contatti" },
] as const;
