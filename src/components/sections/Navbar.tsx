import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import logo from "@/assets/logo-brandflix.png";

const links = [
  { id: "about", label: "Chi siamo" },
  { id: "clienti", label: "Clienti" },
  { id: "servizi", label: "Servizi" },
  { id: "contatti", label: "Contatti" },
];

export default function Navbar() {
  const scrolled = useScrollPosition(20);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    setOpen(false);
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const handleCtaClick = () => handleNavClick("contatti");

  const handleLogoClick = () => {
    setOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

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
          <button
            type="button"
            onClick={handleLogoClick}
            className="flex items-center leading-none"
          >
            <img src={logo} alt="BrandFlix" className="h-7 w-auto sm:h-8" />
          </button>

          <nav className="hidden items-center gap-9 sm:flex">
            {links.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => handleNavClick(l.id)}
                className="font-body text-[14px] text-muted-2 transition-colors hover:text-primary"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={handleCtaClick}
            className="hidden bg-primary px-6 py-[10px] font-body text-[13px] font-bold text-primary-foreground transition-opacity hover:opacity-[0.88] sm:inline-block"
          >
            Parliamoci →
          </button>

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
            <button type="button" onClick={handleLogoClick} className="flex items-center leading-none">
              <img src={logo} alt="BrandFlix" className="h-7 w-auto" />
            </button>
            <button aria-label="Chiudi menu" onClick={() => setOpen(false)} className="text-foreground">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {links.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => handleNavClick(l.id)}
                className="font-display text-[36px] font-black uppercase text-foreground hover:text-primary"
              >
                {l.label}
              </button>
            ))}
            <button
              type="button"
              onClick={handleCtaClick}
              className="mt-6 bg-primary px-7 py-3 font-body text-[14px] font-bold text-primary-foreground"
            >
              Parliamoci →
            </button>
          </nav>
        </div>
      )}
    </>
  );
}