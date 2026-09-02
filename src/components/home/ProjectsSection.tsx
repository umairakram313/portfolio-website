import { PROJECTS } from "../../content"
import SectionDivider from "../SectionDivider"

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-[1320px] mx-auto px-6 md:px-10 pt-14 pb-0"
    >
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-display font-light text-[28px] md:text-[36px] tracking-[-0.01em] text-foreground">
          Selected Projects
        </h2>
        <a
          href="#"
          className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors hidden md:block"
        >
          All Projects →
        </a>
      </div>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={project.index}
            className="project-row group py-6 cursor-pointer"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
              <div className="md:col-span-1 hidden md:block">
                <span className="proj-index font-mono-label text-[11px] tracking-[0.12em] text-subtle transition-colors duration-200">
                  {project.index}
                </span>
              </div>
              <div className="md:col-span-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="proj-index font-mono-label text-[10px] text-subtle md:hidden transition-colors duration-200">
                    {project.index}
                  </span>
                  <h3 className="font-display font-light text-[18px] md:text-[22px] tracking-[-0.01em] text-foreground group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
                <p className="text-[14px] text-muted-foreground font-light leading-[1.6] max-w-[480px] mt-1">
                  {project.excerpt}
                </p>
              </div>
              <div className="md:col-span-3">
                <p className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-muted-foreground mb-2">
                  {project.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-label text-[9px] tracking-[0.1em] uppercase text-subtle border border-border px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 hidden md:flex items-start justify-end pt-1">
                <span className="font-mono-label text-[11px] text-subtle group-hover:text-muted-foreground transition-colors">
                  {project.year}
                </span>
                <span className="ml-4 text-subtle group-hover:text-accent transition-all duration-200 group-hover:translate-x-1 inline-block transform">
                  →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SectionDivider index="002" label="Thought" className="mt-12" />
    </section>
  )
}
