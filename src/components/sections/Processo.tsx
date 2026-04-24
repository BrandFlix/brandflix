const steps = [
  {
    n: "01 —",
    title: "Scopriamo",
    desc: "Esploriamo il tuo business, il tuo pubblico e i tuoi obiettivi per individuare opportunità strategiche. Non usiamo brief generici: ogni progetto inizia con domande scomode e risposte oneste.",
  },
  {
    n: "02 —",
    title: "Definiamo",
    desc: "Stabiliamo posizionamento, tono di voce e architettura del brand. Solo dopo che la strategia è condivisa e approvata, iniziamo a lavorare sul concept visivo.",
  },
  {
    n: "03 —",
    title: "Progettiamo",
    desc: "Presentiamo le proposte con motivazioni chiare. Cicli di revisione strutturati — senza email infinite — fino all'approvazione finale.",
  },
  {
    n: "04 —",
    title: "Consegniamo",
    desc: "File pronti per ogni formato, brand manual completo e 30 giorni di affiancamento post-consegna.",
  },
];

export default function Processo() {
  return (
    <section className="bg-white px-[5vw] py-24">
      <div className="reveal mb-4 font-body text-[10px] font-semibold uppercase tracking-[4px] text-[hsl(0,0%,53%)]">
        Come lavoriamo
      </div>
      <h2
        className="reveal font-display font-black uppercase text-black"
        style={{ fontSize: "clamp(38px,5.5vw,68px)", lineHeight: 0.95 }}
      >
        <span className="block">Dalla strategia</span>
        <span className="block text-amber">all'esecuzione.</span>
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="border-t border-[hsl(0,0%,91%)]">
          {steps.map((s) => (
            <div
              key={s.n}
              className="grid grid-cols-[64px_1fr] gap-7 border-b border-[hsl(0,0%,91%)] py-9 transition-all hover:pl-3"
            >
              <span className="pt-1 font-body text-[13px] font-semibold uppercase tracking-[2px] text-[hsl(0,0%,80%)]">
                {s.n}
              </span>
              <div>
                <div className="font-display text-[24px] font-bold uppercase text-black">
                  {s.title}
                </div>
                <p className="mt-2 max-w-[560px] font-body text-[14px] leading-[1.7] text-[hsl(0,0%,53%)]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 lg:sticky lg:top-20 lg:self-start">
          <div className="bg-background px-9 py-11">
            <div
              className="font-display font-black uppercase text-foreground"
              style={{ fontSize: 32, lineHeight: 1.1 }}
            >
              Nessuna sorpresa.
              <br />
              <span className="text-primary">Solo risultati.</span>
            </div>
            <p className="mt-5 font-body text-[14px] leading-[1.7] text-[hsl(0,0%,53%)]">
              Processo trasparente dove sai sempre a che punto siamo e perché ogni scelta è quella
              giusta per il tuo brand.
            </p>
          </div>
          <div className="bg-primary p-9">
            <div className="font-display text-[28px] font-black uppercase text-black">
              Pronto a iniziare?
            </div>
            <p
              className="mt-3 font-body text-[14px] leading-[1.65]"
              style={{ color: "rgba(0,0,0,0.6)" }}
            >
              Una call esplorativa gratuita di 30 minuti. Nessun impegno, nessun preventivo
              forzato.
            </p>
            <a
              href="#contatti"
              className="mt-6 inline-block rounded-md bg-black px-[22px] py-[11px] font-body text-[12px] font-bold text-primary"
            >
              Prenota la call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}