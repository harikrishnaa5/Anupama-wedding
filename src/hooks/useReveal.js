import { useEffect, useRef } from 'react'

/**
 * Observes an element and adds `is-visible` when it enters the viewport.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const { threshold = 0.18, rootMargin = '0px 0px -8% 0px', once = true } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          if (once) observer.unobserve(el)
        } else if (!once) {
          el.classList.remove('is-visible')
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}
