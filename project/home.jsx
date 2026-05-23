/* Home page — Acts 2:42 */

function HomeHero({ tweaks, navigate }) {
  const variant = tweaks.heroVariant || "collage";
  const headline = tweaks.headline || "You were created for real relationship";

  // Split headline so last 2 words become the accent. Keep simple.
  const words = headline.trim().split(" ");
  const accentLen = words.length > 4 ? 2 : 1;
  const lead = words.slice(0, words.length - accentLen).join(" ");
  const accent = words.slice(words.length - accentLen).join(" ");

  return (
    <section className="hero">
      <div className="container-wide">
        <div className="hero-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{
                width: 8, height: 8, borderRadius: 50, background: "var(--amber)",
              }} />
              <div className="eyebrow">A house church family in Gwinnett County</div>
            </div>
            <h1>
              {lead}{" "}
              <span className="accent">
                {accent}
                <Squiggle color="var(--amber)" />
              </span>
            </h1>
            <p className="hero-sub">
              A simple, Jesus-centered house church family throughout
              Gwinnett County where people share meals, grow together,
              pray together, and learn to live <em>Kingdom life</em>
              {" "}together — in living rooms, around tables, as family.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary btn-arrow" href="#gatherings"
                onClick={(e) => { e.preventDefault(); navigate("gatherings"); }}>
                Visit a Gathering
              </a>
              <a className="btn btn-secondary" href="#what-is-hc"
                onClick={(e) => { e.preventDefault(); navigate("what-is-hc"); }}>
                Learn about House Church
              </a>
            </div>
            <div className="hero-meta">
              <div className="hero-meta-line" />
              <div className="eyebrow" style={{ color: "var(--ink-soft)" }}>
                No pressure · No performance · No insider club
              </div>
              <div className="hero-meta-line" />
            </div>
          </div>

          {variant === "collage" && <HeroCollage />}
          {variant === "verse" && <HeroVerse />}
          {variant === "table" && <HeroTable />}
        </div>
      </div>
    </section>
  );
}

function HeroCollage() {
  return (
    <div className="collage">
      <div className="collage-blob" />
      <div className="collage-blob alt" />
      <PhotoSlot
        id="hero-photo-1"
        placeholder="Sharing a meal"
        tone="clay"
        style={{ top: "4%", left: "6%", width: "56%", height: "56%", transform: "rotate(-3.5deg)" }}
        caption="Sunday supper, Lawrenceville"
      />
      <PhotoSlot
        id="hero-photo-2"
        placeholder="Open Bible · couch"
        tone="blue"
        style={{ top: "32%", right: "4%", width: "44%", height: "44%", transform: "rotate(4deg)" }}
        caption="Wednesday gathering"
      />
      <PhotoSlot
        id="hero-photo-3"
        placeholder="Kids playing"
        tone="sage"
        style={{ bottom: "2%", left: "18%", width: "46%", height: "36%", transform: "rotate(-1.5deg)" }}
        caption="Family time"
      />
      <div className="sticky-note">
        We'd love to <br />have you over.
      </div>
    </div>
  );
}

