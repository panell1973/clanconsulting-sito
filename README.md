# Clanconsulting — sito web

Sito di [clanconsulting.eu](https://www.clanconsulting.eu): società di consulenza, training e coaching fondata da Emilio Orsini. Payoff: *"Diamo energia alle persone, visione alle aziende"*.

## Stack

- **Next.js 14** (App Router) con `output: 'export'` — sito completamente statico, nessun server Node richiesto
- **TypeScript** + **Tailwind CSS** (palette: primary `#0F2A47`, accent `#D4A94E`, surface `#F6F5F2`, ink `#1E242B`)
- Font via `next/font`: **Fraunces** (titoli) + **Inter** (corpo), self-hosted in build
- Blog in Markdown (`content/blog/`) — in arrivo

## Comandi

```bash
npm run dev     # dev server su http://localhost:3000
npm run build   # build + export statico in out/
npm run lint    # ESLint
```

Nota: non lanciare `npm run build` mentre `npm run dev` è attivo (condividono `.next/`); ferma prima il dev server.

## Struttura

```
app/                    # pagine (App Router) + icon.svg, sitemap.ts, robots.ts
  clan-development-center/
  chi-siamo/  servizi/  recruiting/  logo-test/ (temporanea)
components/             # Header, Footer, Logo, Photo, FadeIn, PageHero, ...
content/blog/           # articoli Markdown (frontmatter)
lib/site.ts             # costanti sito: contatti, nav, FORMSPREE_ID, isPreview
lib/services.ts         # dati dei 6 servizi
public/images/          # foto (gestite dal componente Photo)
```

## Variabile d'ambiente

| Variabile | Valori | Effetto |
|---|---|---|
| `NEXT_PUBLIC_PREVIEW` | `"true"` / assente | Con `"true"` (build-time): meta `robots: noindex, nofollow` su tutte le pagine, sitemap vuota, `robots.txt` con `Disallow: /`. Per i deploy di anteprima. Assente o `"false"`: comportamento normale. |

## Deploy

### Anteprima su Vercel (dominio *.vercel.app)

1. Push del repo su GitHub, importa il progetto in Vercel
2. Framework preset: **Next.js** (autodetect) — l'export statico è gestito automaticamente, nessuna configurazione extra
3. In *Settings → Environment Variables* imposta `NEXT_PUBLIC_PREVIEW = true`
4. Deploy: il dominio temporaneo non verrà indicizzato

### Produzione su Aruba (hosting Linux, FTP)

1. `npm run build` **senza** `NEXT_PUBLIC_PREVIEW` (o `false`)
2. Carica **il contenuto** di `out/` nella root del dominio via FTP
3. Configura `.htaccess` per URL puliti e pagina 404 (vedi DEPLOY.md, in arrivo con la sessione di rifinitura)

## Da fare prima del go-live

- Account Formspree → inserire l'ID in `lib/site.ts` (`FORMSPREE_ID`) → rebuild
- Pagine Blog e Contatti
- Sostituire le foto placeholder con il materiale del cliente
- Privacy policy completa con P.IVA e dati societari
- Rimuovere la pagina `/logo-test`
