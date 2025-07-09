export interface LearningOpportunity {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  linkType: "external" | "internal";
  link: string; // URL for 'external', mock ID for 'internal'
}

export type Category =
  | "All"
  | "STEM"
  | "Soft Skills"
  | "Arts & Humanities"
  | "Business"
  | "Language";
