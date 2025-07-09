// src/types.ts

// The base type for a single learning opportunity
export interface LearningOpportunity {
  id: string;
  title: string;
  image: string;
  description: string;
  // Note: This is intentionally a `string` to allow for flexibility,
  // in case a card's category doesn't perfectly match a filter.
  category: string;
  linkType: "external" | "internal";
  link: string;
}

// 1. THE TYPE DEFINITION
// The strict type for our filter categories.
export type Category =
  | "All"
  | "STEM"
  | "Soft Skills"
  | "Arts & Humanities"
  | "Business"
  | "Language"
  | "Health & Wellness"
  | 'verbal' // Added "verbal" for specific language-related content
  | "Other"; // Added "Other" for flexibility in future categories

// 2. THE ORDERED LIST
// This array controls the exact order the filter buttons appear in the UI.
// It is typed with `Category[]` to ensure it's always in sync with the type above.
export const CATEGORIES: Category[] = [
  "All",
  "STEM",
  "Soft Skills",
  "Arts & Humanities",
  "Business",
  "Language",
  "Health & Wellness",
  "verbal", // Added "verbal" for specific language-related content
  "Other"
];

// 3. THE TRANSLATION LOGIC
// This object provides the Urdu translation for each category.
// `Record<Category, string>` ensures that every defined Category has a translation.
export const categoryTranslations: Record<Category, string> = {
  All: "تمام",
  STEM: "سائنس، ٹیکنالوجی، انجینئرنگ، ریاضی",
  "Soft Skills": "سافٹ سکلز",
  "Arts & Humanities": "فنون اور انسانیت",
  Business: "کاروبار",
  Language: "زبان",
  "Health & Wellness": "صحت اور تندرستی", // Provided a better translation
  verbal: "زبانی", // Added translation for "verbal"
  Other: "دیگر" // Added translation for "Other"
};
