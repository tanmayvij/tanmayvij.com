"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/** Dark/light toggle matching the design's nav control (☾ / ☀). Dark-first. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Before mount, render a stable dark-first glyph to avoid hydration mismatch.
  const isDark = mounted ? resolvedTheme !== "light" : true;

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? "☾" : "☀"}
    </button>
  );
}
