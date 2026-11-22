import wedding from '../config/wedding'
import Reveal from './Reveal'
import { BotanicalSpray, LeafCorner, OrnamentDivider } from './BotanicalDecor'

export default function Closing() {
  const { couple, messages, photos } = wedding
  const closingBg = photos.invitationBg || '/images/background-img.png'

  return (
    <>
      <section className="relative overflow-hidden bg-[#f3eee6]">
        {/* Full-bleed background image — same as Invitation */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${closingBg}')` }}
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
    </>
  )
}
