/* App shell — Acts 2:42 router + tweaks */

const PALETTES = {
  warm: {
    label: "Warm earth",
    "--cream": "#F7F2E8",
    "--cream-deep": "#EFE6D2",
    "--paper": "#FBF7EE",
    "--ink": "#1A1F23",
    "--ink-soft": "#3B4148",
    "--blue": "#3F5D6B",
    "--blue-deep": "#2A4250",
    "--amber": "#C58A4A",
    "--amber-deep": "#A56E32",
    "--clay": "#8A6E4F",
    "--sage": "#6E8A6F",
    "--sage-deep": "#4F6B52",
    "--rose": "#B05A48",
  },
  olive: {
    label: "Olive grove",
    "--cream": "#F4EFE3",
    "--cream-deep": "#E7E0CB",
    "--paper": "#FAF6EB",
    "--ink": "#1F2620",
    "--ink-soft": "#3F4A40",
    "--blue": "#5A6E4A",
    "--blue-deep": "#3E5034",
    "--amber": "#D89A3E",
    "--amber-deep": "#B07A26",
    "--clay": "#8C6F4C",
    "--sage": "#7B8E54",
    "--sage-deep": "#566B3C",
    "--rose": "#C26B4E",
  },
  clay: {
    label: "Soft clay",
    "--cream": "#FBF4EA",
    "--cream-deep": "#F2E5CF",
    "--paper": "#FFF9EE",
    "--ink": "#231914",
    "--ink-soft": "#4A3A30",
    "--blue": "#3E5D6B",
    "--blue-deep": "#2A4250",
    "--amber": "#D9743F",
    "--amber-deep": "#B5562A",
    "--clay": "#A07556",
    "--sage": "#7C8F66",
    "--sage-deep": "#5A6E48",
    "--rose": "#B0493A",
  },
  dusk: {
    label: "Dusk blue",
    "--cream": "#F2EEE5",
    "--cream-deep": "#E4DDCB",
    "--paper": "#F9F4EA",
    "--ink": "#161D24",
    "--ink-soft": "#374555",
    "--blue": "#2F4A5C",
    "--blue-deep": "#1E3344",
    "--amber": "#D9A23A",
    "--amber-deep": "#B58020",
    "--clay": "#9C7A56",
    "--sage": "#6A8478",
    "--sage-deep": "#4A655C",
    "--rose": "#B65C49",
  },
};

const FONT_PAIRS = {
  newsreader: {
    label: "Newsreader · Public Sans",
    serif: "'Newsreader', 'Source Serif 4', Georgia, serif",
    sans: "'Public Sans', 'Helvetica Neue', system-ui, sans-serif",
  },
  source: {
    label: "Source Serif · Manrope",
    serif: "'Source Serif 4', Georgia, serif",
    sans: "'Manrope', system-ui, sans-serif",
  },
  lora: {
    label: "Lora · Plus Jakarta",
    serif: "'Lora', Georgia, serif",
    sans: "'Plus Jakarta Sans', system-ui, sans-serif",
  },
  eb: {
    label: "EB Garamond · Public Sans",
    serif: "'EB Garamond', Georgia, serif",
    sans: "'Public Sans', system-ui, sans-serif",
  },
};

const HEADLINE_OPTIONS = [
  "You were created for real relationship",
  "Come to the table",
  "Church the way it actually started",
  "You belong at a real table",
];

const PAGES = {
  home: { component: "HomePage" },
  about: { component: "AboutPage" },
  "what-is-hc": { component: "WhatIsHCPage" },
  expect: { component: "ExpectPage" },
  gatherings: { component: "GatheringsPage" },
  gospel: { component: "GospelPage" },
  contact: { component: "ContactPage" },
};

