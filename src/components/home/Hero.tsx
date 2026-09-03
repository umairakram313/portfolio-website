import SectionDivider from "../SectionDivider"
import HeroPortrait from "./HeroPortrait"

export default function Hero() {
  return (
    <section
      id="about"
      className="pt-[120px] pb-0 max-w-[1320px] mx-auto px-6 md:px-10 overflow-x-clip"
    >
      <div className="anim-fade-in flex items-center justify-between mb-12 md:mb-14">
        <span className="hero-factual-meta font-mono-label text-[10px] tracking-[0.15em] uppercase">
          Islamabad, PK
        </span>
        <span className="hero-factual-meta font-mono-label text-[10px] tracking-[0.15em] uppercase">
          2026
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
              Mechatronics engineer. Systems builder. Curious across technology,
              ideas, and what they can become.
            </p>
          </div>
          <div className="anim-fade-up delay-400 mt-5 max-w-[460px]">
            <p className="hero-supporting-copy text-[15px] leading-[1.7] font-light">
              Graduate of NUST&apos;s College of E&amp;ME, working across
              engineering, software and AI while exploring systems, culture, and
              the ideas that connect them.
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
              href="#contact"
              className="hero-secondary-action font-mono-label text-[11px] tracking-[0.12em] uppercase hover:text-foreground transition-colors duration-200"
            >
              Get in Touch →
            </a>
          </div>
        </div>

        <div className="hero-credentials anim-fade-in delay-600">
          <div className="rule-accent w-8 ml-auto hidden md:block mb-4" />
          <p className="hero-factual-meta font-mono-label text-[10px] tracking-[0.15em] uppercase">
            Discipline
          </p>
          <p className="font-display text-[13px] font-light text-secondary-foreground">
            BE MECHATRONICS
          </p>
          <p className="hero-factual-meta font-mono-label text-[10px] tracking-[0.15em] uppercase pt-2">
            Education
          </p>
          <p className="font-display text-[13px] font-light text-secondary-foreground">
            NUST / COLLEGE OF E&amp;ME
          </p>
          <p className="hero-factual-meta font-mono-label text-[10px] tracking-[0.15em] uppercase pt-2">
            Graduated
          </p>
          <p className="font-display text-[13px] font-light text-secondary-foreground">
            2025
          </p>
        </div>
      </div>

      <SectionDivider
        index="001"
        label="PROJECTS"
        className="anim-fade-in delay-700 mt-16 md:mt-20"
      />
    </section>
  )
}
