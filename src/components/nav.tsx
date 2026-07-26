"use client";

import { SITE, LINKS } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="container nav-inner">
        <a className="nav-brand" href="#top">
          <span className="nav-prompt">$</span>
          <span className="nav-domain">{SITE.meta.domain}</span>
          <span className="nav-cursor" aria-hidden="true" />
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#principles">Architecture</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <a
            className="nav-resume"
            href={LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
          </a>
          <a className="nav-email" href={`mailto:${SITE.meta.email}`}>
            Email
          </a>
        </div>
      </div>
    </nav>
  );
}
