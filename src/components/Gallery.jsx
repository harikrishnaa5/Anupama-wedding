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
  const [second = '', third = ''] = photos.secondary || []

  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
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
              src={photos.featured}
              alt={`${couple.partnerOne} & ${couple.partnerTwo} — featured`}
              aspect="aspect-[4/5] md:aspect-[3/4]"
            />
          </Reveal>

          <div className="col-span-12 flex flex-col gap-4 md:col-span-5 md:gap-6 md:pt-16">
            <Reveal delay={1} variant="reveal-scale">
              <PhotoFrame
                src={second}
                alt={`${couple.partnerOne} & ${couple.partnerTwo} — memory`}
                aspect="aspect-[4/5]"
              />
            </Reveal>
            <Reveal delay={2} variant="reveal-scale">
              <PhotoFrame
                src={third}
                alt={`${couple.partnerOne} & ${couple.partnerTwo} — memory`}
                aspect="aspect-[4/5]"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
