import { useEffect, useRef, useState } from "react"
import { PROJECTS } from "../../content"
import SectionDivider from "../SectionDivider"
import ProjectArtifactStage from "./ProjectArtifactStage"

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const projectRowsRef = useRef<(HTMLElement | null)[]>([])
  const activeProject = PROJECTS[activeIndex]

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 899px)")
    let observer: IntersectionObserver | null = null

    const configureObserver = () => {
      observer?.disconnect()
      observer = null

      if (!mobileQuery.matches) return

      const visibleRows = new Map<Element, IntersectionObserverEntry>()

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => visibleRows.set(entry.target, entry))

          const readingRow = [...visibleRows.values()]
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) =>
                Math.abs(a.boundingClientRect.top - window.innerHeight * 0.43) -
                Math.abs(b.boundingClientRect.top - window.innerHeight * 0.43),
            )[0]

          if (readingRow) {
            setActiveIndex(
              Number((readingRow.target as HTMLElement).dataset.projectIndex),
            )
          }
        },
        {
          rootMargin: "-43% 0px -42% 0px",
          threshold: [0, 0.15, 0.3],
        },
      )

      projectRowsRef.current.forEach((row) => row && observer?.observe(row))
    }

    configureObserver()
    mobileQuery.addEventListener("change", configureObserver)

    return () => {
      mobileQuery.removeEventListener("change", configureObserver)
      observer?.disconnect()
    }
  }, [])

  return (
    <section
      id="projects"
      className="max-w-[1320px] mx-auto px-6 md:px-10 pt-14 pb-0"
      aria-labelledby="projects-heading"
    >
      <div className="flex items-end justify-between mb-8 md:mb-10">
        <div className="flex items-baseline gap-4">
          <span className="font-mono-label text-[9px] tracking-[0.2em] text-accent">
            §001
          </span>
          <h2
            id="projects-heading"
            className="font-display font-light text-[28px] md:text-[36px] tracking-[-0.01em] text-foreground"
          >
            Selected Projects
          </h2>
        </div>
      </div>

      <div className="projects-composition">
        <div className="projects-artifact-stage" aria-live="off">
          <ProjectArtifactStage project={activeProject} />
        </div>

        <div
          className="projects-index"
          role="list"
          aria-label="Selected projects"
        >
          {PROJECTS.map((project, index) => {
            const isActive = activeIndex === index

            return (
              <article
                key={project.index}
                ref={(element) => {
                  projectRowsRef.current[index] = element
                }}
                data-project-index={index}
                className={`project-index-entry ${isActive ? "is-active" : ""}`}
                role="listitem"
              >
                <button
                  type="button"
                  className="project-index-button group"
                  aria-label={`Show artifact for ${project.title}`}
                  aria-pressed={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                >
                  <span className="project-index-number">{project.index}</span>
                  <span className="project-index-title">{project.title}</span>
                  <span className="project-index-period">{project.period}</span>
                  <span className="project-index-type">{project.type}</span>
                  <span className="project-index-description">
                    {project.description}
                  </span>
                  <span className="project-index-technologies">
                    {project.technologies.join(" · ")}
                  </span>
                </button>

                <div className="project-repository-links">
                  {project.repositories.map((repository) => (
                    <a
                      key={repository.href}
                      href={repository.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-repository-link"
                    >
                      {repository.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <SectionDivider index="002" label="THOUGHTS" className="mt-12 md:mt-16" />
    </section>
  )
}
