import { Link } from "react-router-dom";
import { ChevronRight, Package, Truck, ClipboardCheck, Star, Handshake } from "lucide-react";

const BecomeSupplier = () => {
  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Become a Supplier</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Become a Supplier</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Partner with us to deliver quality fashion to thousands of customers</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">What We Look For</h2>
            <p className="text-gray-600 text-center leading-relaxed">
              We partner with manufacturers, distributors, and brands who share our commitment to quality, 
              reliability, and ethical practices. Our suppliers are the backbone of the Googly Fashion 
              experience, and we are selective in choosing partners who can meet our standards.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Supplier Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Package, title: "Bulk Orders", desc: "Consistent, large-volume orders from a growing customer base." },
              { icon: Truck, title: "Logistics Support", desc: "We handle delivery logistics so you can focus on production." },
              { icon: ClipboardCheck, title: "Quality Recognition", desc: "Top-performing suppliers get featured placements and badges." },
              { icon: Handshake, title: "Long-term Partnership", desc: "We build lasting relationships with reliable suppliers." },
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

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Application Process</h2>
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            {[
              { step: "Step 1", title: "Submit Application", desc: "Fill out our supplier application form with your business details, product categories, and capacity." },
              { step: "Step 2", title: "Quality Assessment", desc: "Our team reviews your products, manufacturing processes, and quality control measures." },
              { step: "Step 3", title: "Partnership Agreement", desc: "We sign a partnership agreement outlining terms, pricing, and delivery expectations." },
              { step: "Step 4", title: "Onboarding & Listing", desc: "Your products are onboarded onto our platform and made available to customers." },
            ].map((step, i) => (
              <div key={i} className="flex gap-4 p-5 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="w-10 h-10 bg-[#1F3A63] text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { name: "Mohammad Ali", role: "Textile Manufacturer, Narayanganj", quote: "Partnering with Googly Fashion opened up a whole new channel for our business. Their team is professional and payments are always on time." },
              { name: "Shamima Yeasmin", role: "Handicraft Supplier, Cumilla", quote: "As a local artisan, I never thought I could reach customers across the country. Googly Fashion made it possible." },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <Star className="w-5 h-5 text-[#1F3A63] mb-3" />
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] rounded-xl p-10">
            <h2 className="text-2xl font-bold text-white mb-4">Become a Partner Supplier</h2>
            <p className="text-white/70 mb-6">Fill out the supplier application form and our team will reach out within 3 business days.</p>
            <button className="bg-white text-[#1F3A63] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Apply as Supplier
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeSupplier;
