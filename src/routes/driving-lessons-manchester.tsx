import { createFileRoute } from "@tanstack/react-router";

import logoAsset from "@/assets/skillwise-logo.jpg";
import { MANCHESTER } from "@/lib/postcode-pricing";

const EMAIL = "info@skillwisedriving.co.uk";
const PHONE_NUMBER = "07908 521 258";
const PHONE_HREF = "tel:+447908521258";
const WHATSAPP_HREF = "https://wa.me/447908521258";

export const Route = createFileRoute("/driving-lessons-manchester")({
  component: ManchesterPage,
  head: () => ({
    meta: [
      { title: "Driving Lessons in Manchester | SkillWise Driving Academy" },
      {
        name: "description",
        content:
          "Manual and automatic driving lessons across selected Manchester postcode areas from SkillWise Driving Academy. City-centre traffic, tram crossings and bus lanes taught calmly by DVSA-approved instructors.",
      },
      {
        property: "og:title",
        content: "Driving Lessons in Manchester | SkillWise Driving Academy",
      },
      {
        property: "og:description",
        content:
          "Manual and automatic driving lessons across selected Manchester postcode areas from SkillWise Driving Academy. City-centre traffic, tram crossings and bus lanes taught calmly by DVSA-approved instructors.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.skillwisedriving.co.uk/driving-lessons-manchester" },
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
        </p>
        <p className="mt-3 text-xs text-white/50">
          © {new Date().getFullYear()} SkillWise Driving Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function ManchesterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LessonPageHeader />

      <section className="bg-gradient-ink py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Additional service area
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Driving Lessons in Manchester
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            Alongside our Rochdale base, SkillWise Driving Academy teaches manual and automatic
            lessons across selected Manchester postcode areas — built for genuine city-centre
            driving: traffic, tram crossings and bus lanes, taught calmly.
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
              Built for city driving
            </h2>
            <p className="mt-4 text-muted-foreground">
              Manchester driving throws up things a quieter town doesn't: multi-lane roundabouts,
              bus lanes, one-way systems and Metrolink tram crossings. Our instructors teach these
              conditions calmly and deliberately in a dual-controlled tuition vehicle, building your
              confidence in exactly the environment you'll actually be driving in.
            </p>
            <p className="mt-4 text-muted-foreground">
              We currently cover selected Manchester (M) postcode districts rather than the whole
              city — coverage grows as we take on more instructors. The quickest way to check if we
              reach you is to enter your postcode below; if you're just outside our current area,
              get in touch anyway and we'll let you know.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold">Manchester pricing</h3>
            <p className="mt-1 text-sm text-muted-foreground">Selected M postcode districts.</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border p-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  1 Hour
                </div>
                <div className="mt-1 font-display text-2xl font-semibold">
                  £{MANCHESTER.oneHour}
                </div>
              </div>
              <div className="rounded-xl border border-brand bg-brand p-4 text-brand-foreground">
                <div className="text-xs font-semibold uppercase tracking-widest opacity-80">
                  2 Hours · Most popular
                </div>
                <div className="mt-1 font-display text-2xl font-semibold">
                  £{MANCHESTER.twoHours}
                </div>
              </div>
              <div className="rounded-xl border border-border p-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  10 Hour Block
                </div>
                <div className="mt-1 font-display text-2xl font-semibold">
                  £{MANCHESTER.block10}
                </div>
              </div>
              <div className="rounded-xl border border-border p-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Test Day Package
                </div>
                <div className="mt-1 font-display text-2xl font-semibold">
                  £{MANCHESTER.testDay} / 2 Hours
                </div>
              </div>
            </div>
            <a
              href="/#pricing"
              className="mt-5 block rounded-xl bg-secondary py-3 text-center text-sm font-medium text-secondary-foreground"
            >
              Check your exact postcode →
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Manchester learners, common questions
          </h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-display text-lg font-semibold">
                Do you cover my Manchester postcode?
              </h3>
              <p className="mt-1 text-muted-foreground">
                We cover selected M postcode districts, not the whole of Greater Manchester. Enter
                your postcode in the checker above and we'll show you straight away — if you're just
                outside our current area, call or WhatsApp us and we'll let you know if we can still
                help.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">
                Is Manchester driving harder to learn in?
              </h3>
              <p className="mt-1 text-muted-foreground">
                It's different, not harder — more traffic, tram crossings and bus lanes to get
                comfortable with. That's exactly why lessons are structured and one-to-one, so you
                build those skills gradually rather than being thrown in.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">
                Manual or automatic in Manchester?
              </h3>
              <p className="mt-1 text-muted-foreground">
                Both are offered as standard, at the same footing — let us know your preference when
                you enquire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to start in Manchester?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Enter your postcode for exact pricing, or send us your enquiry and we'll confirm
            coverage and availability.
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
