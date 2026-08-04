import Image from "next/image";
import { SITE } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { CTAButtons } from "@/components/cta-buttons";
import { Terminal } from "@/components/terminal";

/** Hero — split layout: text + CTAs beside a photo, terminal full-width below. */
export function Hero() {
  const M = SITE.meta;
  return (
    <header className="hero layout-split" id="top" data-screen-label="Hero">
      <div className="hero-grid">
        <Reveal className="hero-text">
          <div className="eyebrow">{M.eyebrow}</div>
          <h1 className="hero-name">{M.name}</h1>
          <div className="hero-role">{M.role}</div>
          <p className="hero-tagline">{M.tagline}</p>
          <p className="hero-positioning">{M.positioning}</p>
          <CTAButtons />
        </Reveal>
        <Reveal className="hero-photo" delay={100}>
          <div className="photo photo-portrait">
            <Image
              src="/tanmayvij.png"
              alt={M.name}
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Reveal>
      </div>
      <Reveal className="hero-terminal" delay={160}>
        <Terminal variant="command" />
      </Reveal>
    </header>
  );
}
