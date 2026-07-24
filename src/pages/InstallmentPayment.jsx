import { Link } from "react-router-dom";
import { ChevronRight, CreditCard, Calendar, Building, CheckCircle, Percent } from "lucide-react";

const InstallmentPayment = () => {
  const steps = [
    { icon: CreditCard, title: "Choose Installment at Checkout", desc: "Select the installment option during payment and pick your preferred plan." },
    { icon: Calendar, title: "Pay Monthly", desc: "Pay in easy monthly installments with zero or low interest." },
    { icon: CheckCircle, title: "Enjoy Your Purchase", desc: "Receive your order immediately while paying over time." },
  ];

  const plans = [
    { months: "3 Months", interest: "0%", monthly: "1/3 of total", total: "Full price", best: true },
    { months: "6 Months", interest: "0%", monthly: "1/6 of total", total: "Full price", best: false },
    { months: "12 Months", interest: "8%", monthly: "1/12 + interest", total: "Total + 8%", best: false },
  ];

  const banks = [
    "Sonali Bank", "Janata Bank", "Dutch-Bangla Bank", "BRAC Bank", "HSBC Bangladesh",
    "Eastern Bank", "City Bank", "Islami Bank Bangladesh",
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Installment Payment</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Installment Payment</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Shop now, pay later with flexible EMI options</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">How Installment Works</h2>
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

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Available Plans</h2>
          <div className="overflow-x-auto mb-16">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="bg-[#1F3A63] text-white">
                  <th className="text-left py-3 px-4 font-medium">Plan</th>
                  <th className="text-left py-3 px-4 font-medium">Interest Rate</th>
                  <th className="text-left py-3 px-4 font-medium">Monthly Payment</th>
                  <th className="text-left py-3 px-4 font-medium">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, i) => (
                  <tr key={i} className={`border-b border-gray-200 hover:bg-gray-50 ${plan.best ? "bg-green-50" : ""}`}>
                    <td className="py-3 px-4 font-medium text-gray-900">{plan.months}{plan.best && <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Best</span>}</td>
                    <td className="py-3 px-4 text-gray-600">{plan.interest}</td>
                    <td className="py-3 px-4 text-gray-600">{plan.monthly}</td>
                    <td className="py-3 px-4 font-medium text-[#1F3A63]">{plan.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Partner Banks</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">Installment plans are available through the following partner banks.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {banks.map((bank, i) => (
              <span key={i} className="bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm text-gray-700 hover:border-[#1F3A63] hover:text-[#1F3A63] transition-colors shadow-sm">
                <Building className="w-4 h-4 inline-block mr-1.5" />
                {bank}
              </span>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Eligibility</h2>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Must be 18 years or older
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Valid national ID or passport
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      Bank account with a partner bank
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Minimum order of ৳2,000
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Good credit history
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Active mobile number for verification
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] rounded-xl p-10">
            <Percent className="w-10 h-10 text-white/80 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Ready to Shop on Installment?</h2>
            <p className="text-white/70 mb-6">Start shopping and choose installment at checkout.</p>
            <Link to="/shop" className="inline-block bg-white text-[#1F3A63] px-10 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstallmentPayment;
