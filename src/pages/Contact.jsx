import { useTranslation } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("contact.thankYouMessage"));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            {t("contact.title")}
          </h1>
          <p className="mt-4 text-lg text-gray-500">{t("contact.subtitle")}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.message")}
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-md font-medium hover:bg-gray-800"
              >
                {t("contact.sendMessage")}
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {t("contact.address")}
              </h3>
              <p className="mt-1 text-gray-500">
                {t("footer.address").split(",")[0]}<br />
                {t("footer.address")}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {t("contact.phone")}
              </h3>
              <p className="mt-1 text-gray-500">{t("footer.phone")}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {t("contact.emailLabel")}
              </h3>
              <p className="mt-1 text-gray-500">{t("footer.email")}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {t("contact.businessHours")}
              </h3>
              <p className="mt-1 text-gray-500">
                {t("contact.businessHoursDetails")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
