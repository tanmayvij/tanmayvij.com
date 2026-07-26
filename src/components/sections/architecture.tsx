import { SITE } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

/** §05 — How I think about architecture: opinionated principles. */
export function Architecture() {
  return (
    <section className="section section-accentbg" id="principles">
      <div className="container">
        <Reveal>
          <SectionHeader
            index="05"
            kicker="How I think"
            title="A few things I believe about architecture."
            lead="The clearest signal of seniority is knowing when not to build something."
          />
        </Reveal>
        <div className="principles">
          {SITE.principles.map((pr, i) => (
            <Reveal className="principle" key={pr.n} delay={i * 70}>
              <span className="principle-n">{pr.n}</span>
              <p className="principle-text">{pr.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
