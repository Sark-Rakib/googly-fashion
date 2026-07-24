import { Link } from "react-router-dom";
import { ChevronRight, FileText, Shield, ShoppingBag, Truck, RotateCcw, BookOpen, Scale, AlertTriangle } from "lucide-react";

const TermsConditions = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: "By accessing or using Googly Fashion, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you may not use our platform. We reserve the right to update these terms at any time without prior notice. Continued use of the platform after changes constitutes acceptance of the new terms. It is your responsibility to review these terms periodically."
    },
    {
      icon: Shield,
      title: "2. Account Registration",
      content: "To access certain features, you must register for an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for safeguarding your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use. We reserve the right to suspend or terminate accounts that violate these terms."
    },
    {
      icon: ShoppingBag,
      title: "3. Products and Pricing",
      content: "We strive to display accurate product descriptions, images, and pricing. However, errors may occur. We reserve the right to correct any errors and update prices at any time without prior notice. All prices are listed in BDT (Bangladeshi Taka) unless stated otherwise. We do not guarantee that product colors as shown on your screen will be accurate. Promotional offers are subject to specific terms and conditions."
    },
    {
      icon: Truck,
      title: "4. Orders and Payment",
      content: "Placing an order constitutes an offer to purchase. We reserve the right to accept or decline any order. We may require additional verification for certain orders. Payment must be made in full at the time of purchase unless other arrangements are explicitly agreed upon. Accepted payment methods include credit/debit cards, mobile banking, and cash on delivery where available. Orders are subject to product availability."
    },
    {
      icon: RotateCcw,
      title: "5. Shipping and Delivery",
      content: "We aim to process and ship orders within the estimated timeframes provided at checkout. Delivery times are estimates and not guaranteed. We are not responsible for delays caused by third-party carriers or unforeseen circumstances. Risk of loss passes to you upon delivery. Delivery fees are calculated based on location, weight, and shipping method. You are responsible for providing accurate delivery information."
    },
    {
      icon: BookOpen,
      title: "6. Returns and Refunds",
      content: "Our return policy allows returns within the specified return period for eligible items. Products must be unused, unworn, and in their original packaging with all tags attached. Refunds are processed to the original payment method within 7-14 business days after we receive and inspect the returned item. Certain items such as intimate apparel, accessories, and final sale items are non-returnable."
    },
    {
      icon: Scale,
      title: "7. Intellectual Property",
      content: "All content on Googly Fashion including logos, text, images, graphics, and software is the property of Googly Fashion or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written consent. The Googly Fashion name and logo are registered trademarks. Any unauthorized use may result in legal action."
    },
    {
      icon: AlertTriangle,
      title: "8. Limitation of Liability",
      content: "Googly Fashion shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform. Our total liability for any claim shall not exceed the amount paid by you for the product giving rise to the claim. We do not warrant that the platform will be uninterrupted, secure, or error-free. Some jurisdictions may not allow certain limitations, so these may not apply to you."
    },
    {
      icon: Shield,
      title: "9. Governing Law",
      content: "These terms shall be governed by and construed in accordance with the laws of Bangladesh. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Dhaka, Bangladesh. We reserve the right to seek injunctive or other equitable relief in any jurisdiction. If any provision is found to be unenforceable, the remaining provisions shall remain in full force and effect."
    }
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Terms & Conditions</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Terms & Conditions</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Please read these terms carefully before using our platform</p>
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

export default TermsConditions;
