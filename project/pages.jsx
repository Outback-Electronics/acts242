/* Inner pages — Acts 2:42 */

function PageHero({ eyebrow, title, lede, accent }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {lede && <p className="lede">{lede}</p>}
      </div>
    </section>
  );
}

/* ─── About ─── */
function AboutPage({ navigate }) {
  const values = [
    { n: "Value 01", h: "Jesus is the center.", p: "Not a building, not a brand, not a teacher. Jesus is the head of the church — and that means how we gather, decide, and love each other." },
    { n: "Value 02", h: "Family, not audience.", p: "We aren't a service you attend. We're a family you belong to — with all the joy, mess, and patience that real family takes." },
    { n: "Value 03", h: "Everyone participates.", p: "Every person carries something the rest of the body needs. Gatherings are shared, not performed." },
    { n: "Value 04", h: "Simple obedience.", p: "We read scripture together and ask: what does this look like for us, this week, in our actual lives?" },
    { n: "Value 05", h: "Multiplication, not centralization.", p: "Healthy families have more families. We grow by sending, not by stacking chairs." },
    { n: "Value 06", h: "Hospitality.", p: "Open homes, open tables, open Bibles. Strangers become friends. Friends become family." },
  ];
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="About us"
        title="We're a small <em>family</em> learning to live like Jesus, together."
        lede="Acts 2:42 is a network of house churches throughout Gwinnett County. We're not trying to build a brand — we're trying to be a family that looks like the early church in Acts: devoted to teaching, fellowship, the breaking of bread, and prayer."
      />

      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <div className="eyebrow">Our story</div>
              <h3 style={{ marginTop: 14 }}>How it started.</h3>
            </div>
            <div>
              <p>
                A few years ago, a handful of friends sat around a table in
                Lawrenceville and realized something we couldn't unrealize:
                the deepest moments of our spiritual lives weren't happening
                in a building on Sunday morning — they were happening over
                dinner, in living rooms, when someone asked an honest question
                and someone else answered with their actual life.
              </p>
              <p>
                So we started gathering in homes. Then more people came. Then
                another home opened. Then another. We didn't plan a network;
                a network kept happening.
              </p>
              <p>
                We're not trying to recreate something — we're trying to
                recover something. Acts 2:42 says the first followers of Jesus
                devoted themselves to four things. We're still trying to live
                like that.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream-deep)" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">What we hold</div>
              <h2>Six things we keep <span className="handwritten" style={{ color: "var(--blue)" }}>coming back to.</span></h2>
            </div>
            <p>
              These aren't a doctrinal statement. They're the posture that
              shapes how we eat, talk, pray, and love each other.
            </p>
          </div>
          <div className="values">
            {values.map((v, i) => (
              <div className="value" key={i}>
                <div className="value-n">{v.n}</div>
                <h3>{v.h}</h3>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <div className="eyebrow">The people</div>
              <h3 style={{ marginTop: 14 }}>Who leads.</h3>
            </div>
            <div>
              <p>
                Each home gathering is hosted by a couple or family who has
                walked with Jesus for a while and loves having people over.
                They aren't paid clergy. They aren't professional speakers.
                They're folks like you, learning to love their neighbors and
                read the Bible honestly.
              </p>
              <p>
                Across the network, a handful of elders meet regularly to
                pray, support hosts, and steward where this is going. They're
                accessible — you can reach any of them through the contact
                page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA navigate={navigate} />
    </div>
  );
}

/* ─── What is House Church ─── */
function WhatIsHCPage({ navigate }) {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="What is house church?"
        title="Church the way it <em>actually started</em> — around a table."
        lede="For the first three centuries, followers of Jesus gathered in homes. Not because it was a strategy, but because that was where life happened. House church isn't a movement we invented. It's a return."
      />

      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <div className="eyebrow">The simple version</div>
              <h3 style={{ marginTop: 14 }}>What it is.</h3>
            </div>
            <div>
              <p>
                House church is a small group of people who gather in a home
                — usually 8 to 25 of them — to share a meal, read scripture,
                pray for each other, and live shared life. There's no stage,
                no platform, no professional production. There's a couch, a
                table, maybe a dog, and a few kids running around.
              </p>
              <p>
                It is church in the most ancient and ordinary sense: the
                <em> ekklesia </em>— the gathered ones — meeting in the
                place real life happens.
              </p>

              <div className="scripture-block" style={{ marginTop: 32 }}>
                <div className="ref">Acts 5:42</div>
                <blockquote>
                  “Day after day, in the temple courts and from house to
                  house, they never stopped teaching and proclaiming the good
                  news that Jesus is the Messiah.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream-deep)" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Side by side</div>
              <h2>House church &amp; <span className="circled">building</span> church.</h2>
            </div>
            <p>
              Both can be faithful. But they shape life differently. Here's
              the honest difference, without taking sides.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}>
            {[
              {
                title: "Building Church",
                tone: "var(--clay)",
                rows: [
                  ["Gathers", "On a stage, facing forward"],
                  ["Sized", "Tens to thousands"],
                  ["Led by", "Professional staff"],
                  ["Centers on", "The service"],
                  ["Meal", "Symbolic (communion bread)"],
                  ["Cost", "Significant — buildings, staff, programs"],
                ],
              },
              {
                title: "House Church",
                tone: "var(--blue)",
                rows: [
                  ["Gathers", "Around a table, facing each other"],
                  ["Sized", "8 – 25 people"],
                  ["Led by", "Hosts, elders, the whole body"],
                  ["Centers on", "Shared life"],
                  ["Meal", "Real dinner, every week"],
                  ["Cost", "Almost nothing"],
                ],
              },
            ].map((col, i) => (
              <div key={i} style={{
                background: "var(--paper)",
                borderRadius: 18,
                padding: "36px 32px",
                border: "1px solid color-mix(in oklch, var(--ink) 8%, transparent)",
              }}>
                <div style={{
                  display: "inline-flex",
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: col.tone,
                  color: "var(--paper)",
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}>{col.title}</div>
                <div style={{ display: "grid", gap: 14 }}>
                  {col.rows.map(([k, v], j) => (
                    <div key={j} style={{
                      display: "grid",
                      gridTemplateColumns: "120px 1fr",
                      gap: 16,
                      paddingBottom: 14,
                      borderBottom: "1px solid color-mix(in oklch, var(--ink) 8%, transparent)",
                    }}>
                      <span style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--clay)",
                      }}>{k}</span>
                      <span style={{ fontSize: 16, color: "var(--ink)" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p style={{
            marginTop: 32,
            textAlign: "center",
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontSize: 18,
            color: "var(--ink-soft)",
            maxWidth: "60ch",
            marginLeft: "auto",
            marginRight: "auto",
          }}>
            We're not against the building. We just believe the table is where
            most of the work of family actually happens.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Common questions</div>
              <h2>Things people <span className="handwritten" style={{ color: "var(--blue)" }}>actually ask.</span></h2>
            </div>
          </div>

          <FAQ items={[
            {
              q: "Is this a real church?",
              a: "Yes. The earliest churches were small communities meeting in homes. We baptize, take communion, study scripture, raise kids in the faith, send people out, and care for our city. We are a church in the full and ancient sense of the word.",
            },
            {
              q: "Do you have a pastor?",
              a: "Each home is hosted by a couple or family, and a small group of elders shepherds the network together. None of them are full-time paid clergy — they're people in your neighborhood with day jobs who love Jesus and love you.",
            },
            {
              q: "What about my kids?",
              a: "Kids are part of everything. They eat with us, they hear the scripture, they play together. We're not running a children's program — we're raising a generation of children inside a believing community.",
            },
            {
              q: "Do I have to talk?",
              a: "Never. Some weeks you'll sit and listen. Some weeks you'll ask a question. Some weeks you'll share what God is doing in your life. There is no pressure either way.",
            },
            {
              q: "How do you handle giving?",
              a: "Generously and quietly. Because our overhead is almost nothing, money mostly goes directly to people: families in crisis, missionaries, the poor of our city, and helping new homes start.",
            },
            {
              q: "Are you against traditional churches?",
              a: "Not at all. Many of us came from traditional churches we still love. We just believe house church is closer to the way Jesus and the apostles taught the church to live — and we want to live it.",
            },
          ]} />
        </div>
      </section>

      <FinalCTA navigate={navigate} />
    </div>
  );
}

function FAQ({ items }) {
  const [open, setOpen] = React.useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {items.map((it, i) => (
        <div key={i} style={{
          borderTop: "1px solid color-mix(in oklch, var(--ink) 14%, transparent)",
          ...(i === items.length - 1 ? { borderBottom: "1px solid color-mix(in oklch, var(--ink) 14%, transparent)" } : {}),
        }}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "28px 0",
              background: "transparent",
              border: "none",
              textAlign: "left",
              cursor: "pointer",
              fontFamily: "var(--serif)",
              fontSize: 24,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
            }}>
            <span>{it.q}</span>
            <span style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              color: "var(--amber)",
              fontSize: 32,
              transform: open === i ? "rotate(45deg)" : "none",
              transition: "transform .2s ease",
              width: 32, height: 32, display: "grid", placeItems: "center",
            }}>+</span>
          </button>
          {open === i && (
            <div style={{
              paddingBottom: 28,
              fontSize: 17,
              color: "var(--ink-soft)",
              lineHeight: 1.65,
              maxWidth: "62ch",
              animation: "fade .25s ease",
            }}>
              {it.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── What To Expect ─── */
function ExpectPage({ navigate }) {
  const steps = [
    {
      n: "01",
      h: "You text us, or you just show up.",
      p: "Either works. If you text first, we'll tell you what to bring (often nothing) and where to park. If you just show up, we'll be delighted — somebody will meet you at the door.",
      img: "Front door, lights on",
      tone: "clay",
    },
    {
      n: "02",
      h: "Dinner is on the table.",
      p: "Most gatherings start with a meal. Sometimes it's a potluck, sometimes one family cooks. Conversation is normal — work, kids, what we watched last week. It really is just dinner.",
      img: "Table laid for ten",
      tone: "blue",
    },
    {
      n: "03",
      h: "We open the Bible.",
      p: "We work through a passage together — usually a few verses, slowly. Someone reads it aloud. We ask: what's it actually saying? What does it mean? What does it mean for us, this week?",
      img: "Open Bible on couch",
      tone: "sage",
    },
    {
      n: "04",
      h: "We pray for each other.",
      p: "Out loud, by name, simply. People share what's hard or what they're thankful for. No one is required to pray; no one is judged for how they pray.",
      img: "Hands, coffee, candle",
      tone: "clay",
    },
    {
      n: "05",
      h: "Kids are in the middle of it.",
      p: "We don't disappear them. Little ones play, big kids sometimes join the conversation, teenagers sometimes ask the best questions of the night. They're learning by being there.",
      img: "Kids on the rug",
      tone: "sage",
    },
    {
      n: "06",
      h: "It ends, and life continues.",
      p: "We don't end with a benediction and a parking lot rush. People linger, do dishes, keep talking. Some of the best conversations of the night happen after we 'finish.'",
      img: "Front porch, evening",
      tone: "blue",
    },
  ];
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="What to expect"
        title="No surprises. Just <em>dinner</em>, scripture, and people who want to know you."
        lede="Walking into a stranger's home for the first time is brave. Here's exactly what happens, in order, so you can show up knowing what's coming."
      />

      <section>
        <div className="container">
          <div className="steps">
            {steps.map((s, i) => (
              <div className="step" key={i}>
                <div className="step-num">{s.n}</div>
                <div>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
                <div className="step-img">
                  <Placeholder label={s.img} tone={s.tone} style={{ width: "100%", height: "100%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream-deep)" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Common worries</div>
              <h2>Things you might be <span className="circled">nervous</span> about.</h2>
            </div>
            <p>
              We get it. Walking into a stranger's home is harder than walking
              into a building. Here are the honest answers.
            </p>
          </div>

          <FAQ items={[
            { q: "Will I be embarrassed or singled out?", a: "No. We won't make you stand up, introduce yourself dramatically, or 'share something.' You can be as quiet or as talkative as you want." },
            { q: "Do I need to bring anything?", a: "No. If you text ahead, we might suggest a side dish or a drink — but you can show up empty-handed and absolutely no one will care." },
            { q: "What should I wear?", a: "Whatever you'd wear to a friend's house for dinner. Jeans, sweatpants, scrubs from work — all welcome." },
            { q: "What if I don't believe yet?", a: "Then you are exactly the kind of person we want to share a table with. Honest questions are welcome. We won't pressure you." },
            { q: "What if my kids are loud?", a: "Ours are too. House church is the most kid-resilient gathering you can imagine." },
            { q: "How long does it last?", a: "Usually about two hours, give or take. People often stay longer just to talk." },
          ]} />
        </div>
      </section>

      <FinalCTA navigate={navigate} />
    </div>
  );
}

/* ─── Gatherings ─── */
function GatheringsPage({ navigate }) {
  const items = [
    {
      name: "The Lawrenceville Home",
      meta: "Sundays · 5:00pm",
      hosts: "The Park family",
      address: "Lawrenceville · near Sugarloaf",
      size: "15 – 22 people, multigenerational",
      blurb: "The original gathering of the network. Big family vibe, a long table that keeps extending, kids everywhere, lots of food.",
      good: "Families with kids · people who like a fuller house",
      photo: "Front porch · Lawrenceville",
      tone: "clay",
    },
    {
      name: "The Snellville Home",
      meta: "Tuesdays · 6:30pm",
      hosts: "The Acosta family",
      address: "Snellville · off Main St",
      size: "10 – 14 people, mixed ages",
      blurb: "A smaller, quieter gathering. Conversations go deeper, questions linger longer, and the dog will absolutely love you.",
      good: "First-time visitors · big questions · introverts",
      photo: "Living room · Snellville",
      tone: "blue",
    },
    {
      name: "The Duluth Home",
      meta: "Wednesdays · 7:00pm",
      hosts: "The Williams + Nguyen families",
      address: "Duluth · near Pleasant Hill",
      size: "12 – 18 people, young + new",
      blurb: "Two families co-host. Lots of young adults, young families, recent arrivals to Atlanta. High energy, easy to slip into.",
      good: "Young adults · singles · people new to town",
      photo: "Kitchen · Duluth",
      tone: "sage",
    },
  ];
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Gatherings"
        title="Three open homes <em>across Gwinnett</em>. Come to whichever feels right."
        lede="Each gathering is a real family hosting in a real home. They're shaped differently — different sizes, different rhythms — but they share the same posture: open table, open Bible, open door."
      />

      <section>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {items.map((g, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 1.4fr",
                gap: 48,
                background: "var(--paper)",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid color-mix(in oklch, var(--ink) 8%, transparent)",
              }}>
                <div style={{ aspectRatio: "4/3", position: "relative" }}>
                  <Placeholder label={g.photo} tone={g.tone} style={{ width: "100%", height: "100%" }} />
                  <div style={{
                    position: "absolute",
                    top: 18, left: 18,
                    background: "var(--paper)",
                    padding: "6px 12px",
                    borderRadius: 999,
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                  }}>
                    {g.meta}
                  </div>
                </div>
                <div style={{ padding: "36px 36px 36px 0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h3 style={{ fontSize: 32, marginBottom: 8 }}>{g.name}</h3>
                  <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--blue)", marginBottom: 20, fontSize: 17 }}>
                    Hosted by {g.hosts}
                  </p>
                  <p style={{ color: "var(--ink-soft)", fontSize: 16, marginBottom: 24, lineHeight: 1.6 }}>{g.blurb}</p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 28 }}>
                    {[
                      ["Where", g.address],
                      ["Size", g.size],
                      ["Good fit for", g.good],
                      ["Bring", "Yourself · and a dish if you'd like"],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <div style={{
                          fontFamily: "var(--mono)",
                          fontSize: 10,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--clay)",
                          marginBottom: 4,
                        }}>{k}</div>
                        <div style={{ fontSize: 15, color: "var(--ink)" }}>{v}</div>
                      </div>
                    ))}
                  </div>

                  <a className="btn btn-primary btn-arrow"
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); navigate("contact"); }}
                    style={{ alignSelf: "flex-start" }}>
                    Tell them you're coming
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream-deep)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <div className="eyebrow">Don't see one near you?</div>
              <h2 style={{ fontSize: 44, marginTop: 14, lineHeight: 1.05 }}>
                Help us <span className="handwritten" style={{ color: "var(--blue)" }}>open a home</span> in your neighborhood.
              </h2>
              <p style={{ color: "var(--ink-soft)", fontSize: 17, marginTop: 22, marginBottom: 28, lineHeight: 1.65, maxWidth: "50ch" }}>
                The network grows when a new family decides to open their door
                a few hours a week. If you're somewhere we're not yet, tell
                us. We'll come visit you, bring food, and pray about what's
                next together.
              </p>
              <a className="btn btn-primary btn-arrow"
                href="#contact"
                onClick={(e) => { e.preventDefault(); navigate("contact"); }}>
                Start that conversation
              </a>
            </div>
            <div style={{ aspectRatio: "5/4", borderRadius: 18, overflow: "hidden", transform: "rotate(1deg)" }}>
              <Placeholder label="Map · Gwinnett County" tone="sage" style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Gospel ─── */
function GospelPage({ navigate }) {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="The gospel according to Jesus"
        title="The good news — <em>in Jesus' own words</em>."
        lede="The gospel isn't a sales pitch about an afterlife. It's the announcement Jesus himself made: that the Kingdom of God has arrived, that God is reconciling all things to himself, and that we are invited to follow."
      />

      <section>
        <div className="container">
          <div className="scripture-block" style={{ background: "var(--blue)", color: "var(--paper)", borderLeftColor: "var(--amber)" }}>
            <div className="ref" style={{ color: "color-mix(in oklch, var(--amber) 80%, var(--paper))" }}>Mark 1:14–15</div>
            <blockquote style={{ color: "var(--paper)" }}>
              “After John was put in prison, Jesus went into Galilee, proclaiming
              the good news of God. ‘The time has come,' he said. ‘The Kingdom
              of God has come near. Repent and believe the good news!'”
            </blockquote>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">The shape of it</div>
              <h2>Four movements of the <span className="handwritten" style={{ color: "var(--blue)" }}>real</span> gospel.</h2>
            </div>
            <p>
              We didn't make this up. It is the gospel Jesus actually preached
              — the one the apostles continued to preach in Acts.
            </p>
          </div>

          <div className="gospel-flow">
            {[
              { n: "01 · Creation", h: "Made for relationship.", p: "God created humanity in his image — to know him, love him, and steward his creation in family." },
              { n: "02 · Rupture", h: "Something broke.", p: "We chose to define good and evil ourselves. The relationship fractured, and creation cracked with it." },
              { n: "03 · Jesus", h: "The Kingdom arrives.", p: "Jesus comes announcing that God himself has come to put the world back together — and he does it through his life, death, and resurrection." },
              { n: "04 · Family", h: "We are invited in.", p: "Following Jesus means being grafted into a new family, learning his way, and joining what God is doing in the world." },
            ].map((s, i) => (
              <div className="gospel-step" key={i}>
                <div className="n">{s.n}</div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>

          <div className="two-col" style={{ marginTop: 60 }}>
            <div>
              <div className="eyebrow">In our own words</div>
              <h3 style={{ marginTop: 14 }}>The good news, plainly.</h3>
            </div>
            <div>
              <p>
                God made you on purpose. He made you to know him, love him,
                and live as part of a real family that bears his image in the
                world. That is the life you were created for, and it is the
                life every human being longs for, whether they can name it or
                not.
              </p>
              <p>
                Somewhere along the way, all of us walked away from that life.
                We tried to be our own gods, write our own rules, and define
                good and evil for ourselves. Look around — it didn't go well.
                Not for us, not for the people we love, not for the world.
              </p>
              <p>
                But God did not abandon his world. He came to us, in Jesus,
                fully God and fully human. Jesus lived the life we couldn't,
                died the death we deserved, and rose again on the third day —
                not as a metaphor, but as a real, embodied human, the first
                of a new humanity.
              </p>
              <p>
                And he says to anyone who will hear: <em>come follow me</em>.
                Lay down the throne. Lay down the shame. Lay down trying to
                hold it all together. Come and learn how to be human again —
                inside the family of God, learning the way of Jesus.
              </p>
              <p>
                That is the gospel. Not “go to heaven when you die,” though it
                includes that. It's bigger: <em>the Kingdom of God has come
                near, and you are invited in.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream-deep)" }}>
        <div className="container">
          <div style={{ maxWidth: "70ch", margin: "0 auto", textAlign: "center" }}>
            <div className="eyebrow">If this is stirring something in you</div>
            <h2 style={{ fontSize: 48, marginTop: 14, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Don't sort it out alone. <span className="handwritten" style={{ color: "var(--blue)" }}>Come to the table.</span>
            </h2>
            <p style={{ marginTop: 24, fontSize: 18, color: "var(--ink-soft)", lineHeight: 1.65 }}>
              The most important questions of your life are not meant to be
              answered on a phone screen at midnight. They are meant to be
              answered around a table, with people who love Jesus and love
              you, over time, with the Bible open between you.
            </p>
            <div style={{ marginTop: 36, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a className="btn btn-primary btn-arrow"
                href="#contact"
                onClick={(e) => { e.preventDefault(); navigate("contact"); }}>
                Talk to someone
              </a>
              <a className="btn btn-secondary"
                href="#gatherings"
                onClick={(e) => { e.preventDefault(); navigate("gatherings"); }}>
                Come to a gathering
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Contact ─── */
function ContactPage({ navigate }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "", email: "", gathering: "Any", message: "",
  });
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Contact"
        title="Tell us you're <em>coming</em>. We'll save you a seat."
        lede="No long form. No marketing list. Just say hi, and someone from one of the homes will text or email you back — usually within a day."
      />

      <section>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Say hi.</h3>
              <p>
                The more you tell us, the better we can welcome you. But the
                only required field is "how do we reach you."
              </p>
              {submitted ? (
                <div style={{
                  background: "var(--sage)",
                  color: "var(--paper)",
                  borderRadius: 14,
                  padding: 28,
                }}>
                  <div className="eyebrow" style={{ color: "color-mix(in oklch, var(--amber) 70%, var(--paper))", marginBottom: 8 }}>Got it</div>
                  <h3 style={{ fontFamily: "var(--serif)", color: "var(--paper)", marginBottom: 10 }}>
                    Thank you, {form.name || "friend"}.
                  </h3>
                  <p style={{ color: "color-mix(in oklch, var(--paper) 88%, var(--sage))" }}>
                    Someone from the Acts 2:42 family will reach out within a
                    day. In the meantime — there's already a seat at the
                    table with your name on it.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input id="name" type="text" required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email or phone</label>
                    <input id="email" type="text" required placeholder="you@example.com or (770) 555-0123"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="field">
                    <label htmlFor="gathering">Which gathering interests you?</label>
                    <select id="gathering"
                      value={form.gathering}
                      onChange={(e) => setForm({ ...form, gathering: e.target.value })}>
                      <option>Any — whichever is closest</option>
                      <option>Lawrenceville · Sundays 5:00pm</option>
                      <option>Snellville · Tuesdays 6:30pm</option>
                      <option>Duluth · Wednesdays 7:00pm</option>
                      <option>Not sure yet — I want to talk first</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="msg">Anything you want us to know? (optional)</label>
                    <textarea id="msg" placeholder="Coming with kids? Have a question? Need a ride? Just say so."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button className="btn btn-primary btn-arrow" type="submit" style={{ marginTop: 8 }}>
                    Send it
                  </button>
                </form>
              )}
            </div>

            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Or — the old-fashioned way</div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 32, marginBottom: 24, lineHeight: 1.15 }}>
                We're real people. <span className="handwritten" style={{ color: "var(--blue)" }}>Reach out however.</span>
              </h3>

              <div className="contact-card">
                <div className="contact-info-row">
                  <div className="ic">✉</div>
                  <div>
                    <strong>Email</strong>
                    <span>hello@acts242now.org<br />Usually a reply within 24 hours.</span>
                  </div>
                </div>
                <div className="contact-info-row">
                  <div className="ic">☎</div>
                  <div>
                    <strong>Text</strong>
                    <span>(770) 555-0142<br />Text us. Honestly easier than email.</span>
                  </div>
                </div>
                <div className="contact-info-row">
                  <div className="ic">⌂</div>
                  <div>
                    <strong>Where we are</strong>
                    <span>Homes throughout Gwinnett County, GA<br />Lawrenceville · Snellville · Duluth</span>
                  </div>
                </div>
                <div className="contact-info-row">
                  <div className="ic">☕</div>
                  <div>
                    <strong>Coffee first?</strong>
                    <span>If a gathering feels like a lot, we'll meet you for coffee instead. Just ask.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, {
  AboutPage,
  WhatIsHCPage,
  ExpectPage,
  GatheringsPage,
  GospelPage,
  ContactPage,
  FinalCTA,
});
