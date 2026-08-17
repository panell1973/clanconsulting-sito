const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function IconTraining({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} {...svgProps}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5a3 3 0 0 1 0 6" />
      <path d="M18.5 14.5c1.9.9 3.2 2.6 3.4 4.5" />
    </svg>
  );
}

export function IconBdc({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} {...svgProps}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
      <path d="M3 21h18" />
    </svg>
  );
}

export function IconSoftSkills({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} {...svgProps}>
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12z" />
    </svg>
  );
}

export function IconVendita({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} {...svgProps}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

export function IconMystery({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} {...svgProps}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
      <path d="M8 11a3 3 0 0 1 3-3" />
    </svg>
  );
}

export function IconServiceDesign({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} {...svgProps}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </svg>
  );
}

export const serviceIcons = {
  training: IconTraining,
  bdc: IconBdc,
  "soft-skills": IconSoftSkills,
  vendita: IconVendita,
  "mystery-shopping": IconMystery,
  "service-design": IconServiceDesign,
} as const;

export type ServiceIconKey = keyof typeof serviceIcons;
