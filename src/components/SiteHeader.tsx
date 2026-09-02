import { useState } from "react"
import { NAV_LINKS } from "../content"

type Theme = "light" | "dark"

function getCurrentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark"
}

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(getCurrentTheme)
  const nextTheme = theme === "dark" ? "light" : "dark"

  function toggleTheme() {
    document.documentElement.dataset.theme = nextTheme
    document.documentElement.style.colorScheme = nextTheme
    try {
      localStorage.setItem("theme", nextTheme)
    } catch {
      // The theme still applies for this session when storage is unavailable.
    }
    setTheme(nextTheme)
  }

  const themeToggle = (
    <button
      type="button"
      className="theme-toggle font-mono-label text-[10px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      <span className="theme-toggle-mark" aria-hidden="true" />
      {theme}
    </button>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-translucent backdrop-blur-sm">
      <div className="rule" />
      <nav
        className="max-w-[1320px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        <a
          href="#"
          className="site-mark text-foreground hover:text-accent transition-colors duration-200"
          aria-label="Umair Akram — home"
        >
          <span className="site-mark-registration" aria-hidden="true" />
          <span className="font-display site-mark-name">Umair Akram</span>
          <span className="site-mark-index font-mono-label" aria-hidden="true">
            UA
            <br />
            01
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link font-mono-label text-[11px] tracking-[0.12em] uppercase text-muted-foreground"
            >
              {link.label}
            </a>
          ))}
          {themeToggle}
          <a
            href="#"
            className="font-mono-label text-[11px] tracking-[0.12em] uppercase border border-border px-4 py-1.5 text-secondary-foreground hover:border-accent hover:text-foreground transition-all duration-200"
          >
            Résumé ↗
          </a>
        </div>

        <div className="flex items-center gap-5 md:hidden">
          {themeToggle}
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="flex flex-col gap-[5px] w-5" aria-hidden="true">
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>
      <div className="rule" />

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-background border-b border-border"
        >
          <div className="max-w-[1320px] mx-auto px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono-label text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="font-mono-label text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Résumé ↗
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