function HeroVerse() {
  return (
    <div style={{ position: "relative", padding: "20px 0", display: "grid", placeItems: "center" }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "var(--sage)",
        borderRadius: "44% 56% 60% 40% / 50% 50% 50% 50%",
        opacity: 0.18,
      }} />
      <div style={{ position: "relative", textAlign: "center", padding: 40 }}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>Acts 2:42</div>
        <p className="serif" style={{
          fontSize: 36, lineHeight: 1.25, letterSpacing: "-0.01em",
          fontStyle: "italic", color: "var(--ink)", maxWidth: "16ch", margin: "0 auto",
        }}>
          “They devoted themselves to the apostles' teaching, the fellowship,
          the breaking of bread, and the prayers.”
        </p>
        <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          {["Teaching", "Fellowship", "Bread", "Prayer"].map((w, i) => (
            <span key={w} style={{
              padding: "10px 18px",
              borderRadius: 999,
              background: ["var(--amber)", "var(--sage)", "var(--clay)", "var(--blue)"][i],
              color: "var(--paper)",
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontSize: 18,
            }}>{w}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroTable() {
  return (
    <div className="collage" style={{ height: 560 }}>
      <div className="collage-blob" style={{ inset: "10% 10% 10% 10%" }} />
      <PhotoSlot
        id="hero-table"
        placeholder="The table is set"
        tone="clay"
        style={{ top: "8%", left: "8%", right: "8%", width: "84%", height: "82%", transform: "rotate(-1deg)" }}
        caption="Tuesday night, Snellville"
      />
      <div className="sticky-note" style={{ top: "auto", bottom: "-2%", right: "10%", transform: "rotate(-4deg)" }}>
        There's a seat for you.
      </div>
    </div>
  );
}

function ComeSee({ navigate }) {
  return (
    <section>
      <div className="container">
        <div className="come-see">
          <div className="come-see-blob" />
          <div className="eyebrow">Come and see</div>
          <h2>The door is open. <em style={{ color: "var(--amber)" }}>So is the table.</em></h2>
          <p>
            We know many people are tired of performance-driven religion and
            disconnected church experiences. What we have found is simple but
            powerful: people grow deeply when they live life together in
            authentic community centered around Jesus.
          </p>
          <p>
            Our gatherings are relaxed, participatory, family-oriented, and
            centered on relationship with God and one another. No pressure.
            No performance. Just people learning to follow Jesus together.
          </p>
          <div className="btn-row">
            <a className="btn btn-amber btn-arrow" href="#contact"
              onClick={(e) => { e.preventDefault(); navigate("contact"); }}>
              Plan a Visit
            </a>
            <a className="btn" href="#expect"
              onClick={(e) => { e.preventDefault(); navigate("expect"); }}
              style={{ background: "transparent", color: "var(--paper)", border: "1.5px solid color-mix(in oklch, var(--paper) 60%, transparent)" }}>
              What to expect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatToExpectSection({ navigate }) {
  return (
    <section style={{ position: "relative" }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">What actually happens</div>
            <h2>A regular Tuesday <span className="handwritten" style={{ color: "var(--blue)" }}>looks like this.</span></h2>
          </div>
          <p>
            Walking into something new can feel awkward. Here's exactly what to
            expect when you come — so you can show up and just be yourself.
          </p>
        </div>

        <div className="expect-grid">
          <div className="expect span-6 bg-cream">
            <div className="expect-num">01</div>
            <h3>Sharing meals together</h3>
            <p>
              Most gatherings start around a table. Bring something if you
              want; don't if you can't. The food is good. The conversation is
              better.
            </p>
          </div>
          <div className="expect span-6 bg-sage">
            <div className="expect-num">02</div>
            <h3>Open discussion &amp; teaching</h3>
            <p>
              We read scripture together and talk about what it means for our
              actual lives. Everyone gets to ask questions. Nobody preaches at
              you.
            </p>
          </div>
          <div className="expect span-4 bg-clay">
            <div className="expect-num">03</div>
            <h3>Prayer &amp; encouragement</h3>
            <p>
              We pray for each other — out loud, simply, by name. It's tender,
              not theatrical.
            </p>
          </div>
          <div className="expect span-4 bg-cream">
            <div className="expect-num">04</div>
            <h3>Kids &amp; families</h3>
            <p>
              Children are part of everything. They eat, play, listen, and
              sometimes interrupt. We love that.
            </p>
          </div>
          <div className="expect span-4 bg-cream">
            <div className="expect-num">05</div>
            <h3>Relaxed environment</h3>
            <p>
              Sweatpants are fine. So are your hard questions. So is sitting
              quietly and just taking it in.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
          <a className="btn btn-secondary btn-arrow" href="#expect"
            onClick={(e) => { e.preventDefault(); navigate("expect"); }}>
            Read the full walk-through
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      quote: "I finally felt known. Not as a project, not as a visitor — as a friend.",
      name: "M.",
      where: "Lawrenceville",
    },
    {
      quote: "This was the first time church felt like family instead of an event I had to attend.",
      name: "J.",
      where: "Snellville",
    },
    {
      quote: "My kids actually love gathering with believers now. That alone is worth everything.",
      name: "R. &amp; A.",
      where: "Duluth",
    },
  ];
  return (
    <section style={{ background: "var(--cream-deep)" }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">From the family</div>
            <h2>What people <span className="circled">actually</span> say.</h2>
          </div>
          <p>
            Real words from people who walked in nervous and stayed because
            something felt true.
          </p>
        </div>
        <div className="testimonials">
          {quotes.map((q, i) => (
            <div className="testimonial" key={i}>
              <div className="testimonial-mark">“</div>
              <blockquote dangerouslySetInnerHTML={{ __html: `“${q.quote}”` }} />
              <div className="testimonial-meta">
                <div className="avatar">{q.name.replace(/[^A-Za-z]/g, "").charAt(0)}</div>
                <div>
                  <strong dangerouslySetInnerHTML={{ __html: q.name }} /><br />
                  <span style={{ color: "var(--clay)", fontSize: 13 }}>{q.where}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VerseSection() {
  return (
    <section className="verse">
      <div className="container">
        <div className="verse-mark">Acts 2 · verse 42</div>
        <blockquote>
          “They devoted themselves <em>to the apostles' teaching</em>,
          {" "}<em>the fellowship</em>, <em>the breaking of bread</em>,
          {" "}and <em>the prayers</em>.”
        </blockquote>
        <cite>The pattern we're still trying to live</cite>
      </div>
    </section>
  );
}

function GatheringsPreview({ navigate }) {
  const items = [
    {
      name: "Lawrenceville Home",
      meta: "Sundays · 5:00pm",
      blurb: "Multigenerational. Kids are loud, food is hearty, and the door is unlocked.",
      photo: "Front porch · Lawrenceville",
      tone: "clay",
    },
    {
      name: "Snellville Home",
      meta: "Tuesdays · 6:30pm",
      blurb: "A smaller, quieter table — good for first-time visitors and big questions.",
      photo: "Living room · Snellville",
      tone: "blue",
    },
    {
      name: "Duluth Home",
      meta: "Wednesdays · 7:00pm",
      blurb: "Young families and singles together. Coffee on, kids playing, scripture open.",
      photo: "Kitchen · Duluth",
      tone: "sage",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Three open homes</div>
            <h2>Find a table <span className="handwritten" style={{ color: "var(--blue)" }}>near you.</span></h2>
          </div>
          <p>
            We meet in homes across Gwinnett County. Pick the one closest, or
            most convenient — and tell us you're coming so we can save you a
            seat.
          </p>
        </div>

        <div className="gatherings-grid">
          {items.map((g, i) => (
            <div className="gathering-card" key={i}>
              <div className="photo">
                <Placeholder label={g.photo} tone={g.tone} style={{ width: "100%", height: "100%" }} />
              </div>
              <div className="body">
                <div className="meta">{g.meta}</div>
                <h3>{g.name}</h3>
                <p>{g.blurb}</p>
                <a className="gathering-link" href="#gatherings"
                  onClick={(e) => { e.preventDefault(); navigate("gatherings"); }}>
                  Visit this gathering →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ navigate }) {
  return (
    <section style={{ paddingBottom: 80 }}>
      <div className="container">
        <div className="final-cta">
          <div>
            <div className="eyebrow" style={{ color: "var(--amber)" }}>One last thing</div>
            <h2 style={{ marginTop: 14 }}>
              Come experience <em>Kingdom family</em> with us.
            </h2>
            <p>
              Bring your questions, your hesitations, your kids, your story.
              We'll bring dinner, an open Bible, and people who genuinely want
              to know you.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
            <a className="btn btn-amber btn-arrow" href="#contact"
              onClick={(e) => { e.preventDefault(); navigate("contact"); }}>
              Plan a Visit
            </a>
            <a className="btn" href="#gatherings"
              onClick={(e) => { e.preventDefault(); navigate("gatherings"); }}
              style={{ background: "transparent", color: "var(--paper)", border: "1.5px solid color-mix(in oklch, var(--paper) 50%, transparent)" }}>
              See all gatherings
            </a>
            <span style={{ marginTop: 10, fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.1em", color: "color-mix(in oklch, var(--paper) 50%, var(--ink))" }}>
              OR — TEXT US: (770) 555-0142
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage({ tweaks, navigate }) {
  return (
    <div className="page-shell">
      <HomeHero tweaks={tweaks} navigate={navigate} />
      <Ticker items={["Meals", "Prayer", "Scripture", "Friendship", "Family", "Jesus"]} />
      <ComeSee navigate={navigate} />
      <WhatToExpectSection navigate={navigate} />
      <VerseSection />
      <Testimonials />
      <GatheringsPreview navigate={navigate} />
      <FinalCTA navigate={navigate} />
    </div>
  );
}

Object.assign(window, { HomePage });
