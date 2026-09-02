import { CONTACT_LINKS } from "../content"

export default function SiteFooter() {
  return (
    <footer className="max-w-[1320px] mx-auto px-6 md:px-10 pt-14 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="font-display font-light text-[clamp(32px,5vw,52px)] leading-[1.0] tracking-[-0.02em] text-foreground mb-4">
            Let's build
            <br />
            something
            <br />
            <em className="text-accent">worth making.</em>
          </p>
          <p className="text-[13px] font-light text-muted-foreground mt-6">
            Open to full-time roles, research collaborations,
            <br className="hidden md:block" /> and interesting conversations.
          </p>
        </div>
        <div className="md:col-span-7 md:flex md:flex-col md:justify-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-5 border-t border-border hover:border-accent transition-colors duration-200 group block"
              >
                <p className="font-mono-label text-[9px] tracking-[0.15em] uppercase text-muted-foreground mb-1">
                  {link.label}
                </p>
                <p className="font-display font-light text-[15px] text-secondary-foreground group-hover:text-foreground transition-colors duration-200">
                  {link.value} →
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-14 pt-5 rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-mono-label text-[9px] tracking-[0.15em] uppercase text-subtle">
          © 2026 Umair Akram — Rawalpindi, Pakistan
        </p>
        <span className="font-mono-label text-[9px] tracking-[0.15em] uppercase text-subtle">
          Mechatronics × Systems × Engineering
        </span>
      </div>
    </footer>
  )
}
