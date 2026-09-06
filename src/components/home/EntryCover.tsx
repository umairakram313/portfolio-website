import { useEffect, useRef, useState } from "react"

const COVER_EXIT_DURATION_MS = 850
const REDUCED_MOTION_EXIT_DURATION_MS = 30

type EntryCoverProps = {
  onEnter: () => void
  onExited: () => void
}

export default function EntryCover({ onEnter, onExited }: EntryCoverProps) {
  const [isExiting, setIsExiting] = useState(false)
  const exitTimerRef = useRef<number | null>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
      if (exitTimerRef.current) window.clearTimeout(exitTimerRef.current)
    }
  }, [])

  function handleEnter() {
    if (isExiting) return

    onEnter()
    setIsExiting(true)

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    exitTimerRef.current = window.setTimeout(
      onExited,
      reducedMotion ? REDUCED_MOTION_EXIT_DURATION_MS : COVER_EXIT_DURATION_MS,
    )
  }

  return (
    <section
      className={`entry-cover${isExiting ? " is-exiting" : ""}`}
      aria-label="Website introduction"
    >
      <div className="entry-cover-frame">
        <div className="entry-cover-identity">
          <span className="archive-registration-mark" aria-hidden="true" />
          <p>Umair Akram</p>
        </div>

        <div className="entry-cover-title-group">
          <p className="entry-cover-discipline">
            Engineering <span aria-hidden="true">×</span> Systems{" "}
            <span aria-hidden="true">×</span> Ideas
          </p>
          <p className="entry-cover-name" aria-hidden="true">
            Umair Akram
          </p>
        </div>

        <div className="entry-cover-action-row">
          <span className="entry-cover-rule" aria-hidden="true" />
          <button
            type="button"
            className="entry-cover-enter"
            onClick={handleEnter}
            disabled={isExiting}
            aria-label="Enter Umair Akram's website"
            data-audio-control
          >
            Enter <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
