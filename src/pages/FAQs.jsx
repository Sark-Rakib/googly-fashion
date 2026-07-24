import { Link } from "react-router-dom";
import { ChevronRight, HelpCircle, ShoppingCart, CreditCard, Truck, RefreshCw, User } from "lucide-react";

const FAQs = () => {
  const categories = [
    {
      icon: ShoppingCart,
      title: "Orders",
      items: [
        { q: "How do I place an order?", a: "Browse our catalog, add items to your cart, proceed to checkout, enter your shipping details, and complete payment. You will receive an order confirmation via email." },
        { q: "Can I cancel or modify my order?", a: "Orders can be cancelled or modified within 2 hours of placement. Visit your account dashboard or contact support for assistance." },
        { q: "How do I know if my order was successful?", a: "You will receive a confirmation email with your order ID and details. You can also check your order history in your account." },
      ],
    },
    {
      icon: CreditCard,
      title: "Payments",
      items: [
        { q: "What payment methods do you accept?", a: "We accept cash on delivery, bKash, Nagad, bank transfer, and credit/debit cards. All payments are processed securely." },
        { q: "Is it safe to pay online?", a: "Yes. We use encrypted payment gateways and do not store your payment information. Your transactions are fully secure." },
        { q: "Do you offer installment payment?", a: "Yes. We offer 3, 6, and 12-month EMI plans through our partner banks. Check the Installment Payment page for details." },
      ],
    },
    {
      icon: Truck,
      title: "Shipping",
      items: [
        { q: "How long does delivery take?", a: "Standard delivery takes 5–7 business days. Express delivery takes 2–3 days. Same-day delivery is available in select areas." },
        { q: "What are the shipping charges?", a: "Standard shipping is ৳60, Express is ৳150, and Same-day is ৳250. Free shipping is available on orders over ৳2,000." },
        { q: "Do you deliver to my area?", a: "We deliver to all major cities and districts across Bangladesh. Enter your pincode on the product page to check availability." },
      ],
    },
    {
      icon: RefreshCw,
      title: "Returns & Refunds",
      items: [
        { q: "What is your return policy?", a: "We offer hassle-free returns within 30 days of delivery. Items must be unworn, with tags and original packaging intact." },
        { q: "How long does a refund take?", a: "Refunds are processed within 5–7 business days after the returned item passes quality inspection." },
        { q: "Can I exchange an item?", a: "Yes. You can request an exchange for a different size or color. The exchange process follows the same timeline as returns." },
      ],
    },
    {
      icon: User,
      title: "Account",
      items: [
        { q: "How do I create an account?", a: "Click on 'Sign Up' on the top right corner, enter your name, email, and password. You can also sign up using Google or Facebook." },
        { q: "I forgot my password. What should I do?", a: "Click on 'Forgot Password' on the login page. Enter your registered email, and we will send you a password reset link." },
        { q: "How do I update my profile?", a: "Log into your account, go to the Dashboard, and select 'Edit Profile' to update your name, email, phone number, and delivery address." },
      ],
    },
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Frequently Asked Questions</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Frequently Asked Questions</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Find answers to common questions</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {categories.map((cat, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#1F3A63]/10 rounded-full flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-[#1F3A63]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{cat.title}</h2>
                </div>
                <div className="space-y-3">
                  {cat.items.map((item, j) => (
                    <details key={j} className="bg-white border border-gray-200 rounded-lg overflow-hidden group">
                      <summary className="px-6 py-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                        {item.q}
                      </summary>
                      <div className="px-6 py-4 border-t border-gray-100 text-gray-600 leading-relaxed">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500 mb-4">Still have questions? We are here to help.</p>
            <Link to="/contact" className="inline-block bg-[#EF394E] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d63243] transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
