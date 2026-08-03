import { SITE } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

/** §02 — Proof of work: metric-led cards (Problem → What I did → Result). */
export function Proof() {
  return (
    <section className="section" id="work">
      <Reveal>
        <SectionHeader
          index="02"
          kicker={SITE.proof.kicker}
          title={SITE.proof.title}
          lead={SITE.proof.lead}
        />
      </Reveal>
      <div className="proof">
        {SITE.proof.cards.map((it, i) => (
          <Reveal className="proof-card" key={i} delay={i * 80} as="article">
            <div className="proof-metric">
              <span className="proof-num">{it.metric}</span>
              <span className="proof-metric-label">{it.label}</span>
            </div>
            <dl className="proof-rows">
              <div className="proof-row">
                <dt>Problem</dt>
                <dd>{it.problem}</dd>
              </div>
              <div className="proof-row">
                <dt>What I did</dt>
                <dd>{it.did}</dd>
              </div>
              <div className="proof-row">
                <dt>Result</dt>
                <dd>{it.result}</dd>
              </div>
            </dl>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
