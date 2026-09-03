import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Car,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Search,
  Star,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Award,
  Users,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import { getPriceForPostcode, type PriceSet } from "@/lib/postcode-pricing";
import heroImg from "@/assets/hero-driving.jpg";
import instructorImg from "@/assets/instructor.jpg";
import logoAsset from "@/assets/skillwise-logo.jpg.asset.json";
import { PassesSlider } from "@/components/PassesSlider";
import { ResourcesSection } from "@/components/ResourcesSection";

const SITE_URL = "https://www.skillwisedriving.co.uk";
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/95e8e967-6662-4f11-89aa-54c7fe683be9/id-preview-248bcaff--1fa1615d-f5b3-4e94-af7c-df3df163f391.lovable.app-1784638698227.png";

const SEO_TITLE = "Manual & Automatic Driving Lessons Rochdale | SkillWise Driving Academy";
const SEO_DESCRIPTION =
  "SkillWise Driving Academy: patient, DVSA-approved manual and automatic driving lessons in Rochdale, Oldham and selected Manchester areas. Check your postcode price and send us an enquiry, or WhatsApp 07908 521 258.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: SEO_TITLE },
      { name: "description", content: SEO_DESCRIPTION },
      {
        name: "keywords",
        content:
          "driving lessons Rochdale, driving lessons Oldham, driving instructor Manchester, driving school Chadderton, intensive driving course Rochdale, automatic driving lessons Oldham",
      },
      { property: "og:title", content: SEO_TITLE },
      { property: "og:description", content: SEO_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SEO_TITLE },
      { name: "twitter:description", content: SEO_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "geo.region", content: "GB-RCH" },
      { name: "geo.placename", content: "Rochdale, Greater Manchester" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DrivingSchool",
          "@id": SITE_URL + "/#business",
          name: "SkillWise Driving Academy",
          url: SITE_URL + "/",
          image: OG_IMAGE,
          telephone: "+447908521258",
          priceRange: "££",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Rochdale",
            addressRegion: "Greater Manchester",
            addressCountry: "GB",
          },
          areaServed: [
            "Rochdale",
            "Heywood",
            "Littleborough",
            "Milnrow",
            "Oldham",
            "Chadderton",
            "Royton",
            "Shaw",
            "Saddleworth",
            "Manchester",
          ].map((name) => ({ "@type": "City", name })),
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "07:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "08:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "09:00",
              closes: "16:00",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Driving lessons and courses",
            itemListElement: [
              { area: "Rochdale", price: 70 },
              { area: "Oldham & Chadderton (OL1, OL2, OL3, OL4, OL8, OL9)", price: 76 },
              { area: "Manchester (approved M postcode districts)", price: 76 },
            ].map((o) => ({
              "@type": "Offer",
              name: `2 hour driving lesson — ${o.area}`,
              price: o.price,
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
            })),
          },
        }),
      },
    ],
  }),
});

// Always display the phone number as "07908 521 258" everywhere on the site.
// PHONE_HREF/WHATSAPP_HREF can keep the technical digit-only format behind the scenes.
const PHONE_NUMBER = "07908 521 258";
const PHONE_HREF = "tel:+447908521258";
const WHATSAPP_HREF = "https://wa.me/447908521258";
const EMAIL = "info@skillwisedriving.co.uk";
const WEBSITE = "www.skillwisedriving.co.uk";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <PostcodeSection />
      <StatsBar />
      <ServicesSection />
      <PassesSlider />
      <WhyChooseSection />
      <NervousLearnersSection />
      <InstructorSection />
      <AreasSection />
      <ResourcesSection />

      <BookingSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  const links = [
    { href: "#pricing", label: "Prices" },
    { href: "#services", label: "Driving Lessons" },
    { href: "#why", label: "Why Us" },
    { href: "#areas", label: "Areas" },
    { href: "#resources", label: "Learning Hub" },
    { href: "#reviews", label: "Reviews" },
    { href: "#book", label: "Enquire" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logoAsset.url}
            alt="SkillWise Driving Academy logo"
            className="h-12 w-12 shrink-0 rounded-xl object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-semibold leading-none tracking-tight">
              SkillWise
            </span>
            <span className="block truncate text-xs font-semibold uppercase tracking-widest text-brand">
              Driving Academy®
            </span>
          </span>
        </a>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition hover:opacity-90 sm:inline-flex"
          >
            <Phone className="h-4 w-4" /> Call now
          </a>
          <a
            href="#book"
            className="hidden items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-brand-foreground shadow-brand transition hover:opacity-95 sm:inline-flex"
          >
            Check Availability
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col p-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-foreground/90 hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-md bg-gradient-brand px-3 py-3 text-center text-sm font-medium text-brand-foreground"
            >
              Check Availability
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-ink text-white">
      <div className="absolute inset-0 opacity-30">
        <img
          src={heroImg}
          alt="Learner driver smiling in a red SkillWise driving school car"
          width={1600}
          height={1100}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:py-24 lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5 text-brand" /> Rochdale • Manchester • Greater
            Manchester
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Pass first time with <span className="text-brand">SkillWise Driving</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
            Friendly, patient DVSA-approved instructors teaching manual and automatic lessons.
            Honest area-based pricing — Rochdale or selected Manchester postcodes. 2-hour lessons
            shown up front, because that's how pupils learn best. Send your enquiry in under 60
            seconds and we'll confirm instructor availability.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-brand transition hover:scale-[1.02]"
            >
              <Search className="h-4 w-4" /> Check my postcode price
            </a>
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              Check Availability
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 fill-brand text-brand" /> 4.9 / 5 (600+ reviews)
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" /> DVSA-approved
            </span>
            <span className="inline-flex items-center gap-2">
              <Award className="h-4 w-4 text-brand" /> Strong first-time pass record
            </span>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}

