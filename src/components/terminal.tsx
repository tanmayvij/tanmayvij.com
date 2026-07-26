"use client";

import { useEffect, useState, type ReactNode } from "react";
import { SITE } from "@/data/site";

type Variant = "response" | "command" | "bare";

/**
 * Types out `text`, but SSR-safe: the initial (server + first client) render
 * shows the FULL text so the content is present in the HTML for crawlers and
 * no-JS users. The typing animation is a post-mount enhancement.
 */
function useTyping(text: string, speed = 46): [string, boolean] {
  const [out, setOut] = useState(text);
  const [done, setDone] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    let i = 0;
    setOut("");
    setDone(false);
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return [out, done];
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    try {
      navigator.clipboard.writeText(text);
    } catch {
      /* no-op */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <button className="term-copy" onClick={copy} aria-label="Copy command">
      {copied ? "copied ✓" : "copy"}
    </button>
  );
}

function TerminalChrome({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="term">
      <div className="term-bar">
        <span className="term-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="term-title">{title}</span>
        <span className="term-spacer" aria-hidden="true" />
      </div>
      <div className="term-body">{children}</div>
    </div>
  );
}

export function Terminal({ variant = "command" }: { variant?: Variant }) {
  const T = SITE.terminal;
  const [cmd, cmdDone] = useTyping(T.command);
  const showResponse = variant === "response" && cmdDone;

  // Response lines: full on SSR/first render, then reveal progressively once
  // the command finishes typing (client enhancement).
  const [lineCount, setLineCount] = useState(T.response.length);
  useEffect(() => {
    if (variant !== "response") return;
    if (!cmdDone) {
      setLineCount(0);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i++;
      setLineCount(i);
      if (i >= T.response.length) clearInterval(id);
    }, 70);
    return () => clearInterval(id);
  }, [variant, cmdDone, T.response.length]);

  if (variant === "bare") {
    return (
      <div className="term-bare">
        <span className="term-prompt">$</span>
        <code className="term-cmd">
          {cmd}
          {!cmdDone && <span className="term-cursor" aria-hidden="true" />}
        </code>
        <CopyButton text={T.command} />
      </div>
    );
  }

  return (
    <TerminalChrome title={SITE.meta.domain}>
      <div className="term-line">
        <span className="term-prompt">$</span>
        <code className="term-cmd">
          {cmd}
          {(!cmdDone || variant === "command") && (
            <span className="term-cursor" aria-hidden="true" />
          )}
        </code>
        <CopyButton text={T.command} />
      </div>

      {variant === "command" && <div className="term-comment">{T.hint}</div>}

      {variant === "response" && (
        <div className="term-out" aria-live="polite">
          {T.response.slice(0, lineCount).map((ln, i) => (
            <div
              key={i}
              className={"term-out-ln" + (ln.startsWith("→") ? " is-link" : "")}
            >
              {ln === "" ? " " : ln}
            </div>
          ))}
          {showResponse && lineCount < T.response.length && (
            <span className="term-cursor block" aria-hidden="true" />
          )}
        </div>
      )}
    </TerminalChrome>
  );
}
