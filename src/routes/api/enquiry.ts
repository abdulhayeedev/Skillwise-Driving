import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import {
  isValidUkMobile,
  isValidUkPostcode,
  formatUkMobile,
  formatUkPostcode,
} from "@/lib/validation";

// ---------------------------------------------------------------------------
// Sends enquiry-form submissions to info@skillwisedriving.co.uk via Resend's
// HTTP API (https://resend.com). No SDK dependency — just fetch.
//
// REQUIRED environment variables (set these in the Vercel project settings —
// Project → Settings → Environment Variables — never commit them to code):
//
//   RESEND_API_KEY     Resend API key (create one at resend.com after
//                       verifying the skillwisedriving.co.uk sending domain)
//   ENQUIRY_TO_EMAIL   Where enquiries are delivered, e.g.
//                       info@skillwisedriving.co.uk
//   ENQUIRY_FROM_EMAIL The verified "from" address Resend sends as, e.g.
//                       enquiries@skillwisedriving.co.uk
//
// If these aren't set, the endpoint returns a 500 with a clear error rather
// than pretending the enquiry was sent — per the brief: "The website should
// only report a successful submission if the backend has actually accepted
// the enquiry."
// ---------------------------------------------------------------------------

const LESSON_TYPES = [
  "Beginner Lessons",
  "Intensive Course",
  "Refresher Lessons",
  "Pass Plus",
  "Motorway Lessons",
  "Mock Test",
];

const AVAILABILITY_OPTIONS = [
  "Weekday mornings",
  "Weekday afternoons",
  "Weekday evenings",
  "Saturdays",
  "Sundays",
];

type EnquiryPayload = {
  name: string;
  phone: string;
  postcode: string;
  transmission: string;
  lessonType: string;
  availability: string[];
  notes: string;
};

function badRequest(field: string, message: string) {
  return new Response(JSON.stringify({ error: message, field }), {
    status: 400,
    headers: { "content-type": "application/json" },
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const Route = createFileRoute("/api/enquiry")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: Partial<EnquiryPayload>;
        try {
          body = (await request.json()) as Partial<EnquiryPayload>;
        } catch {
          return badRequest("body", "Invalid request body.");
        }

        const name = (body.name ?? "").trim().slice(0, 80);
        if (!name) return badRequest("name", "Please enter your full name.");

        if (!body.phone || !isValidUkMobile(body.phone)) {
          return badRequest("phone", "Please enter a valid UK mobile number.");
        }
        const phone = formatUkMobile(body.phone)!;

        if (!body.postcode || !isValidUkPostcode(body.postcode)) {
          return badRequest("postcode", "Please enter a valid UK postcode.");
        }
        const postcode = formatUkPostcode(body.postcode)!;

        const transmission = body.transmission === "Automatic" ? "Automatic" : "Manual";

        const lessonType = LESSON_TYPES.includes(body.lessonType ?? "")
          ? (body.lessonType as string)
          : "Beginner Lessons";

        const availability = Array.isArray(body.availability)
          ? body.availability.filter((a) => AVAILABILITY_OPTIONS.includes(a))
          : [];

        const notes = (body.notes ?? "").trim().slice(0, 800);

        const apiKey = process.env.RESEND_API_KEY;
        const toEmail = process.env.ENQUIRY_TO_EMAIL;
        const fromEmail = process.env.ENQUIRY_FROM_EMAIL;

        if (!apiKey || !toEmail || !fromEmail) {
          console.error(
            "Enquiry email not sent — missing RESEND_API_KEY / ENQUIRY_TO_EMAIL / ENQUIRY_FROM_EMAIL env vars",
          );
          return new Response(
            JSON.stringify({
              error: "Enquiries can't be sent right now. Please call or WhatsApp us instead.",
            }),
            { status: 500, headers: { "content-type": "application/json" } },
          );
        }

        const submittedAt = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });

        const textLines = [
          `New enquiry from the SkillWise website`,
          ``,
          `Full Name: ${name}`,
          `Mobile Number: ${phone}`,
          `Postcode: ${postcode}`,
          `Transmission: ${transmission}`,
          `Lesson Type: ${lessonType}`,
          `General Availability: ${availability.length ? availability.join(", ") : "Not specified"}`,
          `Notes / Message: ${notes || "(none)"}`,
          ``,
          `Submitted: ${submittedAt} (Europe/London)`,
        ];

        const html = `
          <h2>New enquiry from the SkillWise website</h2>
          <p><strong>Full Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Mobile Number:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Postcode:</strong> ${escapeHtml(postcode)}</p>
          <p><strong>Transmission:</strong> ${escapeHtml(transmission)}</p>
          <p><strong>Lesson Type:</strong> ${escapeHtml(lessonType)}</p>
          <p><strong>General Availability:</strong> ${escapeHtml(
            availability.length ? availability.join(", ") : "Not specified",
          )}</p>
          <p><strong>Notes / Message:</strong><br/>${escapeHtml(notes || "(none)").replace(/\n/g, "<br/>")}</p>
          <p style="color:#888;font-size:12px;">Submitted: ${escapeHtml(submittedAt)} (Europe/London)</p>
        `;

        try {
          const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: `SkillWise Website <${fromEmail}>`,
              to: [toEmail],
              subject: `New enquiry — ${name} (${postcode})`,
              text: textLines.join("\n"),
              html,
            }),
          });

          if (!resendResponse.ok) {
            const errBody = await resendResponse.text();
            console.error("Resend API error:", resendResponse.status, errBody);
            return new Response(
              JSON.stringify({
                error: "We couldn't send your enquiry. Please call or WhatsApp us instead.",
              }),
              { status: 502, headers: { "content-type": "application/json" } },
            );
          }
        } catch (err) {
          console.error("Enquiry email send failed:", err);
          return new Response(
            JSON.stringify({
              error: "We couldn't send your enquiry. Please call or WhatsApp us instead.",
            }),
            { status: 502, headers: { "content-type": "application/json" } },
          );
        }

        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      },
    },
  },
});
