import { CURRENTS } from "../../content"
import SectionDivider from "../SectionDivider"

export default function CurrentlySection() {
  const currentSignals = [...CURRENTS].sort((a, b) => a.order - b.order)

  return (
    <section
      id="currently"
      className="max-w-[1320px] mx-auto px-6 md:px-10 pt-14 pb-0"
      aria-labelledby="currently-heading"
    >
      <header className="currently-heading">
        <div className="currently-heading-title">
          <span className="font-mono-label text-[9px] tracking-[0.2em] text-accent">
            §004
          </span>
          <h2 id="currently-heading">Currently</h2>
        </div>
        <p>What's on the desk</p>
      </header>

      <div className="currently-desk" role="list">
        {currentSignals.map((signal) => (
          <article
            key={signal.id}
            role="listitem"
            className={`current-signal current-signal-${signal.presentation} current-signal-${signal.priority}`}
          >
            <p className="current-signal-label">{signal.label}</p>
            <div className="current-signal-body">
              <h3>
                {signal.destination ? (
                  <a href={signal.destination}>{signal.primary}</a>
                ) : (
                  signal.primary
                )}
              </h3>
              <p>{signal.secondary}</p>
            </div>
            <span className="current-signal-mark" aria-hidden="true" />
          </article>
        ))}
      </div>

      <SectionDivider index="005" label="Contact" />
    </section>
  )
}
