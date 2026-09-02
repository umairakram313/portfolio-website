import { THOUGHTS, type Thought } from "../../content"
import SectionDivider from "../SectionDivider"

function ThoughtTitle({ thought }: { thought: Thought }) {
  const destination =
    thought.status === "PUBLISHED" && thought.slug
      ? `/thoughts/${thought.slug}`
      : null

  return (
    <h3>
      {destination ? <a href={destination}>{thought.title}</a> : thought.title}
    </h3>
  )
}

export default function ThoughtsSection() {
  const homepageThoughts = THOUGHTS.filter((thought) => thought.homepage).sort(
    (a, b) => a.homepage!.order - b.homepage!.order,
  )
  const featuredThought = homepageThoughts.find(
    (thought) => thought.homepage?.role === "featured",
  )!
  const secondaryThoughts = homepageThoughts.filter(
    (thought) => thought.homepage?.role === "secondary",
  )

  return (
    <section
      id="thoughts"
      className="max-w-[1320px] mx-auto px-6 md:px-10 pt-14 pb-0"
      aria-labelledby="thoughts-heading"
    >
      <header className="thoughts-heading">
        <span className="font-mono-label text-[9px] tracking-[0.2em] text-accent">
          §002
        </span>
        <h2 id="thoughts-heading">Thoughts</h2>
        <span className="thoughts-heading-rule" aria-hidden="true" />
      </header>

      <div className="thoughts-spread">
        <article className="thought-featured">
          <div className="thought-featured-body">
            <div className="thought-meta">
              <span>{featuredThought.number}</span>
              <span>{featuredThought.status}</span>
              <span>{featuredThought.categories.join(" / ")}</span>
            </div>
            <ThoughtTitle thought={featuredThought} />
            <p>{featuredThought.excerpt}</p>
          </div>
        </article>

        <div className="thought-secondary-grid">
          {secondaryThoughts.map((thought) => (
            <article key={thought.number} className="thought-secondary">
              <div className="thought-secondary-number" aria-hidden="true">
                {thought.number}
              </div>
              <div className="thought-meta">
                <span>{thought.status}</span>
                <span>{thought.categories.join(" / ")}</span>
              </div>
              <ThoughtTitle thought={thought} />
              <p>{thought.excerpt}</p>
            </article>
          ))}
        </div>
      </div>

      <SectionDivider index="003" label="Experience" />
    </section>
  )
}
