import { useState } from "react";

const faqs = [
  {
    q: "Quanto tempo richiede un progetto completo?",
    a: "Un naming con logo richiede mediamente 4–6 settimane. Un'identità completa con insegne, fotografia e video può richiedere 3–4 mesi. Ti diamo sempre una roadmap dettagliata prima di iniziare, con milestone chiare.",
  },
  {
    q: "Lavorate solo con nuove attività o anche con brand esistenti?",
    a: "Entrambi. Circa la metà dei nostri clienti sono imprese già avviate che vogliono rinnovare la propria identità. Il processo cambia: più diagnosi iniziale, meno costruzione da zero.",
  },
  {
    q: "Come gestite le revisioni durante il progetto?",
    a: "Con presentazioni formali strutturate — non email infinite. Ogni proposta viene motivata. Le revisioni diventano un dialogo costruttivo con un numero definito di round inclusi nel progetto.",
  },
  {
    q: "Posso commissionare un singolo servizio?",
    a: "Sì. Puoi chiederci solo la fotografia, solo il video, solo il restyling del logo. I risultati migliori arrivano quando lavoriamo su più touchpoint insieme, ma la scelta è sempre tua.",
  },
  {
    q: "Lavorate anche fuori Policoro?",
    a: "Sì. Design, naming e strategy li gestiamo completamente da remoto. Per fotografia e video valutiamo caso per caso.",
  },
  {
    q: "Come funziona il preventivo?",
    a: "Ogni progetto ha un preventivo su misura. Scrivici con una descrizione del tuo progetto e ti rispondiamo entro 48 ore con una proposta dettagliata.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background px-[5vw] py-24">
      <div className="reveal mb-4 font-body text-[10px] font-semibold uppercase tracking-[4px] text-muted-2">
        Domande frequenti
      </div>
      <h2
        className="reveal font-display font-black uppercase text-foreground"
        style={{ fontSize: "clamp(38px,5.5vw,68px)", lineHeight: 0.95 }}
      >
        <span className="block">Quello che</span>
        <span className="block text-primary">vorresti sapere.</span>
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-[22px] text-left font-body text-[15px] font-semibold text-foreground transition-colors hover:text-primary"
                >
                  <span>{f.q}</span>
                  <span
                    className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-[1.5px] text-[14px] transition-all ${
                      isOpen
                        ? "rotate-45 border-primary bg-primary text-primary-foreground"
                        : "border-[hsl(0,0%,27%)] text-muted-2"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? 320 : 0 }}
                >
                  <p className="pb-6 font-body text-[14px] leading-[1.7] text-[hsl(0,0%,53%)]">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-primary px-9 py-11 lg:sticky lg:top-20 lg:self-start">
          <div className="font-display text-[32px] font-black uppercase leading-[1] text-black">
            Hai un progetto in testa?
          </div>
          <p
            className="mt-4 font-body text-[14px] leading-[1.65]"
            style={{ color: "rgba(0,0,0,0.6)" }}
          >
            Non aspettare il momento giusto. Il momento giusto per costruire un'identità era ieri.
            Il secondo momento migliore è adesso.
          </p>
          <a
            href="#contatti"
            className="mt-7 inline-block bg-black px-[26px] py-[13px] font-body text-[13px] font-bold text-primary"
          >
            Parliamo del tuo brand →
          </a>
        </div>
      </div>
    </section>
  );
}