import { ArrowRight, Clock } from 'lucide-react'
import wedding from '../config/wedding'
import Reveal from './Reveal'
import { BotanicalSpray, LeafCorner, OrnamentDivider } from './BotanicalDecor'

export default function Invitation() {
  const { messages, displayDate, time, venue, photos } = wedding
  const saveTheDate = photos.saveTheDate
  const invitationBg = photos.invitationBg || '/images/background-img.png'

  return (
    <section className="relative overflow-hidden bg-[#f3eee6]">
      {/* Full-bleed invitation background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${invitationBg}')` }}
        aria-hidden="true"
      />
      {/* Soft veil so type stays readable */}
      <div
        className="pointer-events-none absolute inset-0 bg-[#fdfcf9]/55"
        aria-hidden="true"
      />

      {/* Corner botanicals */}
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

      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:px-10 md:py-28">
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
          <p className="mx-auto max-w-md font-display text-xl italic leading-relaxed text-warm-gray md:text-2xl">
            {messages.invitationBody}
          </p>
        </Reveal>

        <Reveal delay={3} className="mt-14">
          <OrnamentDivider className="text-champagne" />

          {saveTheDate && (
            <div className="mx-auto mt-14 w-full max-w-[220px] sm:max-w-[260px] md:max-w-[350px]">
              <img
                src={saveTheDate}
                alt={`Save the date — ${displayDate.date} ${displayDate.month} ${displayDate.year}`}
                className="h-auto w-full bg-transparent object-contain"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
          )}
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
