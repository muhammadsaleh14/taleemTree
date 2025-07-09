// src/components/LearningCard.tsx

import type { LearningOpportunity } from "../types";
import T from "./T";

interface LearningCardProps {
  opportunity: LearningOpportunity;
  onEnroll: (opportunity: LearningOpportunity) => void;
  lang: "en" | "ur";
}

const LearningCard = ({ opportunity, onEnroll, lang }: LearningCardProps) => {
  return (
    // Look how much cleaner this is! No dark: prefixes.
    <div className="bg-card rounded-xl shadow-lg overflow-hidden flex flex-col border border-card-border transition-transform duration-300 ease-in-out hover:scale-103 hover:shadow-xl">
      <img
        src={opportunity.image}
        alt={opportunity.title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-text-main mb-3">
          {opportunity.title}
        </h3>
        <p className="text-text-subtle mb-4 flex-grow">
          {opportunity.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="bg-brand-secondary text-brand-text text-xs font-medium px-3 py-1 rounded-full">
            {opportunity.category}
          </span>
          <button
            onClick={() => onEnroll(opportunity)}
            className="bg-brand-primary hover:opacity-80 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            <T en="Enroll Now" ur="ابھی اندراج کریں" lang={lang} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningCard;
