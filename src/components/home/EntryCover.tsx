import { useEffect, useRef, useState } from "react"

const COVER_EXIT_DURATION_MS = 900
const ENTRY_REVEAL_DELAY_MS = 1900
const REDUCED_MOTION_EXIT_DURATION_MS = 30

type EntryCoverProps = {
  onEnter: () => void
  onExited: () => void
}

export default function EntryCover({ onEnter, onExited }: EntryCoverProps) {
  const [isReady, setIsReady] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const revealTimerRef = useRef<number | null>(null)
  const exitTimerRef = useRef<number | null>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    document.body.style.overflow = "hidden"
    revealTimerRef.current = window.setTimeout(
      () => setIsReady(true),
      reducedMotion ? 0 : ENTRY_REVEAL_DELAY_MS,
    )

    return () => {
      document.body.style.overflow = previousOverflow
      if (revealTimerRef.current) window.clearTimeout(revealTimerRef.current)
      if (exitTimerRef.current) window.clearTimeout(exitTimerRef.current)
    }
  }, [])

  function handleEnter() {
    if (!isReady || isExiting) return

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
      className={`entry-cover${isReady ? " is-ready" : ""}${
        isExiting ? " is-exiting" : ""
      }`}
      aria-label="Website introduction"
    >
      <div className="entry-cover-atmosphere" aria-hidden="true">
        <span className="entry-cover-axis entry-cover-axis-horizontal" />
        <span className="entry-cover-axis entry-cover-axis-vertical" />
        <span className="entry-cover-register" />
      </div>

      <div className="entry-cover-frame">
        <div className="entry-cover-identity">
          <span className="archive-registration-mark" aria-hidden="true" />
          <p>Umair Akram</p>
          <p className="entry-cover-context">2026 — Islamabad, PK</p>
        </div>

        <div className="entry-cover-title-group">
          <p className="entry-cover-name" aria-hidden="true">
            <span>Umair</span>
            <span>Akram</span>
          </p>
          <div className="entry-cover-disciplines">
            <span>Engineering</span>
            <span>Systems</span>
            <span>Ideas</span>
          </div>
        </div>

        <div className="entry-cover-action-row">
          <span className="entry-cover-rule" aria-hidden="true" />
          <button
            type="button"
            className="entry-cover-enter"
            onClick={handleEnter}
            disabled={!isReady || isExiting}
            aria-label="Enter Umair Akram's website"
            data-audio-control
          >
            <span>Enter</span>
            <span className="entry-cover-enter-arrow" aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
