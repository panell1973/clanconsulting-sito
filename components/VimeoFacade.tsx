"use client";

import { useState } from "react";

export default function VimeoFacade({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-primary/10 shadow-lg">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative flex aspect-video w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border border-primary/10 bg-gradient-to-br from-primary to-[#0A1D33] shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#F6F5F2 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary shadow-md transition-transform group-hover:scale-110">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 5.5v13l11-6.5-11-6.5z" />
        </svg>
      </span>
      <span className="relative text-sm font-semibold text-white/90">
        Guarda il video: {title}
      </span>
    </button>
  );
}
