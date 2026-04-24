const values = [
  {
    label: "01 — Valore",
    title: "Chiarezza strategica",
    desc: "Definiamo un posizionamento nitido così ogni decisione creativa supporta la crescita a lungo termine del business.",
  },
  {
    label: "02 — Valore",
    title: "Identità distinta",
    desc: "Creiamo sistemi visivi coerenti che rendono il tuo brand riconoscibile e differenziato su ogni formato e in ogni contesto.",
  },
  {
    label: "03 — Valore",
    title: "Focus conversione",
    desc: "Progettiamo esperienze con uno scopo preciso: trasformare l'attenzione in ingaggio e l'ingaggio in azione concreta.",
  },
  {
    label: "04 — Valore",
    title: "Sistemi scalabili",
    desc: "Costruiamo framework flessibili che supportano la coerenza oggi e l'espansione domani, senza dover ripartire da zero.",
  },
];

export default function Valori() {
  return (
    <section className="bg-background px-[5vw] py-24">
      <div className="mb-16 grid items-end gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <div className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[4px] text-muted-2">
            Perché funzioniamo
          </div>
          <h2
            className="font-display font-black uppercase text-foreground"
            style={{ fontSize: "clamp(38px,5.5vw,68px)", lineHeight: 0.95 }}
          >
            <span className="block">Brand che</span>
            <span className="block text-primary">competono.</span>
          </h2>
        </div>
        <p className="reveal max-w-[400px] font-body text-[16px] leading-[1.8] text-[hsl(0,0%,53%)]">
          Nei mercati affollati il design mediocre scompare. Costruiamo sistemi di brand che
          comandano attenzione e mantengono la posizione nel tempo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
        {values.map((v) => (
          <div
            key={v.title}
            className="reveal group relative overflow-hidden bg-surface px-9 py-11 transition-colors hover:bg-[hsl(0,0%,13%)]"
          >
            <div className="font-body text-[10px] uppercase tracking-[3px] text-[hsl(0,0%,27%)]">
              {v.label}
            </div>
            <div className="mt-3 font-display text-[26px] font-bold uppercase text-foreground">
              {v.title}
            </div>
            <p className="mt-3 font-body text-[14px] leading-[1.7] text-[hsl(0,0%,53%)]">
              {v.desc}
            </p>
            <span
              className="pointer-events-none absolute bottom-0 right-0 h-0 w-0 transition-all duration-300 group-hover:[border-bottom-color:hsl(var(--primary))]"
              style={{
                borderLeft: "40px solid transparent",
                borderBottom: "40px solid hsl(var(--border))",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}