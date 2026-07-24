import { Link } from "react-router-dom";
import { ChevronRight, CreditCard, Smartphone, Building, DollarSign, Shield } from "lucide-react";

const PaymentServices = () => {
  const methods = [
    { icon: DollarSign, title: "Cash on Delivery", desc: "Pay in cash when your order arrives at your doorstep. No advance payment required." },
    { icon: Smartphone, title: "bKash", desc: "Pay instantly using your bKash mobile wallet. Send payment to our bKash Merchant number." },
    { icon: Smartphone, title: "Nagad", desc: "Use your Nagad account for quick and secure payments. Available 24/7." },
    { icon: Building, title: "Bank Transfer", desc: "Transfer directly to our bank account via online banking or bank branch." },
    { icon: CreditCard, title: "Credit / Debit Card", desc: "Visa, Mastercard, and American Express accepted. Secure payment gateway." },
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Payment Services</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Payment Services</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Secure and convenient payment options</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Available Payment Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {methods.map((method, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-[#1F3A63]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Security Information</h2>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-10 h-10 text-[#1F3A63] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Your Security Matters</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    At Googly Fashion, we take your payment security seriously. All transactions are encrypted using industry-standard SSL technology. We do not store your full card details or sensitive financial information on our servers. Our payment gateways are PCI-DSS compliant, ensuring your data is handled with the highest level of security.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-[#1F3A63]">SSL</div>
                  <div className="text-sm text-gray-500">Encrypted Connection</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-[#1F3A63]">PCI-DSS</div>
                  <div className="text-sm text-gray-500">Compliant Gateway</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-[#1F3A63]">100%</div>
                  <div className="text-sm text-gray-500">Data Protection</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Payment FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white border border-gray-200 rounded-lg overflow-hidden group">
              <summary className="px-6 py-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-50">Is there any extra charge for using mobile banking?</summary>
              <div className="px-6 py-4 border-t border-gray-100 text-gray-600 leading-relaxed">
                No, there are no additional charges for using bKash or Nagad. You pay exactly the order total. Some bank transfers may include standard transaction fees imposed by your bank.
              </div>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg overflow-hidden group">
              <summary className="px-6 py-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-50">Can I use multiple payment methods for one order?</summary>
              <div className="px-6 py-4 border-t border-gray-100 text-gray-600 leading-relaxed">
                Currently, we only support a single payment method per order. You can choose any one of the available methods during checkout.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentServices;
