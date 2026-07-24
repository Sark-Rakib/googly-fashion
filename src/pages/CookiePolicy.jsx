import { Link } from "react-router-dom";
import { ChevronRight, Cookie, Settings, Shield } from "lucide-react";

const CookiePolicy = () => {
  const sections = [
    {
      icon: Cookie,
      title: "1. What Are Cookies",
      content: "Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences, login status, and browsing behavior. Cookies are widely used to make websites work more efficiently and provide a better user experience. They cannot run programs or deliver viruses to your device. Some cookies are essential for basic functionality, while others enhance your experience."
    },
    {
      icon: Settings,
      title: "2. Types of Cookies We Use",
      content: "We use several types of cookies: Essential cookies are necessary for the platform to function properly, including authentication, security, and shopping cart functionality. Analytics cookies help us understand how visitors interact with our site by collecting anonymous data. Functional cookies remember your preferences and settings. Marketing cookies track your browsing habits to deliver relevant advertisements. Session cookies are temporary and expire when you close your browser. Persistent cookies remain on your device for a set period."
    },
    {
      icon: Shield,
      title: "3. How We Use Cookies",
      content: "We use cookies to enable secure login and maintain your session, remember items in your shopping cart, analyze site traffic and user behavior to improve our platform, personalize content and product recommendations, deliver targeted advertisements, measure the effectiveness of marketing campaigns, provide social media features, and detect and prevent fraudulent activity. The data collected helps us optimize your shopping experience and improve our services."
    },
    {
      icon: Settings,
      title: "4. Third-Party Cookies",
      content: "We allow select third-party partners to place cookies on your device for analytics and advertising purposes. These include Google Analytics for site analytics, Facebook Pixel for ad targeting and conversion tracking, and payment processors for secure transactions. These third parties have their own privacy policies governing the use of your information. We do not control these third-party cookies. We recommend reviewing their privacy policies for more information."
    },
    {
      icon: Cookie,
      title: "5. Managing Cookies",
      content: "You have full control over cookies. Most browsers allow you to block or delete cookies through your browser settings. You can also use our cookie consent banner to manage your preferences. Please note that disabling certain cookies may affect the functionality of our platform. Essential cookies cannot be disabled as they are necessary for the platform to operate. Instructions for managing cookies can be found in your browser's help section."
    },
    {
      icon: Shield,
      title: "6. Changes to Policy",
      content: "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically. Material changes will be communicated through our platform or via email. Your continued use of the platform after changes constitute acceptance of the updated policy."
    }
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Cookie Policy</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Cookie Policy</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">How we use cookies and similar technologies</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-gray-400 mb-8">Last Updated: June 1, 2026</div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 md:p-12 space-y-10">
              {sections.map((section, index) => (
                <div key={index}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1F3A63]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <section.icon className="w-5 h-5 text-[#1F3A63]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                  {index < sections.length - 1 && <div className="border-b border-gray-100 mt-8" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
