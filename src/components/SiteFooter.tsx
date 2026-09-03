import { CONTACT_LINKS } from "../content"

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="contact-closing"
      aria-labelledby="contact-heading"
    >
      <div className="contact-closing-main">
        <div className="contact-invitation">
          <h2 id="contact-heading" className="contact-statement">
            Let’s build
            <br />
            something
            <br />
            <em>worth making.</em>
          </h2>
          <p className="contact-intro">
            Open to thoughtful collaborations, ambitious builds, and interesting
            conversations.
          </p>
        </div>

        <div className="contact-destinations" aria-label="Contact links">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="contact-destination"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              <span className="contact-destination-label">{link.label}</span>
              <span className="contact-destination-value">
                {link.value}
                <span aria-hidden="true"> ↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="contact-colophon">
        <span className="contact-archive-mark" aria-hidden="true">
          <span className="contact-archive-registration" />
          <span className="contact-archive-name">Umair Akram</span>
          <span className="contact-archive-index">
            UA
            <br />
            01
          </span>
        </span>

        <p>
          © 2026 Umair Akram <span aria-hidden="true">—</span> Islamabad,
          Pakistan
        </p>
        <span>
          Mechatronics <span aria-hidden="true">×</span> Systems{" "}
          <span aria-hidden="true">×</span> Engineering
        </span>
      </div>
    </footer>
  )
}
