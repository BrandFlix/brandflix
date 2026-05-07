import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Cookie Policy | BrandFlix</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Navbar />
      <article className="mx-auto max-w-[800px] px-[5vw] pb-24 pt-32 font-body text-[15px] leading-[1.75] text-muted-foreground">
        <h1 className="mb-4 font-display text-[44px] font-black uppercase leading-[1.05] tracking-[-1px] text-foreground md:text-[56px]">
          Cookie <span className="text-primary">Policy</span>
        </h1>
        <p className="mb-10 text-[14px] text-muted-2"><strong>Ultimo aggiornamento: maggio 2026</strong></p>

        <p className="mb-4">
          La presente Cookie Policy spiega cosa sono i cookie, quali tipi di cookie utilizza il sito brandflix.it, con quali finalità e come l'utente può gestirli.
        </p>
        <p className="mb-8">
          Questa Cookie Policy è parte integrante della{" "}
          <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> del sito.
        </p>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">1. Cosa sono i cookie</h2>
        <p className="mb-4">I cookie sono piccoli file di testo che i siti web visitati inviano al browser dell'utente, dove vengono memorizzati per essere ritrasmessi al sito alla visita successiva. I cookie possono essere di due tipi:</p>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Cookie di prima parte</strong>: impostati direttamente dal sito visitato</li>
          <li><strong className="text-foreground">Cookie di terze parti</strong>: impostati da domini diversi da quello visitato (es. servizi esterni integrati)</li>
        </ul>
        <p className="mb-4">In base alla durata, i cookie possono essere:</p>
        <ul className="mb-8 list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Cookie di sessione</strong>: cancellati alla chiusura del browser</li>
          <li><strong className="text-foreground">Cookie persistenti</strong>: rimangono memorizzati per un periodo prestabilito</li>
        </ul>

        <hr className="my-10 border-border" />

        <h2 className="mb-6 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">2. Tipologie di cookie utilizzati</h2>

        <h3 className="mb-3 font-display text-[20px] font-bold uppercase text-foreground">2.1 Cookie tecnici (necessari)</h3>
        <p className="mb-4">Questi cookie sono <strong className="text-foreground">essenziali</strong> per il funzionamento del sito e non richiedono il consenso dell'utente, ai sensi dell'art. 122 del Codice Privacy.</p>
        <div className="mb-8 overflow-x-auto">
          <table className="w-full border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-border text-foreground">
                <th className="py-3 pr-4">Cookie</th>
                <th className="py-3 pr-4">Finalità</th>
                <th className="py-3">Durata</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 pr-4">Cookie di sessione</td>
                <td className="py-3 pr-4">Funzionamento base del sito</td>
                <td className="py-3">Sessione</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4">cookieyes-consent</td>
                <td className="py-3 pr-4">Memorizza le preferenze sui cookie</td>
                <td className="py-3">12 mesi</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-3 font-display text-[20px] font-bold uppercase text-foreground">2.2 Cookie di terze parti</h3>
        <p className="mb-6">Il sito carica risorse da servizi di terze parti che possono impostare propri cookie. L'utente può accettarli o rifiutarli tramite il banner cookie alla prima visita o modificando le preferenze in qualsiasi momento.</p>

        <h4 className="mb-2 font-display text-[18px] font-bold text-foreground">Google Fonts (Google Ireland Limited)</h4>
        <p className="mb-4">Il sito utilizza font tipografici caricati dai server di Google Fonts. Il caricamento dei font può comportare la trasmissione dell'indirizzo IP dell'utente. Google Fonts non utilizza cookie per la profilazione, ma il trasferimento dell'IP è considerato trattamento di dati.</p>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Finalità</strong>: visualizzazione corretta dei caratteri tipografici</li>
          <li><strong className="text-foreground">Privacy policy</strong>: <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a></li>
        </ul>

        <h4 className="mb-2 font-display text-[18px] font-bold text-foreground">WhatsApp (Meta Platforms Inc.)</h4>
        <p className="mb-4">Cliccando sul pulsante WhatsApp del sito, l'utente viene reindirizzato al servizio esterno WhatsApp, che applica le proprie cookie policy.</p>
        <ul className="mb-8 list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Finalità</strong>: avviare conversazione tramite WhatsApp</li>
          <li><strong className="text-foreground">Privacy policy</strong>: <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://www.whatsapp.com/legal/privacy-policy-eea</a></li>
        </ul>

        <hr className="my-10 border-border" />

        <h2 className="mb-6 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">3. Come gestire i cookie</h2>

        <h3 className="mb-3 font-display text-[20px] font-bold uppercase text-foreground">3.1 Tramite il banner cookie</h3>
        <p className="mb-4">Alla prima visita del sito, l'utente vede un banner che permette di:</p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Accettare tutti i cookie</strong></li>
          <li><strong className="text-foreground">Rifiutare i cookie non essenziali</strong></li>
          <li><strong className="text-foreground">Personalizzare</strong> le preferenze per categoria</li>
        </ul>
        <p className="mb-8">L'utente può modificare le proprie scelte in qualsiasi momento cliccando sul link "Preferenze cookie" disponibile nel footer del sito.</p>

        <h3 className="mb-3 font-display text-[20px] font-bold uppercase text-foreground">3.2 Tramite le impostazioni del browser</h3>
        <p className="mb-4">L'utente può gestire i cookie anche direttamente dalle impostazioni del proprio browser:</p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Google Chrome</strong>: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://support.google.com/chrome/answer/95647</a></li>
          <li><strong className="text-foreground">Mozilla Firefox</strong>: <a href="https://support.mozilla.org/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://support.mozilla.org/kb/protezione-antitracciamento-avanzata-firefox-desktop</a></li>
          <li><strong className="text-foreground">Safari</strong>: <a href="https://support.apple.com/it-it/guide/safari/sfri11471" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://support.apple.com/it-it/guide/safari/sfri11471</a></li>
          <li><strong className="text-foreground">Microsoft Edge</strong>: <a href="https://support.microsoft.com/microsoft-edge" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://support.microsoft.com/microsoft-edge</a></li>
        </ul>
        <p className="mb-8">⚠️ <strong className="text-foreground">Attenzione</strong>: la disabilitazione di alcuni cookie può compromettere il corretto funzionamento del sito.</p>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">4. Trasferimento dati extra-UE</h2>
        <p className="mb-8">Alcuni servizi di terze parti utilizzati (Google, WhatsApp/Meta) possono comportare il trasferimento di dati al di fuori dell'Unione Europea. Tali trasferimenti avvengono nel rispetto delle Standard Contractual Clauses approvate dalla Commissione Europea e/o nell'ambito di framework di adeguatezza riconosciuti.</p>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">5. Diritti dell'utente</h2>
        <p className="mb-4">L'utente ha diritto a:</p>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>Essere informato sull'uso dei cookie</li>
          <li>Esprimere o negare il consenso ai cookie non essenziali</li>
          <li>Modificare le proprie preferenze in qualsiasi momento</li>
          <li>Cancellare i cookie già memorizzati dal proprio browser</li>
        </ul>
        <p className="mb-8">Per ulteriori dettagli sui diritti relativi ai propri dati personali, consulta la{" "}
          <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
        </p>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">6. Modifiche alla Cookie Policy</h2>
        <p className="mb-8">Il Titolare si riserva il diritto di aggiornare la presente Cookie Policy in qualsiasi momento. La versione aggiornata sarà sempre disponibile su questa pagina, con indicazione della data dell'ultimo aggiornamento.</p>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">7. Contatti</h2>
        <p className="mb-4">Per qualsiasi domanda relativa ai cookie o al trattamento dei dati:</p>
        <p>
          <strong className="text-foreground">Email:</strong> <a href="mailto:info@brandflix.it" className="text-primary hover:underline">info@brandflix.it</a><br />
          <strong className="text-foreground">Sito web:</strong> <a href="https://brandflix.it" className="text-primary hover:underline">https://brandflix.it</a>
        </p>
      </article>
      <Footer />
    </main>
  );
}