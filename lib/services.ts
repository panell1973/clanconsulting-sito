import type { ServiceIconKey } from "@/components/icons";

export type Service = {
  id: ServiceIconKey;
  title: string;
  short: string;
  image: string;
  imageAlt: string;
  description: string;
  includes: string[];
  results: string[];
};

export const services: Service[] = [
  {
    id: "training",
    title: "Training & Coaching aziendale",
    short:
      "Programmi personalizzati per potenziare le performance di organizzazioni e persone, con assistenza continuativa.",
    image: "/images/training.jpg",
    imageAlt: "Sessione di training aziendale in aula",
    description:
      "Ogni azienda ha dinamiche, persone e obiettivi diversi. Per questo non proponiamo percorsi a catalogo: analizziamo la situazione di partenza, definiamo insieme i risultati attesi e costruiamo un programma su misura. E non finisce con l'aula: seguiamo l'applicazione sul campo con sessioni di coaching e verifiche periodiche.",
    includes: [
      "Analisi preliminare di organizzazione e processi",
      "Programma formativo costruito sugli obiettivi concordati",
      "Sessioni in aula e affiancamento operativo",
      "Coaching individuale per figure chiave",
      "Assistenza continuativa e verifiche dei risultati",
    ],
    results: [
      "Performance misurabili in crescita",
      "Persone più motivate e autonome",
      "Metodo di lavoro che resta in azienda",
    ],
  },
  {
    id: "bdc",
    title: "Business Development Center",
    short:
      "Centro di sviluppo del business per aumentare profitti e loyalty, con competenze BDC e CRM.",
    image: "/images/bdc.jpg",
    imageAlt: "Team al lavoro in un business development center",
    description:
      "Il BDC è il motore commerciale dell'azienda: il punto in cui contatti, appuntamenti e opportunità diventano fatturato. Aiutiamo a costruirlo o a farlo rendere davvero: processi, script, gestione del CRM, formazione delle persone che ci lavorano. Un BDC efficace aumenta i profitti e fidelizza i clienti.",
    includes: [
      "Progettazione o riorganizzazione del BDC",
      "Processi di gestione di lead e appuntamenti",
      "Impostazione e uso efficace del CRM",
      "Formazione dedicata degli operatori BDC",
      "KPI e monitoraggio delle conversioni",
    ],
    results: [
      "Più appuntamenti qualificati",
      "Maggiore fidelizzazione dei clienti",
      "Controllo completo del funnel commerciale",
    ],
  },
  {
    id: "soft-skills",
    title: "Soft Skills Training",
    short:
      "Comunicazione, leadership, intelligenza emotiva, persuasione, gestione del tempo, motivazione.",
    image: "/images/soft-skills.jpg",
    imageAlt: "Workshop di soft skills con partecipanti in gruppo",
    description:
      "Le competenze tecniche fanno il professionista, le soft skills fanno la differenza. Lavoriamo su comunicazione, carisma, leadership, intelligenza emotiva, persuasione, gestione del tempo e motivazione: le abilità che decidono la qualità delle relazioni con clienti e colleghi, e quindi i risultati.",
    includes: [
      "Comunicazione efficace e ascolto attivo",
      "Leadership e gestione dei collaboratori",
      "Intelligenza emotiva e gestione dello stress",
      "Persuasione e carisma personale",
      "Organizzazione e gestione del tempo",
    ],
    results: [
      "Relazioni professionali più solide",
      "Team più coesi e collaborativi",
      "Persone capaci di guidare e motivare",
    ],
  },
  {
    id: "sales",
    title: "Sales",
    short:
      "Vendere attraverso comunicazione verbale, non verbale e digitale: storytelling, negoziazione, chiusura.",
    image: "/images/vendita.jpg",
    imageAlt: "Trattativa commerciale tra venditore e cliente",
    description:
      "La vendita è comunicazione: verbale, non verbale e digitale. Formiamo venditori capaci di raccontare il valore di ciò che propongono, gestire le obiezioni senza subirle, negoziare con equilibrio e chiudere con naturalezza. Tecniche concrete, provate sul campo in quasi trent'anni di lavoro con le reti vendita.",
    includes: [
      "Storytelling e presentazione del valore",
      "Comunicazione non verbale nella trattativa",
      "Gestione delle obiezioni",
      "Tecniche di negoziazione e chiusura",
      "Vendita a distanza e canali digitali",
    ],
    results: [
      "Tassi di chiusura più alti",
      "Trattative gestite con sicurezza",
      "Clienti più soddisfatti del processo d'acquisto",
    ],
  },
  {
    id: "mystery-shopping",
    title: "Mystery Shopping",
    short:
      "Analisi delle interazioni con i clienti per valutare l'efficacia di vendita e customer service.",
    image: "/images/mystery.jpg",
    imageAlt: "Cliente in incognito durante una visita in punto vendita",
    description:
      "Come viene accolto davvero un cliente? Cosa succede al telefono, in salone, online? Il mystery shopping fotografa l'esperienza reale del cliente attraverso visite e contatti in incognito, con report dettagliati. È il punto di partenza più onesto per migliorare vendita e customer service.",
    includes: [
      "Visite e contatti in incognito multicanale",
      "Griglie di valutazione personalizzate",
      "Report dettagliati con evidenze concrete",
      "Analisi dei punti di forza e delle criticità",
      "Piano di miglioramento collegato alla formazione",
    ],
    results: [
      "Visione oggettiva dell'esperienza cliente",
      "Criticità individuate prima che costino clienti",
      "Formazione mirata sui punti deboli reali",
    ],
  },
  {
    id: "service-design",
    title: "Service Design",
    short:
      "Progettazione e ottimizzazione dei servizi con approccio strategico e creativo, centrato sull'utente.",
    image: "/images/service-design.jpg",
    imageAlt: "Sessione di co-progettazione con post-it e schemi",
    description:
      "Un servizio ben progettato si vende da solo. Con l'approccio del service design analizziamo l'esperienza dell'utente in ogni punto di contatto e riprogettiamo il servizio perché sia semplice, coerente e memorabile: dalla prima telefonata al post-vendita.",
    includes: [
      "Mappatura del customer journey",
      "Analisi dei punti di contatto e delle criticità",
      "Co-progettazione con le persone dell'azienda",
      "Prototipazione e test delle soluzioni",
      "Linee guida operative per l'erogazione",
    ],
    results: [
      "Servizi più semplici e coerenti",
      "Esperienza cliente memorabile",
      "Processi interni più fluidi",
    ],
  },
];
