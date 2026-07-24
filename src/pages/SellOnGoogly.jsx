import { Link } from "react-router-dom";
import {
  ChevronRight,
  Store,
  TrendingUp,
  Shield,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";

const SellOnGoogly = () => {
  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">
              Sell on Googly Fashion
            </span>
          </div>
        </div>
      </div>

      <section className="bg-linear-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Start Selling Today</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Reach millions of fashion-conscious customers across Bangladesh
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Why Sell With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Store,
                title: "Large Audience",
                desc: "Access thousands of fashion-conscious shoppers actively looking for your products.",
              },
              {
                icon: TrendingUp,
                title: "Boost Sales",
                desc: "Our platform drives 300% average sales growth for new sellers within the first 6 months.",
              },
              {
                icon: Shield,
                title: "Secure Platform",
                desc: "Protected payments, fraud prevention, and reliable dispute resolution.",
              },
              {
                icon: Users,
                title: "Seller Support",
                desc: "Dedicated account managers and 24/7 support to help you succeed.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#1F3A63]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              {
                step: "01",
                title: "Register",
                desc: "Create your seller account with basic business information.",
              },
              {
                step: "02",
                title: "List Products",
                desc: "Upload your products with descriptions, prices, and images.",
              },
              {
                step: "03",
                title: "Get Orders",
                desc: "Start receiving orders from customers across the country.",
              },
              {
                step: "04",
                title: "Deliver & Earn",
                desc: "Ship orders on time and get paid directly to your account.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-[#1F3A63] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
              Seller Requirements
            </h2>
            <ul className="space-y-3 text-gray-600">
              {[
                "Valid business registration or trade license",
                "Authentic products with proper branding and packaging",
                "Ability to fulfill orders within 2-3 business days",
                "Commitment to our customer service standards",
                "Compliance with all applicable laws and regulations",
              ].map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              {
                name: "Amina Textiles",
                role: "Dhaka-based Saree Seller",
                quote:
                  "Googly Fashion transformed our business. We went from selling 20 sarees a month to over 500. The platform's reach is incredible.",
                rating: 5,
              },
              {
                name: "TrendyWear BD",
                role: "Chattogram Fashion Brand",
                quote:
                  "The seller dashboard and analytics tools helped us understand our customers better and optimize our listings for higher conversions.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-linear-to-r from-[#1F3A63] to-[#2a4d7a] rounded-xl p-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Start Selling?
            </h2>
            <p className="text-white/70 mb-6">
              Join thousands of successful sellers on Googly Fashion today.
            </p>
            <button className="bg-white text-[#1F3A63] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Start Selling
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellOnGoogly;
