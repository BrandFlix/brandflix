const cols = [
  {
    h: "Navigazione",
    items: [
      { l: "Home", href: "#top" },
      { l: "Chi siamo", href: "#about" },
      { l: "Portfolio", href: "#portfolio" },
      { l: "Servizi", href: "#servizi" },
      { l: "Contatti", href: "#contatti" },
    ],
  },
  {
    h: "Social",
    items: [
      { l: "Instagram", href: "https://instagram.com" },
      { l: "LinkedIn", href: "https://linkedin.com" },
      { l: "Behance", href: "https://behance.net" },
    ],
  },
  {
    h: "Contatti",
    items: [
      { l: "info@brandflix.it", href: "mailto:info@brandflix.it" },
      { l: "+39 328 743 0868", href: "tel:+393287430868" },
      { l: "Privacy policy", href: "#" },
      { l: "Termini di servizio", href: "#" },
    ],
  },
];

const socialIcons = [
  { l: "IG", href: "https://instagram.com" },
  { l: "LI", href: "https://linkedin.com" },
  { l: "BE", href: "https://behance.net" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2 px-[5vw] pb-8 pt-14">
      <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-3 font-display text-[28px] font-black tracking-[-0.5px] text-foreground">
            Brand<span className="text-primary">Flix</span>
          </div>
          <p className="max-w-[220px] font-body text-[13px] leading-[1.7] text-muted-2">
            Agenzia creativa per le imprese che vogliono essere ricordate. Play your Business.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div className="mb-5 font-body text-[10px] font-semibold uppercase tracking-[3px] text-[hsl(0,0%,33%)]">
              {c.h}
            </div>
            <ul className="flex flex-col gap-3">
              {c.items.map((i) => (
                <li key={i.l}>
                  <a
                    href={i.href}
                    target={i.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="font-body text-[14px] text-muted-2 hover:text-foreground"
                  >
                    {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <span className="font-body text-[12px] text-muted-2">
          © 2025 BrandFlix · P.IVA 00000000000 · Realizzato con intenzione.
        </span>
        <div className="flex gap-3">
          {socialIcons.map((s) => (
            <a
              key={s.l}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.l}
              className="flex h-9 w-9 items-center justify-center border border-border font-body text-[11px] font-bold text-muted-2 transition-colors hover:border-primary hover:text-primary"
            >
              {s.l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}