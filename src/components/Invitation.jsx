import { ArrowRight, Clock } from 'lucide-react'
import wedding from '../config/wedding'
import Reveal from './Reveal'
import { BotanicalSpray } from './BotanicalDecor'

export default function Invitation() {
  const { messages, displayDate, time, venue } = wedding

  return (
    <section className="relative overflow-hidden bg-soft-white">
      <div className="mx-auto max-w-xl px-6 py-20 text-center md:px-10 md:py-28">
        <Reveal>
          <BotanicalSpray className="mx-auto mb-8 h-10 w-44 text-champagne/70" />
          <p className="editorial-label text-champagne">The Invitation</p>
        </Reveal>

        <Reveal delay={1} className="mt-5">
          <h2 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-charcoal sm:text-5xl text-balance">
            {messages.invitationHeading}
          </h2>
        </Reveal>

        <Reveal delay={2} className="mt-7">
          <p className="mx-auto max-w-md font-body text-base leading-[1.85] text-warm-gray md:text-lg">
            {messages.invitationBody}
          </p>
        </Reveal>

        <Reveal delay={3} className="mt-12">
          <div className="mx-auto h-px w-14 bg-champagne/70" />
        </Reveal>

        <Reveal delay={3} className="mt-12">
          <p className="editorial-label text-champagne">{displayDate.day}</p>
          <h3 className="mt-3 font-display text-3xl font-medium text-charcoal md:text-4xl">
            Wedding Ceremony
          </h3>
          <p className="mt-3 font-display text-xl text-charcoal md:text-2xl">
            {displayDate.date} {displayDate.month} {displayDate.year}
          </p>
        </Reveal>

        <Reveal delay={4} className="mt-8">
          <p className="font-display text-lg italic text-champagne">
            Ceremony begins
          </p>
          <p className="mt-2 inline-flex items-center justify-center gap-2 font-body text-sm tracking-wide text-warm-gray">
            <Clock size={14} strokeWidth={1.5} aria-hidden="true" />
            {time}
          </p>
        </Reveal>

        <Reveal delay={4} className="mt-10">
          <p className="font-display text-2xl font-medium text-charcoal md:text-3xl">
            {venue.name}
          </p>
          <p className="mx-auto mt-3 max-w-sm font-body text-sm leading-relaxed text-warm-gray">
            {venue.address}
          </p>
        </Reveal>

        {venue.mapsUrl && (
          <Reveal delay={4} className="mt-12">
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-sm items-center justify-center gap-3 bg-charcoal px-6 py-4 font-body text-xs font-medium uppercase tracking-[0.22em] text-ivory transition-opacity hover:opacity-90"
            >
              Open in Google Maps
              <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  )
}
