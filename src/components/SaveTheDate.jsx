import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import wedding from '../config/wedding'
import Reveal from './Reveal'
import { LeafCorner } from './BotanicalDecor'

function getWeddingDate() {
  const { dateISO, timeISO } = wedding
  if (!dateISO) return null
  const parsed = new Date(`${dateISO}T${timeISO || '00:00'}:00`)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

function useCountdown(target) {
  const [remaining, setRemaining] = useState(null)

  useEffect(() => {
    if (!target) {
      setRemaining(null)
      return
    }

    const tick = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) {
        setRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0, ended: true })
        return
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)
      setRemaining({ days, hours, minutes, seconds, ended: false })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  return remaining
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-1 flex-col items-center border border-champagne/50 bg-soft-white px-2 py-4 sm:px-3 sm:py-5">
      <span className="font-display text-2xl font-medium tabular-nums text-charcoal sm:text-3xl md:text-4xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1.5 editorial-label text-[0.5rem] text-champagne sm:text-[0.55rem]">
        {label}
      </span>
    </div>
  )
}

function MomentsCarousel({ items, couple }) {
  const [index, setIndex] = useState(0)
  const [inView, setInView] = useState(false)
  const videoRef = useRef(null)
  const sectionRef = useRef(null)
  const total = items.length
  const current = items[index]
  const isVideo = current?.type === 'video'

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Reset only when the active slide changes
  useEffect(() => {
    const el = videoRef.current
    if (!el || !isVideo) return
    el.currentTime = 0
  }, [index, current, isVideo])

  // Play / pause with scroll — resume from pause position
  useEffect(() => {
    const el = videoRef.current
    if (!el || !isVideo) return

    if (!inView) {
      el.pause()
      return
    }

    const play = () => {
      el.play().catch(() => {})
    }
    if (el.readyState >= 2) {
      play()
    } else {
      el.addEventListener('loadeddata', play, { once: true })
    }
    return () => {
      el.removeEventListener('loadeddata', play)
      el.pause()
    }
  }, [index, current, isVideo, inView])

  if (!total || !current) return null

  const goTo = (next) => {
    setIndex((next + total) % total)
  }

  const label = `${couple.partnerOne} & ${couple.partnerTwo} — moment ${index + 1}`

  return (
    <Reveal delay={1} variant="reveal-scale" className="mx-auto mt-10 w-full max-w-md md:mt-12 md:max-w-xs">
      <div ref={sectionRef} className="relative border border-champagne/30 bg-black">
        {isVideo ? (
          <video
            key={current.src}
            ref={videoRef}
            src={current.src}
            className="aspect-[9/16] w-full bg-black object-contain"
            loop
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            playsInline
            preload="metadata"
            onContextMenu={(e) => e.preventDefault()}
            aria-label={label}
          />
        ) : (
          <img
            key={current.src}
            src={current.src}
            alt={label}
            className="aspect-[9/16] w-full bg-black object-contain"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        )}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-ivory transition hover:bg-black/65"
              aria-label="Previous moment"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-ivory transition hover:bg-black/65"
              aria-label="Next moment"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-champagne' : 'w-1.5 bg-charcoal/25 hover:bg-charcoal/45'
              }`}
              aria-label={`Show moment ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </Reveal>
  )
}

export default function SaveTheDate() {
  const { couple, messages, moments = [], photos } = wedding
  const sectionBg = photos.invitationBg || '/images/background-img.png'
  const target = useMemo(() => getWeddingDate(), [])
  const countdown = useCountdown(target)
  const showCountdown = target && countdown && !countdown.ended

  return (
    <section className="relative overflow-hidden bg-[#f3eee6]">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${sectionBg}')` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[#fdfcf9]/55"
        aria-hidden="true"
      />

      <LeafCorner className="botanical-drift pointer-events-none absolute left-2 top-2 h-28 w-28 text-sage/70 md:left-6 md:top-6 md:h-40 md:w-40" />
      <LeafCorner
        flip
        className="botanical-drift pointer-events-none absolute right-2 top-2 h-28 w-28 text-champagne md:right-6 md:top-6 md:h-40 md:w-40"
        style={{ animationDelay: '1.6s' }}
      />
      <LeafCorner
        className="botanical-drift pointer-events-none absolute bottom-2 left-2 h-28 w-28 rotate-180 text-champagne md:bottom-6 md:left-6 md:h-40 md:w-40"
        style={{ animationDelay: '2.8s' }}
      />
      <LeafCorner
        flip
        className="botanical-drift pointer-events-none absolute bottom-2 right-2 h-28 w-28 rotate-180 text-sage/70 md:bottom-6 md:right-6 md:h-40 md:w-40"
        style={{ animationDelay: '3.6s' }}
      />

      {/* Upper moments band */}
      <div className="relative px-6 pb-12 pt-16 md:px-10 md:pb-18 md:pt-20">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="editorial-label text-champagne">Our Moments</p>
          <h2 className="mt-4 font-display text-3xl font-medium text-charcoal sm:text-4xl md:text-5xl text-balance">
            A glimpse of our forever
          </h2>
        </Reveal>

        <MomentsCarousel items={moments} couple={couple} />
      </div>

      {/* Countdown band */}
      <div className="relative px-6 pb-8 pt-16 md:px-10 md:pb-10 md:pt-20">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <p className="font-display text-lg italic text-champagne md:text-xl">
              Every moment brings us closer…
            </p>
            <h3 className="mt-3 font-display text-3xl font-medium text-charcoal md:text-4xl">
              Until we say I do
            </h3>
          </Reveal>

          {showCountdown ? (
            <Reveal delay={1} className="mt-10">
              <div className="mx-auto flex max-w-md gap-2 sm:gap-3">
                <CountdownUnit value={countdown.days} label="Days" />
                <CountdownUnit value={countdown.hours} label="Hours" />
                <CountdownUnit value={countdown.minutes} label="Mins" />
                <CountdownUnit value={countdown.seconds} label="Secs" />
              </div>
            </Reveal>
          ) : (
            <Reveal delay={1} className="mt-8">
              <p className="font-body text-sm text-warm-gray">
                {messages.tagline}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
