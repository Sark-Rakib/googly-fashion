import { Link } from "react-router-dom";
import { ChevronRight, Percent, Tag, Clock, ShoppingBag, Star } from "lucide-react";

const OffersDiscounts = () => {
  const offers = [
    { discount: "20% OFF", code: "SUMMER20", title: "Summer Sale", desc: "Get 20% off on all summer collections. Minimum order ৳1,500.", valid: "June 30, 2026" },
    { discount: "৳200 OFF", code: "NEW200", title: "New User Offer", desc: "First-time buyers get ৳200 off on orders above ৳1,000.", valid: "Ongoing" },
    { discount: "15% OFF", code: "FASHION15", title: "Fashion Fest", desc: "15% discount on all fashion accessories and footwear.", valid: "July 15, 2026" },
    { discount: "Free Shipping", code: "FREESHIP", title: "Free Delivery", desc: "Free standard shipping on all orders above ৳2,000.", valid: "Ongoing" },
  ];

  const steps = [
    { icon: Tag, title: "Copy the Code", desc: "Copy the promo code from the offer you want to use." },
    { icon: ShoppingBag, title: "Add Items to Cart", desc: "Shop for items that meet the offer conditions." },
    { icon: Tag, title: "Apply at Checkout", desc: "Paste the code in the promo field during checkout." },
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Offers & Discounts</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Offers & Discounts</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Amazing deals waiting for you</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Active Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {offers.map((offer, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-[#EF394E] to-[#d63243] text-white p-4 text-center">
                  <Percent className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-2xl font-bold">{offer.discount}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">{offer.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{offer.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    Valid until: {offer.valid}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-gray-100 text-gray-800 text-sm font-mono px-3 py-1 rounded border border-gray-200">{offer.code}</span>
                    <button className="text-sm text-[#EF394E] font-medium hover:text-[#d63243] transition-colors" onClick={() => navigator.clipboard?.writeText(offer.code)}>
                      Copy Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">How to Redeem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-[#1F3A63]" />
                </div>
                <div className="text-sm font-bold text-[#1F3A63] mb-1">Step {i + 1}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Terms & Conditions</h2>
          <div className="max-w-3xl mx-auto mb-16">
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-2"><span className="text-[#EF394E] mt-1">•</span>Offers cannot be combined with other promotions unless stated otherwise.</li>
              <li className="flex items-start gap-2"><span className="text-[#EF394E] mt-1">•</span>Each offer is valid for one-time use per customer account.</li>
              <li className="flex items-start gap-2"><span className="text-[#EF394E] mt-1">•</span>Free shipping applies to standard delivery only.</li>
              <li className="flex items-start gap-2"><span className="text-[#EF394E] mt-1">•</span>Offers are subject to product availability and may be withdrawn anytime.</li>
              <li className="flex items-start gap-2"><span className="text-[#EF394E] mt-1">•</span>Googly Fashion reserves the right to modify or cancel offers at its discretion.</li>
            </ul>
          </div>

          <div className="max-w-3xl mx-auto text-center bg-gray-50 rounded-xl p-10 border border-gray-200">
            <Star className="w-10 h-10 text-[#EF394E] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Never Miss a Deal</h2>
            <p className="text-gray-500 mb-6">Subscribe to our newsletter and be the first to know about new offers and discounts.</p>
            <div className="max-w-md mx-auto flex gap-3">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF394E] focus:border-transparent text-gray-900" />
              <button className="bg-[#EF394E] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d63243] transition-colors whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OffersDiscounts;
