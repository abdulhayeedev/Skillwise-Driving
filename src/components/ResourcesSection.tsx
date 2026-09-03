import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

import { GALLERY_CATEGORIES, GALLERY_ITEMS, type GalleryCategory } from "@/lib/gallery";

export function ResourcesSection() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = GALLERY_ITEMS.filter((i) => filter === "all" || i.category === filter);
  const active = openIndex === null ? null : items[openIndex];

  return (
    <section id="resources" className="bg-muted/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-medium uppercase tracking-widest text-brand">Learning hub</span>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Free lesson guides &amp; test-day help
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Everything we teach in the car, in one place — mirror setup, gear changes, test-day nerves and
          the full set of DVSA &ldquo;show me, tell me&rdquo; answers. Tap any card to read it full size.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setFilter(c.id);
                setOpenIndex(null);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === c.id
                  ? "border-brand bg-brand text-brand-foreground shadow-brand"
                  : "border-border bg-card text-foreground/80 hover:bg-muted"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setOpenIndex(i)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition hover:-translate-y-1 hover:border-brand/60 hover:shadow-brand"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/85 text-foreground opacity-0 backdrop-blur transition group-hover:opacity-100">
                <ZoomIn className="h-4 w-4" />
              </span>
              <span className="block border-t border-border px-4 py-3 text-sm font-medium">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
        >
          <div className="relative max-h-full w-full max-w-3xl overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              aria-label="Close"
              onClick={() => setOpenIndex(null)}
              className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-background text-foreground shadow-lg"
            >
              <X className="h-5 w-5" />
            </button>
            <img src={active.src} alt={active.title} className="w-full rounded-2xl" />
            <p className="mt-3 text-center text-sm font-medium text-background">{active.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
