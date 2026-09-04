import { createFileRoute } from "@tanstack/react-router";

import logoAsset from "@/assets/skillwise-logo.jpg";

const EMAIL = "info@skillwisedriving.co.uk";
const PHONE_NUMBER = "07908 521 258";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | SkillWise Driving Academy" },
      {
        name: "description",
        content: "How SkillWise Driving Academy collects, uses and protects your information.",
      },
    ],
  }),
});

function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-GB")}
        </p>

        <div className="prose-policy mt-8 space-y-6 text-sm leading-relaxed text-foreground/90">
          <p>
            SkillWise Driving Academy® ("SkillWise", "we", "us") is committed to protecting your
            privacy. This policy explains what information we collect through this website, how we
            use it, and your rights.
          </p>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Information we collect
            </h2>
            <p className="mt-2">When you submit an enquiry through this website, we collect:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Full name</li>
              <li>Mobile number</li>
              <li>Postcode</li>
              <li>Transmission preference (manual or automatic)</li>
              <li>Lesson type and general availability</li>
              <li>Any notes or message you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              How we use your information
            </h2>
            <p className="mt-2">
              Your information is used only to respond to your enquiry, arrange and manage your
              driving lessons, and communicate with you about your lessons (for example, lesson
              reminders). We do not use your information for unrelated marketing without your
              consent, and we do not sell your information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Sharing your information
            </h2>
            <p className="mt-2">
              We share your enquiry details with the SkillWise instructor allocated to teach you,
              where relevant, so your lessons can be arranged. We may also use third-party service
              providers (for example, our website hosting and email-delivery provider) strictly to
              operate this website and deliver your enquiry to us — they process your data on our
              behalf and are not permitted to use it for their own purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              How long we keep your information
            </h2>
            <p className="mt-2">
              We keep enquiry and pupil information for as long as reasonably necessary to provide
              lessons and for a reasonable period afterwards for record-keeping purposes, after
              which it is deleted or anonymised.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Your rights</h2>
            <p className="mt-2">
              Under UK data protection law, you have the right to ask what information we hold about
              you, to ask us to correct it, and to ask us to delete it, subject to any legal or
              contractual reasons we may need to retain it. To make a request, contact us using the
              details below.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Contact us</h2>
            <p className="mt-2">
              If you have any questions about this policy or how we handle your information, contact
              us at{" "}
              <a href={`mailto:${EMAIL}`} className="font-medium text-brand underline">
                {EMAIL}
              </a>{" "}
              or call/WhatsApp {PHONE_NUMBER}.
            </p>
          </section>

          <p className="rounded-xl border border-dashed border-border bg-muted/40 p-4 text-xs text-muted-foreground">
            Note: this policy has been drafted to reflect exactly what this website collects and
            does with it. It hasn't been reviewed by a solicitor — worth a quick legal read-through
            before launch, particularly if SkillWise starts collecting any further personal data in
            future (e.g. payment details, ID documents for instructors, CCTV, etc.).
          </p>
        </div>
      </main>
    </div>
  );
}
