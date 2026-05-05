import brand1 from "@/assets/clients/brand1.png";
import brand2 from "@/assets/clients/brand2.png";
import brand3 from "@/assets/clients/brand3.png";
import brand4 from "@/assets/clients/brand4.png";
import brand5 from "@/assets/clients/brand5.png";
import brand6 from "@/assets/clients/brand6.png";
import brand7 from "@/assets/clients/brand7.png";
import brand8 from "@/assets/clients/brand8.png";
import brand9 from "@/assets/clients/brand9.png";
import brand10 from "@/assets/clients/brand10.png";
import brand11 from "@/assets/clients/brand11.png";
import brand12 from "@/assets/clients/brand12.png";
import brand13 from "@/assets/clients/brand13.png";
import brand14 from "@/assets/clients/brand14.png";
import brand15 from "@/assets/clients/brand15.png";
import brand16 from "@/assets/clients/brand16.png";
import brand17 from "@/assets/clients/brand17.png";
import brand18 from "@/assets/clients/brand18.png";
import brand19 from "@/assets/clients/brand19.png";
import brand20 from "@/assets/clients/brand20.png";
import brand21 from "@/assets/clients/brand21.png";
import brand22 from "@/assets/clients/brand22.png";
import brand23 from "@/assets/clients/brand23.png";
import brand24 from "@/assets/clients/brand24.png";
import brand25 from "@/assets/clients/brand25.png";
import brand26 from "@/assets/clients/brand26.png";
import brand27 from "@/assets/clients/brand27.png";
import brand28 from "@/assets/clients/brand28.png";

const clients = [
  { name: "Soc. Agricola Amati", logo: brand1 },
  { name: "Centro Arredamenti", logo: brand2 },
  { name: "Dalmia Market", logo: brand3 },
  { name: "Lavéa Nature", logo: brand4 },
  { name: "Rondinelli Strutture Metalliche", logo: brand5 },
  { name: "Kalindi Viaggi", logo: brand6 },
  { name: "Red Restaurant", logo: brand7 },
  { name: "Ciani — I Migliori Grani", logo: brand8 },
  { name: "DoniZi", logo: brand9 },
  { name: "Market dei Sapori", logo: brand10 },
  { name: "Bar il Gioiello", logo: brand11 },
  { name: "Lo Tito — Olio Extravergine", logo: brand12 },
  { name: "Azienda Agricola Lacertosa", logo: brand13 },
  { name: "Demuro Mario Chef", logo: brand14 },
  { name: "EdilVivo Ristrutturazioni", logo: brand15 },
  { name: "Magnifique Studio Estetico", logo: brand16 },
  { name: "Rago — Prodotti Biologici", logo: brand17 },
  { name: "Riabilita", logo: brand18 },
  { name: "Pellitta Tartufi", logo: brand19 },
  { name: "GT Arreda", logo: brand20 },
  { name: "Good Vibes Club & Restaurant", logo: brand21 },
  { name: "SunSpritz — Aperitivo Vista Mare", logo: brand22 },
  { name: "Nautilus Music & Lights", logo: brand23 },
  { name: "Rovlar — Made in Italy", logo: brand24 },
  { name: "Tropical", logo: brand25 },
  { name: "Bristorante La Pizzeria", logo: brand26 },
  { name: "Scacco Matto Food", logo: brand27 },
  { name: "Allevamento Podolica Glisci", logo: brand28 },
];

const caseStudies = [
  {
    n: 1,
    sector: "Ristorazione",
    title: "[Titolo case study]",
    desc: "[Problema → Soluzione: 2 righe che descrivono la sfida del cliente e l'intervento di BrandFlix sul brand.]",
    result: "[+X% di vendite in Y mesi]",
  },
  {
    n: 2,
    sector: "Beauty",
    title: "[Titolo case study]",
    desc: "[Problema → Soluzione: 2 righe che descrivono la sfida del cliente e l'intervento di BrandFlix sul brand.]",
    result: "[+X% nuovi clienti in Y mesi]",
  },
  {
    n: 3,
    sector: "Hospitality",
    title: "[Titolo case study]",
    desc: "[Problema → Soluzione: 2 righe che descrivono la sfida del cliente e l'intervento di BrandFlix sul brand.]",
    result: "[+X% prenotazioni dirette]",
  },
];

const reviews = [
  {
    text: "[Testimonianza specifica con un episodio o un risultato concreto. Es: «Dopo il rebrand abbiamo aperto due punti vendita in 8 mesi e i clienti ci riconoscono anche fuori dalla nostra città.» — minimo 4 righe, evitare frasi generiche tipo «ottimo lavoro» o «molto professionali».]",
    author: "[Nome Cognome]",
    role: "[Ruolo]",
    company: "[Azienda]",
  },
  {
    text: "[Testimonianza narrativa che racconti il prima e il dopo. Quale problema concreto avevate, cosa è cambiato dopo il lavoro con BrandFlix, quale risultato misurabile è arrivato. Almeno 4-5 righe, con un dettaglio specifico che renda la storia credibile.]",
    author: "[Nome Cognome]",
    role: "[Ruolo]",
    company: "[Azienda]",
  },
  {
    text: "[Testimonianza con un episodio specifico legato al processo di lavoro o alla consegna. Una frase che racconti perché hai scelto BrandFlix invece di un'altra agenzia (o di un tool AI), e cosa avresti perso a non farlo. Minimo 4-5 righe.]",
    author: "[Nome Cognome]",
    role: "[Ruolo]",
    company: "[Azienda]",
  },
];

