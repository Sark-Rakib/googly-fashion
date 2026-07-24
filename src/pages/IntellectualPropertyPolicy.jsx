import { Link } from "react-router-dom";
import { ChevronRight, Copyright, FileText, Shield, AlertTriangle } from "lucide-react";

const IntellectualPropertyPolicy = () => {
  const sections = [
    {
      icon: Copyright,
      title: "1. Ownership",
      content: "Googly Fashion owns all intellectual property rights associated with our platform including our brand name, logo, website design, proprietary software, product images, descriptions, and original content. These intellectual property rights are protected under the laws of Bangladesh and international treaties. Nothing in these terms grants you any rights to our intellectual property. All rights not expressly granted are reserved by Googly Fashion."
    },
    {
      icon: FileText,
      title: "2. Trademarks",
      content: 'The name "Googly Fashion," our logo, slogans, and product names are trademarks or registered trademarks of Googly Fashion. You may not use these trademarks without our prior written permission. All third-party trademarks, brand names, and product names appearing on our platform are the property of their respective owners. Any unauthorized use of trademarks may constitute trademark infringement and is strictly prohibited.'
    },
    {
      icon: Copyright,
      title: "3. Copyright",
      content: "All content available on our platform including text, graphics, logos, images, audio clips, video clips, data compilations, and software code is the copyrighted work of Googly Fashion or its content suppliers. You may view, download, and print content for personal, non-commercial use only. Any other reproduction, distribution, modification, public display, or derivative work without written permission is prohibited and may violate copyright laws."
    },
    {
      icon: Shield,
      title: "4. User-Generated Content",
      content: "When you submit reviews, photos, or other content to our platform, you grant Googly Fashion a non-exclusive, royalty-free, worldwide, perpetual license to use, reproduce, modify, publish, and distribute such content. You represent that you own or have the necessary rights to the content you submit. We reserve the right to remove any user-generated content that violates these terms or infringes upon third-party rights."
    },
    {
      icon: AlertTriangle,
      title: "5. Infringement Claims",
      content: "We take intellectual property rights seriously. If you believe that any content on our platform infringes upon your copyright, trademark, or other intellectual property rights, you may submit a notice of infringement. Your notice must include a description of the work claimed to be infringed, identification of the infringing material, your contact information, and a statement of good faith belief that the use is not authorized."
    },
    {
      icon: FileText,
      title: "6. Reporting Process",
      content: "To report intellectual property infringement, please submit a written notice to our Designated Agent at ip@googlyfashion.com or by mail at Googly Fashion, IP Compliance, 123 Fashion Street, Dhaka 1205, Bangladesh. We will promptly investigate all reports and take appropriate action including removal of infringing content and termination of repeat infringers. We may request additional information to process your claim."
    },
    {
      icon: Shield,
      title: "7. Consequences",
      content: "Violation of our intellectual property rights or those of third parties may result in immediate removal of infringing content, suspension or termination of user accounts, legal action including claims for damages and injunctive relief, and reporting to relevant authorities. Repeat infringers will have their accounts permanently terminated. We cooperate fully with law enforcement in investigating intellectual property crimes."
    }
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Intellectual Property Policy</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Intellectual Property Policy</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Protecting intellectual property rights on our platform</p>
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

export default IntellectualPropertyPolicy;
