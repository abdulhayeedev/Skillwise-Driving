import g0 from "@/assets/gallery/two-hour-mock-test.jpg";
import g1 from "@/assets/gallery/passed-my-driving-test.jpg";
import g2 from "@/assets/gallery/more-than-just-lessons.jpg";
import g3 from "@/assets/gallery/rochdale-fair-prices.jpg";
import g4 from "@/assets/gallery/skillwise-brand-car.jpg";
import g5 from "@/assets/gallery/why-choose-skillwise.jpg";
import g6 from "@/assets/gallery/common-test-day-mistakes.jpg";
import g7 from "@/assets/gallery/mirror-adjustment-guide.jpg";
import g8 from "@/assets/gallery/most-learners-fail.jpg";
import g9 from "@/assets/gallery/palm-changing-method.jpg";
import g10 from "@/assets/gallery/road-safety-tips.jpg";
import g11 from "@/assets/gallery/double-white-lines.jpg";
import g12 from "@/assets/gallery/test-day-nerves.jpg";
import g13 from "@/assets/gallery/turning-right-one-way.jpg";
import g14 from "@/assets/gallery/under-the-bonnet-checks.jpg";
import g15 from "@/assets/gallery/unofficial-driving-rules.jpg";
import g16 from "@/assets/gallery/we-asked-the-examiners.jpg";
import g17 from "@/assets/gallery/long-drive-essentials.jpg";
import g18 from "@/assets/gallery/tell-me-1.jpg";
import g19 from "@/assets/gallery/tell-me-2.jpg";
import g20 from "@/assets/gallery/tell-me-3.jpg";
import g21 from "@/assets/gallery/tell-me-4.jpg";
import g22 from "@/assets/gallery/tell-me-5.jpg";
import g23 from "@/assets/gallery/tell-me-6.jpg";
import g24 from "@/assets/gallery/tell-me-7.jpg";
import g25 from "@/assets/gallery/tell-me-8.jpg";
import g26 from "@/assets/gallery/tell-me-9.jpg";
import g27 from "@/assets/gallery/tell-me-10.jpg";
import g28 from "@/assets/gallery/tell-me-11.jpg";
import g29 from "@/assets/gallery/tell-me-12.jpg";
import g30 from "@/assets/gallery/tell-me-13.jpg";
import g31 from "@/assets/gallery/tell-me-14.jpg";
import g32 from "@/assets/gallery/hc-green-light-myth.jpg";
import g33 from "@/assets/gallery/car-test-ready-checklist.jpg";
import g34 from "@/assets/gallery/hc-cyclists-stay-left-myth.jpg";
import g35 from "@/assets/gallery/hc-pedestrians-myth.jpg";
import g36 from "@/assets/gallery/cyclist-staying-left-roundabout.jpg";
import g37 from "@/assets/gallery/hc-manoeuvre-mistake-myth.jpg";
import g38 from "@/assets/gallery/look-right-dont-forget-forward.jpg";
import g39 from "@/assets/gallery/hc-roundabout-look-right-myth.jpg";
import g40 from "@/assets/gallery/turning-left-check-cyclists.jpg";
import g41 from "@/assets/gallery/roundabout-lane-choice.jpg";
import g42 from "@/assets/gallery/green-light-would-you-go.jpg";
import g43 from "@/assets/gallery/check-last-before-moving-off.jpg";
import g44 from "@/assets/gallery/double-mini-roundabouts.jpg";
import g45 from "@/assets/gallery/road-markings-guide.jpg";
import g46 from "@/assets/gallery/waiting-and-parking-rules.jpg";
import g47 from "@/assets/gallery/hierarchy-of-road-users.jpg";
import g48 from "@/assets/gallery/zebra-crossing-give-way.jpg";

export type GalleryCategory = "school" | "tips" | "tellme";

