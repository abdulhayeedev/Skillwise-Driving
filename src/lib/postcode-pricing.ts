// Postcode-based pricing. Closer to Rochdale (OL) = cheaper.
export type PriceSet = {
  area: string;
  distance: string;
  oneHour: number;
  twoHours: number;
  block10: number;
  refresherPerHour: number;
  motorway2Hours: number;
  passPlus6Hours: number;
  intensive10Hours: number;
  testDay: number;
};

export const ROCHDALE: PriceSet = {
  area: "Rochdale",
  distance: "OL postcode area",
  oneHour: 35,
  twoHours: 70,
  block10: 330,
  refresherPerHour: 40,
  motorway2Hours: 90,
  passPlus6Hours: 240,
  intensive10Hours: 450,
  testDay: 100,
};

export const MANCHESTER: PriceSet = {
  area: "Manchester",
  distance: "Approved M postcode districts",
  oneHour: 38,
  twoHours: 76,
  block10: 360,
  refresherPerHour: 40,
  motorway2Hours: 90,
  passPlus6Hours: 240,
  intensive10Hours: 480,
  testDay: 100,
};

export const OLDHAM: PriceSet = {
  area: "Oldham",
  distance: "OL1, OL2, OL3, OL4, OL8, OL9 (Oldham & Chadderton)",
  oneHour: 38,
  twoHours: 76,
  block10: 360,
  refresherPerHour: 40,
  motorway2Hours: 90,
  passPlus6Hours: 240,
  intensive10Hours: 480,
  testDay: 100,
};

const OUTWARD_RE = /^\s*([A-Z]{1,2})(\d{1,2})/i;

// Oldham/Chadderton districts billed at the higher rate. Any other OL
// district (e.g. OL5, OL6, OL7, OL10+) falls back to the Rochdale rate below.
// Confirm this list with the client before launch — the brief specifies
// exactly these six districts.
const OLDHAM_DISTRICTS = new Set([1, 2, 3, 4, 8, 9]);

// Manchester pricing only applies to *approved* M postcode districts — NOT
// the whole M area, and NOT BB, BL, SK, WN or WA (those are separate
// postcode areas and are no longer auto-classified as Manchester).
//
// Add or remove district numbers here as new instructors/areas come on
// board. Set to "all" to cover every M district, or list specific numbers,
// e.g. new Set([1, 2, 3, 4, 8, 14, 15, 16, 20, 21, 22, 23, 24, 25, 40, 41]).
const MANCHESTER_APPROVED_DISTRICTS: "all" | Set<number> = "all";

export function getPriceForPostcode(input: string): {
  valid: boolean;
  priceSet: PriceSet | null;
  normalized: string;
  inCoverage: boolean;
} {
  const trimmed = input.trim().toUpperCase();
  if (!trimmed) return { valid: false, priceSet: null, normalized: "", inCoverage: false };
  const match = OUTWARD_RE.exec(trimmed);
  if (!match) return { valid: false, priceSet: null, normalized: trimmed, inCoverage: false };

  const areaLetters = match[1].toUpperCase();
  const district = parseInt(match[2], 10);

  if (areaLetters === "OL") {
    const priceSet = OLDHAM_DISTRICTS.has(district) ? OLDHAM : ROCHDALE;
    return { valid: true, priceSet, normalized: trimmed, inCoverage: true };
  }

  if (areaLetters === "M") {
    const covered =
      MANCHESTER_APPROVED_DISTRICTS === "all" || MANCHESTER_APPROVED_DISTRICTS.has(district);
    if (covered) {
      return { valid: true, priceSet: MANCHESTER, normalized: trimmed, inCoverage: true };
    }
  }

  return { valid: true, priceSet: null, normalized: trimmed, inCoverage: false };
}
