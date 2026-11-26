import wedding from '../config/wedding'
import Reveal from './Reveal'
import { LeafCorner } from './BotanicalDecor'

function PhotoFrame({ src, alt, className = '', aspect = 'aspect-[4/5]' }) {
  if (src) {
    return (
      <div className={`overflow-hidden ${aspect} ${className}`}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden border border-champagne/40 ${aspect} ${className}`}
      style={{
        background:
          'linear-gradient(145deg, #EAE5DA 0%, #F8F6F0 50%, #E8EBE4 100%)',
      }}
    >
      <div className="absolute inset-4 border border-champagne/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sage/50">
        <LeafCorner className="h-12 w-12" />
        <span className="editorial-label text-[0.55rem]">Photograph</span>
      </div>
    </div>
  )
}

export default function Gallery() {
  const { photos, couple } = wedding
  const sectionBg = photos.invitationBg || '/images/background-img.png'
  const [large = '', smallA = '', smallB = ''] = [
    ...(photos.secondary || []),
  ].filter(Boolean)

  return (
    <section className="relative overflow-hidden bg-[#f3eee6]">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${sectionBg}')` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[#fdfcf9]/55"
        aria-hidden="true"
      />

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

      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-10">
        <Reveal className="mb-12 text-center md:mb-16">
          <p className="editorial-label">Memories</p>
          <h2 className="mt-4 font-display text-3xl font-medium text-charcoal md:text-4xl">
            A few cherished moments
          </h2>
        </Reveal>

        {/* Editorial asymmetric layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <Reveal
            variant="reveal-scale"
            className="col-span-12 md:col-span-7"
          >
            <PhotoFrame
              src={large}
              alt={`${couple.partnerOne} & ${couple.partnerTwo} — featured`}
              aspect="aspect-[4/5] md:aspect-[3/4]"
            />
          </Reveal>

          {(smallA || smallB) && (
            <div className="col-span-12 flex flex-col gap-4 md:col-span-5 md:gap-6 md:pt-16">
              {smallA && (
                <Reveal delay={1} variant="reveal-scale">
                  <PhotoFrame
                    src={smallA}
                    alt={`${couple.partnerOne} & ${couple.partnerTwo} — memory`}
                    aspect="aspect-[4/5]"
                  />
                </Reveal>
              )}
              {smallB && (
                <Reveal delay={2} variant="reveal-scale">
                  <PhotoFrame
                    src={smallB}
                    alt={`${couple.partnerOne} & ${couple.partnerTwo} — memory`}
                    aspect="aspect-[4/5]"
                  />
                </Reveal>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
