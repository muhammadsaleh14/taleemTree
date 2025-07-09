import T from "./T";

interface FooterProps {
  lang: "en" | "ur";
}

const Footer = ({ lang }: FooterProps) => {
  const placeholderText = {
    en: "Your Email",
    ur: "آپ کا ای میل",
  };

  return (
    <footer className="bg-gray-800 text-white py-8 px-6 mt-10 rounded-t-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h4 className="text-xl font-bold mb-2">
            <T
              en="TaleemTree by Urdu AI"
              ur="اردو اے آئی کی جانب سے تعلیم ٹری"
              lang={lang}
            />
          </h4>
          <p className="text-gray-400 text-sm">
            <T
              en="Empowering learning, one free resource at a time."
              ur="تعلیم کو بااختیار بنانا، ایک وقت میں ایک مفت ذریعہ۔"
              lang={lang}
            />
          </p>
        </div>
        <div className="text-center md:text-right">
          <h5 className="text-lg font-semibold mb-3">
            <T en="Stay Updated" ur="تازہ ترین رہیں" lang={lang} />
          </h5>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder={placeholderText[lang]}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md"
            >
              <T en="Subscribe" ur="سبسکرائب کریں" lang={lang} />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
