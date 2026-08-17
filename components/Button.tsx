import Link from "next/link";
import { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants = {
  primary: "bg-accent text-primary hover:bg-[#c69a3e]",
  outline:
    "border border-current text-primary hover:bg-primary hover:text-white",
  outlineLight: "border border-white/20 text-white hover:bg-white/10",
} as const;

type Variant = keyof typeof variants;

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
