/* Shared atoms & chrome — Acts 2:42 */

function Squiggle({ color = "currentColor", className = "" }) {
  return (
    <svg viewBox="0 0 200 12" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path
        d="M2 8 Q 25 1, 50 7 T 100 7 T 150 7 T 198 6"
        stroke={color}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Arrow({ rotation = 0, color = "currentColor", style }) {
  return (
    <svg
      viewBox="0 0 80 40"
      width="80"
      height="40"
      style={{ transform: `rotate(${rotation}deg)`, ...style }}
      aria-hidden="true"
    >
      <path
        d="M2 30 Q 20 6, 50 12 T 74 22"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M74 22 L 62 16 M74 22 L 68 32"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Placeholder({ label, tone = "clay", style, className = "" }) {
  return (
    <div className={`ph ${tone === "blue" ? "blue" : tone === "sage" ? "sage" : ""} ${className}`} style={style}>
      <span>{label}</span>
    </div>
  );
}

function PhotoSlot({ id, placeholder, tone, style, caption }) {
  // Uses the <image-slot> web component if available; falls back to striped placeholder.
  const supported = typeof customElements !== "undefined" && customElements.get("image-slot");
  return (
    <div className="photo-card" style={style}>
      {supported ? (
        <image-slot id={id} placeholder={placeholder} shape="rect" radius="0"></image-slot>
      ) : (
        <Placeholder label={placeholder} tone={tone} style={{ width: "100%", height: "100%" }} />
      )}
      {caption && <div className="caption">{caption}</div>}
    </div>
  );
}

function NavBar({ route, navigate }) {
  const links = [
    ["home", "Home"],
    ["about", "About Us"],
    ["what-is-hc", "What Is House Church?"],
    ["expect", "What To Expect"],
    ["gatherings", "Gatherings"],
    ["gospel", "Gospel of Jesus"],
    ["contact", "Contact"],
  ];
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); navigate("home"); }}>
          <div className="brand-mark">a²</div>
          <div>
            Acts 2:42
            <small>House Church · Gwinnett</small>
          </div>
        </a>
        <nav className="nav-links">
          {links.map(([key, label]) => (
            <a
              key={key}
              href={`#${key}`}
              className={`nav-link ${route === key ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); navigate(key); }}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="nav-cta"
          onClick={(e) => { e.preventDefault(); navigate("contact"); }}
        >
          Visit a Gathering
        </a>
      </div>
    </header>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 18 }}>
              <div className="brand-mark">a²</div>
              <div>
                Acts 2:42
                <small>House Church · Gwinnett</small>
              </div>
            </div>
            <p style={{ color: "var(--ink-soft)", fontSize: 15, maxWidth: 320, lineHeight: 1.6 }}>
              A Jesus-centered house church family gathering in homes throughout
              Gwinnett County. Real meals, real prayer, real life.
            </p>
          </div>
          <div>
            <h4>Visit</h4>
            <div className="footer-links">
              <a className="footer-link" href="#gatherings" onClick={(e) => { e.preventDefault(); navigate("gatherings"); }}>Find a gathering</a>
              <a className="footer-link" href="#expect" onClick={(e) => { e.preventDefault(); navigate("expect"); }}>What to expect</a>
              <a className="footer-link" href="#contact" onClick={(e) => { e.preventDefault(); navigate("contact"); }}>Plan a visit</a>
            </div>
          </div>
          <div>
            <h4>Learn</h4>
            <div className="footer-links">
              <a className="footer-link" href="#what-is-hc" onClick={(e) => { e.preventDefault(); navigate("what-is-hc"); }}>What is house church?</a>
              <a className="footer-link" href="#gospel" onClick={(e) => { e.preventDefault(); navigate("gospel"); }}>Gospel of Jesus</a>
              <a className="footer-link" href="#about" onClick={(e) => { e.preventDefault(); navigate("about"); }}>About us</a>
            </div>
          </div>
          <div>
            <h4>Reach Out</h4>
            <div className="footer-links">
              <span className="footer-link">hello@acts242now.org</span>
              <span className="footer-link">Gwinnett County, GA</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© Acts 2:42 House Church Network</span>
          <span className="handwritten" style={{ color: "var(--blue)" }}>
            “they devoted themselves…” — Acts 2:42
          </span>
        </div>
      </div>
    </footer>
  );
}

function Ticker({ items }) {
  const seq = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {seq.map((w, i) => (
          <React.Fragment key={i}>
            <span>{w}</span>
            <span className="dot">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  Squiggle,
  Arrow,
  Placeholder,
  PhotoSlot,
  NavBar,
  Footer,
  Ticker,
});
