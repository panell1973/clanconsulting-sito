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
  // TODO: sostituire con l'URL del post LinkedIn dell'annuncio completo
  // quando il cliente lo fornisce (per ora punta alla pagina aziendale).
  recruitingAnnouncementUrl: "https://www.linkedin.com/company/102206680",
  // TODO: creare l'account su formspree.io e inserire qui l'ID del form
  // (es. "mabcdefg"). Finché resta vuoto il form contatti mostra un avviso.
  FORMSPREE_ID: "",
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
  { label: "Blog", href: "/blog" },
  { label: "Clan Talent", href: "/recruiting" },
  { label: "Contatti", href: "/contatti" },
] as const;
