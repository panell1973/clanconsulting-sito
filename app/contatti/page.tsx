import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Clanconsulting: form, WhatsApp e LinkedIn per parlare di training, coaching e sviluppo del business per la tua azienda.",
};

export default function ContattiPage() {
  return (
    <>
      <PageHero title="Contatti">
        <p>
          Scrivici dal form, su WhatsApp o su LinkedIn: ti rispondiamo al più
          presto.
        </p>
      </PageHero>
      <ContactSection />
    </>
  );
}
