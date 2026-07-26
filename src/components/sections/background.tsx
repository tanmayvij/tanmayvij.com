import Image from "next/image";
import { SITE } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

function CertBadge() {
  const c = SITE.background.cert;
  return (
    <div className="cert">
      <Image
        className="cert-badge-img"
        src={c.badge}
        alt={`${c.issuer} ${c.title} certification badge`}
        width={92}
        height={92}
      />
      <div className="cert-meta">
        <div className="cert-name">{c.name}</div>
        <div className="cert-title">{c.title}</div>
        <div className="cert-issuer">{c.issuer}</div>
      </div>
    </div>
  );
}

/** §03 — Professional background + certifications. */
export function Background() {
  const B = SITE.background;
  return (
    <section className="section" id="background">
      <Reveal>
        <SectionHeader
          index="03"
          kicker="Background"
          title="The through-line is architecture."
        />
      </Reveal>
      <div className="bg-grid">
        <Reveal className="bg-story">
          {B.story.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="bg-years">
            <span className="bg-years-num">{B.years}</span>
            <span className="bg-years-label">building production systems</span>
          </div>
        </Reveal>
        <Reveal className="bg-cert" delay={120}>
          <div className="bg-cert-label">Certifications &amp; awards</div>
          <CertBadge />
          <ul className="cert-courses">
            {B.courses.map((c, i) => (
              <li key={i} className="cert-course">
                <span className="cert-course-title">{c.title}</span>
                <span className="cert-course-issuer">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
