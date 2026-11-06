import wedding from '../config/wedding'
import Reveal from './Reveal'
import { LeafCorner } from './BotanicalDecor'

export default function Invitation() {
  const { messages } = wedding

  return (
    <section className="relative overflow-hidden bg-soft-white">
      <div
        className="pointer-events-none absolute -right-8 top-16 h-40 w-40 text-sage/40 md:right-10 md:h-52 md:w-52"
        aria-hidden="true"
      >
        <LeafCorner className="botanical-drift h-full w-full" flip />
      </div>

      <div className="relative mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-12 md:gap-8 md:px-10 md:py-28">
        {/* Asymmetric left column — oversized label + botanical panel */}
        <Reveal className="md:col-span-5 md:pt-6">
          <p className="editorial-label mb-6">The Invitation</p>
          <div className="relative aspect-[3/4] max-w-sm overflow-hidden bg-beige/60 md:max-w-none">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(160deg, #EAE5DA 0%, #F8F6F0 45%, #E8EBE4 100%)',
              }}
            />
            <div className="absolute inset-6 border border-champagne/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <LeafCorner className="mb-6 h-16 w-16 text-sage/60" />
              <p className="font-display text-3xl italic leading-snug text-charcoal/80">
                With joy
                <br />
                &amp; gratitude
              </p>
              <span className="mt-8 h-px w-12 bg-champagne" />
            </div>
          </div>
        </Reveal>

        {/* Right — editorial message */}
        <div className="flex flex-col justify-center md:col-span-7 md:pl-6 lg:pl-12">
          <Reveal delay={1}>
            <h2 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-charcoal sm:text-5xl md:text-6xl text-balance">
              {messages.invitationHeading}
            </h2>
          </Reveal>

          <Reveal delay={2} className="mt-8">
            <div className="h-px w-16 bg-champagne" />
          </Reveal>

          <Reveal delay={3} className="mt-8">
            <p className="max-w-md font-body text-base leading-[1.85] text-warm-gray md:text-lg">
              {messages.invitationBody}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
