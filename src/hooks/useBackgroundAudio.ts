import { useCallback, useEffect, useRef, useState } from "react"

const SOUNDTRACK_URL = `${import.meta.env.BASE_URL}audio/site-soundtrack.mp3`
const SOUND_PREFERENCE_KEY = "background-music-muted"
const FADE_DURATION_MS = 850
const TARGET_VOLUME = 1

type AudioController = {
  setEnabled: (enabled: boolean) => void
}

function readInitialSoundPreference() {
  try {
    return localStorage.getItem(SOUND_PREFERENCE_KEY) !== "true"
  } catch {
    return true
  }
}

export default function useBackgroundAudio() {
  const [soundEnabled, setSoundEnabled] = useState(readInitialSoundPreference)
  const soundEnabledRef = useRef(soundEnabled)
  const controllerRef = useRef<AudioController | null>(null)

  useEffect(() => {
    const audio = new Audio(SOUNDTRACK_URL)
    let fadeFrame = 0
    let listeningForUnlock = false
    let disposed = false

    audio.loop = true
    audio.preload = "auto"
    audio.volume = 0

    function cancelFade() {
      if (fadeFrame) window.cancelAnimationFrame(fadeFrame)
      fadeFrame = 0
    }

    function fadeTo(targetVolume: number, onComplete?: () => void) {
      cancelFade()
      const startVolume = audio.volume
      const startedAt = performance.now()

      function updateVolume(now: number) {
        const progress = Math.min((now - startedAt) / FADE_DURATION_MS, 1)
        audio.volume = startVolume + (targetVolume - startVolume) * progress

        if (progress < 1) {
          fadeFrame = window.requestAnimationFrame(updateVolume)
        } else {
          fadeFrame = 0
          onComplete?.()
        }
      }

      fadeFrame = window.requestAnimationFrame(updateVolume)
    }

    function removeUnlockListeners() {
      if (!listeningForUnlock) return
      document.removeEventListener("pointerdown", handleUnlock)
      document.removeEventListener("keydown", handleUnlock)
      listeningForUnlock = false
    }

    function addUnlockListeners() {
      if (listeningForUnlock || disposed || !soundEnabledRef.current) return
      document.addEventListener("pointerdown", handleUnlock, { passive: true })
      document.addEventListener("keydown", handleUnlock)
      listeningForUnlock = true
    }

    async function attemptPlayback() {
      if (disposed || !soundEnabledRef.current) return

      cancelFade()
      audio.volume = 0

      try {
        await audio.play()

        if (disposed || !soundEnabledRef.current) {
          audio.pause()
          return
        }

        removeUnlockListeners()
        fadeTo(TARGET_VOLUME)
      } catch {
        addUnlockListeners()
      }
    }

    function handleUnlock() {
      void attemptPlayback()
    }

    controllerRef.current = {
      setEnabled(enabled) {
        cancelFade()

        if (enabled) {
          audio.volume = 0
          void attemptPlayback()
          return
        }

        removeUnlockListeners()
        if (audio.paused) {
          audio.volume = 0
        } else {
          fadeTo(0, () => audio.pause())
        }
      },
    }

    if (soundEnabledRef.current) void attemptPlayback()

    return () => {
      disposed = true
      cancelFade()
      removeUnlockListeners()
      audio.pause()
      audio.src = ""
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

    controllerRef.current?.setEnabled(next)
  }, [])

  return { soundEnabled, toggleSound }
}
