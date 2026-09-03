import { useEffect, useState } from "react"
import { NAV_LINKS } from "../content"

type Theme = "light" | "dark"

const HEADER_LINKS = [
  ...NAV_LINKS.map((link) =>
    link.label === "About" ? { ...link, href: "#" } : link,
  ),
  { label: "Contact", href: "#contact" },
]

const SECTION_IDS = ["projects", "thoughts", "experience", "contact"] as const

function getCurrentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark"
}

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(getCurrentTheme)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState("#")
  const nextTheme = theme === "dark" ? "light" : "dark"

  useEffect(() => {
    let frame = 0

    function updateHeaderState() {
      frame = 0
      setIsScrolled(window.scrollY > 32)

      const readingLine = window.scrollY + window.innerHeight * 0.3
      let currentHref = "#"

      for (const id of SECTION_IDS) {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= readingLine) {
          currentHref = `#${id}`
        }
      }

      setActiveHref(currentHref)
    }

    function handleScroll() {
      if (!frame) frame = window.requestAnimationFrame(updateHeaderState)
    }

    updateHeaderState()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

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

  function closeMobileMenu() {
    setMobileMenuOpen(false)
  }

  const themeToggle = (
    <button
      type="button"
      className="theme-toggle site-header-theme"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      <span className="theme-toggle-mark" aria-hidden="true" />
      {theme}
    </button>
  )

  return (
    <header
      className={`site-header${isScrolled ? " is-scrolled" : ""}${
        mobileMenuOpen ? " menu-open" : ""
      }`}
    >
      <div className="site-header-shell">
        <nav className="site-header-nav" aria-label="Primary navigation">
          <a href="#" className="site-mark" aria-label="Umair Akram — home">
            <span className="site-mark-registration" aria-hidden="true" />
            <span className="site-mark-name">Umair Akram</span>
          </a>

          <div className="site-header-desktop-nav">
            {HEADER_LINKS.map((link) => {
              const isActive = activeHref === link.href

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav-link${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "location" : undefined}
                >
                  {link.label}
                </a>
              )
            })}
            {themeToggle}
          </div>

          <div className="site-header-mobile-actions">
            {themeToggle}
            <button
              type="button"
              className="site-menu-trigger"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div id="mobile-navigation" className="site-mobile-navigation">
            {HEADER_LINKS.map((link) => {
              const isActive = activeHref === link.href

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`site-mobile-link${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true">{isActive ? "●" : "—"}</span>
                </a>
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}
