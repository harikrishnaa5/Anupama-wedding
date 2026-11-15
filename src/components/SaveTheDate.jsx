import { useEffect, useState } from 'react'
import wedding from '../config/wedding'
import Reveal from './Reveal'

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

export default function SaveTheDate() {
  const { couple, photos, messages } = wedding
  const target = getWeddingDate()
  const countdown = useCountdown(target)
  const showCountdown = target && countdown && !countdown.ended
  const featurePhoto = photos.featured || photos.secondary?.[0]

  return (
    <section className="relative overflow-hidden">
      {/* Upper photo band */}
      <div className="relative bg-charcoal px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="editorial-label text-champagne">Our Moments</p>
          <h2 className="mt-4 font-display text-3xl font-medium text-ivory sm:text-4xl md:text-5xl text-balance">
            A glimpse of our forever
          </h2>
        </Reveal>

        {featurePhoto && (
          <Reveal delay={1} variant="reveal-scale" className="mx-auto mt-10 max-w-md md:mt-12">
            <div className="overflow-hidden border border-champagne/30">
              <img
                src={featurePhoto}
                alt={`${couple.partnerOne} & ${couple.partnerTwo}`}
                className="aspect-[4/5] w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        )}
      </div>

      {/* Countdown band */}
      <div className="bg-ivory px-6 py-16 md:px-10 md:py-20">
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
