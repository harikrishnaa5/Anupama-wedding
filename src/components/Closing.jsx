import wedding from '../config/wedding'
import Reveal from './Reveal'
import { BotanicalSpray, LeafCorner, OrnamentDivider } from './BotanicalDecor'

export default function Closing() {
  const { couple, messages } = wedding

  return (
    <>
      <section className="relative overflow-hidden bg-soft-white">
        <LeafCorner className="botanical-drift pointer-events-none absolute bottom-8 left-4 h-24 w-24 text-sage/40 md:left-10 md:h-32 md:w-32" />
        <LeafCorner
          flip
          className="botanical-drift pointer-events-none absolute right-4 top-10 h-24 w-24 text-sage/40 md:right-10 md:h-32 md:w-32"
          style={{ animationDelay: '2s' }}
        />

        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
          <Reveal>
            <BotanicalSpray className="mx-auto mb-10 h-10 w-48 text-sage/45" />
          </Reveal>

          <Reveal delay={1}>
            <h2 className="font-display text-4xl font-medium leading-[1.15] tracking-tight text-charcoal sm:text-5xl md:text-6xl text-balance">
              {messages.closingHeadline}
            </h2>
          </Reveal>

          <Reveal delay={2} className="mt-8">
            <p className="mx-auto max-w-md font-display text-xl italic leading-relaxed text-warm-gray md:text-2xl">
              {messages.closingBody}
            </p>
          </Reveal>

          <Reveal delay={3} className="mt-12">
            <OrnamentDivider className="text-champagne" />
            <p className="mt-8 editorial-label">With love</p>
            <p className="mt-4 font-display text-3xl font-medium text-charcoal md:text-4xl">
              {couple.partnerOne} &amp; {couple.partnerTwo}
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-champagne/40 bg-ivory px-6 py-8 text-center">
        {/* <p className="font-display text-lg tracking-wide text-charcoal/80">
          {couple.partnerOne} &amp; {couple.partnerTwo}
        </p>
        <p className="mt-2 editorial-label text-[0.55rem]">
          Wedding Invitation
        </p> */}
      </footer>
    </>
  )
}
