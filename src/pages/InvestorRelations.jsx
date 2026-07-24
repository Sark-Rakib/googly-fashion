import { Link } from "react-router-dom";
import { ChevronRight, TrendingUp, DollarSign, BarChart3, Users, Phone } from "lucide-react";

const InvestorRelations = () => {
  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Investor Relations</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Investor Relations</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Transparency and growth — partnering with our investors</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Company Overview</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: TrendingUp, value: "300%", label: "Year-over-Year Growth" },
              { icon: DollarSign, value: "₳5M+", label: "Annual Revenue Run Rate" },
              { icon: BarChart3, value: "10K+", label: "Active Customers" },
              { icon: Users, value: "64+", label: "Districts Covered" },
            ].map((metric, i) => (
              <div key={i} className="bg-white rounded-lg p-6 text-center border border-gray-200">
                <metric.icon className="w-8 h-8 text-[#1F3A63] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-sm text-gray-500 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Our Growth Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Since our founding in 2024, Googly Fashion has demonstrated remarkable growth trajectories. 
                We have expanded from a single-city operation to serving customers in 64+ districts, with a 
                revenue run rate exceeding ₳5 million. Our platform hosts over 500 brands and 5,000 products, 
                making us one of the fastest-growing fashion e-commerce platforms in Bangladesh.
              </p>
              <p>
                We are currently in our pre-Series A phase and actively seeking strategic partners who share 
                our vision of transforming the Bangladeshi fashion landscape. Our expansion plans include 
                launching a fulfillment network, expanding to 100+ cities, and introducing private label 
                collections.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { name: "Rakibul Hasan", role: "Founder & CEO", bg: "bg-[#1F3A63]" },
              { name: "Fatima Begum", role: "Chief Operating Officer", bg: "bg-[#2a4d7a]" },
              { name: "Shahid Ahmed", role: "Chief Financial Officer", bg: "bg-[#1F3A63]" },
            ].map((person, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className={`w-20 h-20 ${person.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
                <p className="text-sm text-gray-500">{person.role}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-10 border border-gray-200 text-center">
            <Phone className="w-10 h-10 text-[#1F3A63] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Investor Relations</h2>
            <p className="text-gray-600 mb-2">
              For investment inquiries, financial reports, or partnership discussions:
            </p>
            <a href="mailto:investors@googlyfashion.com" className="text-[#1F3A63] font-medium hover:underline">
              investors@googlyfashion.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorRelations;
