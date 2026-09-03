function Logo({ size = 36, showText = true }) {
  return (
    <div className="logo" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="logoStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>

        {/* Background rounded squircle */}
        <rect width="40" height="40" rx="11" fill="url(#logoGrad)" />

        {/* V & D Modern Monogram */}
        {/* 'V' stroke */}
        <path
          d="M10 13L17.5 27L21 20"
          stroke="#ffffff"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 'D' bow combining with the right vertex */}
        <path
          d="M21 13H24C27.866 13 31 16.134 31 20C31 23.866 27.866 27 24 27H21"
          stroke="#ffffff"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dynamic accent dot */}
        <circle cx="21" cy="13" r="1.8" fill="url(#logoStroke)" />
      </svg>
      {showText && (
        <span className="logo__text" style={{ fontWeight: 700, fontSize: "16px", letterSpacing: "-0.01em", color: "var(--text-strong)" }}>
          Vishal <span style={{ fontWeight: 500, color: "var(--text-mute)" }}>Dhangare</span>
        </span>
      )}
    </div>
  );
}

export default Logo;
