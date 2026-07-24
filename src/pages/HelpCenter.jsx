import { Link } from "react-router-dom";
import { ChevronRight, Search, HelpCircle, ShoppingCart, CreditCard, RefreshCw, User, Truck } from "lucide-react";

const HelpCenter = () => {
  const categories = [
    { icon: ShoppingCart, title: "Orders", desc: "Track, modify, or cancel your orders" },
    { icon: CreditCard, title: "Payments", desc: "Payment methods, billing, and receipts" },
    { icon: RefreshCw, title: "Returns & Refunds", desc: "Return process and refund timeline" },
    { icon: User, title: "Account", desc: "Manage your profile and preferences" },
    { icon: Truck, title: "Shipping", desc: "Delivery options and shipping policies" },
  ];

  const articles = [
    { title: "How to track your order", desc: "Learn how to track your order status in real-time using your order ID." },
    { title: "What is your return policy?", desc: "Our 30-day hassle-free return policy explained step by step." },
    { title: "Accepted payment methods", desc: "All payment options including cash on delivery, bKash, and cards." },
    { title: "How to change or cancel an order", desc: "Steps to modify or cancel your order before it ships." },
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Help Center</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Help Center</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">How can we help you today?</p>
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF394E] focus:border-transparent text-gray-900"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Help Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {categories.map((cat, i) => (
              <button key={i} className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-md hover:border-[#1F3A63] transition-all group cursor-pointer">
                <div className="w-12 h-12 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1F3A63] transition-colors">
                  <cat.icon className="w-6 h-6 text-[#1F3A63] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{cat.title}</h3>
                <p className="text-sm text-gray-500">{cat.desc}</p>
              </button>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Top Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {articles.map((article, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-10 h-10 bg-[#EF394E]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 text-[#EF394E]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{article.title}</h3>
                  <p className="text-sm text-gray-500">{article.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500">Still need help?</p>
            <Link to="/contact" className="inline-block mt-3 bg-[#EF394E] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d63243] transition-colors">Contact Support</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
