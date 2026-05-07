import { Helmet } from "react-helmet-async";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Privacy Policy | BrandFlix</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Navbar />
      <article className="mx-auto max-w-[800px] px-[5vw] pb-24 pt-32 font-body text-[15px] leading-[1.75] text-muted-foreground">
        <h1 className="mb-4 font-display text-[44px] font-black uppercase leading-[1.05] tracking-[-1px] text-foreground md:text-[56px]">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <p className="mb-10 text-[14px] text-muted-2">
          <strong>Ultimo aggiornamento: maggio 2026</strong>
        </p>

        <p className="mb-8">
          La presente Privacy Policy descrive come BrandFlix raccoglie, utilizza e protegge i dati personali degli utenti che visitano il sito brandflix.it, in conformità al Regolamento UE 2016/679 (GDPR) e al D.Lgs. 196/2003 (Codice Privacy) come modificato dal D.Lgs. 101/2018.
        </p>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">1. Titolare del trattamento</h2>
        <p className="mb-4">Il Titolare del trattamento dei dati personali è:</p>
        <p className="mb-8">
          <strong className="text-foreground">Rocco Vladimir Armento</strong><br />
          Via Agrigento 147 - 75025 Policoro<br />
          Email: <a href="mailto:info@brandflix.it" className="text-primary hover:underline">info@brandflix.it</a><br />
          Codice Fiscale: RMNRCV81M30Z112A
        </p>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">2. Tipologie di dati raccolti</h2>
        <p className="mb-4">Il sito brandflix.it raccoglie i seguenti dati personali quando l'utente li fornisce volontariamente attraverso il form di contatto:</p>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Nome e cognome</strong></li>
          <li><strong className="text-foreground">Indirizzo email</strong></li>
          <li><strong className="text-foreground">Numero di telefono</strong></li>
          <li><strong className="text-foreground">Categoria di servizio richiesto</strong> (es. naming, logo, video)</li>
          <li><strong className="text-foreground">Contenuto del messaggio</strong></li>
        </ul>
        <p className="mb-4">Inoltre, durante la navigazione possono essere raccolti automaticamente:</p>
        <ul className="mb-8 list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Dati di navigazione</strong> (indirizzo IP, browser utilizzato, sistema operativo, pagine visitate, data e ora di accesso, durata della visita). Questi dati sono raccolti dai sistemi server e da servizi di terze parti utilizzati dal sito.</li>
        </ul>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">3. Finalità del trattamento</h2>
        <p className="mb-4">I dati raccolti sono utilizzati esclusivamente per:</p>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Rispondere alle richieste di contatto</strong> inviate tramite il form</li>
          <li><strong className="text-foreground">Gestire eventuali rapporti professionali</strong> che possono nascere dal contatto iniziale</li>
          <li><strong className="text-foreground">Garantire il corretto funzionamento e la sicurezza del sito</strong></li>
          <li><strong className="text-foreground">Adempiere a eventuali obblighi di legge</strong></li>
        </ul>
        <p className="mb-8">I dati NON vengono utilizzati per finalità di marketing automatizzato, profilazione o cessione a terzi per scopi commerciali.</p>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">4. Base giuridica del trattamento</h2>
        <p className="mb-4">Il trattamento dei dati avviene sulla base di:</p>
        <ul className="mb-8 list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Consenso esplicito</strong> dell'utente (Art. 6.1.a GDPR), espresso tramite l'invio volontario del form di contatto</li>
          <li><strong className="text-foreground">Legittimo interesse</strong> del titolare (Art. 6.1.f GDPR) per quanto riguarda i dati tecnici di navigazione necessari al funzionamento del sito</li>
          <li><strong className="text-foreground">Adempimento di obblighi legali</strong> (Art. 6.1.c GDPR)</li>
        </ul>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">5. Modalità di trattamento e conservazione</h2>
        <p className="mb-4">I dati vengono trattati con strumenti elettronici e protetti con adeguate misure di sicurezza tecniche e organizzative.</p>
        <ul className="mb-8 list-disc space-y-2 pl-6">
          <li>I dati raccolti tramite il form sono conservati per il tempo strettamente necessario a gestire la richiesta e per i successivi obblighi (massimo <strong className="text-foreground">24 mesi</strong> dall'ultimo contatto, salvo richiesta di cancellazione anticipata)</li>
          <li>I dati di navigazione sono conservati per un massimo di <strong className="text-foreground">30 giorni</strong></li>
        </ul>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">6. Servizi di terze parti utilizzati</h2>
        <p className="mb-6">Il sito si avvale dei seguenti servizi di terze parti che possono trattare dati personali in qualità di Responsabili esterni del trattamento:</p>

        <h3 className="mb-3 font-display text-[20px] font-bold uppercase text-foreground">6.1 Hosting — GitHub Pages</h3>
        <p className="mb-6">
          Il sito è ospitato su GitHub Pages, servizio fornito da GitHub Inc. (USA). I dati di navigazione possono transitare su server statunitensi. GitHub aderisce al framework Data Privacy Framework UE-USA.<br />
          Privacy policy: <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement</a>
        </p>

        <h3 className="mb-3 font-display text-[20px] font-bold uppercase text-foreground">6.2 Form di contatto — Web3Forms</h3>
        <p className="mb-6">
          I dati inseriti nel form di contatto vengono inviati tramite il servizio Web3Forms (web3forms.com) che li recapita all'email del Titolare. Web3Forms agisce come Responsabile del trattamento.<br />
          Privacy policy: <a href="https://web3forms.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://web3forms.com/privacy</a>
        </p>

        <h3 className="mb-3 font-display text-[20px] font-bold uppercase text-foreground">6.3 Font tipografici — Google Fonts</h3>
        <p className="mb-6">
          Il sito potrebbe caricare font tipografici da Google Fonts (Google Ireland Limited). Il caricamento dei font implica la trasmissione dell'indirizzo IP dell'utente ai server di Google.<br />
          Privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a>
        </p>

        <h3 className="mb-3 font-display text-[20px] font-bold uppercase text-foreground">6.4 Contatto WhatsApp</h3>
        <p className="mb-8">
          Il sito include un link per contattare il Titolare via WhatsApp (servizio fornito da WhatsApp LLC, gruppo Meta). Cliccando sul link, l'utente viene reindirizzato all'app WhatsApp e si applica la privacy policy di WhatsApp.<br />
          Privacy policy: <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://www.whatsapp.com/legal/privacy-policy-eea</a>
        </p>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">7. Trasferimento dati extra-UE</h2>
        <p className="mb-8">
          Alcuni servizi utilizzati (GitHub, WhatsApp/Meta) possono comportare il trasferimento di dati al di fuori dell'Unione Europea, in particolare verso gli Stati Uniti d'America. Tali trasferimenti avvengono nel rispetto delle Standard Contractual Clauses (SCC) approvate dalla Commissione Europea e/o nell'ambito di framework di adeguatezza riconosciuti (es. Data Privacy Framework UE-USA).
        </p>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">8. Diritti dell'utente</h2>
        <p className="mb-4">In conformità al GDPR (Artt. 15-22), l'utente ha diritto a:</p>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Accedere</strong> ai propri dati personali (Art. 15)</li>
          <li><strong className="text-foreground">Rettificare</strong> dati inesatti o incompleti (Art. 16)</li>
          <li><strong className="text-foreground">Cancellare</strong> i dati ("diritto all'oblio", Art. 17)</li>
          <li><strong className="text-foreground">Limitare</strong> il trattamento (Art. 18)</li>
          <li><strong className="text-foreground">Ricevere i dati</strong> in formato strutturato (portabilità, Art. 20)</li>
          <li><strong className="text-foreground">Opporsi</strong> al trattamento (Art. 21)</li>
          <li><strong className="text-foreground">Revocare il consenso</strong> in qualsiasi momento</li>
          <li><strong className="text-foreground">Proporre reclamo</strong> all'Autorità Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noreferrer" className="text-primary hover:underline">www.garanteprivacy.it</a>)</li>
        </ul>
        <p className="mb-4">Per esercitare questi diritti, contatta: <strong className="text-foreground">info@brandflix.it</strong></p>
        <p className="mb-8">Il Titolare risponderà entro 30 giorni dalla richiesta.</p>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">9. Minori</h2>
        <p className="mb-8">
          Il sito non è destinato a minori di 16 anni. Il Titolare non raccoglie consapevolmente dati di minori. Se un genitore/tutore ritiene che il proprio figlio abbia fornito dati personali, può contattare il Titolare per richiederne la cancellazione.
        </p>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">10. Modifiche alla Privacy Policy</h2>
        <p className="mb-8">
          Il Titolare si riserva il diritto di aggiornare la presente Privacy Policy in qualsiasi momento. La versione aggiornata sarà sempre disponibile su questa pagina, con indicazione della data dell'ultimo aggiornamento.
        </p>

        <hr className="my-10 border-border" />

        <h2 className="mb-4 font-display text-[28px] font-bold uppercase tracking-[-0.5px] text-foreground">11. Contatti</h2>
        <p className="mb-4">Per qualsiasi domanda, richiesta o esercizio dei diritti previsti dal GDPR, contatta:</p>
        <p>
          <strong className="text-foreground">Email:</strong> <a href="mailto:info@brandflix.it" className="text-primary hover:underline">info@brandflix.it</a><br />
          <strong className="text-foreground">Sito web:</strong> <a href="https://brandflix.it" className="text-primary hover:underline">https://brandflix.it</a>
        </p>
      </article>
      <Footer />
    </main>
  );
}