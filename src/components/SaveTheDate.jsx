import { useEffect, useState } from 'react'
import wedding from '../config/wedding'
import Reveal from './Reveal'
import { OrnamentDivider } from './BotanicalDecor'

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
    <div className="flex min-w-[3.5rem] flex-col items-center">
      <span className="font-display text-3xl font-medium tabular-nums text-charcoal md:text-4xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 editorial-label text-[0.55rem]">{label}</span>
    </div>
  )
}

export default function SaveTheDate() {
  const { displayDate, time } = wedding
  const target = getWeddingDate()
  const countdown = useCountdown(target)
  const showCountdown = target && countdown && !countdown.ended

  return (
    <section className="relative overflow-hidden bg-champagne-soft">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-champagne/60"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:px-10 md:py-28">
        <Reveal>
          <p className="editorial-label">Save the Date</p>
        </Reveal>

        <Reveal delay={1} className="mt-10">
          <p className="font-display text-xl italic text-warm-gray md:text-2xl">
            {displayDate.day}
          </p>
        </Reveal>

        <Reveal delay={2} className="mt-4">
          <div className="flex items-end justify-center gap-4 md:gap-6">
            <span className="font-display text-[5.5rem] font-medium leading-none tracking-tight text-charcoal sm:text-8xl md:text-9xl">
              {displayDate.date}
            </span>
            <div className="mb-3 flex flex-col items-start text-left md:mb-4">
              <span className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                {displayDate.month}
              </span>
              <span className="mt-1 font-display text-xl text-warm-gray md:text-2xl">
                {displayDate.year}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={3} className="mt-8">
          <OrnamentDivider className="text-champagne" />
          <p className="mt-6 font-body text-sm tracking-[0.2em] uppercase text-warm-gray">
            Ceremony begins at {time}
          </p>
        </Reveal>

        {showCountdown && (
          <Reveal delay={4} className="mt-12">
            <div className="mx-auto flex max-w-sm items-center justify-between gap-2 border border-champagne/50 bg-soft-white/50 px-5 py-5 backdrop-blur-sm">
              <CountdownUnit value={countdown.days} label="Days" />
              <span className="text-champagne" aria-hidden="true">
                ·
              </span>
              <CountdownUnit value={countdown.hours} label="Hours" />
              <span className="text-champagne" aria-hidden="true">
                ·
              </span>
              <CountdownUnit value={countdown.minutes} label="Mins" />
              <span className="text-champagne" aria-hidden="true">
                ·
              </span>
              <CountdownUnit value={countdown.seconds} label="Secs" />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
