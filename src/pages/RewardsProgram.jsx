import { Link } from "react-router-dom";
import { ChevronRight, Award, Star, TrendingUp, Gift, Crown } from "lucide-react";

const RewardsProgram = () => {
  const tiers = [
    {
      name: "Silver", icon: Star, color: "text-gray-500", bg: "bg-gray-100", cardBg: "from-gray-400 to-gray-500",
      points: "0 – 999", benefits: ["1 point per ৳100 spent", "Birthday bonus 50 points", "Exclusive email offers"],
    },
    {
      name: "Gold", icon: Award, color: "text-yellow-600", bg: "bg-yellow-100", cardBg: "from-yellow-500 to-yellow-600",
      points: "1,000 – 4,999", benefits: ["2 points per ৳100 spent", "Birthday bonus 100 points", "Free standard shipping", "Early access to sales"],
    },
    {
      name: "Platinum", icon: Crown, color: "text-purple-600", bg: "bg-purple-100", cardBg: "from-purple-500 to-purple-700",
      points: "5,000+", benefits: ["3 points per ৳100 spent", "Birthday bonus 200 points", "Free express shipping", "Priority customer support", "Exclusive VIP events"],
    },
  ];

  const faqs = [
    { q: "How do I earn points?", a: "You earn 1 point for every ৳100 spent. Higher tiers earn more points per purchase. Bonus points are awarded on your birthday and during special promotions." },
    { q: "How do I redeem my points?", a: "Points can be redeemed at checkout. 100 points = ৳50 discount. Simply select 'Use Rewards Points' during payment." },
    { q: "Do points expire?", a: "Points are valid for 12 months from the date they are earned. Unused points will expire after this period." },
    { q: "Can I combine points with other offers?", a: "Yes, rewards points can be combined with most promotional offers and discount codes for even greater savings." },
  ];

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Rewards Program</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Googly Rewards</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Earn points with every purchase and unlock exclusive benefits</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-[#1F3A63]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Shop</h3>
              <p className="text-gray-500 text-sm">Place orders on Googly Fashion and earn points on every purchase.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#1F3A63]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Earn Points</h3>
              <p className="text-gray-500 text-sm">Collect points based on your tier level. Higher tiers earn more per spend.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-[#1F3A63]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Redeem</h3>
              <p className="text-gray-500 text-sm">Use your points at checkout to get discounts on future orders.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Rewards Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {tiers.map((tier, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`bg-gradient-to-r ${tier.cardBg} p-6 text-center text-white`}>
                  <tier.icon className={`w-12 h-12 mx-auto mb-2 ${i === 0 ? "text-gray-200" : "text-white"}`} />
                  <div className="text-2xl font-bold">{tier.name}</div>
                  <div className="text-white/80 text-sm mt-1">{tier.points} points</div>
                </div>
                <div className="p-5">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Points Value</h2>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center">
              <div className="text-5xl font-bold text-[#1F3A63] mb-2">100</div>
              <div className="text-gray-500 mb-1">points =</div>
              <div className="text-3xl font-bold text-[#EF394E]">৳50</div>
              <p className="text-sm text-gray-400 mt-4">Points are automatically applied at checkout when you choose to redeem them.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Rewards FAQs</h2>
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden group">
                <summary className="px-6 py-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-50">{faq.q}</summary>
                <div className="px-6 py-4 border-t border-gray-100 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] rounded-xl p-10">
            <Crown className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Join Googly Rewards Today</h2>
            <p className="text-white/70 mb-6">Sign up and start earning points on your very first purchase.</p>
            <Link to="/register" className="inline-block bg-[#EF394E] text-white px-10 py-3 rounded-lg font-bold hover:bg-[#d63243] transition-colors">
              Join Now — It's Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RewardsProgram;
