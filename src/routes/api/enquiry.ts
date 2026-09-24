import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import nodemailer from "nodemailer";

import {
  isValidUkMobile,
  isValidUkPostcode,
  formatUkMobile,
  formatUkPostcode,
} from "@/lib/validation";

// ---------------------------------------------------------------------------
// Sends enquiry-form submissions to info@skillwisedriving.co.uk via SMTP,
// using the info@skillwisedriving.co.uk mailbox itself (IONOS-hosted) to
// send. No third-party email provider needed.
//
// REQUIRED environment variables (set these in the Vercel project settings —
// Project → Settings → Environment Variables — never commit them to code):
//
//   SMTP_HOST   smtp.ionos.co.uk
//   SMTP_PORT   587 (STARTTLS) — 465 also works if set with SMTP_SECURE=true
//   SMTP_USER   info@skillwisedriving.co.uk
//   SMTP_PASS   that mailbox's password
//   ENQUIRY_TO_EMAIL   where enquiries are delivered, e.g.
//                      info@skillwisedriving.co.uk (can be the same mailbox)
//
// If these aren't set, the endpoint returns a 500 with a clear error rather
// than pretending the enquiry was sent — per the brief: "The website should
// only report a successful submission if the backend has actually accepted
// the enquiry."
//
// NOTE: this requires a Node.js server runtime with raw TCP socket support
// (standard Vercel serverless functions have this). It will NOT work on an
// edge/Workers-style runtime — if SMTP connections fail in production with a
// socket/connection error, that's the likely cause and we'd need to switch
// to an HTTP-based provider (e.g. Resend) instead.
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

        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = process.env.SMTP_PORT;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const toEmail = process.env.ENQUIRY_TO_EMAIL;

        if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !toEmail) {
          console.error(
            "Enquiry email not sent — missing SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS / ENQUIRY_TO_EMAIL env vars",
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
          const port = parseInt(smtpPort, 10);
          const transporter = nodemailer.createTransport({
            host: smtpHost,
            port,
            secure: process.env.SMTP_SECURE === "true" || port === 465,
            auth: { user: smtpUser, pass: smtpPass },
          });

          await transporter.sendMail({
            from: `"SkillWise Website" <${smtpUser}>`,
            to: toEmail,
            replyTo: smtpUser,
            subject: `New enquiry — ${name} (${postcode})`,
            text: textLines.join("\n"),
            html,
          });
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