function App() {
  const tweakDefaults = /*EDITMODE-BEGIN*/{
    "palette": "warm",
    "fontPair": "newsreader",
    "headline": "You were created for real relationship",
    "heroVariant": "collage",
    "density": "default"
  }/*EDITMODE-END*/;

  const [tweaks, setTweak] = useTweaks(tweakDefaults);

  const [route, setRoute] = React.useState(() => {
    const hash = window.location.hash.replace("#", "");
    return PAGES[hash] ? hash : "home";
  });

  const navigate = React.useCallback((next) => {
    if (!PAGES[next]) return;
    window.location.hash = next;
    setRoute(next);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  React.useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (PAGES[hash]) setRoute(hash);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Apply palette + fonts + density to :root
  React.useEffect(() => {
    const root = document.documentElement;
    const pal = PALETTES[tweaks.palette] || PALETTES.warm;
    Object.entries(pal).forEach(([k, v]) => {
      if (k.startsWith("--")) root.style.setProperty(k, v);
    });
    const fp = FONT_PAIRS[tweaks.fontPair] || FONT_PAIRS.newsreader;
    root.style.setProperty("--serif", fp.serif);
    root.style.setProperty("--sans", fp.sans);
    root.setAttribute("data-density", tweaks.density || "default");
  }, [tweaks.palette, tweaks.fontPair, tweaks.density]);

  const PageComponent = window[PAGES[route].component];

  return (
    <>
      <NavBar route={route} navigate={navigate} />
      <main>
        {PageComponent
          ? <PageComponent tweaks={tweaks} navigate={navigate} key={route} />
          : <div className="container"><p>Page not found.</p></div>}
      </main>
      <Footer navigate={navigate} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette">
          <TweakColor
            label="Color direction"
            value={tweaks.palette}
            options={[
              ["#F7F2E8", "#3F5D6B", "#C58A4A", "#6E8A6F"],
              ["#F4EFE3", "#5A6E4A", "#D89A3E", "#7B8E54"],
              ["#FBF4EA", "#3E5D6B", "#D9743F", "#A07556"],
              ["#F2EEE5", "#2F4A5C", "#D9A23A", "#6A8478"],
            ]}
            onChange={(v) => {
              // TweakColor returns the palette array; map back to key
              const idx = [
                ["#F7F2E8", "#3F5D6B", "#C58A4A", "#6E8A6F"],
                ["#F4EFE3", "#5A6E4A", "#D89A3E", "#7B8E54"],
                ["#FBF4EA", "#3E5D6B", "#D9743F", "#A07556"],
                ["#F2EEE5", "#2F4A5C", "#D9A23A", "#6A8478"],
              ].findIndex(p => JSON.stringify(p) === JSON.stringify(v));
              const key = ["warm", "olive", "clay", "dusk"][idx] || "warm";
              setTweak("palette", key);
            }}
          />
        </TweakSection>

        <TweakSection label="Type">
          <TweakSelect
            label="Font pairing"
            value={tweaks.fontPair}
            options={Object.entries(FONT_PAIRS).map(([k, v]) => ({ value: k, label: v.label }))}
            onChange={(v) => setTweak("fontPair", v)}
          />
        </TweakSection>

        <TweakSection label="Home page">
          <TweakSelect
            label="Headline"
            value={tweaks.headline}
            options={HEADLINE_OPTIONS.map(h => ({ value: h, label: h }))}
            onChange={(v) => setTweak("headline", v)}
          />
          <TweakRadio
            label="Hero visual"
            value={tweaks.heroVariant}
            options={[
              { value: "collage", label: "Collage" },
              { value: "verse", label: "Verse" },
              { value: "table", label: "Table" },
            ]}
            onChange={(v) => setTweak("heroVariant", v)}
          />
        </TweakSection>

        <TweakSection label="Layout">
          <TweakRadio
            label="Density"
            value={tweaks.density}
            options={[
              { value: "cozy", label: "Cozy" },
              { value: "default", label: "Default" },
              { value: "airy", label: "Airy" },
            ]}
            onChange={(v) => setTweak("density", v)}
          />
        </TweakSection>

        <TweakSection label="Quick navigate">
          {[
            ["home", "Home"],
            ["about", "About"],
            ["what-is-hc", "What is House Church?"],
            ["expect", "What to Expect"],
            ["gatherings", "Gatherings"],
            ["gospel", "Gospel of Jesus"],
            ["contact", "Contact"],
          ].map(([k, label]) => (
            <TweakButton key={k} label={`${route === k ? "\u2192 " : ""}${label}`} onClick={() => navigate(k)} secondary={route !== k} />
          ))}
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