export type GalleryItem = {
  src: string;
  title: string;
  category: GalleryCategory;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: g0, title: "2 hour mock test session", category: "school" },
  { src: g1, title: "I passed my driving test", category: "school" },
  { src: g2, title: "More than just driving lessons", category: "school" },
  { src: g3, title: "Rochdale manual lessons - fair prices", category: "school" },
  { src: g4, title: "SkillWise Driving Academy", category: "school" },
  { src: g5, title: "Why choose SkillWise", category: "school" },
  { src: g6, title: "Common test day mistakes", category: "tips" },
  { src: g7, title: "Mirror adjustment guide", category: "tips" },
  { src: g8, title: "Most learners fail before they start", category: "tips" },
  { src: g9, title: "Palm changing method (gears)", category: "tips" },
  { src: g10, title: "Road safety tips", category: "tips" },
  { src: g11, title: "Rule 129 - Double white lines", category: "tips" },
  { src: g12, title: "Test day nerves are real", category: "tips" },
  { src: g13, title: "Turning right from a one-way street", category: "tips" },
  { src: g14, title: "Under the bonnet checks", category: "tips" },
  { src: g15, title: "Unofficial driving rules", category: "tips" },
  { src: g16, title: "We asked the examiners", category: "tips" },
  { src: g17, title: "What to take on a long drive", category: "tips" },
  { src: g18, title: "Tell Me 1 - Brakes", category: "tellme" },
  { src: g19, title: "Tell Me 2 - Tyre pressures", category: "tellme" },
  { src: g20, title: "Tell Me 3 - Head restraint", category: "tellme" },
  { src: g21, title: "Tell Me 4 - Tyre tread & condition", category: "tellme" },
  { src: g22, title: "Tell Me 5 - Headlights & tail lights", category: "tellme" },
  { src: g23, title: "Tell Me 6 - ABS warning light", category: "tellme" },
  { src: g24, title: "Tell Me 7 - Direction indicators", category: "tellme" },
  { src: g25, title: "Tell Me 8 - Brake lights", category: "tellme" },
  { src: g26, title: "Tell Me 9 - Power-assisted steering", category: "tellme" },
  { src: g27, title: "Tell Me 10 - Rear fog lights", category: "tellme" },
  { src: g28, title: "Tell Me 11 - Main beam", category: "tellme" },
  { src: g29, title: "Tell Me 12 - Engine oil", category: "tellme" },
  { src: g30, title: "Tell Me 13 - Engine coolant", category: "tellme" },
  { src: g31, title: "Tell Me 14 - Brake fluid", category: "tellme" },
  { src: g32, title: "Myth: Green means always go", category: "tips" },
  { src: g33, title: "Is your car test-ready? (Annex 6)", category: "tips" },
  { src: g34, title: "Myth: Cyclists must always stay left", category: "tips" },
  { src: g35, title: "Myth: Pedestrians only matter once they step out", category: "tips" },
  { src: g36, title: "Why is the cyclist staying left? (Rule 186)", category: "tips" },
  { src: g37, title: "Myth: One mistake means you've failed", category: "tips" },
  { src: g38, title: "Look right… but don't forget forward (Rule 185)", category: "tips" },
  { src: g39, title: "Myth: You only need to look right at a roundabout", category: "tips" },
  { src: g40, title: "Turning left? Check for cyclists first (Rule H3)", category: "tips" },
  { src: g41, title: "Which lane would you choose? (Rules 184–186)", category: "tips" },
  { src: g42, title: "Green light… would you go? (Rule H2)", category: "tips" },
  { src: g43, title: "What do you check last before moving off? (Rule 159)", category: "tips" },
  { src: g44, title: "One junction or two? Double mini-roundabouts (Rule 189)", category: "tips" },
  { src: g45, title: "Do you know your road markings? (Rule H1)", category: "tips" },
  { src: g46, title: "Can you stop here? Waiting & parking (Rule 240)", category: "tips" },
  {
    src: g47,
    title: "Who has the greatest responsibility? Hierarchy of road users",
    category: "tips",
  },
  {
    src: g48,
    title: "Zebra crossings: do you wait for them to step out? (Rule 195)",
    category: "tips",
  },
];

export const GALLERY_CATEGORIES: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "school", label: "About us" },
  { id: "tips", label: "Driving tips" },
  { id: "tellme", label: "Show me, tell me" },
];
