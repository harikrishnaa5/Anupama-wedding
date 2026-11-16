import wedding from '../config/wedding'

export default function Hero() {
  const { couple, messages, displayDate, photos } = wedding
  const heroImage = photos.hero || '/images/Hero-image.jpg'
  const alt = `${couple.partnerOne} and ${couple.partnerTwo}`

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#e6e6e6]">
      {/* Desktop base fill — bright studio atmosphere */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full object-cover object-[center_8%] blur-[70px] md:block"
        style={{ transform: 'scale(1.5)', opacity: 0.9, filter: 'brightness(1.2)' }}
      />

      {/* Left studio fill — light wall, outer edge only */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full object-cover object-[8%_10%] blur-[80px] md:block"
        style={{
          transform: 'scale(1.55)',
          opacity: 0.95,
          filter: 'brightness(1.25)',
          WebkitMaskImage:
            'linear-gradient(to right, black 0%, black 22%, transparent 48%)',
          maskImage:
            'linear-gradient(to right, black 0%, black 22%, transparent 48%)',
        }}
      />

      {/* Right studio fill — light wall, outer edge only */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full object-cover object-[92%_10%] blur-[80px] md:block"
        style={{
          transform: 'scale(1.55)',
          opacity: 0.95,
          filter: 'brightness(1.25)',
          WebkitMaskImage:
            'linear-gradient(to left, black 0%, black 22%, transparent 48%)',
          maskImage:
            'linear-gradient(to left, black 0%, black 22%, transparent 48%)',
        }}
      />

      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[28%] md:block"
        style={{
          background:
            'linear-gradient(to right, #e8e8e8 0%, rgba(232,232,232,0.7) 40%, transparent 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[28%] md:block"
        style={{
          background:
            'linear-gradient(to left, #e8e8e8 0%, rgba(232,232,232,0.7) 40%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Mobile: full-bleed cover — pull subjects up */}
      <img
        src={heroImage}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-[center_42%] md:hidden"
        loading="eager"
        decoding="async"
        style={{ filter: 'brightness(0.98)' }}
      />

      {/*
        Desktop sharp photo — fully opaque so fills don't wash faces.
        Narrow side feather only at the outer edges.
      */}
      <img
        src={heroImage}
        alt={alt}
        className="absolute left-1/2 z-[1] hidden max-w-none -translate-x-1/2 md:block"
        loading="eager"
        decoding="async"
        style={{
          height: '168%',
          width: 'auto',
          top: '-38%',
          opacity: 1,
          filter: 'brightness(0.98)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 4%, rgba(0,0,0,0.75) 9%, black 14%, black 86%, rgba(0,0,0,0.75) 91%, rgba(0,0,0,0.35) 96%, transparent 100%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 4%, rgba(0,0,0,0.75) 9%, black 14%, black 86%, rgba(0,0,0,0.75) 91%, rgba(0,0,0,0.35) 96%, transparent 100%)',
        }}
      />

      {/* Center-weighted dim — keeps side fills light, softens faces */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            'radial-gradient(ellipse 55% 70% at 50% 42%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0.04) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Stronger bottom band so white type stays readable */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[42%] sm:h-[40%] md:h-[38%]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 28%, rgba(0,0,0,0.62) 52%, rgba(0,0,0,0.82) 78%, rgba(0,0,0,0.92) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Text — no container, sits over the bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-6 sm:px-10 sm:pb-8 md:pb-9">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="editorial-label hero-enter hero-enter-1 bg-champagne/90 px-3 !text-charcoal">
            {messages.intro}
          </p>

          <div className="hero-enter hero-enter-2 mt-4 sm:mt-5">
            <h1 className="font-script text-[1.65rem] font-normal leading-[1.15] tracking-normal text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)] sm:text-3xl md:text-4xl">
              {couple.partnerOne}
            </h1>
            <p className="font-script mt-2.5 text-sm font-normal leading-none text-champagne drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] sm:mt-3 sm:text-base md:text-lg">
              weds
            </p>
            <h1 className="font-script mt-2.5 text-[1.65rem] font-normal leading-[1.15] tracking-normal text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)] sm:mt-3 sm:text-3xl md:text-4xl">
              {couple.partnerTwo}
            </h1>
          </div>

          <div className="hero-enter hero-enter-3 mt-5 flex items-center gap-4 sm:mt-6 sm:gap-5">
            <span className="h-px w-10 bg-champagne sm:w-14" aria-hidden="true" />
            <p className="font-body text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:text-xs">
              {displayDate.date} {displayDate.month} {displayDate.year}
            </p>
            <span className="h-px w-10 bg-champagne sm:w-14" aria-hidden="true" />
          </div>

          <div className="hero-enter hero-enter-4 mt-5 flex flex-col items-center gap-2 sm:mt-6">
            <span className="editorial-label !text-white/70 text-[0.55rem] drop-shadow-[0_1px_6px_rgba(0,0,0,0.65)]">
              Scroll to explore
            </span>
            <div className="scroll-indicator h-5 w-px bg-white/45" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
