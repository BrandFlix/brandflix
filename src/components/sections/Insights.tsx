const cards = [
  {
    n: "01",
    cat: "Brand Strategy",
    time: "5 min",
    title: "Il tuo concorrente apre domani con un logo nuovo. I tuoi clienti lo noteranno.",
    excerpt:
      "Perché la percezione visiva della tua impresa vale più di qualsiasi campagna pubblicitaria — e come cambiarla in 90 giorni.",
  },
  {
    n: "02",
    cat: "Naming",
    time: "4 min",
    title: "Le 7 domande da fare prima di scegliere il nome della tua attività.",
    excerpt:
      "Il nome sbagliato ti segue per anni. Ecco come evitare gli errori più comuni — e perché 'suona bene' non è un criterio.",
  },
  {
    n: "03",
    cat: "Visual Identity",
    time: "6 min",
    title: "Coerenza visiva: perché il tuo Instagram sembra fatto da tre persone diverse.",
    excerpt:
      "Il sistema visivo è il tuo brand in azione. Come costruire un'identità editoriale che funzioni su ogni piattaforma.",
  },
];

export default function Insights() {
  return (
    <section className="bg-light px-[5vw] py-24">
      <div className="reveal mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[4px] text-[hsl(0,0%,53%)]">
            Insights & Prospettive
          </div>
          <h2
            className="font-display font-black uppercase text-black"
            style={{ fontSize: "clamp(38px,5.5vw,68px)", lineHeight: 0.95 }}
          >
            <span className="block">Idee su brand,</span>
            <span className="block text-amber">strategia e design.</span>
          </h2>
        </div>
        <a
          href="#"
          className="border-b border-[hsl(0,0%,80%)] pb-1 font-body text-[14px] font-medium text-[hsl(0,0%,53%)] hover:text-black"
        >
          Tutti gli articoli →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-px border border-[hsl(0,0%,91%)] bg-[hsl(0,0%,91%)] md:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.n}
            className="reveal flex flex-col bg-white transition-colors hover:bg-[hsl(0,0%,98%)]"
          >
            <div
              className="flex items-center justify-center bg-surface"
              style={{ aspectRatio: "16 / 10" }}
            >
              <span className="font-display text-[40px] font-black text-[hsl(0,0%,20%)]">
                {c.n}
              </span>
            </div>
            <div className="p-7">
              <div className="mb-3 flex items-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[2px] text-[hsl(0,0%,67%)]">
                <span>{c.cat}</span>
                <span className="block h-[3px] w-[3px] rounded-full bg-magenta" />
                <span>{c.time}</span>
              </div>
              <h3 className="font-display text-[22px] font-bold uppercase leading-[1.1] text-black">
                {c.title}
              </h3>
              <p className="mt-3 font-body text-[13px] leading-[1.7] text-[hsl(0,0%,53%)]">
                {c.excerpt}
              </p>
              <a
                href="#"
                className="mt-4 inline-block border-b border-black pb-px font-body text-[12px] font-medium text-black hover:text-[hsl(0,0%,53%)]"
              >
                Leggi l'articolo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}