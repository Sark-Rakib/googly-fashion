import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

const NewsletterSection = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t("home.enterValidEmail"));
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-10 sm:py-12 lg:py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#1F3A63] to-[#2a4d7a] p-6 sm:p-8 md:p-12 lg:p-16">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <p className="text-[#EF394E] text-xs sm:text-sm font-semibold tracking-wider mb-2">
              {t("home.newsletter")}
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {t("home.newsletterTitle")}
            </h2>

            <p className="text-white/70 mt-3 text-sm sm:text-base max-w-lg mx-auto">
              {t("home.newsletterSubtitle")}
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-green-500 text-white font-medium rounded-xl text-sm sm:text-base"
              >
                {t("home.successfullySubscribed")}
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-6 w-full max-w-md mx-auto"
              >
                {/* RESPONSIVE INPUT WRAP */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("home.newsletterPlaceholder")}
                    className="w-full px-4 py-3 text-sm text-gray-900 bg-white rounded-xl sm:rounded-r-none sm:rounded-l-xl focus:outline-none"
                  />

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-[#EF394E] text-white text-sm font-semibold rounded-xl sm:rounded-l-none sm:rounded-r-xl hover:bg-[#d63244] transition-colors flex items-center justify-center gap-2"
                  >
                    {t("home.subscribe")}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {error && (
                  <p className="text-red-300 text-xs mt-2 text-left">{error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
