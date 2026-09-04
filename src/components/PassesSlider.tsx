import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, X } from "lucide-react";

import { PASS_IMAGES } from "@/lib/passes";

export function PassesSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.8;
    let next = el.scrollLeft + dir * step;
    if (next > el.scrollWidth - el.clientWidth - 8) next = 0;
    if (next < 0) next = el.scrollWidth;
    el.scrollTo({ left: next, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused || lightbox !== null) return;
    const id = window.setInterval(() => scrollBy(1), 3500);
    return () => window.clearInterval(id);
  }, [paused, lightbox, scrollBy]);

  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => ((i ?? 0) + 1) % PASS_IMAGES.length);
      if (e.key === "ArrowLeft")
        setLightbox((i) => ((i ?? 0) - 1 + PASS_IMAGES.length) % PASS_IMAGES.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="reviews" className="bg-secondary py-20 text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-brand">
            <Star className="h-3.5 w-3.5 fill-brand" /> Real learners. Real results.
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Real SkillWise passes
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Celebrating genuine SkillWise Driving Academy pupils who achieved their driving test
            pass.
          </p>
        </div>
      </div>

      <div
        className="relative mt-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PASS_IMAGES.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightbox(i)}
              aria-label={`View pass photo ${i + 1}`}
              className="group relative w-64 shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:w-72"
            >
              <img
                src={src}
                alt={`SkillWise pupil passed their driving test — photo ${i + 1}`}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-foreground">
                Passed
              </span>
            </button>
          ))}
        </div>

        <button
          aria-label="Previous"
          onClick={() => scrollBy(-1)}
          className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/90 text-foreground shadow-lg transition hover:bg-background"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next"
          onClick={() => scrollBy(1)}
          className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/90 text-foreground shadow-lg transition hover:bg-background"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pass photo"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              aria-label="Close"
              onClick={() => setLightbox(null)}
              className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-background text-foreground shadow-lg"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={PASS_IMAGES[lightbox]}
              alt={`SkillWise pupil passed their driving test — photo ${lightbox + 1}`}
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
