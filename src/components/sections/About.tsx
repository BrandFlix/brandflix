export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT — dark */}
      <div className="reveal bg-background px-[5vw] py-24">
        <div className="mb-4 font-body text-[10px] font-semibold uppercase tracking-[4px] text-muted-2">
          Chi siamo
        </div>
        <h2
          className="font-display font-black uppercase text-foreground"
          style={{ fontSize: "clamp(36px,4.5vw,54px)", lineHeight: 1, letterSpacing: "-1px" }}
        >
          <span className="block">Creiamo</span>
          <span className="block">identità</span>
          <span className="block text-primary">audaci.</span>
          <span className="block">Con metodo.</span>
        </h2>
        <p className="mt-6 max-w-[520px] font-body text-[16px] leading-[1.8] text-muted-foreground">
          BrandFlix è un'agenzia creativa focalizzata sulla costruzione di brand che performano —
          non solo che impressionano. Combiniamo strategia, design ed esecuzione per aiutare le
          imprese ambiziose a posizionarsi con chiarezza e crescere con fiducia.
        </p>
        <a
          href="#servizi"
          className="mt-8 inline-block bg-primary px-7 py-[14px] font-body text-[14px] font-bold text-primary-foreground hover:opacity-90"
        >
          Scopri i servizi →
        </a>
      </div>

      {/* RIGHT — light */}
      <div
        className="reveal bg-light px-[5vw] py-24 lg:border-l-[3px] border-t-[3px] lg:border-t-0 border-primary"
      >
        <div className="mb-4 font-body text-[10px] uppercase tracking-[4px] text-[hsl(0,0%,53%)]">
          Il punto di partenza
        </div>
        <h3
          className="font-display font-black uppercase text-black"
          style={{ fontSize: "clamp(28px,3vw,40px)" }}
        >
          Un'impresa senza identità non è invisibile. È dimenticabile.
        </h3>
        <p className="mt-5 max-w-[560px] font-body text-[15px] leading-[1.75] text-[hsl(0,0%,40%)]">
          In un mercato dove tutti comunicano, la differenza la fa chi sa cosa dire, come dirlo e a
          chi. Noi costruiamo sistemi di identità coerenti — dal nome al video corporate — che
          fanno sì che il tuo brand venga ricordato anche quando tu non sei nella stanza.
        </p>
        <div className="mt-9 flex flex-wrap gap-10">
          {[
            { n: "85", suf: "%", l: "Retention clienti" },
            { n: "+40", suf: "%", l: "Crescita conversioni media" },
          ].map((s) => (
            <div key={s.l}>
              <div
                className="font-display font-black text-black"
                style={{ fontSize: 60, lineHeight: 1 }}
              >
                {s.n}
                <span className="text-magenta">{s.suf}</span>
              </div>
              <div className="mt-1 font-body text-[13px] text-[hsl(0,0%,53%)]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}