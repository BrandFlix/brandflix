import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll-position";

const links = [
  { href: "#about", label: "Chi siamo" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#servizi", label: "Servizi" },
  { href: "#contatti", label: "Contatti" },
];

export default function Navbar() {
  const scrolled = useScrollPosition(20);
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-border backdrop-blur-xl transition-[height] duration-300"
        style={{
          height: scrolled ? 56 : 68,
          background: "hsla(0,0%,4%,0.96)",
        }}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-[5vw]">
          <a href="#top" className="font-display text-[22px] font-black leading-none tracking-tight text-foreground">
            Brand<span className="text-primary">Flix</span>
          </a>

          <nav className="hidden items-center gap-9 sm:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-[14px] text-muted-2 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contatti"
            className="hidden bg-primary px-6 py-[10px] font-body text-[13px] font-bold text-primary-foreground transition-opacity hover:opacity-[0.88] sm:inline-block"
          >
            Parliamoci →
          </a>

          <button
            aria-label="Apri menu"
            className="text-foreground sm:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-background sm:hidden">
          <div className="flex h-[68px] items-center justify-between px-[5vw]">
            <span className="font-display text-[22px] font-black text-foreground">
              Brand<span className="text-primary">Flix</span>
            </span>
            <button aria-label="Chiudi menu" onClick={() => setOpen(false)} className="text-foreground">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-[36px] font-black uppercase text-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contatti"
              onClick={() => setOpen(false)}
              className="mt-6 bg-primary px-7 py-3 font-body text-[14px] font-bold text-primary-foreground"
            >
              Parliamoci →
            </a>
          </nav>
        </div>
      )}
    </>
  );
}