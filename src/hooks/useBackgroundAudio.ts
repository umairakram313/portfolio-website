import { useCallback, useEffect, useRef, useState } from "react"

const SOUNDTRACK_URL = `${import.meta.env.BASE_URL}audio/site-soundtrack.mp3`
const SOUND_PREFERENCE_KEY = "background-music-user-muted-v2"
const LEGACY_SOUND_PREFERENCE_KEY = "background-music-muted"
const FADE_DURATION_MS = 850
const UNLOCK_EVENTS = ["pointerdown", "touchstart", "keydown"] as const
const UNLOCK_LISTENER_OPTIONS = { capture: true, passive: true } as const

type AudioController = {
  setBackgroundEnabled: (enabled: boolean) => void
  toggleListeningTrack: (url: string) => void
}

function readInitialSoundPreference() {
  try {
    localStorage.removeItem(LEGACY_SOUND_PREFERENCE_KEY)
    return localStorage.getItem(SOUND_PREFERENCE_KEY) !== "true"
  } catch {
    return true
  }
}

function clampVolume(volume: number) {
  return Math.min(Math.max(volume, 0), 1)
}

export default function useBackgroundAudio() {
  const [soundEnabled, setSoundEnabled] = useState(readInitialSoundPreference)
  const [activeListeningUrl, setActiveListeningUrl] = useState<string | null>(
    null,
  )
  const [listeningTrackPlaying, setListeningTrackPlaying] = useState(false)
  const soundEnabledRef = useRef(soundEnabled)
  const activeListeningUrlRef = useRef<string | null>(null)
  const controllerRef = useRef<AudioController | null>(null)

  useEffect(() => {
    const backgroundAudio = new Audio(SOUNDTRACK_URL)
    let listeningAudio: HTMLAudioElement | null = null
    let backgroundFadeFrame = 0
    let listeningFadeFrame = 0
    let listeningForUnlock = false
    let backgroundPlayInFlight = false
    let backgroundRequestId = 0
    let listeningRequestId = 0
    let disposed = false

    backgroundAudio.loop = true
    backgroundAudio.preload = "auto"
    backgroundAudio.volume = 0
    backgroundAudio.defaultMuted = false
    backgroundAudio.muted = false
    backgroundAudio.load()

    function cancelBackgroundFade() {
      if (backgroundFadeFrame) {
        window.cancelAnimationFrame(backgroundFadeFrame)
      }
      backgroundFadeFrame = 0
    }

    function cancelListeningFade() {
      if (listeningFadeFrame) window.cancelAnimationFrame(listeningFadeFrame)
      listeningFadeFrame = 0
    }

    function fadeAudio(
      audio: HTMLAudioElement,
      targetVolume: number,
      kind: "background" | "listening",
      onComplete?: () => void,
    ) {
      if (kind === "background") cancelBackgroundFade()
      else cancelListeningFade()

      const startVolume = audio.volume
      const destination = clampVolume(targetVolume)
      const startedAt = performance.now()

      function updateVolume(now: number) {
        const progress = Math.min((now - startedAt) / FADE_DURATION_MS, 1)
        audio.volume = clampVolume(
          startVolume + (destination - startVolume) * progress,
        )

        if (progress < 1) {
          const frame = window.requestAnimationFrame(updateVolume)
          if (kind === "background") backgroundFadeFrame = frame
          else listeningFadeFrame = frame
        } else {
          if (kind === "background") backgroundFadeFrame = 0
          else listeningFadeFrame = 0
          onComplete?.()
        }
      }

      const frame = window.requestAnimationFrame(updateVolume)
      if (kind === "background") backgroundFadeFrame = frame
      else listeningFadeFrame = frame
    }

    function removeUnlockListeners() {
      if (!listeningForUnlock) return
      for (const eventName of UNLOCK_EVENTS) {
        document.removeEventListener(
          eventName,
          handleUnlock,
          UNLOCK_LISTENER_OPTIONS,
        )
      }
      listeningForUnlock = false
    }

    function addUnlockListeners() {
      if (listeningForUnlock || disposed || !soundEnabledRef.current) return
      for (const eventName of UNLOCK_EVENTS) {
        document.addEventListener(
          eventName,
          handleUnlock,
          UNLOCK_LISTENER_OPTIONS,
        )
      }
      listeningForUnlock = true
    }

    function startBackgroundAudio() {
      if (
        disposed ||
        !soundEnabledRef.current ||
        listeningAudio ||
        backgroundPlayInFlight
      ) {
        return Promise.resolve()
      }

      const requestId = ++backgroundRequestId
      backgroundPlayInFlight = true
      cancelBackgroundFade()
      backgroundAudio.volume = 0
      backgroundAudio.defaultMuted = false
      backgroundAudio.muted = false

      const playback = backgroundAudio.play()
      void playback
        .then(() => {
          if (
            disposed ||
            requestId !== backgroundRequestId ||
            !soundEnabledRef.current ||
            listeningAudio
          ) {
            backgroundAudio.pause()
            return
          }
          removeUnlockListeners()
          fadeAudio(backgroundAudio, 1, "background")
        })
        .catch(() => {
          if (
            !disposed &&
            requestId === backgroundRequestId &&
            soundEnabledRef.current
          ) {
            addUnlockListeners()
          }
        })
        .finally(() => {
          if (requestId === backgroundRequestId) {
            backgroundPlayInFlight = false
          }
        })

      return playback
    }

    function handleUnlock(event: Event) {
      if (!soundEnabledRef.current || listeningAudio) return
      const target = event.target
      if (target instanceof Element && target.closest("[data-audio-control]")) {
        return
      }

      if (backgroundPlayInFlight) return
      void startBackgroundAudio()
    }

    function resumeBackground() {
      if (soundEnabledRef.current && !disposed) {
        void startBackgroundAudio()
      }
    }

    function finishListeningTrack(requestId: number) {
      if (requestId !== listeningRequestId) return
      cancelListeningFade()
      if (listeningAudio) {
        listeningAudio.pause()
        listeningAudio.currentTime = 0
        listeningAudio.src = ""
        listeningAudio = null
      }
      activeListeningUrlRef.current = null
      setActiveListeningUrl(null)
      setListeningTrackPlaying(false)
      resumeBackground()
    }

    function stopListeningTrack() {
      if (!listeningAudio) return
      const audio = listeningAudio
      const requestId = ++listeningRequestId

      if (soundEnabledRef.current) {
        backgroundAudio.volume = 0
        void backgroundAudio.play().catch(addUnlockListeners)
      }
      fadeAudio(audio, 0, "listening", () => finishListeningTrack(requestId))
    }

    async function startListeningTrack(url: string) {
      const requestId = ++listeningRequestId
      removeUnlockListeners()
      ++backgroundRequestId
      backgroundPlayInFlight = false
      cancelBackgroundFade()
      backgroundAudio.muted = false

      if (listeningAudio) {
        cancelListeningFade()
        listeningAudio.pause()
        listeningAudio.src = ""
      }

      const audio = new Audio(url)
      listeningAudio = audio
      activeListeningUrlRef.current = url
      audio.preload = "auto"
      audio.volume = 0
      audio.addEventListener("ended", () => finishListeningTrack(requestId), {
        once: true,
      })
      setActiveListeningUrl(url)

      try {
        await audio.play()
        if (disposed || requestId !== listeningRequestId) {
          audio.pause()
          return
        }

        setListeningTrackPlaying(true)
        if (backgroundAudio.paused) {
          fadeAudio(audio, 1, "listening")
        } else {
          fadeAudio(backgroundAudio, 0, "background", () => {
            backgroundAudio.pause()
            if (requestId === listeningRequestId) {
              fadeAudio(audio, 1, "listening")
            }
          })
        }
      } catch {
        if (requestId === listeningRequestId) {
          listeningAudio = null
          activeListeningUrlRef.current = null
          audio.src = ""
          setActiveListeningUrl(null)
          setListeningTrackPlaying(false)
          resumeBackground()
        }
      }
    }

    controllerRef.current = {
      setBackgroundEnabled(enabled) {
        ++backgroundRequestId
        backgroundPlayInFlight = false
        cancelBackgroundFade()
        backgroundAudio.defaultMuted = false
        backgroundAudio.muted = false

        if (!enabled) {
          removeUnlockListeners()
          if (backgroundAudio.paused) {
            backgroundAudio.volume = 0
          } else {
            fadeAudio(backgroundAudio, 0, "background", () => {
              backgroundAudio.pause()
            })
          }
        } else if (!listeningAudio) {
          void startBackgroundAudio()
        }
      },
      toggleListeningTrack(url) {
        if (listeningAudio && activeListeningUrlRef.current === url) {
          stopListeningTrack()
        } else {
          void startListeningTrack(url)
        }
      },
    }

    if (soundEnabledRef.current) {
      void startBackgroundAudio()
    }

    return () => {
      disposed = true
      ++backgroundRequestId
      ++listeningRequestId
      cancelBackgroundFade()
      cancelListeningFade()
      removeUnlockListeners()
      backgroundAudio.pause()
      backgroundAudio.src = ""
      if (listeningAudio) {
        listeningAudio.pause()
        listeningAudio.src = ""
      }
      controllerRef.current = null
    }
  }, [])

  const toggleSound = useCallback(() => {
    const next = !soundEnabledRef.current
    soundEnabledRef.current = next
    setSoundEnabled(next)
    try {
      localStorage.setItem(SOUND_PREFERENCE_KEY, String(!next))
    } catch {
      // The control still works for this session when storage is unavailable.
    }
    controllerRef.current?.setBackgroundEnabled(next)
  }, [])

  const toggleListeningTrack = useCallback((url: string) => {
    controllerRef.current?.toggleListeningTrack(url)
  }, [])

  return {
    soundEnabled,
    toggleSound,
    activeListeningUrl,
    listeningTrackPlaying,
    toggleListeningTrack,
  }
}
