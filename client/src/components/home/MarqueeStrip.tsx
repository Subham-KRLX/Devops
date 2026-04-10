'use client';

export function Marquee() {
  const text = 'NEW COLLECTION — SPARKSPIRIT — SS25 — SILENCE & FORM — ';
  const repeatedText = text.repeat(6);

  return (
    <div className="w-full py-5 bg-charcoal border-y border-white/[0.04] overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-label text-cream/40 tracking-[0.25em] text-[10px] md:text-[11px]">
          {repeatedText}
        </span>
        <span className="text-label text-cream/40 tracking-[0.25em] text-[10px] md:text-[11px]">
          {repeatedText}
        </span>
      </div>
    </div>
  );
}
