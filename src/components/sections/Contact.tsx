import { FormEvent, useRef, useState } from "react";

const services = [
  "Naming aziendale o di prodotto",
  "Logo & identità visiva",
  "Restyling identità esistente",
  "Insegne, vetrine & segnaletica",
  "Social media design",
  "Fotografia aziendale",
  "Video corporate",
  "Progetto completo",
];

const tags = [
  "Naming",
  "Logo & Identità",
  "Insegne",
  "Social Design",
  "Fotografia",
  "Video",
];

const inputCls =
  "w-full bg-surface border border-border text-foreground font-body text-[14px] px-4 py-[13px] placeholder:text-muted-2 focus:outline-none focus:border-primary transition-colors";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    // Honeypot: if filled, silently abort
    if (formData.get("botcheck")) {
      setLoading(false);
      return;
    }
    const data: Record<string, FormDataEntryValue> = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setSent(true);
        formRef.current?.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contatti" className="bg-background px-[5vw] py-28">
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
        {/* LEFT */}
        <div className="reveal">
          <div className="mb-5 font-body text-[10px] font-semibold uppercase tracking-[4px] text-[hsl(0,0%,27%)]">
            Inizia il progetto
          </div>
          <h2
            className="font-display font-black uppercase text-foreground"
            style={{ fontSize: "clamp(48px,6vw,80px)", lineHeight: 0.9, letterSpacing: "-2px" }}
          >
            <span className="block">Premi play.</span>
            <span className="block text-primary">Il resto lo</span>
            <span className="block text-primary">facciamo noi.</span>
          </h2>
          <p className="mt-7 max-w-[400px] font-body text-[16px] leading-[1.75] text-muted-2">
            Siamo disponibili per una call esplorativa gratuita di 30 minuti. Nessun impegno,
            nessun preventivo forzato. Solo una conversazione onesta per capire se possiamo
            aiutarti.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="border border-border px-[14px] py-[7px] font-body text-[11px] font-semibold uppercase tracking-[1.5px] text-muted-2"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-10">
            <div className="mb-4 font-body text-[10px] uppercase tracking-[3px] text-muted-2">
              Contatti diretti
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:info@brandflix.it"
                className="font-body text-[15px] text-muted-foreground hover:text-primary"
              >
                info@brandflix.it
              </a>
              <a
                href="tel:+393287430868"
                className="font-body text-[15px] text-muted-foreground hover:text-primary"
              >
                +39 328 743 0868
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — form */}
        <form ref={formRef} onSubmit={onSubmit} className="reveal flex flex-col gap-3">
          <input type="hidden" name="access_key" value="2209827f-4537-4d32-a0c6-50bd7d34348a" />
          <input type="hidden" name="subject" value="Nuovo contatto da brandflix.it" />
          <input type="hidden" name="from_name" value="BrandFlix Website" />
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input name="name" className={inputCls} placeholder="Mario Rossi" aria-label="Nome e cognome" required />
            <input name="company" className={inputCls} placeholder="Nome dell'attività" aria-label="Azienda" />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input
              name="email"
              className={inputCls}
              type="email"
              placeholder="mario@esempio.it"
              aria-label="Email"
              required
            />
            <input
              name="phone"
              className={inputCls}
              type="tel"
              placeholder="+39 000 000 0000"
              aria-label="Telefono"
            />
          </div>
          <select name="service" className={inputCls} aria-label="Cosa ti serve" defaultValue="">
            <option value="" disabled>
              Cosa ti serve?
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            className={inputCls}
            style={{ minHeight: 120, resize: "vertical" }}
            placeholder="Descrivi brevemente la tua attività e cosa vorresti ottenere."
            aria-label="Raccontaci il tuo progetto"
          />
          <button
            type="submit"
            disabled={sent || loading}
            className={`mt-2 self-start rounded-md px-7 py-[13px] font-body text-[13px] font-bold transition-all ${
              sent
                ? "cursor-not-allowed bg-surface text-primary"
                : loading
                ? "cursor-wait bg-primary/70 text-primary-foreground"
                : "bg-primary text-primary-foreground hover:opacity-90"
            }`}
          >
            {sent ? "Richiesta inviata ✓" : loading ? "Invio in corso..." : "Invia la richiesta →"}
          </button>
          {error && (
            <p className="mt-2 font-body text-[13px] leading-[1.6] text-destructive">
              Errore nell'invio. Riprova o scrivici a info@brandflix.it
            </p>
          )}
          <p className="mt-2 font-body text-[12px] leading-[1.6] text-muted-2">
            Risponderemo entro 24 ore lavorative. Nessuno spam.
          </p>
        </form>
      </div>
    </section>
  );
}