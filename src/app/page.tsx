import Image from 'next/image';
import Link from 'next/link';

import { Logo } from '@/components/Logo';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.racunai.hr';
const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL || 'https://demo.racunai.hr';

const features = [
  {
    title: 'RRIF kontni plan',
    description:
      'Ugrađeni kontni plan prema RRiF propisima s automatskim knjiženjem iz računa, troškova i uplata.',
  },
  {
    title: 'PDV knjige i PDV-S',
    description:
      'I-RA i U-RA knjige, PDV pregled i izvoz PDV-S obrasca — sve unutar jednog sustava po tvrtki.',
  },
  {
    title: 'Bankovni uvoz',
    description:
      'Uvoz izvoda u CAMT.053 i CSV formatu s prijedlozima usklađivanja transakcija.',
  },
  {
    title: 'Multi-tenant izolacija',
    description:
      'Svaka tvrtka na vlastitoj subdomeni ili prilagođenoj domeni, s potpunom izolacijom podataka.',
  },
  {
    title: 'Bruto bilanca i dnevnik',
    description:
      'Izvještaji za knjiženja, bruto bilancu i dnevnik — izvoz u XLSX za reviziju i analizu.',
  },
  {
    title: 'EUR i HR propisi',
    description:
      'Platforma je prilagođena hrvatskom tržištu i EUR valuti, spremna za svakodnevno poslovanje.',
  },
];

export default function MarketingPage() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="header-brand">
            <Logo size={40} showText />
          </Link>
          <nav className="header-nav" aria-label="Glavna navigacija">
            <a href="#znacajke">Značajke</a>
            <a href="#demo">Demo</a>
            <a href={APP_URL} className="nav-cta">
              Prijava
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Računovodstvo u oblaku</p>
              <h1>Računovodstvo prilagođeno hrvatskim propisima</h1>
              <p className="hero-lead">
                racunAI je SaaS platforma za računovodstvene uredaje i tvrtke koje žele moderan,
                siguran i multi-tenant ERP — od izdavanja računa do PDV knjiga i bankovnog
                usklađivanja.
              </p>
              <div className="hero-actions">
                <a href={APP_URL} className="btn btn-primary">
                  Prijavite se
                </a>
                <a href={DEMO_URL} className="btn btn-secondary">
                  Pogledajte demo
                </a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-card">
                <div className="hero-card-header">
                  <Logo size={36} />
                  <span>Demo d.o.o.</span>
                </div>
                <ul className="hero-stats">
                  <li>
                    <span className="stat-label">Knjiženja ovaj mjesec</span>
                    <span className="stat-value">128</span>
                  </li>
                  <li>
                    <span className="stat-label">PDV obveza Q2</span>
                    <span className="stat-value">€ 4.820</span>
                  </li>
                  <li>
                    <span className="stat-label">Neusklađene transakcije</span>
                    <span className="stat-value stat-ok">3</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="znacajke" className="features">
          <div className="container">
            <div className="section-head">
              <h2>Sve što trebate za svakodnevno računovodstvo</h2>
              <p>
                Moduli su međusobno povezani — promjena na računu automatski generira knjiženje,
                a bankovni uvoz predlaže usklađivanje.
              </p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article key={feature.title} className="feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="demo">
          <div className="container demo-inner">
            <div>
              <h2>Isprobajte demo okruženje</h2>
              <p>
                Demo tenant <strong>Demo d.o.o.</strong> pokazuje puni tok rada: računi, troškovi,
                knjiženja, PDV knjige i bankovni modul — na adresi{' '}
                <code>demo.racunai.hr</code>.
              </p>
              <a href={DEMO_URL} className="btn btn-primary">
                Otvori demo
              </a>
            </div>
            <div className="demo-screenshot">
              <Image
                src="/racunai-logo.png"
                alt=""
                width={120}
                height={120}
                className="demo-logo"
              />
              <p>demo.racunai.hr</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <h2>Spremni za početak?</h2>
            <p>Prijavite se na platformu i odaberite svoju tvrtku — ili kontaktirajte nas za onboarding.</p>
            <a href={APP_URL} className="btn btn-primary btn-lg">
              Idite na app.racunai.hr
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Logo size={32} showText />
          <p>© {new Date().getFullYear()} racunAI. Računovodstvena SaaS platforma.</p>
          <div className="footer-links">
            <a href={APP_URL}>Prijava</a>
            <a href="https://admin.racunai.hr/admin/">Platform admin</a>
            <a href={DEMO_URL}>Demo</a>
          </div>
        </div>
        <div className="container footer-powered">
          <p>
            Powered by{' '}
            <a href={DEMO_URL}>
              <strong>FINE STAR d.o.o.</strong>
            </a>
            <br />
            OIB 36619131370 · MBS 080885494
            <br />
            Bana Josipa Jelačića 58, 22000 Šibenik
          </p>
        </div>
      </footer>
    </>
  );
}
