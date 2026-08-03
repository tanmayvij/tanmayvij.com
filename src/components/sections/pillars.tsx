import { SITE } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

/** §01 — What I do: three pillars. */
export function Pillars() {
  return (
    <section className="section" id="approach">
      <Reveal>
        <SectionHeader
          index="01"
          kicker={SITE.pillars.kicker}
          title={SITE.pillars.title}
          lead={SITE.pillars.lead}
        />
      </Reveal>
      <div className="pillars">
        {SITE.pillars.cards.map((p, i) => (
          <Reveal className="pillar" key={p.tag} delay={i * 90} as="article">
            <div className="pillar-tag">{p.tag}</div>
            <h3 className="pillar-title">{p.title}</h3>
            <p className="pillar-body">{p.body}</p>
            <ul className="pillar-keys">
              {p.keywords.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
