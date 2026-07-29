"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { localeNames, locales, type Copy, type Locale } from "../translations";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.hugo.theuniversedecides";

function CosmicObject({ kind }: { kind: number }) {
  if (kind === 0) return <div className="coin"><span>✦</span></div>;
  if (kind === 1) return <div className="dice"><i /><i /><i /><i /><i /></div>;
  if (kind === 2) {
    return (
      <div className="card-stack">
        <div className="card card-left"><span>♠</span><b>✦</b></div>
        <div className="card card-center"><span>☾</span><b>✦</b></div>
        <div className="card card-right"><span>♦</span><b>✦</b></div>
      </div>
    );
  }
  return <div className="list-orbit"><span>Pizza</span><span>Movie</span><span>Game</span></div>;
}

function StoreButton({ label }: { label: string }) {
  return (
    <a className="store-button" href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
      <span className="play-icon">▶</span>
      <span><small>GET IT ON</small>{label}</span>
    </a>
  );
}

function FdroidButton({ label, soon }: { label: string; soon: string }) {
  return (
    <button className="store-button store-button-disabled" type="button" disabled aria-label={`${label} — ${soon}`}>
      <span className="fdroid-icon" aria-hidden="true">F</span>
      <span><small>{soon}</small>{label}</span>
    </button>
  );
}

function StoreButtons({ playLabel, fdroidLabel, soon }: { playLabel: string; fdroidLabel: string; soon: string }) {
  return (
    <div className="store-buttons">
      <StoreButton label={playLabel} />
      <FdroidButton label={fdroidLabel} soon={soon} />
    </div>
  );
}

