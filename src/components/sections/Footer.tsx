import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import brandflixLogo from "@/assets/brandflix-logo.png";

const cols = [
  {
    h: "Navigazione",
    items: [
      { l: "Home", href: "#top" },
      { l: "Chi siamo", href: "#about" },
      { l: "Clienti", href: "#clienti" },
      { l: "Servizi", href: "#servizi" },
      { l: "Contatti", href: "#contatti" },
    ],
  },
  {
    h: "Social",
    items: [
      { l: "Instagram", href: "https://www.instagram.com/brandflix.it" },
      { l: "Facebook", href: "https://www.facebook.com/brandflix.it" },
    ],
  },
  {
    h: "Contatti",
    items: [
      { l: "info@brandflix.it", href: "mailto:info@brandflix.it" },
      { l: "+39 328 743 0868", href: "tel:+393287430868" },
    ],
  },
];

const socialIcons = [
  { l: "Instagram", href: "https://www.instagram.com/brandflix.it", Icon: Instagram },
  { l: "Facebook", href: "https://www.facebook.com/brandflix.it", Icon: Facebook },
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

      <div className="mt-14 flex flex-col items-center gap-4 border-t border-border pt-8 text-center">
        <img
          src={brandflixLogo}
          alt="BrandFlix"
          className="h-7 w-auto md:h-9"
          loading="lazy"
        />
        <div className="font-body text-[14px] text-muted-foreground md:text-[16px]">
          Branding · Storytelling · Marketing · Video · Design
        </div>
        <div className="font-body text-[13px] text-muted-2">
          <Link to="/privacy" className="transition-colors hover:text-primary">Privacy Policy</Link>
          <span className="mx-2">·</span>
          <Link to="/cookie" className="transition-colors hover:text-primary">Cookie Policy</Link>
        </div>
        <div className="font-body text-[12px] text-muted-2">
          © {new Date().getFullYear()} BrandFlix
        </div>
        <div className="mt-2 flex gap-3">
          {socialIcons.map((s) => (
            <a
              key={s.l}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.l}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-2 transition-colors hover:border-primary hover:text-primary"
            >
              <s.Icon size={16} strokeWidth={2} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}