export default function Clienti() {
  return (
    <section id="clienti" className="bg-light px-[5vw] py-24">
      <div className="reveal mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-3 flex items-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[4px] text-[hsl(0,0%,53%)]">
            <span className="block h-[6px] w-[6px] animate-pulse rounded-full bg-magenta" />
            Hanno scelto BrandFlix
          </div>
          <h2
            className="font-display font-black uppercase text-black"
            style={{ fontSize: "clamp(38px,5.5vw,68px)", lineHeight: 0.95 }}
          >
            <span className="block">Brand che hanno detto</span>
            <span className="block text-amber">"sì" al cambiamento.</span>
          </h2>
        </div>
        <a
          href="#contatti"
          className="border-b border-black pb-1 font-body text-[14px] font-medium text-black hover:text-[hsl(0,0%,53%)]"
        >
          Diventa il prossimo →
        </a>
      </div>

      {/* Logo marquee — doppia riga a scorrimento opposto */}
      <div className="reveal space-y-px border border-[hsl(0,0%,91%)] bg-[hsl(0,0%,91%)]">
        <LogoMarquee items={clients.slice(0, 14)} />
        <LogoMarquee items={clients.slice(14)} reverse />
      </div>

      {/* Case study in evidenza */}
      <div className="reveal mt-20">
        <div className="mb-10 flex items-center gap-3">
          <span className="block h-[1px] w-10 bg-black" />
          <span className="font-body text-[10px] font-semibold uppercase tracking-[4px] text-black">
            Case study in evidenza
          </span>
        </div>

        <div className="grid grid-cols-1 gap-px border border-[hsl(0,0%,91%)] bg-[hsl(0,0%,91%)] md:grid-cols-3">
          {caseStudies.map((cs) => (
            <a
              key={cs.title}
              href="#contatti"
              className="group relative flex flex-col bg-white transition-colors duration-300 hover:bg-[hsl(0,0%,98%)]"
              aria-label={`Leggi il case study: ${cs.title}`}
            >
              {/* Image 16:9 placeholder */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[hsl(0,0%,93%)]">
                <div className="absolute inset-0 flex items-center justify-center font-body text-[11px] font-semibold uppercase tracking-[3px] text-[hsl(0,0%,53%)]">
                  [IMMAGINE CASE STUDY {cs.n}]
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="font-body text-[10px] font-semibold uppercase tracking-[3px] text-[hsl(0,0%,53%)]">
                  {cs.sector}
                </div>
                <div className="mt-3 font-display text-[22px] font-black uppercase leading-[1.05] tracking-tight text-black">
                  {cs.title}
                </div>
                <p className="mt-3 font-body text-[14px] leading-[1.65] text-[hsl(0,0%,40%)]">
                  {cs.desc}
                </p>

                <div className="mt-6 border-t border-[hsl(0,0%,91%)] pt-5">
                  <div className="font-body text-[10px] uppercase tracking-[2px] text-[hsl(0,0%,53%)]">
                    Risultato
                  </div>
                  <div
                    className="mt-1 font-display font-black uppercase leading-[1] text-amber"
                    style={{ fontSize: "clamp(28px,2.6vw,34px)" }}
                  >
                    {cs.result}
                  </div>
                </div>

                <span className="mt-7 inline-flex items-center gap-2 font-body text-[12px] font-bold uppercase tracking-[2px] text-black transition-all group-hover:gap-3">
                  Leggi il case study →
                </span>
              </div>
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>

      {/* Recensioni */}
      <div className="reveal mt-20">
        <div className="mb-10 flex items-center gap-3">
          <span className="block h-[1px] w-10 bg-black" />
          <span className="font-body text-[10px] font-semibold uppercase tracking-[4px] text-black">
            Cosa dicono di noi
          </span>
        </div>

        <div className="grid grid-cols-1 gap-px border border-[hsl(0,0%,91%)] bg-[hsl(0,0%,91%)] md:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.author}
              className="group relative flex flex-col justify-between bg-white p-8 transition-colors duration-300 hover:bg-[hsl(0,0%,98%)]"
            >
              <div>
                <span
                  className="font-display text-[60px] font-black leading-none text-primary"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="-mt-4 font-body text-[15px] leading-relaxed text-black">
                  {r.text}
                </p>
              </div>
              <div className="mt-8 border-t border-[hsl(0,0%,91%)] pt-4">
                <div className="font-display text-[18px] font-black uppercase tracking-tight text-black">
                  {r.author}
                </div>
                <div className="font-body text-[11px] font-medium uppercase tracking-[2px] text-[hsl(0,0%,53%)]">
                  {r.role}
                </div>
              </div>
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoMarquee({
  items,
  reverse,
}: {
  items: { name: string; logo: string }[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="group/marquee overflow-hidden bg-white">
      <div
        className={`flex w-max ${reverse ? "animate-ticker-right" : "animate-ticker-left"} group-hover/marquee:[animation-play-state:paused]`}
      >
        {doubled.map((c, i) => (
          <div
            key={i}
            className="group/logo relative flex h-[160px] w-[200px] shrink-0 items-center justify-center border-r border-[hsl(0,0%,91%)] px-6 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-[hsl(0,0%,98%)]"
          >
            <img
              src={c.logo}
              alt={c.name}
              loading="lazy"
              className="max-h-[120px] max-w-[140px] object-contain"
            />
            <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary transition-all duration-300 group-hover/logo:w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
