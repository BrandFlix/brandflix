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
];

const reviews = [
  {
    text: "BrandFlix ha rivoluzionato la nostra immagine. Professionalità, creatività e risultati concreti fin dal primo mese.",
    author: "Marco R.",
    role: "Titolare, Ristorante",
  },
  {
    text: "Finalmente un'agenzia che ascolta davvero. Il restyling del brand ha portato un aumento reale di clienti in negozio.",
    author: "Giulia P.",
    role: "Founder, Beauty Store",
  },
  {
    text: "Strategia chiara, esecuzione impeccabile. I social del nostro hotel non sono mai andati così bene. Consigliatissimi.",
    author: "Luca M.",
    role: "Direttore, Boutique Hotel",
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
        <LogoMarquee items={clients.slice(0, 10)} />
        <LogoMarquee items={clients.slice(10)} reverse />
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
