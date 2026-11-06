import wedding from '../config/wedding'
import { BotanicalSpray, LeafCorner, OrnamentDivider } from './BotanicalDecor'

export default function Hero() {
  const { couple, messages, displayDate, venue, photos } = wedding
  const hasHeroPhoto = Boolean(photos.hero)

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ivory">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% 0%, #FDFCF9 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 85% 90%, rgba(165,173,153,0.18) 0%, transparent 55%)',
        }}
      />

      <LeafCorner className="botanical-drift pointer-events-none absolute left-2 top-3 h-16 w-16 text-sage/65 sm:left-4 sm:top-5 sm:h-20 sm:w-20 md:left-8 md:top-8 md:h-28 md:w-28" />
      <LeafCorner
        flip
        className="botanical-drift pointer-events-none absolute right-2 top-3 h-16 w-16 text-sage/65 sm:right-4 sm:top-5 sm:h-20 sm:w-20 md:right-8 md:top-8 md:h-28 md:w-28"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 pb-6 pt-12 sm:px-6 sm:pt-16 md:px-10 md:pb-10 md:pt-20">
        <div className="flex flex-1 flex-col border border-champagne/60 px-4 py-7 sm:px-8 sm:py-10 md:px-12 md:py-14">
          <div className="flex flex-1 flex-col items-center text-center">
            <p className="editorial-label hero-enter hero-enter-1">
              {messages.intro}
            </p>

            <OrnamentDivider className="hero-enter hero-enter-1 mt-4 text-champagne sm:mt-6" />

            <div className="hero-enter hero-enter-2 mt-5 sm:mt-8 md:mt-10">
              <h1 className="font-display text-[3rem] font-medium leading-[0.95] tracking-tight text-charcoal sm:text-7xl md:text-8xl">
                {couple.partnerOne}
              </h1>
              <p className="mt-1 font-display text-xl italic font-normal text-warm-gray sm:mt-2 sm:text-2xl md:text-3xl">
                weds
              </p>
              <h1 className="mt-0.5 font-display text-[3rem] font-medium leading-[0.95] tracking-tight text-charcoal sm:text-7xl md:text-8xl">
                {couple.partnerTwo}
              </h1>
            </div>

            <div className="hero-enter hero-enter-3 mt-5 sm:mt-8 md:mt-10">
              <p className="editorial-label text-champagne">Save the Date</p>
              <p className="mt-3 max-w-sm font-display text-base italic leading-relaxed text-warm-gray sm:mt-4 sm:text-lg md:text-xl">
                {messages.tagline}
              </p>
            </div>

            {hasHeroPhoto ? (
              <div className="hero-enter hero-enter-4 mt-5 w-full max-w-md overflow-hidden sm:mt-8 md:mt-10">
                <img
                  src={photos.hero}
                  alt={`${couple.partnerOne} and ${couple.partnerTwo}`}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            ) : (
              <div className="hero-enter hero-enter-4 mt-5 w-full max-w-[14rem] sm:mt-8 sm:max-w-xs md:mt-10">
                <BotanicalSpray className="mx-auto h-8 w-full text-sage/50 sm:h-12" />
              </div>
            )}

            <div className="hero-enter hero-enter-5 mt-auto pt-6 sm:pt-10">
              <p className="font-display text-lg tracking-wide text-charcoal sm:text-xl md:text-2xl">
                {displayDate.date} {displayDate.month} {displayDate.year}
              </p>
              <p className="mt-1.5 font-body text-xs tracking-wide text-warm-gray sm:mt-2 sm:text-sm">
                {venue.name}
              </p>
            </div>
          </div>
        </div>

        <div className="hero-enter hero-enter-6 mt-5 flex flex-col items-center gap-1.5 sm:mt-8 sm:gap-2">
          <span className="editorial-label text-[0.6rem]">Scroll</span>
          <div className="scroll-indicator flex h-7 w-3.5 items-start justify-center rounded-full border border-champagne/80 pt-1 sm:h-8 sm:w-4 sm:pt-1.5">
            <span className="h-1.5 w-0.5 rounded-full bg-warm-gray" />
          </div>
        </div>
      </div>
    </section>
  )
}
