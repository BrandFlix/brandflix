import { useState } from "react";

const tabs = [
  {
    n: "01",
    label: "Naming",
    title: "Il nome che resti.",
    desc: "Il tuo nome è il primo logo che hai. Lo pronunciano prima ancora di vederti. Un naming sbagliato costa anni di lavoro di recupero. Noi lo costruiamo con metodo: analisi di mercato, architettura linguistica, verifica legale.",
    tags: ["Naming aziendale", "Naming di prodotto", "Tagline", "Verifica disponibilità"],
    cta: "Parliamo del tuo nome →",
  },
  {
    n: "02",
    label: "Logo & Identità",
    title: "Il segno che identifica.",
    desc: "Un logo non è un'immagine bella. È un sistema che funziona su un biglietto da visita, su uno striscione di 10 metri e su un'icona da 32 pixel. Progettiamo identità visive che resistono al tempo.",
    tags: ["Logo ex-novo", "Restyling", "Brand manual", "Declinazioni"],
    cta: "Parliamo della tua identità →",
  },
  {
    n: "03",
    label: "Insegne & Vetrine",
    title: "La tua vetrina parla 24/7.",
    desc: "La tua insegna lavora anche la domenica alle tre di notte. Progettazione grafica e supervisione produzione per insegne, vetrine, totem e segnaletica.",
    tags: ["Insegne luminose", "Vetrine", "Totem", "Segnaletica"],
    cta: "Parliamo del tuo spazio →",
  },
  {
    n: "04",
    label: "Social Media Design",
    title: "Smetti di sembrare tutti gli altri.",
    desc: "I tuoi post si scrollano via in 0,3 secondi. Per fermare il pollice ci vuole un sistema visivo riconoscibile, non singoli contenuti ben fatti.",
    tags: ["Template Instagram", "LinkedIn", "Carousel", "Stories"],
    cta: "Parliamo dei tuoi social →",
  },
  {
    n: "05",
    label: "Fotografia",
    title: "Le immagini che costruiscono fiducia.",
    desc: "Le stock photo non raccontano la tua storia. Fotografia del team, degli spazi, del prodotto. Immagini che fanno sentire le persone già dentro prima ancora di entrare.",
    tags: ["Ritratti team", "Fotografia prodotto", "Brand storytelling", "Reportage"],
    cta: "Parliamo delle tue foto →",
  },
  {
    n: "06",
    label: "Video Corporate",
    title: "Il video che convince prima che parliate.",
    desc: "Un video istituzionale ben fatto risponde a domande che i clienti non hanno ancora fatto. Scripting, regia, riprese e post-produzione internamente.",
    tags: ["Video istituzionale", "Video prodotto", "Social video", "Post-produzione"],
    cta: "Parliamo del tuo video →",
  },
];

export default function Servizi() {
  const [active, setActive] = useState(0);
  const t = tabs[active];

  return (
    <section id="servizi" className="bg-light px-[5vw] py-24">
      <div className="reveal mb-4 font-body text-[10px] font-semibold uppercase tracking-[4px] text-[hsl(0,0%,53%)]">
        Cosa facciamo
      </div>
      <h2
        className="reveal font-display font-black uppercase text-black"
        style={{ fontSize: "clamp(38px,5.5vw,68px)", lineHeight: 0.95 }}
      >
        <span className="block">Sblocca il tuo</span>
        <span className="block text-amber">potenziale.</span>
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Tabs list */}
        <div className="border-t border-[hsl(0,0%,91%)]">
          {tabs.map((tab, i) => {
            const isActive = i === active;
            return (
              <button
                key={tab.n}
                onClick={() => setActive(i)}
                className={`flex w-full items-center justify-between border-b border-[hsl(0,0%,91%)] py-[22px] text-left font-display text-[22px] font-bold uppercase transition-all ${
                  isActive
                    ? "border-l-[3px] border-l-primary pl-3 text-black"
                    : "text-[hsl(0,0%,67%)] hover:pl-1 hover:text-[hsl(0,0%,33%)]"
                }`}
              >
                <span>{tab.label}</span>
                <span className={isActive ? "text-primary" : "text-[hsl(0,0%,87%)]"}>→</span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="lg:sticky lg:top-20 lg:self-start">
          <div className="mb-3 font-body text-[10px] uppercase tracking-[3px] text-[hsl(0,0%,67%)]">
            {t.n} / {t.label}
          </div>
          <div
            className="font-display font-black uppercase text-black"
            style={{ fontSize: 40, lineHeight: 1 }}
          >
            {t.title}
          </div>
          <p className="mt-5 font-body text-[15px] leading-[1.8] text-[hsl(0,0%,40%)]">{t.desc}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="border border-[hsl(0,0%,91%)] px-3 py-1 font-body text-[11px] uppercase text-[hsl(0,0%,53%)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#contatti"
            className="mt-7 inline-block rounded-md bg-black px-[22px] py-[11px] font-body text-[12px] font-bold text-primary"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}