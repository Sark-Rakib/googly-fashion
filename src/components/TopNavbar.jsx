import { Link } from "react-router-dom";
import { useTranslation } from "../context/LanguageContext";

const TopNavbar = () => {
  const { t, language, setLanguage } = useTranslation();

  return (
    <div>
      <div className="bg-[#091f32] text-white text-xs">
        <div className="px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium lg:hidden">{t("topNav.welcome")}</span>
            <span className="hidden lg:inline">🚚</span>
            <span className="hidden lg:inline">{t("topNav.freeDelivery")}</span>
          </div>

          <div className="hidden lg:block font-medium">{t("topNav.welcome")}</div>

          <div className="flex items-center">
            <Link
              to="/track-order"
              className="lg:hidden hover:text-gray-300 transition"
            >
              {t("topNav.trackOrder")}
            </Link>
            <div className="hidden lg:flex items-center">
              <a href="#" className="px-4 hover:text-gray-300 transition">
                {t("topNav.sellOn")}
              </a>

              <span className="h-4 w-px bg-white/20"></span>

              <a
                href="/shipping-information"
                className="px-4 hover:text-gray-300 transition"
              >
                {t("topNav.customerService")}
              </a>

              <span className="h-4 w-px bg-white/20"></span>

              <Link
                to="/track-order"
                className="px-4 hover:text-gray-300 transition"
              >
                {t("topNav.trackOrder")}
              </Link>

              <span className="h-4 w-px bg-white/20"></span>

              <button
                onClick={() => setLanguage(language === "en" ? "bn" : "en")}
                className="flex items-center gap-1 ml-4 hover:text-gray-300 transition"
              >
                {language === "en" ? t("topNav.bangla") : t("topNav.english")}
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
