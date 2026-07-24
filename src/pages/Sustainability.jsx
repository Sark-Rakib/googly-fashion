import { Link } from "react-router-dom";
import { ChevronRight, Leaf, Recycle, Heart, Globe, Sun } from "lucide-react";

const Sustainability = () => {
  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Sustainability</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Sustainability</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">Our commitment to a greener fashion future</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Leaf className="w-12 h-12 text-[#1F3A63] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Pledge</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Googly Fashion, we believe that style and sustainability go hand in hand. We are committed 
              to reducing our environmental footprint across every aspect of our business — from the products 
              we sell to the packaging we use. Our goal is to build a fashion ecosystem that is both beautiful 
              and responsible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="w-12 h-12 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-[#1F3A63]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Materials</h3>
              <p className="text-gray-500 leading-relaxed">
                We prioritize eco-friendly fabrics and materials across our collections. From organic cotton 
                to recycled polyester, we work with brands that share our commitment to sustainable sourcing. 
                By 2027, we aim for 60% of all products on our platform to use sustainable materials.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="w-12 h-12 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#1F3A63]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ethical Manufacturing</h3>
              <p className="text-gray-500 leading-relaxed">
                We partner exclusively with manufacturers who uphold fair labor practices, safe working 
                conditions, and fair wages. Every brand on our platform must comply with our Supplier Code 
                of Conduct, which includes regular audits and transparency requirements.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="w-12 h-12 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-[#1F3A63]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Impact</h3>
              <p className="text-gray-500 leading-relaxed">
                We invest in the communities we serve through job creation, skills training programs, and 
                partnerships with local artisans. Our Community Impact Fund supports initiatives that promote 
                education, women's empowerment, and economic development across Bangladesh.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="w-12 h-12 bg-[#1F3A63]/10 rounded-full flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-[#1F3A63]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Future Goals</h3>
              <p className="text-gray-500 leading-relaxed">
                By 2028, we aim to achieve carbon-neutral operations, eliminate single-use plastics from 
                our packaging, and ensure 100% of our brand partners meet our sustainability criteria. We 
                are also exploring a clothing recycling program to reduce textile waste.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-green-700 to-green-600 rounded-xl p-10 text-center">
            <Leaf className="w-10 h-10 text-white/80 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Join Our Green Movement</h2>
            <p className="text-white/70 mb-6">
              Learn more about our sustainability initiatives and how you can be part of the change.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-green-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
