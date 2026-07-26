import { SITE, LINKS } from "@/data/site";

interface CTAButtonsProps {
  size?: "md" | "lg";
  showTertiary?: boolean;
}

export function CTAButtons({ size = "md", showTertiary = true }: CTAButtonsProps) {
  return (
    <div className={`cta-row cta-${size}`}>
      <a
        className="btn btn-primary"
        href={LINKS.resume}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View résumé"
      >
        <span className="btn-glyph" aria-hidden="true">
          ↗
        </span>
        Résumé
      </a>
      <a
        className="btn btn-ghost"
        href={`mailto:${SITE.meta.email}`}
        aria-label="Email Tanmay"
      >
        <span className="btn-glyph" aria-hidden="true">
          →
        </span>
        Email
      </a>
      {showTertiary && (
        <a
          className="btn btn-text"
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on LinkedIn"
        >
          Connect on LinkedIn
        </a>
      )}
    </div>
  );
}
