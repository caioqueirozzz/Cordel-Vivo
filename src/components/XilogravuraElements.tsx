/* Shared SVG illustration components inspired by northeastern Brazilian woodcut art */

export function CactusScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D6A34A" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F3E5C8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#78513B" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#78513B" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <rect width="600" height="500" fill="url(#sky)" />

      {/* Sun */}
      <circle cx="300" cy="180" r="70" fill="#D6A34A" opacity="0.85" />
      <circle cx="300" cy="180" r="58" fill="#D6A34A" opacity="0.6" />
      {/* Sun rays */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16
        const rad = (angle * Math.PI) / 180
        const x1 = 300 + Math.cos(rad) * 75
        const y1 = 180 + Math.sin(rad) * 75
        const x2 = 300 + Math.cos(rad) * 100
        const y2 = 180 + Math.sin(rad) * 100
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#D6A34A"
            strokeWidth={i % 2 === 0 ? 3 : 1.5}
            opacity="0.7"
          />
        )
      })}

      {/* Ground */}
      <ellipse cx="300" cy="440" rx="290" ry="30" fill="#78513B" opacity="0.15" />
      <rect x="0" y="420" width="600" height="80" fill="url(#ground)" />

      {/* Left main cactus */}
      <rect x="58" y="200" width="28" height="200" rx="14" fill="#211A17" />
      <rect x="30" y="250" width="28" height="70" rx="14" fill="#211A17" />
      <rect x="58" y="250" width="30" height="10" rx="5" fill="#211A17" />
      <rect x="86" y="260" width="28" height="60" rx="14" fill="#211A17" />
      <rect x="72" y="260" width="28" height="10" rx="5" fill="#211A17" />
      {/* Cactus spines */}
      {[230, 260, 290, 320, 350].map((y, i) => (
        <line key={i} x1={58} y1={y} x2={50} y2={y - 8} stroke="#211A17" strokeWidth="2" />
      ))}
      {[230, 260, 290, 320, 350].map((y, i) => (
        <line key={i} x1={86} y1={y} x2={94} y2={y - 8} stroke="#211A17" strokeWidth="2" />
      ))}

      {/* Right main cactus */}
      <rect x="514" y="170" width="32" height="230" rx="16" fill="#211A17" />
      <rect x="482" y="220" width="32" height="80" rx="16" fill="#211A17" />
      <rect x="514" y="225" width="32" height="10" rx="5" fill="#211A17" />
      <rect x="546" y="240" width="32" height="75" rx="16" fill="#211A17" />
      <rect x="530" y="240" width="30" height="10" rx="5" fill="#211A17" />
      {/* Spines */}
      {[200, 240, 280, 320, 360].map((y, i) => (
        <line key={i} x1={514} y1={y} x2={506} y2={y - 10} stroke="#211A17" strokeWidth="2" />
      ))}
      {[200, 240, 280, 320, 360].map((y, i) => (
        <line key={i} x1={546} y1={y} x2={554} y2={y - 10} stroke="#211A17" strokeWidth="2" />
      ))}

      {/* Small cactus left */}
      <rect x="148" y="310" width="18" height="110" rx="9" fill="#211A17" />
      <rect x="130" y="340" width="18" height="50" rx="9" fill="#211A17" />

      {/* Small cactus right */}
      <rect x="440" y="320" width="16" height="100" rx="8" fill="#211A17" />
      <rect x="456" y="345" width="16" height="45" rx="8" fill="#211A17" />

      {/* Cordel folhetos hanging */}
      <line x1="120" y1="100" x2="480" y2="100" stroke="#211A17" strokeWidth="2" />
      {/* Hanging strings */}
      {[155, 210, 265, 320, 375, 430].map((x, i) => (
        <line key={i} x1={x} y1={100} x2={x} y2={125} stroke="#211A17" strokeWidth="1" />
      ))}
      {/* Folheto cards */}
      {[
        { x: 140, color: '#B65232', text: '▲' },
        { x: 195, color: '#892E2B', text: '◆' },
        { x: 250, color: '#D6A34A', text: '★' },
        { x: 305, color: '#211A17', text: '❋' },
        { x: 360, color: '#78513B', text: '◉' },
        { x: 415, color: '#B65232', text: '✦' },
      ].map(({ x, color, text }, i) => (
        <g key={i}>
          <rect x={x} y={125} width={30} height={40} rx="2" fill={color} />
          <rect x={x + 3} y={128} width={24} height={34} rx="1" fill={color} opacity="0.7" stroke="#211A17" strokeWidth="0.5" />
          <text x={x + 15} y={150} textAnchor="middle" fill="#FFF7E8" fontSize="10" fontFamily="serif">{text}</text>
        </g>
      ))}

      {/* Birds */}
      {[{ x: 200, y: 60 }, { x: 230, y: 50 }, { x: 380, y: 55 }, { x: 410, y: 65 }].map(({ x, y }, i) => (
        <path
          key={i}
          d={`M${x},${y} Q${x + 8},${y - 8} ${x + 16},${y} Q${x + 8},${y + 2} ${x},${y}`}
          fill="#211A17"
          opacity="0.7"
        />
      ))}

      {/* Ground vegetation silhouettes */}
      <ellipse cx="180" cy="420" rx="30" ry="12" fill="#211A17" opacity="0.2" />
      <ellipse cx="420" cy="415" rx="25" ry="10" fill="#211A17" opacity="0.2" />
    </svg>
  )
}

