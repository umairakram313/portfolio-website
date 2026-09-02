import SectionDivider from "../SectionDivider"
import HeroPortrait from "./HeroPortrait"

export default function Hero() {
  return (
    <section className="pt-[120px] pb-0 max-w-[1320px] mx-auto px-6 md:px-10 overflow-x-clip">
      <div className="anim-fade-in flex items-center justify-between mb-12 md:mb-14">
        <div className="flex items-center gap-4">
          <span className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
            Est. 2001
          </span>
          <span className="w-12 h-px bg-border inline-block" />
          <span className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
            Rawalpindi, PK
          </span>
        </div>
        <span className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
          v1.0 — 2026
        </span>
      </div>

      <div className="hero-composition">
        <div className="hero-title anim-fade-up delay-100">
          <h1 className="font-display font-light text-[clamp(52px,8vw,108px)] leading-[0.92] tracking-[-0.02em] text-foreground">
            Umair
            <br />
            <em className="text-accent not-italic">Akram.</em>
          </h1>
        </div>

        <div className="hero-art anim-fade-in delay-300">
          <HeroPortrait />
        </div>

        <div className="hero-copy">
          <div className="anim-fade-up delay-300 max-w-[520px]">
            <p className="font-display font-light italic text-[19px] md:text-[22px] leading-[1.4] text-secondary-foreground">
              Mechatronics engineer. Systems thinker. Maker of things that move,
              sense, and decide.
            </p>
          </div>
          <div className="anim-fade-up delay-400 mt-5 max-w-[460px]">
            <p className="text-[15px] leading-[1.7] text-muted-foreground font-light">
              Graduate of NUST, Islamabad — where I spent four years at the
              intersection of mechanical design, embedded systems, and machine
              intelligence. Now looking for problems that matter.
            </p>
          </div>
          <div className="anim-fade-up delay-500 mt-8 flex items-center gap-6">
            <a
              href="#projects"
              className="font-mono-label text-[11px] tracking-[0.12em] uppercase text-foreground border-b border-foreground pb-px hover:text-accent hover:border-accent transition-colors duration-200"
            >
              Selected Work ↓
            </a>
            <a
              href="mailto:umair@example.com"
              className="font-mono-label text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Get in Touch →
            </a>
          </div>
        </div>

        <div className="hero-credentials anim-fade-in delay-600">
          <div className="rule-accent w-8 ml-auto hidden md:block mb-4" />
          <p className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
            Degree
          </p>
          <p className="font-display text-[13px] font-light text-secondary-foreground">
            BE Mechatronics
          </p>
          <p className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-muted-foreground pt-2">
            Institution
          </p>
          <p className="font-display text-[13px] font-light text-secondary-foreground">
            NUST, Islamabad
          </p>
          <p className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-muted-foreground pt-2">
            Class of
          </p>
          <p className="font-display text-[13px] font-light text-secondary-foreground">
            2025
          </p>
        </div>
      </div>

      <SectionDivider
        index="001"
        label="Work"
        className="anim-fade-in delay-700 mt-16 md:mt-20"
      />
    </section>
  )
}
