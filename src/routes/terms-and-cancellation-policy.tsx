import { createFileRoute } from "@tanstack/react-router";

import logoAsset from "@/assets/skillwise-logo.jpg";

const EMAIL = "info@skillwisedriving.co.uk";
const PHONE_NUMBER = "07908 521 258";

export const Route = createFileRoute("/terms-and-cancellation-policy")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Cancellation Policy | SkillWise Driving Academy" },
      {
        name: "description",
        content:
          "SkillWise Driving Academy's booking, 48-hour cancellation, no-show and test-day terms.",
      },
    ],
  }),
});

const SECTIONS: { title: string; paragraphs: string[] }[] = [
  {
    title: "Lesson Bookings",
    paragraphs: [
      "Lessons are normally agreed approximately one week in advance so pupils know their agreed lesson date and time.",
      "SkillWise Driving Academy will normally send a courtesy reminder by message approximately 24–48 hours before the lesson.",
      "The reminder is a courtesy only. The pupil remains responsible for remembering their agreed lesson date and time even if a reminder is not received.",
    ],
  },
  {
    title: "48-Hour Cancellation / Lesson Change Policy",
    paragraphs: [
      "A minimum of 48 hours' notice is required to cancel or rearrange a driving lesson.",
      "A lesson cancelled or rearranged within 48 hours of the agreed start time is treated as a late cancellation. The full lesson fee remains payable.",
      "Where the lesson is part of a prepaid block booking, the booked lesson hours will be deducted from the remaining block balance.",
      "Any exception in genuinely exceptional circumstances is at SkillWise Driving Academy's discretion.",
    ],
  },
  {
    title: "No-Shows",
    paragraphs: [
      "If a pupil does not attend an agreed lesson and has not cancelled with the required notice, the full lesson fee remains payable.",
      "Where the lesson forms part of a block booking, those hours will be deducted from the remaining balance.",
    ],
  },
  {
    title: "Pupil Lateness",
    paragraphs: [
      "Pupils should be ready at the agreed lesson start time.",
      "If a pupil is late, the lesson will normally still finish at the originally agreed finishing time so following lessons are not affected. The full lesson fee remains payable.",
      "Where reasonably possible the instructor may accommodate a minor delay, but additional lesson time cannot be guaranteed.",
    ],
  },
  {
    title: "Instructor Lateness",
    paragraphs: [
      "If an instructor is unexpectedly delayed, the pupil should be informed as soon as reasonably possible.",
      "Where possible, the pupil should still receive the full booked lesson time.",
      "If the full booked lesson time cannot reasonably be provided, the missing time should be rearranged or credited.",
    ],
  },
  {
    title: "Instructor / SkillWise Cancellations",
    paragraphs: [
      "If SkillWise Driving Academy or the allocated instructor needs to cancel a lesson, the pupil will not be charged for that cancelled lesson.",
      "This can include circumstances such as instructor illness, vehicle problems, unsafe weather/road conditions or other circumstances where proceeding would not be appropriate.",
      "Any payment already made for the cancelled lesson can be carried forward to a rearranged lesson or refunded where appropriate.",
      "SkillWise will aim to provide as much notice as reasonably possible.",
    ],
  },
  {
    title: "Block Bookings",
    paragraphs: [
      "Block-booking hours are for the named pupil and are not transferable to another person without prior agreement from SkillWise Driving Academy.",
      "If a pupil requests a refund of unused prepaid block-booking hours, lessons already completed may be recalculated at the normal applicable PAYG lesson price rather than the discounted block-booking rate.",
      "Any valid late-cancellation/no-show charges may also be deducted when calculating the remaining balance.",
      "Nothing within these terms affects the customer's statutory rights.",
    ],
  },
  {
    title: "Intensive / Crash Courses",
    paragraphs: [
      "Once an intensive-course timetable has been agreed, those lesson times are specifically reserved for that pupil.",
      "The standard 48-hour cancellation/rescheduling policy applies to scheduled intensive-course lessons.",
      "Changes should be requested as early as possible.",
      "SkillWise cannot guarantee that rearranged intensive-course hours can be provided within the pupil's original intended timeframe.",
    ],
  },
  {
    title: "Test Day Package / Vehicle Use",
    paragraphs: [
      "The Test Day Package is £100 / 2 Hours.",
      "For pupils joining SkillWise specifically for test preparation / practical-test vehicle use, a minimum of 6 hours of lessons with SkillWise Driving Academy must be completed before test day.",
      "Completing the minimum 6 hours does NOT automatically guarantee use of a SkillWise vehicle for the practical test. The pupil must be assessed by their SkillWise instructor as safe and test-ready.",
      "The instructor has the final decision on whether the tuition vehicle can safely be used for the test.",
      "The DVSA practical driving test fee is separate and is not included in the SkillWise Test Day Package.",
      "The standard 48-hour cancellation policy applies to the SkillWise Test Day Package.",
    ],
  },
  {
    title: "DVSA / Test Centre Cancellations",
    paragraphs: [
      "If the DVSA cancels or changes a practical test for reasons outside the pupil's control, SkillWise will make reasonable efforts to rearrange any unused tuition/test-day time.",
      "Any tuition or instructor time already provided remains chargeable.",
      "A replacement test-day booking remains subject to instructor and vehicle availability.",
    ],
  },
  {
    title: "Fitness to Drive / Safety",
    paragraphs: [
      "Pupils must be legally entitled and fit to drive.",
      "An instructor may refuse to begin or may terminate a lesson if they reasonably believe the pupil is not fit to drive safely. This can include alcohol, drugs, illness, extreme tiredness or another condition that could make driving unsafe.",
      "Where a lesson cannot proceed because the pupil is unfit to drive, the lesson may remain payable.",
    ],
  },
  {
    title: "Payment",
    paragraphs: [
      "Any advance payment required must be received by the agreed deadline.",
      "Submitting an online enquiry does not create a confirmed lesson booking.",
      "A booking is confirmed once SkillWise Driving Academy has agreed the lesson arrangements and any required payment conditions have been met.",
    ],
  },
];

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/95 py-4">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logoAsset}
              alt="SkillWise Driving Academy logo"
              className="h-10 w-10 rounded-lg object-contain"
            />
            <span className="font-display text-base font-semibold">SkillWise Driving Academy®</span>
          </a>
          <a href="/" className="text-sm font-medium text-brand hover:underline">
            ← Back to homepage
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Terms &amp; Cancellation Policy
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          A minimum of 48 hours' notice is required to cancel or rearrange a driving lesson. Please
          read the full policy below before booking.
        </p>

        <div className="mt-8 space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-xl font-semibold">{s.title}</h2>
              <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/90">
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Questions about these terms? Contact us at{" "}
          <a href={`mailto:${EMAIL}`} className="font-medium text-brand underline">
            {EMAIL}
          </a>{" "}
          or call/WhatsApp {PHONE_NUMBER}.
        </p>
      </main>
    </div>
  );
}
