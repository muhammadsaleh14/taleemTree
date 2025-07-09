// src/App.tsx

import { useState, useMemo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LearningCard from "./components/LearningCard";
import EnrollmentModal from "./components/EnrollmentModal";
import T from "./components/T";
import { initialOpportunities } from "./data";
import { useLanguage } from "./hooks/useLanguage";
import { useDarkMode } from "./hooks/useDarkMode";

// Import everything category-related from your new single source of truth
import {
  CATEGORIES,
  categoryTranslations,
  type LearningOpportunity,
  type Category,
} from "./types";

function App() {
  // --- Hooks for Global State ---
  const [, toggleDarkMode] = useDarkMode();
  const [lang, toggleLanguage] = useLanguage();

  // --- Component-Specific State ---
  const [opportunities] = useState<LearningOpportunity[]>(initialOpportunities);
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] =
    useState<LearningOpportunity | null>(null);

  // --- Event Handlers ---
  const handleEnrollClick = (opportunity: LearningOpportunity) => {
    if (opportunity.linkType === "external") {
      window.open(opportunity.link, "_blank");
    } else {
      // For internal links, open the mock modal
      setSelectedOpportunity(opportunity);
      setIsEnrollModalOpen(true);
    }
  };

  // --- Memoized Derived State ---
  const filteredOpportunities = useMemo(() => {
    if (activeFilter === "All") {
      return opportunities;
    }
    return opportunities.filter((op) => op.category === activeFilter);
  }, [activeFilter, opportunities]);

  return (
    <div className={`min-h-screen flex flex-col font-inter`}>
      <Header toggleDarkMode={toggleDarkMode} toggleLanguage={toggleLanguage} />

      <main className="flex-grow container mx-auto p-6">
        <section id="public-content" className="mb-10">
          <h2 className="text-4xl font-extrabold text-center text-text-main mb-8">
            <T
              en="Explore Free Learning Opportunities"
              ur="مفت تعلیمی مواقع تلاش کریں"
              lang={lang}
            />
          </h2>

          {/* This mapping now uses the imported CATEGORIES array */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`font-medium py-2 px-5 rounded-full transition duration-200 ease-in-out
                  ${
                    activeFilter === category
                      ? "bg-brand-primary text-white"
                      : "bg-brand-secondary text-brand-text hover:opacity-80"
                  }`}
              >
                {/* The T component uses the imported categoryTranslations object */}
                <T
                  en={category}
                  ur={categoryTranslations[category]}
                  lang={lang}
                />
              </button>
            ))}
          </div>

          {/* Learning Opportunities Grid */}
          <div
            id="learning-opportunities"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredOpportunities.length > 0 ? (
              filteredOpportunities.map((op) => (
                <LearningCard
                  key={op.id}
                  opportunity={op}
                  onEnroll={handleEnrollClick}
                  lang={lang}
                />
              ))
            ) : (
              <p className="text-center text-text-subtle col-span-full">
                <T
                  en="No learning opportunities found in this category."
                  ur="اس زمرے میں کوئی تعلیمی مواقع نہیں ملے۔"
                  lang={lang}
                />
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer lang={lang} />

      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        opportunity={selectedOpportunity}
        lang={lang}
      />
    </div>
  );
}

export default App;
