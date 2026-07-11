interface ScrollVineProps {
  className?: string;
}

export default function ScrollVine({ className = "" }: ScrollVineProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-gold dark:text-combat-gold ${className}`}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.12">
        <path d="M20 180 C40 160 30 130 60 120 C90 110 110 140 140 130 C170 120 180 90 180 60" />
        <path d="M40 180 C60 160 50 140 80 130 C110 120 130 150 160 140" />
        <path d="M60 60 C80 40 110 50 120 80 C130 110 100 130 110 160" />
        <path d="M140 40 C160 60 150 90 120 100" />
        <circle cx="60" cy="120" r="3" fill="currentColor" />
        <circle cx="140" cy="130" r="3" fill="currentColor" />
        <circle cx="120" cy="80" r="3" fill="currentColor" />
        <circle cx="80" cy="130" r="2.5" fill="currentColor" />
      </g>
    </svg>
  );
}
