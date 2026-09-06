import { useState } from "react"
import EntryCover from "./components/home/EntryCover"
import CurrentlySection from "./components/home/CurrentlySection"
import ExperienceSection from "./components/home/ExperienceSection"
import Hero from "./components/home/Hero"
import ProjectsSection from "./components/home/ProjectsSection"
import SignatureInterlude from "./components/home/SignatureInterlude"
import ThoughtsSection from "./components/home/ThoughtsSection"
import SiteFooter from "./components/SiteFooter"
import SiteHeader from "./components/SiteHeader"
import useBackgroundAudio from "./hooks/useBackgroundAudio"

const ENTRY_SESSION_KEY = "portfolio-entry-seen"

function shouldShowEntryCover() {
  try {
    return sessionStorage.getItem(ENTRY_SESSION_KEY) !== "true"
  } catch {
    return true
  }
}

export default function App() {
  const [entryCoverVisible, setEntryCoverVisible] =
    useState(shouldShowEntryCover)
  const {
    soundEnabled,
    toggleSound,
    activeListeningUrl,
    listeningTrackPlaying,
    toggleListeningTrack,
    unlockFromUserGesture,
  } = useBackgroundAudio({ deferInitialStartup: entryCoverVisible })

  function handleEntry() {
    try {
      sessionStorage.setItem(ENTRY_SESSION_KEY, "true")
    } catch {
      // The current mounted session still enters normally when storage is unavailable.
    }
  }

  return (
    <>
      {entryCoverVisible && (
        <EntryCover
          onUnlockAudio={unlockFromUserGesture}
          onEnter={handleEntry}
          onExited={() => setEntryCoverVisible(false)}
        />
      )}
      <div
        className="min-h-full bg-background text-foreground"
        inert={entryCoverVisible}
        aria-hidden={entryCoverVisible}
      >
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader soundEnabled={soundEnabled} onToggleSound={toggleSound} />
        <main id="main-content">
          <Hero />
          <ProjectsSection />
          <ThoughtsSection />
          <ExperienceSection />
          <CurrentlySection
            activeListeningUrl={activeListeningUrl}
            listeningTrackPlaying={listeningTrackPlaying}
            onToggleListeningTrack={toggleListeningTrack}
          />
          <SignatureInterlude />
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