/* ---------------- Postcode search + pricing ---------------- */
function PostcodeSection() {
  const [postcode, setPostcode] = useState("");
  const [result, setResult] = useState<{
    valid: boolean;
    priceSet: PriceSet | null;
    normalized: string;
    inCoverage: boolean;
  } | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setResult(getPriceForPostcode(postcode));
  }

  return (
    <section id="pricing" className="relative -mt-10 pb-16 sm:-mt-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-brand sm:p-8">
          <div className="mb-5">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Check your postcode price
            </h2>
          </div>
          <p className="mb-5 text-sm text-muted-foreground">
            Enter your postcode (e.g.{" "}
            <span className="font-mono font-semibold text-foreground">OL16 1AB</span>) and we'll
            show your exact local prices. We show 2-hour prices up front because that's how we
            recommend pupils learn.
          </p>

          <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand" />
              <input
                aria-label="Your postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="Enter your postcode…"
                maxLength={10}
                className="h-14 w-full rounded-xl border-2 border-border bg-background pl-12 pr-4 font-mono text-base font-semibold uppercase tracking-widest outline-none transition focus:border-brand"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 font-medium text-brand-foreground shadow-brand transition hover:scale-[1.02]"
            >
              <Search className="h-5 w-5" /> Get my price
            </button>
          </form>

          {result ? (
            <PriceResult result={result} />
          ) : (
            <p className="mt-5 rounded-xl border border-dashed border-border bg-muted/40 p-4 text-sm text-muted-foreground">
              Enter your postcode above to see your lesson prices — 1 hour, 2 hours, block bookings,
              intensive courses and test day packages.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function PriceResult({
  result,
}: {
  result: { valid: boolean; priceSet: PriceSet | null; normalized: string; inCoverage: boolean };
}) {
  if (!result.valid) {
    return (
      <div className="mt-5 rounded-xl border-2 border-destructive/40 bg-destructive/5 p-4 text-sm font-semibold text-destructive">
        That doesn't look like a valid UK postcode. Try something like{" "}
        <span className="font-mono">OL16 1AB</span>.
      </div>
    );
  }
  if (!result.inCoverage || !result.priceSet) {
    return (
      <div className="mt-6 overflow-hidden rounded-2xl border-2 border-brand/30 bg-gradient-to-br from-brand/5 to-transparent">
        <div className="p-6">
          <div className="text-xs font-medium uppercase tracking-widest text-brand">
            {result.normalized}
          </div>
          <div className="mt-1 font-display text-2xl font-semibold tracking-tight">
            Outside our standard coverage
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            We currently cover Rochdale, Oldham and selected Manchester postcodes. Contact us and we
            may still be able to help.
          </p>
        </div>
        <a
          href="#book"
          className="flex items-center justify-center gap-2 bg-secondary py-3 text-sm font-medium text-secondary-foreground transition hover:opacity-90"
        >
          Get in touch <span aria-hidden>→</span>
        </a>
      </div>
    );
  }
  const p = result.priceSet;
  const items = [
    { label: "1 Hour Driving Lesson", price: `£${p.oneHour}` },
    { label: "2 Hour Driving Lesson", price: `£${p.twoHours}`, popular: true },
    { label: "10 Hour Block Booking", price: `£${p.block10}` },
    { label: "Refresher Lessons", price: `£${p.refresherPerHour}/hr` },
    { label: "Motorway Training", price: `£${p.motorway2Hours} / 2 Hours` },
    { label: "Pass Plus", price: `£${p.passPlus6Hours} / 6 Hours` },
    { label: "Intensive Crash Course", price: `£${p.intensive10Hours} / 10 Hours` },
    { label: "Test Day Package", price: `£${p.testDay}` },
  ];
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border-2 border-brand/30 bg-gradient-to-br from-brand/5 to-transparent">
      <div className="p-6">
        <div className="font-display text-2xl font-semibold tracking-tight">Your prices</div>
        <div className="mt-1 text-sm text-muted-foreground">
          Manual or automatic — choose your transmission when you enquire.
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className={`relative rounded-xl border p-4 ${
                item.popular
                  ? "border-brand bg-brand text-brand-foreground shadow-brand"
                  : "border-border bg-card"
              }`}
            >
              {item.popular && (
                <span className="absolute -top-2 left-3 inline-flex items-center gap-1 rounded-full bg-foreground px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-background">
                  <Star className="h-3 w-3 fill-current" /> Most popular
                </span>
              )}
              <div className="text-xs font-semibold uppercase tracking-widest opacity-80">
                {item.label}
              </div>
              <div className="mt-1 font-display text-2xl font-semibold">{item.price}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          We recommend 2-hour lessons to allow more time for practice, development and consistent
          progress.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          Test Day Package: a minimum of 6 hours of driving lessons with SkillWise Driving Academy
          must be completed before test day. Completing the minimum 6 hours does not guarantee use
          of a SkillWise vehicle for the practical test — the pupil must be assessed by their
          SkillWise instructor as safe and test-ready. The DVSA practical driving test fee is not
          included.
        </p>
      </div>
      <a
        href="#book"
        className="flex items-center justify-center gap-2 bg-secondary py-3 text-sm font-medium text-secondary-foreground transition hover:opacity-90"
      >
        Check availability at this price <span aria-hidden>→</span>
      </a>
    </div>
  );
}

/* ---------------- Stats bar ---------------- */
function StatsBar() {
  const stats = [
    { icon: Users, value: "5,000+", label: "Learners taught" },
    { icon: Award, value: "Strong", label: "First-time pass record" },
    { icon: Star, value: "4.9★", label: "Average rating" },
    { icon: Clock, value: "12 yrs", label: "On the road" },
  ];
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/20 text-brand">
              <s.icon className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <div className="font-display text-2xl font-semibold tracking-tight">{s.value}</div>
              <div className="truncate text-xs font-semibold uppercase tracking-widest text-white/70">
                {s.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function ServicesSection() {
  const services = [
    {
      title: "Beginner Lessons",
      desc: "Zero-experience friendly. We start with cockpit drill, controls and moving off in a calm car park.",
      badge: "Most popular",
    },
    {
      title: "Intensive Courses",
      desc: "Pass in 1–2 weeks with structured 4–6 hour daily sessions and a fast-track practical test.",
      badge: "Fast track",
    },
    {
      title: "Refresher Lessons",
      desc: "Already have a licence but rusty? Rebuild confidence on motorways, roundabouts and parking.",
      badge: "Any level",
    },
    {
      title: "Pass Plus",
      desc: "Advanced post-test training. Save on insurance and drive safely in all conditions.",
      badge: "Post-test",
    },
    {
      title: "Motorway Lessons",
      desc: "Learn to merge, lane discipline and safe speeds with a fully qualified instructor.",
      badge: "New drivers",
    },
    {
      title: "Mock Test",
      desc: "Full 40-minute DVSA-style mock in the test area with detailed feedback.",
      badge: "Test ready",
    },
  ];
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Our lessons
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Choose the lesson that fits you
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every lesson is tailored — but here's how most learners get started.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-brand"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-brand">
                  <Car className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-muted px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-foreground/70">
                  {s.badge}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <a
                href="#book"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
              >
                Check availability <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why choose ---------------- */
function WhyChooseSection() {
  const items = [
    {
      icon: ShieldCheck,
      title: "DVSA-approved",
      desc: "Fully qualified & DBS-checked instructors.",
    },
    {
      icon: Award,
      title: "95% pass rate",
      desc: "Proven, structured lesson plans that get results.",
    },
    {
      icon: Clock,
      title: "Flexible hours",
      desc: "Evenings, weekends and school-run friendly slots.",
    },
    {
      icon: MapPin,
      title: "Postcode pricing",
      desc: "Honest rates — cheaper if you're closer to Rochdale.",
    },
    {
      icon: Users,
      title: "Patient teaching",
      desc: "Nervous learners welcome. Learn at your own pace.",
    },
    {
      icon: CheckCircle2,
      title: "No hidden fees",
      desc: "Pay by the hour or save more with a block booking.",
    },
  ];
  return (
    <section id="why" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Why SkillWise
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to pass — nothing you don't
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                <i.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold">{i.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Nervous learners ---------------- */
function NervousLearnersSection() {
  const points = [
    "Calm instruction",
    "Structured lessons",
    "Patient teaching",
    "Clear explanations",
    "Confidence building",
    "Progressive learning",
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-brand">
              Nervous learners
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Nervous about driving? You're in the right place.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Plenty of our pupils start out anxious behind the wheel. Every SkillWise instructor is
              trained to teach calmly and patiently, building your confidence one step at a time —
              with no judgement and no rush.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm font-semibold">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Instructors ----------------
   To grow the team, add entries to INSTRUCTORS below: name, role,
   transmission ("Manual" / "Automatic" / "Manual & Automatic") and the
   areas they cover. The section renders any number of profiles.        */
const INSTRUCTORS = [
  {
    name: "Bilal",
    role: "Founder / Lead Instructor",
    transmission: "Manual",
    areas: "Rochdale, Heywood, Oldham & Chadderton",
  },
];

function InstructorSection() {
  return (
    <section id="instructors" className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div
            className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-gradient-brand"
            aria-hidden
          />
          <img
            src={instructorImg}
            width={1000}
            height={1000}
            loading="lazy"
            alt="SkillWise Driving Academy instructor giving a thumbs up next to a red car"
            className="relative aspect-square w-full rounded-3xl object-cover shadow-brand"
          />
        </div>
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Our instructors
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Calm, patient and always on your side
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our instructors teach learners across Rochdale and selected Manchester areas. Every
            lesson is one-to-one in a dual-controlled car, in the same area you'll sit your test.
            Your SkillWise instructor is allocated by our team, subject to availability.
          </p>
          <ul className="mt-6 grid gap-3">
            {[
              "DVSA-approved instructors",
              "Manual & automatic lessons (automatic subject to instructor availability)",
              "Free pick-up & drop-off in Rochdale",
              "Female instructors available on request",
            ].map((li) => (
              <li key={li} className="flex items-start gap-3 text-sm font-semibold">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>{li}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {INSTRUCTORS.map((i) => (
              <div key={i.name} className="rounded-2xl border border-border bg-card p-4">
                <div className="font-display text-lg font-semibold">{i.name}</div>
                <div className="text-xs font-medium uppercase tracking-widest text-brand">
                  {i.role}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {i.transmission} · {i.areas}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground hover:opacity-90"
            >
              <Phone className="h-4 w-4" /> {PHONE_NUMBER}
            </a>
            <a
              href={WHATSAPP_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Enquiry form ---------------- */
const AVAILABILITY_OPTIONS = [
  "Weekday mornings",
  "Weekday afternoons",
  "Weekday evenings",
  "Saturdays",
  "Sundays",
];

function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    postcode: "",
    transmission: "Manual",
    lessonType: "Beginner Lessons",
    availability: [] as string[],
    notes: "",
  });

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function toggleAvailability(option: string) {
    setForm((f) => ({
      ...f,
      availability: f.availability.includes(option)
        ? f.availability.filter((a) => a !== option)
        : [...f.availability, option],
    }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="book" className="relative overflow-hidden bg-background py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-brand">Enquiry</span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Request Your Driving Lesson
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us a little about what you're looking for and your availability. SkillWise Driving
            Academy will review your enquiry and usually get back to you within 4 working hours with
            instructor availability.
          </p>
          <p className="mt-3 text-muted-foreground">
            We provide manual and automatic driving lessons across Rochdale and selected Manchester
            areas.
          </p>
          <p className="mt-3 text-muted-foreground">Prefer to talk? Call or WhatsApp us.</p>
          <div className="mt-8 grid gap-4">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition hover:border-brand"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
                <Phone className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Call us
                </div>
                <div className="truncate font-display text-lg font-semibold">{PHONE_NUMBER}</div>
              </div>
            </a>
            <a
              href={WHATSAPP_HREF}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition hover:border-brand"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-whatsapp text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  WhatsApp
                </div>
                <div className="truncate font-display text-lg font-semibold">
                  Message us instantly
                </div>
              </div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition hover:border-brand"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Email
                </div>
                <div className="truncate font-display text-lg font-semibold">{EMAIL}</div>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                <MapPin className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Coverage
                </div>
                <div className="truncate font-display text-lg font-semibold">
                  Serving Rochdale &amp; Manchester
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-brand sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-brand/10 text-brand">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold">
                Thanks, {form.name || "learner"}!
              </h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                We've received your enquiry — this is not a confirmed lesson yet. SkillWise Driving
                Academy will review it and contact you on{" "}
                <span className="font-semibold text-foreground">{form.phone}</span> within 4 working
                hours with instructor availability.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full bg-secondary px-5 py-2 text-sm font-medium text-secondary-foreground"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="input"
                    placeholder="Jane Smith"
                    maxLength={80}
                  />
                </Field>
                <Field label="Mobile number">
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="input"
                    placeholder="07…"
                    maxLength={20}
                  />
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Postcode">
                  <input
                    required
                    value={form.postcode}
                    onChange={(e) => update("postcode", e.target.value)}
                    className="input font-mono uppercase tracking-widest"
                    placeholder="OL16 1AB"
                    maxLength={10}
                  />
                </Field>
                <Field label="Transmission">
                  <select
                    value={form.transmission}
                    onChange={(e) => update("transmission", e.target.value)}
                    className="input"
                  >
                    <option>Manual</option>
                    <option>Automatic</option>
                  </select>
                </Field>
              </div>
              <p className="-mt-1 text-xs text-muted-foreground">
                Automatic lessons subject to instructor availability.
              </p>
              <Field label="Lesson type">
                <select
                  value={form.lessonType}
                  onChange={(e) => update("lessonType", e.target.value)}
                  className="input"
                >
                  <option>Beginner Lessons</option>
                  <option>Intensive Course</option>
                  <option>Refresher Lessons</option>
                  <option>Pass Plus</option>
                  <option>Motorway Lessons</option>
                  <option>Mock Test</option>
                </select>
              </Field>
              <fieldset>
                <legend className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-foreground/70">
                  General availability
                </legend>
                <div className="flex flex-wrap gap-2">
                  {AVAILABILITY_OPTIONS.map((option) => {
                    const active = form.availability.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={active}
                        onClick={() => toggleAvailability(option)}
                        className={`rounded-full border-2 px-4 py-2 text-sm font-medium transition ${
                          active
                            ? "border-brand bg-brand text-brand-foreground"
                            : "border-border bg-background text-foreground/80 hover:border-brand/50"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
              <Field label="Notes / message">
                <p className="mb-2 text-xs font-normal normal-case tracking-normal text-muted-foreground">
                  Please tell us anything else that will help us with your enquiry, including your
                  previous driving experience, whether you have passed your theory test, whether you
                  have a practical test booked and, if applicable, your test date and test centre.
                </p>
                <textarea
                  rows={4}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className="input min-h-28"
                  placeholder="Previous experience, theory passed, practical test date/test centre and anything else we should know…"
                  maxLength={800}
                />
              </Field>
              <button
                type="submit"
                className="mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-brand text-base font-semibold uppercase tracking-widest text-brand-foreground shadow-brand transition hover:scale-[1.01]"
              >
                Check availability
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Submitting this form is an enquiry, not a confirmed lesson. Our team will confirm
                instructor availability before anything is booked. We never share your details.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-foreground/70">
        {label}
      </span>
      {children}
      <style>{`.input{width:100%;height:48px;border-radius:12px;border:2px solid var(--color-border);background:var(--color-background);padding:0 14px;font-size:15px;outline:none;transition:border-color .15s}.input:focus{border-color:var(--color-brand)}textarea.input{padding:12px 14px;height:auto}`}</style>
    </label>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-secondary py-12 text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="SkillWise Driving Academy logo"
              className="h-12 w-12 rounded-xl bg-white object-contain p-1"
            />
            <div>
              <div className="font-display text-lg font-semibold">SkillWise</div>
              <div className="text-xs font-medium uppercase tracking-widest text-brand">
                Driving Academy®
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Calm, structured manual and automatic driving lessons in Rochdale and selected
            Manchester areas, with a strong record of first-time passes.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a href="#pricing" className="hover:text-white">
                Prices
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Driving Lessons
              </a>
            </li>
            <li>
              <a href="#areas" className="hover:text-white">
                Areas we cover
              </a>
            </li>
            <li>
              <a href="#resources" className="hover:text-white">
                Learning hub
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-white">
                Reviews
              </a>
            </li>
            <li>
              <a href="#book" className="hover:text-white">
                Send an enquiry
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a href={PHONE_HREF} className="hover:text-white">
                {PHONE_NUMBER}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-white">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={`https://${WEBSITE}`} className="hover:text-white">
                {WEBSITE}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_HREF} className="hover:text-white">
                WhatsApp us
              </a>
            </li>
            <li>Serving Rochdale &amp; Manchester</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest">Hours</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>Mon – Fri: 7am – 9pm</li>
            <li>Saturday: 8am – 6pm</li>
            <li>Sunday: 9am – 4pm</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl space-y-2 border-t border-white/10 px-4 pt-6 text-center text-xs text-white/50 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} SkillWise Driving Academy. All rights reserved.</p>
        <p>SkillWise Driving Academy® is a registered trade mark in the United Kingdom.</p>
      </div>
    </footer>
  );
}

/* ---------------- Floating buttons ---------------- */
function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP_HREF}
        aria-label="Chat on WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-brand transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="pointer-events-none absolute right-16 rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground opacity-0 transition group-hover:opacity-100">
          WhatsApp
        </span>
      </a>
      <a
        href={PHONE_HREF}
        aria-label="Call SkillWise Driving Academy"
        className="group grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-brand-foreground shadow-brand transition hover:scale-110"
      >
        <Phone className="h-6 w-6" />
        <span className="pointer-events-none absolute right-16 rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground opacity-0 transition group-hover:opacity-100">
          Call now
        </span>
      </a>
    </div>
  );
}

/* ---------------- Areas we cover (local SEO) ---------------- */
const AREAS = [
  {
    town: "Driving lessons in Rochdale",
    price: "£70 / 2 hours (£35 per hour)",
    blurb:
      "Our home patch. Lessons cover Rochdale town centre, Heywood, Castleton, Norden, Milnrow and Littleborough, with mock tests on the routes used by Rochdale test centre.",
  },
  {
    town: "Driving lessons in Oldham & Chadderton",
    price: "£76 / 2 hours (£38 per hour)",
    blurb:
      "Oldham, Chadderton, Royton, Shaw, Failsworth and Saddleworth learners get free pick-up from home, college or work, plus practice on the hills and tram crossings examiners love.",
  },
  {
    town: "Driving lessons in Manchester",
    price: "£76 / 2 hours (£38 per hour)",
    blurb:
      "City-centre traffic, bus lanes and multi-lane roundabouts across our approved Manchester postcode areas — taught calmly in a dual-controlled car.",
  },
];

function AreasSection() {
  return (
    <section id="areas" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-medium uppercase tracking-widest text-brand">
          Areas we cover
        </span>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Driving lessons in Rochdale, Oldham & Greater Manchester
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          SkillWise Driving Academy teaches learner drivers across Rochdale and selected Manchester
          areas. Enter your postcode and our checker shows your exact local prices. Every lesson is
          one-to-one, manual or automatic, and taught by a DVSA-approved SkillWise instructor —
          subject to instructor availability.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {AREAS.map((a) => (
            <article key={a.town} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">{a.town}</h3>
              <p className="mt-3 text-sm font-medium text-brand">{a.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{a.blurb}</p>
              <a
                href="#pricing"
                className="mt-4 inline-flex text-sm font-medium text-brand hover:underline"
              >
                Check your postcode price
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
          Also covering beginner lessons, refresher lessons, motorway training, Pass Plus, intensive
          crash courses and test-day packages. Not sure if we reach you? Call or WhatsApp{" "}
          {PHONE_NUMBER} and our team will confirm coverage.
        </p>
      </div>
    </section>
  );
}
