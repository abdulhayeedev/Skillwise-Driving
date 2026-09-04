// Shared UK mobile number + postcode validation, used on both the client
// (for instant feedback) and the server (so the form can't be bypassed by
// posting straight to the API with invalid data).

/** UK mobile numbers: 07xxxxxxxxx or +447xxxxxxxxx, spacing ignored. */
export function isValidUkMobile(input: string): boolean {
  const cleaned = input.replace(/[\s()-]/g, "");
  return /^(?:\+44|0044|0)7\d{9}$/.test(cleaned);
}

/** Returns the number in "07908 521 258" display format, or null if invalid. */
export function formatUkMobile(input: string): string | null {
  const cleaned = input.replace(/[\s()-]/g, "");
  const match = /^(?:\+44|0044|0)(7\d{9})$/.exec(cleaned);
  if (!match) return null;
  const digits = match[1]; // 7908521258
  return `0${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
}

// Standard UK postcode pattern (matches the format gov.uk services use).
const UK_POSTCODE_RE = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;

export function isValidUkPostcode(input: string): boolean {
  return UK_POSTCODE_RE.test(input.trim());
}

/** Returns the postcode in "OL16 1AB" uppercase format, or null if invalid. */
export function formatUkPostcode(input: string): string | null {
  const trimmed = input.trim().toUpperCase().replace(/\s+/g, "");
  if (trimmed.length < 5 || trimmed.length > 7) return null;
  const outward = trimmed.slice(0, -3);
  const inward = trimmed.slice(-3);
  const candidate = `${outward} ${inward}`;
  if (!UK_POSTCODE_RE.test(candidate)) return null;
  return candidate;
}
