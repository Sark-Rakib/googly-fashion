import { Link } from "react-router-dom";
import { ChevronRight, Link as LinkIcon, DollarSign, Users, TrendingUp, Star } from "lucide-react";

const AffiliateProgram = () => {
  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Affiliate Program</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Affiliate Program</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Earn up to 15% commission by promoting Googly Fashion</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: LinkIcon, step: "01", title: "Sign Up", desc: "Create your affiliate account in minutes. No approval needed — start immediately." },
              { icon: Users, step: "02", title: "Share Links", desc: "Share your unique referral links on social media, blogs, or with friends." },
              { icon: DollarSign, step: "03", title: "Earn Commissions", desc: "Earn up to 15% on every sale made through your referral links." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#1F3A63] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm text-[#1F3A63] font-semibold mb-1">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Commission Structure</h2>
          <div className="max-w-3xl mx-auto mb-16 overflow-hidden border border-gray-200 rounded-lg">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-900">Tier</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-900">Monthly Sales</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-900">Commission Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { tier: "Starter", sales: "₳0 - ₳50,000", rate: "5%" },
                  { tier: "Silver", sales: "₳50,001 - ₳200,000", rate: "8%" },
                  { tier: "Gold", sales: "₳200,001 - ₳500,000", rate: "12%" },
                  { tier: "Platinum", sales: "₳500,001+", rate: "15%" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.tier}</td>
                    <td className="px-6 py-4 text-gray-600">{row.sales}</td>
                    <td className="px-6 py-4 text-[#1F3A63] font-semibold">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Why Join?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: DollarSign, title: "Generous Commissions", desc: "Earn up to 15% on every sale you refer." },
              { icon: TrendingUp, title: "Real-Time Analytics", desc: "Track your clicks, conversions, and earnings in real time." },
              { icon: Users, title: "Dedicated Support", desc: "Get priority support from our affiliate team." },
              { icon: Star, title: "Exclusive Promos", desc: "Access special promotions and seasonal campaigns." },
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#1F3A63]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-gray-600 italic max-w-2xl mx-auto">
              "I started promoting Googly Fashion on my fashion blog and earned ₳12,000 in my first month. 
              The platform's conversion rate is amazing and the affiliate dashboard is super easy to use."
            </p>
            <p className="font-semibold text-gray-900 mt-4">— Fatima Rahman, Fashion Blogger</p>
          </div>

          <div className="text-center bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] rounded-xl p-10">
            <h2 className="text-2xl font-bold text-white mb-4">Start Earning Today</h2>
            <p className="text-white/70 mb-6">Join our affiliate program and turn your audience into income.</p>
            <button className="bg-white text-[#1F3A63] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Sign Up as Affiliate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffiliateProgram;
