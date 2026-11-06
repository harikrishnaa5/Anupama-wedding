/**
 * Lightweight botanical / architectural line ornaments.
 * Stroke-based SVGs for a stationery feel.
 */

export function LeafCorner({ className = '', flip = false, style, ...props }) {
  return (
    <svg
      className={`${className} ${flip ? 'origin-center -scale-x-100' : ''}`.trim()}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={style}
      {...props}
    >
      <path
        d="M18 102 C28 72, 48 48, 88 28"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M42 90 C52 70, 68 54, 96 42"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M58 78 C66 64, 78 54, 98 48"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <ellipse
        cx="92"
        cy="30"
        rx="10"
        ry="5"
        transform="rotate(-35 92 30)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <ellipse
        cx="100"
        cy="44"
        rx="8"
        ry="4"
        transform="rotate(-20 100 44)"
        stroke="currentColor"
        strokeWidth="0.9"
      />
    </svg>
  )
}

export function BotanicalSpray({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 50 C50 20, 80 60, 100 35 C120 10, 150 50, 180 28"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M46 42 C52 30, 60 28, 68 36"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M90 38 C98 24, 110 26, 116 38"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M138 40 C146 26, 158 28, 166 40"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <circle cx="68" cy="34" r="2.2" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="116" cy="36" r="2.2" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="166" cy="38" r="2.2" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  )
}

export function OrnamentDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-champagne/80" />
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M7 1 L8.5 5.5 L13 7 L8.5 8.5 L7 13 L5.5 8.5 L1 7 L5.5 5.5 Z"
          stroke="currentColor"
          strokeWidth="0.9"
          className="text-champagne"
        />
      </svg>
      <span className="h-px w-10 bg-champagne/80" />
    </div>
  )
}

export function ThinFrame({ children, className = '', padding = 'p-6 md:p-10' }) {
  return (
    <div className={`relative ${className}`}>
      <div className={`frame-line ${padding}`}>{children}</div>
    </div>
  )
}
