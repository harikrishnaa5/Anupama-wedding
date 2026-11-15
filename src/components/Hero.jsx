import wedding from '../config/wedding'

export default function Hero() {
  const { couple, messages, displayDate, photos } = wedding
  const heroImage = photos.hero || '/images/1000333731.jpg'
  const alt = `${couple.partnerOne} and ${couple.partnerTwo}`

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#c8c8c8]">
      {/* Desktop base fill — smaller blurred photo is enough */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full object-cover object-[center_22%] blur-[80px] md:block"
        style={{ transform: 'scale(1.45)' }}
      />

      {/*
        Left-only fill: locked to the photo's bright left studio wall
        so the seam beside her hair disappears.
      */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full object-cover object-[8%_30%] blur-[90px] md:block"
        style={{
          transform: 'scale(1.55)',
          WebkitMaskImage:
            'linear-gradient(to right, black 0%, black 55%, transparent 100%)',
          maskImage:
            'linear-gradient(to right, black 0%, black 55%, transparent 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[42%] md:block"
        style={{
          background:
            'linear-gradient(to right, #d6d6d6 0%, #d0d0d0 35%, rgba(208,208,208,0.45) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Mobile: full-bleed cover */}
      <img
        src={heroImage}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-[center_18%] md:hidden"
        loading="eager"
        decoding="async"
      />

      {/*
        Desktop sharp photo — zoomed out a bit more so faces sit above the text.
        Soft left feather into the studio fill.
      */}
      <img
        src={heroImage}
        alt={alt}
        className="absolute left-1/2 top-0 z-[1] hidden max-w-none -translate-x-1/2 md:block"
        loading="eager"
        decoding="async"
        style={{
          height: '148%',
          width: 'auto',
          top: '-10%',
          opacity: 0.9,
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 6%, rgba(0,0,0,0.45) 14%, rgba(0,0,0,0.8) 24%, black 34%, black 93%, transparent 100%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 6%, rgba(0,0,0,0.45) 14%, rgba(0,0,0,0.8) 24%, black 34%, black 93%, transparent 100%)',
        }}
      />

      {/* Desktop overall dim — keeps white type readable */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] hidden bg-black/15 md:block"
        aria-hidden="true"
      />

      {/*
        Gradient opacity from where text begins → bottom.
        Starts soft at the top of the text band, strongest at the bottom.
      */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[36%] sm:h-[34%] md:h-[32%]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.28) 22%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.78) 78%, rgba(0,0,0,0.9) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Text — no container, sits over the bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-6 sm:px-10 sm:pb-8 md:pb-9">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="editorial-label hero-enter hero-enter-1 !text-[#F8F6F0] drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)]">
            {messages.intro}
          </p>

          <div className="hero-enter hero-enter-2 mt-2 sm:mt-2.5">
            <h1 className="font-display text-[2.1rem] font-medium leading-[0.95] tracking-tight text-white sm:text-4xl md:text-5xl">
              {couple.partnerOne}
            </h1>
            <p className="mt-0.5 font-display text-base italic font-normal text-champagne sm:text-lg md:text-xl">
              weds
            </p>
            <h1 className="mt-0.5 font-display text-[2.1rem] font-medium leading-[0.95] tracking-tight text-white sm:text-4xl md:text-5xl">
              {couple.partnerTwo}
            </h1>
          </div>

          <div className="hero-enter hero-enter-3 mt-3 flex items-center gap-4 sm:mt-3.5 sm:gap-5">
            <span className="h-px w-10 bg-champagne sm:w-14" aria-hidden="true" />
            <p className="font-body text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white sm:text-xs">
              {displayDate.date} {displayDate.month} {displayDate.year}
            </p>
            <span className="h-px w-10 bg-champagne sm:w-14" aria-hidden="true" />
          </div>

          <div className="hero-enter hero-enter-4 mt-3 flex flex-col items-center gap-1.5 sm:mt-3.5">
            <span className="editorial-label !text-white/60 text-[0.55rem]">
              Scroll to explore
            </span>
            <div className="scroll-indicator h-5 w-px bg-white/45" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
