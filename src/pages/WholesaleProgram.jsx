import { Link } from "react-router-dom";
import { ChevronRight, Package, ShoppingBag, Percent, Truck, Star } from "lucide-react";

const WholesaleProgram = () => {
  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Wholesale Program</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Wholesale Program</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Premium fashion at wholesale prices for your business</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Wholesale Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { name: "Bronze", min: "₳50,000", discount: "10%", features: ["Standard support", "3-5 day delivery", "Online ordering"] },
              { name: "Silver", min: "₳150,000", discount: "20%", features: ["Priority support", "2-3 day delivery", "Dedicated account manager", "Early access to new arrivals"], popular: false },
              { name: "Gold", min: "₳300,000", discount: "30%", features: ["24/7 premium support", "1-2 day delivery", "Dedicated account manager", "Early access & exclusive previews", "Custom packaging options"], popular: true },
            ].map((tier, i) => (
              <div key={i} className={`relative bg-white rounded-lg border-2 ${tier.popular ? 'border-[#1F3A63]' : 'border-gray-200'} p-6 ${tier.popular ? 'shadow-lg' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#EF394E] text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{tier.name}</h3>
                <p className="text-sm text-gray-500 mb-4">Min. order: {tier.min}</p>
                <div className="text-3xl font-bold text-[#1F3A63] mb-6">{tier.discount}</div>
                <p className="text-sm text-gray-500 mb-4">discount on all orders</p>
                <ul className="space-y-2 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 bg-[#1F3A63] text-white rounded-md font-medium hover:bg-[#2a4d7a] transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: ShoppingBag, title: "Browse Collection", desc: "Explore our wholesale catalog of 5,000+ products." },
              { icon: Package, title: "Place Order", desc: "Meet the minimum order value for your tier and place your order." },
              { icon: Truck, title: "We Deliver", desc: "We handle packing and delivery to your doorstep." },
              { icon: Percent, title: "Enjoy Discounts", desc: "Your tier discount is applied automatically to every order." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-[#1F3A63]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Minimum Order Information</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Minimum first order: ₳50,000 (all tiers)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Minimum reorder: ₳25,000</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Mixed products allowed to meet minimum</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Payment terms: 50% upfront, 50% on delivery</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wholesale Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#1F3A63] shrink-0 mt-0.5" />
                  <span>Free shipping on orders over ₳100,000</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#1F3A63] shrink-0 mt-0.5" />
                  <span>Exclusive access to new collections before retail launch</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#1F3A63] shrink-0 mt-0.5" />
                  <span>Dedicated wholesale support team</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#1F3A63] shrink-0 mt-0.5" />
                  <span>Quarterly business reviews and growth planning</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] rounded-xl p-10">
            <h2 className="text-2xl font-bold text-white mb-4">Enroll in the Wholesale Program</h2>
            <p className="text-white/70 mb-6">Register your business and start saving on bulk orders today.</p>
            <button className="bg-white text-[#1F3A63] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WholesaleProgram;
