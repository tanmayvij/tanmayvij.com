import { SITE } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

/** §07 — Personal: who Tanmay is beyond the work. */
export function Personal() {
  const P = SITE.personal;
  return (
    <section className="section" id="personal">
      <Reveal>
        <SectionHeader index="07" kicker="Off the clock" title="Beyond the work." />
      </Reveal>
      <div className="personal-grid">
        <Reveal className="personal-text">
          {P.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="personal-invite">{P.invite}</p>
        </Reveal>
        {/* <Reveal className="personal-photo" delay={100}>
          <PhotoPlaceholder shape="square" label="candid photo (optional)" />
        </Reveal> */}
      </div>
    </section>
  );
}
