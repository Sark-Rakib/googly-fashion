import { Link } from "react-router-dom";
import { ChevronRight, FileCheck, Scale, Shield, Globe, Heart } from "lucide-react";

const Compliance = () => {
  const sections = [
    {
      icon: FileCheck,
      title: "1. Regulatory Compliance",
      content: "Googly Fashion operates in full compliance with the laws and regulations of Bangladesh and all jurisdictions in which we conduct business. We adhere to the Digital Commerce Act, Consumer Rights Protection Act, and all applicable e-commerce regulations. Our compliance team monitors regulatory changes and implements necessary updates to our policies and practices. We maintain all required licenses, registrations, and permits for our operations and regularly undergo compliance audits."
    },
    {
      icon: Shield,
      title: "2. Data Protection Compliance",
      content: "We comply with the Bangladesh Data Protection Act and international data protection standards including GDPR where applicable. Our data handling practices are designed to protect customer privacy and ensure secure processing of personal information. We conduct regular Data Protection Impact Assessments and maintain comprehensive data processing records. Our Data Protection Officer oversees compliance and serves as the point of contact for regulatory authorities and data subjects."
    },
    {
      icon: Scale,
      title: "3. Consumer Rights Compliance",
      content: "We fully support and comply with consumer protection laws ensuring fair treatment of all customers. This includes transparent pricing, accurate product descriptions, clear return and refund policies, and protection against unfair trade practices. We provide clear pre-purchase information including total costs, delivery timelines, and terms of sale. Customers have the right to cancel orders, receive refunds, and access redress mechanisms as provided by law."
    },
    {
      icon: Globe,
      title: "4. Tax Compliance",
      content: "Googly Fashion complies with all tax laws and regulations in Bangladesh including VAT, income tax, and customs duties. We collect and remit applicable taxes on all transactions as required by law. Our financial records are maintained in accordance with Bangladesh Financial Reporting Standards. We cooperate fully with the National Board of Revenue and other tax authorities. We provide customers with proper tax invoices and receipts for all purchases."
    },
    {
      icon: Heart,
      title: "5. Labor and Safety Standards",
      content: "We are committed to ethical labor practices and require all our partners and suppliers to adhere to international labor standards including fair wages, safe working conditions, and prohibition of child labor and forced labor. Our supply chain compliance program includes regular audits and inspections of supplier facilities. We comply with Bangladesh labor laws including the Bangladesh Labor Act and workplace safety regulations. Any violations result in immediate corrective action."
    },
    {
      icon: Globe,
      title: "6. Environmental Compliance",
      content: "We are dedicated to environmental sustainability and compliance with environmental regulations. Our initiatives include eco-friendly packaging, waste reduction programs, and partnerships with environmentally responsible suppliers. We comply with environmental protection laws and regulations in all our operations. We regularly assess our environmental impact and implement improvement measures. We encourage our customers to recycle packaging and make sustainable choices."
    },
    {
      icon: Shield,
      title: "7. Reporting Concerns",
      content: "We maintain a confidential reporting system for compliance concerns. Employees, customers, and partners can report potential violations through our compliance hotline at compliance@googlyfashion.com or by mail. All reports are investigated thoroughly and impartially. We prohibit retaliation against anyone who makes a good faith report of a compliance concern. We are committed to transparency and will take appropriate corrective action when violations are found."
    }
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Compliance</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Compliance</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Our commitment to regulatory compliance and ethical practices</p>
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

export default Compliance;
