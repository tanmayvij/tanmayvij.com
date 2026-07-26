import { SITE } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

/** §04 — Skills matrix (grouped for the scan). */
export function Skills() {
  return (
    <section className="section" id="skills">
      <Reveal>
        <SectionHeader
          index="04"
          kicker="Skills"
          title="The toolkit."
          lead="Grouped for the scan."
        />
      </Reveal>
      <div className="skills">
        {SITE.skills.map((g, i) => (
          <Reveal className="skill-group" key={g.group} delay={i * 60}>
            <div className="skill-group-name">{g.group}</div>
            <ul className="skill-items">
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
