"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

/**
 * Fade/slide content in on scroll — as a progressive enhancement.
 *
 * SEO / no-JS: children render server-side and are visible by default. The
 * hidden→reveal animation is only armed once JS mounts (`is-armed`), and
 * elements already in the viewport on mount are shown immediately (no flash,
 * no above-the-fold animation). Honors prefers-reduced-motion.
 */
export function Reveal({ children, as, delay = 0, className }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setArmed(true);
      setInView(true);
      return;
    }

    // Already on screen at mount → show immediately, skip the entrance anim.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const alreadyVisible = rect.top < vh * 0.9 && rect.bottom > 0;

    setArmed(true);
    if (alreadyVisible) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", armed && "is-armed", inView && "in", className)}
      style={armed && !inView ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