export function CordelBorder({ className = '', color = '#211A17' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 800 60"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="800" height="60" fill="none" />
      <line x1="0" y1="4" x2="800" y2="4" stroke={color} strokeWidth="2.5" />
      <line x1="0" y1="56" x2="800" y2="56" stroke={color} strokeWidth="2.5" />
      {Array.from({ length: 40 }).map((_, i) => {
        const x = i * 20 + 10
        return (
          <g key={i}>
            <polygon points={`${x},22 ${x + 6},30 ${x},38 ${x - 6},30`} fill={color} opacity="0.7" />
          </g>
        )
      })}
    </svg>
  )
}

export function SunBurst({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="35" fill="#D6A34A" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24
        const rad = (angle * Math.PI) / 180
        const len = i % 3 === 0 ? 45 : i % 3 === 1 ? 35 : 25
        return (
          <line
            key={i}
            x1={100 + Math.cos(rad) * 38}
            y1={100 + Math.sin(rad) * 38}
            x2={100 + Math.cos(rad) * (38 + len)}
            y2={100 + Math.sin(rad) * (38 + len)}
            stroke="#D6A34A"
            strokeWidth={i % 3 === 0 ? 2.5 : 1.5}
            opacity="0.8"
          />
        )
      })}
    </svg>
  )
}

export function XilogravuraRooster({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Stylized rooster in woodcut style */}
      {/* Body */}
      <ellipse cx="100" cy="130" rx="45" ry="38" fill="#211A17" />
      {/* Wing detail */}
      <path d="M65 130 Q55 110 75 105 Q70 120 80 125" fill="#B65232" />
      {/* Tail feathers */}
      <path d="M145 120 L175 90 L170 125 L165 100 L155 130" fill="#211A17" />
      <path d="M145 125 L180 105 L172 135" fill="#211A17" opacity="0.7" />
      {/* Neck */}
      <rect x="88" y="88" width="24" height="45" rx="12" fill="#211A17" />
      {/* Head */}
      <circle cx="100" cy="82" r="22" fill="#211A17" />
      {/* Comb */}
      <path d="M88 65 Q92 52 96 62 Q100 48 104 62 Q108 52 112 65" fill="#B65232" />
      {/* Wattle */}
      <path d="M96 85 Q88 95 90 102" stroke="#B65232" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Eye */}
      <circle cx="107" cy="78" r="5" fill="#FFF7E8" />
      <circle cx="108" cy="78" r="2.5" fill="#211A17" />
      {/* Beak */}
      <path d="M115 82 L128 85 L115 89" fill="#D6A34A" />
      {/* Legs */}
      <line x1="88" y1="165" x2="82" y2="190" stroke="#211A17" strokeWidth="5" strokeLinecap="round" />
      <line x1="112" y1="165" x2="118" y2="190" stroke="#211A17" strokeWidth="5" strokeLinecap="round" />
      {/* Feet */}
      <path d="M70 190 L82 190 L80 183" stroke="#211A17" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M118 190 L130 190 L128 183" stroke="#211A17" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Hatching on body for woodcut feel */}
      <line x1="75" y1="125" x2="85" y2="145" stroke="#D6A34A" strokeWidth="1" opacity="0.3" />
      <line x1="82" y1="118" x2="92" y2="138" stroke="#D6A34A" strokeWidth="1" opacity="0.3" />
      <line x1="90" y1="115" x2="100" y2="135" stroke="#D6A34A" strokeWidth="1" opacity="0.3" />
    </svg>
  )
}

export function WoodcutFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 border-4 border-carvao pointer-events-none z-10">
        {/* Corner ornaments */}
        <svg className="absolute -top-2 -left-2 w-8 h-8" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M0 32 L0 0 L32 0" stroke="#211A17" strokeWidth="4" fill="none" />
          <circle cx="0" cy="0" r="4" fill="#B65232" />
        </svg>
        <svg className="absolute -top-2 -right-2 w-8 h-8" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M32 32 L32 0 L0 0" stroke="#211A17" strokeWidth="4" fill="none" />
          <circle cx="32" cy="0" r="4" fill="#B65232" />
        </svg>
        <svg className="absolute -bottom-2 -left-2 w-8 h-8" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M0 0 L0 32 L32 32" stroke="#211A17" strokeWidth="4" fill="none" />
          <circle cx="0" cy="32" r="4" fill="#B65232" />
        </svg>
        <svg className="absolute -bottom-2 -right-2 w-8 h-8" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M32 0 L32 32 L0 32" stroke="#211A17" strokeWidth="4" fill="none" />
          <circle cx="32" cy="32" r="4" fill="#B65232" />
        </svg>
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

export function DecorativeDivider({ className = '', inverted = false }: { className?: string; inverted?: boolean }) {
  const color = inverted ? '#F3E5C8' : '#211A17'
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <div className="flex-1 h-px" style={{ background: `${color}40` }} />
      <svg width="40" height="20" viewBox="0 0 40 20">
        <polygon points="20,2 26,10 20,18 14,10" fill="none" stroke={color} strokeWidth="1.5" />
        <circle cx="20" cy="10" r="3" fill={color} />
        <line x1="0" y1="10" x2="11" y2="10" stroke={color} strokeWidth="1" />
        <line x1="29" y1="10" x2="40" y2="10" stroke={color} strokeWidth="1" />
      </svg>
      <div className="flex-1 h-px" style={{ background: `${color}40` }} />
    </div>
  )
}
