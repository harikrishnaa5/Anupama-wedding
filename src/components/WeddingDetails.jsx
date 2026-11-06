import { MapPin, ArrowUpRight } from 'lucide-react'
import wedding from '../config/wedding'
import Reveal from './Reveal'

export default function WeddingDetails() {
  const { venue, displayDate, time } = wedding

  return (
    <section className="relative bg-sage-mist">
      <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="editorial-label text-center">The Wedding</p>
        </Reveal>

        <Reveal delay={1} className="mt-12">
          <div className="mx-auto max-w-xl px-2 text-center md:px-4">
            <div className="mx-auto mb-7 flex h-10 w-10 items-center justify-center text-sage">
              <MapPin strokeWidth={1.25} size={28} aria-hidden="true" />
            </div>

            <h2 className="font-display text-3xl font-medium tracking-tight text-charcoal md:text-4xl">
              {venue.name}
            </h2>

            <p className="mx-auto mt-4 max-w-sm font-body text-sm leading-relaxed text-warm-gray md:text-base">
              {venue.address}
            </p>

            <div className="mx-auto my-9 h-px w-16 bg-champagne" />

            <p className="font-display text-xl text-charcoal md:text-2xl">
              {displayDate.day}, {displayDate.date} {displayDate.month}{' '}
              {displayDate.year}
            </p>
            <p className="mt-2 font-body text-sm tracking-wide text-warm-gray">
              {time}
            </p>

            {venue.mapsUrl && (
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-2 border-b border-charcoal/30 pb-1 font-body text-xs font-medium uppercase tracking-[0.22em] text-charcoal transition-colors hover:border-charcoal"
              >
                Get Directions
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
