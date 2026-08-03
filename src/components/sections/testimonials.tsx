import { SITE } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

/** §06 — Testimonials / social proof. */
export function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <Reveal>
        <SectionHeader
          index="06"
          kicker="What matters most"
          title="What people who've worked with me say."
        />
      </Reveal>
      <div className="quotes">
        {SITE.testimonials.map((q, i) => (
          <Reveal className="quote" key={i} delay={i * 80} as="figure">
            <blockquote className="quote-text">{q.quote}</blockquote>
            <figcaption className="quote-by">
              <span className="quote-name">{q.name}</span>
              <span className="quote-role">
                {q.role} · {q.company}
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
