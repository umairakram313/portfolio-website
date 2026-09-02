import { EXPERIENCES } from "../../content"
import SectionDivider from "../SectionDivider"

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-[1320px] mx-auto px-6 md:px-10 pt-14 pb-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <h2 className="font-display font-light text-[28px] md:text-[36px] tracking-[-0.01em] text-foreground">
            Experience
          </h2>
          <a
            href="#"
            className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors block mt-8"
          >
            Full Résumé ↗
          </a>
        </div>
        <div className="md:col-span-9">
          {EXPERIENCES.map((experience) => (
            <div
              key={`${experience.role}-${experience.period}`}
              className="py-6 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6"
            >
              <div className="md:col-span-2">
                <p className="font-display font-light text-[17px] text-foreground mb-0.5">
                  {experience.role}
                </p>
                <p className="font-mono-label text-[10px] tracking-[0.1em] uppercase text-accent mb-2">
                  {experience.org}
                </p>
                <p className="text-[13px] text-muted-foreground font-light leading-[1.6]">
                  {experience.note}
                </p>
              </div>
              <div className="md:text-right">
                <span className="font-mono-label text-[10px] tracking-[0.1em] uppercase text-subtle">
                  {experience.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionDivider index="004" label="Currently" />
    </section>
  )
}
