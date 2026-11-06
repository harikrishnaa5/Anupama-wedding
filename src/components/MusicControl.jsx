import { useCallback, useEffect, useRef, useState } from 'react'
import { Music2, VolumeX } from 'lucide-react'
import wedding from '../config/wedding'

export default function MusicControl() {
  const { music } = wedding
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const enabled = Boolean(music?.enabled && music?.src)

  useEffect(() => {
    if (!enabled) return

    const audio = new Audio(music.src)
    audio.loop = true
    audio.preload = 'metadata'
    audioRef.current = audio

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [enabled, music?.src])

  const toggle = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
      return
    }

    try {
      await audio.play()
      setPlaying(true)
    } catch {
      // Autoplay policies or missing/invalid file — stay OFF
      setPlaying(false)
    }
  }, [playing])

  if (!enabled) return null

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? 'Pause background music' : 'Play background music'}
      aria-pressed={playing}
      className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border shadow-sm transition-all duration-300 md:bottom-8 md:right-8 ${
        playing
          ? 'border-charcoal/20 bg-charcoal text-ivory'
          : 'border-champagne bg-soft-white text-warm-gray hover:border-charcoal/30 hover:text-charcoal'
      }`}
    >
      <span className={playing ? 'music-disc-spin' : undefined}>
        {playing ? (
          <Music2 size={18} strokeWidth={1.5} aria-hidden="true" />
        ) : (
          <VolumeX size={18} strokeWidth={1.5} aria-hidden="true" />
        )}
      </span>
    </button>
  )
}
