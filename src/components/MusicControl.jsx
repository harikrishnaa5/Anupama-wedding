import { useCallback, useEffect, useRef, useState } from 'react'
import { Music2, VolumeX } from 'lucide-react'
import wedding from '../config/wedding'
import { VIDEO_PLAYING, VIDEO_STOPPED } from '../lib/musicBridge'

async function seekTo(audio, seconds) {
  if (!audio) return

  // Wait until we can seek reliably
  if (audio.readyState < 1) {
    await new Promise((resolve) => {
      audio.addEventListener('loadedmetadata', resolve, { once: true })
    })
  }

  if (Math.abs(audio.currentTime - seconds) < 0.05) return

  await new Promise((resolve) => {
    const onSeeked = () => {
      audio.removeEventListener('seeked', onSeeked)
      resolve()
    }
    audio.addEventListener('seeked', onSeeked)
    audio.currentTime = seconds

    // Fallback if seeked never fires
    window.setTimeout(resolve, 250)
  })
}

export default function MusicControl() {
  const { music } = wedding
  const audioRef = useRef(null)
  const userPausedRef = useRef(false)
  const videoHoldRef = useRef(false)
  // User/system wants music on (autoplay or unmuted) — independent of video hold
  const wantsMusicRef = useRef(true)
  const [playing, setPlaying] = useState(false)

  const enabled = Boolean(music?.enabled && music?.src)
  const startAt = Number(music?.startAt) || 0

  const playFromStart = useCallback(async () => {
    const audio = audioRef.current
    if (!audio || userPausedRef.current || videoHoldRef.current) return false

    try {
      await seekTo(audio, startAt)
      await audio.play()
      wantsMusicRef.current = true
      setPlaying(true)
      return true
    } catch {
      setPlaying(false)
      return false
    }
  }, [startAt])

  const resumeMusic = useCallback(async () => {
    const audio = audioRef.current
    if (!audio || userPausedRef.current || videoHoldRef.current) return

    try {
      if (audio.currentTime < startAt) {
        await seekTo(audio, startAt)
      }
      await audio.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }, [startAt])

  useEffect(() => {
    if (!enabled) return

    // Media fragment hints the start offset where supported
    const src =
      startAt > 0 ? `${music.src}#t=${startAt}` : music.src

    const audio = new Audio(src)
    audio.loop = false
    audio.preload = 'auto'
    audioRef.current = audio
    userPausedRef.current = false

    const onEnded = async () => {
      if (userPausedRef.current || videoHoldRef.current) return
      try {
        await seekTo(audio, startAt)
        await audio.play()
        setPlaying(true)
      } catch {
        setPlaying(false)
      }
    }

    // Guard: if playback somehow begins before startAt, jump forward
    const onTimeUpdate = () => {
      if (userPausedRef.current || videoHoldRef.current || audio.paused) return
      if (audio.currentTime < startAt - 0.02) {
        audio.currentTime = startAt
      }
    }

    const onVideoPlaying = () => {
      videoHoldRef.current = true
      audio.pause()
      setPlaying(false)
    }

    const onVideoStopped = () => {
      videoHoldRef.current = false
      if (wantsMusicRef.current && !userPausedRef.current) {
        resumeMusic()
      }
    }

    audio.addEventListener('ended', onEnded)
    audio.addEventListener('timeupdate', onTimeUpdate)
    window.addEventListener(VIDEO_PLAYING, onVideoPlaying)
    window.addEventListener(VIDEO_STOPPED, onVideoStopped)

    const tryAutoplay = () => {
      playFromStart()
    }

    audio.addEventListener('canplay', tryAutoplay, { once: true })
    audio.load()

    const unlockEvents = ['pointerdown', 'touchstart', 'keydown']
    const unlock = () => {
      if (userPausedRef.current || videoHoldRef.current || !audioRef.current?.paused) {
        unlockEvents.forEach((eventName) => {
          window.removeEventListener(eventName, unlock)
        })
        return
      }
      playFromStart().then((ok) => {
        if (ok) {
          unlockEvents.forEach((eventName) => {
            window.removeEventListener(eventName, unlock)
          })
        }
      })
    }

    unlockEvents.forEach((eventName) => {
      window.addEventListener(eventName, unlock, { passive: true })
    })

    return () => {
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('canplay', tryAutoplay)
      window.removeEventListener(VIDEO_PLAYING, onVideoPlaying)
      window.removeEventListener(VIDEO_STOPPED, onVideoStopped)
      unlockEvents.forEach((eventName) => {
        window.removeEventListener(eventName, unlock)
      })
      audio.pause()
      audioRef.current = null
    }
  }, [enabled, music?.src, startAt, playFromStart, resumeMusic])

  const toggle = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      userPausedRef.current = true
      wantsMusicRef.current = false
      audio.pause()
      setPlaying(false)
      return
    }

    userPausedRef.current = false
    wantsMusicRef.current = true
    try {
      if (audio.currentTime < startAt) {
        await seekTo(audio, startAt)
      }
      if (videoHoldRef.current) {
        setPlaying(false)
        return
      }
      await audio.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }, [playing, startAt])

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
