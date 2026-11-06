import { useReveal } from '../hooks/useReveal'

export default function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  variant = 'reveal',
  ...props
}) {
  const ref = useReveal()
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : ''

  return (
    <Tag
      ref={ref}
      className={`${variant} ${delayClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  )
}
