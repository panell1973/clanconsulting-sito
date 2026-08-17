import { ReactNode } from "react";

export default function SectionTitle({
  eyebrow,
  children,
  align = "center",
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}
