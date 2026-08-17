const aspectClasses = {
  "3/2": "aspect-[3/2]",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
} as const;

export type Aspect = keyof typeof aspectClasses;

export function aspectClass(aspect: Aspect) {
  return aspectClasses[aspect];
}

export default function ImagePlaceholder({
  aspect = "4/3",
  label,
  className = "",
}: {
  aspect?: Aspect;
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label ?? "Immagine in arrivo"}
      className={`flex ${aspectClasses[aspect]} w-full flex-col items-center justify-center gap-3 rounded-xl border border-primary/10 bg-gradient-to-br from-primary to-[#0A1D33] text-accent shadow-lg ${className}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="M21 15l-5-5-9 9" />
      </svg>
      {label && <p className="px-4 text-center text-xs text-white/60">{label}</p>}
    </div>
  );
}
