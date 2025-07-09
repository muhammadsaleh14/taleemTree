import type { LearningOpportunity } from "../types";
import T from "./T";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunity: LearningOpportunity | null;
  lang: "en" | "ur";
}

const EnrollmentModal = ({
  isOpen,
  onClose,
  opportunity,
  lang,
}: EnrollmentModalProps) => {
  if (!isOpen || !opportunity) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 w-full max-w-md transform transition-all">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          <T en="Enrollment Form" ur="اندراج فارم" lang={lang} />
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2 text-center">
          <T
            en="This is a mock internal enrollment form for:"
            ur="یہ ایک فرضی اندرونی اندراج فارم ہے:"
            lang={lang}
          />
        </p>
        <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6 text-center">
          {opportunity.title}
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="enroll-name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              <T en="Your Name" ur="آپ کا نام" lang={lang} />
            </label>
            <input
              type="text"
              id="enroll-name"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-lg bg-white dark:bg-gray-700"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="enroll-email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              <T en="Your Email" ur="آپ کا ای میل" lang={lang} />
            </label>
            <input
              type="email"
              id="enroll-email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-lg bg-white dark:bg-gray-700"
              placeholder="john.doe@example.com"
            />
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg shadow-md"
            >
              <T en="Close" ur="بند کریں" lang={lang} />
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
            >
              <T en="Submit" ur="جمع کرائیں" lang={lang} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentModal;
