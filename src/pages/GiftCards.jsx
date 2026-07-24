import { Link } from "react-router-dom";
import { ChevronRight, Gift, CreditCard, Heart, Mail, Star } from "lucide-react";

const GiftCards = () => {
  const denominations = [
    { value: "৳500", color: "from-blue-500 to-blue-700", popular: false },
    { value: "৳1,000", color: "from-[#1F3A63] to-[#2a4d7a]", popular: true },
    { value: "৳2,000", color: "from-[#EF394E] to-[#d63243]", popular: false },
  ];

  const steps = [
    { icon: Gift, title: "Choose an Amount", desc: "Select from ৳500, ৳1,000, or ৳2,000 denominations." },
    { icon: Heart, title: "Add a Personal Message", desc: "Write a heartfelt message to accompany your gift." },
    { icon: Mail, title: "Send Instantly", desc: "The gift card is delivered via email within minutes." },
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Gift Cards</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Gift Cards</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">The perfect gift for fashion lovers</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Choose Your Amount</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            {denominations.map((card, i) => (
              <div key={i} className={`bg-gradient-to-br ${card.color} rounded-xl p-6 text-white text-center relative overflow-hidden group hover:shadow-xl transition-shadow`}>
                {card.popular && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Popular
                  </div>
                )}
                <Gift className="w-10 h-10 mx-auto mb-4 opacity-80" />
                <div className="text-3xl font-bold mb-4">{card.value}</div>
                <button className="w-full bg-white/20 backdrop-blur-sm text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30">
                  Buy Now
                </button>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">How It Works</h2>
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

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Send as a Gift</h2>
          <div className="max-w-3xl mx-auto mb-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Make It Personal</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Add a personalized message and schedule the delivery date. Your recipient will receive a beautifully designed email with their gift card code that they can use immediately at checkout.
                </p>
              </div>
              <button className="bg-[#EF394E] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d63243] transition-colors whitespace-nowrap flex items-center gap-2">
                <Heart className="w-5 h-5" /> Send as Gift
              </button>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Terms & Conditions</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#EF394E] mt-1">•</span>
                Gift cards are valid for 12 months from the date of purchase.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EF394E] mt-1">•</span>
                Gift cards can be used on any product available on Googly Fashion.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EF394E] mt-1">•</span>
                Gift cards are non-refundable and cannot be exchanged for cash.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EF394E] mt-1">•</span>
                Multiple gift cards can be combined in a single purchase.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EF394E] mt-1">•</span>
                Any unused balance remains on the gift card for future use.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftCards;
