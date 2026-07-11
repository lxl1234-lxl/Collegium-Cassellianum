export default function WorldTreeWatermark() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 200 200"
        className="w-[75vmin] h-[75vmin] opacity-[0.035] dark:opacity-[0.06] text-olive dark:text-combat-olive transition-colors duration-400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="1" />

        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M100 150 C100 138 96 130 98 120 C99 113 101 108 100 100 C98 93 94 88 90 82" />
          <path d="M100 100 C103 93 107 88 110 82" />
          <path d="M98 120 C102 115 107 112 112 108" />
          <path d="M90 82 C84 77 77 76 70 78" strokeDasharray="3 2" />
          <path d="M110 82 C117 77 126 76 134 79" />
          <path d="M100 150 C92 158 86 163 78 166" />
          <path d="M100 150 C108 158 114 163 122 166" />
          <path d="M100 150 C100 160 100 168 98 176" />
        </g>

        <g fill="currentColor">
          <ellipse cx="134" cy="79" rx="4" ry="2.5" transform="rotate(20 134 79)" />
          <ellipse cx="112" cy="108" rx="3.5" ry="2" transform="rotate(30 112 108)" />
          <ellipse cx="70" cy="78" rx="2.5" ry="1.5" transform="rotate(-20 70 78)" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
