const team = [
  {
    n: 1,
    name: "[Nome Cognome]",
    role: "[Creative Director]",
    bio: "[1 riga di bio personale, tono umano: una passione, un dettaglio non-corporate, qualcosa che renda riconoscibile la persona dietro il ruolo.]",
  },
  {
    n: 2,
    name: "[Nome Cognome]",
    role: "[Brand Strategist]",
    bio: "[1 riga di bio personale, tono umano: una passione, un dettaglio non-corporate, qualcosa che renda riconoscibile la persona dietro il ruolo.]",
  },
  {
    n: 3,
    name: "[Nome Cognome]",
    role: "[Art Director]",
    bio: "[1 riga di bio personale, tono umano: una passione, un dettaglio non-corporate, qualcosa che renda riconoscibile la persona dietro il ruolo.]",
  },
  {
    n: 4,
    name: "[Nome Cognome]",
    role: "[Video & Photo Lead]",
    bio: "[1 riga di bio personale, tono umano: una passione, un dettaglio non-corporate, qualcosa che renda riconoscibile la persona dietro il ruolo.]",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white px-[5vw] py-24">
      <div className="reveal mb-4 font-body text-[10px] font-semibold uppercase tracking-[4px] text-[hsl(0,0%,53%)]">
        Chi siamo
      </div>
      <h2
        className="reveal font-display font-black uppercase text-black"
        style={{ fontSize: "clamp(38px,5.5vw,68px)", lineHeight: 0.95 }}
      >
        <span className="block">Dietro BrandFlix.</span>
        <span className="block text-amber">Persone, non algoritmi.</span>
      </h2>
      <p className="reveal mt-6 max-w-[640px] font-body text-[16px] leading-[1.8] text-[hsl(0,0%,40%)]">
        Siamo una piccola squadra con base a Policoro. Lavoriamo da vicino col cliente, senza
        intermediari né account manager: ogni progetto è seguito direttamente dai fondatori, dalla
        prima call al file finale. È così che riusciamo a costruire identità che sembrano
        cucite addosso — perché lo sono.
      </p>

      <div className="reveal mt-14 grid grid-cols-1 gap-px border border-[hsl(0,0%,91%)] bg-[hsl(0,0%,91%)] sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m) => (
          <article
            key={m.n}
            className="group relative flex flex-col bg-white transition-colors duration-300 hover:bg-[hsl(0,0%,98%)]"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-[hsl(0,0%,93%)] grayscale">
              <div className="absolute inset-0 flex items-center justify-center font-body text-[11px] font-semibold uppercase tracking-[3px] text-[hsl(0,0%,53%)]">
                [FOTO MEMBRO {m.n}]
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="font-display text-[20px] font-black uppercase tracking-tight text-black">
                {m.name}
              </div>
              <div className="mt-1 font-body text-[10px] font-semibold uppercase tracking-[2px] text-magenta">
                {m.role}
              </div>
              <p className="mt-3 font-body text-[13px] leading-[1.7] text-[hsl(0,0%,40%)]">
                {m.bio}
              </p>
            </div>
            <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </article>
        ))}
      </div>

      <p className="reveal mt-10 font-body text-[14px] uppercase tracking-[3px] text-[hsl(0,0%,53%)]">
        <span className="text-black">Siamo a Policoro,</span> ma lavoriamo con clienti in tutta Italia.
      </p>
    </section>
  );
}