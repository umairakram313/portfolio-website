import { EXPERIENCES } from "../../content"
import SectionDivider from "../SectionDivider"

export default function ExperienceSection() {
  const homepageExperiences = EXPERIENCES.filter(
    (experience) => experience.homepage,
  ).sort((a, b) => a.homepage!.order - b.homepage!.order)

  return (
    <section
      id="experience"
      className="max-w-[1320px] mx-auto px-6 md:px-10 pt-14 pb-0"
      aria-labelledby="experience-heading"
    >
      <div className="experience-layout">
        <header className="experience-intro">
          <span className="font-mono-label text-[9px] tracking-[0.2em] text-accent">
            §003
          </span>
          <h2 id="experience-heading">Experience</h2>
        </header>

        <ol className="experience-chronology">
          {homepageExperiences.map((experience) => (
            <li
              key={`${experience.role}-${experience.period}`}
              className={`experience-entry experience-entry-${experience.state}`}
            >
              <div className="experience-period">
                <span>{experience.period}</span>
                <span className="experience-marker" aria-hidden="true" />
              </div>
              <div className="experience-record">
                <p className="experience-category">{experience.category}</p>
                <h3>{experience.role}</h3>
                <p className="experience-organization">
                  {experience.organization}
                </p>
                <p className="experience-evidence">{experience.evidence}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <SectionDivider index="004" label="Currently" />
    </section>
  )
}
