import { Link } from "react-router-dom";
import { ChevronRight, Heart, Shield, Lightbulb, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">About Us</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">About Googly Fashion</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Discover the story behind Bangladesh's emerging fashion destination</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To make quality fashion accessible to every Bangladeshi by providing a seamless online shopping experience, 
              curated collections from local and international brands, and a commitment to customer satisfaction that 
              sets the standard for e-commerce in the country.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2024, Googly Fashion was born from a simple idea: Bangladesh deserved a better online fashion 
                destination. Our founders, passionate about both style and technology, recognized a gap in the market 
                for a platform that combined curated fashion with a world-class shopping experience.
              </p>
              <p>
                Starting with just 50 brands and a small team in Cumilla, we have grown rapidly to become one of 
                the most trusted names in Bangladeshi e-commerce. Our commitment to authenticity, quality, and 
                customer service has earned us the loyalty of thousands of customers across the country.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Heart, title: "Quality", desc: "We never compromise on the quality of products we offer. Every item is vetted to ensure it meets our standards." },
              { icon: Shield, title: "Sustainability", desc: "We are committed to sustainable practices, from eco-friendly packaging to partnering with ethical manufacturers." },
              { icon: Lightbulb, title: "Innovation", desc: "We leverage technology to create a seamless shopping experience and constantly improve our platform." },
              { icon: Users, title: "Customer-Centric", desc: "Our customers are at the heart of everything we do. Their satisfaction drives our decisions." },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-[#1F3A63]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Company Stats</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, number: "500+", label: "Brand Partners" },
              { icon: Users, number: "10K+", label: "Happy Customers" },
              { icon: Heart, number: "5K+", label: "Products Listed" },
              { icon: Shield, number: "64+", label: "Cities Covered" },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
                <stat.icon className="w-8 h-8 text-[#1F3A63] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
