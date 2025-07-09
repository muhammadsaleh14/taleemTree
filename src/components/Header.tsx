// src/components/Header.tsx

// 1. DO NOT import or use the useLanguage hook here anymore
// import { useLanguage } from '../hooks/useLanguage';

// 2. Define the props interface to accept the new function
interface HeaderProps {
  toggleDarkMode: () => void;
  toggleLanguage: () => void;
}

const Header = ({ toggleDarkMode, toggleLanguage }: HeaderProps) => {
  // 3. The Header component is now much simpler. It has no local state hooks.

  return (
    <header className="bg-header shadow-sm py-4 px-6 flex flex-col sm:flex-row items-center justify-between sticky top-0 z-20 rounded-b-lg">
      <h1 className="text-3xl font-bold text-brand-primary mb-4 sm:mb-0">
        TaleemTree
      </h1>
      <div className="flex items-center space-x-4">
        <button
          // 4. This onClick now calls the function passed down from App.tsx
          onClick={toggleLanguage}
          className="bg-brand-primary hover:opacity-80 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          اردو / English
        </button>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          ☀️ / 🌙
        </button>
      </div>
    </header>
  );
};

export default Header;
