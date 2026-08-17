"use client";

import { useState } from "react";
import ImagePlaceholder, { Aspect, aspectClass } from "./ImagePlaceholder";

const dimensions: Record<Aspect, { width: number; height: number }> = {
  "3/2": { width: 1920, height: 1280 },
  "4/3": { width: 1600, height: 1200 },
  "16/9": { width: 1920, height: 1080 },
  "1/1": { width: 1200, height: 1200 },
  "3/4": { width: 1200, height: 1600 },
};

export default function Photo({
  src,
  alt,
  aspect = "4/3",
  overlay = "light",
  priority = false,
  zoom = false,
  className = "",
}: {
  src: string;
  alt: string;
  aspect?: Aspect;
  /** Overlay navy: light = 15%, medium = 25% */
  overlay?: "light" | "medium";
  /** true per l'immagine hero: eager loading */
  priority?: boolean;
  /** true dentro un elemento `group`: zoom della foto all'hover */
  zoom?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const { width, height } = dimensions[aspect];

  if (failed) {
    return <ImagePlaceholder aspect={aspect} className={className} />;
  }

  return (
    <div
      className={`relative ${aspectClass(aspect)} w-full overflow-hidden rounded-xl border border-primary/10 shadow-lg ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        onError={() => setFailed(true)}
        className={`absolute inset-0 h-full w-full object-cover ${
          zoom
            ? "transition-transform duration-500 ease-out group-hover:scale-105"
            : ""
        }`}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-primary ${
          overlay === "medium" ? "opacity-25" : "opacity-15"
        }`}
      />
    </div>
  );
}
