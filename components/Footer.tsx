import Link from "next/link";
import { nav, site } from "@/lib/site";
import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo variant="dark" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            {site.claim}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Pagine
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 hover:text-accent"
                >
                  {item.footerLabel ?? item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Contatti
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a
                href={`https://wa.me/${site.contacts.whatsapp.replace("+", "")}`}
                className="hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: {site.contacts.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contacts.recruitingEmail}`}
                className="hover:text-accent"
              >
                {site.contacts.recruitingEmail}
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedinCompany}
                className="hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5 text-xs text-white/60">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p>© {year} Clanconsulting. Tutti i diritti riservati.</p>
            <Link href="/privacy" className="hover:text-accent">
              Privacy
            </Link>
          </div>
          <p className="mt-2 text-center text-[11px] leading-relaxed text-white/40 sm:text-left">
            {site.legal.companyName} · {site.legal.address} · P.IVA{" "}
            {site.legal.vat}
          </p>
        </Container>
      </div>
    </footer>
  );
}
