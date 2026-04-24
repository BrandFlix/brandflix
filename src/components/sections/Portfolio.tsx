const projects = [
  { n: "01", name: "Progetto #1", cat: "Naming · Logo · Brand Identity" },
  { n: "02", name: "Progetto #2", cat: "Insegne · Vetrine · Segnaletica" },
  { n: "03", name: "Progetto #3", cat: "Fotografia corporate · Video" },
  { n: "04", name: "Progetto #4", cat: "Social media design · Template" },
  { n: "05", name: "Progetto #5", cat: "Restyling · Brand manual" },
  { n: "06", name: "Progetto #6", cat: "Naming · Video istituzionale" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="mx-auto mb-12 flex max-w-[1600px] flex-wrap items-end justify-between gap-6 px-[5vw]">
        <div className="reveal">
          <div className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[4px] text-[hsl(0,0%,53%)]">
            Lavori in evidenza
          </div>
          <h2
            className="font-display font-black uppercase text-black"
            style={{ fontSize: "clamp(38px,5.5vw,68px)", lineHeight: 0.95 }}
          >
            <span className="block">Esplora il</span>
            <span className="block text-amber">portfolio.</span>
          </h2>
        </div>
        <a
          href="#contatti"
          className="rounded-md border-[1.5px] border-[hsl(0,0%,80%)] px-7 py-[11px] font-body text-[13px] font-medium text-[hsl(0,0%,53%)] hover:border-black hover:text-black"
        >
          Parliamo del tuo progetto →
        </a>
      </div>

      <div className="border-t border-[hsl(0,0%,91%)]">
        {projects.map((p) => (
          <a
            key={p.n}
            href="#contatti"
            className="group relative grid items-center gap-4 border-b border-[hsl(0,0%,91%)] px-[5vw] py-7 transition-colors hover:bg-[hsl(0,0%,98%)] md:grid-cols-[80px_1fr_200px] md:gap-8"
            style={{ gridTemplateColumns: "48px 1fr" }}
          >
            <span
              className="absolute left-0 top-0 h-full bg-primary transition-all duration-300 group-hover:w-[3px]"
              style={{ width: 0 }}
            />
            <span className="font-display text-[13px] font-bold tracking-[2px] text-[hsl(0,0%,67%)]">
              {p.n} /
            </span>
            <div className="md:col-auto">
              <div className="font-display text-[22px] font-bold uppercase text-black md:text-[28px]">
                {p.name}
              </div>
              <div className="mt-1 font-body text-[13px] text-[hsl(0,0%,53%)]">{p.cat}</div>
            </div>
            <span className="hidden text-right font-body text-[13px] font-bold text-[hsl(0,0%,67%)] transition-colors group-hover:text-black md:block">
              Vedi progetto →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}