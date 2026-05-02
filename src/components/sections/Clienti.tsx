const clients = [
  { name: "Brand Uno", sector: "Ristorazione" },
  { name: "Brand Due", sector: "Retail" },
  { name: "Brand Tre", sector: "Beauty" },
  { name: "Brand Quattro", sector: "Hospitality" },
  { name: "Brand Cinque", sector: "Fashion" },
  { name: "Brand Sei", sector: "Food & Beverage" },
  { name: "Brand Sette", sector: "Wellness" },
  { name: "Brand Otto", sector: "Servizi" },
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

      {/* Logo grid — tutti stessa misura quadrata */}
      <div className="grid grid-cols-2 gap-px border border-[hsl(0,0%,91%)] bg-[hsl(0,0%,91%)] sm:grid-cols-3 md:grid-cols-4">
        {clients.map((c) => (
          <div
            key={c.name}
            className="reveal group relative flex aspect-square flex-col items-center justify-center overflow-hidden bg-white p-6 transition-all duration-300 hover:bg-[hsl(0,0%,98%)]"
          >
            <span className="font-display text-[22px] font-black uppercase tracking-tight text-black transition-colors group-hover:text-black md:text-[26px]">
              {c.name}
            </span>
            <span className="mt-2 font-body text-[10px] font-semibold uppercase tracking-[2px] text-[hsl(0,0%,53%)]">
              {c.sector}
            </span>
            {/* Linea gialla BrandFlix on hover */}
            <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
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
