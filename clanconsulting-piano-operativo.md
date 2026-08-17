# CLANCONSULTING — Piano operativo per il nuovo sito

Documento di lavoro per la ricostruzione di clanconsulting.eu con Claude Code.
Stack: **Next.js 14+ (App Router) + TypeScript + Tailwind CSS**, configurato con `output: 'export'` per hosting statico su Aruba (FTP). Blog in Markdown incluso. Predisposto per futura migrazione a Vercel o VPS quando servirà l'area riservata corsisti.

---

## PARTE 1 — Brief di progetto (da incollare come contesto)

Questo brief va dato a Claude Code all'inizio della Sessione 1, insieme al prompt di setup. Conservalo anche come riferimento per te.

### Contesto

Clanconsulting è una società di consulenza fondata a gennaio 2024 da **Emilio Orsini**, trainer e coach attivo dal 1996 (esordio con Half a Car, azienda di training del Delaware USA, poi diventata The Academy, realtà nota in Italia nell'Automotive Business). Base operativa: Campania. Il sito attuale (clanconsulting.eu, fatto con Webador) va completamente ricostruito.

### Obiettivi del nuovo sito

1. Trasmettere professionalità e autorevolezza (30 anni di esperienza nel settore)
2. Descrivere chiaramente i servizi offerti
3. Generare contatti (form, WhatsApp, LinkedIn)
4. Essere moderno, veloce, mobile-first, ottimizzato SEO
5. Includere un blog gestibile via file Markdown

### Servizi da presentare

| Servizio | Descrizione sintetica |
|---|---|
| Training & Coaching aziendale | Programmi personalizzati per potenziare le performance di organizzazioni e persone, con assistenza continuativa |
| Business Development Center (BDC) | Centro di sviluppo del business per aumentare profitti e loyalty; competenze BDC e CRM |
| Soft Skills Training | Comunicazione, carisma, leadership, intelligenza emotiva, persuasione, gestione del tempo, motivazione |
| Tecniche di vendita | Vendita attraverso la comunicazione verbale, non verbale e digitale: storytelling, negoziazione, gestione delle obiezioni, tecniche di chiusura |
| Mystery Shopping | Analisi delle interazioni con i clienti per valutare l'efficacia di vendita e customer service |
| Service Design | Progettazione e ottimizzazione dei servizi con approccio strategico e creativo, centrato sull'utente |

### Payoff / claim

> "Diamo energia alle persone, visione alle aziende"

### Identità visiva (proposta)

- **Palette**: blu navy profondo (#0F2A47) come colore primario, accento oro/ambra (#D4A94E) per CTA e dettagli, grigio caldo chiaro (#F6F5F2) per sfondi alternati, testo antracite (#1E242B). Trasmette: solidità, esperienza, premium.
- **Tipografia**: una serif elegante per i titoli (es. "Fraunces" o "Playfair Display" da Google Fonts) + una sans pulita per il corpo (es. "Inter"). Contrasto serif/sans = look consulenza di alto livello.
- **Stile**: molto spazio bianco, sezioni ampie, niente effetti pacchiani. Micro-animazioni sobrie (fade-in allo scroll). Fotografia in duotone o con overlay scuro dove le immagini sono di qualità bassa (utile finché non arriva il materiale definitivo).
- **Placeholder immagini**: dove mancano foto di qualità, usare blocchi con gradiente della palette + icona lineare, mai foto sgranate. Struttura del codice pensata per sostituire facilmente le immagini in seguito.

### Struttura del sito

1. **Home** (`/`)
   - Hero full-height: claim grande, sottotitolo, doppia CTA ("Scopri i servizi" / "Contattaci")
   - Barra credibilità: "Dal 1996 nel training", "Automotive & oltre", "Programmi su misura", "Assistenza continuativa"
   - Griglia 6 servizi (card con icona, titolo, 2 righe, link alla sezione dettaglio)
   - Sezione "Chi siamo" breve con foto/placeholder di Emilio Orsini e link alla pagina completa
   - Citazione di Confucio come sezione a tutta larghezza: "Scegli un lavoro che ami, e non lavorerai neppure un giorno nella tua vita"
   - FAQ (accordion): riprendere le 3 FAQ esistenti, riscritte meglio, e aggiungerne 2-3
   - CTA finale + form contatti breve
2. **Chi siamo** (`/chi-siamo`)
   - Storia di Emilio Orsini come timeline: 1996 Half a Car → The Academy → 2024 Clanconsulting
   - Mission e valori (dai testi attuali, riscritti)
   - Il team: Emilio + figura senior esperta BDC/CRM + altri professionisti (senza nomi finché non forniti)
   - Link LinkedIn personale
3. **Servizi** (`/servizi`)
   - Una sezione ancorata per ciascuno dei 6 servizi, con descrizione estesa, elenco di cosa comprende, e "risultati per il cliente"
   - CTA contatto dopo ogni blocco o alla fine
4. **Blog** (`/blog` e `/blog/[slug]`)
   - Indice articoli con card (titolo, data, estratto, tempo di lettura)
   - Articoli da file `.md` in `content/blog/`
   - Creare 2 articoli di esempio placeholder
5. **Recruiting** (`/recruiting`)
   - Pagina dedicata all'annuncio Unipol (selezione responsabili e direttori commerciali per le Agenzie Unipol della Campania, 5 province; non serve esperienza pregressa; coaching dedicato, inserimento diretto, piano di carriera meritocratico)
   - CV a: clanconsultingacademy@gmail.com
   - Pensata come pagina "sganciabile" quando la campagna finisce
6. **Contatti** (`/contatti`)
   - Form (nome, email, telefono opzionale, messaggio) via **Formspree** (endpoint da configurare, lasciare costante `FORMSPREE_ID` ben visibile)
   - Pulsante WhatsApp: +39 344 558 4630
   - LinkedIn aziendale
   - Nota: form funzionante anche su hosting statico

### Contatti e link reali

- WhatsApp: +39 344 558 4630
- Email recruiting: clanconsultingacademy@gmail.com
- LinkedIn Emilio Orsini: linkedin.com/in/emilio-orsini-6a117729
- LinkedIn azienda: linkedin.com/company/102206680

### Vincoli tecnici

- `output: 'export'` in `next.config.js` (hosting statico Aruba, no server Node)
- `images: { unoptimized: true }` (niente Image Optimization server-side)
- Nessuna API route, nessun middleware, nessuna server action
- Tutto ciò che è dinamico deve funzionare client-side o in build
- SEO: metadata per pagina, Open Graph, sitemap.xml e robots.txt generati in build
- Lingua: italiano, `lang="it"`
- Footer: © Clanconsulting, link privacy (pagina placeholder da completare con P.IVA quando fornita)

---

## PARTE 2 — Sessioni con Claude Code

Regola generale: **un prompt per sessione**, poi si lavora in modo iterativo dentro la sessione. Dopo ogni sessione: verifica con `npm run dev`, poi commit.

### Sessione 0 — Preparazione (terminale, senza Claude Code)

```bash
mkdir -p ~/progetti/clanconsulting
cd ~/progetti/clanconsulting
git init
claude
```

### Sessione 1 — Setup progetto e fondamenta

Incolla il brief (Parte 1) e poi questo prompt:

```
Crea un nuovo progetto Next.js in questa cartella con queste specifiche:

- Next.js 14+ con App Router, TypeScript, Tailwind CSS, ESLint
- next.config.js con output: 'export' e images: { unoptimized: true }
- Google Fonts via next/font: Fraunces (titoli) e Inter (corpo)
- Configura in Tailwind la palette del brief: primary #0F2A47, accent #D4A94E,
  surface #F6F5F2, ink #1E242B
- Crea la struttura di cartelle: app/, components/, content/blog/, lib/, public/
- Crea i componenti condivisi: Header (navigazione sticky con logo testuale
  "CLANCONSULTING", menu: Home, Chi siamo, Servizi, Blog, Recruiting, Contatti,
  hamburger su mobile), Footer (contatti, link social, link privacy, copyright),
  Container, SectionTitle, Button (varianti primary/outline)
- Crea un componente FadeIn per micro-animazioni allo scroll (Intersection
  Observer, CSS transition, niente librerie esterne)
- Crea un file lib/site.ts con le costanti del sito: nome, claim, contatti,
  link social, FORMSPREE_ID (per ora stringa vuota con commento TODO)
- Pagina home provvisoria con solo l'hero per verificare che tutto funzioni
- Verifica che npm run build completi senza errori con l'export statico

Procedi passo passo e spiegami cosa fai. Alla fine dammi il comando per
avviare il dev server.
```

Verifica: `npm run dev` → http://localhost:3000. Poi:

```bash
git add -A && git commit -m "Setup Next.js static export + design system"
```

### Sessione 2 — Tutte le pagine

```
Ora costruisci tutte le pagine del sito seguendo il brief che ti ho dato
nella struttura indicata (Home completa, Chi siamo, Servizi, Recruiting,
Contatti, più una pagina Privacy placeholder).

Indicazioni:
- Scrivi tu i testi in italiano professionale partendo dai contenuti del
  brief: tono autorevole ma umano, frasi brevi, niente muri di testo,
  niente tutto-grassetto
- Home: hero, barra credibilità, griglia 6 servizi con icone SVG inline
  (stile lineare, stroke, coerente con la palette), sezione chi-siamo breve,
  citazione full-width, FAQ accordion accessibile (dettagli/summary o
  aria-expanded), CTA finale
- Servizi: sezioni ancorate con id (#training, #bdc, #soft-skills, #vendita,
  #mystery-shopping, #service-design) così le card della home linkano
  direttamente
- Contatti: form collegato a Formspree usando la costante FORMSPREE_ID da
  lib/site.ts, con stato di invio gestito client-side (successo/errore),
  honeypot antispam, pulsante WhatsApp e link LinkedIn
- Recruiting: pagina con l'annuncio Unipol dal brief, ben impaginata, con
  CTA mailto verso clanconsultingacademy@gmail.com
- Per le immagini mancanti usa i placeholder a gradiente descritti nel brief,
  centralizzati in un componente ImagePlaceholder facilmente sostituibile
- Ogni pagina deve avere il proprio export metadata (title, description)
- Tutto responsive mobile-first, verifica anche a 380px di larghezza

Alla fine esegui npm run build e correggi eventuali errori di export statico.
```

Verifica ogni pagina nel browser, mobile compreso (DevTools). Poi commit.

### Sessione 3 — Blog

```
Implementa il blog in Markdown compatibile con l'export statico:

- Articoli in content/blog/*.md con frontmatter: title, date, excerpt,
  author (default "Emilio Orsini"), tags
- Usa gray-matter per il frontmatter e remark/remark-html (o marked) per
  il rendering; installa il necessario
- lib/blog.ts con funzioni: getAllPosts() ordinati per data, getPostBySlug()
- /blog: indice con card (titolo, data formattata in italiano, estratto,
  tempo di lettura stimato)
- /blog/[slug]: pagina articolo con generateStaticParams, tipografia curata
  per la lettura (prose), navigazione articolo precedente/successivo
- Metadata dinamici per ogni articolo (title, description da excerpt,
  Open Graph)
- Crea 2 articoli di esempio realistici sul mondo Clanconsulting:
  uno sulle soft skills nella vendita, uno sul ruolo del BDC in concessionaria
- Verifica npm run build: gli articoli devono essere generati staticamente
```

Commit.

### Sessione 4 — SEO, rifinitura e build finale

```
Fase finale di rifinitura:

1. SEO completo: metadata di default nel root layout (template title
   "%s | Clanconsulting"), Open Graph con immagine og di default (generane
   una statica 1200x630 con claim e palette in public/og.png, anche solo
   SVG convertito o HTML canvas in build), sitemap.xml e robots.txt tramite
   le convenzioni App Router (sitemap.ts, robots.ts) verificando che
   funzionino con output export
2. Favicon e icone: genera favicon con le iniziali "C" sulla palette
3. Accessibilità: verifica contrasti colore, focus visibili, alt text,
   struttura heading corretta (un solo h1 per pagina), skip link
4. Performance: verifica che non ci siano dipendenze inutili, lazy loading
   dove sensato
5. Pagina 404 personalizzata coerente col design
6. Esegui npm run build e mostrami il contenuto della cartella out/
7. Scrivi un file DEPLOY.md con le istruzioni precise per il deploy su
   hosting Linux Aruba via FTP: cosa caricare (contenuto di out/ nella
   root del dominio), configurazione .htaccess per gli URL puliti e per
   la pagina 404, e la checklist post-deploy
```

Commit finale.

### Sessione 5 — Deploy su Aruba (manuale)

1. `npm run build` → verifica cartella `out/`
2. Collegati via FTP (FileZilla) allo spazio Aruba scelto
3. Carica **il contenuto** di `out/` (non la cartella stessa) nella root del dominio/sottodominio
4. Carica il file `.htaccess` generato nella Sessione 4
5. Testa: home, tutte le pagine, form contatti (dopo aver creato l'account Formspree e inserito l'ID in `lib/site.ts` + rebuild), 404, mobile
6. Verifica con PageSpeed Insights

---

## PARTE 3 — Cose da fare fuori da Claude Code

- [ ] Creare account **Formspree** (formspree.io, piano gratuito) → copiare l'ID del form in `lib/site.ts` → rebuild e redeploy
- [ ] Scegliere il dominio/sottodominio provvisorio sul tuo spazio Aruba
- [ ] Chiedere al cliente: logo vettoriale o ad alta risoluzione, foto professionali (Emilio, aule, sessioni di training), P.IVA e dati societari per privacy/footer, testi definitivi se vogliono modificare i tuoi
- [ ] Quando arriva il materiale: sessione Claude Code di sostituzione immagini e testi (il componente ImagePlaceholder rende l'operazione rapida)
- [ ] Privacy policy GDPR completa quando ci sono i dati societari (stesso lavoro fatto per il sito di Fabiana Lorenzi)

## PARTE 4 — Migrazione futura (area corsisti)

Quando servirà l'area riservata, il percorso è:

1. Rimuovere `output: 'export'` da `next.config.js`
2. Aggiungere autenticazione (es. Auth.js) + database (Postgres)
3. Deploy su **Vercel** (DNS Aruba puntati a Vercel) oppure su **VPS Aruba Cloud con Docker Compose** (next + postgres), in linea con quello che già fai per EcosistemaConsegne
4. Il blog e tutte le pagine esistenti restano identici: zero lavoro buttato
