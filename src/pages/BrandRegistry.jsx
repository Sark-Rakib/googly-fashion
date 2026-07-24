import { Link } from "react-router-dom";
import { ChevronRight, Shield, CheckCircle, FileText, Search, Award } from "lucide-react";

const BrandRegistry = () => {
  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Brand Registry</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Brand Registry</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Protect your brand and intellectual property on Googly Fashion</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Shield className="w-12 h-12 text-[#1F3A63] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Brand Registry</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Brand Registry is a free service that helps brand owners protect their intellectual property 
              and create an accurate and trusted experience for customers on Googly Fashion. By enrolling 
              your brand, you gain access to powerful tools for managing your brand presence and 
              fighting counterfeit listings.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Shield, title: "Brand Protection", desc: "Automated tools to detect and remove counterfeit listings of your products." },
              { icon: Search, title: "Search Control", desc: "Greater control over how your brand appears in search results." },
              { icon: FileText, title: "Product Descriptions", desc: "Exclusive control over product detail pages for your brand." },
              { icon: Award, title: "Trust Badge", desc: "Verified brand badge displayed on your product pages builds customer trust." },
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#1F3A63]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Enrollment Process</h2>
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            {[
              { step: "01", title: "Create Account", desc: "Sign up for a Googly Fashion seller account if you don't already have one." },
              { step: "02", title: "Verify Your Brand", desc: "Provide trademark registration or pending application for your brand." },
              { step: "03", title: "Complete Profile", desc: "Add brand details, logo, and product categories to your registry profile." },
              { step: "04", title: "Get Verified", desc: "Our team reviews your application within 3-5 business days." },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-lg">
                <div className="w-10 h-10 bg-[#1F3A63] text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Requirements</h2>
            <ul className="space-y-3 text-gray-600">
              {[
                "Active trademark registration (or pending application) in Bangladesh",
                "Brand name must match trademark documentation",
                "Valid business license or registration",
                "Commitment to responding to customer inquiries within 24 hours",
                "Compliance with Googly Fashion's brand guidelines",
              ].map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] rounded-xl p-10">
            <h2 className="text-2xl font-bold text-white mb-4">Protect Your Brand Today</h2>
            <p className="text-white/70 mb-6">Enroll in Brand Registry and take control of your brand on Googly Fashion.</p>
            <button className="bg-white text-[#1F3A63] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandRegistry;
