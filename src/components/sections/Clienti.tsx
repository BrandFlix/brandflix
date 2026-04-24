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

export default function Clienti() {
  return (
    <section className="bg-light px-[5vw] py-24">
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

      <div className="grid grid-cols-2 gap-px border border-[hsl(0,0%,91%)] bg-[hsl(0,0%,91%)] md:grid-cols-4">
        {clients.map((c) => (
          <div
            key={c.name}
            className="reveal group relative flex aspect-[4/3] flex-col items-center justify-center bg-white p-6 transition-all duration-300 hover:bg-[hsl(0,0%,98%)]"
          >
            <span className="font-display text-[22px] font-black uppercase tracking-tight text-black transition-colors group-hover:text-amber md:text-[26px]">
              {c.name}
            </span>
            <span className="mt-2 font-body text-[10px] font-semibold uppercase tracking-[2px] text-[hsl(0,0%,53%)]">
              {c.sector}
            </span>
            <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-amber transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </div>

      <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-[hsl(0,0%,91%)] pt-10 text-center">
        <div className="font-body text-[13px] text-[hsl(0,0%,40%)]">
          <span className="font-display text-[28px] font-black text-black">50+</span>
          <span className="ml-2 uppercase tracking-[2px]">brand trasformati</span>
        </div>
        <span className="block h-[3px] w-[3px] rounded-full bg-magenta" />
        <div className="font-body text-[13px] text-[hsl(0,0%,40%)]">
          <span className="font-display text-[28px] font-black text-black">8</span>
          <span className="ml-2 uppercase tracking-[2px]">anni di esperienza</span>
        </div>
        <span className="block h-[3px] w-[3px] rounded-full bg-magenta" />
        <div className="font-body text-[13px] text-[hsl(0,0%,40%)]">
          <span className="font-display text-[28px] font-black text-black">100<span className="text-magenta">%</span></span>
          <span className="ml-2 uppercase tracking-[2px]">progetti consegnati</span>
        </div>
      </div>
    </section>
  );
}
