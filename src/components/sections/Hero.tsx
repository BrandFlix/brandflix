export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col bg-background">
      <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[60vh] w-[60vw]"
        style={{
          background: "radial-gradient(circle at 80% 10%, hsla(58,100%,50%,0.06), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative flex flex-1 flex-col justify-end px-[5vw] pb-20 pt-[140px]">
        <div className="grid grid-cols-1 items-end gap-16 lg:grid-cols-[3fr_2fr]">
          {/* LEFT */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="block h-2 w-2 animate-magenta-pulse rounded-full bg-magenta" />
              <span className="font-body text-[11px] uppercase tracking-[3px] text-muted-2">
                Agenzia creativa · Roma
              </span>
            </div>

            <h1
              className="font-display font-black uppercase text-foreground"
              style={{
                fontSize: "clamp(60px, 9vw, 112px)",
                lineHeight: 0.9,
                letterSpacing: "-2px",
              }}
            >
              <span className="block animate-fade-up [animation-delay:0.05s]">Costruiamo</span>
              <span className="block animate-fade-up text-primary [animation-delay:0.2s]">brand che</span>
              <span className="block animate-fade-up [animation-delay:0.35s]">restano.</span>
            </h1>

            <p
              className="mt-8 max-w-[460px] font-body text-muted-foreground"
              style={{ fontSize: "clamp(15px,1.8vw,18px)", lineHeight: 1.75 }}
            >
              Strategia creativa, identità visiva ed esperienze digitali progettate per posizionarti
              davanti alla concorrenza — e tenerci.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href="#contatti"
                className="bg-primary px-[34px] py-[15px] font-body text-[14px] font-bold text-primary-foreground transition-all hover:-translate-y-px hover:opacity-90"
              >
                Inizia il progetto
              </a>
              <a
                href="#portfolio"
                className="border-[1.5px] border-[hsl(0,0%,27%)] px-[34px] py-[14px] font-body text-[14px] font-medium text-foreground transition-colors hover:border-[hsl(0,0%,53%)]"
              >
                Vedi i lavori
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <span className="bg-primary px-[18px] py-2 font-body text-[10px] font-bold uppercase tracking-[2px] text-primary-foreground">
              Play your Business.
            </span>
            <div className="flex w-full flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
              {[
                { n: "94%", l: "Clienti che tornano" },
                { n: "120+", l: "Brand costruiti da zero" },
              ].map((s) => (
                <div
                  key={s.n}
                  className="min-w-[180px] border border-border bg-surface px-7 py-6"
                >
                  <div
                    className="font-display text-[52px] font-black text-primary"
                    style={{ lineHeight: 1 }}
                  >
                    {s.n}
                  </div>
                  <div className="mt-1 font-body text-[13px] text-muted-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-6 border-t border-border px-0 pt-6">
          <span className="h-px flex-1 bg-border" />
          <span className="font-body text-[11px] uppercase tracking-[2px] text-muted-2">
            Scorri per scoprire
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>
      </div>
    </section>
  );
}