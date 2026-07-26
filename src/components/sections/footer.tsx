import { SITE } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { CTAButtons } from "@/components/cta-buttons";

/** Footer / Contact — CTAs, all socials, signature line. */
export function Footer() {
  const M = SITE.meta;
  const year = new Date().getFullYear();
  return (
    <footer className="footer" id="contact" data-screen-label="Contact">
      <div className="container footer-inner">
        <Reveal className="footer-top">
          <div className="footer-cta">
            <div className="eyebrow">Let&apos;s talk</div>
            <h2 className="footer-h">Always up for a quick chat</h2>
            <CTAButtons size="lg" showTertiary={false} />
          </div>
        </Reveal>

        <div className="footer-links">
          {SITE.socials.map((s) => {
            const external = !s.href.startsWith("mailto:");
            return (
              <a
                className="social"
                key={s.label}
                href={s.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="social-label">{s.label}</span>
                <span className="social-handle">{s.handle}</span>
                <span className="social-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            );
          })}
        </div>

        <div className="footer-base">
          <span className="footer-sig">
            <span className="footer-prompt">$</span> {M.domain}
          </span>
          <span className="footer-fine">
            © {year} {M.name} ·{" "}
            <code className="footer-commit">git commit -m &quot;built with love&quot;</code>
          </span>
        </div>
      </div>
    </footer>
  );
}
