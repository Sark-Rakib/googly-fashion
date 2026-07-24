import { Link } from "react-router-dom";
import { ChevronRight, Shield, Eye, Lock } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "1. Information We Collect",
      content: "We collect information you provide directly such as your name, email address, phone number, shipping address, and payment details when you create an account, place an order, or communicate with us. We also automatically collect certain information when you visit our platform including your IP address, browser type, device information, browsing behavior, and cookies. We may collect information from third-party sources such as social media platforms when you log in or interact with our content."
    },
    {
      icon: Eye,
      title: "2. How We Use Your Information",
      content: "We use your information to process and fulfill orders, communicate with you about your purchases, provide customer support, personalize your shopping experience, send marketing communications (with your consent), improve our platform and services, detect and prevent fraudulent activity, and comply with legal obligations. We process your information based on legitimate business interests, contractual necessity, your consent, or legal requirements."
    },
    {
      icon: Lock,
      title: "3. Information Sharing",
      content: "We may share your information with trusted third-party service providers who assist us in operating our platform, processing payments, delivering orders, and analyzing data. These partners are contractually bound to protect your information. We may disclose information if required by law or to protect our rights and safety. We do not sell your personal information to third parties for their marketing purposes."
    },
    {
      icon: Shield,
      title: "4. Data Security",
      content: "We implement industry-standard security measures including SSL/TLS encryption, secure payment processing, firewalls, and access controls to protect your personal information. However, no method of transmission over the internet is 100% secure. We regularly review and update our security practices. In the event of a data breach, we will notify affected users and relevant authorities as required by applicable law."
    },
    {
      icon: Eye,
      title: "5. Your Rights",
      content: "You have the right to access, correct, update, or delete your personal information. You may object to or restrict certain processing activities. You can request a copy of the data we hold about you. You may withdraw consent at any time where we rely on consent to process your data. To exercise these rights, please contact our Data Protection Officer. We will respond to your request within the timeframe required by applicable law."
    },
    {
      icon: Lock,
      title: "6. Cookies",
      content: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and deliver personalized content. You can control cookie preferences through your browser settings. Essential cookies are necessary for the platform to function. Analytics and marketing cookies require your consent. You can change your cookie preferences at any time through your account settings or cookie banner."
    },
    {
      icon: Shield,
      title: "7. Contact Us",
      content: 'If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@googlyfashion.com or write to us at: Googly Fashion, Data Protection Office, 123 Fashion Street, Dhaka 1205, Bangladesh. We are committed to addressing your concerns and will respond to inquiries within 48 business hours. You also have the right to lodge a complaint with the relevant data protection authority.'
    }
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">How we collect, use, and protect your personal information</p>
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

export default PrivacyPolicy;
