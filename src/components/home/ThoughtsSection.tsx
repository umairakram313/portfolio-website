import { THOUGHTS } from "../../content"
import SectionDivider from "../SectionDivider"

export default function ThoughtsSection() {
  return (
    <section
      id="thoughts"
      className="max-w-[1320px] mx-auto px-6 md:px-10 pt-14 pb-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-3">
          <h2 className="font-display font-light text-[28px] md:text-[36px] tracking-[-0.01em] text-foreground">
            Thoughts
          </h2>
          <p className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-muted-foreground mt-3">
            Notes on work, systems, and the world
          </p>
          <a
            href="#"
            className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors block mt-8"
          >
            All Writing →
          </a>
        </div>
        <div className="md:col-span-9 space-y-0">
          {THOUGHTS.map((thought) => (
            <div
              key={thought.title}
              className="py-7 border-t border-border hover:border-accent transition-colors duration-200 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="thought-mark w-0.5 h-auto self-stretch mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div>
                  <p className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-muted-foreground mb-2">
                    {thought.date}
                  </p>
                  <h3 className="font-display font-light text-[19px] md:text-[23px] tracking-[-0.01em] text-foreground group-hover:text-accent transition-colors duration-200 mb-2">
                    {thought.title}
                  </h3>
                  <p className="text-[14px] font-light text-muted-foreground leading-[1.7] max-w-[600px] italic">
                    "{thought.excerpt}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionDivider index="003" label="Experience" />
    </section>
  )
}
