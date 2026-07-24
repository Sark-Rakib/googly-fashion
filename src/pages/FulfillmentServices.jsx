import { Link } from "react-router-dom";
import { ChevronRight, Package, Warehouse, Truck, Clock, Shield } from "lucide-react";

const FulfillmentServices = () => {
  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F3A63] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Fulfillment Services</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Fulfillment by Googly</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">We store, pack, and deliver — you focus on growing your business</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Warehouse className="w-12 h-12 text-[#1F3A63] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Fulfillment by Googly (FBG)?</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              FBG is our comprehensive fulfillment service where we handle the heavy lifting of your 
              e-commerce business. Simply send your products to our fulfillment centers, and we take care 
              of storage, packing, shipping, and customer service for those orders. It is like having 
              your own logistics team at a fraction of the cost.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Package, title: "Storage", desc: "Secure, climate-controlled storage for your inventory with real-time tracking." },
              { icon: Warehouse, title: "Pick & Pack", desc: "Professional packing ensures products arrive in perfect condition." },
              { icon: Truck, title: "Fast Delivery", desc: "2-3 day delivery across Bangladesh with real-time tracking." },
              { icon: Shield, title: "Customer Support", desc: "We handle returns, refunds, and customer inquiries for FBG orders." },
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

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Fulfillment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { step: "01", icon: Package, title: "Send Products", desc: "Ship your inventory to our fulfillment center." },
              { step: "02", icon: Warehouse, title: "We Store", desc: "We receive, catalog, and store your products safely." },
              { step: "03", icon: Clock, title: "Customer Orders", desc: "When an order comes in, we pick and pack it." },
              { step: "04", icon: Truck, title: "We Deliver", desc: "We ship the order with tracking and handle returns." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-[#1F3A63] rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#EF394E] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { name: "Starter", price: "₳99/mo", storage: "Up to 50 units", pickPack: "₳15/unit", support: "Email support" },
              { name: "Growth", price: "₳249/mo", storage: "Up to 200 units", pickPack: "₳12/unit", support: "Priority support", popular: true },
              { name: "Enterprise", price: "₳Custom", storage: "Unlimited", pickPack: "₳8/unit", support: "24/7 dedicated manager" },
            ].map((tier, i) => (
              <div key={i} className={`relative bg-white rounded-lg border-2 ${tier.popular ? 'border-[#1F3A63]' : 'border-gray-200'} p-6 ${tier.popular ? 'shadow-lg' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#EF394E] text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Recommended
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{tier.name}</h3>
                <div className="text-3xl font-bold text-[#1F3A63] my-4">{tier.price}</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-600"><Clock className="w-4 h-4 text-green-500" />{tier.storage}</li>
                  <li className="flex items-center gap-2 text-sm text-gray-600"><Package className="w-4 h-4 text-green-500" />{tier.pickPack}</li>
                  <li className="flex items-center gap-2 text-sm text-gray-600"><Shield className="w-4 h-4 text-green-500" />{tier.support}</li>
                </ul>
                <button className="w-full py-2 bg-[#1F3A63] text-white rounded-md font-medium hover:bg-[#2a4d7a] transition-colors">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-[#1F3A63] to-[#2a4d7a] rounded-xl p-10">
            <h2 className="text-2xl font-bold text-white mb-4">Get Started with FBG</h2>
            <p className="text-white/70 mb-6">Simplify your operations and delight your customers with fast, reliable fulfillment.</p>
            <button className="bg-white text-[#1F3A63] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Start with FBG
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FulfillmentServices;
