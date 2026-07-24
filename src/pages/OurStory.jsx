import { Link } from "react-router-dom";
import { ChevronRight, Clock, Star, MapPin, ArrowRight } from "lucide-react";

const OurStory = () => {
  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Our Story</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Our Story</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">From vision to reality — the journey of Googly Fashion</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-[#1F3A63]" />
              The Beginning
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Googly Fashion was founded in 2024 in the heart of Cumilla, Bangladesh. What started as a 
                passionate conversation between two friends about the lack of curated online fashion in the 
                country quickly turned into a mission. Armed with a laptop, a small inventory of 50 brands, 
                and an unwavering belief in the power of quality fashion, we launched our platform.
              </p>
              <p>
                Our first office was a modest room in Cumilla, where a team of five worked around the clock 
                to build what would become one of Bangladesh's most promising e-commerce platforms. The early 
                days were challenging — from convincing brands to join an unknown platform to building trust 
                with customers who were skeptical of online shopping.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Timeline</h2>
          <div className="max-w-3xl mx-auto space-y-8 mb-16">
            {[
              { year: "2024", icon: Star, title: "Foundation", desc: "Googly Fashion is founded in Cumilla with 50 brand partners and a team of 5." },
              { year: "2024", icon: Star, title: "First Milestone", desc: "Reached 1,000 registered customers within the first 6 months of operation." },
              { year: "2025", icon: Star, title: "Expansion", desc: "Expanded operations to Dhaka and Chattogram. Partnered with 200+ brands." },
              { year: "2025", icon: Star, title: "Digital Growth", desc: "Launched our mobile app and introduced AI-powered personalized recommendations." },
              { year: "2026", icon: Star, title: "National Reach", desc: "Now serving customers in 64+ districts across Bangladesh with 500+ brand partners." },
            ].map((item, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-[#1F3A63] rounded-full flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gray-200" />
                <span className="inline-block bg-[#1F3A63]/10 text-[#1F3A63] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {item.year}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] rounded-xl p-10 text-center">
            <Clock className="w-10 h-10 text-white/80 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision for the Future</h2>
            <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
              We envision a Bangladesh where every individual has access to quality fashion that reflects 
              their personal style. Our goal is to become the most trusted fashion destination in the country, 
              empowering local brands and creating thousands of jobs in the process. The journey is just beginning.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 bg-white text-[#1F3A63] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Our Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
