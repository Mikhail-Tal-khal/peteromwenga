"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-hairline bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="group flex items-baseline gap-3">
          <span className="font-display text-lg font-semibold tracking-tight">
            P. Omwenga
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-legend text-moss sm:inline">
            Maths / Geography
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-legend text-pine transition-colors hover:text-ochre"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${profile.phonePrimary}`}
            className="hidden rounded-full bg-pine px-4 py-2 font-mono text-[11px] uppercase tracking-legend text-chalk transition-colors hover:bg-ink sm:inline-block"
          >
            Call {profile.phonePrimary}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-ink transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-ink transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-paper/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-page flex-col px-6 py-2 sm:px-10">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline/60 py-3 font-mono text-[11px] uppercase tracking-legend text-pine last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
