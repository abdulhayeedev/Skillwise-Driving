import { createFileRoute } from "@tanstack/react-router";

import logoAsset from "@/assets/skillwise-logo.jpg";
import { OLDHAM } from "@/lib/postcode-pricing";

const EMAIL = "info@skillwisedriving.co.uk";
const PHONE_NUMBER = "07908 521 258";
const PHONE_HREF = "tel:+447908521258";
const WHATSAPP_HREF = "https://wa.me/447908521258";

export const Route = createFileRoute("/driving-lessons-oldham")({
  component: OldhamPage,
  head: () => ({
    meta: [
      { title: "Driving Lessons in Oldham & Chadderton | SkillWise Driving Academy" },
      {
        name: "description",
        content:
          "Manual and automatic driving lessons in Oldham, Chadderton, Royton, Shaw, Failsworth and Saddleworth from SkillWise Driving Academy. DVSA-approved, patient instructors, honest postcode pricing from £38/hour.",
      },
      { property: "og:title", content: "Driving Lessons in Oldham & Chadderton | SkillWise Driving Academy" },
      {
        property: "og:description",
        content:
          "Manual and automatic driving lessons in Oldham, Chadderton, Royton, Shaw, Failsworth and Saddleworth from SkillWise Driving Academy. DVSA-approved, patient instructors, honest postcode pricing from £38/hour.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.skillwisedriving.co.uk/driving-lessons-oldham" },
    ],
  }),
});

function LessonPageHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logoAsset}
            alt="SkillWise Driving Academy logo"
            className="h-10 w-10 rounded-lg object-contain"
          />
          <span className="font-display text-sm font-semibold leading-tight sm:text-base">
            SkillWise
            <span className="block text-xs font-semibold uppercase tracking-widest text-brand">
              Driving Academy®
            </span>
          </span>
        </a>
        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium sm:inline-flex"
          >
            {PHONE_NUMBER}
          </a>
          <a
            href="/#book"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-brand-foreground shadow-brand"
          >
            Check Availability
          </a>
        </div>
      </div>
    </header>
  );
}

function LessonPageFooter() {
  return (
    <footer className="bg-gradient-ink py-10 text-white">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-white/70 sm:px-6">
        <p>
          <a href="/" className="font-medium text-white hover:underline">
            SkillWise Driving Academy®
          </a>{" "}
          · {PHONE_NUMBER} ·{" "}
          <a href={`mailto:${EMAIL}`} className="hover:underline">
            {EMAIL}
          </a>
        </p>
        <p className="mt-3">
          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>
          {" · "}
          <a href="/terms-and-cancellation-policy" className="hover:text-white">
            Terms &amp; Cancellation Policy
          </a>
          {" · "}
          <a href="/driving-lessons-rochdale" className="hover:text-white">
            Driving Lessons in Rochdale
          </a>
          {" · "}
          <a href="/driving-lessons-manchester" className="hover:text-white">
            Driving Lessons in Manchester
          </a>
        </p>
        <p className="mt-3 text-xs text-white/50">
          © {new Date().getFullYear()} SkillWise Driving Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function OldhamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LessonPageHeader />

      <section className="bg-gradient-ink py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Oldham &amp; Chadderton
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Driving Lessons in Oldham &amp; Chadderton
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            SkillWise Driving Academy teaches learners across Oldham and Chadderton. Calm,
            structured manual and automatic lessons, DVSA-approved instructors, and honest
            postcode-based pricing — no surprises.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="/#pricing"
              className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-brand"
            >
              Check your postcode price
            </a>
            <a
              href="/#book"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Learn on Oldham's real roads
            </h2>
            <p className="mt-4 text-muted-foreground">
              Learners in Oldham, Chadderton, Royton, Shaw, Failsworth and Saddleworth can have
              pick-up arrangements agreed with their SkillWise instructor. Lessons can include
              Oldham's hill starts, busy junctions, tram crossings and local test-area roads where
              appropriate, so you practise the kind of driving you'll actually meet.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether you're a complete beginner or coming back after a break, lessons are
              one-to-one in a dual-controlled tuition vehicle, taught at a pace that suits you.
              Nervous learners are genuinely welcome here — calm instruction and clear explanations
              are the whole approach, not just a slogan.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Oldham and Chadderton pricing applies to postcodes OL1, OL2, OL3, OL4, OL8 and OL9.
              Not sure which applies to you? Enter your postcode in the price checker.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold">Oldham &amp; Chadderton pricing</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Clear rates for OL1, OL2, OL3, OL4, OL8 and OL9.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border p-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  1 Hour
                </div>
                <div className="mt-1 font-display text-2xl font-semibold">£{OLDHAM.oneHour}</div>
              </div>
              <div className="rounded-xl border border-brand bg-brand p-4 text-brand-foreground">
                <div className="text-xs font-semibold uppercase tracking-widest opacity-80">
                  2 Hours · Most popular
                </div>
                <div className="mt-1 font-display text-2xl font-semibold">£{OLDHAM.twoHours}</div>
              </div>
              <div className="rounded-xl border border-border p-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  10 Hour Block
                </div>
                <div className="mt-1 font-display text-2xl font-semibold">£{OLDHAM.block10}</div>
              </div>
              <div className="rounded-xl border border-border p-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Test Day Package
                </div>
                <div className="mt-1 font-display text-2xl font-semibold">
                  £{OLDHAM.testDay} / 2 Hours
                </div>
              </div>
            </div>
            <a
              href="/#pricing"
              className="mt-5 block rounded-xl bg-secondary py-3 text-center text-sm font-medium text-secondary-foreground"
            >
              See full price list →
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Oldham learners, common questions
          </h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-display text-lg font-semibold">
                Which areas around Oldham do you cover?
              </h3>
              <p className="mt-1 text-muted-foreground">
                Oldham, Chadderton, Royton, Shaw, Failsworth and Saddleworth, with pick-up
                arrangements agreed with your instructor. Call or WhatsApp {PHONE_NUMBER} if you're
                unsure whether we reach you.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">
                Will I practise hill starts and tram crossings?
              </h3>
              <p className="mt-1 text-muted-foreground">
                Where appropriate, yes. Oldham has plenty of hills, busy junctions and tram
                crossings, and lessons can include them so you gain confidence on the roads you'll
                really drive on.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">
                Can I have manual and automatic lessons?
              </h3>
              <p className="mt-1 text-muted-foreground">
                Yes — manual and automatic are both offered as standard. Let us know your preference
                when you enquire.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">What if I'm a nervous learner?</h3>
              <p className="mt-1 text-muted-foreground">
                You're in good company. Plenty of our pupils start out anxious behind the wheel —
                our instructors are trained to teach calmly and patiently, building confidence one
                step at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to start in Oldham?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Enter your postcode for exact pricing, or send us your enquiry and we'll be in touch.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/#book"
              className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-brand"
            >
              Check Availability
            </a>
            <a
              href={WHATSAPP_HREF}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <LessonPageFooter />
    </div>
  );
}