export default function CosmicLanding({ locale, content }: { locale: Locale; content: Copy }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.lang = locale;
    const panels = Array.from(document.querySelectorAll<HTMLElement>(".story-panel"));
    let frame = 0;

    const updateScrollEffects = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const max = document.documentElement.scrollHeight - viewport;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }

      panels.forEach((panel) => {
        const visual = panel.querySelector<HTMLElement>(".story-visual");
        const copy = panel.querySelector<HTMLElement>(".story-copy");
        const object = panel.querySelector<HTMLElement>(".coin, .dice, .card-stack, .list-orbit");
        if (!visual || !copy || !object) return;

        const rect = panel.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (viewport - rect.top) / (viewport + rect.height)));
        const eased = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        const direction = panel.matches(":nth-child(even)") ? 1 : -1;

        visual.style.opacity = String(0.15 + Math.min(1, progress * 2) * 0.85);
        visual.style.transform = `translate3d(${direction * (1 - eased) * 70}px, ${(1 - eased) * 70}px, 0) scale(${0.78 + eased * 0.22}) rotate(${(1 - eased) * -8}deg)`;
        copy.style.opacity = String(Math.min(1, progress * 2.2));
        copy.style.transform = `translate3d(0, ${(1 - Math.min(1, progress * 2.2)) * 90}px, 0)`;

        if (object.classList.contains("coin")) {
          object.style.transform = `translate3d(${(-35 + eased * 67)}%, ${(45 - eased * 90)}%, 0) rotateY(${-80 + eased * 1160}deg) rotateX(${18 - eased * 36}deg) scale(${1 + Math.sin(eased * Math.PI) * 0.08})`;
        } else if (object.classList.contains("dice")) {
          object.style.transform = `translate3d(${(-38 + eased * 74)}%, ${(42 - eased * 84)}%, 0) rotateX(${-65 + eased * 825}deg) rotateY(${-80 + eased * 780}deg) rotateZ(${-24 + eased * 48}deg) scale(${1 + Math.sin(eased * Math.PI) * 0.08})`;
        } else if (object.classList.contains("card-stack")) {
          object.style.transform = `translateY(${35 - eased * 70}%) rotateY(${-24 + eased * 48}deg) scale(${0.8 + Math.sin(eased * Math.PI) * 0.28})`;
          const left = panel.querySelector<HTMLElement>(".card-left");
          const right = panel.querySelector<HTMLElement>(".card-right");
          if (left) left.style.transform = `rotate(${-3 - eased * 25}deg) translateX(${-5 - eased * 59}%)`;
          if (right) right.style.transform = `rotate(${3 + eased * 25}deg) translateX(${5 + eased * 59}%)`;
        } else {
          object.style.transform = `translate3d(${(-25 + eased * 49)}%, ${(30 - eased * 58)}%, 0) rotate(${-8 + eased * 11}deg) scale(${1 + Math.sin(eased * Math.PI) * 0.05})`;
          const items = object.querySelectorAll<HTMLElement>("span");
          if (items[0]) items[0].style.transform = `translateX(${18 - eased * 36}%)`;
          if (items[2]) items[2].style.transform = `translateX(${-18 + eased * 36}%)`;
        }
      });
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollEffects);
    };
    updateScrollEffects();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [locale]);

  return (
    <main>
      <div ref={progressRef} className="progress" />
      <header className="site-header">
        <Link href={`/${locale}`} className="brand" aria-label="The Universe Decides">
          <span className="brand-mark">✦</span><span>The Universe Decides</span>
        </Link>
        <nav aria-label="Primary navigation">
          <a href="#experience">{content.nav[0]}</a>
          <a href="#randomness">{content.nav[1]}</a>
          <a href="#privacy">{content.nav[2]}</a>
        </nav>
        <div className="header-actions">
          <div className="language">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Change language">
              {locale.toUpperCase()} <span>⌄</span>
            </button>
            {menuOpen && (
              <div className="language-menu">
                {locales.map((item) => (
                  <Link key={item} href={`/${item}`} lang={item} onClick={() => setMenuOpen(false)} className={item === locale ? "active" : ""}>
                    {localeNames[item]}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a className="nav-cta" href={PLAY_STORE_URL} target="_blank" rel="noreferrer">{content.nav[3]}</a>
        </div>
      </header>

      <section className="hero">
        <div className="starfield" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">{content.hero[0]}</p>
          <h1>{content.hero[1]}<br /><em>{content.hero[2]}</em></h1>
          <p className="hero-body">{content.hero[3]}</p>
          <StoreButtons playLabel={content.hero[4]} fdroidLabel={content.stores[0]} soon={content.stores[1]} />
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="cosmic-core"><span>✦</span></div>
          <i className="planet p1" /><i className="planet p2" /><i className="planet p3" />
        </div>
        <a className="scroll-cue" href="#experience"><span>{content.hero[5]}</span><i>↓</i></a>
      </section>

      <div id="experience" className="story">
        {content.moments.map((moment, index) => (
          <section className="story-panel" key={moment[0]}>
            <div className="story-visual" aria-hidden="true">
              <div className="object-orbit" /><CosmicObject kind={index} /><span className="visual-label">{moment[2]}</span>
            </div>
            <div className="story-copy">
              <span>0{index + 1} / 04</span><h2>{moment[0]}</h2><p>{moment[1]}</p>
            </div>
          </section>
        ))}
      </div>

      <section id="randomness" className="randomness">
        <div className="section-heading">
          <p className="eyebrow">{content.random[0]}</p><h2>{content.random[1]}</h2><p>{content.random[2]}</p>
        </div>
        <div className="random-grid">
          <article>
            <div className="signal"><i /><i /><i /><i /><i /></div><span>RANDOM.ORG</span>
            <h3>{content.random[3]}</h3><p>{content.random[4]}</p>
          </article>
          <article>
            <div className="local-orbit">◎</div><span>LOCAL FALLBACK</span>
            <h3>{content.random[5]}</h3><p>{content.random[6]}</p>
          </article>
        </div>
      </section>

      <section id="privacy" className="privacy">
        <div className="privacy-symbol" aria-hidden="true"><div>◉</div></div>
        <div>
          <p className="eyebrow">{content.privacy[0]}</p><h2>{content.privacy[1]}</h2><p>{content.privacy[2]}</p>
          <div className="chips">{content.privacy.slice(3).map((chip) => <span key={chip}>✦ {chip}</span>)}</div>
          <a className="privacy-link" href="https://hugodotnet.dev/the-universe-decides/privacy-policy" target="_blank" rel="noreferrer">{content.privacyLink} ↗</a>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-rings" aria-hidden="true" />
        <p className="eyebrow">{content.final[0]}</p><h2>{content.final[1]}</h2><p>{content.final[2]}</p>
        <StoreButtons playLabel={content.final[3]} fdroidLabel={content.stores[0]} soon={content.stores[1]} />
      </section>

      <footer>
        <span className="brand"><span className="brand-mark">✦</span>The Universe Decides</span>
        <p>{content.footer}</p><a href="https://hugodotnet.dev/the-universe-decides/privacy-policy" target="_blank" rel="noreferrer">{content.privacyLink}</a><span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
