interface ShieldBadgeProps {
  size?: number;
  className?: string;
}

export default function ShieldBadge({ size = 80, className = "" }: ShieldBadgeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-gold dark:text-combat-gold ${className}`}
    >
      {/* Shield outline */}
      <path
        d="M60 8 L108 20 L108 64 C108 96 86 122 60 132 C34 122 12 96 12 64 L12 20 L60 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Inner shield line */}
      <path
        d="M60 16 L100 26 L100 64 C100 92 82 116 60 124 C38 116 20 92 20 64 L20 26 L60 16Z"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeOpacity="0.5"
        fill="none"
      />
      {/* World tree emblem inside shield */}
      <g stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
        <path d="M60 100 C60 90 57 84 58 78 C59 73 61 70 60 65 C58 60 55 56 52 52" />
        <path d="M60 65 C62 60 65 56 68 52" />
        <path d="M58 78 C61 74 64 72 68 70" />
        <path d="M52 52 C48 48 44 48 40 50" strokeDasharray="2 1" />
        <path d="M68 52 C72 48 78 48 82 50" />
        <path d="M60 100 C55 106 50 110 44 112" />
        <path d="M60 100 C65 106 70 110 76 112" />
      </g>
      {/* Laurel branches */}
      <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6">
        <path d="M16 70 C12 78 10 88 12 98" />
        <path d="M104 70 C108 78 110 88 108 98" />
        <ellipse cx="13" cy="76" rx="2" ry="3" fill="currentColor" />
        <ellipse cx="107" cy="76" rx="2" ry="3" fill="currentColor" />
        <ellipse cx="11" cy="86" rx="2" ry="3" fill="currentColor" />
        <ellipse cx="109" cy="86" rx="2" ry="3" fill="currentColor" />
      </g>
    </svg>
  );
}
