import { Link } from "react-router-dom";
import { ChevronRight, RefreshCw, Package, Clock, CheckCircle, ArrowLeft } from "lucide-react";

const ReturnRefundPolicy = () => {
  const process = [
    { icon: Package, step: "1", title: "Initiate Return", desc: "Log into your account and select the item you wish to return." },
    { icon: Package, step: "2", title: "Pack the Item", desc: "Pack the item securely with all tags, packaging, and accessories." },
    { icon: Truck, step: "3", title: "Ship It Back", desc: "Hand the package to our pickup agent or drop it at a designated center." },
    { icon: RefreshCw, step: "4", title: "Quality Check", desc: "We inspect the returned item to ensure it meets our policy criteria." },
    { icon: CheckCircle, step: "5", title: "Refund Initiated", desc: "Refund is processed to your original payment method within 5–7 days." },
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Return & Refund Policy</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Return & Refund Policy</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Hassle-free returns within 30 days</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Eligibility Criteria</h2>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Eligible for Return</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>Items must be returned within 30 days of delivery</li>
                <li>Products must be unworn, unwashed, and in original condition</li>
                <li>All tags and packaging must be intact</li>
                <li>Defective or wrong items are fully eligible</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">Not Eligible for Return</h3>
              <ul className="space-y-2 text-red-700 text-sm">
                <li>Items beyond 30 days of delivery</li>
                <li>Used, washed, or damaged products</li>
                <li>Innerwear, swimwear, and personal care items</li>
                <li>Items without original tags or packaging</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Return Process</h2>
          <div className="max-w-4xl mx-auto mb-16">
            {process.map((item, i) => (
              <div key={i} className="flex items-start gap-6 mb-8">
                <div className="w-12 h-12 bg-[#1F3A63] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Refund Timeline</h2>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-5 text-center border border-gray-200">
                <Clock className="w-8 h-8 text-[#1F3A63] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Inspection</h3>
                <p className="text-2xl font-bold text-[#1F3A63] mt-2">1–2 days</p>
                <p className="text-sm text-gray-500 mt-1">Quality check on returned item</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 text-center border border-gray-200">
                <RefreshCw className="w-8 h-8 text-[#1F3A63] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Processing</h3>
                <p className="text-2xl font-bold text-[#1F3A63] mt-2">3–5 days</p>
                <p className="text-sm text-gray-500 mt-1">Refund is being processed</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 text-center border border-gray-200">
                <CheckCircle className="w-8 h-8 text-[#1F3A63] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Refund Complete</h3>
                <p className="text-2xl font-bold text-[#1F3A63] mt-2">5–7 days</p>
                <p className="text-sm text-gray-500 mt-1">Money credited to your account</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Exceptions</h2>
          <div className="max-w-3xl mx-auto mb-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-yellow-800 text-sm leading-relaxed">
              Certain items such as innerwear, swimwear, perishable goods, and personalized products are not eligible for return or exchange unless they arrive damaged or defective. Sale items may be subject to different return conditions as specified at the time of purchase.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center bg-gray-50 rounded-xl p-10 border border-gray-200">
            <ArrowLeft className="w-10 h-10 text-[#EF394E] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Initiate a Return</h2>
            <p className="text-gray-500 mb-6">Ready to return an item? Start the process from your account dashboard.</p>
            <Link to="/dashboard" className="inline-block bg-[#EF394E] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d63243] transition-colors">
              Start a Return
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnRefundPolicy;
